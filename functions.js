document.getElementById("resumen").addEventListener("click", sumar);
document.getElementById("borrar").addEventListener("click", borrar);


function sumar(){
    var cantidad = document.getElementById("cantidad_tickets").value;
    var categoria = document.getElementById("inputState").value;
    if(categoria == "ninguna"){
        document.getElementById("precio").innerHTML = cantidad * 200;
    }
    else if(categoria == "estudiante"){
        document.getElementById("precio").innerHTML = cantidad * 200 * 0.2;
    }
    else if(categoria == "trainee"){
        document.getElementById("precio").innerHTML = cantidad * 200 * 0.5;
    }
    else if(categoria == "junior"){
        document.getElementById("precio").innerHTML = cantidad * 200 * 0.85;
    }
};


function borrar(){
    document.getElementById("cantidad_tickets").value = 0;
    document.getElementById("precio").innerHTML = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("inputState").value = "ninguna";
}