---
title: Números con dígitos iguales
description: "Utilización de bucles while anidados para poder comprobar si tenemos números con dígitos iguales en cualquiera de sus posiciones."
lastUpdated: 2023-03-19
slug: /java/numeros-con-digitos-iguales/
author: victor_cuervo
---

Hace un tiempo [nos preguntabais en uno de los comentarios de la web](https://lineadecodigo.com/java/digitos-de-un-numero/#comment-120545) sobre cómo podemos saber si tenemos números con dígitos iguales mediante [Java](https://manualweb.net/java/), es decir, que si alguno de los dígitos del primer número se encuentra en el segundo. Así que manos a la obra para resolver este problema.


Lo primero será tener dos números. Partimos del base que son dos números enteros:


```java
int n1 = 12345;
int n2 = 67890;
```


Como vamos a ir comparando dígito a dígito lo mejor es convertir ambos números en cadenas de caracteres. Para ello utilizamos el método [`Integer.toString()`](https://w3api.com/Java/Integer/toString/), el cual recibirá como parámetro el número y nos devolverá una cadena [`String`](https://w3api.com/Java/String/).


```java
String sn1 = Integer.toString(n1);
String sn2 = Integer.toString(n2);
```


De estos números también nos va a interesar el tamaño que tienen, ya que vamos a recorrerlos. Es por ello que mediante el método [`.length()`](https://w3api.com/Java/String/length) nos guardaremos su tamaño.


```java
int n1size = sn1.length();
int n2size = sn2.length();
```


Una vez que tenemos los datos preparador lo que empezaremos será a recorrer el primer número. Esto lo realizamos mediante un [bucle while](https://manualweb.net/java/sentencias-bucle-java/). El bucle irá desde 0 hasta el tamaño del primer número.


```java
while (iContador1<n1size) {

}
```


De forma interna generamos un segundo [bucle while](https://manualweb.net/java/sentencias-bucle-java/) que recorrerá el segundo número.


```java
while (iContador1<n1size) {

    while (iContador2<n2size) {

        iContador2++;                
    }
    iContador2 = 0;
    iContador1++;
}
```


Vemos que en cada iteración del bucle interno incrementamos el contador para irnos moviendo por la cadena y cada vez que salimos al bucle exterior incrementamos el primer iterador, pero además reseteamos a 0 el segundo para que vuelva a recorrer todo el segundo número.


Ahora lo que hacemos es comparar los dígitos del primer número con los dígitos de segundo para ello utilizamos una [estructura de selección if](https://manualweb.net/java/sentencias-decision-java/).


```java
while ((iContador1<n1size)) {

    while ((iContador2<n2size)) {

        if (sn1.charAt(iContador1) == sn2.charAt(iContador2)) {
           ....
        }
           
        iContador2++;                
    }
    iContador2 = 0;
    iContador1++
}
```


Es decir, lo que estamos haciendo es coger dígito a dígito el primer número y con ese dígito recorrer dígito a dígito el segundo número.


Y, cuando encontramos que dos dígitos son iguales, ¿qué hacemos? Pues la idea es que salgamos de los dos bucles. Para ello tenemos dos alternativas, o utilizamos una [sentencia ](https://manualweb.net/java/sentencias-ramificacion-java/)[`break`](https://manualweb.net/java/sentencias-ramificacion-java/) o utilizamos una variable de tipo flag que nos ayude a salir del bucle. Ya depende de cómo sea tu estilo de programación.


El código utilizando esta variable de tipo flag que hemos denominado `bMismoDigito` sería el siguiente:


```java
while ((!bMismoDigito) && (iContador1<n1size)) {

    while ((!bMismoDigito) && (iContador2<n2size)) {

        if (sn1.charAt(iContador1) == sn2.charAt(iContador2))
            bMismoDigito = true;

        iContador2++;                
    }
    iContador2 = 0;
    iContador1++
}
```


Ya solo nos quedará el validar si esta variable es `true` o `false` para poder saber si tenemos números con dígitos iguales mediante [Java](https://manualweb.net/java/).

