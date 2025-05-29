// Função do botão de menu no mobile
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(".mobile-menu", ".nav-list", ".nav-list li");
mobileNavbar.init();

// Animação de entrada e saida da pagina
// Função para aplicar animação de saída e redirecionar depois
function animateAndRedirect(link, direction) {
  const page = document.querySelector(".page-reset");
  localStorage.setItem("transitionDirection", direction);
  page.classList.add(`slide-out-${direction}`);

  setTimeout(() => {
    window.location.href = link.href;
  }, 1000); // deve ser igual ao tempo da animação de saída
}

// Intercepta todos os links internos
document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#") || link.target === "_blank") return;

  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Se está indo para index.html, vamos voltar → saída direita
    if (href.includes("index.html") || href === "/" || href === "./" || href === "./index.html" || href === "/index.html") {
      animateAndRedirect(this, "right");
    } else {
      // Indo para qualquer outra página → saída esquerda
      animateAndRedirect(this, "left");
    }
  });
});

// Animação de entrada com base no localStorage
window.addEventListener("DOMContentLoaded", () => {
  const direction = localStorage.getItem("transitionDirection");
  const page = document.querySelector(".page-reset");

  if (direction === "left") {
    page.classList.add("slide-in-left");
  } else if (direction === "right") {
    page.classList.add("slide-in-right");
  }

  localStorage.removeItem("transitionDirection");
});
