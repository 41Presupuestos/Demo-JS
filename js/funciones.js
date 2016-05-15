function validarFormularioRegistro()
{
    //DOM html
    var nombre = document.getElementById("txtNombre").value;
    var direccion = document.getElementById("txtDireccion").value;
    var telefono = document.getElementById("txtTelefono").value;

    if(nombre.length==0){
      alert("Ingrese el Nombre");
      return false;
    }

    if(direccion.length==0){
      alert("Ingrese la Direccion");
      return false;
    }

    if(telefono.length==0){
      alert("Ingrese el Numero de Telefono");
      return false;
    }
    return true;
}

function validarFormularioFoocus() {
    var nombre = document.getElementById("txtNombre");
    var direccion = document.getElementById("txtDireccion");
    var telefono = document.getElementById("txtTelefono");
    
    if (nombre.values.length==0) {
      alert("Ingrese el Nombre");
      nombre.focus();
      return false;
    }
    
    if (direccion.values.length==0) {
      alert("Ingrese la Direccion");
      direccion.focus();
      return false;
    }
    
    if (telefono.values.length==0) {
      alert("Ingrese el Telefono");
      telefono.focus();
      return false;
    }
    return true;
}

function validarFormularioResumen(){
    var errores = "";
    var nombre = document.getElementById("txtNombre").value;
    var direccion = document.getElementById("txtDireccion").value;
    var telefono = document.getElementById("txtTelefono").value;
    
    if (nombre.length==0) {
      errores += "*Ingrese el Nombre <br>";
    }
    
    if (direccion.length==0) {
      errores += "* Ingrese la Direccion <br>";
    }
    
    if (telefono.length==0) {
      errores += "* Ingrese el Telefono";
    }
    
    if (errores.length>0) {
      var error = document.getElementById("error");
      error.innerHTML = errores;
      return false;
    }else{
      return true;
    }
}