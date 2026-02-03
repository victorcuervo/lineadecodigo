---
title: "Alinear cadena a la izquierda"
description: "Código fuente en Java que nos explica cómo podemos alinear cadena a la izquierda."
date: 2009-11-01
updatedDate: 2026-01-11
tags: ["string","format","cadena","formatter","java-util"]
slug: java/strings/alinear-cadena-a-la-izquierda
author: victor_cuervo
type: doc
id: 33dc7040-b892-4cf4-ab3c-d121109826e1
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/AlinearAIzquierda.java
---

Seguimos con los ejemplos de transformación de cadenas y después de ver cómo [añadir ceros a la izquierda](http://lineadecodigo.com/java/anadir-ceros-a-la-izquierda/), ahora veremos como podemos alinear una cadena a la izquierda. Para ello vamos a volver a utilizar la clase Formatter y el método [format()](https://w3api.com/Java/Formatter-java-util/format/). Aunque podríamos utilizar el método [format](https://www.w3api.com/Java/String/.format()) directamente sobre la clase [String](https://www.w3api.com/Java/String/). Veremos el ejemplo de las dos formas, ya que lo importante es el patrón de formato a aplicar. Con la clase Formatter, lo primero será instanciarla.


```java
Formatter fmt = new Formatter();
```


Lo siguiente ya será aplicar el formato:


```java
Formatter fmt = new Formatter();
fmt = fmt.format("Contenido %-8d unidades", number);
```


El formato para alinear la cadena a la izquierda lo conseguiremos mediante el flag '-'. Si recordamos el formato de la cadena de conversión sería el primer valor tras el del argumento. %[argument_index$][flags][width]conversion Para ver la justificación le damos un tamaño de 8 posiciones y el tipo de conversión será el 'd' para los números enteros. El código sería el siguiente:


```java
int number = 4752;
Formatter fmt = new Formatter();
fmt = fmt.format("Contenido %-8d unidades", number);
System.out.println(fmt.toString());
```


Si queremos hacer esto directamente, sin la clase Formatter, sería utilizar el método [format](https://www.w3api.com/Java/String/.format()) de la siguiente forma:


```java
String formateado = String.format("Contenido %-8d unidades", number);		
System.out.println(formateado);
```

