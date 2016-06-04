const filter = document.querySelector('#filter');
const order = document.querySelector('#order');

const = countries = [
  {
    country: "United Kingdom",
    continent: "europe",
    flag: "flags/1465051433_United-Kingdom_flat.png",
    capital: "London",
    population: 64100000
  }
];

const filter$ = Rx.Observable.fromEvent(filter, 'change')
  .map((x)=> x.target.value)
  .subscribe((x)=> console.log(x));

const order$ = Rx.Observable.fromEvent(order, 'change')
  .map((x)=> x.target.value)
  .startWith('a-z')
  .subscribe((x)=> console.log(x));

const countries$ = Rx.Observable.of(countries);

const countriesFilterOrder$ = null;
