---
title: "Descargar emails de GMail con PHP"
description: "Instrucciones para descargar emails de GMail usando PHP y la configuración IMAP adecuada."
date: 2011-03-25
updatedDate: 2026-01-08
tags: ["descargar","email","gmail","imap","imap_close","imap_fetch_overview","imap_open","imap_search"]
slug: php/mail/descargar-emails-de-gmail-con-php
author: victor_cuervo
type: doc
topic: php
id: fa0787cd-fce6-4841-8ad1-549ddd602e61
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/descagar-email-de-gmail.php
---

Una aplicación práctica para [descargarte emails con IMAP y PHP](http://lineadecodigo.com/php/descargar-emails-con-imap-y-php/) es decargarnos los correos de [GMail](http://www.ayudaenlaweb.com/correo-electronico/que-es-gmail/). Lo primero que tenemos que hacer es confirmar que tenemos activado el acceso por IMAP en nuestra cuenta de [GMail](http://www.ayudaenlaweb.com/correo-electronico/que-es-gmail/). Para ello tenemos que ir a:


```text
Mail Settings » Forwarding and POP/IMAP » IMAP Access
```


Seleccionamos la opción **Enable IMAP** y guardamos los cambios. Lo segundo que tenemos que saber es que al servidor de IMAP de [GMail](http://www.ayudaenlaweb.com/correo-electronico/que-es-gmail/) se accede mediante la siguiente configuración:


```php
$hostname = '{imap.gmail.com:993/imap/ssl}INBOX';
$username = 'usuario@gmail.com';
$password = 'password';
```


Hay que tener cuidado ya que se utiliza el puerto 993 para acceder por IMAP. Los siguientes pasos son los mismos que explicamos en [cómo descargarte emails con IMAP y PHP](http://lineadecodigo.com/php/descargar-emails-con-imap-y-php/) o en cómo [decargarte emails con POP3 y PHP](http://lineadecodigo.com/php/descargar-emails-con-pop3-y-php/). Pero dejemos el código impreso:


```php
$emails = imap_search($inbox,'ALL');
if($emails) {
  $salida = '';
  foreach($emails as $email_number) {    
    $overview = imap_fetch_overview($inbox,$email_number,0);
    $salida.= 'Tema: '.$overview[0]->subject;
    $salida.= 'De: '.$overview[0]->from;	   
  }  
  echo $salida;
} 
imap_close($inbox);
```

