export const identifier = (type, value) => ({type, value});

export const checkCriteria = (options, country) => (
  country.continent === options.filter
);

// http://stackoverflow.com/a/2901298
export const numberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// http://stackoverflow.com/a/8175221
function sortByKey(array, key) {
	return array.sort(function(a, b) {
		var x = a[key]; var y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

export const sortCountry = (order, countries) => {
	switch(order) {
		case 'a-z':
			return sortByKey(countries, 'country');
		case 'z-a':
			return sortByKey(countries, 'country').reverse();
		case 'large':
			return sortByKey(countries, 'population').reverse();
		case 'small':
			return sortByKey(countries, 'population');
		default:
			return countries;
	}
}

export const countries = [
  {
    country: "United Kingdom",
    continent: "europe",
    flag: "flags/1465051433_United-Kingdom_flat.png",
    capital: "London",
    population: 64100000
  },
  {
    country: "France",
    continent: "europe",
    flag: "flags/1465051447_France_flat.png",
    capital: "Paris",
    population: 66300000
  },
  {
    country: "Germany",
    continent: "europe",
    flag: "flags/1465051462_Germany_flat.png",
    capital: "Berlin",
    population: 80620000
  },
  {
    country: "United States of America",
    continent: "north-america",
    flag: "flags/1465051472_United-States_flat.png",
    capital: "Washington D.C.",
    population: 318900000
  },
  {
    country: "Italy",
    continent: "europe",
    flag: "flags/1465051483_Italy_flat.png",
    capital: "Rome",
    population: 59830000
  },
  {
    country: "China",
    continent: "asia",
    flag: "flags/1465051492_China_flat.png",
    capital: "Beijing",
    population: 1357000000
  },
  {
    country: "Canada",
    continent: "north-america",
    flag: "flags/1465051500_Canada_flat.png",
    capital: "Ottawa",
    population: 35160000
  },
  {
    country: "South Korea",
    continent: "asia",
    flag: "flags/1465051555_South-Korea_flat.png",
    capital: "Seoul",
    population: 50220000
  }
];
