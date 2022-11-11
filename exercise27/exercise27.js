let url = "https://www.sadıkturan.com/";
let kursAdi = "Komple web geliştirme kursu";

console.log(url.length);
console.log(kursAdi.split(" ").length);
console.log(url.startsWith("https"));
console.log(kursAdi.includes("eğitimi"));

let url1 = url + kursAdi.toLowerCase().replaceAll(" ", "-");
console.log(url1);
