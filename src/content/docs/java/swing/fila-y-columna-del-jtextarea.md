---
title: "Fila y Columna del JTextArea"
description: "Explicación sobre cómo podemos conocer la fila y columna del JTextArea dónde tengamos situado nuestro cursor."
date: 2015-09-25
updatedDate: 2026-01-11
tags: ["jframe","textarea","add","java-swing","jtextarea","jtextfield","caretevent","caretlistener","caretupdate","getcaretposition","getlineoffset","getlinestartoffeset"]
slug: java/swing/fila-y-columna-del-jtextarea
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/swing/FilaColumna.java
topic: java

---

Cuando creamos un elemento `JTextArea` el usuario irá introduciendo texto en dicho área. Si nos fijamos en los editores una de sus características es que nos informan de una forma sencilla de qué línea y en qué columna nos encontramos. Ya sea para localizar texto, para informar de una línea de error en un programa,... En este ejemplo vamos a ver como podemos informarle al usuario de la fija y columna del `JTextArea` en la que se encuentran. Para empezar vamos a crear un [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/), este será el que nos permita tener una aplicación Java Swing de forma visual. Para ello vamos a extender nuestra clase de la clase [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/).


```java
public class FilaColumna extends JFrame { ... }
```


Y dentro de ella un método `.main()` que nos inicialice el [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/).


```java
public static void main(String args[]) {
  FilaColumna app = new FilaColumna();
  app.setVisible(true);
}
```


Lo siguiente será insertar dentro del [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/) el `JTextArea` que será sobre el que trabajemos, al igual que un [`JTextField`](https://www.w3api.com/Java/JTextField/) que será dónde demos la información de la fila y columna del `JTextArea`. Definimos los elementos:


```java
private JTextArea editor;
private JTextField status;
```


Y los situamos en el [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/):


```java
editor = new JTextArea();
add(editor, BorderLayout.CENTER);

status = new JTextField();
add(status, BorderLayout.SOUTH);
```


Vemos que nos hemos apoyado en el método [`.add()`](https://www.w3api.com/Java/Container/add/) para añadir los elementos en el [`JFrame`](https://www.w3api.com/Java/JFrame/setLayout/). Ahora pasamos a manejar el `JTextArea`. Lo que nos interesa es que cada vez que el usuario mueva el cursor, ya sea porque mueve las flechas o porque inserta o borra texto tengamos información de la coordenada en la que se encuentra para poder actualizarla sobre el [`JTextField`](https://www.w3api.com/Java/JTextField/). Para ello deberemos de gestionar el evento `CaretEvent`, así que por consiguiente deberemos de añadir un escuchador de dicho evento sobre nuestro `JTextArea`, este será un `CaretListener`. Para añadir el escuchador utilizamos el método `.addCaretListener()`.


```java
editor.addCaretListener(new CaretListener() { ... });
```


El evento `CaretListener` tiene un método que se llama `.caretUpdate()` que es el que se ejecuta cada vez que hay una actualización del cursor. Este método recibe un objeto `CaretEvent` con la información del evento.


```java
editor.addCaretListener(new CaretListener() {
  public void caretUpdate(CaretEvent e) { ... }             
});
```


Ahora vamos al meollo del problema. Que es qué hacer en este evento `.caretUpdate()`. Lo primero será obtener una referencia al `JTextArea` en el que se ha producido el evento. Este viene dentro del objeto `CaretEvent`.


```java
JTextArea editArea = (JTextArea)e.getSource();
```


Ahora, sobre el `JTextArea` invocaremos al método `.getCaretPosition()`. Este método nos da la posición del cursor relativa al número de caracteres insertados. Así, si hemos insertado el siguiente texto: <samp>Color Rojo o Verde</samp>Nos devolverá el valor 18, que es igual al número de caracteres insertados más el salto de línea. Pero nosotros queremos la fila y la columna así que nos apoyaremos en el método `.getLineOfOffset()` al que pasaremos la posición del cursor y nos devolverá la fila.


```java
linea= editArea.getLineOfOffset(caretpos);
```


Y en el método `.getLineStartOffset()`, el cual, al pasarle la fila nos devolverá el número de caracteres que hay en las anteriores líneas. Así que restándoselo a la posición del cursor nos dará la columna de la fila actual.


```java
columna = caretpos - editArea.getLineStartOffset(linea);
```


> La línea inicial la marca como la 0. Así que a fines de ajustes visuales habrá que incrementar en una unidad el valor de la fila para que aparezca la fila correcta.


El código completo del listener será:


```java
public void caretUpdate(CaretEvent e) {
  JTextArea editArea = (JTextArea)e.getSource();

  
  int linea = 1;
  int columna = 1;

  try {
    int caretpos = editArea.getCaretPosition();
    linea= editArea.getLineOfOffset(caretpos);
    columna = caretpos - editArea.getLineStartOffset(linea);
                    
    // Ya que las líneas las cuenta desde la 0
    linea += 1;
  } catch(Exception ex) { }

  // Actualizamos el estado
  actualizarEstado(linea, columna);
}
```


Se nos olvidaba, lo último que hemos hecho ha sido actualizar el valor del `JTextField`.


```java
private void actualizarEstado(int linea, int columna) {
  status.setText("Linea: " + linea + " Columna: " + columna);
}
```


De esta forma hemos conseguido conocer el valor de la Fila y Columna del `JTextArea` y volcarlo a un [`JTextField`](https://www.w3api.com/Java/JTextField/).

