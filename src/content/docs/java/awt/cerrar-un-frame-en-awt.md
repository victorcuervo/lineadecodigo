---
title: "Cerrar un frame en AWT"
description: "El artículo explica cómo cerrar un frame en AWT utilizando eventos y la clase WindowAdapter en Java."
date: 2007-12-16
updatedDate: 2026-01-11
tags: ["eventos","frame","awt","window","windowadapter","windowevent"]
slug: java/awt/cerrar-un-frame-en-awt
author: victor_cuervo
type: doc
id: b6fe6ac1-ba02-45b4-bccc-a7f4d8305559
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/awt/CerrarUnFrame.java
---

Crear un **frame con AWT** es muy sencillo, simplemente tendremos que crear una instancia de la clase `Frame` y con un par de líneas más tendremos visible nuestra ventana. Si todavía no has creado un frame en AWT te recomiendo que te leas "Crear un Frame con AWT".


Uno de los inconvenientes que tiene el crear un `Frame` sin más, es que este no atiende a ningún evento. Es por ello que por mucho que le demos en el aspa de cierre, el `Frame` no se va a cerrar. Claro está que esto no haría nuestra aplicación viable.


## Controlar el evento windowClosing


Es por ello que lo que vamos a hacer es controlar el evento `windowClosing`, para declarar que hay que hacer en la aplicación, dada esta situación.


Lo primero que tenemos que saber es que hay que utilizar la librería `java.awt.event`. Que es la que nos permite controlar estos eventos. Así que tendremos que importarla:


```java
import java.awt.event.*;
```


Por otro lado tenemos que crear una clase del tipo `WindowAdapter`, en la cual crearemos el método que controla el evento `windowClosing`. Esto lo haremos dentro de nuestro método `main`, ya que no vamos a reutilizar esta clase en otro sitio, aunque podríamos hacerlo.


```java
new WindowAdapter() {
  public void windowClosing(WindowEvent e) {
    // código
  }
}
```


## Finalizar la aplicación


En el caso de que se produzca el evento `windowClosing`, lo que haremos será finalizar la aplicación, es por ello que utilizamos el objeto del sistema y su método `exit`.


```java
System.exit(0);
```


Finalmente el código que controle el evento `windowClosing` quedará de la siguiente forma:


```java
new WindowAdapter() {
  public void windowClosing(WindowEvent e) {
    System.exit(0);
  }
}
```


## Asignar el listener al Frame


La instancia de la clase `WindowAdapter` se la tenemos que asignar al `Frame`. Para ello utilizamos el método `addWindowListener`.


```java
miFrame.addWindowListener(new WindowAdapter() {
  public void windowClosing(WindowEvent e) {
    System.exit(0);
  }
});
```

