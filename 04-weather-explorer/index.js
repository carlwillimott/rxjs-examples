const key = '68593c53a1fd11cbabfbdc6d93814221';
const url = 'http://api.openweathermap.org/data/2.5/weather';

const queryAPI = (url, params) => {
  let query = '';
  Object.keys(params).forEach((key, index) => {
    query += `&${key}=${params[key]}`;
  })
  let built = `${url}?appid=${key}${query}`;
  console.log(built)
  return Rx.Observable.fromPromise(
	  fetch(built).then((result) => result.json())
  );
}

// const results = queryAPI({'q': 'london'});
// results
//   .subscribe(
//     (x)=> console.log(x),
//     (err)=> console.log("error " + err)
//   );


const segments = [
	{
		'id': 1,
		'text': 'One week',
		'seconds': 604800
  	},
	{
		'id': 2,
		'text': 'One month',
		'seconds': 2592000
	},
	{
		'id': 3,
		'text': 'One year',
		'seconds': 31536000
	},
	{
		'id': 4,
		'text': 'Two years',
		'seconds': 63072000
	},
	{
		'id': 5,
		'text': 'Five years',
		'seconds': 157680000
	}
];

const getSegmentData = (id, type) => {
    for (let i = 0; i < segments.length; i++) {
        if (segments[i].id == id) {
            return type === 'text' ? segments[i].text : segments[i].second
        }
    }
}

const range = document.querySelector('#range');
const feedback = document.querySelector('#feedback');

range$ = Rx.Observable.fromEvent(range, 'change')
	.map(event => event.target.value)
	.startWith(range.value)
	.subscribe(id => feedback.innerHTML = getSegmentData(id, 'text'));


// const other = 'http://api.openweathermap.org/data/2.5/history/city';
//
//   const historical = queryAPI(other, {
// 	  'id': 2885679,
// 	  'start': 1369728000,
// 	  'end': 1369789200
//   });
//
//   historical
//     .subscribe(
//       (x) => console.log(x),
//       (err) => console.log("error " + err)
//     );
