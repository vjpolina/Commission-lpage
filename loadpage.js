const content = {
    topBarImg: "images/logo1.png",
    topBartext: ["That__po__'s Commissions", "Submit a Form", "Portfolio"],
    images: [ " ", " ", " "],
    info: `<b>The perfect place to order a custom illustration!</b><br><br>
           Here we offer commercial and non-commercial custom designs for:
           <ul>
             <li>Posters</li>
             <li>Photocards</li>
             <li>Pins (Both plastic and enamel)</li>
             <li>Stickers</li>
             <li>And more!</li>
           </ul>
           Click on 'Submit a form' to request your own custom design now!`,

    formText: `Fill out the following form for your commission: <br><br>
            <form>

                <label for="email">Email: </label>
                <input type="text" id="email" placeholder="youremail@here.com"><br><br>
                Type of item:<br>

                <input type="checkbox" id="item1">
                <label for="item1"> Poster</label><br>
                <input type="checkbox" id="item2">
                <label for="item2"> Photocard</label><br>
                <input type="checkbox" id="item3">
                <label for="item3"> Keychain</label><br>
                <input type="checkbox" id="item4">
                <label for="item4"> Icon</label><br><br>

                <button>Submit</button>
            </form>`,

    paletteSelection: ``,

    bottomBar: [ "Terms and conditions", "Copyright", "Contact me:" ],
    bottomBarIcons: [ "images/instagram_day.png", "images/tik-tok_day.png", "images/twitter_day.png"],

};


const body = document.getElementsByTagName("body")[0];


const topBar = document.createElement("div");
topBar.className = "top_bar";
body.appendChild(topBar);


const topBarImg = document.createElement("img");
topBarImg.src = content.topBarImg;
topBarImg.id = "logo";
topBar.appendChild(topBarImg);

const topText = document.createElement("div");
topText.className = "top_text";
topBar.appendChild(topText);



for (let i = 0; i < content.topBartext.length; i++) {
    const a = document.createElement("a");
    a.textContent = content.topBartext[i];
    topText.appendChild(a);
    
    if (i == 1) {
        a.id="form_link";
    }
    else if(i==0){
        a.id="homepage_link";
    }
}

const themeButton = document.createElement("button");
themeButton.id = "theme_switch";
const themeImg = document.createElement("img");
themeImg.id = "theme_state";
themeImg.src = "images/moon.png";
themeButton.appendChild(themeImg);
topBar.appendChild(themeButton);


const textBox = document.createElement("div");
textBox.className = "text_box";

const tbContainer = document.createElement("div");
tbContainer.className = "tb_container";
body.appendChild(tbContainer);
tbContainer.appendChild(textBox);

const textBoxInfo = document.createElement("a");
textBoxInfo.id = "text_box_info";
textBoxInfo.innerHTML = content.info;
textBox.appendChild(textBoxInfo);

const imgContainer = document.createElement("div");
imgContainer.className = "img_container";
body.appendChild(imgContainer);


async function fetchNekoImage() {
    try {
        const res = await fetch('https://api.nekosia.cat/api/v1/images/catgirl');
        const json = await res.json();
        return json.image.original.url;
    } catch (err) {
        console.error('Error fetching Neko image:', err);
        return '';
    }
}

async function addVerticalImage(container, index) {
    try {
        const url = await fetchNekoImage();
        const img = new Image();
        img.src = url;
        img.onload = function () {
            if (img.height > img.width) {
                const imgElement = document.createElement('img');
                imgElement.src = url;
                imgElement.id = `layer${index + 1}`;
                imgElement.alt = '';
                container.appendChild(imgElement);
            } else {
                console.log('Image is not vertical, fetching another image:', url);
                addVerticalImage(container, index);
            }
        };
        img.onerror = function () {
            console.error('Error loading image, retrying:', url);
            addVerticalImage(container, index);
        };
    } catch (err) {
        console.error('Error fetching image, retrying:', err);
        addVerticalImage(container, index); 
    }
}

if (imgContainer) {
    for (let i = 0; i < 3; i++) {
        addVerticalImage(imgContainer, i);
    }
}

const bottomBar = document.createElement("div");
bottomBar.className = "bottom_bar";
body.appendChild(bottomBar);


    const bottomTextSpan = document.createElement("span");
    bottomTextSpan.className = "bottom_text";
    bottomBar.appendChild(bottomTextSpan);
    
    for(let i = 0; i < content.bottomBar.length; i++) {
        const bottomText = document.createElement("a");
        bottomText.textContent = content.bottomBar[i];
        bottomTextSpan.appendChild(bottomText);
    }
    
    for(let i = 0; i < content.bottomBarIcons.length; i++) {
        const iconLink = document.createElement("a");
        iconLink.target = "_blank";
        const icon = document.createElement("img");
        icon.src = content.bottomBarIcons[i];
        switch(i) {
            case 0: 
                icon.id = "insta";
                icon.alt = "instagram";
                iconLink.href = "https://www.instagram.com";
                break;
            case 1: 
                icon.id = "tiktok";
                icon.alt = "tiktok";
                iconLink.href = "https://www.tiktok.com/explore";
                break;
            case 2: 
                icon.id = "twit";
                icon.alt = "twitter";
                iconLink.href = "https://www.twitter.com";
                break;
        }

        iconLink.appendChild(icon);
        bottomBar.appendChild(iconLink);
    }


const consoleButton = document.createElement("button");
consoleButton.id="consoleButton";
consoleButton.innerText="'Hello!'";
bottomBar.appendChild(consoleButton);