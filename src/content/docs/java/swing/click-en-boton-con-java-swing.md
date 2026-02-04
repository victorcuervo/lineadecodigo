---
title: "Click en botón con Java Swing"
description: "Ejemplo de cómo controlar el click en botón con Java Swing para modificar una etiqueta al pulsarlo."
date: 2016-11-06
updatedDate: 2026-01-11
tags: ["actionlistener","jbutton","jlabel","jframe","java-swing"]
slug: java/swing/click-en-boton-con-java-swing
type: doc
topic: java
id: af78d585-049e-4b8a-bee1-25d69ac4b409
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/ClickBoton.java
---

En este ejemplo vamos a aprender a controlar que se haga click en botón con [Java Swing](https://www.manualweb.net/java/). De esta manera podremos reaccionar ante una acción de un usuario.


## Crear la aplicación base


Lo primero será crear nuestra aplicación Java Swing base que será un `JFrame`, así que simplemente deberemos de extender la clase base de la clase `JFrame`.


```java
public class ClickBoton extends JFrame {
```


## Añadir componentes


Ahora vamos a añadir dos componentes, por un lado el botón sobre el que controlaremos el evento de click y por otro una etiqueta dónde escribiremos en el caso de detectar dicho evento. Para poder añadir estos componentes necesitaremos un `JButton` y un `JLabel`.


```java
JButton boton = new JButton("Pulsa el botón");
JLabel etiqueta = new JLabel();
```


Nos apoyamos en el método `.add()` para añadirlos al contenedor.


```java
add(boton);
add(etiqueta);
```


## Controlar el evento click


Ahora vamos a controlar el click en botón con [Java Swing](https://www.manualweb.net/java/). Para ello hay que añadir un Listener sobre el botón. Es decir, una clase que escuche los eventos sobre el botón. Esto lo hacemos mediante el método `.addActionListener()`.


```java
boton.addActionListener(...);
```


La clase que atienda el evento tiene que ser un `ActionListener`. En nuestro caso vamos a crearla directamente como clase anónima.


```java
boton.addActionListener(new ActionListener() {
```


La clase `ActionListener` lo que nos implica es definir el método `.actionPerformed()` que es dónde definiremos el control del evento.


```java
public void actionPerformed(ActionEvent e) {
```


## Modificar la etiqueta


Cuando se produzca el click en el botón se ejecutará el código que tengamos dentro del `.actionPerformed()`. Lo que hemos codificado es modificar el contenido de la etiqueta que habíamos añadido al contenedor. De esta forma ya tenemos controlado el click en botón con [Java Swing](https://www.manualweb.net/java/).

