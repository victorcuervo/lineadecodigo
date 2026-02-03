---
title: "Obtener cuerpo de un mensaje con PHP"
description: "Uso de la función imap_fetchbody() para obtener cuerpo de un mensaje con PHP sobre una lista de emails recuperados de un servidor accedido mediante imap."
date: 2017-10-05
updatedDate: 2026-01-08
tags: ["imap_open","mail","imap_search","imap_fetchbody","imap_qprint","imap_close"]
slug: php/mail/obtener-cuerpo-de-un-mensaje-con-php
author: victor_cuervo
type: doc
topic: php
id: 8c5b40c4-43a0-4449-b28e-bd1d2080d693
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/email/cuerpo-mensaje.php
---

Cuando recuperamos mensajes de un servidor de correo tendremos dos partes, por un lado obtendremos un resumen con el tema de mensaje e información de la persona que lo envía y en un segundo paso tendremos el contenido del mensaje. En este ejemplo vamos a obtener cuerpo de un mensaje con [PHP](http://www.manualweb.net/php/). Para ello lo primero que haremos será **conectarnos vía imap** al servidor de correo mediante la función `imap_open()`. A la función `imap_open()` le pasamos el nombre del servidor, el usuario y la contraseña del mismo para poder conectarse.


```text
$hostname = '{mail.correo.com/notls}INBOX';
$username = 'test@correo.com';
$password = 'password';

$inbox = imap_open($hostname,$username,$password) or die('Ha fallado la conexión: ' . imap_last_error());
```


Una vez que nos hemos conectado al servidor de correo deberemos de recuperar los emails de uno de los buzones, en este caso vamos a recuperar todos los emails del buzón principal utilizando la función `imap_search()`.


```text
$emails = imap_search($inbox,'ALL');
```


En la variable `$emails` tendremos todos los emails del buzón principal. Ahora vamos a obtener el cuerpo de uno de los mensajes, en concreto, y a modo de ejemplo lo haremos del primer mensaje. La función que nos ayuda a obtener cuerpo de un mensaje con [PHP](http://www.manualweb.net/php/) es `imap_fetchbody()`. Esta función recibe cuatro parámetros:


```text
imap_fetchbody($stream_correos, $numero_mensaje, $seccion, $opciones);
```


El `$stream_correos` son todos los emails obtenidos mediante `imap_search()`, `$numero_mensaje` es el número de mensaje dentro de la lista, el primer número será el 1. Con respecto a `$seccion` lo que vamos a poder recoger es o bien **la cabecera**, cuyo valor sería 0, o bien lo que sería **el cuerpo del mensaje** cuyo valor sería 1. De esta manera el código que nos recuperaría el cuerpo del mensaje del primero de los mensajes sería:


```text
$cuerpo = imap_fetchbody($inbox,1,1);
```


El contenido del cuerpo del mensaje vendrá codificado, así que deberemos de utilizar la función `imap_qprint()` para volcar el contenido.


```text
echo imap_qprint($cuerpo);
```


Ya solo nos quedará cerrar la conexión imap al servidor para terminar nuestro ejemplo que nos permite obtener cuerpo de un mensaje con [PHP](http://www.manualweb.net/php/).


```text
imap_close($inbox);
```

