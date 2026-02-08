---
title: "Links temporales con PHP"
description: "Aprende a crear links temporales en PHP usando date() para validar día y hora, mostrando enlaces solo en franjas horarias específicas definidas."
date: 2017-10-03
updatedDate: 2026-02-08
tags: ["date","date_default_timezone_set"]
slug: php/url/links-temporales-con-php
type: doc
topic: php
id: 85d8446b-cf5b-45b9-a6f6-981c6145ec19
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_php/blob/master/fechas/link-en-fecha.php
---

Una de las cosas que [nos habéis preguntado en los comentarios](109188) es si se pueden crear links temporales con [PHP](http://www.manualweb.net/php/). Es decir, que el link solo aparezca en la página en una franja horaria concreta.


Vamos a ver lo sencillo que es montar links temporales mediante el uso de la función `date()`. Y es que sabiendo manejar la función `date()` de [PHP](http://www.manualweb.net/php/) podremos obtener la información relativa al día y hora que es de una forma muy sencilla.


## Configurar la zona horaria


Lo primero que tenemos que saber es que a la hora de manejar temas de fechas en [PHP](http://www.manualweb.net/php/) y la función `date()` en concreto, deberemos de fijar al código la zona horaria en la que se ejecuta el programa.


Para indicar la zona horaria de ejecución utilizaremos la función `date_default_timezone_set()`, a la cual podemos indicar una zona como 'Europe/Madrid' o un valor general como 'UTC'. En nuestro caso codificaremos lo siguiente:


```php
date_default_timezone_set('Europe/Madrid');
```


## Crear la función mostrar()


Lo siguiente que haremos será codificar una función que llamaremos `mostrar()` que devolverá un valor booleano: true si la fecha coincide con un día de la semana y hora en concreta y false en el resto de los casos.


```php
function mostrar() {
  // Código de validación
}
```


## Modificadores de la función date()


La función `date()` recibe una cadena de texto en la cual especificamos el formato sobre la información de la fecha actual que queremos que nos devuelva. Algunos de los modificadores más importantes son:


**Para días:**

- **d**, día del mes en dos dígitos.
- **D**, representación semanal del día con tres letras. De lunes a domingo.
- **j**, día del mes sin ceros a la izquierda.
- **l**, representación textual del día.
- **w**, representación numérica de la semana. Empezando con el 0 para el domingo.
- **z**, día del año empezando por 0 y acabando en 365.

**Para horas:**

- **a**, am/pm en minúsculas.
- **A**, am/pm en mayúsculas.
- **g**, formato de 12 horas sin ceros iniciales.
- **G**, formato de 24 horas sin ceros iniciales.
- **h**, formato de 12 horas con ceros iniciales.
- **H**, formato de 24 horas con ceros iniciales.
- **i**, minutos con ceros iniciales.
- **s**, segundos con ceros iniciales.

> Hay que tener cuidado ya que el valor de `'w'` empieza siendo 0 para el domingo, 1 para el lunes y acabando con el 6 para el sábado.


## Implementar la validación


En nuestro caso vamos a utilizar el modificador `'w'` que nos da el día de la semana y `'H'` que nos dice la hora en formato 24.


Así codificaremos la función de la siguiente forma para mostrar el enlace solo los domingos de 13h a 14h:


```php
function mostrar() {
  if ((date("w") == 0) && (date("H") == 13))
    return true;
  else
    return false;
}
```


Las condiciones que quieras usar las puedes añadir o modificar en la sentencia `if`.


## Mostrar el enlace temporal


Ya solo nos quedará invocar a la función cuando vayamos a pintar el enlace de la siguiente forma:


```php
if (mostrar())
  echo '<a href="http://lineadecodigo.com">Enlace En Fecha</a>';
```


Mediante este mecanismo podremos tener links temporales con [PHP](http://www.manualweb.net/php/).

