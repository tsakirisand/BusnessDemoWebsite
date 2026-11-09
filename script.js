const navigation = document.querySelector("#forma-navigation");
const menuToggle = document.querySelector(".forma-menu-toggle");

function closeMenu() {
  navigation?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Άνοιγμα μενού");
}

menuToggle?.addEventListener("click", () => {
  const open = navigation?.classList.toggle("is-open") ?? false;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Κλείσιμο μενού" : "Άνοιγμα μενού");
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const contactForm = document.querySelector("#forma-contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = document.querySelector(".forma-form-result");
  if (result) result.hidden = false;
  contactForm.reset();
});
