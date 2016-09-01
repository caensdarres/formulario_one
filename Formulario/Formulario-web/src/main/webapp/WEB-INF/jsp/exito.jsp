<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="es"> 
<head>
<meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>Servicio Electoral</title>
    <link href="resources/css/formulario.css" rel="stylesheet" media="screen"/> 
   <link href="resources/css/bootstrap.min.css" rel="stylesheet" media="screen"/>  
      <!--<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>-->
	  <link rel="stylesheet" href="resources/css/bootstrap.min.css">
	  <!-- FormValidation CSS file -->
<link rel="stylesheet" href="resources/css/framework/formValidation.min.css">
<!-- jQuery v1.9.1 or higher -->
<script src="resources/js/framework/jquery.min.js"></script>
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->
	

    <!-- <script type="text/javascript" src="resources/js/formulario.js"></script> -->

    <!--<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap-wizard/1.2/jquery.bootstrap.wizard.min.js"></script>-->


<!-- Bootstrap JS -->
<script src="resources/js/bootstrap.min.js"></script>
<!-- FormValidation plugin and the class supports validating Bootstrap form -->
<script src="resources/js/framework/formValidation.min.js"></script>
<script src="resources/js/framework/bootstrap.min.js"></script>
<script src="resources/js/framework/jquery.bootstrap.wizard.js"></script>
<script src="resources/js/framework/jquery.bootstrap.wizard.min.js"></script>
<!--<script src="resources/js/validador.js"></script>-->


<style type="text/css">
.vertical-align {
  display: flex;
  flex-direction: row;
}

.vertical-align > [class^="col-"],
.vertical-align > [class*=" col-"] {
  display: flex;
  align-items: center;
  justify-content: center; /* Optional, to align inner items 
                              horizontally inside the column */
}

.vertical-align > [class^="col-"] > div,
.vertical-align > [class*=" col-"] > div {
  /* flex: 1; 
  
  #337ab7*/
  flex-grow: 1;
}


</style>


</head>
<body>
		<div class="container">
		
		          <div class="loader" id="loader">Loading...</div>
				  <h2><img src="resources/image/90.jpg" width="84" height="122" /></h2>
				  <div class="panel panel-default">
				    <div class="panel-heading"></div>
				    <div class="panel-body">Solicitud realizada satisfactoriamente</div>
				  </div>
		</div> <!--FIN CONTAINER-->
</body>
</html>