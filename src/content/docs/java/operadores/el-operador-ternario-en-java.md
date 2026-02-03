---
title: "El operador ternario en Java"
description: "Artículo que nos explica qué es el operador ternario en Java y como este nos ayuda a escribir sentencias de selección mucho más simplificadas."
date: 2010-05-18
updatedDate: 2026-01-08
tags: ["operadores","operador-ternario"]
slug: java/operadores/el-operador-ternario-en-java
author: victor_cuervo
type: doc
id: d32e2969-e66d-435a-80c9-9a48a8b6a620
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/OperadorTernario.java
---

El operador ternario en [Java](https://www.manualweb.net/java/) nos va a simplificar mucho a la hora de codificar sentencias de selección dentro del código. Por ejemplo, [calcular el mayor de dos números con Java](https://lineadecodigo.com/java/mayor-de-dos-numeros/) es una cosa realmente sencilla con [Java](https://www.manualweb.net/java/). Si preguntas a cualquier programador te dirá que puedes [utilizar un simple if-then-else](https://manualweb.net/java/sentencias-decision-java/#if-then-else). Quedando un programa de pocas líneas.


```java
if (x>y)
   mayor = x;
else
   mayor = y;
```


Pero lo que, sorprendentemente, muchos programadores [Java](https://www.manualweb.net/java/) no saben, es que existe un [operador condicional ternario ?:](https://www.manualweb.net/java/operadores-condicionales-java/#operador-ternario) que nos ayuda a realizar estas operaciones con mucho menor código.


La estructura del operador ternario en [Java](https://www.manualweb.net/java/), o de la forma abreviada el operador ?:, es la siguiente:


```java
resultado = (condicion)?valor1:valor2;
```


Vemos que hay 3 partes dentro de la estructura, la primera parte será la condición que irá entre paréntesis. Las condiciones pueden ser cualquier tipo de sentencias que realicen una evaluación que devuelva un valor booleano, ya sea `true` o `false`. Luego seguirá un símbolo de cierre de interrogación (?) el cual nos servirá para asignar el valor true y después irá el símbolo de dos puntos (:) al que le acompañará el valor false de la condición.


Es decir, en la sentencia que hemos descrito en el código la variable resultado recibirá el valor1 en el caso de que la condición sea true o bien el valor2 en el caso de que la condición sea false.


Así, si queremos calcular el mayor de dos números tendremos el siguiente código mucho más simplificado que el anterior:


```java
mayor=(x>y)?x:y;
```


Sin duda alguna, mucho menos código. :-) ¿Conocías el operador ternario en [Java](https://www.manualweb.net/java/)? ¿En qué casos lo utilizar? Comparte con toda la comunidad tus experiencias al respecto.

