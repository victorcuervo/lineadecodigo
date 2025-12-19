---
title: "¿Es ese carácter un número?"
description: "Código que nos enseña a manejar la clase Character para saber si es ese carácter un número."
lastUpdated: 2025-12-19
slug: java/es-ese-caracter-un-numero
author: victor_cuervo
---

Ayer publicábamos el artículo "[Validar si un dato es numérico en Java](http://lineadecodigo.com/java/validar-si-un-dato-es-numerico-en-java/)" que explica como controlar si una cadena es o no un número. Pero para ciertos casos podemos anticiparnos hasta el origen de dato. Por ejemplo si estamos obteniéndole por pantalla. En este caso podemos controlar cada uno de los caracteres tecleados. La idea es que por cada carácter tecleado podemos utilizar [el método isDigit(char)](https://www.w3api.com/Java/Character/.isDigit()) el cual nos dirá si el carácter que se pasa por parámetro es un dígito o no, es decir, si va del 0 al 9.


```java
Character.isDigit(char)
```


[El método isDigit(char)](https://www.w3api.com/Java/Character/.isDigit()) es un método estático de [la clase Character](https://www.w3api.com/Java/Character/). Es por ello que solo hará falta que lo invoquemos directamente. Quedándonos la siguiente [línea de código](http://lineadecodigo.com/) con un ejemplo:


```java
Character.isDigit('3');
```


El valor de retorno es un booleano. Es por ello que podemos utilizarlo en condiciones. Por ejemplo en un if:


```java
if (Character.isDigit('3'))
    System.out.println("El caracter es un dígito");
else
    System.out.println("El caracter NO es un dígito");
```


Podéis jugar a modificar el carácter que se pasa por parámetro para ver como varia el comportamiento del programa.

