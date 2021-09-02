// soal 1

// pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi

// nilai >= 85 indeksnya A
// nilai >= 75 dan nilai < 85 indeksnya B
// nilai >= 65 dan nilai < 75 indeksnya c
// nilai >= 55 dan nilai < 65 indeksnya D
// nilai < 55 indeksnya E

//OUTPUT: A

var nilai = 85;

if (nilai > 0 && nilai < 55) {
  return console.log("E");
} else if (nilai >= 55 && nilai < 65) {
  console.log("D");
} else if (nilai >= 65 && nilai < 75) {
  console.log("C");
} else if (nilai >= 75 && nilai < 85) {
  console.log("B");
} else {
  console.log("A");
}

// soal 2

// ganti tanggal ,bulan, dan tahun sesuai dengan tanggal lahir anda dan buatlah switch case pada bulan, lalu muncul kan string nya dengan output seperti ini 22 Juli 2020 (isi di sesuaikan dengan tanggal lahir masing-masing)

//OUTPUT: 19 September 1997 (string)

var tanggal = 19;
var bulan = 9;
var tahun = 1997;

switch (bulan) {
    case 1: { console.log(tanggal.toString() + " Januari " + tahun.toString()); break; }
    case 2: { console.log(tanggal.toString() + " Februari " + tahun.toString()); break; }
    case 3: { console.log(tanggal.toString() + " Maret " + tahun.toString()); break; }
    case 4: { console.log(tanggal.toString() + " April " + tahun.toString()); break; }
    case 5: { console.log(tanggal.toString() + " Mei " + tahun.toString()); break; }
    case 6: { console.log(tanggal.toString() + " Juni "+ tahun.toString()); break; }
    case 7: { console.log(tanggal.toString() + " Juli " + tahun.toString()); break; }
    case 8: { console.log(tanggal.toString() + " Agustus " + tahun.toString()); break; }
    case 9: { console.log(tanggal.toString() + " September " + tahun.toString()); break; }
    case 10: { console.log(tanggal.toString() + " Oktober " + tahun.toString()); break; }
    case 11: { console.log(tanggal.toString() + " November " + tahun.toString()); break; }
    case 12: { console.log(tanggal.toString() + " Desember " + tahun.toString()); break; }
    default: { console.log("Not Found"); }
}

// soal 3

// Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).

//OUTPUT: n = 7
// #
// ##
// ###
// ####
// #####
// ######
// #######

var hasil = "";
var n = 7;
for(var i = 0; i < n; i++) {
    hasil += "#";
    console.log(hasil);
}

// soal 4

//berilah suatu nilai m dengan tipe integer, dan buatlah pengulangan dari 1 sampai dengan m, dan berikan output sebagai berikut.

// OUTPUT: 
// 1 - I love programming
// 2 - I love Javascript
// 3 - I love VueJS
// ===
// 4 - I love programming
// 5 - I love Javascript
// 6 - I love VueJS
// ======
// 7 - I love programming
// 8 - I love Javascript
// 9 - I love VueJS
// =========
// 10 - I love programming

var m = 10;
var nomor = 1;
var samadengan = "";
var programming = " - I love programming";
var javascript = " - I love Javascript";
var vue = " - I love VueJS";
var hasil = "";

for (var i = 1; i <= m; i++) {
  if (nomor > 3) {
    nomor = 1;
  }

  switch(nomor) {
      case 1: { hasil += i + programming + "\n"; break; };
      case 2: { hasil += i + javascript + "\n"; break; };
      case 3: { samadengan += "==="; hasil += i + vue + "\n" + samadengan + "\n"; break; };
  }
  nomor++;
}

console.log(hasil);