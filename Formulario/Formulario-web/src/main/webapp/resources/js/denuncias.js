$(document).ready(function() {
$('#registrationForm').bootstrapValidator({
	 feedbackIcons: {
		 valid: 'glyphicon glyphicon-ok',
		 invalid: 'glyphicon glyphicon-remove',
		 validating: 'glyphicon glyphicon-refresh'
	 },
	 fields: {
		 id: {
             validators: {
                 id: {
                     country: 'CL',
                     message: 'El RUN no es v&aacute;lido'
                 },
                 notEmpty: {
					 message: 'El RUN es requerido'
				 }
             }
         },
		 nombre: {
			 validators: {
				 notEmpty: {
					 message: 'El NOMBRE es requerido'
				 }
			 }
		 },
		 apellido: {
			 validators: {
				 notEmpty: {
					 message: 'El APELLIDO es requerido'
				 }
			 }
		 },
		 email: {
			 validators: {
				 notEmpty: {
					 message: 'El CORREO ELECTR\u00D3NICO es requerido y no puede ser vac\u00EDo'
				 },
				 emailAddress: {
					 message: 'El CORREO ELECTR\u00D3NICO no es v\u00E1lido'
				 }
			 }
		 },
		 'files[0]': {
			 validators: {
				 notEmpty: {
					 message: 'Debe adjuntar Carnet de Identidad (cara 1)'
				 }
			 }
		 },
		 'files[1]': {
			 validators: {
				 notEmpty: {
					 message: 'Debe adjuntar Carnet de Identidad (cara 2)'
				 }
			 }
		 }

	 }
});
});