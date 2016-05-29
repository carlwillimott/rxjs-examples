const amount = document.querySelector('#amount');
const rate = document.querySelector('#rate');
const years = document.querySelector('#years');
const result = document.querySelector('#result');

const amount$ = Rx.Observable.fromEvent(amount, 'input')
  .map(event => event.target.value)
  .startWith(amount.value);

const rate$ = Rx.Observable.fromEvent(rate, 'input')
  .map(event => event.target.value)
  .startWith(rate.value);

const years$ = Rx.Observable.fromEvent(years, 'input')
  .map(event => event.target.value)
  .startWith(years.value);

Rx.Observable.combineLatest(
  amount$,
  rate$,
  years$,
  (amount, rate, years) => (parseInt(amount) + (amount / 100 * rate) * years)
).subscribe((x) => result.innerHTML = `Total debt: £${x}`);
