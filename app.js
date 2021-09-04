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

var errorControlQuestions = [
  {
    question: "1. Noise",
    answers: {
      a: 'An unwanted high frequency disturbance or interference with the desired electrical signal',
      b: 'Gradually occurs to stored data as a result of failing circuits or from bits losing their magnetic orientation or electrical charge',
      c: 'Often occurs during data entry when individuals type in incorrect data'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. Human error",
    answers: {
      a: 'An unwanted high frequency disturbance or interference with the desired electrical signal',
      b: 'Gradually occurs to stored data as a result of failing circuits or from bits losing their magnetic orientation or electrical charge',
      c: 'Often occurs during data entry when individuals type in incorrect data'
    },
    correctAnswer: 'c'
  },
  {
    question: "3. Data decay",
    answers: {
      a: 'An unwanted high frequency disturbance or interference with the desired electrical signal',
      b: 'Gradually occurs to stored data as a result of failing circuits or from bits losing their magnetic orientation or electrical charge',
      c: 'Often occurs during data entry when individuals type in incorrect data'
    },
    correctAnswer: 'b'
  },
  {
    question: "4. Data corruption",
    answers: {
      a: 'Occurs when transmition is interupted by either interfering waves or poor environmental conditions and results in incorrect data being recieved',
      b: 'Involves errors in computer data that occur during writing, reading, storage, transmition or processing that result in unintentional changes',
      c: 'Calculated by multiplying every second digit by three and adding all of the new digits together in order to find the number required to round this value up to the nearest ten.'
    },
    correctAnswer: 'b'
  },
  {
    question: "5. Transmition data corruption",
    answers: {
      a: 'Occurs when transmition is interupted by either interfering waves or poor environmental conditions and results in incorrect data being recieved',
      b: 'Involves errors in computer data that occur during writing, reading, storage, transmition or processing that result in unintentional changes',
      c: 'Calculated by multiplying every second digit by three and adding all of the new digits together in order to find the number required to round this value up to the nearest ten.'
    },
    correctAnswer: 'a'
  },
  {
    question: "6. Checksum",
    answers: {
      a: 'Occurs when transmition is interupted by either interfering waves or poor environmental conditions and results in incorrect data being recieved',
      b: 'Involves errors in computer data that occur during writing, reading, storage, transmition or processing that result in unintentional changes',
      c: 'Calculated by multiplying every second digit by three and adding all of the new digits together in order to find the number required to round this value up to the nearest ten.'
    },
    correctAnswer: 'c'
  }
];

var securityQuestions = [
  {
    question: "1. Computer Security",
    answers: {
      a: 'Refers to techniques for ensuring that data stored in a computer cannot be used or compromised by any individuals without authorization.',
      b: 'Used to help identify and distinguish users and their access or capabilities on a computer or computer network.',
      c: 'Systems prevent unauthorized access to or from a private network.'
    },
    correctAnswer: 'a'
  },
  {
    question: "2. Password",
    answers: {
      a: 'Refers to techniques for ensuring that data stored in a computer cannot be used or compromised by any individuals without authorization.',
      b: 'Used to help identify and distinguish users and their access or capabilities on a computer or computer network.',
      c: 'Systems prevent unauthorized access to or from a private network.'
    },
    correctAnswer: 'b'
  },
  {
    question: "3. Firewall",
    answers: {
      a: 'Refers to techniques for ensuring that data stored in a computer cannot be used or compromised by any individuals without authorization.',
      b: 'Used to help identify and distinguish users and their access or capabilities on a computer or computer network.',
      c: 'Systems prevent unauthorized access to or from a private network.'
    },
    correctAnswer: 'c'
  },
  {
    question: "4. Virus",
    answers: {
      a: 'Is computer software used to prevent, detect and remove malicious computer viruses.',
      b: 'The copying and archiving of computer data so it may be used to restore the original after a data loss event.',
      c: 'Is a self-replicating program that can spread by email or by inserting copies of itself into other programs or documents.'
    },
    correctAnswer: 'c'
  },
  {
    question: "5. Antivirus",
    answers: {
      a: 'Is computer software used to prevent, detect and remove malicious computer viruses.',
      b: 'The copying and archiving of computer data so it may be used to restore the original after a data loss event.',
      c: 'Is a self-replicating program that can spread by email or by inserting copies of itself into other programs or documents.'
    },
    correctAnswer: 'a'
  },
  {
    question: "6. Backup",
    answers: {
      a: 'Is computer software used to prevent, detect and remove malicious computer viruses.',
      b: 'The copying and archiving of computer data so it may be used to restore the original after a data loss event.',
      c: 'Is a self-replicating program that can spread by email or by inserting copies of itself into other programs or documents.'
    },
    correctAnswer: 'b'
  },
  {
    question: "7. Malware",
    answers: {
      a: 'Short for malicious software, is a software designed specifically to damage or disrupt a system.',
      b: 'Is software that aids in gathering information about a person or organization without their knowledge and that may send such information to another entity without the consumers consent.',
      c: 'Is a generally non-self-replicating type of malware program containing malicious code that, when executed, carries out actions typically causing loss of data, and possible system harm.'
    },
    correctAnswer: 'a'
  },
  {
    question: "8. Trojan",
    answers: {
      a: 'Short for malicious software, is a software designed specifically to damage or disrupt a system.',
      b: 'Is software that aids in gathering information about a person or organization without their knowledge and that may send such information to another entity without the consumers consent.',
      c: 'Is a generally non-self-replicating type of malware program containing malicious code that, when executed, carries out actions typically causing loss of data, and possible system harm.'
    },
    correctAnswer: 'c'
  },
  {
    question: "9. Spyware",
    answers: {
      a: 'Short for malicious software, is a software designed specifically to damage or disrupt a system.',
      b: 'Is software that aids in gathering information about a person or organization without their knowledge and that may send such information to another entity without the consumers consent.',
      c: 'Is a generally non-self-replicating type of malware program containing malicious code that, when executed, carries out actions typically causing loss of data, and possible system harm.'
    },
    correctAnswer: 'b'
  },
  {
    question: "10. Adware",
    answers: {
      a: 'Is the attempt to acquire sensitive information such as usernames, passwords, and credit card details by masquerading as a trustworthy entity in an electronic communication.',
      b: 'Is any software package which automatically renders advertisements in order to generate revenue for its author.',
      c: 'Is a stealthy type of software, typically malicious, designed to hide the existence of certain processes or programs from normal methods of detection and enable continued privileged access to a computer.'
    },
    correctAnswer: 'b'
  },
  {
    question: "11. Phishing",
    answers: {
      a: 'Is the attempt to acquire sensitive information such as usernames, passwords, and credit card details by masquerading as a trustworthy entity in an electronic communication.',
      b: 'Is any software package which automatically renders advertisements in order to generate revenue for its author.',
      c: 'Is a stealthy type of software, typically malicious, designed to hide the existence of certain processes or programs from normal methods of detection and enable continued privileged access to a computer.'
    },
    correctAnswer: 'a'
  },
  {
    question: "12. Rootkit",
    answers: {
      a: 'Is the attempt to acquire sensitive information such as usernames, passwords, and credit card details by masquerading as a trustworthy entity in an electronic communication.',
      b: 'Is any software package which automatically renders advertisements in order to generate revenue for its author.',
      c: 'Is a stealthy type of software, typically malicious, designed to hide the existence of certain processes or programs from normal methods of detection and enable continued privileged access to a computer.'
    },
    correctAnswer: 'c'
  },
  {
    question: "13. Keylogger",
    answers: {
      a: 'Is the action of recording the keys struck on a keyboard while the person using the keyboard is unaware that their actions are being monitored.',
      b: 'A container for information to be transposted',
      c: 'Is a standalone malware computer program that replicates itself in order to spread to other computers.'
    },
    correctAnswer: 'a'
  },
  {
    question: "14. Worm",
    answers: {
      a: 'Is the action of recording the keys struck on a keyboard while the person using the keyboard is unaware that their actions are being monitored.',
      b: 'A container for information to be transposted',
      c: 'Is a standalone malware computer program that replicates itself in order to spread to other computers.'
    },
    correctAnswer: 'c'
  },
  {
    question: "15. Packet",
    answers: {
      a: 'Is the action of recording the keys struck on a keyboard while the person using the keyboard is unaware that their actions are being monitored.',
      b: 'A container for information to be transposted',
      c: 'Is a standalone malware computer program that replicates itself in order to spread to other computers.'
    },
    correctAnswer: 'b'
  },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var quizType = document.querySelector('.quiz');

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

if (quizType.classList.contains("encryption")) {
  generateQuiz(encryptionQuestions, quizContainer, resultsContainer, submitButton);
}
else if (quizType.classList.contains("error-control")) {
  generateQuiz(errorControlQuestions, quizContainer, resultsContainer, submitButton);
}
else {
  generateQuiz(securityQuestions, quizContainer, resultsContainer, submitButton);
}
