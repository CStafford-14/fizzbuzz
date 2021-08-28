function process() {
    let x = document.getElementById("input-form").value;
    document.getElementById("error-num").classList.remove("error-active");
    document.getElementById("error-two").classList.remove("error-active");
    if (isNaN(x)) {
        document.getElementById("error-num").classList.add("error-active");
    } else {
        if (x < 3) {
            document.getElementById("error-two").classList.add("error-active");
        } else {
        hidePrompt();
        fizzbuzz(x);
        }
    }
  }

function fizzbuzz(input) {
    let output = "";
    input++;
    for (let i = 1; i < input; i++) {
        if ((i % 3 == 0) && !(i % 5 ==0)) {
            output += "Fizz<br>";
        }
        if (!(i % 3 == 0) && (i % 5 ==0)) {
            output += "Buzz<br>";
        }
        if ((i % 3 == 0) && (i % 5 ==0)) {
            output += "FizzBuzz<br>";
        }
        if (!(i % 3 == 0) && !(i % 5 ==0)) {
            output += [i] + "<br>";
        }
      };
      document.getElementById("output").innerHTML = output;
}

function showPrompt() {
    document.getElementById("input").classList.add("active");
    document.getElementById("wrapper").classList.add("active");
    document.getElementById("redo-button").classList.remove("showButton");
}

function hidePrompt() {
    document.getElementById("input").classList.remove("active");
    document.getElementById("wrapper").classList.remove("active");
    document.getElementById("redo-button").classList.add("showButton");

}

function sleep(ms) {
    let now = Date.now(), end = now + ms;
    while (now < end) { now = Date.now(); }
  };

showPrompt();
document.getElementById("output").innerHTML = "Awaiting Input...";