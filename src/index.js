// li appear when mouse enters 

function hideli (){
  let Foodtext = document.getElementById(`Foodtext`);
  Foodtext.style.display = "block";
  // Foodtext.style.opacity = "0.7";
 
}
let Food=document.getElementById("Food");
Food.style.cursor = "pointer";
Food.addEventListener("mouseenter", hideli)


function hideli1 (){
  let NutrirtionText = document.getElementById(`NutrirtionText`);
  NutrirtionText.style.display = "block";
  // NutrirtionText.style.opacity = "0.7";
 
}
let Nutrition=document.getElementById("Nutrition");
Nutrition.style.cursor = "pointer";
Nutrition.addEventListener("mouseenter", hideli1)

function hideli2 (){
  let FarmingText = document.getElementById(`FarmingText`);
  FarmingText.style.display = "block";

}
let Farming=document.getElementById("Farming");
Farming.style.cursor = "pointer";
Farming.addEventListener("mouseenter", hideli2)

function hideli3 (){
  let SafetyText = document.getElementById(`SafetyText`);
  SafetyText.style.display = "block";
 
}
let Safety=document.getElementById("Safety");
Safety.style.cursor = "pointer";
Safety.addEventListener("mouseenter", hideli3)

function hideli4 (){
  let SupplementsText = document.getElementById(`SupplementsText`);
  SupplementsText.style.display = "block";
 
}
let Supplements=document.getElementById("Supplements");
Supplements.style.cursor = "pointer";
Supplements.addEventListener("mouseenter", hideli4)

function hideli5 (){
  let GardenText = document.getElementById(`GardenText`);
  GardenText.style.display = "block";
 
}
let Garden=document.getElementById("Garden");
Garden.style.cursor = "pointer";
Garden.addEventListener("mouseenter", hideli5)

//Use JAva Script On SIgn Up PAge,prompt to alert for name on Contact PAge alert and newsletter
// learn media query