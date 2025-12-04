---
title: Contar las vocales de una palabra con Java
description: "Código fuente que nos ayuda a contar las vocales de una palabra con Java utilizando un bucle for para poder recorrer carácter a carácter."
lastUpdated: 2023-09-17
slug: /java/contar-las-vocales-de-una-palabra-con-java/
author: victor_cuervo
---

Algunos nos habéis solicitado información sobre cómo podemos contar las vocales de una palabra utilizando [Java](https://www.manualweb.net/java/). Así que contentos de poder ayudar con esta consulta y proporcionar una solución detallada.


Empecemos por lo más básico, es decir, la palabra que vamos a analizar. Para mantener las cosas simples y directas, vamos a considerar una simple cadena, o como se conoce en el mundo de la programación, un [`String`](https://www.w3api.com/Java/String/).


```java
String sPalabra ="murcielago";
```


En el siguiente paso, vamos a definir un contador. Este contador tendrá la responsabilidad de llevar un seguimiento exhaustivo de las vocales que se encuentran en la palabra que estamos analizando. Esto se llevará a cabo a lo largo de toda la longitud de la palabra para asegurarnos de que no se pase por alto ninguna vocal:


```java
int contador = 0;
```


La siguiente tarea que tendremos que realizar es recorrer la palabra, lo cual se puede lograr mediante un [bucle for](https://manualweb.net/java/sentencias-bucle-java/). Un bucle for, como se puede aprender en [este tutorial](https://manualweb.net/java/sentencias-bucle-java/), es una estructura de control que nos permite repetir un bloque de instrucciones un número determinado de veces. En este caso, vamos a utilizarlo para recorrer cada carácter en la palabra. Para determinar cuántas veces necesitamos repetir el bucle, vamos a utilizar el método [`.length()`](https://www.w3api.com/Java/String/length/). Este método, que se explica con más detalle en [este enlace](https://www.w3api.com/Java/String/length/), nos devuelve el número de caracteres en la cadena, lo que nos ayudará a controlar el tamaño de la palabra que estamos recorriendo.


```java
for(int x=0;x<sPalabra.length();x++) {
  ...
}
```


En cada iteración de nuestro proceso, el método [`.charAt()`](https://www.w3api.com/Java/String/charAt/), una función integrada de Java que se utiliza para devolver un valor char en un índice específico de una cadena, nos proporcionará el carácter en la posición que estamos actualmente recorriendo. Con este carácter obtenido, luego procedemos a realizar una comprobación para determinar si el carácter es una vocal. En el español, las vocales son a, e, i, o, u. Si el carácter es una de estas vocales, entonces realizamos las acciones correspondientes en nuestra lógica de programación.


```java
for(int x=0;x<sPalabra.length();x++) {
 if ((sPalabra.charAt(x)=='a') || (sPalabra.charAt(x)=='e') || (sPalabra.charAt(x)=='i') || (sPalabra.charAt(x)=='o') || (sPalabra.charAt(x)=='u')){
    contador++;
  }
}
```


Una vez que hayamos completado todos los pasos anteriores, solo nos quedará una tarea final. Esta tarea consiste en volcar el valor que hemos acumulado en el contador y mostrarlo directamente en la consola. Este es un proceso sencillo, pero esencial para que podamos visualizar el resultado final de todas nuestras operaciones.


```java
System.out.println("La palabra " + sPalabra + "contiene " + contador + " vocales");
```


De esta forma, en pocas líneas de código habremos conseguido contar las vocales de una palabra con [Java](https://www.manualweb.net/java/).

