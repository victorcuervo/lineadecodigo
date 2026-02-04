---
title: "Validar si un dato es numérico con Patrones en Java"
description: "Ejemplo que explica paso a paso cómo validar si un dato es numérico con Patrones en Java."
date: 2009-03-31
updatedDate: 2026-01-09
tags: ["regexp","string","validation","Java Básicos","java-util","matcher","pattern"]
slug: java/expresiones-regulares/validar-si-un-dato-es-numerico-con-patrones-en-java
type: doc
topic: java
id: 631051c6-075c-43fe-bf96-9ed06cd4190e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/IsNumericPattern.java
---

En el artículo [Validar si un dato es numérico en Java](http://lineadecodigo.com/2006/12/29/validar-si-un-dato-es-numerico-en-java/) veíamos como de una forma muy sencilla y mediante la transformación de cadenas en enteros podíamos validar si un dato es numérico en [Java](https://www.manualweb.net/java/). Si bien, ese ejemplo, válido para aprender a programar con [Java](https://www.manualweb.net/java/), se nos quedaría corto para ejemplos reales. Una buena forma, [como han apuntado algunos de nuestros visitantes](http://lineadecodigo.com/2006/12/29/validar-si-un-dato-es-numerico-en-java/#comments), es utilizar patrones sobre las cadenas de texto. Lo primero que vamos a definir es el patrón que detecte que una cadena sea un número. Para ello indicaremos que la cadena tenga dígitos y que estos puedan aparecer N veces. De esta manera nuestro patrón sería el siguiente:


```java
[0-9]*
```


Otra forma de representar un dígito es \d. Por lo tanto nuestro patrón sería


```java
\\d*
```


> Hay que tener cuidado y escapar la barra invertida. Para ello la duplicamos la barra invertida.


Ahora deberemos ejecutar el patrón sobre la cadena. La gestión de patrones y expresiones regulares en Java se realiza mediante la librería java.util.regex y sus clases Matcher y Pattern. Aunque también tenemos el método [.matches()](https://www.w3api.com/Java/String/.matches()), el cual se puede ejecutar sobre una [String](https://www.w3api.com/Java/String/). Esto último será lo que hagamos para ejecutar el patrón:


```java
String cadenaUno = "1234";
		
if (cadenaUno.matches("[0-9]*"))
  System.out.println("Es un número");
else
  System.out.println("No es un número");
```


O con el otro patrón:


```java
String cadenaUno = "1234";
		
if (cadenaUno.matches("\\d*"))
  System.out.println("Es un número");
else
  System.out.println("No es un número");
```


Podéis probar a cambiar el contenido del [String](https://www.w3api.com/Java/String/) para probar los diferentes comportamientos.

