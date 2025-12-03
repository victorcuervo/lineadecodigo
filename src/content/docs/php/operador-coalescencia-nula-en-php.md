---
title: Operador Coalescencia Nula en PHP
description: "Si queremos controlar si una variable ha sido instanciada es obligatorio que conozcas cómo utilizar el operador coalescencia nula en PHP."
lastUpdated: 2023-10-07
author: victor_cuervo
---

Si hablamos del operador coalescencia nula en [PHP](https://www.manualweb.net/php/) posiblemente no te suene mucho y es más que probable que no conocieses dicho nombre. Pero quizás si que has visto en algún [desarrollo de código PHP](https://lineadecodigo.com/categoria/php/) un operador con dos interrogaciones seguidas `??`. Pues este operador es que se se conoce como operador coalescencia nula en [PHP](https://www.manualweb.net/php/).


### Variables no definidas en PHP


Pero, para qué sirve el operador coalescencia nula en [PHP](https://www.manualweb.net/php/). Para hablar de esto nos centramos en el uso de la función `isset()`. Esta es una función muy extendida en [PHP](https://www.manualweb.net/php/) que se utiliza para saber su una variable está inicializada o no, es decir, para chequear que no tenga un valor nulo.


Algún ejemplo de uso de `isset()` podría sería el siguiente con la recepción de parámetros vía POST en una página web


```php
if ($_POST["nombre"])
  $nombre = $_POST["nombre"];
else
  $nombre = "Sin Nombre";
```


O bien de forma acotada con un operador ternario:


```php
$nombre = (isset($_POST["nombre"])) ? $_POST["nombre"] : "Sin Nombre";
```


Estas comprobaciones se hacen ya que si intentamos acceder a una variable que no se ha inicializado, el programa dará un error.


Es en este punto dónde entra el operador coalescencia nula nos va a ayudar para la gestión de las variables no definidas.


### ¿Qué es el operador coalescencia nula o la doble interrogación?


El operador coalescencia nula, representado mediante dos signos de interrogación (`??`), es un operador que fue introducido en PHP 7 y que nos permite comprobar si una variable está definida y tiene un valor asignado.


En caso de que la variable no esté definida o tenga un valor nulo, el operador nos permite asignar un valor por defecto. Este operador viene a simplificar la sintaxis que teníamos que utilizar anteriormente con el operador ternario y la función `isset()`.


La sintaxis del operador coalescencia nula sería la siguiente:


```php
$variable = $variable_no_definida ?? "valor_por_defecto";
```


De esta forma, si la variable `$variable_no_definida` no está definida o tiene un valor nulo, se le asignará el valor "valor_por_defecto" a la variable `$variable`.


### ¿Cómo utilizar el operador coalescencia nula en PHP?


En este sentido, si queremos utilizar el operador coalescencia nula en [PHP](https://www.manualweb.net/php/) para la gestión de datos que se suben en un formulario vía POST tendríamos la siguiente línea de código:


```php
$nombre = $_POST["nombre"] ?? "Sin Nombre";
```


Con esto hemos visto qué es el operador coalescencia nula en [PHP](https://www.manualweb.net/php/) y cómo podemos utilizarlo.

