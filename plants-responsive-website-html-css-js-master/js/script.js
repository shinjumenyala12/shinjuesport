// ===== SHOW HEADER MENU =====
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.onclick = () => {
      menu.classList.add("show-menu");
    };
    close.onclick = () => {
      menu.classList.remove("show-menu");
    };
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== ACCORDION QUESTIONS SECTION =====
const accordionItems = document.querySelectorAll(".questions__item");
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// ===== ACTIVE LINK =====
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? document
          .querySelector(`.header__menu a[href*= ${sectionId} ]`)
          .classList.add("active-link")
      : document
          .querySelector(`.header__menu a[href*= ${sectionId} ]`)
          .classList.remove("active-link");
  });
}
window.addEventListener("scroll", scrollActive);

// ===== SCROLL UP =====
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 300
    ? scrollUp.classList.add("scroll-up")
    : scrollUp.classList.remove("scroll-up");
}
window.addEventListener("scroll", scrollUp);

// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img, .contact__box`, { origin: "left" });
sr.reveal(`.about__data, .contact__form`, { origin: "right" });
sr.reveal(`.steps__card, .products__card, .questions__group, .footer`, {
  interval: 100,
});
