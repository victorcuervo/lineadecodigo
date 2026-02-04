---
title: "Hola mundo con JavaFX"
description: "Este artículo explica cómo crear un Hola mundo con JavaFX utilizando IntelliJ IDEA y elementos básicos como escenas y nodos."
date: 2014-02-24
updatedDate: 2026-01-11
tags: ["java","hola-mundo","scene","stackpane","start"]
slug: javafx/basicos/hola-mundo-con-javafx
type: doc
topic: javafx
id: af620185-c190-440c-ba00-3f1e4bc4976a
author: ARIEL
download: https://github.com/victorcuervo/lineadecodigo_javafx/blob/master/src/com/lineadecodigo/javafx/HolaMundoJavaFx.java
---

En esta ocasión vamos a usar la tecnología [JavaFX](http://http//www.manualweb.net/tutorial-javafx/) para crear el ejemplo de **Hola mundo con JavaFX**, esta aplicación abrirá una ventana que muestra el clásico mensaje "Hola, mundo".


> 💡 [JavaFX](http://www.manualweb.net/javafx/) es una tecnología que nos permite crear aplicaciones de escritorio RIA (Rich Internet Applications)


Vamos a usar **IntelliJ IDEA** para crear el proyecto Hola Mundo con [JavaFX](http://www.manualweb.net/javafx/). Para ello elegimos New Project -> JavaFX Application.


Lo primero será explicar los tres conceptos que tiene [JavaFX](http://www.manualweb.net/javafx/):

- **El Escenario**, que es representado por la clase `Stage`. El escenario es el que representa al contenedor general de JavaFX.
- **La escena**, es representada por la clase `Scene` y es la que tiene el contenido de lo que queremos representar. La escena, por lógica se monta sobre el escenario.
- **Los nodos de la escena**, son los elementos que componen la escena. La clase superior que representa estos nodos es un Panel, en este caso vamos a utilizar un `StackPane`.

Vamos a montar nuestro escenario del Hola Mundo con [JavaFX](http://www.manualweb.net/javafx/), desde los nodos hasta la escena.


## Crear un botón que nos salude


Lo primero que haremos será crear un botón que sea el que muestre el saludo. Para crear un botón escribiremos el siguiente código:


```java
Button btn = new Button();
btn.setText("Saludar");
btn.setOnAction(new EventHandler<ActionEvent>() {
    @Override
    public void handle(ActionEvent event) {
        System.out.println("Hola mundo con JavaFX");
    }
});
```


Como podemos ver es una simple clase `Button`, a la cual le hemos asociado un manejador mediante un `EventHandler`. Dicho `EventHandler` va a mostrar un saludo por consola.


## El Panel Principal


Como hemos dicho hay que crear un nodo principal que será un Panel. En este caso es un `StackPane`:


```java
StackPane root = new StackPane();
```


Sobre el Panel vamos a añadir el botón:


```java
root.getChildren().add(btn);
```


## Montando la escena


La escena es la que contiene a los nodos. Así que el montado de la Escena en [JavaFX](http://www.manualweb.net/javafx/) no deja de ser el añadirle los nodos:


```java
Scene scene = new Scene(root, 300, 250);
```


## Subir la escena al escenario


Si ya tenemos la escena, solo nos queda subir la escena al escenario y mostrar el escenario:


```java
primaryStage.setTitle("Hola mundo con JavaFX");
primaryStage.setScene(scene);
[primaryStage.show](http://primarystage.show/)();
```


Ahora veremos que el escenario es un atributo del método `start`, método básico en el desarrollo de aplicaciones [JavaFX](http://www.manualweb.net/javafx/).


## Algunas cosas básicas más


Antes de montar la aplicación Hola Mundo con [JavaFX](http://www.manualweb.net/javafx/) tienes que saber un par de cosas más sobre esta tecnología.


La primera es que la aplicación extiende de la clase `Application`:


```java
public class HolaMundoJavaFx extends Application {
```


Y lo segundo es que el método principal es `start`, el cual recibe como parámetro el escenario, es decir la clase `Stage`:


```java
@Override
public void start(Stage primaryStage) {
```


Espero que os haya sido útil la explicación de cómo realizar un **Hola Mundo con JavaFX**.

