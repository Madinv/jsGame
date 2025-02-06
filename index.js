const userText = document.querySelector("#userText");
const compText = document.querySelector("#compText");
const resultText = document.querySelector("#resultText");
const choiceButton = document.querySelectorAll(".choiceButton");
let user;
let comp;
let playerScore = 0;
let compScore = 0;

choiceButton.forEach((button) =>
  button.addEventListener("click", () => {
    user = button.textContent;
    getComputerChoice();
    userText.textContent = `Пользователь: ${user}`;
    compText.textContent = `Компьютер: ${comp}`;
    resultText.textContent = Winner();
    updateScores();
  })
);

function updateScores() {
  document.getElementById("playerScore").innerText =
    "Счет игрока: " + playerScore;
  document.getElementById("compScore").innerText =
    "Счет компьютера: " + compScore;
}

// function getComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3 + 1);
//   switch (randomNumber) {
//     case 1:
//       comp = "Камень";
//       break;
//     case 2:
//       comp = "Бумага";
//       break;
//     case 3:
//       comp = "Ножницы";
//       break;
//   }
// }

function getComputerChoice() {
  const choices = ["Камень", "Бумага", "Ножницы"];
  comp = choices[Math.floor(Math.random() * choices.length)];
}

// function Winner() {
//   if (user === comp) {
//     return "У вас ничья!";
//   } else if (comp === "Камень") {
//     if (user === "Бумага") {
//       playerScore++;
//       return "Поздравляем, Вы победили!";
//     } else {
//       compScore++;
//       return "К сожалению, Вы проиграли!";
//     }
//   } else if (comp === "Бумага") {
//     if (user === "Ножницы") {
//       playerScore++;
//       return "Поздравляем, Вы победили!";
//     } else {
//       compScore++;
//       return "К сожалению, Вы проиграли!";
//     }
//   } else if (comp === "Ножницы") {
//     if (user === "Камень") {
//       playerScore++;
//       return "Поздравляем, Вы победили!";
//     } else {
//       compScore++;
//       return "К сожалению, Вы проиграли!";
//     }
//   }
// }
function Winner() {
  const rules = {
    Камень: "Ножницы",
    Бумага: "Камень",
    Ножницы: "Бумага",
  };

  if (user === comp) {
    return "У вас ничья!";
  } else if (rules[user] === comp) {
    playerScore++;
    return "Поздравляем, Вы победили!";
  } else {
    compScore++;
    return "К сожалению, Вы проиграли!";
  }
}
