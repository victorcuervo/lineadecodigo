---
title: "Número al Azar en Java"
description: "Uso de la clase Math para poder calcular un número al Azar en Java."
lastUpdated: 2025-12-19
slug: java/numero-al-azar-en-java
author: victor_cuervo
---

Seguro que más de una vez habéis jugado a esto. La idea es simple. Una persona piensa un número entre 1 y 10, mientras que otra persona intenta adivinarlo. Para ello, la persona que conoce el número le va diciendo si el número que busca es mayor o menor que el que ha dicho. En nuestro caso, quien pensará en el número y dirá si lo dicho es mayor o menor será un programa [Java](https://www.manualweb.net/java/). Es recomendable el leer los artículos ["Leer caracteres por consola en Java"](http://lineadecodigo.com/java/lectura-de-caracteres-por-consola-en-java/) y ["Número aleatorio en Java"](http://lineadecodigo.com/java/numero-aleatorio-en-java/). Los cuales nos ayudarán mucho en la realización de nuestro juego. Lo primero será generar un número aleatorio entre 1 y 10. Para ello utilizaremos [el método .random()](https://www.w3api.com/Java/Math/.random()) de la [clase Math](https://www.w3api.com/Java/Math/). Como esta clase genera números aleatorios del 0.1 al 0.9 tendremos que multiplicarlo por 10 y sumarle un 1.


```java
numeroAleatorio = (int) (Math.random()*10+1);
```


Posteriormente tendremos que pedir por consola el número. Para leer el número nos apoyaremos en la clase [System.in](https://www.w3api.com/Java/System/in/)


```java
numeroTeclado = System.in.read();
```


Hay que recordar que el número leído estará almacenado en carácter ASCII dentro de un tipo de dato int. Un buen truco para calcular el número real es restarle el valor ASCII del carácter que representa al número cero. Los pasos para obtener el número serán los siguientes:


```java
int cero = (int)'0';
numeroTeclado = System.in.read();
numeroTeclado = numeroTeclado - cero;
```


Con el número aleatorio y el número obtenido por consola tendremos que realizar algunas comprobaciones. Para indicarle al usuario si el número buscado es mayor, menor o si acierta.


```java
if (numeroTeclado > numeroAleatorio) {
  System.out.println ("El número buscado es menor");
}

if (numeroTeclado < numeroAleatorio) {
  System.out.println ("El número buscado es mayor");
}
```


Todo esto lo tendremos que tener en un bucle, hasta que acierte el usuario. Lo último que tendremos que tener en cuenta es que cuando el usuario teclea un número y pulsa la tecla intro se generan tres caracteres ASCII. carácter ASCII del numero + 13 + 10 El carácter 13 y 10 representan el salto de línea y retorno de carro. Es por ello que entre cada lectura habrá que saltarse la lectura de dos caracteres. Esto lo conseguimos mediante [el método .skip(numerocaracteres)](https://www.w3api.com/Java/InputStream-java-io/.skip()).


```java
System.in.skip(2);
```

