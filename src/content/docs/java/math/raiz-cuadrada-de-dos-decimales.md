---
title: "Raíz Cuadrada de dos decimales"
description: "Calcula la raíz cuadrada de dos decimales en Java utilizando Math y DecimalFormat de manera sencilla."
lastUpdated: 2025-12-20
slug: java/raiz-cuadrada-de-dos-decimales
author: victor_cuervo
---

Una de las preguntas que nos habéis hecho en los comentarios es sobre cómo poder calcular una raíz cuadrada de dos decimales (o tres, o los que necesites) en [Java](https://www.manualweb.net/java/). El código para conseguir calcular la raíz cuadrada de dos decimales es sencillos, solo tenemos que saber utilizar la librería `Math` combinado con las capacidades de formato de números que nos ofrece `NumberFormat`. Lo primero que tenemos que hacer es calcular la raíz cuadrada, para ello vamos a utilizar la clase estática `Math` y en concreto su método `.sqrt()` el cual recibe como parámetro el número del que queremos calcular la raíz cuadrada.


```java
Math.sqrt(6);
```


El valor que devuelve este método es un número doble. En concreto la raíz cuadrada de 6 nos devolverá: 


```shell
√6 = 2.449489742783178
```


Así que vamos a dejar su resultado almacenado en una variable.


```java
double raiz = Math.sqrt(6);
```


Ahora pasaremos a dar formato a este número. Como vamos a trabajar con decimales utilizaremos la clase `DecimalFormat`. De esta manera creamos un formateador que diga que necesitamos un número y dos decimales. Para ello vamos a indicar la máscara "#.00".


```java
DecimalFormat df = new DecimalFormat("#.00");
```


Esta máscara lo que dice es que muestre el número que se le pase con la parte entera y luego dos decimales. Para aplicar el formato al número utilizaremos el método `.format()`. El número se le pasa como parámetro.


```java
df.format(raiz);
```


Y si queremos mostrarlo por pantalla:


```java
System.out.println(df.format(raiz));
```


De esta forma tan sencilla habremos calculado una raíz cuadrada de dos decimales de un número utilizando [Java](https://www.manualweb.net/java/).

