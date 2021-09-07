var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

// Tulis code untuk memanggil function readBooks di sini
const readBook1 = () => { readBooks(10000, books[0], readBook2); };
const readBook2 =  sisaWaktu => { readBooks(sisaWaktu, books[1], readBook3);  }
const readBook3 =  sisaWaktu => { readBooks(sisaWaktu, books[2], readBook4);  }
const readBook4 =  sisaWaktu => { readBooks(sisaWaktu, books[3], remainingTime);  }
const remainingTime =  sisaWaktu => { sisaWaktu };

readBook1();