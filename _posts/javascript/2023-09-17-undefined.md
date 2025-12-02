---
layout: post
title: Factorial Javascript
excerpt: "Código que nos enseña a calcular un factorial Javascript de dos formas diferentes: mediante un bucle for y de forma recursiva con funciones."
categories: Javascript
tags: []
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Hoy, nuestro objetivo es calcular el factorial [Javascript](https://www.manualweb.net/javascript/) de un número. El concepto de factorial, en matemáticas, es una operación que implica multiplicar un número dado por todos los números enteros menores que él hasta llegar a uno. Por convención, se ha establecido que el factorial de cero es uno.


Este resultado se suele representar de forma abreviada utilizando el símbolo de cierre de exclamación (!), que se coloca detrás del número del que estamos calculando su factorial.


Con esta explicación en mente, procedamos a calcular el factorial del número 5, lo cual nos permite poner en práctica y entender mejor el concepto que acabamos de explicar:


```text
5! = 5 * 4 * 3 * 2 * 1
```


### Factorial Javascript sin pensar demasiado...


Rápidamente de la definición podríamos codificar la función factorial [Javascript](https://www.manualweb.net/javascript/) de la siguiente forma, con [un bucle](https://manualweb.net/javascript/estructuras-repetitivas-javascript/) decreciente del argumento hasta llegar al 1 o ascendente desde el 1 hasta el número deseado que recibimos como argumento del que queremos calcular el factorial [Javascript](https://www.manualweb.net/javascript/). El cero no haría falta considerarlo pues el su factorial es 1.


```javascript
function factorial (n) {
	var total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}
```


### Observemos la definición


Si leemos bien la definición de factorial como número resultado de multiplicarse con todos los anteriores. En el ejemplo y siendo la multiplicación una operación asociativa (también lo es conmutativa, pero no importa para lo que queremos señalar):


```text
5! = 5 * 4 * 3 * 2 * 1
5! = 5 * (4 * 3 * 2 * 1)
```


el resultado entre paréntesis es precisamente el cálculo correspondiente al 4!.


```text
5! = 5 * 4!
```


Observemos el ejemplo y si representamos matemáticamente la ecuación es fácil observar que el factorial de un número es dicho número multiplicado por el factorial del número anterior.


De manera genérica:


```text
caso general:	 n! = n * (n-1)!
caso base: 	    = 1   si n=0
```


Así que podemos calcular el factorial [Javascript](https://www.manualweb.net/javascript/) como [una función](https://manualweb.net/javascript/funciones-javascript/) recursiva, es decir, que hace referencia a sí misma multiplicando el argumento por el factorial javascript del número precedente:


```javascript
function factorialRecursivo (n) {
	if (n == 0){
		return 1;
	}
	return n * factorialRecursivo (n-1);
}
```


### Resumen sobre calcular factorial Javascript


Durante nuestro estudio, hemos adquirido la habilidad de calcular el factorial de un número. Este concepto, fundamental en el [campo de la matemática](https://lineadecodigo.com/tag/javascript-math/), ha sido dominado a través de dos enfoques distintos y valiosos. Primero, hemos implementado un bucle, una técnica comúnmente utilizada en programación y que resulta efectiva para este tipo de cálculos. La otra técnica que hemos practicado es el uso de funciones recursivas, un concepto más avanzado que nos permite resolver problemas de una manera más eficiente y elegante. Ambos métodos nos han proporcionado una comprensión más profunda de cómo manejar este tipo de cálculos matemáticos.

