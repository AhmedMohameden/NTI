var set; 

function change() {
  var userText = document.getElementById("input").value;

  var number = parseInt(document.getElementById("number").value);

  if (isNaN(number) || number <= 0) {
    alert("please enter a valid positive number");
    return;
  }

  document.getElementById("text").innerText = userText;

  document.getElementById("count").innerText = number;

  
  clearInterval(set);

  set = setInterval(function () {
    number--; 
    document.getElementById("count").innerText = number;

    if (number <= 0) {
      clearInterval(set);
      document.getElementById("count").innerText = "Time Up!";
    }
  }, 1000);
}
