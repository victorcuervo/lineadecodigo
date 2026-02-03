---
title: "Primer dígito de un número con Java"
description: "El primer dígito de un número con Java se obtiene dividiendo el número por 10 elevado a su longitud menos uno."
date: 2009-01-12
updatedDate: 2026-01-11
tags: ["double","integer","math","string","scanner"]
slug: java/numeros/primer-digito-de-un-numero-con-java
author: victor_cuervo
type: doc
topic: java
id: d21ca6ac-4439-4337-8fc8-96cf016db9f4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ObtenerPrimerDigitoDeUnNumero.java
---

Si ayer veíamos como [obtener el último dígito de un número con Java](http://lineadecodigo.com/2009/01/11/ultimo-digito-de-un-numero-con-java/). Eso sí, en este caso no será tan sencillo como utilizar el módulo de 10. Si bien, tampoco es un ejemplo muy complejo.


## Recuperar el número por teclado


Lo primero será recuperar el número por teclado. En este caso no vamos a recuperarlo como cadena de texto mediante el método [.nextInt](https://www.w3api.com/Java/Scanner/next/.next()) y recuperarlo como un entero.


```java
Scanner reader = new Scanner([System.in](http://system.in/));
System.out.println("Introduce un número: ");
int numero = reader.nextInt();
```


## Calcular la longitud del número


Esto lo hacemos ya que necesitamos saber la longitud del número y lo más sencillo para esto es realizarlo con el método [.length](https://www.w3api.com/Java/String/.length()) de la cadena.


```java
String sNumero = Integer.toString(numero);
int longitud = sNumero.length();
```


## Obtener el primer dígito


El tamaño de la cadena lo necesitamos saber ya que para recuperar el primer dígito de un número con Java tendremos que dividir el número por 10, elevado al número de dígitos menos 1 del número sobre el que queremos recuperar el primer dígito.


Por ejemplo para recuperar el primer dígito del número 12345, tendremos que dividir 12345 entre 10 elevado a 4, que son los dígitos que tiene el número. Es decir, la operación sería 12345/10000.


El código [Java](https://www.manualweb.net/java/) nos quedaría de la siguiente forma:


```java
int primerDigito = Integer.parseInt(sNumero) / Double.valueOf(Math.pow(10, longitud - 1)).intValue();
```


En el código hay que identificar varias cosas. La primera es que como recuperamos el número como cadena de texto, este hay que transformarlo a un número entero. Para ello nos apoyamos en el método [.parseInt](https://www.w3api.com/Java/Integer/.parseInt()) de la clase [Integer](https://www.w3api.com/Java/Integer/).


Para obtener la potencia de 10 buscada utilizamos el método [pow](https://www.w3api.com/Java/Math/.pow()) de la clase [Math](https://www.w3api.com/Java/Math/). Además, en este caso como el método [Math.pow](https://www.w3api.com/Java/Math/.pow()) nos devuelve un número Double, tenemos que transformarlo en un número entero. Es por ello que utilizaremos los métodos valueOf e intValue de la clase Double.


## Mostrar el resultado


Solo nos quedará hacer la división y mostrarlo por pantalla.


```java
System.out.println("El primer dígito del número " + numero + " es " + primerDigito);
```

