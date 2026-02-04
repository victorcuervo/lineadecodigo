---
title: "Email a múltiples destinatarios con PHP"
description: "Se explica cómo enviar un email a múltiples destinatarios con PHP utilizando la función mail y separando correos con comas."
date: 2017-10-01
updatedDate: 2026-02-04
tags: ["email","mail"]
slug: php/mail/email-a-multiples-destinatarios-con-php
type: doc
topic: php
id: 4f1f1147-ddc8-41b3-a7cc-f69501114c5b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/multiples-destinatarios.php
---

Ya hemos visto [lo sencillo que es enviar un email en PHP](http://lineadecodigo.com/php/enviar-email-con-php/), pero cómo tenemos que hacer para poder enviar un email a múltiples destinatarios con [PHP](http://www.manualweb.net/php/). Pues veamos lo sencillo que es realizar esta tarea. Lo primero que nos tenemos que fijar es en el método que se utiliza en [PHP](http://www.manualweb.net/php/) para enviar emails, este es a función `mail()`. Si analizamos los parámetros que nos ofrece esta función veremos que son muy sencillos de entender:


```php
bool mail ( string $to , string $subject , string $message
   [, string $additional_headers [, string $additional_parameters ]] )
```


El parámetro `$to` es el que nos permite identificar los destinatarios del email. Ya que queremos enviar el email a múltiples destinatarios con [PHP](http://www.manualweb.net/php/) deberemos de **conformar una cadena de emails los cuales estén separados por comas**. > Es importar **respetar el uso de la coma** para separarlos, ya que otra forma de separar los emails no funcionaría.


```php
$para = 'usuario1@correo.com, usuario2@otrocorreo.com';
```


El resto de parámetros serán: `$subject` para representar el título del mensaje y `$message` para indicar el mensaje que quieras enviar. Para poder indicar de quién le envía el correo electrónico deberemos de utilizar las cabeceras del método `mail()`.


```php
$para = 'usuario1@correo.com, usuario2@otrocorreo.com';
$titulo = 'Enviando email desde PHP';
$mensaje = 'Este es un email que se envía a múltiples destinatarios';
$cabeceras = 'From: Línea de Código <envios@lineadecodigo.com>';</envios@lineadecodigo.com>
```


Ya solo nos quedará invocar a `mail()`.


```text
$enviado = mail($para, $titulo, $mensaje, $cabeceras);
```


El valor que nos deja en la variable `$enviado` representará si el correo se envió correctamente o hubo problemas en el envío. Es por ello que podemos realizar alguna comprobación:


```text
if ($enviado)
  echo 'Email enviado correctamente a '.$para;
else
  echo 'Error en el envío del email';
```


De esta forma tan sencilla hemos conseguido enviar un email a múltiples destinatarios con [PHP](http://www.manualweb.net/php/).

