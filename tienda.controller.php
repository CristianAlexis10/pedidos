<?php
  require_once "conn.model.php";
  require_once "master.model.php";
Class TiendaController{
     private $master;
    function __CONSTRUCT(){
      $this->master = new MasterModel;
    }
  public function mainPage(){
    $consulta = $this->master->selectAll('producto');
    require_once "tienda.php";
  }
}

$ins = new TiendaController;
$ins->mainPage();
?>
