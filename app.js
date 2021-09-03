/*Tabs system*/

const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    })
    contents.forEach(function (content) {
      content.classList.remove("active");
    })
    const element = document.getElementById(id);
    element.classList.add("active");
  }
})

/*Javascript quiz*/

var encryptionQuestions = [
  {
    question: "1. Encryption",
    answers: {
      a: 'The process of tuning plaintext into scrambled ciphertext, which can only be understood if it is decrypted',
      b: 'The process of deciphering encrypted data or messages',
      c: 'A substitution cipher where one character of plaintext is substituted for another, which becomes the ciphertext'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. Decryption",
    answers: {
      a: 'The process of tuning plaintext into scrambled ciphertext, which can only be understood if it is decrypted',
      b: 'The process of deciphering encrypted data or messages',
      c: 'A substitution cipher where one character of plaintext is substituted for another, which becomes the ciphertext'
    },
    correctAnswer: 'b'
  },
  {
    question: "3. Caesar Cipher",
    answers: {
      a: 'The process of tuning plaintext into scrambled ciphertext, which can only be understood if it is decrypted',
      b: 'The process of deciphering encrypted data or messages',
      c: 'A substitution cipher where one character of plaintext is substituted for another, which becomes the ciphertext'
    },
    correctAnswer: 'c'
  },
  {
    question: "4. Plaintext",
    answers: {
      a: 'Data in human-readable form',
      b: 'Data that has been encrypted',
      c: 'In cryptography it is the data that is used to encrypt and decrypt the data'
    },
    correctAnswer: 'a'
  },
  {
    question: "5. Ciphertext",
    answers: {
      a: 'Data in human-readable form',
      b: 'Data that has been encrypted',
      c: 'In cryptography it is the data that is used to encrypt and decrypt the data'
    },
    correctAnswer: 'b'
  },
  {
    question: "6. Key",
    answers: {
      a: 'Data in human-readable form',
      b: 'Data that has been encrypted',
      c: 'In cryptography it is the data that is used to encrypt and decrypt the data'
    },
    correctAnswer: 'c'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    var output = [];

    for(var i=0; i<questions.length; i++) {
      answers = [];

      for(letter in questions[i].answers) {
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>' + '\n'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    var numCorrect = 0;

    for(var i=0; i<questions.length; i++) {
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if(userAnswer===questions[i].correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = 'lightgreen';
      }
      else {
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}

generateQuiz(encryptionQuestions, quizContainer, resultsContainer, submitButton);
