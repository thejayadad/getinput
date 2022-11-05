
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const greet = document.getElementById("greet");

btn.addEventListener("click", () =>{
    let name = input.value;
    greet.innerText = `Good Morning ${name}`;
    input.value = "";
    input.style.display = "none";
})