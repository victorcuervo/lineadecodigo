---
title: "Saber si un número es capicúa con Java"
description: "Cómo utilizar operaciones matemáticas para saber si un número es capicúa con Java."
date: 2007-09-24
updatedDate: 2026-01-08
tags: ["while","modulo","capicua"]
slug: java/numeros/saber-si-un-numero-es-capicua-con-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroCapicua.java
topic: java

---

Un número capicúa es aquél que se lee igual de izquierda a derecha, que de derecha a izquierda. Por ejemplo 22,101, 202, 343, 3443, 12233221,... Una de las formas de saber si un número es capicúa es pasándolo a una cadena y utilizando el código para detectar si la palabra es un palindromo. Para ello puedes leerte el artículo ["Saber si una palabra es un palindromo con Java"](http://lineadecodigo.com/java/saber-si-una-palabra-es-un-palindromo-con-java/). Pero es este caso vamos ha realizarlo mediante operaciones matemáticas. La idea es muy sencilla. Tomaremos el número inicial, le daremos la vuelta y comprobaremos que siguen siendo iguales. En este caso tendremos un número capicúa. Lo primero será definir nuestro número. Para ello podemos utilizar cualquier tipo de dato nativo: int, double, long,... En nuestro ejemplo vamos a utilizar un long.


```java
long numero = 544333234432333445L;
long falta,numeroInvertido,resto;
```


Además del número necesitamos otras variables, numero Invertido que almacenará el número dado la vuelta, resto, donde dejaremos los restos de las divisiones y falta, que es la variable con los números que faltan para dar la vuelta. Inicializamos estas tres variables a 0


```java
while(numero<=0);
  falta=numero;
  numeroInvertido=0;
  resto=0;
```


Los pasos que hay que dar son los siguientes: 1. Para obtener el último dígito del número lo haremos con el resto de una división entre diez. Es decir, si de 4224 queremos obtener el último dígito haremos la siguiente operación:


```java
4224%10 = 4
```


En código [Java](https://www.manualweb.net/java/) será:


```java
resto=falta%10;
```


Falta tiene el número del que vamos substrayendo dígitos. 2. Del número original hay que quitarle el último dígito. En este caso utilizamos la división entre 10.


```java
4224/10=422
```


En código [Java](https://www.manualweb.net/java/) será:


```java
falta=falta/10;
```

1. Habrá que guardar el número substraído. Para ello simplemente lo sumaremos al número que tengamos, multiplicado por 10. En el primer caso lo haremos sobre el 0. Las secuencias para el número 4224 será:

```text
0*10+4=4
4*10+2=42
42*10+2=422
422*10+4=4224
```


En código [Java](https://www.manualweb.net/java/):


```java
numeroInvertido=numeroInvertido*10+resto;
```


Todo esto lo repetiremos mientras tengamos algo por analizar. El bucle entero sería el siguiente:


```java
while(falta!=0)
{
 resto=falta%10;
 numeroInvertido=numeroInvertido*10+resto;
 falta=falta/10;
}
```


Solo nos quedará comprobar si el número original y el invertido son iguales:


```java
if(numeroInvertido==numero)
 System.out.println("\nEl numero es capicua\n");
else
 System.out.println("\nEl numero no es capicua\n");
```

