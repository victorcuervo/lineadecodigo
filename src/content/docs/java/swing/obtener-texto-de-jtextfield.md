---
title: "Obtener Texto de JTextField"
description: "Se explica cómo obtener texto de JTextField en una aplicación Java Swing usando ActionListener y JButton."
date: 2016-11-14
updatedDate: 2026-01-11
tags: ["gettext","java-swing","jframe","jtextfield","jbutton","jlabel","actionlistener","actionevent"]
slug: java/swing/obtener-texto-de-jtextfield
type: doc
topic: java
id: f8c73bb8-1e54-41ef-9040-23033a7bab52
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/ObtenerTexto.java
---

Seguimos trabajando con componentes de [Java Swing](https://www.manualweb.net/java/) y en este caso vamos a ver cómo podemos **obtener texto de JTextField**. Es decir, vamos a crear un campo de entrada para que el usuario introduzca un contenido y nosotros evaluaremos que contenido ha introducido.


## Crear la aplicación Java Swing


Lo primero es crear nuestra aplicación Java Swing mediante un `JFrame`:


```java
JFrame frame = new JFrame("Obtener Texto de JTextField");
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.setSize(400, 200);
```


## Insertar los componentes


Ahora pasamos a insertar los componentes que vamos a manejar. En este caso vamos a crear un campo de texto con `JTextField`, un botón o `JButton` y una etiqueta o `JLabel`.


Cuando pulsemos sobre el botón vamos a acceder al `JTextField` para ver que ha insertado el usuario y dejaremos el contenido sobre el `JLabel`.


```java
JTextField input = new JTextField(20);
JButton boton = new JButton("Obtener Texto");
JLabel etiqueta = new JLabel("Aquí aparecerá el texto");
```


Y añadimos los componentes al `Container` mediante el método `.add()`:


```java
add(input);
add(boton);
add(etiqueta);
```


## Controlar el evento del botón


Ahora pasamos a controlar el evento sobre el botón mediante un `ActionListener`:


```java
boton.addActionListener(new ActionListener() {
  @Override
  public void actionPerformed(ActionEvent e) { ... }
});
```


## Obtener el texto del JTextField


Será el método `.actionPerformed()` el que nos ayude a responder ante un click del botón y dónde vamos a obtener texto de JTextField. Para acceder al contenido de lo que ha insertado el usuario en el JTextField solo tenemos que invocar el método `.getText()` de dicho componente.


```java
boton.addActionListener(new ActionListener() {
  @Override
  public void actionPerformed(ActionEvent e) {
    // Recuperamos el contenido del Campo de Texto y lo volcamos sobre la etiqueta
    etiqueta.setText(input.getText());
  }
});
```


De esta forma tan sencilla podemos obtener texto de `JTextField` y conseguir recoger la información del usuario con un formulario.

