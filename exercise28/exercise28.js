let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
console.log(meyveler.length);
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);
console.log(meyveler.includes("Elma"));
console.log(meyveler.push("Kiraz"));
console.log(meyveler);
let meyve1 = meyveler.splice(meyveler.length - 2, 2);
console.log(meyveler);

let ogr1 = ["Yiğit", "Bilgi", 2010, [70, 60, 80]];
let ogr2 = ["Ada", "Bilgi", 2012, [70, 60, 80]];
let ogr3 = ["Ahmet", "Bilgi", 2009, [70, 60, 80]];

let ogr = [ogr1, ogr2, ogr3];

let Yiğit_yas = new Date().getFullYear() - ogr[0][2];
let Ada_yas = new Date().getFullYear() - ogr[1][2];
let Ahmet_yas = new Date().getFullYear() - ogr[2][2];

let Yigit_not = (ogr[0][3][0] + ogr[0][3][1] + ogr[0][3][2]) / 3;
let Ada_not = (ogr[1][3][0] + ogr[1][3][1] + ogr[1][3][2]) / 3;
let Ahmet_not = (ogr[2][3][0] + ogr[2][3][1] + ogr[2][3][2]) / 3;
