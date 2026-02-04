---
title: "Autenticar con SMTP"
description: "Cómo configurar las propiedades a la hora de enviar un correo para poder autenticar con SMTP y así identificarse en el servidor."
date: 2006-11-05
updatedDate: 2026-01-06
tags: ["smtp","java-mail","authenticator","properties"]
slug: java/mail/autenticar-con-smtp
type: doc
topic: java
id: fa52cf1c-0284-4483-80b5-b41a235c50b5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/mail/AutentificarSMTP.java
---

Hoy tenía pensado escribir un artículo sobre [JavaScript](http://www.manualweb.net/javascript/). Pero es que lo que me ha sucedido esta semana merece escribir un artículo sobre [JavaMail](http://lineadecodigo.com/tag/java-mail/) y como autenticar con SMTP. En parte para desahogar mis penas, en parte para que si alguien se encuentra con el mismo problema no sufra tanto como yo.Todo empezó el lunes de esta semana, cuando mandé un e-mail a un compañero con el fin de quedar el fin de semana. _Hola Javier, Que tal te parece si quedamos el próximo fin de semana para ir a tomar unas cervezas….._Hasta aquí bien. Lo curioso es que dos día después recibo el siguiente correo. _Que tal Línea de Código, Podríamos quedar este fin de semana y tomarnos unas cervezas para recordar viejos tiempos…_En este punto me dije. O mi amigo se ha convertido en un servidor de ECO o no le ha llegado mi correo. Tras conversación telefónica, efectivamente no le había llegado mi correo. Después de varios días de pruebas, de validar el filtro del antivirus, de probar con otro servidor de correo,…. me doy cuenta que **en el servidor de correo han activado la autenticación de SMTP**. No sé si es que no lo notificaron o no. La verdad es no suelo leerme los correos que mandan (he aquí una mala práctica). La cuestión es que en los lectores de correo es muy fácil configurar la cuenta para que haga esto. Por ejemplo en Outlook 2003 encontramos un check que dice _“Mi servidor de salida (SMTP) requiere autenticación”_. Que con activar hace que funcione el envío de correos. Pero, claro, que pasaba con mis programas escritos en [Java](http://www.manualweb.net/tutorial-java/) con [JavaMail](http://lineadecodigo.com/tag/java-mail/). Pues estos, muy a mi pesar, no funcionaban. Y he aquí el kit de la cuestión ¿Cómo configuro mi programa con [JavaMail](http://www.manualweb.net/java-ee/introduccion-a-java-mail/) para que funcione la autenticación SMTP? Pues muy sencillo. Y es que solo tendremos que activar una de las propiedades de la conexión. La propiedad en cuestión es `mail.smtp.auth`. La cual, si queremos **autenticación SMTP**, tendremos que poner a “true”. Tal y como indica el siguiente código:


```java
Properties props = new Properties();
props.put("mail.transport.protocol","smtp");
props.put("mail.smtp.auth", "true");
props.put("mail.smtp.host","mail.misevidor.com");

Autentificacion pwd = new Autentificacion();
Session mailSession = Session.getInstance(props,pwd);
```


La sesión requerirá de una clase que implemente el interface `javax.mail.Authenticator`.


```java
public class Autentificacion extends javax.mail.Authenticator {
  public Autentificacion() {
    super();
  }

  public javax.mail.PasswordAuthentication getPasswordAuthentication() {
    return new PasswordAuthentication("yo@lineadecodigo.com","mipassword");
  }
}
```


Espero que os sirva de ayuda. Y que si alguien tropieza con la misma piedra, le cueste menos e arreglarlo que a mí. Así habremos enviado nuestro email habiendo conseguido autenticar con SMTP.

