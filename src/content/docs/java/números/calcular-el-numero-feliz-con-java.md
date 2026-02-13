---
title: "Calcular el número feliz con Java"
description: "Se explica cómo calcular el número feliz con Java mediante la suma de los cuadrados de sus dígitos."
date: 2012-05-05
updatedDate: 2026-02-13
tags: ["numero-feliz","hashset","set","math","pow","java-collection"]
slug: java/numeros/calcular-el-numero-feliz-con-java
type: doc
topic: java
id: 572d8b8c-61d5-40d3-b72e-3707547f0b0f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/NumeroFeliz.java
---

## Introducción


Ayer hablábamos en el grupo de Facebook sobre Java en Español sobre el **cálculo del número feliz con Java**. Pero, ¿qué es un número feliz?


Si seguimos [la descripción de Wikipedia sobre el número feliz](http://es.wikipedia.org/wiki/N%C3%BAmero_feliz), un número feliz es aquel que, de forma iterativa, al sumar los cuadrados de sus dígitos, acaba resultando en `1`.


## Ejemplo: el número 7


Para el caso del número 7, que es un número feliz, la secuencia sería la siguiente:


$$
7^2 = 49\\
4^2 + 9^2 = 97\\
9^2 + 7^2 = 130\\
1^2 + 3^2 + 0^2 = 10\\
1^2 + 0^2 = 1
$$


## Extraer los dígitos


Lo primero que necesitamos es extraer los dígitos del número. Esto ya lo explicábamos en [Dígitos de un número con Java](http://lineadecodigo.com/java/digitos-de-un-numero/).


Aquí, lo que hacemos es utilizar divisiones y el módulo 10 (división y resto) para ir extrayendo los dígitos:


```java
public static int[] digitosNumero(int iNumero) {
	// Creamos un array del tamaño del número de dígitos del número
	String x = Integer.toString(iNumero);
	int[] iNumeros = new int[x.length()];

	// Método que devuelve los dígitos de un número
	int iDigito = 0;
	while (iNumero > 0) {
		iNumeros[iDigito] = iNumero % 10;
		iNumero = iNumero / 10;
		iDigito++;
	}

	return iNumeros;
}
```


Al final hemos construido un método que, dado un entero, nos devuelve un array con los dígitos de dicho número.


## Sumar cuadrados de los dígitos


Lo siguiente será, por cada dígito del número, hacer la suma de los cuadrados.


Para calcular el cuadrado utilizamos el método [`.pow()`](https://www.w3api.com/Java/Math/pow/) de la clase [`Math`](https://www.w3api.com/Java/Math/).


> Recuerda que la clase [`Math`](https://www.w3api.com/Java/Math/) es estática y no hace falta instanciarla.


```java
int[] iNumeros = digitosNumero(iNumero);
int iSuma = 0;

for (int x = 0; x < iNumeros.length; x++) {
	iSuma += Math.pow(iNumeros[x], 2);
}
```


## Repetir el proceso hasta llegar a 1


Ahora hay que validar si la suma es `1`, o si no, volver a repetir el proceso.


En el caso de que no sea `1`, volvemos a llamar a `digitosNumero` para que nos vuelva a “trocear” el nuevo número.


```java
while ((iSuma != 1) && !(bRepetido)) {
	iSuma = 0;

	for (int x = 0; x < iNumeros.length; x++) {
		iSuma += Math.pow(iNumeros[x], 2);
	}

	iNumeros = digitosNumero(iSuma);
}
```


## Evitar bucles infinitos


Con esto ya tendríamos el cálculo principal, pero hay algo que se puede mejorar.


Si el número no es feliz, se mete en una secuencia infinita de cálculos, ya que nunca encontrará el `1`. Podemos cortar el bucle si se repite un número en la secuencia.


Veamos el caso del número 2:


$$
2^2 = 4\\
4^2 = 16\\
1^2 + 6^2 = 37\\
3^2 + 7^2 = 58\\
5^2 + 8^2 = 89\\
8^2 + 9^2 = 145\\
1^2 + 4^2 + 5^2 = 42\\
4^2 + 2^2 = 20\\
2^2 + 0^2 = 4
$$


Al llegar al número 4, que ya estaba en la serie, todo se vuelve a repetir de forma infinita.


## Controlar repetición con Set


Para implementarlo, añadimos un conjunto, es decir, un [`Set`](https://www.w3api.com/Java/Set/), en el que vamos metiendo los números ya calculados.


Instanciamos el [`Set`](https://www.w3api.com/Java/Set/) con un [`HashSet`](https://www.w3api.com/Java/HashSet/):


```java
Set<Integer> iCalculados = new HashSet<>();
```


Y dentro del bucle hacemos la comprobación o inserción en el conjunto. Para ello utilizamos [`.contains()`](https://www.w3api.com/Java/HashSet/contains/) y [`.add()`](https://www.w3api.com/Java/HashSet/add/).


```java
if (iCalculados.contains(iSuma)) {
	bRepetido = true;
} else {
	iCalculados.add(iSuma);
}
```


Finalmente, el bucle completo quedaría así:


```java
while ((iSuma != 1) && !(bRepetido)) {
	iSuma = 0;

	for (int x = 0; x < iNumeros.length; x++) {
		iSuma += Math.pow(iNumeros[x], 2);
	}

	iNumeros = digitosNumero(iSuma);

	System.out.println(iSuma);

	if (iCalculados.contains(iSuma)) {
		bRepetido = true;
	} else {
		iCalculados.add(iSuma);
	}
}
```


Ya solo nos quedará imprimir si el número es feliz o no. Esto nos lo indica la variable `bRepetido`.


```java
if (bRepetido)
	System.out.println(iNumero + " NO es un número feliz");
else
	System.out.println(iNumero + " SÍ es un número feliz");
```

