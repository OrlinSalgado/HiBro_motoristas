function registrarse(){
    console.log("registrarse");
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
    document.getElementById('contPrincipal').style.backgroundColor= "white";
    document.getElementById('contenidoRegistrar').style.display= "block";
    document.getElementById('contenidoRegistrar2').style.display= "block";
    document.getElementById('btnRegistro').style.display= "none";
    
}
function ordenes(){
    document.getElementById('bienvenidoMotorista').style.display= "block";
    document.getElementById('cuerpo').style.backgroundImage = 'url(img/ramas.png)';
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
    document.getElementById('btnRegistro').style.display= "none";
    document.getElementById('contPrincipal').style.borderRadius = '0px';
}