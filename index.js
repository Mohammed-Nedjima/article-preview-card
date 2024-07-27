const shareBtn = document.querySelector(".share-btn");
const links = document.getElementById("links");
const mediaQuery = window.matchMedia("(min-width: 550px");
shareBtn.addEventListener("click", (e) => {
  if (links.style.bottom == "0px") {
    links.style.bottom = "-85px";
    // console.log(links.style.bottom);
  } else {
    links.style.bottom = "0px";
    console.log(links.style.bottom);
  }
  e.currentTarget.classList.toggle("active");
});
