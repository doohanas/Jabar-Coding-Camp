// Soal 1

// buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini

const areaOfRectangle = (length, width) => {
  let area;
  return (area = length * width);
};

console.log(areaOfRectangle(60, 5)); // Result: 50

//Soal 2

// Ubahlah code ke dalam arrow function dan object literal es6 yang lebih sederhana

const newFunction = (firstName, lastName) => {
  const person = { firstName, lastName };
  const fullName = `${person.firstName} ${person.lastName}`;
  return fullName;
};

//Driver Code
console.log(newFunction("William", "Imoh"));

// SOAL 3

//Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

const newObject = {
  firstName: "Doohan",
  lastName: "Aditya Saputro",
  address: "Bulak Perwira 2",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = newObject;
console.log(firstName, lastName, address, hobby); // Result: Muhammad Iqbal Mubarok Jalan Ranamanyar playing football

// SOAL 4

// Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];
console.log(combined); // Result: ['Will', 'Chris', 'Sam', 'Holly', 'Gill', 'Brian', 'Noel', 'Maggie']

// SOAL 5

// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth";
const view = "glass";

const sentences = `Lorem ${view} dolor sit amet, consectetur adipiscing elit ${planet}`;
console.log(sentences); // Result: Lorem glass dolor sit amet, consectetur adipiscing elit earth
