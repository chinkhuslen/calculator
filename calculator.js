const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("multiply");
const eq = document.getElementById("equal");
const divi = document.getElementById("divide");
const rst = document.getElementById("clear-all");
const disp = document.getElementById("display");
let preCom = "";
let curCom = "";
let curTotal = "";
let preTotal = "";

function myCalc(btn) {
  if (btn.id == "") {
    if (preCom == "") {
      preTotal = numberAppearance(btn, preTotal);
    } else {
      curTotal = numberAppearance(btn, curTotal);
    }
    display();
  } else {
    if (btn.innerText != "=") {
      if (preCom == "") {
        preCom = btn.innerText;
      } else {
        curCom = btn.innerText;
        compute(btn);
      }
    } else {
      if (preCom != "") {
        compute(btn);
      }
    }
  }
}

function compute(btn) {
  switch (preCom) {
    case "+":
      curTotal = parseFloat(preTotal) + parseFloat(curTotal);
      break;
    case "-":
      curTotal = parseFloat(preTotal) - parseFloat(curTotal);
      break;
    case "x":
      curTotal = parseFloat(preTotal) * parseFloat(curTotal);
      break;
    case "/":
      curTotal = parseFloat(preTotal) / parseFloat(curTotal);
      break;
  }
  preTotal = curTotal;
  if (btn == eq) {
    curCom = "";
    preCom = "";
    curTotal = "";
  }
  display();
}
function numberAppearance(btn, number) {
  number += btn.innerText;
  return number;
}
function display() {
  if (curTotal == "") {
    disp.innerText = preTotal;
  } else {
    disp.innerText = curTotal;
  }
}
function reset() {
  preCom = "";
  curCom = "";
  preTotal = "";
  curTotal = "";
  disp.innerText = 0;
}
rst.addEventListener("click", reset);
