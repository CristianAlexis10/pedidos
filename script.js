var pedidoTotal = [];

$(function() {
    // guardar la galeria y contenedor en variables
    var $gallery = $( "#gallery" ),
      $trash = $( "#contenedor-objetos" );
    // hacer que los elementos de la galeria sean arratrables
    $( "li", $gallery ).draggable({
      cancel: "a.ui-icon,input,select", // si se presiona un icono no se activara el arrastre
      revert: "invalid", //volver a la posicion inicial si no se suelta en el contenedor
      containment: "document",
      helper: "clone",//para que se clone mientras de arrartra (no obligatorio)
      cursor: "move"
    });

    //hacer que el contenedor acepte los elementos droppable
    $trash.droppable({
      accept: "#gallery > li",
      classes: {
        "ui-droppable-active": "ui-state-highlight"//efecto cada que se seleciona un droppable
      },
      drop: function( event, ui ) {
        deleteImage( ui.draggable );
        var pro_codigo = ui.draggable.context.childNodes[11].value;
        var pro_cantidad = ui.draggable.context.childNodes[13].value;
        var pro_color = ui.draggable.context.childNodes[15].value;

        pedidoTotal[pro_codigo]={'cant':pro_cantidad,'color':pro_color};

        console.log(pedidoTotal);
        // desabilitar botones
        $('#'+ui.draggable.context.childNodes[13].id).attr('disabled',true);
        $('#'+ui.draggable.context.childNodes[15].id).attr('disabled',true);
        // console.log();
        // var nn = $().val();
         // console.log(nn);  //TRAER EL VALOR DE LO QUE SE ARRASTRO
      }
    });

    // dejar que la galeria acepte los elementos del contenedor de objetos
    $gallery.droppable({
      accept: "#contenedor-objetos li",
      classes: {
        "ui-droppable-active": "custom-state-active"
      },
      drop: function( event, ui ) {
        recycleImage( ui.draggable );//para obtener el valor es igual que arriba
        // console.log('codigo: '+ui.draggable.context.childNodes[11].value);
        var codigo = ui.draggable.context.childNodes[11].value;

        $('#'+ui.draggable.context.childNodes[13].id).attr('disabled',false);
        $('#'+ui.draggable.context.childNodes[15].id).attr('disabled',false);
        
       pedidoTotal.splice(codigo, 1);

        console.log(pedidoTotal);
      }
    });

    // eliminar imagen 
        // recycle_icon el que aparece una vez se elimina
    var recycle_icon = "<a href='' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function deleteImage( $item ) {
      $item.fadeOut(function() {
        var $list = $( "ul", $trash ).length ?
          $( "ul", $trash ) :
          $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );

        $item.find( "a.ui-icon-plus" ).remove();
        $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
          $item
            .animate({ width: "48px" })
            .find( "img" )
              .animate({ height: "36px" });
        });
      });
    }

  // reciclar imagen
    var trash_icon = "<a href='' title='Delete this image' class='ui-icon ui-icon-plus'>Delete image</a>";
    function recycleImage( $item ) {
      $item.fadeOut(function() {
        $item
          .find( "a.ui-icon-refresh" )
            .remove()
          .end()
          .css( "width", "96px")
          .append( trash_icon )
          .find( "img" )
            .css( "height", "72px" )
          .end()
          .appendTo( $gallery )
          .fadeIn();
      });
    }

    //ventana modal (no creo)
    // function viewLargerImage( $link ) {
    //   var src = $link.attr( "href" ),
    //     title = $link.siblings( "img" ).attr( "alt" ),
    //     $modal = $( "img[src$='" + src + "']" );

    //   if ( $modal.length ) {
    //     $modal.dialog( "open" );
    //   } else {
    //     var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
    //       .attr( "src", src ).appendTo( "body" );
    //     setTimeout(function() {
    //       img.dialog({
    //         title: title,
    //         width: 400,
    //         modal: true
    //       });
    //     }, 1 );
    //   }
    // }

    // Resolve the icons behavior with event delegation
    $( "ul.gallery > li" ).on( "click", function( event ) {
      var $item = $( this ),
        $target = $( event.target );

      if ( $target.is( "a.ui-icon-plus" ) ) {
        deleteImage( $item );
      } else if ( $target.is( "a.ui-icon-zoomin" ) ) {
        viewLargerImage( $target );
      } else if ( $target.is( "a.ui-icon-refresh" ) ) {
        recycleImage( $item );
      }

      return false;
    });
  } );

$('.dame').click(function(){
  alert('ya dio');
});