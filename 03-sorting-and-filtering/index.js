const filter = document.querySelector('#filter');
const order = document.querySelector('#order');

const filter$ = Rx.Observable.fromEvent(filter, 'change')
  .map((x)=> x.target.value)
  .subscribe((x)=> console.log(x));

const order$ = Rx.Observable.fromEvent(order, 'change')
  .map((x)=> x.target.value)
  .startWith('a-z')
  .subscribe((x)=> console.log(x));
