---
title: "Literal booleano en Java"
description: "Ejemplo que te enseña de una forma sencilla como manejar un Literal booleano en Java."
lastUpdated: 2025-12-20
slug: java/literal-booleano-en-java
author: victor_cuervo
---

Cuando estés trabajando con valores booleanos es fácil que tengas que manipular un Literal booleano en [Java](https://www.manualweb.net/java/). Es decir, que el contenido de los valores booleanos que manejes sean cadenas "true" o "false" en vez de un valor booleano en sí. Vamos a ver qué hacer en esos casos en los que contemos con un Literal booleano en [Java](https://www.manualweb.net/java/). ### Cargar un Literal booleano en Java


Cuando estamos manejando el literal lo mejor es **cargarlo mediante el tipo de dato objeto Boolean** ya que este nos permite cargar desde cadenas de texto. Así, que si partimos de una cadena.


```java
String sLiteral = "true";
```


Lo que haremos será pasar la cadena [Java](https://www.manualweb.net/java/) Boolean literal como parámetro al objeto Boolean.


```java
Boolean miBoolean = new Boolean(sLiteral);
```


Que ahora queremos tomar decisiones en base al booleano cargado desde el literal, pues obtenemos el valor del objeto Boolean mediante el método .booleanValue();


```java
boolean b = miBoolean.booleanValue()
```


En este momento ya tenemos el booelano como tipo de dato primitivo y de fácil uso dentro de nuestro código fuente. ### Devolver un Literal booleano en Java


Pero qué pasa si ahora que tenemos un valor booleano queremos devolver un literal hacía nuestra presentación, o servicio o dónde quiera que lo mandemos. Es decir, que partimos de esta situación:


```java
boolean b = true;
```


En este caso es sencillo, ya que solo volcar el booleano sobre una cadena, convertirá a este en una cadena. Así que la solución es sencilla.


```java
System.out.println("La variable booleana tiene un valor de : "+b);
```


Y si queremos tenerlo en una cadena (o String) lo que hacemos es realizarlo desde el objeto Boolean con el método .toString();


```java
String sMiBooleano = new Boolean(true).toString();
```


Espero que esta explicación te haya ayudado a entender mejor la forma de manejar un Literal booleano en [Java](https://www.manualweb.net/java/).

