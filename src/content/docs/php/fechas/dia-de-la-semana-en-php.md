---
title: "Día de la semana en PHP"
description: "Aprende a obtener el día de la semana en PHP usando date, strftime y setlocale para mostrar el texto en español con diferentes métodos."
date: 2013-08-31
updatedDate: 2026-02-07
tags: ["date","strftime","setlocale"]
slug: php/fechas/dia-de-la-semana-en-php
type: doc
topic: php
id: 66c6509d-ac6e-4d8e-a99b-0e6aac633fed
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/fechas/dia-de-la-semana.php
---

Montando una página la cual quiera saludar al usuario con la frase "Buenos días, hoy es Sábado" es un buen ejemplo para mostrar como obtener el día de la semana en [PHP](http://www.manualweb.net/php/). Y sobre todo como obtener el día de la semana en [PHP](http://www.manualweb.net/php/) y que nos muestre el texto en español.


## Utilizando función PHP date


Lo primero que se nos ocurre es tirar de la función date de PHP. Al fin y al cabo trae múltiples formas de obtener información de la fecha. Además tenemos un modificador, que es "l", el cual nos retorna el día de la semana en [PHP](http://www.manualweb.net/php/).


Así que nos ponemos manos a la obra y escribimos lo siguiente:


```php
echo "Buenos días, hoy es ".date("l");
```


Hasta aquí parece que es muy sencillo obtener el día de la semana en [PHP](http://www.manualweb.net/php/) (al final también lo será). El problema es que vemos que el programa nos dirá...


```text
Buenos días, hoy es Saturday
```


Vaya, nos aparece en "spanglish". Pero no desesperemos, ¿podemos localizar la función date jugando con el `setlocale`? Algo así como:


```php
setlocale(LC_ALL,"es_ES");
```


Pero tampoco... y es que la función PHP date no es una función que trabaje con localizaciones y por lo tanto devuelve siempre el contenido en inglés.


## Utilizando función PHP date y un array


Si queremos seguir trabajando con la función PHP date no debemos desesperar ya que podemos implementar una solución alternativa definiéndonos nos array con los valores de la semana.


```php
$dias = array("domingo","lunes","martes","miércoles","jueves","viernes","sábado");
```


Y ahora jugar con el modificador "w" de la función PHP date. Y es que este modificador hace que la función PHP date devuelva el día de la semana en un número. Nosotros ya nos hemos apañado para que este número coincida con la posición del array, ya que el 0 es el domingo y el 6 el sábado.


El código a utilizar será:


```php
echo "Buenos días, hoy es ".$dias[date("w")];
```


## Utilizando la función PHP strftime


Como la función PHP date no nos permite localizar el texto, podemos utilizar la función PHP strftime, la cual si que trabaja con el locale.


Así que lo primero es volver a utilizar la función `setlocale` para todas las funciones "LC_ALL".


```php
setlocale(LC_ALL,"es_ES");
```


Y ahora utilizarmos `strftime` mediante el modificador %A que es el que nos indica el día de la semana. Así pondremos el siguiente código:


```php
echo strftime("Buenos días, hoy es %A <br>");
```


Seguro que alguna de estas dos opciones nos vale para poder poner el día de la semana en [PHP](http://www.manualweb.net/php/).

