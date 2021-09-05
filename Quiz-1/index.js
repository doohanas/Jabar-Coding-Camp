// Soal 1
// Judul : Function Penghitung Jumlah Kata

function jumlah_kata(words) {
  return words.split(" ").filter(function (doubleSpace) {
    return doubleSpace != "";
  }).length;
}
console.log(jumlah_kata(" Halo    nama saya Muhammad Iqbal Mubarok")); //Result 6

// Soal 2
// Judul: Function Penghasil Tanggal Hari Esok


function next_date(year, month, day) {
  var date = new Date(year, month, day);

  var nextDate = new Date(date);
  nextDate.setDate(date.getDate());
  nextDate.setDate(date.getMonth());

  return nextDate;
}

console.log((next_date(2020, 1, 5)));