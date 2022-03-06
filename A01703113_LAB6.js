//JAVASCRIPT LAB 6

function validar(){
    let txt_confirm=document.getElementById("txt_confirm").value;
    let txt_contraseña=document.getElementById("txt_contraseña").value;

    if(txt_contraseña=="" & txt_confirm==""){
        window.alert("No has ingresado tu contraseña");
    }

    else if(txt_contraseña=="" || txt_confirm==""){
        window.alert("La contraseña no coincide");
    }
    else if(txt_contraseña == txt_confirm){
        window.alert("¡La contraseña es correcta!")
    };
};

function añadirbanana(){
    let cantb = 0;
    let label_banana = document.getElementById("banana");
    label_banana.innerHTML = cantb+1;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 350;
};

function añadirpumpkin(){
    let cantp = 0;
    let label_pumpkin = document.getElementById("pumpkin");
    label_pumpkin.innerHTML = cantp+1;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 350;
};

function añadirapple(){
    let canta = 0;
    let label_apple = document.getElementById("apple");
    label_apple.innerHTML = canta+1;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 350;
};

/*
function añadirbanana(){
    let cantb = 0;
    let cantp = 0;
    let canta = 0;
    let label_banana = document.getElementById("banana");
    label_banana.innerHTML = cantb+1;
    let label_pumpkin = document.getElementById("pumpkin");
    label_pumpkin.innerHTML = cantp+1;
    let label_apple = document.getElementById("apple");
    label_apple.innerHTML = canta+1;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 350;
};

function eliminar(){
    let label_banana = document.getElementById("banana");
    label_banana.innerHTML = 0;
    let label_pumpkin = document.getElementById("pumpkin");
    label_pumpkin.innerHTML = 0;
    let label_apple = document.getElementById("apple");
    label_apple.innerHTML = 0;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 0;
};*/

function eliminarbanana(){
    let label_banana = document.getElementById("banana");
    label_banana.innerHTML = 0;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 0;
};

function eliminarpumpkin(){
    let label_pumpkin = document.getElementById("pumpkin");
    label_pumpkin.innerHTML = 0;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 0;
};

function eliminarapple(){
    let label_apple = document.getElementById("apple");
    label_apple.innerHTML = 0;
    label_buy = document.getElementById("buy");
    label_buy.innerHTML = "$" + 0;
};