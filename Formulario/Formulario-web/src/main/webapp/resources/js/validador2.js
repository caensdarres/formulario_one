
	$(document).ready(function() {
		$('#rootwizard').bootstrapWizard(
			{onNext: function(tab, navigation, index) {
				
				
				var error_message = '';
				var error_count = 0;
				if(index==1) {

					if(!$('#name').val()) {
						error_message = 'Please enter Name.\n';
						error_count++;
					}

					if(!$('#email').val()) {
						error_message = error_message + 'Please enter an Email.\n';
						error_count++	
					}

					if($('#email').val() != false) {
						if(!is_valid_email($('#email').val())) {
							error_message = error_message + 'Email ID entered is invalid.\n';
							error_count++;
						}
						else {

						}
					}
					if(error_count > 0) {
						alert(error_message);
						return false;
					}
					else {
						return true;
					}

				}
				else if(index == 2) {
									//checking if a gender is chosen
									var value = $("input[type='radio'][name='gender']:checked").val();
									if(value === undefined) {
										error_message = 'Please select a gender.\n';
										error_count++;
									}
									//checking if address is valid
									if($('#age_select').val() < 18) {
										error_message = error_message + 'You must be 18 or older to register.';
										error_count++;
									}
									if(error_count > 0) {
										alert(error_message);
										return false;
									}
									else {
										return true;
									}


								}
				else if(index == 3) {
				//check the character length of address to validate
				if(($('#address').val().length) < 10) {
						alert('Address can\'t be less than 10 characters.');
					   return false;
				}


						}
					}
				});
});



function is_valid_email(email) {
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}
