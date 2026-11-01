---
title: "Hola Mundo con Swing"
description: "Aprende a crear una ventana Hola Mundo con Java Swing usando JFrame y JLabel, con un ejemplo completo y buenas prácticas para iniciar una aplicación gráfica."
date: 2010-06-01
updatedDate: 2026-11-01
tags: ["hola-mundo","java-swing","jframe","jlabel"]
slug: java/swing/hola-mundo-con-swing
type: doc
topic: java
id: e1367f7a-de0e-46ac-a730-5baf4c6e8231
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/HolaMundoSwing.java
---

## Crear una ventana con Swing


Mediante este artículo intentamos hacer una incursión al mundo de la programación gráfica con [Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing). De esta forma veremos cómo abrir una nueva ventana que nos muestre el texto "Hola Mundo" en su interior.


Lo primero que tenemos que saber es que la clase que representa la ventana (o _frame_) es [`JFrame`](http://w3api.com/wiki/Java:JFrame), y que nuestra clase concreta heredará de dicha clase.


```java
public class HolaMundoSwing extends JFrame { ... }
```


De esta forma conseguimos que nuestra clase `HolaMundoSwing` ya represente una ventana. Lo siguiente será empezar con la codificación del constructor de la clase. En dicho constructor definiremos la etiqueta de texto, la añadiremos al contenedor y haremos que el contenedor sea visible.


```java
public HolaMundoSwing() { ... }
```


En el constructor invocaremos al constructor del padre. Para ello nos ayudamos de la palabra reservada `super`. Como el constructor de [`JFrame`](http://w3api.com/wiki/Java:JFrame) puede recibir el título de la ventana como parámetro, ejecutaremos `super()` de la siguiente forma:


```java
super("Hola Mundo");
```


Ahora pasaremos a crear la etiqueta. Las etiquetas en [Java Swing](http://w3api.com/wiki/Categor%C3%ADa:Java_Swing) las podemos utilizar mediante la clase [`JLabel`](http://w3api.com/wiki/Java:JLabel). El constructor de la clase [`JLabel`](http://w3api.com/wiki/Java:JLabel) espera el texto de la etiqueta como parámetro. En este caso, al ser "Hola Mundo", realizaremos la creación de la etiqueta de la siguiente forma:


```java
JLabel label = new JLabel("Hola Mundo");
```


Una vez creada la etiqueta la añadimos a la ventana mediante el método `add()` del contenedor:


```java
JLabel label = new JLabel("Hola Mundo");
getContentPane().add(label);
```


Ya solo nos quedará darle un tamaño a la ventana y hacerla visible. Esto lo hacemos mediante los métodos `setVisible()` y `setSize()`.


```java
setSize(200, 100);
setVisible(true);
}
```


El código completo del constructor sería el siguiente:


```java
public HolaMundoSwing() {
  super("Hola Mundo");

  JLabel label = new JLabel("Hola Mundo");
  getContentPane().add(label);

  setSize(200, 100);
  setVisible(true);
}
```


Ya solo nos quedará invocar a la clase `HolaMundoSwing`. Para ello creamos un método `main` y la instanciamos.


```java
public static void main(String[] args) {
  new HolaMundoSwing();
}
```


## Código completo de Hola Mundo con Swing


Los fragmentos anteriores muestran las partes importantes del ejemplo. Para ejecutarlo como una clase Java completa necesitamos importar las clases de Swing y definir `HolaMundoSwing` junto con su método `main`:


```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingUtilities;

public class HolaMundoSwing extends JFrame {

    public HolaMundoSwing() {
        super("Hola Mundo");

        JLabel label = new JLabel("Hola Mundo");
        getContentPane().add(label);

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(200, 100);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new HolaMundoSwing());
    }
}
```


Al ejecutar el programa se abre una ventana titulada "Hola Mundo" con una etiqueta que muestra el mismo texto. `setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE)` hace que la aplicación termine al cerrar la ventana. `setLocationRelativeTo(null)` la sitúa centrada en la pantalla.


### El hilo de eventos de Swing


Swing utiliza un hilo específico para crear y actualizar sus componentes, conocido como _Event Dispatch Thread_ (EDT). `SwingUtilities.invokeLater()` programa la creación de la ventana en ese hilo y es la forma recomendada de iniciar una interfaz Swing. En ejemplos pequeños también es habitual instanciar directamente la clase desde `main`, como en el fragmento original, pero usar el EDT evita problemas cuando la interfaz crece y empieza a responder a eventos.


### Tamaño de la ventana y pack()


El método `setSize(200, 100)` conserva un tamaño explícito para este ejemplo. Cuando una interfaz tiene varios componentes, suele ser preferible llamar a `pack()` después de añadirlos para que `JFrame` calcule el tamaño a partir de las dimensiones preferidas de cada componente:


```java
getContentPane().add(label);
pack();
setLocationRelativeTo(null);
setVisible(true);
```


No es necesario utilizar `setSize()` y `pack()` a la vez. Elige una de las dos opciones según necesites un tamaño fijo o uno calculado a partir del contenido.


Este ejemplo es una base sencilla para comenzar con interfaces gráficas en Java Swing: `JFrame` aporta la ventana, `JLabel` muestra el mensaje y el contenedor de la ventana organiza los componentes que se van añadiendo.

