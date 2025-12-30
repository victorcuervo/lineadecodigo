---
title: "Detectar botón pulsado con Java Swing"
description: "Se explica cómo detectar botón pulsado con Java Swing usando múltiples botones y ActionListener para mostrar el nombre del botón."
publishDate: 2016-11-12
updatedDate: 2025-12-30
tags: ["java-swing","actionevent","actionlistener","jbutton","jframe","jlabel"]
slug: java/detectar-boton-pulsado-con-java-swing
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/BotonPulsado.java
---

Ya hemos visto lo sencillo que es controlar cuando nos pulsan un botón en [Java Swing](https://www.manualweb.net/java/). Pero qué sucede cuando tenemos varios botones en nuestro formulario. Vamos a ver cómo detectar botón pulsado con [Java Swing](https://www.manualweb.net/java/) en el caso de que tengamos varios. Así que lo primero será construir nuestro formulario [Java Swing](https://www.manualweb.net/java/) extendiendo de la clase `JFrame`.


```java
public class BotonPulsado extends JFrame { ... }
```


Sobre este formulario vamos a añadir tres botones. Dichos botones los vamos a construir mediante su clase [JButton](https://www.w3api.com/Java/JButton/).


```java
private JButton b1, b2, b3;

b1 = new JButton("Botón 1");
b2 = new JButton("Botón 2");
b3 = new JButton("Botón 3");
```


Ahora añadimos a los botones al `JFrame` mediante el método `.add()`.


```java
add(b1);
add(b2);
add(b3);
```


Para darle más funcionalidad a nuestro ejemplo de cómo detectar botón pulsado con Java Swing vamos a añadir una etiqueta o `JLabel` dónde escribiremos el nombre del botón que fue pulsado.


```java
private JLabel etiqueta;

etiqueta = new JLabel("");
add(etiqueta);
```


Ahora vamos a crear un `ActionListener` para cada botón, es decir, le diremos qué clase es la que maneja cuando sea pulsado. Esto lo hacemos mediante el método `.addActionListener()`.


```java
b1.addActionListener(new BotonPulsadoListener());
b2.addActionListener(new BotonPulsadoListener());
b3.addActionListener(new BotonPulsadoListener());
```


Podríamos crear una clase `ActionListener` para cada botón, pero eso nos llevaría a tener mucho código, así que para optimizarlo vamos a crear una única clase `BotonPulsadoListener` que descubrirá que botón fue puslado. Así creamos una clase privada en nuestra clase principal que implemente el `ActionListener`.


```java
private class BotonPulsadoListener implements ActionListener{ ... }
```


El método principal del `ActionListener` es `.actionPerformed()` que es el método que se ejecuta ante un click. Este método recibe un `ActionEvent`. Este objeto `ActionEvent` es el que contiene diferente información, entre esta información tenemos el nombre del botón que fue pulsado. Esto lo tenemos en el método `.getActionCommand()`.


```java
private class BotonPulsadoListener implements ActionListener{		

  @Override
  public void actionPerformed(ActionEvent e) {
    etiqueta.setText("Has pulsado el botón " + e.getActionCommand());			
  }					
}
```


Hemos utilizado el método `.setText()` sobre la etiqueta para poder cambiar e indicar el nombre al detectar botón pulsado con [Java Swing](https://www.manualweb.net/java/).

