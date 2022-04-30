// // alert("que pasa master")

// const texto = document.getElementById("texto");
// console.log(texto);

// texto.addEventListener("click", () => {
//   if (texto.style.color === "red") {
//     texto.style.color = "white";
//     texto.style.fontSize = "200px";
//     texto.style.backgroundColor = "red";
//   } else {
//     texto.style.color = "red";
//     texto.style.fontSize = "100px";
//     texto.style.backgroundColor = "white";
//   }
// });

// // for (let i = 0; i < 100; i++) {
// //   console.log("number" + i);
// // }

// const logo = document.querySelector(".logo");

// logo.addEventListener("click", () => {
//   // if(logo.style.width)
//   window.location.href = "https://google.com";
// });

// const imagen = document.querySelector(".img");

// console.log(imagen.style);

// imagen.addEventListener("click", () => {
//   if (imagen.style.width === "") {
//     imagen.style.width = "100px";
//   } else {
//     imagen.style.width = "";
//   }
// });

const nav = document.querySelector(".nav");
const sectionOne = document.querySelector(".section-one");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
    sectionOne.classList.add("spacer");
  } else {
    nav.classList.remove("fixed");
    sectionOne.classList.remove("spacer");
  }
}

window.addEventListener("scroll", fixedNav);
