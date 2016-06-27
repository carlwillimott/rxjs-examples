export const searchNotEmpty = (value) => value.length > 0;

export const patternMatch = (search, result) => result.value.indexOf(search) > -1;

export const results = [
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
