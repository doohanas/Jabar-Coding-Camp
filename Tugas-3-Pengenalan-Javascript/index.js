// Soal 1

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var ketiga = pertama.substring(0, 4) + pertama.substring(11, 19);
var keempat = kedua.substring(0, 7) + kedua.substr(7, 11).toUpperCase();

var kelima = ketiga.concat(keempat);

console.log(kelima); // Result: "saya senang belajar JAVASCRIPT"
console.log(typeof kelima); // Result: string

// Soal 2

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var operasiHitung = (parseInt(kataPertama) - parseInt(kataKedua) - parseInt(kataKetiga)) * parseInt(kataKeempat);
console.log(operasiHitung); // Result: 24
console.log(typeof operasiHitung); // Result: Number

// Soal 3

var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3); //Result: "wah"
var kataKedua = kalimat.substring(4, 14); //Result:  "javascript"
var kataKetiga = kalimat.substring(15, 18); //Result: "itu"
var kataKeempat = kalimat.substring(19, 24); //Result: "keren"
var kataKelima = kalimat.substring(25, 31); //Result: "sekali"

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);
