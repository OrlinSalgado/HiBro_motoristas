<?php
    class Factura{
        private $nombreRepartidor;
        private $codigorepartidor;
        private $nombreCliente;
        private $codigoCliente;
        private $metodoPago;
        private $pedidos;
        private $isvTotal;
        private $comisionMotorista;
        private $comisionAdminidtracion;
        private $totalComision;
        private $pagoTotal;

        public function __Construct(
            $nombreRepartidor,
            $codigorepartidor,
            $nombreCliente,
            $codigoCliente,
            $metodoPago,
            $pedidos,
            $isvTotal,
            $comisionMotorista,
            $comisionAdminidtracion,
            $totalComision,
            $pagoTotal
        ){
            $this->nombreRepartidor = $nombreRepartidor;
            $this->codigorepartidor = $codigorepartidor;
            $this->nombreCliente = $nombreCliente;
            $this->codigoCliente = $codigoCliente;
            $this->metodoPago = $metodoPago;
            $this->pedidos = $pedidos;
            $this->isvTotal = $isvTotal;
            $this->comisionMotorista = $comisionMotorista;
            $this->comisionAdminidtracion = $comisionAdminidtracion;
            $this->totalComision = $totalComision;
            $this->pagoTotal = $pagoTotal;    
      
        }
        public function guardarFactura(){
            
        }
         /**
             * Get the value of nombreRepartidor
             */ 
            public function getNombreRepartidor()
            {
                    return $this->nombreRepartidor;
            }
    
            /**
             * Set the value of nombreRepartidor
             *
             * @return  self
             */ 
            public function setNombreRepartidor($nombreRepartidor)
            {
                    $this->nombreRepartidor = $nombreRepartidor;
    
                    return $this;
            }
    
            /**
             * Get the value of codigorepartidor
             */ 
            public function getCodigorepartidor()
            {
                    return $this->codigorepartidor;
            }
    
            /**
             * Set the value of codigorepartidor
             *
             * @return  self
             */ 
            public function setCodigorepartidor($codigorepartidor)
            {
                    $this->codigorepartidor = $codigorepartidor;
    
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
    
            /**
             * Get the value of isvTotal
             */ 
            public function getIsvTotal()
            {
                    return $this->isvTotal;
            }
    
            /**
             * Set the value of isvTotal
             *
             * @return  self
             */ 
            public function setIsvTotal($isvTotal)
            {
                    $this->isvTotal = $isvTotal;
    
                    return $this;
            }
    
            /**
             * Get the value of comisionMotorista
             */ 
            public function getComisionMotorista()
            {
                    return $this->comisionMotorista;
            }
    
            /**
             * Set the value of comisionMotorista
             *
             * @return  self
             */ 
            public function setComisionMotorista($comisionMotorista)
            {
                    $this->comisionMotorista = $comisionMotorista;
    
                    return $this;
            }
    
            /**
             * Get the value of comisionAdminidtracion
             */ 
            public function getComisionAdminidtracion()
            {
                    return $this->comisionAdminidtracion;
            }
    
            /**
             * Set the value of comisionAdminidtracion
             *
             * @return  self
             */ 
            public function setComisionAdminidtracion($comisionAdminidtracion)
            {
                    $this->comisionAdminidtracion = $comisionAdminidtracion;
    
                    return $this;
            }
    
            /**
             * Get the value of totalComision
             */ 
            public function getTotalComision()
            {
                    return $this->totalComision;
            }
    
            /**
             * Set the value of totalComision
             *
             * @return  self
             */ 
            public function setTotalComision($totalComision)
            {
                    $this->totalComision = $totalComision;
    
                    return $this;
            }
    
            /**
             * Get the value of pagoTotal
             */ 
            public function getPagoTotal()
            {
                    return $this->pagoTotal;
            }
    
            /**
             * Set the value of pagoTotal
             *
             * @return  self
             */ 
            public function setPagoTotal($pagoTotal)
            {
                    $this->pagoTotal = $pagoTotal;
    
                    return $this;
            }
    }
    
    
?>