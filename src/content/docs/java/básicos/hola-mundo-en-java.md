---
title: Hola Mundo en Java
description: "Ejemplo que nos ayuda con nuestro primer ejemplo de código mediante un Hola Mundo en Java explicado paso a paso. ¡Vamos a ello!"
lastUpdated: 2023-09-17
author: victor_cuervo
---

Sin duda alguna el ejercicio más simple, y a la par, el que nunca puede faltar en cualquier lenguaje de programación es el programa Hola Mundo. Este consiste en sacar por pantalla la archiconocida frase de "Hola Mundo". Así que vamos a realizar el Hola Mundo en [Java](https://www.manualweb.net/java/).


Lo primero que tendremos que hacer en [Java](https://www.manualweb.net/java/) será crear la clase `HolaMundo`.


```java
public class HolaMundo {

}
```


Esta clase **la guardaremos en un fichero .java**. Es importante que el fichero se llame tal cual llamemos a la clase. Haciendo coincidir tanto mayúsculas como minúsculas. El fichero se llamará:


**HolaMundo.java**


Cuando compilemos y ejecutemos la clase, el código que se ejecuta en primer lugar es aquel que está dentro del método `main`. La signatura de dicho método es la siguiente:


```java
public class HolaMundo {
	public static void main(String[] args) {

	}
}
```


Solo nos quedará mostrar el texto "Hola Mundo" por la consola. Para ello utilizaremos [la clase estática ](https://w3api.com/Java/System/out/)[`System.out`](https://w3api.com/Java/System/out/). Esta clase nos permite acceder a la salida de la consola. En concreto usaremos el método [`.println()`](https://w3api.com/Java/PrintStream/print).


Finalmente el código nos quedará de la siguiente forma:


```java
public class HolaMundo {

	public static void main(String[] args) {
		System.out.println("Hola Mundo");
	}

}
```


Para compilar y ejecutar este código tendremos que ejecutar las siguientes sentencias:


```text
$ javac HolaMundo.java
$ java HolaMundo
```


> Es importante comprobar que el directorio dónde tengas tu fichero HolaMundo.java pueda acceder al compilador de Java para poder ejecutar las sentencias que hemos puesto anteriormente.


Mediante el comando **javac** lo que hacemos es compilar el programa [Java](https://www.manualweb.net/java/). Veremos que en el mismo directorio se ha creado un fichero **HolaMundo.class** el cual son los bytecodes que representan al lenguaje.


Acto seguido vamos a ejecutar el comando **java** lo que hace es ejecutar los bytecodes para poder ejecutar el programa que hemos codificado.


Y ya tendremos nuestro primer programa mediante el Hola Mundo en [Java](https://www.manualweb.net/java/). ¿Lo has conseguido? Deja tu impresión en los comentarios.

