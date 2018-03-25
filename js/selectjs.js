jQuery( document ).ready( function( $ ) {

$('#wpshed-meta-box .inside').height(205);
var prov =  $('#provincia').val();
if(prov){
var provselected = prov.split(' ').join('_');
}

	// alert(provselected);
	$('.localidad').attr('disabled', true);
	$('.localidad').hide();
	$('.plocalidad').hide();
	$('#localidad'+provselected).attr('disabled', false);
	$('#plocalidad'+provselected).show();
	$('#localidad'+provselected).show();



$('#provincia').change(function(){
	var provselected = $(this).val().split(' ').join('_');
	// alert(provselected);
	$('.localidad').attr('disabled', true);
	$('.localidad').hide();
	$('.plocalidad').hide();
	$('#localidad'+provselected).attr('disabled', false);
	$('#plocalidad'+provselected).show();
	$('#localidad'+provselected).show();

});


document.getElementById('destacada').onclick = function(){
	if(document.getElementById('destacada').checked != true){
		var r = confirm("Esta seguro que quiere remover este atributo de la Noticia?");
		 if (r == true) {
  		     $('#destacada').attr('checked', false);
  		     $('#destacadaHidden').attr('disabled', false);
  		 }
	}else{
		 var r = confirm("Si destaca esta noticia cualquier otra noticia destacada perdera el atributo. Esta seguro?");
  		 if (r == true) {
  		     $('#destacada').attr('checked', true);
  		     $('#destacadaHidden').attr('disabled', true);
  		 } else {
  		     $('#destacada').attr('checked', false);
  		     $('#destacadaHidden').attr('disabled', false);
  		 }
    }
}

});
