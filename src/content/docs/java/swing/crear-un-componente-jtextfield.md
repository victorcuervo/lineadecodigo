---
title: "Crear un componente JTextField"
description: "Aprende a crear un JTextField en Java Swing: configura un JFrame, define el ancho visible, muestra una ventana y conoce métodos, validación y alternativas."
date: 2010-10-05
updatedDate: 2026-10-31
tags: ["java-swing","jframe","jtextfield"]
slug: java/swing/crear-un-componente-jtextfield
type: doc
topic: java
id: 05b4fb2f-ed04-4755-9534-b944c32885d9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/CrearJTextField.java
---

## Crear un componente JTextField en Java Swing


Cuando estamos diseñando una aplicación de ventanas mediante [Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing) con [Java](https://lineadecodigo.com/java/), uno de los componentes que seguro que nos aparece es el [JTextField](http://w3api.com/wiki/Java:JTextField). Y es que el componente `JTextField` nos sirve para crear un campo de entrada de texto en Java. Lo primero que tenemos que hacer para crear un componente `JTextField` es crear un [JFrame](http://w3api.com/wiki/Java:JFrame), el cual va a contener nuestro `JTextField`.


```java
public class CrearJTextField extends JFrame {...}
```


Será en el constructor de la clase Java donde definamos y añadamos al formulario nuestro componente `JTextField`. El componente `JTextField` tiene un constructor que puede recibir dos parámetros. Por un lado, el texto por defecto; por otro, el número de columnas que se utilizará para calcular su anchura preferida.


```java
JTextField input = new JTextField("texto por defecto",20);
```


El segundo parámetro no establece un límite máximo de caracteres. Indica el número aproximado de columnas visibles que el gestor de diseño utilizará para calcular el tamaño preferido del campo. Si necesitamos limitar la longitud del texto, tendremos que aplicar una validación o un filtro sobre su documento.


Ya solo nos quedará añadir el componente al contenedor para que se vea en el formulario. Tarea que llevaremos a cabo mediante el método [`add()`](http://w3api.com/wiki/Java:Container.add()). Veamos cómo quedaría el código Java del constructor:


```java
CrearJTextField(){
  super("Crear un JTextField");
  JTextField input = new JTextField("texto por defecto",20);
  add(input);
}
```


## Ejemplo completo de una ventana con JTextField


El código anterior muestra la idea esencial. Para ejecutar la aplicación como una ventana independiente conviene añadir los imports, definir el cierre de la ventana, ajustar su tamaño con `pack()` y hacer visible el formulario. La interfaz de Swing se crea en el hilo de eventos mediante `EventQueue.invokeLater()`.


```java
import java.awt.EventQueue;
import javax.swing.JFrame;
import javax.swing.JTextField;

public class CrearJTextField extends JFrame {
    private final JTextField input = new JTextField("texto por defecto", 20);

    public CrearJTextField() {
        super("Crear un JTextField");
        add(input);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        pack();
        setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        EventQueue.invokeLater(() -> {
            CrearJTextField ventana = new CrearJTextField();
            ventana.setVisible(true);
        });
    }
}
```


`pack()` calcula el tamaño de la ventana a partir del tamaño preferido de sus componentes. En este caso, el resultado esperado es una ventana centrada que muestra un campo con el texto `texto por defecto` y una anchura aproximada de veinte columnas.


## Leer y modificar el contenido


Para obtener el texto introducido por el usuario se utiliza `getText()`. También podemos establecer un valor inicial o cambiarlo posteriormente con `setText()`:


```java
String texto = input.getText();
input.setText("Nuevo texto");
```


El método `setEditable(false)` impide que el usuario edite el contenido, aunque el programa todavía puede modificarlo con `setText()`. Para desactivar completamente la interacción visual y de teclado se puede utilizar `setEnabled(false)`.


En siguientes ejemplos de Java veremos cómo interactuar con este componente `JTextField`. De momento, ya conocemos cómo crear un componente `JTextField`, añadirlo a un `JFrame` y trabajar con su contenido.

