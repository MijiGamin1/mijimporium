var muttext;
var lines;
var ptext;
let linelen;

function pUpdate() { //updates text
lines = document.getElementById("ta").value.split("\n").filter(line => line.trim() !== "");
ptext = muttext;
    lines.forEach((item, index) => {
ptext = ptext.replaceAll(item, index + "~");
});
document.getElementById("tatext").innerHTML = ptext;
    
    linelen = 0; //finds the combined length of all items in the "lines" list
    lines.forEach((item) => {
    linelen = linelen + item.length;
});
    document.getElementById("score").innerHTML = "Score: " + (muttext.length - (linelen + (ptext.length - tildeBGone()))); //score calculation
    document.getElementById("percent").innerHTML = (1 - (linelen + (ptext.length - tildeBGone())) / muttext.length) * 100 + "% compressed"; //percent compressed calculation
}
    
setInterval(pUpdate, 100);

function fileread(input) { //opens given file and sets it to the "muttext" variable
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
    const filetext = reader.result;
    muttext = filetext.replace(/(\r\n|\n|\r)/gm, " ");; //gets rid of all line breaks
    document.getElementById("tatext").innerHTML = muttext;
};
}
function tildeBGone() { //compresses compression representatives into single symbols when score is calculated
let tildes = 0;
if (lines.length > 10) {
    tildes += (lines.length - 10) * 2;
        return tildes + 10;
    }
    return tildes + lines.length;
}
