---
title: "Área de un triangulo con Java"
description: "Ejemplo sencillo que nos explica como podemos calcular el área de un triangulo con Java."
date: 2007-02-11
updatedDate: 2026-01-07
tags: ["Java Básicos"]
slug: java/numeros/area-de-un-triangulo-con-java
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/AreaTriangulo.java
topic: java
---

No es que este programa tenga mucha dificultad. Pero dos cosas me han llevado a explicarle. La primera que es la petición de una persona en los comentarios de otro artículo (y la verdad es que no cuesta mucho explicarlo). La segunda es que sirve para explicar el manejo de los tipos de datos y como saber cual utilizar. Los conocimientos para llevarle a cabo son mínimos. A si que pongámonos manos a la obra. Lo primero es saber la fórmula del área del triangulo. Que es la siguiente:


```java
area = (base*altura)/2
```


Si queremos resolver esto con el lenguaje [Java](https://www.manualweb.net/java/), deberemos de crearnos una clase. Dentro de esta clase pondremos un método main. Este método es el que se ejecuta en primer lugar a la hora de ejecutar la clase. Veamos como sería ese esqueleto:


```java
public class AreaTriangulo {

	public static void main(String[] args) {
           // Código principal
	}

}
```


Es importante saber que el fichero se tiene que llamar igual que hemos llamado a la clase. La extensión será .java. Es por ello que en nuestro ejemplo el fichero será AreaTriuangulo.java.


> El nombre del fichero tiene que ser igual que el de la clase seguido de .java


Ahora declaramos todas las variables que necesitamos: base, altura y área. El tipo que les asignemos a las variables dependerá de los valores que vayan a poder almacenar. Así:

- **int**, será para números enteros
- **float**, será para números decimales

Este paso es muy importante. Si decidimos que las tres variables son decimales no habría ningún problema, ya que tras aplicar la formula el resultado será también un decimal. Pero si decidimos que el área y la altura son números enteros, el resultado tiene posibilidades de ser decimal. Es por ello que si también le definimos como entero, perderemos información. Por ejemplo si la base es igual a 5 (entero) y la altura es 3 (otro entero), el área será 7,5 (decimal). Las variables quedarán definidas de la siguiente forma:


```java
float area_triangulo = 0;
int base = 5;
int altura = 3;
```


Ahora solo nos quedará aplicar la formula:


```java
area_triangulo = (base*altura)/2
```


Lo último que nos queda por resolver es otro tema de tipos de datos. Ya que aunque la variable de la izquierda sea un decimal, se asume que la operación de la derecha es entera, ya que todas sus variables son enteras. Es por ello que habrá que hacer una operación de casting. ¿Y esto que significa? Pues que aunque las variables sean enteras, el resultado se podrá comportar como decimal. Veamos como quedaría la línea de código:


```java
area_triangulo = (float)(base*altura)/2
```

