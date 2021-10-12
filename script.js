const mess = document.querySelector("#mess")
const messages = document.querySelector(".messages")

mess.addEventListener("keydown", function (e) {

  console.log(e, )

  if(e.keyCode == 13) {
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
          Okey, I got you...
        </p>
        <p class="time">15:01</p>
      </div>
    </div>
    `


  }

})