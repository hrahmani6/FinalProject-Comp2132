const closePopup = document.getElementById("close-pop-up");
const playGame = document.getElementById("play-again");
const outputPopup = document.getElementById("show-result");
function showPopup() {
  popup.style.display = "block";
}
closePopup.addEventListener("click", function () {
  popup.style.display = "none";
});
playGame.addEventListener("click", function () {
  popup.style.display = "none";
  numberOfRounds = 0;
  if (numberOfRounds == 0) {
  }
});
