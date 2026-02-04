---
title: "Mi primer applet"
description: "Este artículo presenta la creación de un applet en Java que muestra un texto en pantalla."
date: 2007-01-02
updatedDate: 2026-01-09
tags: ["applet","awt","graphics","paint"]
slug: java/awt/mi-primer-applet
type: doc
topic: java
id: 2ff9e905-1cbe-4e30-bb5d-d1a85eb48809
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/applet/MiPrimerApplet.java
---

Cuando hablamos de un [applet](http://www.manualweb.net/java/applets-java/), hablamos de aplicaciones [Java](https://www.manualweb.net/java/) que se ejecutan en el cliente. Desde el primer momento en que aparecieron parecía que iba a ser la panacea de la ejecución de las aplicaciones en remoto. No tener nada instalado en tu máquina y solo descargarte aquello que el usuario necesitase. Con el paso del tiempo, y tras múltiples traspiés, los [applets](http://www.manualweb.net/java/applets-java/) no han cuajado mucho en Internet. Si es verdad que podemos encontrar muchas aplicaciones de diversos usos. Además no deberemos de perderles de vista, ya que su evolución sigue con paso firme. Una vez nos pongamos a desarrollar un [applet](http://www.manualweb.net/java/applets-java/), lo primero que tenemos que hacer es extender [la clase Applet]( "Clase Java Applet"). Con ello indicaremos que nuestro código podrá utilizar las facilidades para manipular un applet.


```java
public class MiPrimerApplet extends Applet {} 
```


La clase Applet se encuentra en el paquete java.applet. Un [applet](http://www.manualweb.net/java/applets-java/) tiene varios métodos que se ejecutan en un orden pre-establecido: init(), start(), paint(),... En nuestro caso vamos a utilizar el método .paint(Graphics g) para incluir un texto dentro del mismo. El método .paint(Graphics g) incorpora la clase que refleja el lienzo del [applet](http://www.manualweb.net/java/applets-java/). Dicha clase es Graphics (esta clase está en [el paquete java.awt](https://www.w3api.com/Java/tag/java.awt/)). Para incluir el texto sobre el lienzo tenemos varios métodos, dentro de los cuales se encuentra .drawString(cadenaDeTexto,x,y). Dicho método lo utilizaremos para poner nuestro texto preferido.


```java
public void paint(Graphics g){
     g.drawString("Mi primer applet",40,80);
   }
```


Las coordenadas son relativas al borde izquierdo superior del lienzo del [applet](http://www.manualweb.net/java/applets-java/). El codigo completo del [applet](http://www.manualweb.net/java/applets-java/) sería el siguiente:


```java

import java.applet.Applet;
import java.awt.Graphics;


 public class MiPrimerApplet extends Applet {
   
   public void paint(Graphics g){
     g.drawString("Mi primer applet",40,80);
   }

}
```


Una vez tengamos nuestro [applet](http://www.manualweb.net/java/applets-java/) compilado tendremos un fichero .class con el mismo nombre que la clase que hayamos utilizado para crear el [applet](http://www.manualweb.net/java/applets-java/). En nuestro caso MiPrimerApplet.class Lo que tendremos que hacer ahora es instanciar el [applet](http://www.manualweb.net/java/applets-java/) dentro de una página web. Para ello podemos apoyarnos en las etiquetas [APPLET](https://www.w3api.com/HTML/a/PPLET) y [OBJECT](https://www.w3api.com/HTML/object/). En dichas etiquetas tendremos que indicar el nombre de la clase a instanciar.


```html
<applet code="MiPrimerApplet.class" heigh="100" width="300"></applet>
```


Ya tendremos nuestro Applet ejecutándose en la página web. A partir de ahora solo tendremos que echarle mucha imaginación para dotar a nuestros [applet](http://www.manualweb.net/java/applets-java/) de todo tipo de funcionalidades...

