---
title: "Enviar email con formato HTML en PHP"
description: "Aprende a enviar emails con formato HTML en PHP configurando cabeceras MIME, Content-type y charset con la función mail() para contenido enriquecido."
date: 2015-09-16
updatedDate: 2026-02-08
tags: ["mail","mime","html","utf8"]
slug: php/email/enviar-email-con-formato-html-en-php
type: doc
topic: php
id: afcf96a5-1fe5-4bcb-8a88-f0832853e7a0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/enviar-email-html.php
---

En anteriores ejemplos hemos visto [como podíamos enviar un email en PHP](http://lineadecodigo.com/php/enviar-email-con-php/) y [cómo podíamos añadir un destinatario diferente para la respuesta](http://lineadecodigo.com/php/direccion-de-respuesta-a-un-email-con-php/). Si bien, en ambos casos, el email enviado era un email en formato texto.


En este ejemplo vamos a ver cómo podemos enviar email con formato [HTML](https://www.manualweb.net/html/) en [PHP](http://www.manualweb.net/php/). Al enviar email con formato [HTML](https://www.manualweb.net/html/) en [PHP](http://www.manualweb.net/php/) podremos incrementar las posibilidades de visualización del mismo en los clientes de correo de nuestros destinatarios. Así podremos insertar imágenes, tablas, formularios,...


## Configurar el destinatario


Lo primero será configurar el destinatario del correo.


```php
$para = 'nombre@correo.com';
```


## Definir el contenido HTML


Después definiremos una variable para el título y otra para el contenido. En este caso el texto que insertemos en el contenido ya será puro [HTML](https://www.manualweb.net/html/).


```php
$titulo = 'Enviando email desde PHP';

$mensaje = '<html>'.
	'<head><title>Email con HTML</title></head>'.
	'<body><h1>Email con HTML</h1>'.
	'Esto es un email que se envía en el formato HTML'.
	'<hr>'.
	'Enviado por mi programa en PHP'.
	'</body>'.
	'</html>';
```


Podemos utilizar cualquier elemento [HTML](https://www.manualweb.net/html/) que queramos e incluso podemos añadir [contenido CSS](http://www.manualweb.net/css/). Si bien hay que tener en cuenta que algunos clientes de correo son muy limitados a la hora de visualizar el contenido de los emails. Es por ello que no es muy recomendable abusar de las características, sobre todo de las de [CSS](http://www.manualweb.net/css/).


## Configurar las cabeceras MIME


Esto no será suficiente para poder enviar email con formato [HTML](https://www.manualweb.net/html/) en [PHP](http://www.manualweb.net/php/). Todavía tenemos que hacer otra cosa, esta será añadir unas cabeceras en la cuales digamos que el contenido que estamos enviando es un contenido [HTML](https://www.manualweb.net/html/).


Estas cabeceras indican que el MIME-Version es el 1.0, que el content-type es `"text/html"` y que el charset de codificación es `"utf-8"` u otro que quieras utilizar.


```php
$cabeceras = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
```


> Importante no olvidar que las cabeceras están separadas por líneas mediante un código CRLF (\r\n).


Ya solo nos quedará añadir la cabecera para indicarle quienes somos (los que enviamos el email):


```php
$cabeceras .= 'From: Mi Nombre<yo@correo.com>';
```


## Enviar el email


Y enviar el email mediante la función mail().


```php
$enviado = mail($para, $titulo, $mensaje, $cabeceras);

if ($enviado)
  echo 'Email enviado correctamente';
else
  echo 'Error en el envío del email';
```


Con esto ya habremos conseguido enviar email con formato [HTML](https://www.manualweb.net/html/) en [PHP](http://www.manualweb.net/php/).

