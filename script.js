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
