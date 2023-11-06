const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .tabs-div ul li");
console.log(sections[0])
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    console.log(sectionTop)
    if (scrollY >= sectionTop - 200 ) {
      current = section.getAttribute("id"); }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};