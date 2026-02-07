---
title: "Dirección de respuesta a un email con PHP"
description: "Aprende a configurar una dirección de respuesta diferente en emails PHP usando la cabecera Reply-To con la función mail() y cabeceras CRLF."
date: 2015-09-14
updatedDate: 2026-02-07
tags: ["mail","cabeceras","email"]
slug: php/email/direccion-de-respuesta-a-un-email-con-php
type: doc
topic: php
id: 2c8a9dfb-adca-813d-a569-dfdb41d7eb95
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/enviar-email-replayto.php
---

Ya vimos como [podemos enviar un email con PHP](http://lineadecodigo.com/php/enviar-email-con-php/), de una forma sencilla, apoyándonos en la función mail(). Pero, cómo podemos modificar la dirección de respuesta a un email con [PHP](http://www.manualweb.net/php/). Es decir, cómo podemos hacer que aunque sea yo el que envíe el email, las respuesta que nos proporcione el usuario vayan a otro email.


## Modificar las cabeceras del email


Para poder conseguir modificar la dirección de respuesta a un email con [PHP](http://www.manualweb.net/php/) deberemos de modificar sus cabeceras. [Ya vimos al enviar el email](http://lineadecodigo.com/php/enviar-email-con-php/) que nos apoyábamos sobre las cabeceras para indicar quién era el usuario que enviaba el email.


```php
$cabeceras = 'From: Mi Nombre<yo@correo.com>';
```


## Añadir la cabecera Reply-To


Pues mediante el mismo mecanismo vamos a añadir una dirección de respuesta a un email con [PHP](http://www.manualweb.net/php/). En este caso la cabecera a añadir es Reply-to. Y le contenido será la dirección de respuesta.


```php
$cabeceras = 'From: Mi Nombre<yo@correo.com>' . "\r\n" .
    'Reply-To: Otro <otro@correo.com>';
```


> Es importante saber que las cabeceras de un mensaje de email deben de separarse mediante un un CRLF (\r\n).


## Código completo


De esta forma tan sencilla habremos conseguido enviar nuestro mensaje con una dirección de respuesta a un email con [PHP](http://www.manualweb.net/php/). El código [PHP](http://www.manualweb.net/php/) completo quedaría de la siguiente forma:


```php
$para = 'nombre@correo.com';
$titulo = 'Enviando email desde PHP';
$mensaje = 'Este es el primer email que envío desde PHP';
$cabeceras = 'From: Mi Nombre<yo@correo.com>' . "\r\n" .
    'Reply-To: Otro <otro@correo.com>';

$enviado = mail($para, $titulo, $mensaje, $cabeceras);

if ($enviado)
  echo 'Email enviado correctamente';
else
  echo 'Error en el envío del email';
```

