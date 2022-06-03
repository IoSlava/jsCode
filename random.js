function print(text) {
  console.log(text);
  return true;
}


function Myrandom(min, max) {
  let length = max - min + 1;
  let k = length / 10;
  
  return Math.floor(min + Math.random() * 10 * k);
}

for (let i = 0; i < 50; i++) {
  print(Myrandom(-100, 5));
}




