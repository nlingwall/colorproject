///Example Code

/*function greetings() {
  console.log(2 + 2);
}

var signInBtn = document.getElementById("sign-in");
var colorsSelect = document.getElementById("colors");
var updateButton = document.getElementById("color-update");

signInBtn.addEventListener("click", clickCallback);

document.addEventListener("click", function() {
  console.log("stop poking me!");
});

var searchBox = document.getElementById("search");
searchBox.addEventListener("keyup", function(event) {
  console.log(event);
  event.target.value += "I SEE YOU";
});

var colors = ["green", "blue", "yellow", "red"];


for (var i = 0; i < colors.length; i++) {
  addColorOption(colors[i]);
}
//need to add remove the current function and another on that adds the function
updateButton.addEventListener("click", function() {

  var currColor = colorsSelect.value;
  document.body.style.backgroundColor = currColor;
});

function addColorOption(color) {
  var newOption = document.createElement("option");
  newOption.value = color;
  newOption.innerText = color;
  colorsSelect.appendChild(newOption);
}

function removeColorOption(color){
  var oldOption = document.createElement("option");
  oldOption.value =color
}


function clickCallback(event) {
  var newElement = document.createElement("div");
  newElement.innerText = "hi";
  document.body.appendChild(newElement);
  event.stopPropagation();
}*/

//Color Changing Buttons
var arrcolors =['SelectColor','AliceBlue',
'AntiqueWhite',
  'Aqua',
  'Aquamarine',
  'Azure',
  'Bisque',
  'Black',
  'BlanchedAlmond',
  'BlueViolet',
  'Brown',
  'BurlyWood',
  'CadetBlue',
  'Chartreuse',
  'Chocolate',
  'Coral',
  'CornflowerBlue',
  'Cornsilk',
  'Crimson',
  'Cyan',
  'DarkBlue',
  'DarkCyan',
  'DarkGoldenRod',
  'DarkGray',
  'DarkGreen',
  'DarkKhaki',
  'DarkMagenta',
  'DarkOliveGreen',
  'DarkOrange',
  'DarkOrchid',
  'DarkRed',
  'DarkSalmon',
  'DarkSeaGreen',
  'DarkSlateBlue',
  'DarkSlateGray',
  'DarkTurquoise',
  'DarkViolet',
  'DeepPink',
  'DeepSkyBlue',
  'DimGray',
  'DodgerBlue',
  'FireBrick',
  'FloralWhite',
  'ForestGreen',
  'Fuchsia',
  'Gainsboro',
  'GhostWhite',
  'Gold',
  'GoldenRod',
  'Gray',
  'Grey',
  'Green',
  'GreenYellow',
  'HoneyDew',
  'HotPink',
  'IndianRed',
  'Indigo',
  'Ivory',
  'Khaki',
  'Lavender',
  'LavenderBlush',
  'LawnGreen',
  'LemonChiffon',
  'LightBlue',
  'LightCoral',
  'LightCyan',
  'LightGoldenRodYellow',
  'LightGray',
  'LightGrey',
  'LightGreen',
  'LightPink',
  'LightSalmon',
  'LightSeaGreen',
  'LightSkyBlue',
  'LightSlateGray',
  'LightSlateGrey',
  'LightSteelBlue',
  'LightYellow',
  'Lime',
  'LimeGreen',
  'Linen',
  'Magenta',
  'Maroon',
  'MediumAquaMarine',
  'MediumBlue',
  'MediumOrchid',
  'MediumPurple',
  'MediumSeaGreen',
  'MediumSlateBlue',
  'MediumSpringGreen',
  'MediumTurquoise',
  'MediumVioletRed',
  'MidnightBlue',
  'MintCream',
  'MistyRose',
  'Moccasin',
  'NavajoWhite',
  'Navy',
  'OldLace',
  'Olive',
  'OliveDrab',
  'Orange',
  'OrangeRed',
  'Orchid',
  'PaleGoldenRod',
  'PaleGreen',
  'PaleTurquoise',
  'PaleVioletRed',
  'PapayaWhip',
  'PeachPuff',
  'Peru',
  'Pink',
  'Plum',
  'PowderBlue',
  'Purple',
  'RebeccaPurple',
  'RosyBrown',
  'RoyalBlue',
  'SaddleBrown',
  'Salmon',
  'SandyBrown',
  'SeaGreen',
  'SeaShell',
  'Sienna',
  'Silver',
  'SkyBlue',
  'SlateBlue',
  'SlateGray',
  'SlateGrey',
  'Snow',
  'SpringGreen',
  'SteelBlue',
  'Tan',
  'Teal',
  'Thistle',
  'Tomato',
  'Turquoise',
  'Violet',
  'Wheat',
  'White',
  'WhiteSmoke',
  'YellowGreen'];

var colorsExist = ['Red','Yellow','Blue'];

var colorsSelect = document.getElementById("switch");

var addButton =document.getElementById("add-new");

var buttonGrab = document.getElementById("button");

var redColor = document.getElementById("red");

var blueColor = document.getElementById("blue");

var yellowColor = document.getElementById("yellow");

var backGroundColor = document.body.style.backgroundColor;

var removeButton =  document.getElementById("remove-current");

var addLine = document.getElementById("add");


function addColor(color) {
  var newOption = document.createElement("option");
      newOption.value = color;
      newOption.innerText = color;
      newOption.id = "option"+color;
      /*var optionScript = document.createElement("script");
        optionScript.innerHTML ="function option"+color+"(){"
       + "var option"+color+" = document.getElementById('option"+color+"');"
       + "var parent"+color+" = document.getElementById('switch');"
       + "parent"+color+".removeChild(option"+color+");"
       + "}";
       document.body.appendChild(optionScript);*/
      colorsSelect.appendChild(newOption);
}



for (var i = 0; i < arrcolors.length; i++) {
  addColor(arrcolors[i]);
}



function newButton (event) {
  var option = "option"
  var currColor = colorsSelect.value;
  var newElement = document.createElement("button");
  var newScript = document.createElement("script");
  newElement.innerText = currColor;
  newElement.style.backgroundColor = currColor;
  newElement.id = currColor.toLowerCase();
  newElement.className = "button";
  newScript.innerHTML =
     "var "+currColor+ "Color = document.getElementById(\""+currColor.toLowerCase()+"\");\n" 
   + "function "+currColor+"Change (event){\n"
   +"var "+currColor+"ColorClass = document.getElementById(\""+currColor.toLowerCase()+"\").style.backgroundColor;\n"
   +"document.body.style.backgroundColor = "+currColor+"ColorClass;\n"
   +"}\n"
   +currColor+"Color.addEventListener('click',"+currColor+"Change);\n";
   newScript.id = currColor.toLowerCase();
  document.getElementById("add").appendChild(newElement);
  document.body.appendChild(newScript);
  //remove name
  var childOption = document.getElementById('option'+currColor);
  var parentOption= document.getElementById('switch');
  parentOption.removeChild(childOption);
  event.stopPropagation();
};

addButton.addEventListener('click', newButton);

function redChange (event){
  var redColorClass = document.getElementById("red").style.backgroundColor;
  document.body.style.backgroundColor = redColorClass;
  }

function blueChange (event){
  var blueColorClass = document.getElementById("blue").style.backgroundColor;
  document.body.style.backgroundColor = blueColorClass;
  }

function yellowChange (event){
  var yellowColorClass = document.getElementById("yellow").style.backgroundColor;
  document.body.style.backgroundColor = yellowColorClass;
  }

redColor.addEventListener('click',redChange);

blueColor.addEventListener('click',blueChange);

yellowColor.addEventListener('click',yellowChange);

function colorRemove(event){
  var parentElement = addLine;
  var childElement = document.getElementById(document.body.style.backgroundColor);
  var restoreOption = document.createElement("option");
  addColor(document.body.style.backgroundColor);
  parentElement.removeChild(childElement);
  document.body.style.backgroundColor = "white";
  event.stopPropagation();
}



removeButton.addEventListener('click',colorRemove);

/*function colorChange (event){
  var colorClass = document.getElementById("button").style.backgroundColor;
  document.body.style.backgroundColor = colorClass;
}*/









