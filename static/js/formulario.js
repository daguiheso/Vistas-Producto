var $form = $('#modal1'),
	$titulo = $('#titulo'),
	$marca = $('#marca'),
	$buttonShow = $('#mostrar-form'),
	$buttonHide = $('#ocultar-form'),
	$list = $('#contenido'),
	$primerProd = $('.item:first');

function mostrarFormulario(){
	$form.slideToggle();
	// return false;
}

function agregarProducto(){
	var marca = $marca.val(),
		titulo = $titulo.val(),
		$clone = $primerProd.clone();

	$clone.find('.titulo_item').text(titulo);	
	$clone.find('.marca_item').text(marca);

	$list.prepend($clone);

	mostrarFormulario();

	//Limpiando inputs
	$titulo.val('');
	$marca.val('');	

	return false;
}

// Eventos

$buttonShow.click( mostrarFormulario);
$buttonHide.click( mostrarFormulario);
$form.on('submit', agregarProducto);