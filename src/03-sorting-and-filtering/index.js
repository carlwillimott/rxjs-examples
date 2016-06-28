import Rx from 'rxjs/Rx';
import {identifier, checkCriteria, numberWithCommas, sortCountry, countries} from './helpers'

const filter = document.querySelector('#filter');
const order = document.querySelector('#order');

const output = document.querySelector('#output');

const filter$ = Rx.Observable.fromEvent(filter, 'change')
  .map((x)=> identifier('filter', x.target.value));

const order$ = Rx.Observable.fromEvent(order, 'change')
  .map((x)=> identifier('order', x.target.value))
  .startWith(identifier('order', 'a-z'));

const renderResults = (result) => {
  let child = `<div class="row">
    <div class="title">${result.country}</div>
    <div class="capital">Capital: ${result.capital}</div>
    <div class="population">Population: ${numberWithCommas(result.population)}</div>
    <div class="flag"><img src="${result.flag}" /></div>
  </div>`;
  output.insertAdjacentHTML('beforeend', child);
};

const filterOrder = (options, countries) => {

  let sorted = sortCountry(options.order, countries);
  let countres$ = Rx.Observable.from(sorted);

  countres$.filter((country) => checkCriteria(options, country))
    .subscribe((country) => renderResults(country));
};

const countriesFilterOrder$ = Rx.Observable.combineLatest(
  filter$,
  order$,
  (filter, order) => ({filter: filter.value, order: order.value}))
  .do((x) => output.innerHTML = "")
  .map((x) => filterOrder(x, countries))
  .subscribe();
