const audio = new Audio("win.mp3");
const bip = new Audio("bip.mp3");
const pip = new Audio("pip.mp3");

const spanR = document.querySelector(".red__span");
const spanG = document.querySelector(".green__span");
const spanB = document.querySelector(".blue__span");

const inputR = document.querySelector("#red__input");
const inputG = document.querySelector("#green__input");
const inputB = document.querySelector("#blue__input");

const myBox = document.querySelector(".box");

const putC = document.querySelector(".putC");

const codeText = document.querySelector("#c-in");
const codeStart = document.querySelector("#c-start");

const CC = document.querySelector(".c-c");
const getC = document.querySelector(".getC");
let color = ``;
let colorPut = ``;

let isWin = false;
/////////////////////
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
///////////////////
function areArraysEqualWithTolerance(array1, array2, tolerance) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (Math.abs(array1[i] - array2[i]) > tolerance) {
      return false;
    }
  }

  return true;
}
///////////////////
inputR.oninput = () => {
  let value = inputR.value;
  spanR.textContent = Math.trunc((value * 100) / inputR.max) + "%";
  spanR.style.left = (value * 100) / inputR.max + "%";
  spanR.classList.add("show");
};
inputR.onblur = () => {
  spanR.classList.remove("show");
};
inputG.oninput = () => {
  let value = inputG.value;
  spanG.textContent = Math.trunc((value * 100) / inputG.max) + "%";
  spanG.style.left = (value * 100) / inputG.max + "%";
  spanG.classList.add("show");
};
inputG.onblur = () => {
  spanG.classList.remove("show");
};
inputB.oninput = () => {
  let value = inputB.value;
  spanB.textContent = Math.trunc((value * 100) / inputB.max) + "%";
  spanB.style.left = (value * 100) / inputB.max + "%";
  spanB.classList.add("show");
};
inputB.onblur = () => {
  spanB.classList.remove("show");
};
function func() {
  pip.play();
  codeText.textContent = `rgb(${Number(inputR.value)},${Number(
    inputG.value
  )},${Number(inputB.value)})`;
  colorPut = `rgb(${Number(inputR.value)},${Number(inputG.value)},${Number(
    inputB.value
  )})`;
  putC.style.backgroundColor = colorPut;

  let qwe = color.slice(4, -1).split(", ").map(Number);
  let asd = getComputedStyle(putC)
    .backgroundColor.slice(4, -1)
    .split(", ")
    .map(Number);
  isWin = areArraysEqualWithTolerance(qwe, asd, 7);
  if (isWin) {
    win.style.transform = "scale(1)";
    audio.play();
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", func);
document.addEventListener("DOMContentLoaded", () => {
  color = getRandomColor();
  getC.style.backgroundColor = color;
  codeStart.textContent = color;
});

myBox.addEventListener("input", func);

CC.addEventListener("click", () => {
  bip.play();
  codeText.classList.toggle("codeB");
  codeText.classList.toggle("codeW");
  codeStart.classList.toggle("codeB");
  codeStart.classList.toggle("codeW");
});
