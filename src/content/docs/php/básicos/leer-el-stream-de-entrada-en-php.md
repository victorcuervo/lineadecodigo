---
title: "Leer el stream de entrada en PHP"
description: "Artículo que nos explica cómo leer el stream de entrada en PHP para poder recibir peticiones de tipo XML o JSON en nuestro servidor."
date: 2013-05-02
updatedDate: 2026-01-07
tags: ["file_get_contents","var_dump"]
slug: php/basicos/leer-el-stream-de-entrada-en-php
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/leer-stream-entrada.php
topic: php
---

Cuando estamos leyendo una petición sobre un fichero [PHP](http://www.manualweb.net/php/) lo más normal es leer las variables _GET y _POST.


Pero puede darse el caso de que queramos leer el stream de entrada en [PHP](http://www.manualweb.net/php/) directamente. Es decir, leer la información que viene independientemente de las variables. Leer el stream de entrada en [PHP](http://www.manualweb.net/php/) puede ser muy útil en casos en los cuales enviemos un XML o un objeto JSON al servidor. Para poder leer el stream de entrada en [PHP](http://www.manualweb.net/php/) vamos a apoyarnos en el elemento "php://".


En [PHP](http://www.manualweb.net/php/) mediante el elemento "php://" podemos acceder a diferentes streams desde nuestros programas, ya sean stream de entrada o stream de salida, a los stream de fichero, a los stream de errores,... 


En el caso del stream de entrada vamos a utilizar la sentencia php://input. Al ser un stream de entrada vamos a apoyarnos en la función file_get_contents.


```php
$datos = file_get_contents('php://input');
```


De esta forma ya tenemos guardado en la variable $datos toda la entrada que haya sido enviada a nuestro fichero [PHP](http://www.manualweb.net/php/). Ya podremos volcarlo por consola, manipularlo,... hacer lo que necesitemos con él. Por ejemplo, volcarlo sobre consola.


```php
var_dump($datos);
```


Espero que con este artículo ya seas capaz de leer el stream de entrada en [PHP](http://www.manualweb.net/php/).

