<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="style.hola.css">
  <link rel="stylesheet" href="http://jqueryui.com/resources/demos/style.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  
</head>
<body>

    <ul id="gallery" class="gallery ui-helper-reset ">
           <?php 
            foreach($consulta as $row){ ?>
                <li class="ui-widget-content">
                      <h5 class="ui-widget-header"><?php echo $row["pro_nompro"]; ?></h5>
                      <img src="images/ella/<?php echo $row["pro_img"]; ?>" alt="On top of Kozi kopka" width="96" height="72">
                      <!-- <a href="#" title="" class="ui-icon ui-icon-zoomin"></a> -->
                      <div class="des">jhhgkhjkhgj</div>
                      <span class="dame">Ver</span>
                      <a href="" title="Delete this image" class="ui-icon ui-icon-plus"></a>
                </li>
            <?php } ?>
    </ul>

    <div id="contenedor-objetos" class="ui-widget-content ui-state-default">
         <h4 class="ui-widget-header"><span class="fa fa-shopping-cart"></span> Carrito de compras</h4>
    </div>


<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="script.js"></script>

</body>
</html>