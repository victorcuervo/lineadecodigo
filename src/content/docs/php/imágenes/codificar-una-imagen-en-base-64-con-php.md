---
title: "Codificar una imagen en base 64 con PHP"
description: "Aprende a codificar imágenes en base64 con PHP usando base64_encode y file_get_contents para reducir peticiones HTTP y optimizar la carga web."
date: 2013-02-06
updatedDate: 2026-02-07
tags: ["base64_encode","base64_decode","file_get_contents","img"]
slug: php/imagenes/codificar-una-imagen-en-base-64-con-php
type: doc
topic: php
id: 2c8a9dfb-adca-81dd-9d01-e49e4d4dba95
author: Dave Rndn
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/imagenes/imagen-base64.php
---

Codificar una imagen e insertarla directamente en el código nos facilita la tarea de optimizar las páginas web y hacerlas más rápidas. Esto nos da la ventaja de acelerar la carga al disminuir las peticiones necesarias, además evita el uso de archivos externos.


Base 64 es un tipo de codificación diseñado para que datos binarios sobrepasen capas de transporte que no son de 8-bits. La información codificada con este sistema dará como resultado una secuencia de letras, que constituye un archivo y puede ser decodificado y mostrado correctamente por cualquier navegador web.


## Codificando la imagen en base 64


Codificar un archivo es algo sencillo, ya que [PHP](http://www.manualweb.net/php/) incluye una librería que permite la conversión en base64 de la siguiente forma mediante el método `base64_encode`.


```php
string base64_encode (cadena o datos)
```


Por ejemplo para codificar una cadena de texto utiliza el siguiente código:


```php
<?php
$cadena = "Hola mundo";
$codificado = base64_encode($cadena);
echo $codificado; //Se muestra SG9sYSBtdW5kbw==
?>
```


## Decodificar en base64


En el siguiente ejemplo podemos ver como se codifica/decodifica en base64 con [PHP](http://www.manualweb.net/php/):


```php
<?php
$cadena = "Hola mundo";
$codificado = base64_encode($cadena);
echo base64_decode($codificado); //Se muestra Hola mundo
echo $codificado; //Se muestra SG9sYSBtdW5kbw==
?>
```


## Codificar una imagen en base64


Una vez que hemos visto como se codifica/decodifica una cadena de texto, veremos este ejemplo de cómo codificar una imagen en base 64 con [PHP](http://www.manualweb.net/php/):


```php
<?php
$imagen = file_get_contents("imagen.jpg");
$imdata = base64_encode($imagen);
?>
```


Lo que hemos hecho ha sido obtener el contenido de la imagen del directorio mediante `file_get_contents` y pasarla a base64 con `base64_encode`.


## Insertar la imagen en HTML


Para insertarla en nuestra página web sería algo como esto:


```php
<?php
echo "<img src=\"data:image/jpg;base64,".$imdata."\"></img>";
?>
```


Donde imdata es datos base64.

