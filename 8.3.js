
let randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    let userInput = document.getElementById("userInput").value;
    let message = "đoán đê";

    if (userInput == randomNumber) {
        message = "Chúc mừng! Bạn đúng hên: " + randomNumber;
    } else if (userInput < 1 || userInput > 10) {
        message = "Vui lòng nhập một số từ 1 đến 10.";
    } else {
        message = "Sai! Thử lại đê.";
    }

    document.getElementById("result").innerHTML = message;
}
