const content = {
    topBarImg: "images/logo1.png",
    topBartext: ["That__po__'s Commisions", "Submit a Form", "Portfolio"],
    info: "<b>The perfect place to order a custom illustration!</b><br><br>Here we offer commercial and non-commercial custom designs for:<i> <ul>Posters</ul><ul>Photocards</ul><ul>Pins (Both plastic and enamel)</ul><ul>Stickers</ul><ul>And more!</ul></i><br>Click on 'Submit a form' to request your own custom design now!"
}

const textBox = document.getElementsByClassName("text_box");
const textBoxInfo = document.createElement("a");

textBoxInfo.innerHTML = content.info;

textBox[0].appendChild(textBoxInfo);
