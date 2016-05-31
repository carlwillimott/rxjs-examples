const search = document.querySelector('#search');
const result = document.querySelector('#result');

const results = [
  {
    path: "#/javascript",
    value: "javascript"
  },
  {
    path: "#/php",
    value: "php"
  },
  {
    path: "#/elm",
    value: "elm"
  },
];

const results$ = Rx.Observable.of(results);

const search$ = Rx.Observable.fromEvent(search, 'input')
  .map(event => event.target.value)
  .filter((x)=> x.length > 0);

const searchResults$ = search$.map(
  (x)=> results$.value.filter((y)=> y.value.indexOf(x) > -1)
).subscribe((x)=> x.map((x)=> console.log(x.value)));
