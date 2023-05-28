function switchchar() {
  function shuffle(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  }
  var array = [
    "/mainm/chr_2.png",
    "/mainm/chr_3.png",
    "/mainm/chr_4.png",
    "/mainm/chr_5.png",
    "/mainm/chr_7.png",
    "/mainm/chr_8.png",
  ];

  var array2 = [
    "/prof/Prof2.png",
    "/prof/Prof3.png",
    "/prof/Prof4.png",
    "/prof/Prof5.png",
    "/prof/Prof6.png",
  ];

  var maincharacter = document.getElementById("mainchar");
  var profcharacter = document.getElementById("profchar");

  const result = shuffle(array);
  const result2 = shuffle(array2);

  maincharacter.src = result;

  profcharacter.src = result2;

}



var btndialog = document.getElementById("btn-click-next");
var dialogtext = document.getElementById("messagebox");
const headertitle = document.getElementById("headedr-title");
const paragraphElement = document.getElementById('paragraph');




var clickTracker = {
  count: 0,
  
  getMessage: function () {
    var message;

    switch (this.count) {
      case 1:

        message = "Professor: Hello there! Of course, It would be my pleasure to help you. C++ is a powerful programming language. What would you like to know about it?";
        break;

      case 2:
        message = "Student: Well, what exactly is C++ and why is it important?";
        break;

      case 3:
        message = "Professor: C++ is widely used in various domain such as game development, system programming, and even high-Performance applications. Learning C++ will give you a strong foundation in programming.";
        break;

        case 4:
          message = "Student: That sounds good! How do I write and execute a simple C++ program?";
          break;
        case 5:
            message = "Professor: To write a C++ program, you will need a text editor. Once you've written the code, you will need a compiler to convert it into machine-readable instructions.";
            break;
        case 6:
              message = "Student: What is the basic syntax for C++?";
      
              break;   
        case 7:

           message = `Professor: <br> #include <iostream> <br> using namespace std;  <br>  <br>  int main() {  <br>  cout << "Hello World!";  <br> return 0;  <br>  };`

        break;

        case 8:
            message = "Professor: I'll break up the syntax so that you can understand it better. the #include <iostream> is a header file library. The using namespace std means that we can use names for objects and variables from the standard library. This two always appear in your program. The int main() is what we call a function. Any code inside the two curly brackets {} will be executed. ";

        break;  

        case 9:
          message = "Professor: To declare multiple variables of the same type, you will need to use a comma-separated list. All variables must be identified with unique names. Examples for each data types:";

        break;

          case 10:
            message =  `Professor: int - stores integers (whole numbers), without decimals, such as 123 or -123 <br> <br>
            double - stores floating point numbers, with decimals, such as 19.99 or -19.99 <br><br>
            char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes <br><br>
            string - stores text, such as "Hello World". String values are surrounded by double quotes <br><br>
            bool - stores values with two states: true or false;`
          break;



          case 11:

          message = ` Professor: Example <br>
          int myNum = 5; // Integer (whole number without decimals) <br>
          double myFloatNum = 5.99;   // Floating point number (with decimals) <br>
          char myLetter = 'D';        // Character <br>
          string myText = "Hello";    // String (text) <br>
          bool myBoolean = true;      // Boolean (true or false)
          
          
          `
          
          break;

          case 12:
            message = "Professor: To declare multiple variables of the same type, you will need to use a comma-separated list. All variables must be identified with unique names."


          break;
            

          case 13:
            message = "Student: Oh, there are a lot of data types in C++. Can I ask one more question?"


          break;

          case 14:
            message = "Professor: Of course! As I said earlier, It is my pleasure to help you so throw me more of your questions."

          break;

          case 15:
            message = "Student: Thank you professor! My next question is how can I perform operations in C++?"

          break;

          case 16:
            message = "Professor: C++ provides various operators. There are groups of operators. Arithmetic, Assignment, Comparison, and Logical."

          break;

          case 17:
            message = `Professor: In the example below, we use the Arithmetic operator: <br>
            addition operator (+): a + b  <br>

            subtraction operator (-): a - b <br>
            
            multiplication operator (*): a * b <br>
            
            The Division operator (/): a / b <br>
            
            modulus operator (%): a % b <br>
            
            increment operator (++): ++a <br>
            
            decrement operator (--): --b <br>
   
            `
          break;

          case 18:
            message = "Student: Woah! There are a lot of operators. Thank you for sharing me the basic fundamentals of C++ Professor!"

          break;

          case 19:
            message = "Professor: No problem! Are you ready for a simple pop quiz?"

          break;

          case 20:
            message = "Student: Yes, Sure Professor!"

          break;

          case 21:
            message = "Professor: Just click the Next Button and get started!"

          break;

          case 22:
            window.location.href = '/Quizes/c++quiz.html';

          break;
          
          default:
       
            break;

    }
    
    return message;
  },
};

function processClick() {
  clickTracker.count++;

  dialogtext.innerHTML = clickTracker.getMessage();
}
btndialog.addEventListener("click", processClick);
