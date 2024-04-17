let myNum = Number(prompt(`ჩაიფიქრე რიცხვი 1-დან 6-ის ჩათვლით`));
let firstNum = Math.floor(Math.random() * 6) + 1;
let secondNum = Math.floor(Math.random() * 6) + 1;
function duel() {
  if (firstNum === myNum) {
    alert(`მოიგე`);
  } else if (firstNum === secondNum) {
    alert(`წააგე`);
  } else {
    alert(`ფრე, სცადე თავიდან`);
  }
}
duel();
console.log(firstNum, secondNum);
console.log(myNum);
