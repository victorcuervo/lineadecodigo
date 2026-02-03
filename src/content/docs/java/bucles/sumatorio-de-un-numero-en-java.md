---
title: "Sumatorio de un numero en Java"
description: "Uso de un bucle while para poder calcular un Sumatorio de un numero en Java."
date: 2007-06-12
updatedDate: 2026-01-07
tags: ["sumatorio","bucle","while"]
slug: java/bucles/sumatorio-de-un-numero-en-java
author: victor_cuervo
type: doc
id: f58e8984-77e7-4776-bbc5-0b38ad224be4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/SumatorioDeUnNumero.java
---

Un sumatorio es la suma de un conjunto de elementos. Para expresarlo matemáticamente se utiliza la letra griega sigma (∑). Dicho conjunto está delimitado por un número inicial y un número final. Se tiene que cumplir que el número final nunca sea menor que el número inicial. Si no se indica el número inicial se suele asumir que es el 1. 


Así, el sumatorio de 5 sería 15:


```html
∑(5) = 5 + 4 + 3 + 2 + 1 = 15
```


Para poder codificar esto en un [lenguaje Java](https://www.manualweb.net/java/), nos vamos a apoyar en una estructura repetitiva. En concreto en un bucle. El bucle tendrá que iterar tantas veces como nos indique el valor del sumatorio. En cada una de las iteraciones iríamos sumando el valor de la iteración sobre la variable que tuviese el valor del sumatorio. Eso sí, acordándonos que hay que guardar sumar también el valor que ya tuviese la variable.


Con un bucle while tendríamos el siguiente código:


```java
int iNumero = 5;
int iSumatorio = 0;
int iContador = iNumero;
		
while (iContador != 0) {
		   
  iSumatorio = iSumatorio + iContador;
  iContador--;
	 
}
		
System.out.println("El sumatorio de " + iNumero + " es " + iSumatorio);
```


Cabe notar que utilizamos **una variable iContador** para los cálculos, ya que queremos guardar el valor del número sobre el que calculamos el sumatorio, para luego mostrarlo por pantalla.

