---
title: "Cerrar una Ventana con Java Swing"
description: "Aprende a cerrar una ventana con Java Swing mediante WindowAdapter, controla windowClosing y añade una confirmación antes de terminar la aplicación."
date: 2010-06-04
updatedDate: 2026-10-31
tags: ["awt","windowadapter","swing","jframe","system"]
slug: java/swing/cerrar-una-ventana-con-java-swing
type: doc
topic: java
id: 23928e7e-32c8-45cb-932b-31aa4e340550
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/CerrarVentana.java
---

Una vez visto el ejemplo de [Hola Mundo con Java Swing](http://lineadecodigo.com/java/hola-mundo-con-swing/) vamos a dar paso a realizar más cosas con [Java Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing). En este caso, partiendo del [ejemplo de Hola Mundo](http://lineadecodigo.com/java/hola-mundo-con-swing/), vamos a ver cómo podemos cerrar una ventana con [Java Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing). De esta manera controlaremos las acciones que se realizan una vez que el usuario cierra la ventana. La idea principal consiste en escuchar el evento [`windowClosing`](http://w3api.com/wiki/Java:WindowAdapter.windowClosing()). El evento [`windowClosing`](http://w3api.com/wiki/Java:WindowAdapter.windowClosing()) pertenece al adaptador de ventana [`WindowAdapter`](http://w3api.com/wiki/Java:WindowAdapter).


> Recuerda que para la gestión de eventos tenemos interfaces y adaptadores. Las interfaces nos obligan a codificar todos los eventos que queremos gestionar, mientras que con un adaptador solo tenemos que implementar el evento que necesitamos.


## Cerrar una ventana con WindowAdapter


Lo primero es utilizar el método [`addWindowListener`](https://docs.oracle.com/en/java/javase/21/docs/api/java.desktop/java/awt/Window.html#addWindowListener(java.awt.event.WindowListener)) para suscribirnos a los eventos que se producen en la ventana. Así, en el constructor de nuestro programa utilizaremos dicho método:


```java
public CerrarVentana() {
  addWindowListener(new WindowAdapter() { ... });
}
```


Como podemos comprobar en el código, al método [`addWindowListener`](https://docs.oracle.com/en/java/javase/21/docs/api/java.desktop/java/awt/Window.html#addWindowListener(java.awt.event.WindowListener)) le estamos pasando una clase [`WindowAdapter`](http://w3api.com/wiki/Java:WindowAdapter). El método asociado al cierre de la ventana es [`windowClosing`](http://w3api.com/wiki/Java:WindowAdapter.windowClosing()). En él solo vamos a realizar una salida del sistema con [`System.exit(0)`](http://w3api.com/wiki/Java:System.exit()).


```java
public void windowClosing(WindowEvent e) {
  System.exit(0);
}
```


Así, nuestro [`WindowAdapter`](http://w3api.com/wiki/Java:WindowAdapter) quedaría de la siguiente forma para gestionar el cierre de una ventana con [Java Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing).


```java
public CerrarVentana() {
  addWindowListener(new WindowAdapter() {
    @Override
    public void windowClosing(WindowEvent e) {
      System.exit(0);
    }
  });
}
```


Aunque nosotros solo hemos forzado un [`System.exit(0)`](http://w3api.com/wiki/Java:System.exit()), en el método [`windowClosing`](http://w3api.com/wiki/Java:WindowAdapter.windowClosing()) podemos hacer lo que queramos. Por ejemplo, preguntar al usuario si está seguro de cerrar.


## Ejemplo completo


El siguiente programa reúne el código anterior en una clase ejecutable. `WindowAdapter` pertenece al paquete `java.awt.event`, mientras que `JFrame`, `JOptionPane` y `SwingUtilities` pertenecen a `javax.swing`.


```java
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.SwingUtilities;

public class CerrarVentana extends JFrame {

  public CerrarVentana() {
    setTitle("Cerrar ventana");
    setSize(400, 200);
    setLocationRelativeTo(null);

    // La decisión de cierre se toma en windowClosing.
    setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);

    addWindowListener(new WindowAdapter() {
      @Override
      public void windowClosing(WindowEvent e) {
        int opcion = JOptionPane.showConfirmDialog(
            CerrarVentana.this,
            "¿Seguro que quieres cerrar la ventana?",
            "Confirmar cierre",
            JOptionPane.YES_NO_OPTION);

        if (opcion == JOptionPane.YES_OPTION) {
          dispose();
        }
      }
    });
  }

  public static void main(String[] args) {
    SwingUtilities.invokeLater(() -> {
      CerrarVentana ventana = new CerrarVentana();
      ventana.setVisible(true);
    });
  }
}
```

