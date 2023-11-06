const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .tabs-div ul li");
const navLine = document.querySelectorAll("nav .tabs-div ul li .line-extend");

console.log(navLine)
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200 ) {
      current = section.getAttribute("id"); }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
        navLine.forEach((line) => {
            line.classList.remove("active");
            if(line.classList.contains(current)){
                line.classList.add("active")
                console.log(navLine)
            }
        })
      li.classList.add("active");
    }
  });
};