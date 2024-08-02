const data = [
  {
    question: "Which HTML element is used to define the title of a document?",
    a: "meta",
    b: "title",
    c: "header",
    d: "head",
    correct: "b",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    a: "class",
    b: "style",
    c: "id",
    d: "css",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Style Sheets",
    b: "Cascading Style Sheets",
    c: "Colorful Style Sheets",
    d: "Creative Style Sheets",
    correct: "b",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    a: "color",
    b: "background-color",
    c: "bgcolor",
    d: "background",
    correct: "b",
  },
  {
    question:
      "Which CSS property is used to change the text color of an element?",
    a: "fgcolor",
    b: "text-color",
    c: "color",
    d: "font-color",
    correct: "c",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    a: "heading",
    b: "h6",
    c: "h1",
    d: "h5",
    correct: "c",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    a: "src",
    b: "alt",
    c: "title",
    d: "href",
    correct: "b",
  },
  {
    question:
      "Which CSS property is used to control the space between elements?",
    a: "spacing",
    b: "margin",
    c: "padding",
    d: "border",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyperlinks and Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hyper Tool Markup Language",
    correct: "a",
  },
  {
    question: "Which HTML element is used to create a hyperlink?",
    a: "a",
    b: "link",
    c: "href",
    d: "nav",
    correct: "a",
  },
  {
    question: "Which CSS property is used to make the text bold?",
    a: "font-style",
    b: "font-weight",
    c: "text-decoration",
    d: "text-transform",
    correct: "b",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    a: "bottom",
    b: "footer",
    c: "section",
    d: "foot",
    correct: "b",
  },
  {
    question:
      "Which HTML attribute is used to specify a unique identifier for an element?",
    a: "class",
    b: "id",
    c: "key",
    d: "ref",
    correct: "b",
  },
  {
    question:
      "Which property is used to change the font size of an element in CSS?",
    a: "font-style",
    b: "font-weight",
    c: "font-size",
    d: "font-family",
    correct: "c",
  },
  {
    question:
      "Which CSS property is used to create space inside an element, between the element and its border?",
    a: "padding",
    b: "margin",
    c: "border",
    d: "spacing",
    correct: "a",
  },
  {
    question:
      "Which HTML element is used to specify a section that is quoted from another source?",
    a: "quote",
    b: "blockquote",
    c: "cite",
    d: "q",
    correct: "b",
  },
  {
    question: "What does the em tag do in HTML?",
    a: "Adds emphasis (italicizes the text)",
    b: "Makes the text bold",
    c: "Underlines the text",
    d: "Changes the font style",
    correct: "a",
  },
  {
    question:
      "Which HTML element is used to define a multi-line text input field?",
    a: "input type='text'",
    b: "textarea",
    c: "input type='textarea'",
    d: "input",
    correct: "b",
  },
  {
    question: "Which CSS property is used to set the width of an element?",
    a: "length",
    b: "size",
    c: "width",
    d: "height",
    correct: "c",
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    a: "font-style",
    b: "font-weight",
    c: "font-family",
    d: "font-variant",
    correct: "c",
  },
];

let question = document.querySelector(".ques-wrapper");
let ans_box = document.querySelector(".answer");
let number = document.querySelector(".number");
let total = document.querySelector(".total");
let answers = document.querySelectorAll(".ans");
let A_value = document.getElementById("A_value");
let B_value = document.getElementById("B_value");
let C_value = document.getElementById("C_value");
let D_value = document.getElementById("D_value");
let previous = document.querySelector(".prev");
let next = document.querySelector(".next");
let submit = document.querySelector(".submit");
let buttons = document.querySelector(".buttons");
let clear = document.querySelector(".clear");

let index = 0;
let selectedAnswers = {};
let score = 0;

function display() {
  let currentdata = data[index];
  number.innerHTML = index + 1;
  total.innerHTML = data.length;
  question.innerHTML = currentdata.question;
  A_value.innerHTML = currentdata.a;
  B_value.innerHTML = currentdata.b;
  C_value.innerHTML = currentdata.c;
  D_value.innerHTML = currentdata.d;

  answers.forEach((answer) => {
    answer.checked = selectedAnswers[index] === answer.id;
  });

  previous.style.display = index === 0 ? "none" : "block";
  next.style.display = index === data.length - 1 ? "none" : "block";
  submit.style.display = index === data.length - 1 ? "block" : "none";
  buttons.classList.toggle("custom", index !== 0);

  clear.addEventListener("click", () => {
    selectedAnswers[index] = null;
    answers.forEach((answer) => {
      answer.checked = false;
    });
  });
  previous.disabled = false;
}

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    selectedAnswers[index] = answer.id;
  });
});

previous.addEventListener("click", () => {
  if (index > 0) {
    index--;
    display();
  }
});

next.addEventListener("click", () => {
  if (index < data.length - 1) {
    index++;
    display();
  }
});

let pop_box = document.querySelector(".pop-box");
submit.addEventListener("click", () => {
  pop_box.style.display = "block";
  previous.disabled = true;
});

display();

let btn = document.querySelector(".btn");
let container = document.querySelector(".container");
let wrapper_container = document.querySelector(".wrapper-container");
let countdown = document.querySelector(".countdown");
btn.addEventListener("click", () => {
  container.style.display = "block";
  wrapper_container.style.display = "none";
  countdown.style.display = "block";
  time();
});

let yesBtn = document.querySelector("#yesBtn");
let noBtn = document.querySelector("#noBtn");
let score_popup = document.querySelector("#score-popup");
yesBtn.addEventListener("click", () => {
  score_popup.style.display = "block";
  container.style.display = "none";
  pop_box.style.display = "none";
  countdown.style.display = "none";
  scores();
  clearInterval(interval);
});

noBtn.addEventListener("click", () => {
  pop_box.style.display = "none";
  previous.disabled = false;
});
let play_again = document.querySelector("#play-again-button");
let quit = document.querySelector("#close-popup-button");
play_again.addEventListener("click", () => {
  container.style.display = "block";
  countdown.style.display = "block";
  score_popup.style.display = "none";
  index = 0;
  for (const key in selectedAnswers) {
    selectedAnswers[key] = null;
  }
  answers.forEach((answer) => {
    answer.checked = false;
  });
  display();
  time();
});

quit.addEventListener("click", () => {
  container.style.display = "none";
  countdown.style.display = "none";
  score_popup.style.display = "none";
  wrapper_container.style.display = "block";
  index = 0;
  for (const key in selectedAnswers) {
    selectedAnswers[key] = null;
  }
  answers.forEach((answer) => {
    answer.checked = false;
  });
  display();
});

let marks = document.querySelector("#score");
let totalmarks = document.querySelector("#total");
let negative = 0;
function scores() {
  score = 0;
  negative = 0;
  data.forEach((item, idx) => {
    if (selectedAnswers[idx] === item.correct) {
      score++;
    } else if (
      selectedAnswers[idx] !== item.correct &&
      selectedAnswers[idx] != null
    ) {
      negative++;
    }
  });
  marks.innerHTML = score * 2 - negative;
}
totalmarks.innerHTML = data.length * 2;

// timer
let interval;

async function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    display.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
    }
    if (timer === 0) {
      score_popup.style.display = "block";
      container.style.display = "none";
      pop_box.style.display = "none";
      countdown.style.display = "none";
      scores();
    }
  }, 1000);
}

async function time() {
  const duration = 15 * 60;
  const display = document.querySelector(".timer");
  startTimer(duration, display);
}
