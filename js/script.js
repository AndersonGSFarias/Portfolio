// =====================
// Script de transição entre páginas
// =====================

// Garante que a animação de entrada seja aplicada ao carregar a nova página
window.addEventListener("load", () => {
  // Marca a página como carregada (ex: para efeitos de texto)
  document.body.classList.add("loaded");

  // Verifica qual direção foi definida na página anterior
  const direction = localStorage.getItem("slideDirection");
  const page = document.querySelector(".page-reset");

  if (direction === "left") {
    page.classList.add("slide-in-left"); // Entrando da direita (indo para frente)
  } else if (direction === "right") {
    page.classList.add("slide-in-right"); // Entrando da esquerda (voltando)
  }

  // Limpa a direção para não reaplicar na próxima transição
  localStorage.removeItem("slideDirection");
});

// =====================
// Botão de menu do mobile
// =====================
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
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
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

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

// =====================
// Transição ao clicar nos links internos
// =====================

document.querySelectorAll("a[href]").forEach(link => {
  const href = link.getAttribute("href");

  // Ignora links externos, âncoras ou que abrem em nova aba
  if (
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("#") ||
    link.target === "_blank"
  ) return;

  link.addEventListener("click", function (e) {
    e.preventDefault();

    const page = document.querySelector(".page-reset");
    const target = this.href;

    // Se for voltar para o index, aplica saída para a direita
    if (
      href.includes("index.html") ||
      href === "/" ||
      href === "./" ||
      href === "./index.html"
    ) {
      localStorage.setItem("slideDirection", "right");
      page.classList.add("slide-out-right");
    } else {
      // Indo para outras páginas, aplica saída para a esquerda
      localStorage.setItem("slideDirection", "left");
      page.classList.add("slide-out-left");
    }

    // Redireciona após a animação (tempo deve ser igual ao CSS)
    setTimeout(() => {
      window.location.href = target;
    }, 1000); // 1s = tempo da animação CSS
  });
});
