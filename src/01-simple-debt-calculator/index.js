import Rx from 'rxjs/Rx';
import {calculateDebt} from './helpers'

const amount = document.querySelector('#amount');
const rate = document.querySelector('#rate');
const years = document.querySelector('#years');
const result = document.querySelector('#result');

// Helper function to get a stream of values from each input.
const inputStreamGenerator = (element) => {
  return Rx.Observable.fromEvent(element, 'input')
    .map(event => event.target.value)
    .startWith(element.value);
};

const amount$ = inputStreamGenerator(amount);
const rate$ = inputStreamGenerator(rate);
const years$ = inputStreamGenerator(years);

// Merge the latest values from each stream and update the output.
Rx.Observable.combineLatest(
  amount$,
  rate$,
  years$,
  (amount, rate, years) => calculateDebt(amount, rate, years)
).subscribe((x)=> result.innerHTML = `Total debt: £${x}`);
