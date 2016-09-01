$(document).ready(function() {
	
});

var _validFileExtensions = [".jpg", ".jpeg", ".jpeg", ".gif", ".png", ".pdf"];  

function ValidateSingleInput(oInput) {

    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if(oInput.files[0].size < 5024000){
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
	                alert("El archivo debe estar en formato: jpg, jpeg, jpeg, gif, png o pdf");
	                oInput.value = "";
	                return false;
	            }
	        }
    	}else{
    		alert("El tamaño de archivo no debe ser superior a 5MB");
    		oInput.value = "";
    		return false;
    	}
    }
    return true;
}