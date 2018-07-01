// Select color input
// Select size input

//declaration of variables
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWeight");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");


color.addEventListener("click", function(){});
//when the form is submitted this runs
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

//function for making the grid
function makeGrid() {
    for (var r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (var c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}
//function for clearing the grid
function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}


function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}