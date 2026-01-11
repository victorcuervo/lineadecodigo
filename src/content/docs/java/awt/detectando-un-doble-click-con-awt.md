---
title: "Detectando un doble click con AWT"
description: "Detectando un doble click con AWT mediante el uso de la gestión de eventos de ratón."
date: 2007-06-24
updatedDate: 2026-01-11
tags: ["applet","awt","mouseadapter","mouselistener","mouseevent"]
slug: java/awt/detectando-un-doble-click-con-awt
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/awt/DobleClick.java
topic: java

---

Cuando estamos haciendo aplicaciones gráficas con [Java](https://www.manualweb.net/java/) utilizando [AWT](http://lineadecodigo.com/tag/java-awt/), muchas veces nos interesará realizar unas operaciones u otras dependiendo de si el usuario ha realizado un click simple o un doble click.


## Detectar eventos de ratón


Para ello, lo primero de todo es detectar que se ha producido un evento de ratón. Los eventos los tenemos en la clase `MouseAdapter` o en el interface `MouseListener`. Como solo vamos a necesitar el método `mouseClicked`, heredaremos de la clase `MouseAdapter` y sobrescribiremos dicho método.


Lo primero es crear una clase que extienda de `MouseAdapter`:


```java
class GestionRaton extends MouseAdapter {
    // código
}
```


## Implementar el método mouseClicked


Y ahora implementar el código `mouseClicked`:


```java
public void mouseClicked(MouseEvent e) {
    if (e.getClickCount() == 1)
        showStatus("Click Simple");
    else if (e.getClickCount() == 2)
        showStatus("Doble Click");
}
```


A través del evento recibido podremos acceder al método `getClickCount()` que nos indicará el número de clicks que se han realizado. Lo que nos queda es mostrar la información en la barra de estado. Para ello utilizamos la función `showStatus(String)`.


## Registrar el listener


Tampoco se nos debe olvidar que debemos añadir la clase que maneja los eventos a uno de los componentes. En nuestro caso, al propio Applet en el método `init()`:


```java
public void init() {
    addMouseListener(new GestionRaton());
}
```

