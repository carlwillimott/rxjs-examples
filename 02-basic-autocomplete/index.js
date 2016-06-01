const search = document.querySelector('#search');
const output = document.querySelector('#output');

const results = [
  {
    value: "javascript",
    description: "A versatile programming language."
  },
  {
    value: "php",
    description: "A popular server-side language."
  },
  {
    value: "elm",
    description: "A functional language."
  }
];

const results$ = Rx.Observable.of(results);

const searchNotEmpty = (value)=> value.length > 0;

const patternMatch = (search, result)=> result.value.indexOf(search) > -1;

const renderResults = (result)=> {
  let child = `<div>
    <div>${result.value}</div>
    <div><small>${result.description}</small></div>
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
