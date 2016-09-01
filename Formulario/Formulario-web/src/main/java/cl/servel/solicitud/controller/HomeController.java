package cl.servel.solicitud.controller;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import cl.servel.solicitud.helper.EnviarCorreo;
import cl.servel.solicitud.modal.DatosFormulario;
import cl.servel.solicitud.modal.FileUploadForm;


@Controller
public class HomeController {
	    private Logger logger = Logger.getLogger(getClass().getName());
		private static final long serialVersionUID = 958900029856081978L;
		
		public HomeController(){
			BasicConfigurator.configure();
			logger.debug("Logging Log4 Debug Statement...");
		}
	
	   @RequestMapping(value = "/index", method = RequestMethod.GET)
	   public String student() {
	      return "index";
	   }
	   
	   @RequestMapping(value = "/enviarsolicitud", method = RequestMethod.POST)
	   public String enviarSolicitud(
			   @ModelAttribute("Formulario-web")DatosFormulario datosFormulario, 
			   @ModelAttribute("fileUploadForm") FileUploadForm fileUploadForm,
			   ModelMap model, 
			   HttpServletRequest request,
			   HttpServletResponse response) {
		   
		   boolean pasaArchivos0 = false;
		   boolean pasaArchivos1 = false;
		   
		   if( fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".pdf") != -1 ||
			   fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".jpg") != -1 ||
			   fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".jpeg") != -1  ||
			   fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".bmp") != -1  ||
			   fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".gif") != -1 ||
			   fileUploadForm.getFiles().get(0).getOriginalFilename().indexOf(".png") != -1 ){ 
			   
			   pasaArchivos0 = true;
		   }
		   
		   if( fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".pdf") != -1 ||
				   fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".jpg") != -1 ||
				   fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".jpeg") != -1  ||
				   fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".bmp") != -1  ||
				   fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".gif") != -1 ||
				   fileUploadForm.getFiles().get(1).getOriginalFilename().indexOf(".png") != -1 ){ 
				   
				   pasaArchivos1 = true;
			}
		 
		   if(!datosFormulario.getId().equals("") &&
		     !datosFormulario.getEmail().equals("") &&
			 !datosFormulario.getNombre().equals("") &&
		     !datosFormulario.getApellido().equals("") &&
		     pasaArchivos0 &&
		     pasaArchivos1
		     ){	      
				   String  basepath = request.getServletContext().getRealPath("WEB-INF/"); 
				   List<MultipartFile> files = fileUploadForm.getFiles();
		
					List<String> fileNames = new ArrayList<String>();
					
					if(null != files && files.size() > 0) {
						for (MultipartFile multipartFile : files) {
							String fileName = multipartFile.getOriginalFilename();
							fileNames.add(fileName);
							//Handle file content - multipartFile.getInputStream()
		
						}
					}
					
					String namefile1 = fileUploadForm.getFiles().get(0).getOriginalFilename();
					String namefile2 = fileUploadForm.getFiles().get(1).getOriginalFilename();
					File des1 = new File(basepath + "/jsp/zxycaha/"+ datosFormulario.getId() + namefile1 );
					File des2 = new File(basepath + "/jsp/zxycaha/"+ datosFormulario.getId()  + namefile2 );
					
					
					try {
						fileUploadForm.getFiles().get(0).transferTo(des1);
						fileUploadForm.getFiles().get(1).transferTo(des2);
					
					} catch (IllegalStateException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					
					try {
						File outFile = new File(basepath + "/jsp/zxycaha/"+ datosFormulario.getId()+ ".txt");
						BufferedWriter writer = new BufferedWriter(new FileWriter(outFile));
						writer.write(datosFormulario.getId() + ", " + datosFormulario.getNombre()+ ", " + datosFormulario.getApellido() + ", " + datosFormulario.getEmail() + ", " + datosFormulario.getCelular());
						writer.newLine(); // Esto es un salto de linea
						writer.close();
					} catch (IOException e) {
							
					}
					 
					try{
						EnviarCorreo  enviarCorreo = new EnviarCorreo();
						enviarCorreo.enviarCorreo(datosFormulario.getId(), basepath, datosFormulario.getId()+namefile1, datosFormulario.getId()+namefile2);
						return "exito";
					}catch(Exception e){
						 return "error";
					}

			}else{
				  return "error";
			}
		  
	   }
	      

}
