let currentState = true;
let changeButton = document.getElementById('theme_switch');

window.addEventListener("load", () => {

  const theme = localStorage.getItem("theme");
  console.log("theme: ", theme);

  if (theme === 'night') {
        document.getElementById('style').href = "stylenight.css";
        document.getElementById('theme_state').src='images/sunn.png';
        document.getElementById('insta').src='images/instagram.png';
        document.getElementById('tiktok').src='images/tik-tok.png';
        document.getElementById('twit').src='images/twitter.png';
        document.getElementById('logo').src='images/logo2.png';

  } else {
    document.getElementById('style').href = "styleday.css";
        document.getElementById('theme_state').src='images/moon.png';
        document.getElementById('insta').src='images/instagram_day.png';
        document.getElementById('tiktok').src='images/tik-tok_day.png';
        document.getElementById('twit').src='images/twitter_day.png';
        document.getElementById('logo').src='images/logo1.png';
  }
});

function switchTheme() {
    if (currentState) {
        document.getElementById('style').href = "stylenight.css";
        document.getElementById('theme_state').src='images/sunn.png';
        document.getElementById('insta').src='images/instagram.png';
        document.getElementById('tiktok').src='images/tik-tok.png';
        document.getElementById('twit').src='images/twitter.png';
        document.getElementById('logo').src='images/logo2.png';

        localStorage.setItem("theme", "night");
    } 
    else{
        document.getElementById('style').href = "styleday.css";
        document.getElementById('theme_state').src='images/moon.png';
        document.getElementById('insta').src='images/instagram_day.png';
        document.getElementById('tiktok').src='images/tik-tok_day.png';
        document.getElementById('twit').src='images/twitter_day.png';
        document.getElementById('logo').src='images/logo1.png';

        localStorage.setItem("theme", "day");
    }
    currentState = !currentState;
}

if (changeButton) {
    changeButton.addEventListener('click', switchTheme);
}
