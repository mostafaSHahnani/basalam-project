// variable & event

const loginBtn = document
  .querySelector(".go-new-page")
  .addEventListener("click", changeBtn);
const loginBtnTwo = document
  .querySelector(".go-new-page-two")
  .addEventListener("click", changeBtnTwo);

// change page one
function changeBtn(e) {
  e.preventDefault();
  let changeRow = document.querySelector(".row-style");
  let changeRowTwo = document.querySelector(".row-style-two");
  changeRow.style.display = "none";
  changeRowTwo.style.display = "flex";
}
function changeBtnTwo(e) {
  e.preventDefault();
  let changeRowTwo = document.querySelector(".row-style-two");
  let changeRow = document.querySelector(".row-style");
  changeRowTwo.style.display = "none";
  changeRow.style.display = "flex";
}
