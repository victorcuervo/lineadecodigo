---
title: Números primos en Java
description: "Código explicado paso a paso para calcular los números primos en Java mediante funciones recursivas y de la forma más óptima."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Para poder calcular los números primos en [Java](https://www.manualweb.net/java/) lo primero que tenemos que saber es ¿qué es un número primo? Un número primo es aquel número que solo es divisible por si mismo y por la unidad. Por convención se asume que el número 1 es también primo. Así, los veinte primeros números primos son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67 y 71.


Veamos cómo podemos implementar un algoritmo en [Java](https://www.manualweb.net/java/) que nos permita saber si dado un número, saber si este es un número primo o no.


Lo primero que haremos será definir una función que reciba un entero como parámetro (que será el número a conocer) y devolverá un booleano indicando si el número es primo o no.


```java
public boolean esPrimo(int numero) { ... }
```


Lo que vamos a hacer es recorrer todos los números entre el 2 y el número sobre el que queremos saber si es primo o no. Dentro del bucle comprobaremos el principio del número primo. "Divisible por si mismo y la unidad". Es decir, que si encontramos un número que es divisible por el número evaluado, este dejará de ser primo.


Por ejemplo, el número 10 no es primo. Ya que 10 es divisible por 2 y 5. Esto, expresado en términos matemáticos vendría a decir, que el resto entre los dos números es 0. Veámoslo:


```text
10/2 = 5, resto 0
10/5 = 2, resto 0
```


La función que nos ayuda a conocer el resto entre dos números es el modulo. Y en [Java](https://www.manualweb.net/java/) se representa con el tanto por ciento. Así:


```text
10%2 = 0
10%5 = 0
10%3 = 1 (Ya que 10/3 = 3 y  el resto es 1)
```


Por lo tanto, dentro del bucle comprobamos el módulo del número a evaluar con el del contador. Si el módulo es distinto de 0 cambiaremos una variable semáforo a `false`. Esta variable indicará que el número evaluado ya no es primo y nos servirá para salir del bucle.


Veamos el código en [Java](https://www.manualweb.net/java/):


```java
int contador = 2;
boolean primo=true;

while ((primo) && (contador!=numero)){
  if (numero % contador == 0)
    primo = false;
  contador++;
}
```


Al ver este código podemos ver que con la variable de control asumimos que el número a evaluar es primo. Esta variable será la que devolvamos como retorno de la función:


```java
return primo;
```


Otra cosa interesante es que para evaluar los números que hay entre el 2 y el número sobre el que queremos saber si es primo podemos hacerlo de dos formas:

1. Ir desde el 2 a el número. De forma ascendente.
2. Ir del número a el 2. De forma descendente.

Cabe señalar que en este caso es mejor el primer punto, ya que encontraremos un divisor antes yendo de los números pequeños a los grandes. Por consiguiente evitaremos ciclos de procesamiento y la respuesta será más rápida.


El código sería el siguiente:


```java
public static boolean esPrimo(int numero){
  int contador = 2;
  boolean primo=true;
  while ((primo) && (contador!=numero)){
    if (numero % contador == 0)
      primo = false;
    contador++;
  }
  return primo;
}
```


Estos algoritmos son de un gran coste computacional, sobre todo si se quiere hacer sobre números muy grandes. Por ejemplo, el algoritmo de seguridad RSA basa el calculo de la clave publica en la multiplicación de dos números primos mayores de 10100. Característica que lo hace ser seguro.


Esta claro que nuestro código no es que sea un código para pruebas computacionales CPU intensivas. Pero alguna mejora podemos tener en nuestro código. Y es que una de las características de los números primos es que nunca tendremos un número primo que sea par. Eso quiere decir que si el número a evaluar es par, directamente lo podemos descartar, por lo cual recuperaremos ciclos computacionales.


Para saber si un número es par podemos utilizar la función del módulo. Y es que si el número dividido entre 2 da un resto de 0, entonces este número es par.


A nuestro anterior código le añadiremos la siguiente línea de código:


```java
if (numero%2==0)
  return false;
```


Espero que os haya servido de utilidad esta explicación para poder calcular los números primos en [Java](https://www.manualweb.net/java/).

