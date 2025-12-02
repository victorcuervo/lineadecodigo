---
layout: post
title: Centrar un JFrame
excerpt: "Código fuente Java que nos enseña cómo podemos centrar un JFrame de Java Swing en una ventana mediante el método setLocationRelativeTo."
categories: Java
tags: [java swing,java swing jframe]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Para explicar cómo centrar un [`JFrame`](https://www.w3api.com/Java/JFrame/) vamos a mostrar un ejemplo de ver cómo mostrar una aplicación [Java Swing](https://lineadecodigo.com/tag/java-swing/), en concreto un [`JFrame`](https://www.w3api.com/Java/JFrame/), al arrancar, centrado en la pantalla. Además, nos vamos a apoyar en el ejemplo [conocer la resolución de la pantalla con Java](https://lineadecodigo.com/java/conocer-la-resolucion-de-la-pantalla-con-java/) para darle forma al [`JFrame`](https://www.w3api.com/Java/JFrame/) que vamos a centrar.


### Crear un constructor JFrame


El procedimiento para centrar un [`JFrame`](https://www.w3api.com/Java/JFrame/) lo vamos a codificar en el constructor de la clase. Así que lo primero será definir una clase que extienda de [`JFrame`](https://www.w3api.com/Java/JFrame/), constructor incluido.


```java
public class CentrarJFrame extends JFrame {
  public CentrarJFrame(){...}
}
```


### Posicionar la pantalla con setLocationRelativeTo


Dentro del constructor del [`JFrame`](https://www.w3api.com/Java/JFrame/) utilizamos el método [setLocationRelativeTo()](http://www.w3api.com/Java/Window-java-awt/setLocationRelativeTo/) de la clase [`Window`](https://www.w3api.com/Java/Window-java-awt/). El método [setLocationRelativeTo()](https://www.w3api.com/Java/Window-java-awt/setLocationRelativeTo/) coloca la ventana en una posición relativa a un componente que le pasemos como parámetro. Pero si le pasamos `null` como parámetro, coloca la ventana en el centro de la pantalla. Así ya habremos conseguido centrar un [`JFrame`](https://www.w3api.com/Java/JFrame/).


```java
public class CentrarJFrame extends JFrame {
  public CentrarJFrame(){
    setLocationRelativeTo(null);
  }
}
```


Como comentábamos antes, y apoyándonos en el ejemplo sobre [Conocer la resolución de la pantalla con Java](https://lineadecodigo.com/java/conocer-la-resolucion-de-la-pantalla-con-java/) vamos a cuadrar el [`JFrame`](https://www.w3api.com/Java/JFrame/) y haremos que sea la mitad del tamaño de la pantalla... por presentar algo de armonía. :-)


```java
public class CentrarJFrame extends JFrame {
  public CentrarJFrame(){
      super("Centrar JFrame");

      Dimension pantalla = Toolkit.getDefaultToolkit().getScreenSize();
      int height = pantalla.height;
      int width = pantalla.width;
      setSize(width/2, height/2);

      setLocationRelativeTo(null);
      setVisible(true);
  }
}
```


De esta manera ya tenemos completo el ejemplo que nos explica cómo centrar un [`JFrame`](https://www.w3api.com/Java/JFrame/) mediante [Java Swing](https://lineadecodigo.com/tag/java-swing/).

