import Rx from 'rxjs/Rx';

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
  },
  {
    value: "scala",
    description: "Object-orientented meets functional."
  },
  {
    value: "python",
    description: "A dynamic programming language."
  },
  {
    value: "c",
    description: "A general-purpose, imperative computer programming language."
  },
  {
    value: "c++",
    description: "Provides facilities for low-level memory manipulation."
  },
  {
    value: "ruby",
    description: "a dynamic, reflective, object-oriented, programming language."
  }
];

const results$ = Rx.Observable.of(results);

const searchNotEmpty = (value)=> value.length > 0;

const patternMatch = (search, result)=> result.value.indexOf(search) > -1;

const renderResults = (result)=> {
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
