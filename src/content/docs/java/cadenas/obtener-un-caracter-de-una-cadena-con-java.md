---
title: Obtener un carácter de una cadena con Java
description: "Ejemplo que nos explica, mediante el código fuente, cómo poder obtener un carácter de una cadena con Java, indicando una posición de la misma."
lastUpdated: 2023-09-17
author: victor_cuervo
---

En este artículo vamos a ver cómo podemos obtener un carácter de una cadena con [Java](https://www.manualweb.net/java/). Esto nos puede ser útil si queremos conocer el valor de un carácter en concreto o si bien queremos modificarlo por un nuevo valor.


Para ello lo que tendremos que hacer es conocer cómo podemos manipular el método [`.charAt()`](https://www.w3api.com/Java/String/charAt/) sobre la misma cadena.


### Definir la cadena de texto


El primer paso será el definir la cadena. Para ello nos apoyamos en una variable de tipo [String](https://lineadecodigo.com/Java/String/) a la cual le asignamos directamente el valor de la cadena de texto.


```java
String sCadena = "Esto es una cadena de texto";
```


Podríamos haber utilizado el [constructor de la cadena ](https://lineadecodigo.com/Java/String/String/)[`String`](https://lineadecodigo.com/Java/String/String/) mediante un operador `new`. Pero vemos que es mucho más sencillo hacer la asignación directamente en la creación de la variable.


### Posiciones de los caracteres en una cadena


El siguiente paso ya será el acceder a uno de los caracteres de la cadena de texto. Pero antes de hacerlo deberemos de saber que los caracteres de la cadena de texto empiezan a enumerarse por el valor 0.


De esta manera las cadenas de texto empezarán por el valor 0 y el último posición equivaldrá al tamaño de la cadena menos 1.


Atendiendo a esto, si queremos obtener el primer carácter, tenemos que solicitar el 0, y si queremos el carácter 'e' de la palabra 'es', este será el quinto carácter, aunque se encuentra en la sexta posición.


### Acceder a un carácter de una cadena


Y ya, al fin, vamos a acceder a un carácter de una cadena. Para ello vamos a utilizar el método [`.charAt()`](https://www.w3api.com/Java/String/charAt/) que tiene la siguiente sintaxis:


```java
String.charAt(int index)
```


Este método recibe como parámetro un valor entero, que representa la posición del carácter que queremos obtener de la cadena. 


Así, si queremos acceder a la primera posición escribiremos lo siguiente código con el método [`.charAt()`](https://www.w3api.com/Java/String/charAt/):


```java
sCadena.charAt(0);
```


O si queremos acceder a la quinta posición el método [`.charAt()`](https://www.w3api.com/Java/String/charAt/) se escribirá de la siguiente forma:


```java
sCadena.charAt(5);
```


Ya solo nos quedará mostrar el contenido por pantalla, paso que haremos mediante la clase [`System.in`](https://www.w3api.com/Java/System/in/) de Java y su método [`println()`](https://www.w3api.com/Java/PrintStream/println/).


```java
System.out.println(sCadena.charAt(5));
```


De esta forma tan sencilla habremos conseguido obtener un carácter de una cadena con [Java](https://www.manualweb.net/java/). Seguro que más de una vez utilizarás este código.

