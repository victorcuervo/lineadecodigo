---
title: "Recuperar datos de un formulario con PHP"
description: "Aprende a recuperar datos de un formulario con PHP usando el método GET y la variable $_GET para mostrar los valores introducidos por el usuario."
date: 2010-01-03
updatedDate: 2026-02-08
tags: ["form","get"]
slug: php/basicos/recuperar-datos-de-un-formulario-con-php
type: doc
topic: php
id: 5fec52ba-0596-4d54-84d9-6a7ea5a5c4c3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/basico/pasar-parametros/
---

Vamos a crear un código en [PHP](http://www.manualweb.net/php/) que nos permita recuperar los datos introducidos en un formulario y nos los muestre en pantalla.


## Crear el formulario HTML


El primer paso será el crear el formulario [HTML](https://www.manualweb.net/html/) que nos permita captar los datos del usuario. Este formulario tendrá dos campos de texto y un botón que nos permita enviarlo.


```html
<form action="recibir-parametros.php" id="myform" method="GET">
	<label for="p1">Primer parametro</label>
	<input id="p1" name="p1" type="text"></input>
	
	<label for="p2">Segundo parametro</label>
	<input id="p2" name="p2" type="text"></input>
	
	<input type="submit" value="Enviar Formulario"></input>
</form>
```


En este punto es muy importante el valor de los atributos [name](http://w3api.com/HTML/form/name/), ya que serán los valores que demos a estos atributos, los que nos sirvan para recuperar lo que el usuario introduzca. En nuestro caso hemos dado los valores de **p1** y **p2**, que serán los que recuperemos.


Un segundo punto en el que tenemos que prestar atención es en atributo [action](https://www.w3api.com/HTML/a/ction). En dicho atributo tenemos que indicar el nombre del fichero [PHP](http://www.manualweb.net/php/) que procesará y recuperará los datos del formulario. El fichero que codificaremos más adelante se llamará `recibir-parametros.php`.


El último punto importante del formulario será el tipo de envío de los parámetros. El tipo de envío se especifica mediante el atributo [method](https://www.w3api.com/HTML/form/method/) y sus valores pueden ser POST o GET. Con POST los parámetros se pasan de forma oculta, mientras que con GET podemos ver los valores en la URL de petición. Dependiendo del método de envío que utilicemos necesitaremos utilizar un método u otro en nuestro código [PHP](http://www.manualweb.net/php/).


## Recuperar los datos con PHP


Pasemos ya a codificar el fichero [PHP](http://www.manualweb.net/php/). Este será sencillo. El método para recuperar datos de un formulario, cuando estamos pasando los parámetros mediante el método GET, es `$_GET[]`. El nombre del dato a recuperar se pasará como parámetro.


```php
$_GET["p1"];
$_GET["p2"];
```


## Mostrar los datos


Ahora solo nos quedará el mostrarlo por pantalla. Para ello utilizamos la sentencia `echo` de la siguiente forma:


```php
echo "El valor de p1 es ",  $_GET["p1"], "<br></br>";
echo "El valor de p2 es ",  $_GET["p2"];
```

