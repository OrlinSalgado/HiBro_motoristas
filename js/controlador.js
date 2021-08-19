var repartidorActual;

var ordenesSinTomar=[
    {
        cliente: 'Jose Lopez',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'portomar',
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
            }
          
        ],
    },
    {
        cliente: 'Maria Hernandez',
        ubicacion: 'colonia 21 de octubre etc',
        metodoPago: 'efectivo',
        codigo: 'WPF_214',
        fecha: '12/10/2021',
        estadoOrden: 'portomar',
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20,
                isv: 0.3
                
            }
          
        ],
    },
    {
        cliente: 'Jose Lopez',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'portomar',
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
            }
          
        ],
    },
    {
        cliente: 'Jose Lopez',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'portomar',
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
            }
          
        ],
    },
    
    
];

var ordenesTomadas=[
    {
        cliente: 'Pablo Garcia',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'tomada',
        estadoEntrega: 'sinTomar',
       
        estados: [
           'tomada', 'en camino','en el origen', 'en el destino','entregada'
        ],
        
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
                
            }
          
        ],
    },
    {
        cliente: 'Maria Sanches',
        ubicacion: 'colonia 30 de mayo etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WPF_214',
        fecha: '12/10/2021',
        estadoOrden: 'tomada',
        estadoEntrega: 'sinTomar',
        estados: [
            'tomada', 'en camino','en el origen', 'en el destino','entregada'
         ],
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20,
                isv: 0.3
                
            }
          
        ],
    },
    {
        cliente: 'Pablo Garcia',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'tomada',
        estadoEntrega: 'sinTomar',
       
        estados: [
           'tomada', 'en camino','en el origen', 'en el destino','entregada'
        ],
        
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
                
            }
          
        ],
    },
    {
        cliente: 'Pablo Garcia',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'tomada',
        estadoEntrega: 'sinTomar',
       
        estados: [
           'tomada', 'en camino','en el origen', 'en el destino','entregada'
        ],
        
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
                
            }
          
        ],
    },
];

var ordenesEntregadas=[
    {
        cliente: 'Julio Pineda',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        fecha: '12/10/2021',
        estadoOrden: 'entregada',
       
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15,
                isv: 0.3
                
            }
          
        ],
    },
    
    {
        cliente: 'Lucy Gomez',
        ubicacion: 'colonia 30 de mayo etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WPF_214',
        fecha: '12/10/2021',
        estadoOrden: 'entregada',
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10,
                isv: 0.3
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20,
                isv: 0.3
                
            }
          
        ],
    },
];

var facturas = [
    
    {
        repartidor:'',
        cliente: '',
        fehaEntrega: '',
        horaEntrega: '',
        
        isvTotal: '',
        comisionMotorista: '',
        comisionAdminidtracion: '',
        totalComision: '',
        totalPagar: '',
        pedidos:[
            {
                nombreProducto: '',
                precioProducto: '',
            }
        ]

    }
        
    
];


function registrarse(){
    console.log("registrarse");
    document.getElementById('barraNav').className='navbar navbar-light  barra3';
    document.getElementById('cuerpo').className='cuerpo-general fondo3';
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
   
    document.getElementById('contenidoRegistrar').style.display= "block";
    document.getElementById('contenidoRegistrar2').style.display= "block";
    document.getElementById('btnRegistro').style.display= "none";
    
}
function verificarRegistro(){
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let nombres = document.getElementById('rgNombres').value;
    let apellidos = document.getElementById('rgApellidos').value;
    let cedula = document.getElementById('rgCedula').value;
    let edad = document.getElementById('rgEdad').value;
    let correo = document.getElementById('rgCorreo').value;
    let celular = document.getElementById('rgTelefono').value;
    let direccion = document.getElementById('rgDireccion').value;
    let fechaNacimiento = document.getElementById('rgFechaNacimiento').value;
    let genero = '';
    let password = document.getElementById('rgPassword').value;
    if (document.getElementById('rdGenero1').checked) {
        genero = 'Hombre';
    }
    if (document.getElementById('rdGenero2').checked) {
        genero = 'Mujer';
    }
    if (nombres == "" || apellidos == "" || cedula == "" || edad == "" || correo == "" || celular == "" || direccion == "" || fechaNacimiento == "" || genero == "" || password == "") {
        document.getElementById('errorRegistro').innerHTML = 'llene todos lo campos';
        document.getElementById('errorRegistro').style.display = "block";
        document.getElementById('frmRegistro').className = 'error';
        alert('llene todos los campos');
    }
    else if(!re.exec(correo)){
		alert('email no valido');
        document.getElementById('errorRegistro').innerHTML = 'correo no valido';
        document.getElementById('errorRegistro').style.display = "block";
	}
    else{
        axios({
            url: '../backend/api/repartidoresPendientes.php',
            method: 'post',
            responseType: 'json',
            data: {
                "codigoRepartidor": null,
                "nombres": nombres,
                "apellidos": apellidos,
                "correo": correo,
                "contrasena": password,
                "cedula": cedula,
                "direccion": direccion,
                "celular": celular,
                "edad": edad,
                "fechaNacimiento": fechaNacimiento,
                "genero": genero,
                "estado": "pendiente",
                "comision": null
            }
        }).then(res=>{
            console.log(res.data);
            alert('solicitud enviada');
            document.getElementById('contenido').style.display = "block";
            document.getElementById('contenidoRegistrar').style.display = "none";
            document.getElementById('contenidoRegistrar2').style.display = "none";
           
        }).catch(error=>{
            console.error(error);
        });

       

    }

}

function loginRepartidor(){
    axios({
        url: '../backend/api/loginRepartidores.php',
        method: 'post',
        responseType: 'json',
        data: {
            "correo": document.getElementById('loginCorreo').value,
            "contraseña": document.getElementById('loginPassword').value
        }
    }).then(res=>{
        if (res.data.codigoRespuesta == 1) {
            document.getElementById('loginError').style.display = 'none';
            console.log(res);
            ordenes(res.data.repartidor);
        }else{
            document.getElementById('loginError').style.display = 'block';
            document.getElementById('loginError').innerHTML = 'Error datos erroneos';
            console.log('error datos incorrectos');
        }
       
    }).catch(error=>{
        console.error(error);
    });
}
function cerrarSesion(){
    axios({
        url: '../backend/api/cerrarSesionRepartidor.php',
        method: 'get',
        responseType: 'json',
        
    }).then(res=>{
        document.getElementById('contenido').style.display= "block";
        document.getElementById('bienvenidoMotorista').style.display= "none";
        document.getElementById('ordenesPorTomar').style.display= "none";
        document.getElementById('ordenesTomadas').style.display= "none";
        document.getElementById('ordenesEntregadas').style.display= "none";
        document.getElementById('botonCerrarSesion').style.display= "none";
        document.getElementById('navegacion').innerHTML=`
            <a class="navbar-brand" >
                <div class="flex_container tamano c4" >
                    <img src="img/logo.png" alt="" width="80px" id="imagenLogo">
                <h4>HiBro!</h4>
            </div>
            </a>
            <button class="btn btn-secondary boton " type="button" onclick="registrarse()" id="btnRegistro">registrarse</button>`;
        document.getElementById('cuerpo').className='cuerpo-general fondo1';
        document.getElementById('barraNav').className='navbar navbar-light  barra barra-general';
        
       
    }).catch(error=>{
        console.error(error);
    });
}

function ordenes(repartidor){
    repartidorActual = repartidor;
    let fondo=document.getElementById('cuerpo');
    fondo.className='cuerpo-general fondo2';
    let barra=document.getElementById('barraNav');
    barra.className='navbar navbar-light  barra2 barra-general';
    document.getElementById('tituloBienvenida').innerHTML = `Bienvenido ${repartidor.nombres}`;
    document.getElementById('verOrdenes').innerHTML = `
    <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto">
        <div class="info_orden flex_container2 c11 sombra1" style=" left: 80px; top: 20px;">
          <div class="info_orden2 c9 flex_container2 c7 cursor"onclick="tomarOrden()" style="padding-left:40px;"><h5>Tomar Nueva Orden</h5></div>
        </div>
        <div class="circulo c11 flex_container2 sombra1" style="bottom: 70px;"> 
          <img src="img/tomar.png" class="circulo2 cursor" onclick="tomarOrden()">
        </div>
      </div>
      
      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto">
        <div class="info_orden flex_container2 c11 sombra1" style=" left: 40px; bottom: 40px;">
          <div class="info_orden2 c9 flex_container2 c7 cursor" onclick="ordenTomada();"><h5 style="margin-left: 70px;">Ordenes Tomadas</h5></div>
        </div>
        <div class="circulo c11 flex_container2 sombra1" style="bottom: 130px; "> 
          <img src="img/tomadas.jpg" class="circulo2 cursor" onclick="ordenTomada();">
        </div>
      </div>

      <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-7 mx-auto">
        <div class="info_orden flex_container2 c11 sombra1" style=" left: 80px; bottom: 100px;">
          <div class="info_orden2 c9 flex_container2 c7 cursor" style="padding-left:40px;" onclick="ordenEntregada();"><h5>Ordenes Entregadas</h5></div>
        </div>
        <div class="circulo c11 sombra1 flex_container2" style="bottom: 190px;"> 
          <img src="img/entregadas.jpg" class="circulo2 cursor" onclick="ordenEntregada()">
        </div>
      </div>`;
    document.getElementById('bienvenidoMotorista').style.display= "block";
    //document.getElementById('imagenLogo').style.display= "none";
    //document.getElementById('navegacion').style.justifyContent= "space-between";
    document.getElementById('navegacion').innerHTML +=`
    
    <div style="width:max-content;"  id="botonCerrarSesion" onclick="cerrarSesion();"><div class="flex_container2"><img src="img/cuenta.png"  width="70px" id="imagenCuenta" class="centrar"></div>
    <i class="fas mx-2 fa-door-open c4"> cerrar sesion</i></div>
    <div id="mapa"></div>`;
    
    document.getElementById('contenido').style.display= "none";
    document.getElementById('contenido2').style.display= "none";
    document.getElementById('btnRegistro').style.display= "none";
   
    
}
function tomarOrden(){
    
    document.getElementById('barraNav').className='navbar navbar-light  barra4 barra-general';
    document.getElementById('cuerpo').className='cuerpo-general fondo4';
    
    document.getElementById('bienvenidoMotorista').style.display= "none";
   //// document.getElementById('base').style.display= "none";
    document.getElementById('ordenesPorTomar').style.display= "block";
    document.getElementById('ordenesPorTomar').innerHTML ='';

    axios({
        url: '../backend/api/ordenesSinTomar.php',
        method: 'get',
        responseType: 'json'
    }).then(res=>{
        ordenesSinTomar = res.data;
        ordenesSinTomar.forEach(function(sinTomar, i){
            document.getElementById('ordenesPorTomar').innerHTML += `
            <div class="col-10 mx-auto my-2 c10 row flex_container sombra2" style="text-align: left; font-size: 13px; border-radius: 20px;" onclick="mostrarDetalle(${i},'sinTomar');" data-bs-toggle="modal" data-bs-target="#detalleModal">
            <img src="img/libro1.png" style="width: 100px;">
            <div class="info_orden3  c7 c5 dis_bordes2 tamano3 sombra3 " >
              <p><b>cliente: </b> ${sinTomar.nombreCliente}<br><b>codigo: </b>${sinTomar.codigoOrden}</p>
            </div>  
        </div>
        <hr style="color: #531274;"> `;
        });
    }).catch(error=>{
        console.error(error);
    });

    
}
function ordenTomada(){
    document.getElementById('cuerpo').className=' fondo5';
    barra=document.getElementById('barraNav').className='navbar navbar-light  c12 barra-general';
    console.log('ordenes tomadas');
    document.getElementById('ordenesPorTomar').style.display= "none";
    document.getElementById('bienvenidoMotorista').style.display= "none";
    document.getElementById('ordenesTomadas').style.display= "block";
    document.getElementById('ordenesTomadas').innerHTML = '';
    axios({
        url: '../backend/api/ordenesTomadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor,
        method: 'get',
        responseType: 'json'
        
    }).then(res=>{
        res.data.forEach(function(tomadas, i){
            document.getElementById('ordenesTomadas').innerHTML += `
            <div class="col-10 mx-auto my-4 c12 borde2 row flex_container cursor" style="text-align: left; border-radius: 20px;"  onclick="mostrarEstado(${i}, 'tomada');" >
            <div class="info_orden3 my-2 mx-auto col-12 row" style="color: #ffffff; " >
              <div class="col-3 flex_container"><img src="img/libro2.png" style="width: 100px; position: absolute; ;left: 0px;" ></div>
                <div class="col-8 c9 c7 texto  flex_container"style="margin-left: auto; border-radius: 10px;">
                  <p><b>cliente: </b> ${tomadas.nombreCliente}
                  <br><b>codigo: </b>${tomadas.codigoOrden}</p>
                </div>
                <div class="row my-4">
                     <div  id= "mostrarEstado${i}" style="display: none;" class="flex-container2 col-12"></div>
                </div>
                
             
            </div>  
        </div>
        <hr style="color: #531274;">
     </div> `});
       
    }).catch(error=>{
        console.error(error);
    });
   
    

}

function ordenEntregada(){
    document.getElementById('cuerpo').className=' fondo6';
    document.getElementById('barraNav').className='navbar navbar-light  barra4 barra-general';
    
    console.log('ordenes entregadas');
    document.getElementById('bienvenidoMotorista').style.display= "none";
    //document.getElementById('base').style.display= "none";
    document.getElementById('ordenesPorTomar').style.display= "none";
    document.getElementById('ordenesTomadas').style.display= "none";
    document.getElementById('ordenesEntregadas').style.display= "block";
    document.getElementById('ordenesEntregadas').innerHTML = '';

    axios({
        url: '../backend/api/ordenesEntregadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor,
        method: 'get',
        responseType: 'json'
        
    }).then(res=>{
        console.log(res.data);
        res.data.forEach(function(entregadas, i){
            document.getElementById('ordenesEntregadas').innerHTML += `
            <div class="col-8 mx-auto my-2 c13 sombra4 row flex_container dis_bordes" style="text-align: left;" onclick="mostrarDetalle(${i},'entregada');" data-bs-toggle="modal" data-bs-target="#detalleModal">
            <div class= "col-4"><i class="fas fa-2x c4 fa-check-double"></i></div>
            
            <div class="  col-8 c4 c13 sombra4" >
              <p style="font-size: 12px;"><b>cliente: </b> ${entregadas.nombreCliente}<br><b>codigo: </b>${entregadas.codigoOrden}</p>
            </div>  
        </div>
         `;});
        
    }).catch(error=>{
        console.error(error);
    });
   
}

function mostrarDetalle(indice, estado){
    var orden='';
    console.log(indice,estado)
   
    if (estado==='tomada') {
        axios({
            url: '../backend/api/ordenesTomadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor+'&idOrden='+indice,
            method: 'get',
            responseType: 'json'
        }).then(res=>{
            orden = res.data;
            console.log(orden);
          document.getElementById('modalCabecera').innerHTML =`
            <h5 class="modal-title" id="detalleModalLabel">Orden tomada #${indice+1}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            `;
            mostrarOrden(orden);
        }).catch(error=>{
            console.error(error);
        });
        
    }
    else if (estado==='sinTomar') {
        axios({
            url: '../backend/api/ordenesSinTomar.php?idOrden='+indice,
            method: 'get',
            responseType: 'json'
        }).then(res=>{
            orden = res.data;
            
            document.getElementById('modalCabecera').innerHTML =`
             <h5 class="modal-title" id="detalleModalLabel">Orden sin tomar#${indice+1}</h5>
            <button type="button " class="btn btn-secondary boton2" onclick="guardarOrden(${indice});" data-bs-dismiss="modal" aria-label="Close">Tomar Orden</button>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            `;
            mostrarOrden(orden);
        }).catch(error=>{
            console.error(error);
        });
        
    }
    else{
        axios({
            url: '../backend/api/ordenesEntregadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor+'&idOrden='+indice,
            method: 'get',
            responseType: 'json'
        }).then(res=>{
            orden = res.data;
            document.getElementById('modalCabecera').innerHTML =`
         <h5 class="modal-title" id="detalleModalLabel">Orden entregada #${indice+1}</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
            
            mostrarOrden(orden);
        }).catch(error=>{
            console.error(error);
        });
        
        
    }
   
    /*console.log(orden);
    console.log('mostrar detalle' ,indice);
    document.getElementById('modalFondo').style.background ='linear-gradient(to bottom left, #541274, #9a79f4)';
    let pedidos=`<b>Empresa: </b>${orden.empresa}<br>`;
    for (let i = 0; i < orden.productos.length; i++) {
      pedidos +=`<p>
      <b>#${i+1}</b><br>
      
      <b>Producto: </b>${orden.productos[i].nombre}<br>
      <b>Descripcion: </b>no hay<br>
      <b>Cantidad: </b>${orden.cantidades[i]}<br>
      <b>precio: </b>${orden.productos[i].precio} $</p>`;  
        
    }

    document.getElementById('modalContenido').innerHTML =`
    <div class= "tamano2 c9 mx-auto contenedor"><p>
    <b>cliente: </b>${orden.nombreCliente}<br>
    <b>Ubicacion: </b>${orden.direccionEntrega}<br>
    <b>Metodo de pago: </b>tarjeta<br>
    <b>Fecha: </b>${orden.fecha}<br>
    <b>Hora: </b>${orden.hora}<br></p>
    <hr>
    <b>pedidos: </b>
    <hr>
    <div>${pedidos}</div>
    </div>`;*/
}
function guardarOrden(indice){
    
    console.log(repartidorActual);
    console.log(indice);
    axios({
        url: '../backend/api/ordenesSinTomar.php?idOrden='+indice,
        method: 'post',
        responseType: 'json',
        data: {
            "estado":"tomada",
            "estados":"",
            "coordenadasRepartidor":"",
            "nombreCliente":"",
            "nombreRepartidor":repartidorActual.nombres,
            "codigoCliente":"",
            "codigoRepartidor":repartidorActual.codigoRepartidor,
            "codigoOrden":"",
            "direccionEntrega":"",
            "empresa":"",
            "productos":"",
            "cantidades":"",
            "fecha":"",
            "hora":"",
            "isv":""
        }
    }).then(res=>{
        console.log(res.data);
    }).catch(error=>{
        console.error(error);
    });
}
function mostrarOrden(orden){
    document.getElementById('modalFondo').style.background ='linear-gradient(to bottom left, #541274, #9a79f4)';
    let pedidos=`<b>Empresa: </b>${orden.empresa}<br>`;
    for (let i = 0; i < orden.productos.length; i++) {
      pedidos +=`<p>
      <b>#${i+1}</b><br>
      
      <b>Producto: </b>${orden.productos[i].nombre}<br>
      <b>Cantidad: </b>${orden.cantidades[i]}<br>
      <b>precio: </b>${orden.productos[i].precio} $</p>`;  
        
    }

    document.getElementById('modalContenido').innerHTML =`
    <div class= "tamano2 c9 mx-auto contenedor"><p>
    <b>cliente: </b>${orden.nombreCliente}<br>
    <b>Ubicacion: </b>${orden.direccionEntrega}<br>
    <b>Fecha: </b>${orden.fecha}<br>
    <b>Hora: </b>${orden.hora}<br></p>
    <hr>
    <b>pedido: </b>
    <hr>
    <div>${pedidos}</div>
    </div>`; 
}
function mostrarEstado(indice, estado){
   let mostrar = document.getElementById(`mostrarEstado${indice}`).style.display;
    if (mostrar==='none') {
        document.getElementById(`mostrarEstado${indice}`).style.display= 'block';
    }
    else{
        document.getElementById(`mostrarEstado${indice}`).style.display= 'none'; 
    }
    document.getElementById(`mostrarEstado${indice}`).innerHTML =``;
    document.getElementById(`mostrarEstado${indice}`).innerHTML =`
        <button type="button" class="btn btn-secondary boton  my-1 " onclick="mostrarDetalle(${indice},'${estado}');" data-bs-toggle="modal" data-bs-target="#detalleModal">Ver orden</button>
        <h6 class="c7">Estado: </h6>`;
        axios({
            url: '../backend/api/ordenesTomadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor,
            method: 'get',
            responseType: 'json'
            
        }).then(res=>{
            res.data[indice].estados.forEach(function(actual,i){
                let opcion='';
                if (actual==='entregada') {
                    opcion='data-bs-toggle="modal" data-bs-target="#detalleModal"';
                }
                document.getElementById(`mostrarEstado${indice}`).innerHTML +=`
                <button type="button" class="btn btn-secondary bt bt${i+1} my-1 mx-1" onclick="eliminarEstado(${indice},${i});" ${opcion}>${actual}</button>`;
            });
        }).catch(error=>{
            console.error(error);
        });
    
    
}
function eliminarEstado(idOrden,idEstado){
    console.log('eliminar boton',idEstado);
    navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
    function fn_mal() {
        console.log('nos se pudo obtener tu localizacion');
    }
    function fn_ok(respuesta) {
        lat =  respuesta.coords.latitude;
       lon =  respuesta.coords.longitude;
       
       axios({
        url: '../backend/api/ordenesTomadas.php?codigoRepartidor='+repartidorActual.codigoRepartidor+'&idOrden='+idOrden+'&idEstado='+idEstado,
        method: 'post',
        responseType: 'json',
        data: {
            "coordenadas":{
                "longitud":lon,
                "latitud":lat
            }
        }
        
        }).then(res=>{
        console.log(res.data);
        }).catch(error=>{
            console.error(error);
        });
       
    }
    
   /* ordenesTomadas[indice].estadoEntrega=`${ordenesTomadas[indice].estados[i]}`;
    if ( ordenesTomadas[indice].estadoEntrega==='entregada') {
        mostrarFactura(indice);
    }else{
        ordenesTomadas[indice].estados.splice(i, 1,);
    }*/
   
    
}

function mostrarFactura(indice) {
    console.log('mostrar factura',indice);
    document.getElementById('modalFondo').style.background ='linear-gradient(to bottom left, #541274, #9a79f4)';
    document.getElementById('modalCabecera').innerHTML =`
    <h5 class="modal-title" id="detalleModalLabel">Orden #${indice+1}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
   `;
   document.getElementById('modalPie').innerHTML=`
   <button type="button " class="btn btn-secondary boton3 " onclick="finalizarOrden(${indice});">Finalizar pedido</button>
   <button type="button " class="btn btn-secondary boton3 " onclick="borrarOrden(${indice});">orden cancelada</button>
   <button type="button" class="btn btn-secondary boton " data-bs-dismiss="modal">salir</button>
   `;
    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + (hoy.getMonth()+1) + '-' + hoy.getFullYear();
    let hora = hoy.getHours()+ '-' + hoy.getMinutes() + '-' + hoy.getSeconds();
    let isvTotal=0;
    let comisionMotorista= 2;
    let comisionAdminidtracion= 1;
    let subtotal=0;
    let totalComision= comisionMotorista + comisionAdminidtracion;
    let   totalPagar=0;
    let orden = ordenesTomadas[indice];
    let detalle='';
    for (let i = 0; i < orden.pedidos.length; i++) {
        detalle += `<div class="flex_container4 tamano">
            <div style="width: max-content;">${orden.pedidos[i].cantidad}_${orden.pedidos[i].nombreProducto}</div>
            <div style="width: max-content;">${orden.pedidos[i].precioProducto} $</div>
        </div>`;
        isvTotal = isvTotal+ orden.pedidos[i].isv;
        subtotal = subtotal + (orden.pedidos[i].precioProducto )
    }
    totalPagar = subtotal + isvTotal + totalComision;
   
    document.getElementById('modalContenido').innerHTML =`
   <div class="my-2 c4 mx-auto relleno_simple2"><div class="mx-4 my-3">repartidor: Juan Rodriguez</div></div>
   <div class= "tamano2 c9 mx-auto contenedor">
   
   <p><b>cliente: </b>${orden.cliente}<br>
   <b>Metodo de pago: </b>${orden.metodoPago}<br>
   <b>Fecha: </b>${fecha} <b>hora: </b>${hora}</p>
   <hr>
   <div class="flex-container2 tamano"><div class="mx-auto" style="width: max-content;"><b>Detalle de compra</b></div></div>
   ${detalle}<hr>
   <b>ISV:</b> ${isvTotal}$
   <p>
   <b>comision motorista: </b>${comisionMotorista} $<br>
   <b>comision administracion: </b>${comisionAdminidtracion} $<br>
   <b>total comision : </b>${totalComision} $</p>
   <hr>
   <h6><b>total a pagar: </b> ${totalPagar} $</h6>
   </div>`;
}




function crearMapa() {
    var divMapa = document.getElementById('map');
    navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);
    function fn_mal() {
        console.log('nos se pudo obtener tu localizacion');
    }
    function fn_ok(respuesta) {
       var lat =  respuesta.coords.latitude;
       var lon =  respuesta.coords.longitude;
       
       console.log("longitud"+lon+" latitude "+lat);

        var mapa = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([lon, lat]),
          zoom: 15,
          
        }),
        
        
      });
      
      let marcador = new ol.Feature({
        geometry: new ol.geom.Point(
            ol.proj.fromLonLat([lon, lat])// En dónde se va a ubicar
        ),
    });
    
    // Agregamos icono
    marcador.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
            src: "img/marcador.png",
        })
    }));
    
    // marcadores debe ser un arreglo
    const marcadores = []; // Arreglo para que se puedan agregar otros más tarde
    
    marcadores.push(marcador);// Agregamos el marcador al arreglo
    
    let capa = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: marcadores, // A la capa le ponemos los marcadores
        }),
    });
    // Y agregamos la capa al mapa
    mapa.addLayer(capa);
       
    };
    
    
}