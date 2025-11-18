let currentState = true;
let changeButton = document.getElementById('theme_switch');

function switchTheme() {
    if (currentState) {
        document.getElementById('style').href = "stylenight.css";
        document.getElementById('theme_state').src='images/sunn.png';
        document.getElementById('insta').src='images/instagram.png';
        document.getElementById('tiktok').src='images/tik-tok.png';
        document.getElementById('twit').src='images/twitter.png';
    } 
    else{
        document.getElementById('style').href = "styleday.css";
        document.getElementById('theme_state').src='images/moon.png';
        document.getElementById('insta').src='images/instagram_day.png';
        document.getElementById('tiktok').src='images/tik-tok_day.png';
        document.getElementById('twit').src='images/twitter_day.png';
    }
    currentState = !currentState;
}

if (changeButton) {
    changeButton.addEventListener('click', switchTheme);
}
