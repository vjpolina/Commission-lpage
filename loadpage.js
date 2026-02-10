const content = {
    topBarImg: "images/logo1.png",
    topBartext: ["That__po__'s Commissions", "Submit a Form", "Portfolio"],
    images: [
        "images/img1.png",
        "images/img2.png",
        "images/img3.png"
    ],
    info: `<b>The perfect place to order a custom illustration!</b><br><br>
           Here we offer commercial and non-commercial custom designs for:
           <ul>
             <li>Posters</li>
             <li>Photocards</li>
             <li>Pins (Both plastic and enamel)</li>
             <li>Stickers</li>
             <li>And more!</li>
           </ul>
           Click on 'Submit a form' to request your own custom design now!`
};

const textBox = document.getElementsByClassName("text_box");
const textBoxInfo = document.createElement("a");
textBoxInfo.innerHTML = content.info;

if (textBox.length > 0) {
    textBox[0].appendChild(textBoxInfo);
}

const imgContainer = document.getElementsByClassName("img_container");

if (imgContainer.length > 0) {
    for (let i = 0; i < content.images.length; i++) {
        const img = document.createElement("img");
        img.src = content.images[i];
        img.id = `layer${i + 1}`;
        imgContainer[0].appendChild(img);
    }
}
