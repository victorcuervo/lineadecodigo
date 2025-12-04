---
title: Dividir dos números con Java
description: "Ejemplo sencillo que nos explica cómo dividir dos números con Java. Para ello los leeremos primero por consola y luego haremos la división."
lastUpdated: 2023-09-17
slug: /java/dividir-dos-numeros-con-java/
author: victor_cuervo
---

Dentro del grupo de [ejemplos básicos en Java](https://lineadecodigo.com/tag/java-basicos/) y siendo otro que nos pide mucha gente que empieza con la programación en [Java](https://www.manualweb.net/java/), hoy vamos a explicar cómo hacer un programa que nos ayude a dividir dos números con [Java](https://www.manualweb.net/java/). (Discúlpenme los expertos).


Lo primero será definir las variables. En el artículo sobre [Sumar dos números con Java](https://lineadecodigo.com/java/sumar-dos-numeros-con-java/) veíamos que las variables eran de tipo int. Pero en el caso de la división hay que tener cuidado, ya que el resultado de una división puede dar lugar a un número con decimales. Por ejemplo:


```java
9/2 = 4.5
```


Es por ello que vamos a utilizar tipos [`float`](https://manualweb.net/java/tipos-datos-primitivos-java/#float) para los números:


```java
float numero1 = 0;
float numero2 = 0;
float resultado;
```


Una vez definidas las variables, pasaremos a solicitar los números al usuario, apoyándonos en un objeto [`Scanner`](https://www.w3api.com/Java/Scanner/). Instanciamos el objeto [`Scanner`](https://www.w3api.com/Java/Scanner/), con la entrada del sistema ([`System.in`](https://www.w3api.com/Java/System/in/)) como parámetro:


```java
Scanner reader = new Scanner(System.in);
```


Ahora pasamos a leer los números mediante el método [`.nextFloat`](https://www.w3api.com/Java/Scanner/nextFloat/). El cual leerá de la consola el dato y lo almacenará en nuestras variables:


```java
System.out.println("Introduce el primer número:");
numero1 = reader.nextFloat();

System.out.println("Introduce el segundo número:");
numero2 = reader.nextFloat();
```


Cada vez que el usuario pulse la tecla enter se introducirá un número y este quedará almacenado en una de las variables.


Es importante saber, que en este ejemplo, no estamos haciendo ningún control del tipo de dato que está insertando el usuario. Es decir, que si en vez de meter un número, inserta una cadena de texto, el programa fallará. Es muy recomendable echarle un ojo al artículo [leer números por teclado con Java](https://lineadecodigo.com/java/leer-numeros-por-teclado-con-java/), en el cual se nos explica cómo podemos controlar que realmente el contenido que el usuario inserta por consola es un número y, de esta forma, el programa pueda controlarlo y no nos salte una excepción [`InputMismatchException`](https://www.w3api.com/Java/InputMismatchException/).


Llegados a este punto solo nos quedará ejecutar la división y mostrarla en la pantalla. Para ello vamos a utilizar el [operador aritmético Java](https://manualweb.net/java/operadores-asignacion-aritmeticos-java/#operadores-aritm%C3%A9ticos) división `/` de la siguiente forma:


```java
resultado = numero1/numero2;
System.out.println("La división es " + numero1 + " / " + numero2 + " = " + resultado);
```


Si están aprendiendo [Java](https://www.manualweb.net/java/), el ejemplo dividir dos números con [Java](https://www.manualweb.net/java/) es un buen ejemplo para empezar y aprender. Solo os queda codificarlo, compilarlo y probarlo. A ver que tal se os da.

