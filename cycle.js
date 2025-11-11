var currentState = true;
let changeButton = document.getElementById('theme_switch');

function switchTheme() {
    if (currentState) {
        document.getElementById('style').href = "stylenight.css";
        changeButton.innerText='☀️';
    } 
    else{
        document.getElementById('style').href = "styleday.css";
        changeButton.innerText='🌙';
    }
    currentState = !currentState;
}

changeButton.addEventListener('click', switchTheme);
