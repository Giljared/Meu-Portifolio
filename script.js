$(document).ready(function() {
    var botao = $('.bt-1'); // classe no link a que vai ser clicado
    var dropDown = $('.ul-noticias'); //classe do submenu que vai abrir qyand clicar no link a
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   //substituir nos os bt's para funcionar o  href="javascript://"

   $(document).ready(function() {
    var botao = $('.bt-2'); // classe no link a que vai ser clicado
    var dropDown = $('.ul-entrete'); //classe do submenu que vai abrir qyand clicar no link a
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt-3'); // classe no link a que vai ser clicado
    var dropDown = $('.ul-fale-c'); //classe do submenu que vai abrir qyand clicar no link a
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.bt-4'); // classe no link a que vai ser clicado
    var dropDown = $('.portfolio'); //classe do submenu que vai abrir qyand clicar no link a
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
 
   
