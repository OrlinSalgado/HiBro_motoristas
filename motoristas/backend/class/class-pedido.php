<?php
    class Pedido{
        private $nombreProducto;
        private $descripcionProducto;
        private $nombreEmpresa;
        private $cantidad;
        private $precio;

        public function __Construct(
            $nombreProducto,
            $descripcionProducto,
            $nombreEmpresa,
            $cantidad,
            $precio
        ){
            $this->nombreProducto = $nombreProducto;
            $this->descripcionProducto = $descripcionProducto;
            $this->nombreEmpresa = $nombreEmpresa;
            $this->cantidad = $cantidad;
            $this->precio = $precio;
        }
        public function guardarPedido($idCliente){

        }
        

        /**
         * Get the value of nombreProducto
         */ 
        public function getNombreProducto()
        {
                return $this->nombreProducto;
        }

        /**
         * Set the value of nombreProducto
         *
         * @return  self
         */ 
        public function setNombreProducto($nombreProducto)
        {
                $this->nombreProducto = $nombreProducto;

                return $this;
        }

        /**
         * Get the value of descripcionProducto
         */ 
        public function getDescripcionProducto()
        {
                return $this->descripcionProducto;
        }

        /**
         * Set the value of descripcionProducto
         *
         * @return  self
         */ 
        public function setDescripcionProducto($descripcionProducto)
        {
                $this->descripcionProducto = $descripcionProducto;

                return $this;
        }

        /**
         * Get the value of nombreEmpresa
         */ 
        public function getNombreEmpresa()
        {
                return $this->nombreEmpresa;
        }

        /**
         * Set the value of nombreEmpresa
         *
         * @return  self
         */ 
        public function setNombreEmpresa($nombreEmpresa)
        {
                $this->nombreEmpresa = $nombreEmpresa;

                return $this;
        }

        /**
         * Get the value of cantidad
         */ 
        public function getCantidad()
        {
                return $this->cantidad;
        }

        /**
         * Set the value of cantidad
         *
         * @return  self
         */ 
        public function setCantidad($cantidad)
        {
                $this->cantidad = $cantidad;

                return $this;
        }

        /**
         * Get the value of precio
         */ 
        public function getPrecio()
        {
                return $this->precio;
        }

        /**
         * Set the value of precio
         *
         * @return  self
         */ 
        public function setPrecio($precio)
        {
                $this->precio = $precio;

                return $this;
        }
    }
    

?>