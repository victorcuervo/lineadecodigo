---
title: "Número en sumas de unidades recursivo"
description: "Descomponer un número en sumas de unidades recursivo. Aprovechar la recursividad para calcular cuantas sumas de números naturales dan dicho número."
date: 2016-02-19
updatedDate: 2026-01-09
tags: ["recursividad","sumas"]
slug: java/matematicos/numero-en-sumas-de-unidades-recursivo
author: victor_cuervo
type: doc
id: f220314f-d769-4549-99ec-e6ea64fc1287
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumeroSumasRecursivas.java
---

En el ejemplo de hoy vamos a ver como sacar un número en sumas de unidades recursivo. Es decir, ver cuantas sumas de unidades dan como resultado un mismo número. Esto es un ejemplo que nos habéis pedido en nuestros foros, así que si tienes más preguntas no dudes en ponerlas en el foro. Un ejemplo de número en sumas de unidades recursivo sería si nos diesen el número 7 tendríamos que el 7 tiene tiene 3 sumas de números enteros.


```text
7
7 = 6 + 1
7 = 5 + 2
7 = 4 + 3
```


A primera vista esto es un bucle que nos podría dar el resultado, de tal manera que vayamos restando unidades al número hasta que la resta sea mayor que la unidad restada.


```java
int numero = 12;
int unidad = 0;
int resta = numero;
		
while (resta>unidad) {
  resta = numero-unidad;
  System.out.println (numero + " = " + resta + " + " + unidad);
  unidad++;					
}
```


Pero en este caso vamos a ver el número en sumas de unidades recursivo. Es decir, nos vamos a apoyar en la recursividad para poder completar el ejemplo. Así que definimos un método sumar al que le pasamos el número a descomponer y la unidad por la que vamos descomponiendo.


```java
public static void suma(int numero, int operador) { ... }
```


La recursividad dirá que si la resta del número y el operador sigue siendo mayor al operador llamamos de forma recursiva incrementando el operador.


```java
public static void suma(int numero, int operador) {
  int resta = numero-operador;
			
  if (resta>=operador) {
    System.out.println(numero + " = " + resta + " + " + operador);
    suma(numero,++operador);
  }	

}
```


Justo antes de anidar la recursividad será cuando mostremos por pantalla el resultado de la descomposición. Ahora ya solo nos quedará llamar al método con el número del que queramos sacar sus sumas en recursivo.


```java
suma(12,0);
```

