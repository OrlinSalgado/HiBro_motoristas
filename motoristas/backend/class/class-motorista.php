<?php
include_once('class-persona.php')
class Motorista extends Persona{
    private $estado;
    private $codigoEmpleado;
    private $comision;
    private $ordenesTomadas;
    private $ordenesEntregadas;

    public function __Construct(
        $nombre,
        $apellido,
        $identidad,
        $correo,
        $contrasena,
        $telefono,
        $fechaNacimiento,
        $genero,
        $id,
        $estado,
        $codigoEmpleado,
        $comision,
        $ordenesTomadas,
        $ordenesEntregadas
    ){
        parent::__Construct( $nombre, $apellido, $identidad, $correo, $contrasena, $telefono, $fechaNacimiento, $genero, $id)
        $this->estado = $estado;
        $this->codigoEmpleado = $codigoEmpleado;
        $this->comision = $comision;
        $this->ordenesTomadas = $ordenesTomadas;
        $this->ordenesEntregadas = $ordenesEntregadas;
    }
    //guardar un nuevo motorista
    public function guardar(){

    }
    public static function obtenerMotorista($idMotorista){

    }

    


    /**
     * Get the value of estado
     */ 
    public function getEstado()
    {
        return $this->estado;
    }

    /**
     * Set the value of estado
     *
     * @return  self
     */ 
    public function setEstado($estado)
    {
        $this->estado = $estado;

        return $this;
    }

    /**
     * Get the value of codigoEmpleado
     */ 
    public function getCodigoEmpleado()
    {
        return $this->codigoEmpleado;
    }

    /**
     * Set the value of codigoEmpleado
     *
     * @return  self
     */ 
    public function setCodigoEmpleado($codigoEmpleado)
    {
        $this->codigoEmpleado = $codigoEmpleado;

        return $this;
    }

    /**
     * Get the value of comision
     */ 
    public function getComision()
    {
        return $this->comision;
    }

    /**
     * Set the value of comision
     *
     * @return  self
     */ 
    public function setComision($comision)
    {
        $this->comision = $comision;

        return $this;
    }

    /**
     * Get the value of ordenesTomadas
     */ 
    public function getOrdenesTomadas()
    {
        return $this->ordenesTomadas;
    }

    /**
     * Set the value of ordenesTomadas
     *
     * @return  self
     */ 
    public function setOrdenesTomadas($ordenesTomadas)
    {
        $this->ordenesTomadas = $ordenesTomadas;

        return $this;
    }

    /**
     * Get the value of ordenesEntregadas
     */ 
    public function getOrdenesEntregadas()
    {
        return $this->ordenesEntregadas;
    }

    /**
     * Set the value of ordenesEntregadas
     *
     * @return  self
     */ 
    public function setOrdenesEntregadas($ordenesEntregadas)
    {
        $this->ordenesEntregadas = $ordenesEntregadas;

        return $this;
    }
}


?>