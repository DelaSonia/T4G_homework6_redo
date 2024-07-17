 
function signup1 (){
    let Name = document.getElementById(`Name`);
    Name.style.display = "block";
  }
  let FormContainer=document.getElementById("FormContainer");
  FormContainer.style.cursor = "pointer";
  FormContainer.addEventListener("mouseenter", signup1);

  
function signup2 (){
    let Number = document.getElementById(`Number`);
    Number.style.display = "block";
    
  }
  let Name=document.getElementById("Name");
  Name.style.cursor = "pointer";
  Name.addEventListener("mouseenter", signup2);

function signup3 (){
    let Email = document.getElementById (`Email`);
    Email.style.display = "block";
 }

 let Number=document.getElementById ("Number");
 Number.style.cursor = "pointer";
 Number.addEventListener("mouseenter", signup3);

function signup4 () {
    let Address = document.getElementById (`Address`);
    Address.style.display = "block";
 }

 let Email = document.getElementById (`Email`);
 Email.style.cursor = "pointer";
 Email.addEventListener("mouseenter",signup4);

 function signup5 () {
    let Bio = document.getElementById (`Bio`);
    Bio.style.display = "block";
 }

 let Address = document.getElementById (`Address`);
 Address.style.cursor = "pointer";
 Address.addEventListener("mouseenter",signup5);

 function signup6 () {
    let Password = document.getElementById (`Password`);
    Password.style.display = "block";
 }

 let Bio = document.getElementById (`Bio`);
 Bio.style.cursor = "pointer";
 Bio.addEventListener("mouseenter",signup6);

 function signup7 () {
    let ConfirmPassword = document.getElementById (`ConfirmPassword`);
    ConfirmPassword.style.display = "block";
 }

 let Password = document.getElementById (`Password`);
 Password.style.cursor = "pointer";
 Password.addEventListener("mouseenter",signup7);
