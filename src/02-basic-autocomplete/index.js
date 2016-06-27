import Rx from 'rxjs/Rx';
import {searchNotEmpty, patternMatch, results} from './helpers'

const search = document.querySelector('#search');
const output = document.querySelector('#output');

const results$ = Rx.Observable.of(results);

const renderResults = (result) => {
  let child = `<div class="row">
    <div class="title">${result.value}</div>
    <div class="description">${result.description}</div>
  </div>`;
  output.insertAdjacentHTML('beforeend', child);
};

const search$ = Rx.Observable.fromEvent(search, 'input')
  .map(event => event.target.value)
  .do((x)=> output.innerHTML = "")
  .filter((x)=> searchNotEmpty(x));

const searchResults$ = search$
  .map((x)=> results$.value.filter((y)=> patternMatch(x, y)))
  .subscribe((x)=> x.map((x)=> renderResults(x)));
