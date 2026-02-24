const formLink = document.getElementById("form_link");

formLink.addEventListener("click", function() {
    textBoxInfo.innerHTML = content.formText;

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
});