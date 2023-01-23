// 2. Bir dizideki tüm elemanların ortalamasını hesaplayan bir JavaScript fonksiyonu yazın. Test Verisi: console.log(average([1,2,3,4,5])); 3

let dizi = [1, 2, 3, 4, 5];

function average(dizi) {
  let sum = 0;
  dizi.forEach((num) => (sum += num));
  return sum / dizi.length;
}
console.log(average(dizi));
