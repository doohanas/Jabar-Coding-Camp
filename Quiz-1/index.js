// Soal 1

// Judul : Function Penghitung Jumlah Kata

function jumlah_kata(words) {
  return words.split(" ").filter(function (doubleSpace) {
    return doubleSpace != "";
  }).length;
}
console.log(jumlah_kata(" Halo    nama saya Muhammad Iqbal Mubarok")); //Result 6