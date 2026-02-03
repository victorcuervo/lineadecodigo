---
title: "Mandar emails con ASPEmail"
description: "Enviar emails con ASPEmail es sencillo creando un objeto y configurando el servidor SMTP, destinatarios y mensaje."
date: 2009-03-11
updatedDate: 2026-01-06
tags: ["createobject","server","mail","smtp","form","error","response"]
slug: asp/mail/mandar-emails-con-aspemail
author: victor_cuervo
type: doc
topic: asp
id: ec2a338f-8819-406f-96e5-cd03462d7cf7
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/email/mandar-email/mandar-email.asp
---

Quien no quiere tener en su página un apartado que nos permita enviar noticias, textos,... mediante un email. El envío de email desde la páginas es muy sencillo utilizando el componente activo de servidor ASPEMail desarrollado por la empresa [Persits Software, Inc](http://www.persits.com/).


Para mandar emails con ASPEmail lo primero que debemos de hacer es crear una instancia del objeto ASPEMail. Para ello utilizaremos el método CreateObject, al cual pasaremos el ID del objeto AspEMail.


```javascript
Set Mail = Server.CreateObject("Persits.MailSender")
```


Una vez creado el objeto nos aprovecharemos de los métodos que tiene para enviar el mensaje. Lo primero es indicar el servidor SMTP que utilizaremos para enviar el mensaje.


```javascript
[Mail.Host](http://mail.host/) = "[mail.miservidor.com](http://mail.miservidor.com/)"
```


Después indicaremos la persona la cual recibirá el mensaje. Esto lo realizaremos a través del método AddAddress, el cual recibe como parámetros la dirección de email y el nombre de la persona de destino. Estos valores los vamos a recoger de un formulario, es por ello que utilizaremos el método Request.Form("to"), el cual recupera el valor del campo "to" del formulario. Posteriormente indicaremos quien es la persona que envía el mensaje, propiedad From.


```javascript
Mail.AddAddress Request.Form("to"), Request.Form("nombre")
Mail.From = "[remitente@midominio.com](mailto:remitente@midominio.com)"
```


Para terminar de rellenar el encabezado deberemos de indicar el motivo del mensaje a través de la propiedad Subject.


```javascript
Mail.Subject = Request.Form("asunto")
```


Lo único que nos quedará es rellenar el cuerpo del mensaje, para ello utilizaremos la propiedad Body.


```javascript
Mail.Body = Request.Form("mensaje")
```


Una vez conformado todo el mensaje lo enviamos a través del método Send. Después de enviado podemos comprobar si ha ocurrido algún error a través del objeto Error.


```javascript
Mail.Send

If Err <> 0 Then
  Response.Write "Error al enviar el mensaje: " & Err.Description
Else
  Response.Write "Mensaje enviado correctamente"
End If
```

