$(document).ready(function(){
  $(".tabla").hide();  
  $(".categorias").click(function(){
    var nombreC = $(this).attr('category');
    console.log(nombreC)
  
  
  
    function ocultarDia() {
      $(".tabla").hide();  
     }setTimeout(ocultarDia,300)
  
  
     function mostrarMovies() {
      $('.tabla[category="'+nombreC+'"]').show();
    }setTimeout(mostrarMovies,400)
  
  
  
  
     });
  
  
    

     
 
  });
  
  
