---
title: Validar si un dato es numérico en Java
description: "Uso de Apache Commons para poder validar si un dato es numérico en Java y ver cómo podemos implementarla directamente nosotros."
lastupdates: 2023-05-29
author: victor_cuervo
---

Navegando por los diferentes foros de la red me encuentro con la siguiente pregunta. ¿Cómo puedo validar si un dato es numérico en [Java](https://www.manualweb.net/java/)? A uno le puede parecer una pregunta muy básica y típica de alguien que ni siquiera se ha leído la documentación, pero la cuestión es que es una duda que existe.


De hecho, la gente busca el método `isNumeric(String)`. Que, a día de hoy, no existe dentro de las APIs de [Java](https://www.manualweb.net/java/), si bien, si que existe en algunas otras librerías de renombre, como puede ser en [Apache Commons](http://jakarta.apache.org/commons/), en concreto `org.apache.commons.lang.StringUtils.isNumeric()`.


Y es que en muchos casos nos vamos a encontrar con orígenes de datos, donde de una forma explicita no vengan definidos como números. Esta claro que una base de datos que alberga enteros lleva la validación implícita, que un WebService (o un simple método [Java](https://www.manualweb.net/java/)) identificará los campos como numéricos,... Pero que sucede si estamos leyendo un fichero. Este de forma implícita no lleva ninguna validación. Es en este tipo de casos donde será bueno el realizar este tipo de validaciones. (Cierto es que podríamos realizar una lectura directa sobre enteros).


Para poder resolver esta duda la idea es la siguiente. Partimos de las dos siguientes variables:


```java
String cadenaUno = "1234";
String cadenaDos = "No soy un numero";
```


Ahora tenemos que codificar el método `isNumeric(String)`, el cual podemos utilizar a posteriori para validar las cadenas. Esto lo haremos de la siguiente forma:


```java
if (Comunes.isNumeric(cadenaUno))
	System.out.println(cadenaUno + " es un numero");
else
	System.out.println(cadenaUno + " NO es un numero");

if (Comunes.isNumeric(cadenaDos))
	System.out.println(cadenaDos + " es un numero");
else
	System.out.println(cadenaDos + " NO es un numero");
```


El método `isNumeric(string)` se apoyará en la clase [`Integer`](https://www.w3api.com/Java/Integer/). La idea consiste en transformar la cadena en un número. En el caso de que resulte bien, es que la cadena es un número (obvio), si falla, es que nuestra cadena no será un número.


> `isNumeric()` será un método estático de la clase Comunes. Es por ello que su utilización es la de `Comunes.isNumeric(String)`.


El método de [`Integer`](https://www.w3api.com/Java/Integer/) que nos permite transformarlo en numérico es [`.parseInt(String)`](https://www.w3api.com/Java/Integer/parseInt/). Si va bien devuelve el entero, sino genera la excepción [`NumberFormatException`](https://www.w3api.com/Java/NumberFormatException/). De esta forma nuestro método quedará de la siguiente forma:


```java
private static boolean isNumeric(String cadena){
	try {
		Integer.parseInt(cadena);
		return true;
	} catch (NumberFormatException nfe){
		return false;
	}
}
```


Este método es válido para ciertos propósitos, pero no tenemos que olvidar que existen números más grandes que deberían de ser tratados con clases como Long o Double. Es decir, que nuestro método `isNumeric(String)` podría ser un poco más complejo.


Desde aquí animo a que alguien genere la posible implementación, y lo publicaremos en [Línea de Código](https://lineadecodigo.com/).

