const mess = document.querySelector("#mess")
const messages = document.querySelector(".messages")

mess.addEventListener("keydown", function (e) {

  if(e.keyCode == 13) {

    let res

    switch (this.value.toLowerCase()) {
      case "привет": res = "Привет!"; break;
      case "как дела?": res = "Хорошо! У тебя как?"; break;
      case "как дела": res = "Хорошо! У тебя как?"; break;
      case "тоже хорошо": res = "Это отлично!"; break;
      case "хорошо": res = "Это отлично!"; break;
      case "пока": res = "Пока!"; break;
      case "уву": res = "UWU-UWU!"; break;
      default: res = "Okey, I got you..."; break;
    }

    messages.innerHTML += `
      <div class="message message-you">
      <img class="img" src="./images/you.png">
      <div class="message-text">
        <p class="text">
          ${this.value}
        </p>
        <p class="time">15:00</p>
      </div>
    </div>

    <div class="message message-bot">
      <img class="img" src="./images/bot.png">
      <div class="message-text">
        <p class="text">
          ${res}
        </p>
        <p class="time">15:01</p>
      </div>
    </div>
    `
    this.value = ""
  }

})