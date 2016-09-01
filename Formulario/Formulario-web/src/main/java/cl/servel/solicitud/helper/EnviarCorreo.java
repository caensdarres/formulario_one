package cl.servel.solicitud.helper;

import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

public class EnviarCorreo {
	
	
	public void enviarCorreo(String rut, String basepath, String namefile1, String namefile2){
		
	      String to = "reclamosRE@servel.cl";
		  //String to = "cesar.huaiquil@gmail.com";
	      // Sender's email ID needs to be mentioned
	      String from = "noresponder@servel.cl";

	      final String username = "noresponder@servel.cl";//change accordingly
	      final String password = "Servel2014";//change accordingly

	      // Assuming you are sending email through relay.jangosmtp.net
	      String host = "smtp.office365.com";

	      Properties props = new Properties();
	      props.put("mail.smtp.host", host);
	      props.put("mail.smtp.port", "587");
	      props.put("mail.smtp.auth", "true");
	      props.put("mail.smtp.starttls.enable", "true");

	      // Get the Session object.
	      Session session = Session.getInstance(props,
	         new javax.mail.Authenticator() {
	            protected PasswordAuthentication getPasswordAuthentication() {
	               return new PasswordAuthentication(username, password);
	            }
	         });

	      try {
	         // Create a default MimeMessage object.
	         Message message = new MimeMessage(session);
	         // Set From: header field of the header.
	         message.setFrom(new InternetAddress(from));
	         // Set To: header field of the header.
	         message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(to));
	         // Set Subject: header field
	         message.setSubject("Solicitud de anulacion CDE " + rut);
	         
	         
	         
	         // Create the message part
	         BodyPart messageBodyPart = new MimeBodyPart();
	         // Now set the actual message
	         messageBodyPart.setText("Envio mail, no responder.");
	         // Create a multipar message
	         Multipart multipart = new MimeMultipart();
	         // Set text message part
	         multipart.addBodyPart(messageBodyPart);
	         
	         
	         // Part two is attachment
	         messageBodyPart = new MimeBodyPart();
	         DataSource source = new FileDataSource(basepath + "/jsp/zxycaha/"+rut+".txt");
	         messageBodyPart.setDataHandler(new DataHandler(source));
	         messageBodyPart.setFileName("file"+rut+".txt");
	         multipart.addBodyPart(messageBodyPart);
	         
	         
	         MimeBodyPart messageBodyPart2 = new MimeBodyPart();
	         DataSource source2 = new FileDataSource(basepath + "/jsp/zxycaha/"+namefile1);
	         messageBodyPart2.setDataHandler(new DataHandler(source2));
	         messageBodyPart2.setFileName(namefile1);
	         multipart.addBodyPart(messageBodyPart2);
	         
	         MimeBodyPart messageBodyPart3 = new MimeBodyPart();
	         DataSource source3 = new FileDataSource(basepath + "/jsp/zxycaha/"+namefile2);
	         messageBodyPart3.setDataHandler(new DataHandler(source3));
	         messageBodyPart3.setFileName(namefile2);
	         multipart.addBodyPart(messageBodyPart3);
	         
	         // Send the complete message parts
	         message.setContent(multipart);
	         // Send message
	         Transport.send(message);
	         System.out.println("Sent message successfully....");
	  
	      } catch (MessagingException e) {
	         throw new RuntimeException(e);
	      }
	}

}
