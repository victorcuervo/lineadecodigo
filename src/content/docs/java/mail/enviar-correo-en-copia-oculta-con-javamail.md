---
title: "Enviar correo en copia oculta con JavaMail"
description: "El artículo explica cómo enviar correos en copia oculta utilizando JavaMail, permitiendo que ciertos destinatarios reciban el mensaje sin ser visibles."
date: 2006-12-12
updatedDate: 2026-01-07
tags: ["java-mail","message","mimemessage","bcc"]
slug: java/mail/enviar-correo-en-copia-oculta-con-javamail
author: victor_cuervo
type: doc

topic: java
---

Una de las cosas que podemos hacer al enviar un correo es poner un email en copia oculta. Esto significa que la persona a la que pongamos en copia oculta recibirá el email sin que el resto de personas que van en el email sepan de tal hecho. Veremos que esto es muy sencillo de programar con [JavaMail](http://www.manualweb.net/javaee/). Esto suele ser de gran utilidad para avisar a alguien del contenido de un email. Por ejemplo, en las empresas una práctica muy habitual es copiar a tu jefe/a en copia oculta para que sea consciente de lo que se estás enviando. También se puede utilizar para validar que se ha enviado y en este caso, se suele poner uno mismo en copia oculta. Vamos, que las aplicaciones son de lo más variopintas. Si queremos implementar este comportamiento con [JavaMail](http://www.manualweb.net/javaee/) lo primero que debemos de aprender es a [Mandar emails con JavaMail](http://lineadecodigo.com/java/mandar-emails-con-javamail/). Para lo que os recomiendo encarecidamente la lectura de dicho artículo. Y es que cuando estamos configurando los campos del mensaje lo primero que hacemos es instanciar una clase `Message`.


```java
Message msg = new MimeMessage(mailSession);
```


Y sobre dicho mensaje configuraremos los campos TO, CC y BCC. Para ello nos apoyaremos en el método .addRecipients, el cual recibe 2 parámetros: el tipo de recipiente y la lista de emails de dicho tipo de recipiente. Esta lista de direcciones viene representada por un arry de InternetAdress[]. Para resolver nuestro problema solo deberemos de jugar con el tipo de recipiente y utilizar el tipo BCC. Este es el acrónimo de “blind carbon copy”. O lo que nosotros denominamos copia oculta.


Es por ello que nuestra [línea de código](/) quedaría de la siguiente forma:


```java
 msg.addRecipients(Message.RecipientType.BCC, new InternetAddress[] { new InternetAddress("miamigo_oculto@gmail.com") });
```


El resto del código para enviar el email lo puedes encontrar en [Mandar emails con JavaMail](http://lineadecodigo.com/java/mandar-emails-con-javamail/).

