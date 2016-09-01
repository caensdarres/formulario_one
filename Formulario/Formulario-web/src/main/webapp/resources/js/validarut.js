$(document).ready(function(){

   /* $("input.inputrut").blur(function(){
		if (Fn.validaRut( $("#txt_rut").val() )){
			//alert("1" + $(this).attr('value'));
			$("#msgerror").html("<p class='colorgreen'>RUN v&aacute;lido</p>");
			
		} else {
			alert("1: " + $(this).attr('value'));
		//	document.getElementById("txt_rut").value = "";
			//<input type="text" class="form-control inputrut" placeholder="Formato de RUN: 11111111-1"  id="txt_rut" name="rut" >
			//$("#msgerror").html("<p class='colorred'>El RUN ingresado no es v&aacute;lido</p>");
			//$(".inputrut").html("<input type='text' class='form-control inputrut' placeholder='Formato de RUN: 11111111-1'  id='txt_rut' name='rut' value='abc'>");
			
			//$("#txt_rut").val("");
			// $('#txt_rut').attr('value', '');
			//$('#txt_rut').attr('value','');
			
			// $("#txt_rut").val(null);
			 //$("input.inputrut").val(null);
			// document.getElementById("input.inputrut").reset();
			//document.getElementById("txt_rut").value = null;
			alert("2: " + $(this).attr('value'));
			//alert("3" + $(this).attr('value'));
		}
    });
	
	var Fn = {
    validaRut : function (rutCompleto) {
        if (!/^[0-9]+-[0-9kK]{1}$/.test( rutCompleto ))
            return false;
        var tmp     = rutCompleto.split('-');
        var digv    = tmp[1]; 
        var rut     = tmp[0];
        if ( digv == 'K' ) digv = 'k' ;
        return (Fn.dv(rut) == digv );
    },
    dv : function(T){
        var M=0,S=1;
        for(;T;T=Math.floor(T/10))
            S=(S+T%10*(9-M++%6))%11;
        return S?S-1:'k';
    }
}
*/
});
