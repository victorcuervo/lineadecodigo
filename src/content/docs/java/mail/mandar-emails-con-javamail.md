---
title: "Mandar emails con JavaMail"
description: "Descripción de los pasos que tenemos que seguir para poder mandar emails con JavaMail. Propiedades, Sesión, Campos del mensaje, texto del mensaje y envío."
date: 2006-11-10
updatedDate: 2026-01-06
tags: ["java-mail","email"]
slug: java/mail/mandar-emails-con-javamail
author: victor_cuervo
type: doc
topic: java
id: a7b94c04-4cce-4c94-8f48-a9fbd9cff52d
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/mail/MandarEmail.java
---

Una buena funcionalidad a incluir dentro de cualquier página web es el envío de correos. El poder adjuntarla información que estamos leyendo en ese momento, vía correo a otra persona (o a sí mismo). Así que vamos a ver cómo podemos mandar emails con [JavaMail](http://lineadecodigo.com/tag/java-mail/). El [API de JavaMail](http://lineadecodigo.com/tag/java-mail/) nos permite el envío de correos. Abstrayéndonos de los protocolos de comunicación para el envío de emails (SMTP, POP3, MAIL,…). Con muy pocas líneas de código nos permite el enviar un mensaje a una dirección de correo electrónico. Los pasos a seguir serán:

1. Propiedades del envío
2. Obtener la sesión
3. Configurar los campos del mensaje
4. Configurar el texto del mensaje
5. Enviar el mensaje

## 1. Propiedades de envío


Lo primero que tenemos que hacer es configurar las propiedades del envío. Es decir, cual es el servidor de correo que vamos a utilizar, si el servidor requiere autenticación, el tipo de transporte a utilizar,.. Todas las configuraciones las definimos mediante la clase [`Properties`](http://w3api.com/wiki/Java:Properties). Para incorporar una propiedad utilizamos el método [`.put(propiedad,valor)`](http://w3api.com/wiki/Java:Hashtable.put())


```text
Properties props = new Properties();

props.put("mail.smtp.host","mail.lineadecodigo.com");
props.put("mail.transport.protocol","smtp");
props.put("mail.smtp.auth", "true");
props.setProperty("mail.user", "myuser");
props.setProperty("mail.password", "mypwd");
```


Al menos las cuatro primeras propiedades son necesarias para realizar la conexión: - **mail.smtp.host**, representa el host que hace de servidor de correo
- **mail.transport.protocol**, es el protocolo de comunicación que queremos utilizar para enviar el correo. En este caso es SMTP, pero podría ser mail.
- **mail.smtp.auth**, indica si se requiere de autenticación de SMTP.
- **mail.user**, es el usuario de la conexión.
- **mail.password**, el el password de la conexión.


## 2. Obtener la sesión


Una vez que tengamos definidas las propiedades, pasaremos a establecer la sesión con el servidor de correo. La sesión se establece mediante la clase [`Session`](http://w3api.com/wiki/Java:Session).


```text
Session mailSession = Session.getInstance(props,null);
```


## 3. Configurar los campos del mensaje


Sobre la sesión de correo vamos a crear un mensaje. Los mensajes se manejan mediante la clase [`Message`](http://w3api.com/wiki/Java:Message). Para instanciarlo utilizaremos la siguiente [línea de código](/):


```text
Message msg = new MimeMessage(mailSession);
```


El mensaje hay que rellenarlo con datos: el usuario destino, el texto del mensaje, el “subject” del mensaje,… Para esto contamos con diferentes métodos dentro de la clase [`MimeMessage`](http://w3api.com/wiki/Java:MimeMessage) como [`.setSubject(String)`](http://w3api.com/wiki/Java:MimeMessage.setSubject()), [`setFrom(Adress)`](http://w3api.com/wiki/Java:MimeMessage.setFrom()),..


```text
msg.setSubject("Mensaje de Línea de Código");
msg.setFrom(new InternetAddress("web@lineadecodigo.com","Línea de Código"));
msg.addRecipients(Message.RecipientType.TO, new InternetAddress[] { new InternetAddress("miamigo@gmail.com") });
```


Entremos un poco más en detalle en estos métodos… En el caso del [`.setSubject(String)`](http://w3api.com/wiki/Java:MimeMessage.setSubject()) no tiene mucho misterio, ya que simplemente es una línea de texto que represente el subject del correo. Para el método [`.setFrom(Address)`](http://w3api.com/wiki/Java:MimeMessage.setFrom()) vemos que el parámetro que recibe es una clase [`Address`](http://w3api.com/wiki/Java:Address). Esta clase viene a abstraer la dirección de email para los correos electrónicos. Es por ello que tendremos que utilizar el constructor [`InternetAddress`](http://w3api.com/wiki/Java:InternetAddress) para crear una dirección de email. El constructor recibe dos parámetros, la dirección de email y el nombre asociado a dicha dirección (nombre que suelen usar los programas de correo como referente). Veamos esa [línea de código](/):


```text
new InternetAddress("web@lineadecodigo.com","Línea de Código")
```


A la hora de especificar los destinatarios tenemos que utilizar el método [`.addRecipients(Message.RecipientType,Adress[])`](http://w3api.com/wiki/Java:Message.addRecipients()) Los parámetros de este método son dos: - **Message.RecipientType**, el tipo de usuario que va a recibir el mensaje. Los valores serían TO, CC, BCC. O en español: para, en copia y en copia oculta.
- **Adress[]**, como direcciones de email. Ya vimos anteriormente que los emails se montan con la clase InternetAddress.


## 4. Configurar el texto del mensaje


Para insertar el texto del mensaje utilizaremos el método [`.setDataHandler(DataHandler)`](http://w3api.com/wiki/Java:Part.setDataHandler()). El handler, representado por un [`DataHandler`](http://w3api.com/wiki/Java:DataHandler), tendrá el texto que se va a enviar y el tipo de codificación que le queremos aplicar. En este caso será **“text/plain”**, ya que vamos a enviar texto plano.


```text
DataHandler dh = new DataHandler("Texto del mensaje","text/plain");
msg.setDataHandler(dh);
```


## 5. Enviar el mensaje


El mensaje se enviará mediante la clase [`Transport`](http://www.w3api.com/wiki/Java:Transport). Esta clase tiene un método estático que se llama [`.send(Message)`](http://w3api.com/wiki/Java:Transport.send()). Dicho método recibirá el mensaje que hemos montado anteriormente como parámetro y lo enviará. Solo necesitaremos la siguiente línea de código:


```text
javax.mail.Transport.send(msg);
```


En el proceso de envío multiples excepciones pueden ser elevadas. Es por ello que deberemos de ejecutar todo nuestro código entre un `try-catch`. Espero que os haya sido sencillo este pequeño ejemplo que paso a paso nos describe cómo mandar emails con [JavaMail](http://lineadecodigo.com/tag/java-mail/).

