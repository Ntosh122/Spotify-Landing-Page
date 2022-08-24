const body = document.body;

const hamburgerToggler = document.querySelector(".toggler");

// set event listener to hamburger
hamburgerToggler.addEventListener("change", (e) =>{
    e.target.checked
    ?  (body.style.overflowY = "hidden")
    :  (body.style.overflowY = "scroll");
});