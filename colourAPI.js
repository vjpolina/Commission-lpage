const selPalette = document.getElementById("clrPalette");
const genPalette = document.getElementById("generatedPalette");

console.log(selPalette);
console.log(genPalette);

selPalette.addEventListener("onchange", (event)=>{
    console.log("selPalette");
    const chosenClr= event.target.value;
    console.log(chosenClr);

    const clrURL = "https://colormagic.app/api/palette/search?q=" + chosenClr;

    fetch(clrURL)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const paletteLink = data.message;

      genPalette.setAttribute("src", paletteLink);

});
});