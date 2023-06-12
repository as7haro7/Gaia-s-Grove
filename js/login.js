
function verificarDatos() {
  var correo = document.getElementById("email").value;
  var contraseña = document.getElementById("pass").value;

  if (correo === "1234" && contraseña === "1234") {
    console.log("entra")
    window.location.href = "index.html";
  } else {
    alert("Los datos ingresados no son válidos. Por favor, inténtalo nuevamente.");
  }
}


