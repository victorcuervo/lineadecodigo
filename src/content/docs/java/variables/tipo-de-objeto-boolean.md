---
title: "Tipo de Objeto Boolean"
description: "El artículo explica cómo crear y manejar un tipo de objeto Boolean en Java, incluyendo comparaciones y manipulación de valores."
date: 2015-02-06
updatedDate: 2026-01-09
tags: ["variables","boolean","booleanvalue"]
slug: java/variables/tipo-de-objeto-boolean
author: victor_cuervo
type: doc
id: 7bedb31d-0016-47e7-a7a8-eaa42c33d8a4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/variables/TipoDatoBoolean.java
---

En este artículo vamos a ver como podemos realizar las operaciones básicas con un tipo de objeto Boolean en [Java](https://www.manualweb.net/java/). En primer lugar hay que saber que un tipo de objeto Boolean en [Java](https://www.manualweb.net/java/) es un recubrimiento sobre el tipo de dato primitivo boolean. Con lo que a la postre deberíamos de poder realizar las mismas operaciones con el tipo de objeto Boolean y con el tipo de dato primitivo boolean. ### Crear un tipo de objeto Boolean


Para crear un tipo de objeto Boolean en [Java](https://www.manualweb.net/java/) utilizamos el constructor Boolean, al cual podremos pasar un valor ya booleano:


```java
boolean b = true;
Boolean miBooleano = new Boolean(b);
```


O bien una cadena con [un literal booleano](http://lineadecodigo.com/java/literal-booleano-en-java/):


```java
String sBoolenao = "true";
Boolean miBooleano = new Boolean(sBooleano);
```


## Manipular un tipo de objeto Boolean


Si queremos obtener el contenido de un objeto Boolean en [Java](https://www.manualweb.net/java/) tenemos un método que nos ayudará a acceder a su contenido boolean almacenado. Este es el método .booleanValue().


```java
Boolean miBooleano = new Boolean("true");
boolean b = miBooleano.booleanValue();
System.out.println(b);
```


## Realizar comparaciones


Una de las cosas que tienes que tener cuidado cuando manipules tipos de objeto Boolean es que no se pueden comparar como los tipos de datos primitivos. Es decir, que si partimos de los dos siguientes tipos de objetos Boolean:


```java
Boolean b1 = new Boolean(true);
Boolean b2 = new Boolean("true");
```


No podremos hacer la siguiente comparación:


```java
if (b1==b2)
  System.out.println("Valores Iguales");
else
  System.out.println("Valores Diferentes");
```


Ya que nos dará que los dos tipos de datos Boolean son diferentes. Esto sucede ya que estamos comparando objetos y no tipos de datos primitivos. Así que lo que tendremos que hacer será utilizar el método .equals()


```java
if (b1.equals(b2))
  System.out.println("Valores Iguales");
else
  System.out.println("Valores Diferentes");
```

