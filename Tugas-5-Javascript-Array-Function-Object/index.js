// SOAL 1

// urutkan array dan tampilkan data seperti output di bawah ini (dengan menggunakan loop):

// OUTPUT :
// 1. Tokek
// 2. Komodo
// 3. Cicak
// 4. Ular
// 5. Buaya

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

var animalList = daftarHewan.sort();

console.log("JAWABAN SOAL 1: ");
for (var i = 0; i < animalList.length; i++) {
  console.log(daftarHewan[i]);
}

//SOAL 2

//Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: "Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!"

//OUTPUT : "Nama saya Doohan, umur saya 23 tahun, alamat saya di Bekasi, dan saya punya hobby yaitu Reading a book"

var data = {
  name: "Doohan",
  age: 23,
  address: "Bekasi",
  hobby: "Reading a book",
};

function introduce(data) {
  return (
    "Nama saya " +
    [data.name] +
    ", umur saya " +
    [data.age] +
    " tahun, alamat saya di " +
    [data.address] +
    ", dan saya punya hobby yaitu " +
    [data.hobby]
  );
}

var introduction = introduce(data);
console.log("JAWABAN SOAL 2 : " + introduction);

//SOAL 3

//Tulislah sebuah function dengan nama hitung_huruf_vokal() yang menerima parameter sebuah string, kemudian memproses tersebut sehingga menghasilkan total jumlah huruf vokal dalam string tersebut.

//OUTPUT: "jumlah huruf vokal dari input "WHATEVER" = 3"

function hitung_huruf_vokal(sentences) {
  var vowels = ["a", "i", "u", "e", "o"];
  var count = 0;

  for (var letter of sentences.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

var sumVowels = hitung_huruf_vokal("WHATEVER");
console.log(
  "JAWABAN SOAL NOMOR 3:" + " Jumlah Huruf Vokal adalah " + sumVowels
); //Result: 3

//SOAL 4
//Buatlah sebuah function dengan nama hitung() yang menerima parameter sebuah integer dan mengembalikan nilai sebuah integer, dengan contoh input dan otput sebagai berikut.

//OUTPUT:
// console.log( hitung(0) ) // -2
// console.log( hitung(1) ) // 0
// console.log( hitung(2) ) // 2
// console.log( hitung(3) ) // 4
// console.log( hitung(5) ) // 8

function hitung(n) {
  return n + (n - 2);
}

var calculate = hitung(5);
console.log("JAWABAN SOAL NOMOR 4: " + calculate); // Result: 8
