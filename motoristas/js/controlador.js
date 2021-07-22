var ordenesSinTomar=[
    {
        cliente: 'Jose Lopez',
        ubicacion: 'colonia kenedi etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WTF_234',
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15
                
            }
          
        ],
    },
    {
        cliente: 'Maria Hernandez',
        ubicacion: 'colonia 21 de octubre etc',
        metodoPago: 'efectivo',
        codigo: 'WPF_214',
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20
                
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
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15
                
            }
          
        ],
    },
    {
        cliente: 'Maria Sanches',
        ubicacion: 'colonia 30 de mayo etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WPF_214',
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20
                
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
        pedidos:[
            {
                empresa: 'kielsa',
                nombreProducto: 'pizza peperoni',
                descripcion: 'pizza grande de peperoni',
                cantidad: 2 ,
                precioProducto: 10
                
            },
            {
                empresa: 'BurberKing',
                nombreProducto: 'amburgesa triple',
                descripcion: 'amburgesa triple de queso',
                cantidad: 3 ,
                precioProducto: 15
                
            }
          
        ],
    },
    {
        cliente: 'Lucy Gomez',
        ubicacion: 'colonia 30 de mayo etc',
        metodoPago: 'tarjeta Credito',
        codigo: 'WPF_214',
        pedidos:[
            {
                empresa: 'macdonal',
                nombreProducto: 'combo familiar',
                descripcion: 'combo familiar de amburgesa y papas',
                cantidad: 1 ,
                precioProducto: 10
                
            },
            {
                empresa: 'pollo campero',
                nombreProducto: 'combo de pollo',
                descripcion: 'combo familiar de pollo',
                cantidad: 2 ,
                precioProducto: 20
                
            }
          
        ],
    },
];



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
    document.getElementById('cuerpo').style.background='linear-gradient(to  right, #74209be8,#d0b6dacc,#74209be8)';
    console.log('tomar orden');
    document.getElementById('bienvenidoMotorista').style.display= "none";
    document.getElementById('base').style.display= "none";
    document.getElementById('ordenesPorTomar').style.display= "block";
    ordenesSinTomar.forEach(function(sinTomar, i){
        document.getElementById('ordenesPorTomar').innerHTML += `
        <div class="col-11 mx-auto my-2 c6 row flex_container" style="text-align: left; border-radius: 20px;">
        <img src="img/libro1.png" style="width: 100px;">
        <div class="info_orden3  col-8" style="color: #ffffff;" >
          <p><b>cliente: </b> ${sinTomar.cliente}<br><b>codigo: </b>${sinTomar.codigo}</p>
        </div>  
    </div>
    <hr style="color: #531274;"> `;
    });
}
function ordenTomada(){
    console.log('ordenes tomadas');
    document.getElementById('base').style.display= "none";
    document.getElementById('ordenesPorTomar').style.display= "none";
    document.getElementById('bienvenidoMotorista').style.display= "none";
    document.getElementById('ordenesTomadas').style.display= "block";
    ordenesTomadas.forEach(function(tomadas, i){
        document.getElementById('ordenesTomadas').innerHTML += `
        <div class="col-11 mx-auto my-4  row flex_container" style="text-align: left; border-radius: 20px;  ">
        <div class="info_orden3 my-2 mx-auto col-12 row" style="color: #ffffff; " >
          <div class="col-3 flex_container"><img src="img/libro2.png" style="width: 100px; position: absolute; ;left: 0px;"></div>
            <div class="col-8 flex_container">
              <p><b>cliente: </b> ${tomadas.cliente}
              <br><b>codigo: </b>${tomadas.codigo}</p>
            </div>
         
        </div>  
    </div>
    <hr style="color: #531274;">
 </div> `});

}

function ordenEntregada(){
    console.log('ordenes entregadas');
    document.getElementById('bienvenidoMotorista').style.display= "none";
    document.getElementById('base').style.display= "none";
    document.getElementById('ordenesPorTomar').style.display= "none";
    document.getElementById('ordenesTomadas').style.display= "none";
    document.getElementById('ordenesEntregadas').style.display= "block";

    ordenesEntregadas.forEach(function(tomadas, i){
        document.getElementById('ordenesEntregadas').innerHTML += `
        <div class="col-8 mx-auto my-2 c6 row flex_container" style="text-align: left;">
        <img src="img/libro3.png" style="width: 70px;">
        <div class="  col-8" style="color: white;" >
          <p style="font-size: 12px;"><b>cliente: </b> ${tomadas.cliente}<br><b>codigo: </b>${tomadas.codigo}</p>
        </div>  
    </div>
    <hr style="color: #531274;"> `;});
}
