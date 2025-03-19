document.getElementById("formu").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let contra = document.getElementById("contra");
    let contra2 = document.getElementById("contra2");

    let x = true;

    
    if (nombre.value.length < 3) {
        document.getElementById("errornombre").textContent = "el nombre tiene que tener 3 letras minimo";
        x = false;
    } else {
        document.getElementById("errornombre").textContent = "";
    }

   
    let emailpre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailpre.test(email.value)) {
        document.getElementById("erroremail").textContent = "pone un email valido";
        x = false;
    } else {
        document.getElementById("erroremail").textContent = "";
    }

    
    let contraRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!contraRegex.test(contra.value)) {
        document.getElementById("errorcontra").textContent = "la contraseña tiene que tener 8 caracteres y una letra y un numero minimo";
        x = false;
    } else {
        document.getElementById("errorcontra").textContent = "";
    }

    
    if (contra.value !== contra2.value) {
        document.getElementById("errorcontra2").textContent = "Las contraseñas no coinciden.";
        x = false;
    } else {
        document.getElementById("errorcontra2").textContent = "";
    }

   
    if (x) {
        alert("Formulario enviado correctamente.");
    }
});
