$(document).ready(datos);
function datos() {

	$("#btn-crear").on("click",function(){
		$("#title-modal").html("Datos de " + ($("#nombre").val()));
		$("#nombre-modal").html($("#nombre").val());
		$("#apellido-modal").html($("#apellido").val());
		$("#contra-modal").html($("#contra-nueva").val());
		$("#ubicacion-modal").html($("#ubicacion").val());
		$("#dia-modal").html($("#dia").val()+"/");
		$("#mes-modal").html($("#mes").val()+"/");
		$("#anio-modal").html($("#anio").val());
		$("#sexo-modal").html($('input:radio[name=sexo]:checked').val());
		


	});

}
