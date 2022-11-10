let sayı = 15;

if (sayı > 10 && sayı < 50) {
  console.log("sayı 10 ile 50 arasında");
}

if (sayı % 2 == 1 && sayı > 0) {
  console.log("sayı pozitif ve tek sayı");
}

let x, y, z;
x = 5;
y = 10;
z = 1;

if (x > y && x > z) {
  console.log("x en buyuk");
  if (y > z) {
    console.log("y  ortanca z en kücük");
  } else {
    console.log("z  ortanca y en kücük");
  }
} else if (y > x && y > z) {
  console.log("y en buyuk");
  if (x > z) {
    console.log("x  ortanca z en kücük");
  } else {
    console.log("z  ortanca x en kücük");
  }
} else {
  console.log("z en buyuk");
  if (y > x) {
    console.log("y  ortanca x en kücük");
  } else {
    console.log("x  ortanca y en kücük");
  }
}

let vize1 = 50;
let vize2 = 20;
let final = 80;

let ort = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;

if (final > 50 && ort > 50) {
  console.log("gectiniz");
} else {
  console.log("kaldınız");
}
