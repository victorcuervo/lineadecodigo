---
title: "Milisegundos a Hora en Java"
description: "El artículo explica cómo convertir milisegundos a hora en Java utilizando cálculos simples."
date: 2007-03-28
updatedDate: 2026-01-11
tags: ["operadores","system"]
slug: java/fechas/milisegundos-a-hora-en-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/Milisegundos2Hora.java
topic: java

---

Cuando estamos haciendo pruebas de rendimiento de nuestros programas, una forma muy sencilla de medir el tiempo de ejecución en Java es invocando a la función `System.currentTimeMillis()` entre dos puntos de nuestro programa.


Esta función te da los milisegundos transcurridos desde el 1 de enero de 1970. Esta fecha es tomada como estándar en el mundo de la computación y es denominada "the epoch".


Posteriormente lo que haremos será restar el tiempo obtenido en los dos puntos y como resultado nos dará el tiempo de ejecución entre estos dos puntos en milisegundos.


Puede ser que como dato técnico esté bien el ver los tiempos en milisegundos, pero en otras necesitaremos ver el dato en un formato de hora, minutos y segundos. Para estos casos no podemos utilizar la función `SimpleDateFormat`, ya que esta te formatea el dato de los milisegundos desde el 1 de enero de 1970. Es por ello que no nos vale.


## Calcular las horas


Para resolverlo vamos a hacerlo de una forma más "manual", pero muy sencilla. La idea es la siguiente. Lo primero es dividir los milisegundos entre 3600000. Este valor representa el número de milisegundos de una hora. Así que partiendo la cantidad de milisegundos que tenemos entre este valor tendremos las horas.


```java
long horas = milisegundos / 3600000;
```


Ahora hay que ver cuántos milisegundos quedan como resto de la división. El resto lo obtenemos mediante el operador `%`.


```java
long resto = milisegundos % 3600000;
```


## Calcular los minutos


Ahora, de los milisegundos restantes hay que ver cuántos son minutos. Es por ello que dividimos entre 60000. Que son los milisegundos equivalentes a un minuto. El código será como el anterior, primero los minutos y luego el resto.


```java
long minutos = resto / 60000;
resto = resto % 60000;
```


## Calcular los segundos


Con el resto de los minutos aplicaremos la misma técnica para calcular los segundos. En este caso el divisor será 1000. Ya que un segundo son 1000 milisegundos.


```java
long segundos = resto / 1000;
```


## Mostrar el resultado


Solo nos quedará el volcar por pantalla nuestro resultado.


```java
System.out.println(horas + ":" + minutos + ":" + segundos);
```

