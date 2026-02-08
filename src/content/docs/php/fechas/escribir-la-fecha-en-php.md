---
title: "Escribir la fecha en PHP"
description: "Aprende a escribir la fecha en PHP usando date() y date_default_timezone_set() para configurar la zona horaria y formatear día, mes y año."
date: 2013-11-17
updatedDate: 2026-02-08
tags: ["date","date_default_timezone_set"]
slug: php/fechas/escribir-la-fecha-en-php
type: doc
topic: php
id: 06da57a7-45f7-47d6-8ed7-e731c1f708a2
author: xhrist14n
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/fechas/fecha.php
---

Una de las cosas más habituales en los programas es el manejo de las fechas. Es muy normal que tengamos que obtener la fecha en [PHP](http://www.manualweb.net/php/) para diferentes necesidades, ya sean consultas a la base de datos, mostrar información al usuario,...


En este pequeño artículo vamos a ver lo sencillo que es escribir la fecha en [PHP](http://www.manualweb.net/php/).


## Establecer zona geográfica


Primeramente para poder hacer uso de la fecha en [PHP](http://www.manualweb.net/php/) tenemos que tener en cuenta que hay variantes de las diferentes regiones del planeta. Para expresar las fechas, por tanto, debemos hacer uso de la función `date_default_timezone_set` para detallar la zona geográfica de donde sacaremos la fecha a usar.


```php
//definimos el area geografica del cual deseamos la fecha
date_default_timezone_set("America/Lima"); //Zona horaria de Peru
```


## Obtener la fecha en PHP


Lo siguiente que debemos hacer es tener en cuenta el uso de la función `date` con los parámetros correctos. En este caso para obtener la fecha necesitamos el día, mes, y año. Para conseguir estos datos usamos como parámetro:

- **"d"**, para día.
- **"m"**, para mes.
- **"Y"**, para el año.

Quedándonos un código como se ve a continuación:


```php
//definimos el area geografica del cual deseamos la fecha
date_default_timezone_set("America/Lima");

//extraemos la fecha usando la funcion date 
// d: dia
// m: mes
// Y: año en cuatro dígitos
echo date("d/m/Y"); 

exit; //damos fin a la salida
```


Con este sencillo código ya hemos conseguido escribir la fecha en [PHP](http://www.manualweb.net/php/).

