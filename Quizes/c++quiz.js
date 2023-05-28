
const modalBg = document.querySelector(".modal-bg");

// modalBg.addEventListener("click", () => modalBg.classList.add("bg-active"));


document.querySelector('.modal-score').addEventListener('click', ()=> {
    document.querySelector('.modal-score').classList.add('modal-bg')
})



function multianswer() {
    var score = 0;
  
    if (document.getElementById("ans1").value == "C++") {
      score++;
    }
    if (document.getElementById("ans2").value == "*") {
      score++;
    }
    if (
      document.getElementById("ans3").value == "using namespace std;"
    ) {
      score++;
    }
    if (document.getElementById("ans4").value == "int") {
      score++;
    }
    if (document.getElementById("ans5").value == "comma") {
      score++;
    }

  
    if (score == "") {
      document.getElementById("zero").innerHTML = 0 + " / 5";
    } else {
      document.getElementById("zero").innerHTML = score + " / 5";
    }
  
    //alert("Your Score is: " + score + "/20");
    const element = document.querySelector(".modal-bg");
    element.classList.remove("modal-bg");
  }

  