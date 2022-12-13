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

// start shopping cart(variables)
const product = document.querySelector("#myTabContent");
const shoppingCartTable = document.querySelector("#cart-content tbody");
const clearCartBtn = document.querySelector("#clear-cart");
// end shopping cart(variables)

// start product tab(variables)
const productTabCollapse = document.querySelector("#collapse-product");
const profileTabCollapse = document.querySelector("#collapse-profile");
const contactTabCollapse = document.querySelector("#collapse-contact");
const conTabCollapse = document.querySelector("#collapse-contact-one");
// end  product tab(variables)

// start tab slider(variables)
const tabContent = document.querySelector("#profile-tab1");
const tabContentHome = document.querySelector("#home-tab1");
const tabContentOne = document.querySelector("#contact-tab1");
const tabContentTwo = document.querySelector("#hand-tab1");

// footer btn collaps
const footerBtn = document.querySelector("#btnend");

// eventlisteners *****
eventListeners();
function eventListeners() {
  // shopping cart event
  product.addEventListener("click", buyProduct);
  shoppingCartTable.addEventListener("click", removeProduct);
  clearCartBtn.addEventListener("click", clearCart);

  document.addEventListener("DOMContentLoaded", showProductOnLoad);
  // event collapse btn
  footerBtn.addEventListener("click", changeTextBtn);

  // product tab collapse
  productTabCollapse.addEventListener("click", productTabCollapseOpen);
  profileTabCollapse.addEventListener("click", profileTabCollapseOpen);
  contactTabCollapse.addEventListener("click", contactTabCollapseOpen);
  conTabCollapse.addEventListener("click", contactOneTabCollapseOpen);

  //  tab slider event
  document.addEventListener("DOMContentLoaded", openTabHome);
  tabContentHome.addEventListener("click", openTabHomeAfter);
  tabContent.addEventListener("click", openTabProfile);
  tabContentOne.addEventListener("click", openTabContentOne);
  tabContentTwo.addEventListener("click", openTabContentTwo);
}
// function *****
// show and hiden mega menu
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
// start tab collapse product functions
function productTabCollapseOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-tab-product")) {
    productTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product"
    data-bs-toggle="collapse"
    href="#collapseExampleProduct"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleProduct"
  >
    نمایش همه محصولات
  </a>
    `;
  } else {
    productTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product remove-tab-product"
    data-bs-toggle="collapse"
    href="#collapseExampleProduct"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleProduct"
  >
    نمایش کمتر ... 
  </a>
    `;
  }
}

function profileTabCollapseOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-tab-product")) {
    profileTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product"
    data-bs-toggle="collapse"
    href="#collapseExampleProfile"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleProfile"
  >
    نمایش همه محصولات
  </a>
    `;
  } else {
    profileTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product remove-tab-product"
    data-bs-toggle="collapse"
    href="#collapseExampleProfile"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleProfile"
  >
    نمایش کمتر ... 
  </a>
    `;
  }
}

function contactTabCollapseOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-tab-product")) {
    contactTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product"
    data-bs-toggle="collapse"
    href="#collapseExampleContact"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleContact"
  >
    نمایش همه محصولات
  </a>
    `;
  } else {
    contactTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product remove-tab-product"
    data-bs-toggle="collapse"
    href="#collapseExampleContact"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleContact"
  >
    نمایش کمتر ... 
  </a>
    `;
  }
}

function contactOneTabCollapseOpen(e) {
  e.preventDefault();
  if (e.target.classList.contains("remove-tab-product")) {
    conTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product"
    data-bs-toggle="collapse"
    href="#collapseExampleContactOne"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleContactOne"
  >
    نمایش همه محصولات
   </a>
    `;
  } else {
    conTabCollapse.innerHTML = `
    <a
    class="btn-text-end-product remove-tab-product"
    data-bs-toggle="collapse"
    href="#collapseExampleContactOne"
    role="button"
    aria-expanded="false"
    aria-controls="collapseExampleContactOne"
  >
    نمایش کمتر ... 
  </a>
    `;
  }
}

// start tab slider functions
// open home tab on loaded
function openTabHome(e) {
  let contentProfile = document.querySelector("#profile1");
  let contactOne = document.querySelector("#contact1");
  let contactTwo = document.querySelector("#contact2");
  contentProfile.style.display = "none";
  contactOne.style.display = "none";
  contactTwo.style.display = "none";
}
// open home tab on click
function openTabHomeAfter(e) {
  let contentProfile = document.querySelector("#profile1");
  let contactOne = document.querySelector("#contact1");
  let contactTwo = document.querySelector("#contact2");
  contentProfile.style.display = "none";
  contactOne.style.display = "none";
  contactTwo.style.display = "none";
}
// open profile tab on click
function openTabProfile(e) {
  let contentProfile = document.querySelector("#profile1");
  let contactOne = document.querySelector("#contact1");
  let contactTwo = document.querySelector("#contact2");

  contactOne.style.display = "none";
  contactTwo.style.display = "none";
  contentProfile.style.display = "block";
}
// open content1 tab on click
function openTabContentOne(e) {
  let contentProfile = document.querySelector("#profile1");
  let contactTwo = document.querySelector("#contact2");
  let contactOne = document.querySelector("#contact1");
  contentProfile.style.display = "none";
  contactTwo.style.display = "none";
  contactOne.style.display = "block";
}
// open content2 tab on click
function openTabContentTwo(e) {
  let contentProfile = document.querySelector("#profile1");
  let contactOne = document.querySelector("#contact1");
  let contactTwo = document.querySelector("#contact2");
  contentProfile.style.display = "none";
  contactOne.style.display = "none";
  contactTwo.style.display = "block";
}

// add the prodcuct to shopp cart
function buyProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("fa-shopping-cart")) {
    const product = e.target.parentElement.parentElement.parentElement;
    // read value prudoct
    getProductInfo(product);
  }
}

// get the product info
function getProductInfo(product) {
  const productInfo = {
    image: product.querySelector("img").src,
    title: product.querySelector("h4").textContent,
    price: product.querySelector("span").textContent,
    id: product.querySelector("a").getAttribute("data-id"),
  };

  addToCart(productInfo);
}

function addToCart(pInfo) {
  //create <tr></tr> tag
  let row = document.createElement("tr");

  // html template
  row.innerHTML = `
    <tr>
      <td>
        <img src = "${pInfo.image}" width="50px">
      </td>
      <td>${pInfo.title}</td>
      <td>${pInfo.price}</td>
      <td>
        <a class="remove" href="#" data-id="${pInfo.id}">X</a>
      </td>
    </tr>
  `;

  shoppingCartTable.appendChild(row);
  saveToLocalStorage(pInfo);
  sideBarWidth();
}
// set side bar widht for empty
function sideBarWidth() {
  let sideBar = document.querySelector(".sidepanel");
  sideBar.style.width = "350px";
}

// local storage
function saveToLocalStorage(product) {
  let products = getFromLocalStorage();

  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
}

function getFromLocalStorage() {
  let products;
  if (localStorage.getItem("products")) {
    products = JSON.parse(localStorage.getItem("products"));
  } else {
    products = [];
  }
  return products;
}

function removeProduct(e) {
  e.preventDefault();
  let product, productId;
  if (e.target.classList.contains("remove")) {
    e.target.parentElement.parentElement.remove();
    product = e.target.parentElement.parentElement;
    productId = product.querySelector("a").getAttribute("data-id");
  }

  removeproductLS(productId);
}

function removeproductLS(id) {
  let prodcuctLS = getFromLocalStorage();

  prodcuctLS.forEach((product, index) => {
    if (product.id === id) {
      prodcuctLS.splice(index, 1);
    }
  });

  localStorage.setItem("products", JSON.stringify(prodcuctLS));
}

function clearCart(e) {
  e.preventDefault();
  while (shoppingCartTable.firstChild) {
    shoppingCartTable.firstChild.remove();
  }

  clearCartLS();
}
//clear all localstorage
function clearCartLS() {
  localStorage.clear();
}

//load DOMcontentLoaded

function showProductOnLoad() {
  let prodcuctLS = getFromLocalStorage();

  prodcuctLS.forEach((pInfo) => {
    //create <tr></tr> tag
    let row = document.createElement("tr");

    // html template
    row.innerHTML = `
    <tr>
      <td>
        <img src = "${pInfo.image}" width="50px">
      </td>
      <td>${pInfo.title}</td>
      <td>${pInfo.price}</td>
      <td>
        <a class="remove" href="#" data-id="${pInfo.id}">X</a>
      </td>
    </tr>
  `;

    shoppingCartTable.appendChild(row);
  });
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

// AJAX search************
$(document).ready(function () {
  $("#filter").keyup(function () {
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(),
      count = 0;
    var result = [];

    // Loop through the comment list
    $("h4").each(function () {
      // If the list item does not contain the text phrase fade it out

      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
        $(this).fadeOut();
        setTimeout(() => {
          $(this).show();
        }, 7000);

        // Show the list item if the phrase matches and increase the count by 1
      } else {
        result.push($(this).show().text());

        count++;
      }
      // if (result === filter) {

      // }
    });

    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      var li = document.createElement("li");
      li.innerHTML = element + "<br/>";
      $(".filter-list").append(li).addClass("show-result");
    }

    if (filter === "") {
      $(".show-result").hide();
    } else {
      setTimeout(() => {
        $(".show-result").hide();
        $(".form-content").each(function () {
          this.reset();
        });
      }, 15000);
    }
  });
});

// swipper slider**********

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    740: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
