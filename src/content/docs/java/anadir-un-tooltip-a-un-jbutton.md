---
title: "Añadir un tooltip a un JButton"
description: "Añade un tooltip a un JButton en Java Swing con setToolTipText(), entiende cuándo aparece y cómo ajustar su demora con ejemplos prácticos para principiantes."
date: 2010-09-09
updatedDate: 2026-10-24
tags: ["tooltip","add","setvisible","setsize","jbutton"]
slug: java/anadir-un-tooltip-a-un-jbutton
type: doc
topic: java
id: e82f0dd9-077d-47a5-8081-1673a005f9b9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/BotonConTooltip.java
---

Un tooltip es un mensaje emergente que aparece cuando pasamos el cursor sobre ciertos elementos, por ejemplo, un botón (clase [`JButton`](http://w3api.com/wiki/Java:JButton) de [Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing)). Este mensaje proporciona información adicional sobre el elemento o la acción asociada.


En [Java](https://lineadecodigo.com/java/), la clase `JButton` hereda de `JComponent` el método `setToolTipText(String)`, que permite asociar un texto al componente para que Swing lo muestre cuando el puntero permanece sobre él.


Veamos qué pasos tenemos que seguir para añadir un tooltip a un [`JButton`](http://w3api.com/wiki/Java:JButton).


## Crear el botón


Lo primero será crear el botón con la clase [`JButton`](http://w3api.com/wiki/Java:JButton):


```java
JButton boton = new JButton("Pasa sobre este botón");
```


## Añadir el tooltip con setToolTipText()


Una vez creado el botón, le añadiremos el tooltip mediante el método [`setToolTipText()`](http://w3api.com/wiki/Java:JComponent.setToolTipText()), al que pasamos el texto que se mostrará.


```java
boton.setToolTipText("Tooltip del botón");
```


## Añadir el botón al contenedor


Ya solo nos quedará añadir el botón al contenedor mediante el método [`add()`](http://w3api.com/wiki/Java:Container.add()), para completar la ventana. En este ejemplo, `getContentPane()` devuelve el área de contenido del `JFrame` y `FlowLayout` organiza el botón dentro de ella.


## Código del constructor


Veamos cómo sería el código del constructor de la ventana. Este fragmento presupone que `BotonConTooltip` extiende `JFrame`; no es una clase ejecutable completa por sí sola. Para compilarlo en una aplicación, también se necesitan las importaciones de `FlowLayout`, `JButton` y `JFrame`.


```java
public BotonConTooltip(){
  super("Botón con Tooltip");	
		
  getContentPane().setLayout(new FlowLayout());
				
  JButton boton = new JButton("Pasa sobre este botón");
  boton.setToolTipText("Tooltip del botón");
  getContentPane().add(boton);
  	
  setSize(400,300);
  setVisible(true);
}
```


`setVisible(true)` muestra la ventana.


### Ajustar el retraso del tooltip


Swing gestiona automáticamente los tooltips mediante `ToolTipManager`, por lo que no es necesario añadir un listener de ratón para mostrarlos. Si quieres modificar los tiempos, puedes ajustar el retraso inicial y cuánto permanece visible el tooltip. Los valores se expresan en milisegundos; para usar la clase en un archivo independiente, importa `javax.swing.ToolTipManager`.


```java
ToolTipManager.sharedInstance().setInitialDelay(500);
ToolTipManager.sharedInstance().setDismissDelay(5000);
```


El gestor compartido aplica estos ajustes a los tooltips de la aplicación. En este ejemplo, el tooltip aparece tras 500 milisegundos y su tiempo de visualización se establece en 5000 milisegundos. Utiliza textos breves que describan el control o la acción; el tooltip debe ser una ayuda complementaria, no el único lugar donde se presente información imprescindible.

