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

// =====================
// Botão de mais conteudo
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".more-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".box-closed");
      const extraText = card.querySelector(".more-content");

      const isOpen = extraText.classList.contains("open");

      extraText.classList.toggle("open");
      button.textContent = isOpen ? "Ver mais..." : "Ver menos...";
    });
  });
});

// =====================
// Animações do ScrollReveal
// =====================

document.addEventListener("DOMContentLoaded", function () {
  // Animações específicas para dispositivos
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  // Animações específicas para mobile
  if (isMobile) {
    ScrollReveal().reveal(".reveal-left", {
      origin: "left",
      distance: "170px",
      delay: 0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "170px",
      duration: 1200,
      delay: 100,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });

    ScrollReveal().reveal(".reveal-top", {
      origin: "top",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });

    ScrollReveal().reveal(".disappear-left", {
      origin: "left",
      distance: "170px",
      duration: 1200,
      delay: 100,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".disappear-right", {
      origin: "right",
      distance: "170px",
      duration: 1200,
      delay: 100,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".disappear-bottom", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });

    ScrollReveal().reveal(".disappear-top", {
      origin: "top",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });

    ScrollReveal().reveal(".text-container-galery", {
      origin: "bottom",
      distance: "40px",
      duration: 1700,
      delay: 0,
      reset: false,
    });
    ScrollReveal().reveal(".galery", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      delay: 0,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".project", {
      origin: "bottom",
      distance: "40px",
      duration: 1700,
      delay: 0,
      reset: false,
    });

    ScrollReveal().reveal(".cv-btn", {
      origin: "right",
      distance: "170px",
      duration: 1200,
      delay: 0,
      easing: "ease-in-out",
      reset: false,
    });
  }
  // Animações específicas para desktop
  else {
    // Animações Padrões
    ScrollReveal().reveal(".reveal-left", {
      origin: "left", // direção de onde vem
      distance: "70px", // distância
      duration: 1200, // tempo da animação
      easing: "ease-in-out",
      reset: false, // se for true, repete ao voltar no scroll
    });

    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "70px",
      duration: 1200,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      interval: 200, // efeito cascata entre elementos iguais
      reset: true,
    });

    ScrollReveal().reveal(".reveal-top", {
      origin: "top",
      distance: "40px",
      duration: 700,
      interval: 200, // efeito cascata entre elementos iguais
      reset: true,
    });

    // Animações de elementos
    ScrollReveal().reveal(".galery", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      delay: 0,
      easing: "ease-in-out",
      reset: true,
    });
    ScrollReveal().reveal(".title-box", {
      origin: "left",
      distance: "40px",
      duration: 700,
      delay: 0,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".more-projects", {
      origin: "right",
      distance: "70px",
      duration: 700,
      delay: 0,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".disappear-form", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      delay: 500,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".profile-title", {
      origin: "left",
      distance: "170px",
      duration: 1200,
      easing: "ease-in-out",
      reset: false,
    });

    ScrollReveal().reveal(".disappear-left", {
      origin: "left",
      distance: "170px",
      duration: 1200,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".disappear-right", {
      origin: "right",
      distance: "70px",
      duration: 1200,
      easing: "ease-in-out",
      reset: true,
    });

    ScrollReveal().reveal(".disappear-bottom", {
      origin: "bottom",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });

    ScrollReveal().reveal(".disappear-top", {
      origin: "top",
      distance: "40px",
      duration: 700,
      interval: 200,
      reset: true,
    });
  }
});

// =====================
// Envio de formulário
// =====================

function sendMessage() {
  event.preventDefault();
  const phoneNumber = "5511991751095";
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  if (!name) {
    return alert("Acho que esqueceu de escrever seu nome");
  }

  if (!message) {
    return alert("Escreva sua mensagem pra mim!");
  }

  const text = `Olá, tudo bem? \nMeu nome é ${name} e gostaria de falar sobre um ${service}.\n\n${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");
}
