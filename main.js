// the empty array
let library = [];

console.log(library);

// updated the empty array using push method
library.push(
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    available: true,
  },
  {
    title: "To kill a mockingbird",
    author: "Harper lee",
    yearPublished: 1960,
    available: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    available: false,
  },
  {
    title: "Pride and prejudice",
    author: "Jabe Austen",
    yearPublished: 1813,
    available: true,
  }
);
console.log(library);
// updated the object at in 2 of library
library[2].available = true;

// console.log(library);
console.log(library);
// removed a book from the library using the splice method

library.splice(3, 1);
console.log(library);

// let checks = Object.values(library).includes("The Great Gatsby");
// let checks = library.title.includes("The Great Gatsby");

// usin the includes method check for a book with a given title
let checks = library.some((name) => name.title === "The Great Gatsby");
// let checks = library.includes("The Great Gatsby");
console.log(checks);

// updated the availabilty of a book in the library

library[0].available = false;
console.log(library);

// removed the first book in the libary
library.shift();
console.log(library);
// added a new book object to the array at index 0
library.unshift({
  title: "The catcher in the Rye",
  author: "J.D Salinger",
  yearPublished: 1951,
  available: true,
});

console.log(library);

// mapped through my library to get all book titles in a single string and separated them with a comma using the join method
let titleName = library.map((names) => names.title).join(", ");
console.log(titleName);

// introduced a new array to return only the last two books in the library using the slice method
let newArrivals = library.slice(1);
console.log(newArrivals);
