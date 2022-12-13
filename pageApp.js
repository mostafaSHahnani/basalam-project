// variables *****
// start navbar code js(variables)
const content = document
  .querySelector("#content")
  .addEventListener("mouseenter", moveContent);
const contentClose = document
  .querySelector("#content")
  .addEventListener("mouseleave", moveContentClose);
const contentList = document
  .querySelector("#content-list")
  .addEventListener("mouseenter", moveContentList);

const contentCloseList = document
  .querySelector("#content-list")
  .addEventListener("mouseleave", moveContentCloseList);
// end navbar code js(variables)

// footer btn collaps
const footerBtn = document.querySelector("#btnend");
// function *****
function moveContent(e) {
  let list = document.querySelector("#content-list");
  list.style.display = "block";
}
function moveContentClose(e) {
  let listClose = document.querySelector("#content-list");

  listClose.style.display = "none";
}
function moveContentList(e) {
  contentList.style.display = "block";
}
function moveContentCloseList(e) {
  contentCloseList.style.display = "none";
}

eventListeners();
function eventListeners() {
  // event collapse btn
  footerBtn.addEventListener("click", changeTextBtn);
}

// footer btn change text

function changeTextBtn(e) {
  if (e.target.classList.contains("remove-text")) {
    footerBtn.innerHTML = `
      <a
      class="btn-text-end"
      data-bs-toggle="collapse"
      href="#collapseExample"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample"
    >
      نمایش بیشتر
    </a>
      `;
  } else {
    footerBtn.innerHTML = `
      <a
        class="btn-text-end remove-text"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        >
      نمایش کمتر
      </a>
      `;
  }
}
