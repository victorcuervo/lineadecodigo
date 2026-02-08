---
title: "Enviar email con PHP"
description: "Aprende a enviar emails con PHP usando la función mail(), configurando el destinatario, mensaje y cabeceras From para especificar el origen."
date: 2015-09-12
updatedDate: 2026-02-08
tags: ["mail","to","from"]
slug: php/email/enviar-email-con-php
type: doc
topic: php
id: 77849e46-dab4-4cbc-8f80-c54353973675
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/enviar-email.php
---

Para enviar email con [PHP](http://www.manualweb.net/php/) lo más sencillo es que utilicemos la función mail() que nos ofrece el lenguaje. Esta función mail() se apoya en el programa sendmail para realizar el envío de los email.


Sendmail suele venir configurado con todas las instalaciones de los servidores PHP. En el caso de que no lo tengas instalado te recomiendo que le eches un ojo a la [configuración del mail en PHP](http://php.net/manual/en/mail.configuration.php).


Pasemos a ver como sería nuestro código [PHP](http://www.manualweb.net/php/). Podremos comprobar que para enviar email con [PHP](http://www.manualweb.net/php/) se necesitan muy pocas líneas.


## Configurar el mensaje


Lo primero que tenemos que hacer es definir dos variables que contengan el título del mensaje y el mensaje en sí.


```php
$titulo = 'Enviando email desde PHP';
$mensaje = 'Este es el primer email que envío desde PHP';
```


Dentro del mensaje podemos incluir saltos de línea mediante los caracteres escapados '\r\n':


```php
$mensaje = 'Este es el primer email\r\nque envío desde PHP';
```


## Definir el destinatario


Lo siguiente será definir otra variable con el mail de la persona a la que enviamos el mensaje:


```php
$para = 'nombre@correo.com';
```


## Enviar el email


Ya solo nos quedará invocar a la función mail() para poder enviar mail con [PHP](http://www.manualweb.net/php/). A dicha función le pasaremos como parámetro las variables `$para`, `$titulo` y `$mensaje` en ese orden.


```php
$enviado = mail($para, $titulo, $mensaje);

if ($enviado)
  echo 'Email enviado correctamente';
else
  echo 'Error en el envío del email';
```


La función mail() devuelve true si se ha podido procesar el mensaje y false en caso contrario. Es por ello que una simple validación nos puede servir para informar al usuario.


Con esto ya habremos conseguir enviar email con [PHP](http://www.manualweb.net/php/).


## Configurar el origen del email


Pero hay un pequeño detalle en el que tenemos que hacer hincapié. Y es que a nuestro destinatario le aparecerá como origen del mensaje el usuario que tengamos configurado por defecto en el programa de envío de email. Si usas un servidor es probable que sea un usuario diferente al tuyo.


Así que vamos a definir una cuarta variable que será el origen. Para ello debemos de ponerlo en la cabecera del mensaje.


```php
$cabeceras = 'From: Mi Nombre<yo@correo.com>';
```


Este parámetro se lo pasaremos también a la función mail().


```php
$enviado = mail($para, $titulo, $mensaje, $cabeceras);
```


Así, con estas pocas líneas habremos conseguido enviar email con [PHP](http://www.manualweb.net/php/).

