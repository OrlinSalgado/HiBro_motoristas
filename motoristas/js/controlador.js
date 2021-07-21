function registrarse(){
    console.log("registrarse");
    document.getElementById('cuerpo').style.background='linear-gradient(to  bottom, #76259f,#ffffff)';
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
   
   
    
   
    document.getElementById('contenidoRegistrar').style.display= "block";
    document.getElementById('contenidoRegistrar2').style.display= "block";
    document.getElementById('btnRegistro').style.display= "none";
    
}
function ordenes(){
    document.getElementById('bienvenidoMotorista').style.display= "block";
    document.getElementById('imagenLogo').style.display= "none";
    document.getElementById('navegacion').style.justifyContent= "space-between";
    document.getElementById('navegacion').innerHTML +=`
    <div class="tamano flex_container3"><img src="img/cuenta.png"  width="70px" id="imagenCuenta"></div>`;
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
    document.getElementById('btnRegistro').style.display= "none";
   
    
}
function tomarOrden(){
    console.log('tomar orden');
}
function ordenesTomadas(){
    console.log('ordenes tomadas');
}
function ordenesEntregadas(){
    console.log('ordenes entregadas');
}
