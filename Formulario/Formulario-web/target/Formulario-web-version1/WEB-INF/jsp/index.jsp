<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html lang="es"> 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Servicio Electoral</title>
    <link href="resources/css/bootstrap.min.css" rel="stylesheet" media="screen"/>  
    <link rel="stylesheet" href="resources/css/bootstrap.min.css">
	<script src="//oss.maxcdn.com/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="//oss.maxcdn.com/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min.js"></script>
	<script src="resources/js/denuncias.js"></script>
	<script src="resources/js/validararchivos.js"></script>
	<script src="resources/js/validarut.js"></script>
    <style>
	p.colorgreen {
	    color: green;
	}
	p.colorred {
	    color: red;
	}
	
	</style>
</head>
<body>
<div class="container">
			
	  <b><img src="resources/image/90.jpg" width="84" height="122" />&nbsp&nbsp&nbsp&nbspSOLICITUD REVISI&Oacute;N CAMBIO DE DOMICILIO ELECTORAL</b>
	  <br>
	  <br>
	  <div class="panel panel-default">
	    <div class="panel-heading">SOLICITUD</div>
	    <div class="panel-body">
			    <form id="registrationForm" method="post" action="enviarsolicitud" class="form-horizontal" modelAttribute="fileUploadForm" enctype="multipart/form-data">
			    
			    	<div class="form-group">
			    		<label class="col-lg-3 control-label">RUN</label>
						<div class="col-lg-3">
							<input type="text" class="form-control inputrut"  id="txt_rut" name="id" >   					    
						    <p class="text-info">Formato de RUN Ej: 12345678-9</p>
						</div>
	 			    </div>	
					
					<div class="form-group">
						<label class="col-lg-3 control-label">CORREO ELECTR&Oacute;NICO</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" name="email">
						</div>
	 			    </div>					
					
					<div class="form-group">
						<label class="col-lg-3 control-label">NOMBRE</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" name="nombre" />
						</div>
					</div>
 
					 <div class="form-group">
						<label class="col-lg-3 control-label">APELLIDO</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" name="apellido" />
						</div>
					</div>
					
					<div class="form-group">
						<label class="col-lg-3 control-label">TEL&Eacute;FONO O CELULAR DE CONTACTO</label>
						<div class="col-lg-3">
							<input type="text" class="form-control" name="celular" />
						</div>
					</div>

			        <div class="form-group">
						<b>Debe adjuntar C&eacute;dula de Identidad (imagen en formato: pdf, jpg, jpeg, bmp, gif, png y el tama&ntilde;o de archivo no debe ser superior a 5MB)</b>
						<div class="panel panel-default">
							<div class="panel-body">
							<b>CARA 1</b>
							<input class="form-control" name="files[0]" type="file" onchange="ValidateSingleInput(this);" />
							</div>
							<div class="panel-body">
							<b>CARA 2</b>
							<input class="form-control" name="files[1]" type="file" onchange="ValidateSingleInput(this);" />
							</div>
						</div>
					</div>	
											
			 
					<div class="form-group">
							<div class="col-lg-9 col-lg-offset-3">
								 <button type="submit" class="btn btn-success left">Enviar</button>
							</div>
					</div>						
	
				</form>	 
		   
	    </div>
	  </div>
	  		


	
</div>	
</body>
</html>