<?php
class Orden{
    private $nombreCliente;
    private $codigoCliente;
    private $ubicacion;
    private $metodoPago;
    private $codigo;
    private $fecha;
    private $estadoOrden;
    private $estadoEntrega;
    private $fecha;
    private $pedidos;

    public function __Construct(
        $nombreCliente,
        $codigoCliente,
        $ubicacion,
        $metodoPago,
        $codigo,
        $fecha,
        $estadoOrden,
        $estadoEntrega,
        $fecha,
        $pedidos
    ){
       $this->nombreCliente = $nombreCliente;
       $this->ubicacion = $ubicacion;
       $this->metodoPago = $metodoPago;
       $this->codigo = $codigo;
       $this->fecha = $fecha;
       $this->estadoOrden = $estadoOrden;
       $this->estadoEntrega = $estadoEntrega; 
       $this->fecha = $fecha;
       $this->pedidos = $pedidos;
    }
    public function guardarOrden(){

    }
    public static function obtenerOrdenesSinTomar(){

    }
    public static function obtenerOrdeneTomadas($idMotorista){

    }
    public static function obtenerOrdenesEntregadas($idMotorista){

    }
    

    

    /**
     * Get the value of ubicacion
     */ 
    public function getUbicacion()
    {
        return $this->ubicacion;
    }

    /**
     * Set the value of ubicacion
     *
     * @return  self
     */ 
    public function setUbicacion($ubicacion)
    {
        $this->ubicacion = $ubicacion;

        return $this;
    }

    /**
     * Get the value of metodoPago
     */ 
    public function getMetodoPago()
    {
        return $this->metodoPago;
    }

    /**
     * Set the value of metodoPago
     *
     * @return  self
     */ 
    public function setMetodoPago($metodoPago)
    {
        $this->metodoPago = $metodoPago;

        return $this;
    }

    /**
     * Get the value of codigo
     */ 
    public function getCodigo()
    {
        return $this->codigo;
    }

    /**
     * Set the value of codigo
     *
     * @return  self
     */ 
    public function setCodigo($codigo)
    {
        $this->codigo = $codigo;

        return $this;
    }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }

    /**
     * Get the value of estadoOrden
     */ 
    public function getEstadoOrden()
    {
        return $this->estadoOrden;
    }

    /**
     * Set the value of estadoOrden
     *
     * @return  self
     */ 
    public function setEstadoOrden($estadoOrden)
    {
        $this->estadoOrden = $estadoOrden;

        return $this;
    }

    /**
     * Get the value of estadoEntrega
     */ 
    public function getEstadoEntrega()
    {
        return $this->estadoEntrega;
    }

    /**
     * Set the value of estadoEntrega
     *
     * @return  self
     */ 
    public function setEstadoEntrega($estadoEntrega)
    {
        $this->estadoEntrega = $estadoEntrega;

        return $this;
    }

    /**
     * Get the value of nombreCliente
     */ 
    public function getNombreCliente()
    {
        return $this->nombreCliente;
    }

    /**
     * Set the value of nombreCliente
     *
     * @return  self
     */ 
    public function setNombreCliente($nombreCliente)
    {
        $this->nombreCliente = $nombreCliente;

        return $this;
    }

    /**
     * Get the value of codigoCliente
     */ 
    public function getCodigoCliente()
    {
        return $this->codigoCliente;
    }

    /**
     * Set the value of codigoCliente
     *
     * @return  self
     */ 
    public function setCodigoCliente($codigoCliente)
    {
        $this->codigoCliente = $codigoCliente;

        return $this;
    }

    /**
     * Get the value of fecha
     */ 
    public function getFecha()
    {
        return $this->fecha;
    }

    /**
     * Set the value of fecha
     *
     * @return  self
     */ 
    public function setFecha($fecha)
    {
        $this->fecha = $fecha;

        return $this;
    }

    /**
     * Get the value of pedidos
     */ 
    public function getPedidos()
    {
        return $this->pedidos;
    }

    /**
     * Set the value of pedidos
     *
     * @return  self
     */ 
    public function setPedidos($pedidos)
    {
        $this->pedidos = $pedidos;

        return $this;
    }
}
?>