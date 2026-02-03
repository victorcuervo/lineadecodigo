---
title: "Saber si una palabra es un palíndromo con Java"
description: "Ejemplo que nos explica a manejar String para poder saber si una palabra es un palíndromo con Java."
date: 2007-09-19
updatedDate: 2026-01-08
tags: ["string","length","charat","while"]
slug: java/strings/saber-si-una-palabra-es-un-palindromo-con-java
author: victor_cuervo
type: doc
topic: java
id: 80af3d55-7ecb-49df-96f2-074d76ef4b86
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/string/Palindromo.java
---

Uno de los primeros programas que recuerdo resolver en la Universidad, cuando estudiaba informática, es el saber si una palabra es un palíndromo.


> **Palíndromo,** 1. m. Palabra o frase que se lee igual de izquierda a derecha, que de derecha a izquierda; p. ej., anilina; dábale arroz a la zorra el abad.


Mediante el lenguaje [Java](https://www.manualweb.net/java/) unas pocas líneas de código nos ayudarán a resolver el problema. La idea general es ir recorriendo la palabra desde izquierda a derecha, incrementando carácter a carácter y a la misma vez ir recorriendo la palabra de derecha a izquierda, decrementando los caracteres. En cada incremento/decremento compararemos los valores de los caracteres. Si son iguales, la palabra podrá ser un palíndromo, en cuanto tengamos dos valores distintos, la palabra ya no será un palíndromo. Pero veámoslo con código. Lo primero será definir la palabra y las posiciones inicio y fin.


```java
int inc = 0;
int des = sPalabra.length()-1;
boolean bError = false;
```


Además hemos declarado una variable que actuará en forma de guarda, por lo que inicialmente consideramos que no hemos encontrado incongruencias en la palabra. Hay que fijarse que la posición inicial será 0 y la final, el ultimo carácter. Este valor lo conseguimos restándole 1 al tamaño de la cadena. Ahora el bucle. Tenemos que iterar por la cadena mientras los contadores no se crucen y mientras no hayamos encontrado ningún error. De esta manera, el código del bucle quedará de la siguiente forma:


```java
while ((inc<des) && (!bError)){...}
```


Y dentro del bucle la validación de caracteres. Todo el código sería:


```java
while ((inc<des) && (!bError)){
			
	if (sPalabra.charAt(inc)==sPalabra.charAt(des)){				
		inc++;
		des--;
	} else {
		bError = true;
	}
}
```


Vemos, que si algún par de caracteres no coinciden, entonces se cambia el valor de la variable de guarda, lo que hará que nos salgamos del bucle inmediatamente. Una vez que hayamos salido del bucle, la variable de guarda nos dirá si la palabra es un palíndromo. Esto es si sigue con el valor inicial, es decir false.


```java
if (!bError)
	System.out.println(sPalabra + " es un PALINDROMO");
else
	System.out.println(sPalabra + " NO es un palindromo");
```

