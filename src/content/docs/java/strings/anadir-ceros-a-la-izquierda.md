---
title: "Añadir ceros a la izquierda"
description: "Descubre cómo Añadir ceros a la izquierda en Java con Formatter y el patrón %08d para generar números de longitud fija, fiable para sistemas legados."
date: 2009-10-28
updatedDate: 2026-09-10
tags: ["format","string","numero","formatter"]
slug: java/strings/anadir-ceros-a-la-izquierda
type: doc
topic: java
id: 8a1e806b-8421-4acd-b33f-5489aa4bbd37
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/CerosALaIzquierda.java
---

Cuando nos comunicamos con sistemas legados (o “legacy” si quieres utilizar el anglicismo), es habitual encontrar campos numéricos con una longitud fija. En esos casos debemos completar el valor con ceros a la izquierda para que el sistema pueda procesarlo correctamente.


Para resolverlo podemos utilizar la clase [`Formatter`](http://w3api.com/wiki/Java:Formatter), que permite aplicar una cadena de formato mediante el método [`.format()`](http://w3api.com/wiki/Java:Formatter.format).


## Usar la clase Formatter


Primero creamos una instancia de `Formatter`:


```java
Formatter fmt = new Formatter();
```


Después aplicamos el formato al número:


```java
fmt.format("%08d", numero);
```


## Entender el formato para añadir ceros


La parte esencial del ejemplo es el patrón `%08d`. La estructura general de una cadena de formato es:


```text
%[argument_index$][flags][width]conversion
```

1. **`argument_index`**

	Identifica el argumento al que se aplicará el formato cuando hay varios valores. Por ejemplo:


	```java
	int numero = 425;
	fmt.format(
	    "Primer número %1$08d - Segundo número %2$08d",
	    numero,
	    numero2
	);
	```


	Los indicadores `%1$` y `%2$` señalan, respectivamente, el primer y el segundo argumento que se deben formatear.

2. **`flags`**

	Los indicadores modifican la forma en la que se presenta el valor. Algunos de los más habituales son:

	- `-`: justifica el contenido a la izquierda.
	- `+`: incluye el signo del número.
	- `0`: completa con ceros hasta alcanzar la longitud indicada.
3. **`width`**

	Define la longitud total del resultado. En este ejemplo usamos un ancho de ocho dígitos. Como `425` tiene tres dígitos, se añaden cinco ceros a la izquierda.

4. **`conversion`**

	Indica el tipo de conversión que se realizará:

	- `d`: número entero decimal.
	- `o`: número entero octal.

## Código completo


El ejemplo completo queda así:


```java
int numero = 425;

Formatter fmt = new Formatter();
fmt.format("%08d", numero);

System.out.println("El número formateado es " + fmt);
```


El resultado será:


```text
El número formateado es 00000425
```

