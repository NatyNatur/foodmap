$(document).ready(function() {
  $('#fixedSite').hide();
  $("#splash").fadeIn(5000).fadeOut(2000, showSite);
  $('.modal').modal();

  function showSite(){
    $('#fixedSite').show();
  }


   $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: true, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );

var cont = $('#foodContainer');

$('#foodMenu').on('change', function() {
      var optionSelected = $('#foodMenu').val();
      //cont.text(optionSelected);
      if( optionSelected === "chilena") {
      cont.html('<div id="chilean" class="row food"><!-- Galindo --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/ch/galindo.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#galindomodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Galindo</span><p>Ubicado en Dardignac 098, Santiago, Providencia, Región Metropolitana</p></div></div><!-- Los Buenos Muchachos --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/ch/losbuenosmuchachos.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#losbuenosmodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Los Buenos Muchachos</span><p>Ubicado en Ricardo Cumming 1031, Santiago, Región Metropolitana<</p></div></div><!-- La Casa Vieja --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/ch/lacasavieja.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#casaviejamodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">La Casa Vieja</span><p>Ubicado en Av. Manuel Montt 1631, Providencia, Región Metropolitana</p></div></div></div><!-- cierro #chilean -->');
      };
      if (optionSelected === "mexicana") {
        cont.html('<div id="mexican" class="row food"><!-- Ijole --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/mx/ijole.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#ijolemodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Ijole</span><p>Manuel Antonio Matta 366, Santiago, Región Metropolitana</p></div></div><!-- Los Cuates --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/mx/loscuates.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#loscuatesmodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Los Cuates</span><p>Av. Manuel Montt 235, Santiago, Región Metropolitana</p></div></div><!-- Mexa --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/mx/mexa.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#mexamodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Mexa</span><p>Av Vitacura 2653, Las Condes, Región Metropolitana</p></div></div></div><!-- cierro #mexican -->')
      };
      if (optionSelected === "peruana") {
        cont.html('<div id="peruvian" class="row food"><!-- Ají Amarillo --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/pe/ajiamarillo.png"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#ajimodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Ají Amarillo</span><p>Manuel Antonio Matta 366, Santiago, Región Metropolitana</p></div></div><!-- Machu Picchu --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/pe/machupicchurest.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#machumodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Machu Picchu</span><p>Av. Francisco Bilbao 1256, Providencia, Región Metropolitana</p></div></div><!-- Mistura del Perú --><div class="card col s12 m4 l4"><div class="card-image"><img src="assets/img/pe/misturadelperu.jpg"><a class="btn-floating halfway-fab waves-effect waves-light teal lighten-1 modal-trigger" href="#misturamodal"><i class="material-icons">my_location</i></a></div><div class="card-content"><span class="card-title">Mistura del Perú</span><p>Sta Isabel 0496, Providencia, Región Metropolitana</p></div></div></div><!-- cierro #peruvian -->')
      };
      if (optionSelected === "0") {
        alert('Selecciona un tipo de comida para ayudarte en tu búsqueda :)');
      }
    });
});