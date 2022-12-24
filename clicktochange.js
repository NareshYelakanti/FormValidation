const form = document.querySelector(".form");
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");

form.addEventListener("submit",(e) => {
  e.preventDefault();
  if (user.value === "") {
    document.querySelector(".user").classList.add("error");
    document.querySelector(".ptag").classList.remove("d-none");
  }
  if (pass.value === "") {
    document.querySelector(".pass").classList.add("error");
    document.querySelector(".pt").classList.remove("d-none");
  }
  if (user.value === "Naresh" && pass.value === "Naresh") {
    alert("login successfully");
  }
});
user.addEventListener("keyup", (e) =>{
  e.preventDefault();
//console.log(user.value);
  if (user.value === "") {
    document.querySelector(".user").classList.add("error");
    document.querySelector(".ptag").classList.remove("d-none");
  } else {
    document.querySelector(".user").classList.remove("error");
    document.querySelector(".ptag").classList.add("d-none");
  }
});
pass.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (pass.value === "") {
    document.querySelector(".pass").classList.add("error");
    document.querySelector(".pt").classList.remove("d-none");
  } else {
    document.querySelector(".pass").classList.remove("error");
    document.querySelector(".pt").classList.add("d-none");
  }
});
let close = document.querySelector(".close");
let container = document.querySelector(".container");
close.addEventListener("click", (e) => {
  container.style.display = "none";
  open.style.display = "block";
  overlay.style.backgroundColor = "white";
});
let open = document.querySelector(".open");
let overlay = document.querySelector(".overlay");
let container1 = document.querySelector(".container");
open.addEventListener("click", (e) => {
  container1.style.display = "block";
  open.style.display = "none";

  overlay.style.backgroundColor = "grey";
});
