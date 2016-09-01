$(document).ready(function() {
    // You don't need to care about this function
    // It is for the specific demo
    function adjustIframeHeight() {
        var $body   = $('body'),
                $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }

    $('#installationForm')
        .formValidation({
            framework: 'bootstrap',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            // This option will not ignore invisible fields which belong to inactive panels
            excluded: ':disabled',
            fields: {
				nombreradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'El nombre de la radio emisora es requerido'
                        }
                    }
                },
                frecuencia0:{
                    validators: {
                        notEmpty: {
                            message: 'Es necesario completar el primer campo FRECUENCIA'
                        }
                    }
                },
                concesion0:{
                    validators: {
                        notEmpty: {
                            message: 'Es necesario completar el primer campo TIPO DE CONCESION'
                        }
                    }
                },
                distintiva0:{
                    validators: {
                        notEmpty: {
                            message: 'Es necesario completar el primer campo SEÑAL DISTINTIVA'
                        }
                    }
                },
                principal0:{
                    validators: {
                        notEmpty: {
                            message: 'Es necesario completar el primer campo COMUNA PRINCIPAL'
                        }
                    }
                },
				razonsocial:{
					validators: {
						notEmpty: {
							message: 'El nombre de la raz&oacute;n social es requerido'
						}
					}
				},
			    rutradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'El rut de la radioemisora es requerido'
                        }
                    }
                },
				calleradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'La calle de la radioemisora es requerido'
                        }
                    }
                },
				numeroradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'El n&uacute;mero de la radioemisora es requerido'
                        }
                    }
                },
				comunaradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'La comuna de la radioemisora es requerido'
                        }
                    }
                },
				regionradioemisora:{
                    validators: {
                        notEmpty: {
                            message: 'La regi&oacute;n de la radioemisora es requerido'
                        }
                    }
                },
				nombrerepresentante:{
                    validators: {
                        notEmpty: {
                            message: 'El nombre de representante es requerido'
                        }
                    }
                },
				rutrepresentante:{
                    validators: {
                        notEmpty: {
                            message: 'El rut de representante es requerido'
                        }
                    }
                },
               
                /*urlradio: {
                    validators: {
                        notEmpty: {
                            message: 'El nombre del sitio web es requerido'
                        },
                        uri: {
                            message: 'The URL is not valid'
                        }
                    }
                },*/
                correoenvio: {
                    validators: {
                        notEmpty: {
                            message: 'El correo es requerido para el envio del documento al completar el formulario'
                        }
                    }
                },
                ratificar: {                  
	                validators: {
	                    notEmpty: {
	                        message: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDebe Confirmar y ratificar la información ingresados en el presente formulario'
	                    } 
	                }
            	},
                dbServer: {
                    validators: {
                        notEmpty: {
                            message: 'The server IP is required'
                        },
                        ip: {
                            message: 'The server IP is not valid'
                        }
                    }
                },
                dbName: {
                    validators: {
                        notEmpty: {
                            message: 'The database name is required'
                        }
                    }
                },
                dbUser: {
                    validators: {
                        notEmpty: {
                            message: 'The database user is required'
                        }
                    }
                }
            }
        })
        .bootstrapWizard({
            tabClass: 'nav nav-pills',
            onTabClick: function(tab, navigation, index) {
                return validateTab(index);
            },
            onNext: function(tab, navigation, index) {
                var numTabs    = $('#installationForm').find('.tab-pane').length,
                    isValidTab = validateTab(index - 1);
                if (!isValidTab) {
                    return false;
                }

                if (index === numTabs) {
                    // We are at the last tab

                    // Uncomment the following line to submit the form using the defaultSubmit() method
                    // $('#installationForm').formValidation('defaultSubmit');

                    // For testing purpose
                    $('#completeModal').modal();
                }

                return true;
            },
            onPrevious: function(tab, navigation, index) {
                return validateTab(index + 1);
            },
            onTabShow: function(tab, navigation, index) {
                // Update the label of Next button when we are at the last tab
                var numTabs = $('#installationForm').find('.tab-pane').length;
                $('#installationForm')
                    .find('.next')
                        .removeClass('disabled')    // Enable the Next button
                        .find('a')
                       // .html(index === numTabs - 1 ? '<a href="welcome.html">Finalizar</a>' : 'Siguiente');
                		.html(index === numTabs - 1 ? '<button type="submit" >Finalizar</button>' : 'Siguiente');

                // You don't need to care about it
                // It is for the specific demo
                adjustIframeHeight();
            }
        });

    function validateTab(index) {
        var fv   = $('#installationForm').data('formValidation'), // FormValidation instance
            // The current tab
            $tab = $('#installationForm').find('.tab-pane').eq(index);

        // Validate the container
        fv.validateContainer($tab);

        var isValidStep = fv.isValidContainer($tab);
        if (isValidStep === false || isValidStep === null) {
            // Do not jump to the target tab
            return false;
        }

        return true;
    }
    
});