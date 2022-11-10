const catalog = document.querySelector(".navigation-catalog");
const search = document.querySelector(".navigation-search");
const login = document.querySelector(".navigation-login");
const cart = document.querySelector(".navigation-cart");

const popCatalog = document.querySelector(".popover-catalog");
const popSearch = document.querySelector(".popover-search");
const popLogin = document.querySelector(".popover-login");
const popCart = document.querySelector(".popover-cart");
const popCartEmpty = document.querySelector(".popover-cart-empty");

const dropButtons = document.querySelectorAll(".popover-cart-item-drop");
let countCarts = dropButtons.length;

const contactsModal = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal-container");
const modalClose = document.querySelector(".modal-close-button");

const prevItemButton = document.querySelectorAll(".slider-prev");
const nextItemButton = document.querySelectorAll(".slider-next");
const sliderList = document.querySelector(".slider-list");
const sliderPagList = document.querySelector(".slider-pagination-list");
const sliderPagButtons = document.querySelectorAll(".slider-pagination-button");

let activeSlideIndex = 0;
let activePagIndex = 0;

const body = document.querySelector("body");
const bodyColors = ["pink", "blue", "yellow"];

function findIndex(node) {
  let i = 1;
  while(node.previousSibling) {
    node = node.previousSibling;
    if(node.nodeType === 1) {
      i++;
    }
  }
  return i;
}

sliderPagButtons.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();

  if(item.classList.contains("slider-pagination-button-current")) {
    activePagIndex = findIndex(item.closest(".slider-pagination-item")) - 1;
  }

  if((findIndex(item.closest(".slider-pagination-item")) - 1) !== activePagIndex) {
    sliderPagList.children[activePagIndex].querySelector(".slider-pagination-button").classList.remove("slider-pagination-button-current");
    sliderList.children[activePagIndex].classList.remove("slider-item-current");
    body.classList.remove(bodyColors[activePagIndex]);

    activePagIndex = findIndex(item.closest(".slider-pagination-item")) - 1;
    sliderList.children[activePagIndex].classList.add("slider-item-current");
    body.classList.add(bodyColors[activePagIndex]);
    sliderPagList.children[activePagIndex].querySelector(".slider-pagination-button").classList.add("slider-pagination-button-current");
    activeSlideIndex = activePagIndex;
  }

  activeSlideIndex = activePagIndex;

}))

nextItemButton.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  changeSlide('up');
}))

prevItemButton.forEach(item => item.addEventListener('click', (e) => {
  e.preventDefault();
  changeSlide('down');
}))

function changeSlide(direction) {
  sliderList.children[activeSlideIndex].classList.remove("slider-item-current");
  body.classList.remove(bodyColors[activeSlideIndex]);
  sliderPagList.children[activeSlideIndex].querySelector(".slider-pagination-button").classList.remove("slider-pagination-button-current");
  if(direction === 'up') {
      activeSlideIndex++;
      if(activeSlideIndex === sliderList.children.length) {
          activeSlideIndex = 0;
      }
  } else if(direction === 'down') {
      activeSlideIndex--;
      if(activeSlideIndex < 0) {
          activeSlideIndex = sliderList.children.length - 1;
      }
  }
  sliderList.children[activeSlideIndex].classList.add("slider-item-current");
  body.classList.add(bodyColors[activeSlideIndex]);
  sliderPagList.children[activeSlideIndex].querySelector(".slider-pagination-button").classList.add("slider-pagination-button-current");
  activePagIndex = activeSlideIndex;
}

catalog.onclick = function() {
  catalog.classList.toggle("navigation-link-active");
  if(catalog.classList.contains("navigation-link-active")) {
    popCatalog.style.display = 'block';
  } else {
    popCatalog.style.display = 'none';
  }
}

search.onclick = function() {
  search.classList.toggle("navigation-link-active");
  if(search.classList.contains("navigation-link-active")) {
    popSearch.style.display = 'block';
  } else {
    popSearch.style.display = 'none';
  }
}

login.onclick = function() {
  login.classList.toggle("navigation-link-active");
  if(login.classList.contains("navigation-link-active")) {
    popLogin.style.display = 'block';
  } else {
    popLogin.style.display = 'none';
  }
}

cart.onclick = function() {
  cart.classList.toggle("navigation-link-active");
  if(cart.classList.contains("navigation-link-active") && !(popCart.classList.contains("empty"))) {
    popCart.style.display = 'block';
  } else if(cart.classList.contains("navigation-link-active") && popCart.classList.contains("empty")) {
    popCartEmpty.style.display = 'block';
  } else {
    popCart.style.display = 'none';
    popCartEmpty.style.display ='none';
  }

  dropButtons.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    item.closest(".popover-cart-item").style.display = 'none';
    item.closest(".popover-cart-item").innerHTML = "";
    countCarts--;
    cart.querySelector(".count-products").textContent = `${countCarts} товар`;
    if(countCarts === 0) {
      popCart.style.display = 'none';
      popCart.classList.add("empty");
      popCartEmpty.style.display = 'block';
      cart.querySelector(".count-products").textContent = "Пусто";
    }
  }));
}

contactsModal.onclick = function() {
  modal.classList.toggle("modal-container-open");
}

modalClose.onclick = function() {
  if(modal.classList.contains("modal-container-open")) {
    modal.classList.remove("modal-container-open");
  }
}
