---
title: "Scrollbars y Elipse"
description: "Ejemplo de código Java que nos enseña como conjuntar unas scrollbars y elipse para gestionar eventos AWT dentro de un Applet."
date: 2008-01-23
updatedDate: 2026-01-11
tags: ["applet","awt","graphics","paint","init","ellipse","mousemotionlistener","adjustmentevent","adjustmentlistener","keylistener","mouselistener"]
slug: java/applets/scrollbars-y-elipse
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/applet/ScrollbarElipse.java
topic: java

---

Por los emails recibidos parece que este ejemplo es solicitado en muchas Universidades y centros de enseñanza para el manejo de eventos y scrollbars en [Java](https://www.manualweb.net/java/) y con [AWT](https://www.w3api.com/Java/tag/java.awt/). Este ejercicio consiste en crear un Applet que contenga dos barras de desplazamiento (una vertical y otra horizontal) y una elipse en el área gráfica. Dependiendo del movimiento de las scrollbars, la elipse irá cambiando de tamaño. El cambio de su tamaño será directamente proporcional con el valor de las scrollbars. Para poder realizar esto deberemos de seguir los siguientes pasos: En primer lugar deberemos de crear un Applet. Para ello nuestra clase deberá de heredar de la clase Applet. Los métodos que utilizaremos en el applet serán paint(Graphics g) encargado de gestionar el área gráfica y el método init() para configurar los parametros generales. En la inicialización del Applet añadiremos las barras de scroll. Una vertical (Scrollbar.VERTICAL) y otra horizontal (Scrollbar.HORIZONTAL). Una vez cerradas las añadiremos al Applet mediante el método add(Sitio, Componente).


```java
Scrollbar v,h;

v = new Scrollbar(Scrollbar.VERTICAL,0,0,0,200);
add("East",v);
   
h = new Scrollbar(Scrollbar.HORIZONTAL,0,0,0,200);
add("South",h);
```


Una vez que tenemos las barras de desplazamiento añadiremos la elipse al [área gráfica (Graphics)]( "Java Graphics"). El área gráfica solamente la tenemos disponible en el método paint. Para añadir ea elipse utilizamos el método drawOval (origenX, origenY, tamañoX, tamañoY).


```java
paint (Graphics g) {
  ...
  g.drawOval(10,10,ancho,alto); 
  ...
}
```


Ahora que tenemos todo montado nos queda la parte más importante. Como hacer que cuando se pulse sobre una barra de desplazamiento cambien el tamaño de la elipse. Lo primero será declarar unas variables globales que contengan el alto y ancho de la elipse. Dichas variables se inicializan en el método init().


```java
int ancho;
int alto;
```


Lo segundo es gestionar los eventos. [Java](https://www.manualweb.net/java/) **tiene un modelo de eventos por delegación**. Para explicarlo en pocas palabras podríamos decir que consiste en crear una clase que escuche los posibles eventos de un componente (frame, applet, button... y claro, nuestras scrollbars). Esta clase que escucha los eventos de un componente deberá de heredar de una clase adaptador o implementar un interface escuchador (que mal suena la traducción de adapter y listener). La única diferencia es que con el interface nos vemos obligados a implementar todos los métodos, mientras que con la clase podemos heredar los métodos y sobrescribir los que necesitemos. Estas clases de las que debemos de heredar estan previstas para atender eventos de todo tipo. Por ejemplo los eventos del ratón son manejados por MouseListener y MouseMotionListener, los eventos de las teclas son manejados por KeyListener,... y sus respectivos adaptadores. Para las barras de scroll nuestra clase manejadora de eventos debe implementar el interface AdjustmentListener. debemos de señalar que no existe la clase AdjustmentAdapter ya que el interface solo maneja un evento (un solo método).


```java
adjustmentValueChanged (AdjustmentEvent evt)
```


Este método atenderá a cualquier evento donde un srollbar cambie de valor. Nuestra clase quedará como sigue:


```java
class manejadorEventos implements AdjustmentListener {

  Applet ventana;
   
  manejadorEventos (Applet a) {
    this.ventana = a;
  }
   
  public void adjustmentValueChanged (AdjustmentEvent evt)    {

    if (evt.getAdjustable().getOrientation() == Adjustable.HORIZONTAL)
      ancho = evt.getValue(); 
    else
      alto = evt.getValue();
   
    ventana.repaint();
  }
}
```


Nos quedará es indicar que los eventos de nuestros scrollbars (v y h) son manejados por dicha clase. Para ello usamos la clase addAdjustmentListener(manejador) sobre la scrollbar.


```java
v.addAdjustmentListener(manejador);
h.addAdjustmentListener(manejador);
```


Lo último que nos queda por comentar es que no hará falta el tener una clase que maneje los eventos por cada scrollbar, sino que tendremos una sola clase que identificará si la scrollbar que genero el evento es horizontal (cambiaremos el ancho) o vertical (cambiaremos el alto). La orientación de la scrollbar nos la dará el método .getOrientation() que nos devolverá un valor entero. Este valor lo podemos identificar mediante las constantes Adjustable.HORIZONTAL y Adjustable.VERTICAL.

