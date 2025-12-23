---
title: "Obtener la hora en Java"
description: "Para obtener la hora en Java se utiliza la clase Calendar para acceder a horas, minutos y segundos."
lastUpdated: 2025-12-23
slug: java/obtener-la-hora-en-java
author: victor_cuervo
---

Para obtener la hora del sistema, [Java](https://www.manualweb.net/java/) nos proporciona [la clase Calendar](https://www.w3api.com/Java/Calendar/). Mediante dicha clase podremos obtener de una forma separada cada uno de los valores que componen una hora. Entendiendo como hora los segundos, minutos y hora. Lo primero que tendremos que hacer será instanciar la clase [Java](https://www.manualweb.net/java/) [Calendar](https://www.w3api.com/Java/Calendar/). Para ello podemos hacerlo de dos formas. La primera consiste en obtener una instancia directamente de [Calendar](https://www.w3api.com/Java/Calendar/):


```java
Calendar calendario = Calendar.getInstance();
```


La otra es instanciar la clase GregorianCalendar. Lo cual se haría mediante la siguiente [línea de código](http://lineadecodigo.com/):


```java
Calendar calendario = new GregorianCalendar();
```


[GregorianCalendar]( "Clase Java GregorianCalendar") es el formato de calendario soportado por una gran parte del mundo. El cual es una mezcla del calendario Juliano y Gregoriano. Dicho calendario fue instituido el 15 de octubre de 1582. Vamos, que en ambos casos vamos a trabajar con el mismo calendario. Lo siguiente será declarar las variables que van a almacenar la hora. Como hemos dicho al principio, dicha hora irá dividida en tres partes. Consecuentemente tendremos 3 variables:


```java
int hora, minutos, segundos;
```


Ahora calcularemos su valor. En la clase [Calendar](https://www.w3api.com/Java/Calendar/) existe un [método get(int valor)](https://www.w3api.com/Java/Calendar/.get()). Dicho método recibe un entero, el cual refleja el valor del calendario que queremos obtener: la hora, el día, los minutos,.... Como la idea es que no nos sepamos que entero está asociado a que valor, la clase [Calendar](https://www.w3api.com/Java/Calendar/) nos proporciona una serie de constantes que nos ayudarán a encontrar dichos valores. Así tendremos las siguientes asociaciones: - Calendar.HOUR_OF_DAY, es la hora del día en formato 24 horas

- Calendar.HOUR, el la hora en formato 12 horas
- Calendar.MINUTE, representa a los minutos
- Calendar.SECOND, serán los segundos

Una vez que conocemos esto, solo nos queda aplicar dichos valores al [método get](https://www.w3api.com/Java/Calendar/.get()) y asociarlos a las variables. Veamos el código:


```java
hora =calendario.get(Calendar.HOUR_OF_DAY);
minutos = calendario.get(Calendar.MINUTE);
segundos = calendario.get(Calendar.SECOND);
```


Solo nos quedará volcar los datos por pantalla. Esto, es una [línea de código](http://lineadecodigo.com/):


```java
System.out.println(hora + ":" + minutos + ":" + segundos);
```

