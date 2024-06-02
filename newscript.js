let sc1 = document.getElementById("msg1");
let sc2 = document.getElementById("msg2");
let b = document.getElementsByClassName("col");
let c = [];
let d = 0;
let num1 = 0;
let num2 = 0;
let e = 1;
let calc = 0;
let count = 1;
let str1;

function calculation(value) {
  if (value == "C") {
    sc1.innerHTML = "Enter 1st Number : ";
    sc2.innerHTML = "0";
    c.length = 0;
    d = 0;
    num1 = 0;
    num2 = 0;
    e = 1;
    calc = 0;
    count = 1;
    str1;
  }
  if (d >= 0) {
    if (count < 3) {
      if (value == "CE") {
        d--;
        d < 0 ? (d = 0) : console.log("ok");
        c[d] = "";
        str1 = c.join("");
        sc2.innerHTML = str1;
      }
      if ((value >= 0 || value <= 9 || value == ".") && d < 8) {
        c[d] = value;
        d++;
        str1 = c.join("");
        sc2.innerHTML = str1;
      }
      if (value == "=") {
        e++;
        if (e == 2) {
          num1 = c.join("");
          c.length = 0;
          d = 0;
          sc1.innerHTML = "Enter 2nd Number : ";
          sc2.innerHTML = 0;

          count++;
        } else if (e == 3) {
          num2 = c.join("");
          c.length = 0;
          d = 0;
          e = 0;
          sc1.innerHTML = "Chose an Operator :";
          sc2.innerHTML = "";

          count++;
        }
      }
    }
    if (num1 != "" && num2 != "" && value == "+") {
      calc = Number(num1) + Number(num2);
      sc1.innerHTML = "The Answer is : ";
      sc2.innerHTML = calc;
      num1 = 0;
      num2 = 0;
    }
    if (num1 != "" && num2 != "" && value == "-") {
      calc = Number(num1) - Number(num2);
      sc1.innerHTML = "The Answer is : ";
      sc2.innerHTML = calc;
      num1 = 0;
      num2 = 0;
    }
    if (num1 != "" && num2 != "" && value == "*") {
      calc = Number(num1) * Number(num2);
      sc1.innerHTML = "The Answer is : ";
      sc2.innerHTML = calc;
      num1 = 0;
      num2 = 0;
    }
    if (num1 != "" && num2 != "" && value == "/") {
      calc = Number(num1) / Number(num2);
      sc1.innerHTML = "The Answer is : ";
      sc2.innerHTML = calc;
      num1 = 0;
      num2 = 0;
    }
    if (num1 != "" && value == "Sq") {
      calc = Number(num1) * Number(num1);
      sc1.innerHTML = "The Answer is : ";
      sc2.innerHTML = calc;
      num1 = 0;
      num2 = 0;
    }
  }
}
