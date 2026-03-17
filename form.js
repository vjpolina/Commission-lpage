const formLink = document.getElementById("form_link");
const homeLink = document.getElementById("homepage_link");

if (!textBoxInfo) {
    textBoxInfo = document.createElement("div");
    textBoxInfo.id = "text_box_info";
    body.appendChild(textBoxInfo);
}

window.addEventListener("load", () => {
    const openPage = localStorage.getItem("openPage");
    if (openPage === "form") {
        loadForm();
    } else {
        loadHome();
    }   
});


function loadForm() {textBoxInfo.innerHTML = content.formText;

    const injectedForm = textBoxInfo.querySelector("form");
    if (injectedForm) {
        const emailInput = injectedForm.querySelector("#email");
        const displayEmail = document.createElement("p");
        if (emailInput) {
            emailInput.addEventListener("input", (event) => {
                console.log(event.target.value);
                if (event.target.value === "") {
                    displayEmail.textContent = " ";
                } else {
                displayEmail.textContent = event.target.value + " is making a commission...";
                textBoxInfo.appendChild(displayEmail);}
            });
        }
        injectedForm.addEventListener("submit", function(event) {
            event.preventDefault();
            injectedForm.reset();
            textBoxInfo.removeChild(displayEmail);
        });
    }

    localStorage.setItem("openPage", "form");
}


function loadHome() {
    textBoxInfo.innerHTML = content.info;
    localStorage.setItem("openPage", "home");
}

homeLink.addEventListener("click", loadHome);
formLink.addEventListener("click", loadForm);