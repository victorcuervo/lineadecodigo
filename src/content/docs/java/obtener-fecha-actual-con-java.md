---
title: Obtener fecha actual con Java
description: "Cómo obtener fecha actual con Java utilizando la clase Calendar y sus propiedades como Calendar.DATE, Calendar.MONTH, Calendar.YEAR,…"
lastUpdated: 2023-09-17
slug: /java/obtener-fecha-actual-con-java/
author: victor_cuervo
---

Viendo una gráfica de términos informáticos buscados por Internet resultaba curioso que una de las frases más buscada era la de obtener la fecha actual del sistema en múltiples lenguajes: [Java](http://www.manualweb.net/java/), C, C++, Perl, [Python](https://www.manualweb.net/python/), Visual Basic,... etc.


Es por ello, por lo que me he propuesto escribir este ejemplo de cómo obtener la fecha del sistema en [Java](https://www.manualweb.net/java/). Y eso que en los primeros tiempos del lenguaje java era bastante simple. Ya que nos bastaba con instanciar un objeto [`Date`](https://www.w3api.com/Java/Date-java-util/) y con sus métodos [`getDay()`](http://www.w3api.com/Java/Date-java-util/getDay), [`getMonth()`](http://www.w3api.com/Java/Date-java-util/getMonth),.. teníamos rápidamente la fecha montada


```java
// Deprecated
java.util.Date fecha = new Date();
System.out.println (fecha.getDay());
System.out.println (fecha.getMonth());
```


Pero se dieron cuentas que lo de las fechas tenía mucha más intríngulis que simples "setters" y "getters" y todo esto ha sido declarado obsoleto.


Pero tampoco nos pongamos tan tristes. Que todavía podemos instanciar un objeto [`Date`](https://www.w3api.com/Java/Date-java-util/), y por supuesto, mostrarlo por pantalla.


```text
java.util.Date fecha = new Date();
System.out.println (fecha);
```


Dándonos cómo resultado algo así:


```text
Sat Sep 24 21:07:36 CEST 2005
```


La cosa se nos complicará un poco si queremos obtener por separado el día, el mes y el año. Que, por otra parte, es lo que buscamos con este ejemplo.


Para ello tenemos la clase [Java](http://www.manualweb.net/java/) [`Calendar`](http://w3api.com/Java/Calendar/). Lo primero que tenemos que saber de la clase [`Calendar`](https://w3api.com/Java/Calendar/) es la forma de instanciarlo. Y es que no podemos instanciar directamente una [clase Calendar](http://w3api.com/Java/Calendar/). Es decir, no podemos hacer un new Calendar(). Lo que podemos hacer son dos cosas: o bien utilizamos el método estático [`.getInstance()`](https://w3api.com/Java/Calendar/getInstance) de la clase [`Calendar`](https://w3api.com/Java/Calendar/), o bien, construimos una clase [`GregorianCalendar`](http://w3api.com/Java/GregorianCalendar/).


En ambos casos lo que obtenemos es una clase [`Calendar`](http://w3api.com/Java/Calendar/) la cual contiene información de la fecha local del sistema. Y es que la clase [`Calendar`](http://w3api.com/Java/Calendar/) nos permite otras cosas, como por ejemplo, obtener la fecha de otra ubicación geográfica que no sea la del sistema.


```java
Calendar c1 = Calendar.getInstance();
Calendar c2 = new GregorianCalendar();
```


Una vez que tenemos instanciada nuestra clase [`Calendar`](http://w3api.com/Java/Calendar/) ya podremos hacer uso de los "getters" y "setters" de antaño. Pero con una modificación y es que existe un único método get que recibe por parámetro el tipo de información a recuperar en formato número entero. Si bien, no tenemos que sabernos la correspondencia de valores de los números enteros, ya que la clase [`Calendar`](http://w3api.com/Java/Calendar/) nos ofrece un conjunto de clases estáticas para facilitarnos la ayuda.


Relativo a estas constantes tenemos:

- [`Calendar.DATE`](https://w3api.com/Java/Calendar/DATE), que representa el día del mes.
- [`Calendar.MONTH`](https://w3api.com/Java/Calendar/MONTH), que representa el mes del año.
- [`Calendar.YEAR`](https://w3api.com/Java/Calendar/YEAR), que representa el año.

Tenemos muchas otras más [`DAY_OF_WEEK_IN_MONTH`](https://w3api.com/Java/Calendar/DAY_OF_WEEK_IN_MONTH), [`DAY_OF_WEEK`](https://w3api.com/Java/Calendar/DAY_OF_WEEK), [`WEEK_OF_YEAR`](https://w3api.com/Java/Calendar/WEEK_OF_YEAR),...


Al final, nuestro código [Java](https://www.manualweb.net/java/) quedará algo así:


```java
dia = Integer.toString(c.get(Calendar.DATE));
mes = Integer.toString(c.get(Calendar.MONTH));
annio = Integer.toString(c.get(Calendar.YEAR));
```


De esta forma ya tendremos el código que nos ayuda a obtener fecha actual con [Java](https://www.manualweb.net/java/) en unas simples líneas de código.

