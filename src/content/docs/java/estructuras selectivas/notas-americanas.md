---
title: "Notas Americanas"
description: "Uso de una estructura selectiva switch en Java para poder convertir notas americanas en españolas."
date: 2007-04-09
updatedDate: 2026-01-09
tags: ["switch","do-while","while","inputstream","read","bucles","ascii","casting"]
slug: java/estructuras-selectivas/notas-americanas
type: doc
topic: java
id: 2c8a9dfb-adca-81a3-8177-de334e9b4b54
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NotasAmericanas.java
---

El ejemplo consiste en pedir un carácter por teclado que corresponderá con una nota de calificación según el sistema americano, es decir, A, B, C, D o E. Y según la letra introducida se mostrará por pantalla su equivalencia en el sistema de calificación español. El programa terminará cuando el usuario introduzca un cero. Es un ejercicio pensado para aprender el desarrollo de la estructura de selección switch y la estructura de repetición while. Lo primero será obtener la nota americana. Para ello utilizamos [la clase System.in](https://www.w3api.com/Java/System/in/) y en concreto su [método .read()](https://w3api.com/Java/InputStream-java-io/read/). Hay que tener en cuenta que el carácter leído se almacena en formato ASCII, es por ello que tendremos que hacer un casting a un tipo de dato carácter.


```java
nota=System.in.read();
caracter=(char)nota;
```


Otra cosa que deberemos tener en cuenta es que al teclear una letra y pulsar la tecla intro se introducen 3 caracteres ASCII (tecla + 13 + 10). El 13 y 10 son los códigos del salto de línea y retorno de carro. Como vamos a estar en un bucle, deberemos de saltar estos dos caracteres para poder volver a leer el nuevo carácter. Esto lo podemos hacer con el método .skip(numerodesaltos) que recibe como parámetro el número de saltos a ejecutar.


```java
System.in.skip (2);
```


Una vez que tenemos la nota en formato americano leída desde el teclado, deberemos de calcular su equivalencia en formato español. Para ello nos apoyaremos en la estructura selectiva switch. Dicha estructura tiene la siguiente forma:


```java
switch (condicion){
  case "valor1":
    acciones;
    break;
  case "valor2":
    acciones;
    breaK;
  default:
    acciones_por_defecto;
}
```


Si el valor de la condición coincide con una de las opciones, se ejecutarán las acciones asociadas a dicha opción. La línea break se utiliza para que no se compare con el resto de opciones. En nuestro caso, la nota en americano es la condición y los valores que van de la A a la E los valores a comparar.


```java
switch (caracter){
	case 'A': System.out.println ("sobresaliente");
				break;
	case 'B': System.out.println ("notable");
				break;
	case 'C': System.out.println ("aprobado");
				break;
	case 'D': System.out.println ("insuficiente");
				break;
	case 'E': System.out.println ("muy deficiente");
				break;
	default:  System.out.println ("esta puntuación no existe");
}
```


Como hemos dicho que se ejecutará el programa hasta que se teclee un 0 pondremos todo el código en un bucle do-while. En este caso mejor que un bucle while, ya que al menos, preguntaremos una vez.

