---
title: "Calcular la hipotenusa con Java"
description: "Uso de la clase Math para poder calcular la hipotenusa con Java."
date: 2007-02-25
updatedDate: 2026-02-04
tags: ["math","hipotenusa","sqrt","hypot","pow"]
slug: java/math/calcular-la-hipotenusa-con-java
type: doc
topic: java
id: d45d9450-8fa6-4c29-b56d-114d2d2790a1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/Hipotenusa.java
---

La hipotenusa es el lado del triangulo opuesto al ángulo recto. Dados los valores de los catetos podemos aplicar el Teorema de Pitágoras para realizar el cálculo del valor de la hipotenusa. El Teorema de Pitágoras dice que "la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa". Es por ello que esta formula matemática la podemos expresar de una forma sencilla en [Java](https://www.manualweb.net/java/). Lo primero que tenemos que hacer es definir la variables que almacenaran los valores de la hipotenusa (vacía inicialmente) y de sus respectivos catetos.


```java
double hypo = 0;
double cateto1 = 2;
double cateto2 = 3;
```


Si despejamos el valor de la hipotenusa de la formula del Teorema de Pitágoras veremos que la hipotenusa es igual a la raíz cuadrada de la suma del cuadrado de los catetos. Es por ello que nos podemos apoyar en los método [.pow(double, double)](https://www.w3api.com/Java/Math/.pow()) y [.sqrt(double)](https://www.w3api.com/Java/Math/.sqrt()) para representar esta formula. Por un lado [.pow(double, double)](https://www.w3api.com/Java/Math/.pow()).sqrt(double) calcula la raiz cuadrara del valor pasado como parámetro. El código sería la siguiente [línea de código](http://lineadecodigo.com/):


```java
hypo = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
```


[Java](https://www.manualweb.net/java/) nos proporciona un método mediante el cual nos calculará el valor de una hipotenusa dado el valor de sus catetos, sin la necesidad de conocer el Teorema de Pitágoras. El método es [.hypot(double,double)](https://www.w3api.com/Java/Math/.hypot())La [línea de código](http://lineadecodigo.com/) a utilizar en este caso es la siguiente:


```java
Math.hypot(cateto1, cateto2);
```

