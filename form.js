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

function loadForm() {
    textBoxInfo.innerHTML = content.formText;
    localStorage.setItem("openPage", "form");
}

function loadHome() {
    textBoxInfo.innerHTML = content.info;
    localStorage.setItem("openPage", "home");
}

homeLink.addEventListener("click", loadHome);
formLink.addEventListener("click", loadForm);