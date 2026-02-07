---
title: "Alto y ancho de una imagen en PHP"
description: "Aprende a obtener el alto y ancho de imágenes en PHP usando la función getimagesize() que devuelve dimensiones, tipo de archivo y atributos."
date: 2013-01-23
updatedDate: 2026-02-07
tags: ["getimagesize","width","height"]
slug: php/imagenes/alto-y-ancho-de-una-imagen-en-php
type: doc
topic: php
id: 9bc946db-f7da-4f3d-a9d4-1bdc4df54699
author: Dave Rndn
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/imagenes/image-size.php
---

En este ejemplo veremos cómo obtener de manera sencilla información sobre una imagen en [PHP](http://www.manualweb.net/php/), específicamente su ancho y su alto de manera que podamos manipular nuestra imagen de manera sencilla en nuestra aplicación.


## La función getimagesize()


[PHP](http://lineadecodigo.com/categoria/php/) nos recomienda el método `getimagesize()` la cual determinará el tamaño de un archivo de imagen dado y devolverá las dimensiones junto con el tipo de archivo y una cadena de texto con el alto/ancho para ser usada dentro una etiqueta `IMG` de [HTML](https://www.manualweb.net/html/) normal y el tipo de contenido HTTP correspondiente.


`getimagesize()` también puede devolver alguna información más con el parámetro imageinfo.


## Obtener ancho y alto de la imagen


A continuación veremos como obtener información sobre la imagen:


```php
<?php 

 $file = "logo.png";  // Dirección de la imagen

 $imagen = getimagesize($file);    //Sacamos la información
 $ancho = $imagen[0];              //Ancho
 $alto = $imagen[1];               //Alto

 echo "Ancho: $ancho";
 echo "Alto: $alto";

?>
```


El retorno de la función `getimagesize()` es un array, el cual dependiendo de la posición, contiene una información u otra. Así en la posición 0 tenemos el ancho y en la posición 1 tenemos el alto.


## Obtener información adicional


Sin embargo también podemos obtener más información de la imagen como por ejemplo su tipo: JPG, PNG,...:


```php
list($width, $height, $type, $attr) = getimagesize("imagen.jpg");

echo "Ancho de imagen: " .$width;
echo '';
echo "Alto de imagen: " .$height;
echo '';
echo "Tipo de imagen: " .$type;
echo '';
echo "Atributos: " .$attr;
```


Los tipos de imagen que podemos encontrar en $type son:


| Código | Tipo | Código | Tipo | Código | Tipo | Código | Tipo |
| ------ | ---- | ------ | ---- | ------ | ---- | ------ | ---- |
| 1      | GIF  | 5      | PSD  | 9      | JPC  | 13     | SWC  |
| 2      | JPG  | 6      | BMP  | 10     | JP2  | 14     | IFF  |
| 3      | PNG  | 7      | TIFF | 11     | JPX  | 15     | WBMP |
| 4      | SWF  | 8      | TIFF | 12     | JB2  | 16     | XBM  |

undefined
## Funciones adicionales para procesamiento de imágenes


Además la documentación de [PHP](http://lineadecodigo.com/categoria/php/) nos da mas referencias acerca del procesamiento de imágenes, algunas funciones que nos ofrece son:

- **getimagesizefromstring** — Obtener el tamaño de una imagen desde una cadena
- **image_type_to_extension** — Obtiene la extensión de un tipo de imagen
- **image_type_to_mime_type** — Obtiene el tipo Mime de un tipo de imagen devuelto por getimagesize
- **image2wbmp** — Exportar la imagen al navegador o a un fichero
- **imagealphablending** — Establece el modo de mezcla para una imagen
- **imageantialias** — Permite o no el uso de funciones antialias
- **imagearc** — Dibujar un arco
- **imagechar** — Dibujar un carácter horizontalmente
- **imagecharup** — Dibujar un carácter verticalmente
- **imagecolorallocate** — Asigna un color para una imagen
- **imagecolorallocatealpha** — Asigna un color con transparencia para una imagen
- **imagecolorat** — Obtener el índice del color de un píxel

Para consultar mas métodos puedes visitar la documentación de procesamiento de imágenes en [PHP](http://www.manualweb.net/php/) en [http://php.net/manual/es/book.image.php](http://php.net/manual/es/book.image.php)


Esperemos que os haya servido de utilidad este ejemplo para saber como poder calcular el alto y ancho de una imagen en [PHP](http://www.manualweb.net/php).

