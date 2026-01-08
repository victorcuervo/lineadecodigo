---
title: "Controlar las coordenadas del ratón en un Applet"
description: "Programa Java que nos ayuda a controlar las coordenadas del ratón en un Applet."
date: 2008-03-04
updatedDate: 2026-01-08
tags: ["applet","awt","graphics","paint","init","showstatus","eventos","mouseevent","mousemotionadapter","mousemotionlistener"]
slug: java/applets/controlar-las-coordenadas-del-raton-en-un-applet
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/applet/CoordenadasRaton.java
topic: java

---

Mediante este ejemplo vamos a controlar las coordenadas del ratón mientras este se va moviendo por el lienzo de un Applet. Lo primero será crear nuestro Applet. Para ello nuestra clase heredará de la Applet.


```java
public class CoordenadasRaton extends Applet  {...}
```


Un Applet cuenta con varios métodos que se van ejecutando según se va avanzando en el ciclo del vida del Applet. Por ello tenemos init() que inicializará los parametros del Applet y paint(Graphics g) que maneja el área gráfica del Applet.


```java
public class CoordenadasRaton extends Applet {
  public void init() {
    ...
  }

  public void paint(Graphics g) {
    super.paint(g);
  }
}
```


Lo siguiente ya será el controlar las coordenadas del ratón. Los eventos del movimiento del ratón están recogidos en el interface MouseMotionListener y en la clase MouseMotionAdapter. En el caso de que implementemos el interface deberemos de escribir todos sus métodos y en el caso de heredar la clase solamente tendremos que sobrescribir los métodos que necesitemos. El interface MouseMotionListener tiene los siguientes métodos:

- **mouseDragged(MouseEvent e)**, que se lanza cuando se pulsa el botón del ratón.
- **mouseMoved(MouseEvent e)**, que se lanza cuando movemos el ratón.

Incluimos la implementación del interface MouseMotionListener a la definición de nuestra clase:


```java
public class CoordenadasRaton extends Applet implements MouseMotionListener {...}
```


El método que a nosotros nos interesa es el mouseMoved, que será lanzado cada vez que desplacemos el puntero del ratón. Las coordenadas del puntero las obtenemos del MouseEvent, que es el objeto que representa al evento del ratón. Para ello tenemos los métodos getX() y getY(). Para mostrar la información utilizamos el método showStatus(String). Este método vuelca la información que se pase como parámetro a la barra de estado del navegador.


```java
public void mouseMoved(MouseEvent e) {
  showStatus("Posición del puntero X:" 
  + Integer.toString(e.getX()) + " Y:"
  + Integer.toString(e.getY()));
}
```

