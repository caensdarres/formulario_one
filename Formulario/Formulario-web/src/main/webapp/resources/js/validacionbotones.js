
$(document).ready(function(){
	
    var max_chars = 4200;
    $('#comment').keyup(function() {
    	alert("1");
        var chars = $(this).val().length;
        alert("2");
        var diff = max_chars - chars;
        alert("3");
        $('span.change').html(diff);   
    });
	
	
	var auxa = 0;
        $(".add-more").on("click",function(e) {
        e.preventDefault();		
        var filas = $("tr").length;
		filas = filas + 1;
        var fila= "<tr id="+filas+" class='fila"+filas+"'><td align='center'><input name='identificacion["+auxa+"].frecuencia' class='input-sm'></input></td><td align='center'><input name='identificacion["+auxa+"].concesion' class='input-sm' id='fila"+filas+"'></input></td><td align='center'><input name='identificacion["+auxa+"].distintiva' class='input-sm'></input></td><td align='center'><input name='identificacion["+auxa+"].principal' class='input-sm' id='fila"+filas+"'></input></td></tr>";
		if(auxa < 14){
        	$("div table tbody.addfield").append(fila);
        	auxa = auxa + 1;
		}else{
			$("div.notAddField").append('<h4 style="color:red;">No es posible agregar m&aacute;s filas</h4>');
			$('#notAddField1').attr("disabled", true);
		}	
		
		$('.remove-me').click(function(e){
                e.preventDefault();
				var num= $(this).attr("id");
			 	console.log("id de fila: " + num);
                var fieldID = "div table tbody tr.fila"+num;
                $(fieldID).remove();
				boleano = false;
         });
		 		 
   });
   
  
			var auxb = 1;
			var auxspan = 2;
		   $(".productos-propaganda").on("click",function(e) {
		        e.preventDefault();	
		        var filas = $("tr").length;
				filas = filas + 1;           
				var fila= "<tr id="+filas+" class='fila"+filas+"'><td align='center'><textarea id='"+auxspan+"' name='propaganda["+auxb+"].producto' class='input-sm propaganda' rows='3' cols='80' placeholder='No debe exceder más de 1.000 caracteres'></textarea></td><td align='center'><input name='propaganda["+auxb+"].valor' class='input-sm' id='fila"+filas+"'></input></td></tr>";
				if(auxb < 5){
		        	$("div table tbody.addfieldProductos").append(fila);
		        	auxb = auxb + 1;
		        	auxspan = auxspan +1;
				}else{
					$("div.notAddFieldProductos").append('<h4 style="color:red;">No es posible agregar m&aacute;s productos de propaganda</h4>');
					$('#notAddFieldProductos2').attr("disabled", true);
				}	
				
				$('.remove-me').click(function(e){
		                e.preventDefault();
						var num= $(this).attr("id");
					 	console.log("id de fila: " + num);
		                var fieldID = "div table tbody tr.fila"+num;
		                $(fieldID).remove();
						boleano = false;
		         });
				 		 
		   });
  
   
   
  
	var auxc = 1;
   $(".politica-descuento").on("click",function(e) {
	   
        e.preventDefault();		
        var filas = $("tr").length;
		filas = filas + 1;
        var fila= "<tr id="+filas+" class='fila"+filas+"'><td align='center'><textarea id='"+auxc+"' name='descuentos["+auxc+"].descripciondescuento' class='input-sm descuento"+auxc+"' rows='3' cols='80' placeholder='No debe exceder más de 1.000 caracteres'></textarea></td><td align='center'><input name='descuentos["+auxc+"].descuento' class='input-sm' id='fila"+filas+"'></input></td></tr>";
		if(auxc < 5){
        	$("div table tbody.addfieldPolitica").append(fila);
        	auxc = auxc + 1;
		}else{
			$("div.notAddFieldPolitica").append('<h4 style="color:red;">No es posible agregar m&aacute;s pol&iacute;ticas de descuento</h4>');
			$('#notAddFieldPolitica2').attr("disabled", true);
		}	
		
		$('.remove-me').click(function(e){
                e.preventDefault();
				var num= $(this).attr("id");
			 	console.log("id de fila: " + num);
                var fieldID = "div table tbody tr.fila"+num;
                $(fieldID).remove();
				boleano = false;
         });
		 		 
   });
 
   
   
    $('#fileForm').formValidation({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            avatar: {
                validators: {
                    notEmpty: {
                        message: 'Please select an image'
                    },
                    file: {
                        extension: 'jpeg,jpg,png',
                        type: 'image/jpeg,image/png',
                        maxSize: 2097152,   // 2048 * 1024
                        message: 'The selected file is not valid'
                    }
                }
            }
        }
    });


	var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];    
	function ValidateSingleInput(oInput) {
	    if (oInput.type == "file") {
	        var sFileName = oInput.value;
	        if(oInput.files[0].size < 1024000){
		         if (sFileName.length > 0) {
		            var blnValid = false;
		            for (var j = 0; j < _validFileExtensions.length; j++) {
		                var sCurExtension = _validFileExtensions[j];
		                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
		                    blnValid = true;
		                    
		                    break;
		                }
		            }
		             
		            if (!blnValid) {
		                alert("El archivo debe estar en formato jpg");
		                oInput.value = "";
		                return false;
		            }
		        }
	    	}else{
	    		alert("El tamano de archivo no debe ser superior a 1MB");
	    		oInput.value = "";
	    		return false;
	    	}
	    }
	    return true;
	}
	
});
