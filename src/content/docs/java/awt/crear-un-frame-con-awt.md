---
title: "Crear un frame con AWT"
description: "Se explican pasos para crear un frame con AWT en Java, incluyendo métodos para hacerlo visible y ajustar su tamaño."
date: 2007-06-30
updatedDate: 2026-01-11
tags: ["frame","awt","setsize","setvisible"]
slug: java/awt/crear-un-frame-con-awt
author: victor_cuervo
type: doc
topic: java
id: eb15155d-10ba-49c8-843b-970c50799fa4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/awt/MiFrame.java
---

## Creación de ventanas en Java AWT


Lo primero que nos interesa conocer cuando nos enfrentamos por primera vez a la programación de aplicaciones gráficas en [Java](https://www.manualweb.net/java/) es como crear una ventana, ya que este será el foco central de nuestra aplicación. Una vez creada nuestra ventana iremos añadiéndola el resto de elementos gráficos: botones, campos de texto, listas,...


Las ventanas dentro de la librería [AWT](http://lineadecodigo.com/tag/java-awt/) se engloban en la clase `Frame`. Es por ello que simplemente tendremos que instanciar un objeto de dicha clase.


```java
Frame miFrame = new Frame("Mi Frame");
```


## Hacer visible la ventana


Una vez hemos instanciado la clase deberemos de hacer visible la ventana. Para lo cual invocaremos el método `.setVisible(true)` pasándole como parámetro `true` (Queríamos hacerla visible, ¿verdad?).


```java
miFrame.setVisible(true);
```


Si ejecutamos el código con estas tres líneas lo que nos va a aparecer es una ventana de dimensiones mínimas. El ancho y alto de la ventana puede ser modificado mediante el método `.setSize()` que recibe como parámetros el ancho y alto respectivamente.


```java
miFrame.setSize(300,200);
```


## Enfoque con herencia


Otro enfoque a nuestro problema es el de crearnos una clase propia que herede de la clase `Frame`:


```java
public class MiFrame extends Frame {
  // Constructor y métodos
}
```


De tal manera que nuestro programa instanciara a dicha clase en vez de a `Frame`.


```java
MiFrame miFrame = new MiFrame();
```


En este segundo enfoque separamos de una manera clara lo que es la lógica de la aplicación de lo que es la lógica del interface gráfico, la cual queda encapsulada en la clase `MiFrame`, en conclusión, un código más limpio y reutilizable.

