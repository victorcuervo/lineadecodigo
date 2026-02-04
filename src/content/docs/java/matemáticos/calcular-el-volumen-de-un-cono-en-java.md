---
title: "Calcular el volumen de un cono en Java"
description: "Ejemplo de programa en Java para calcular el volumen de un cono utilizando JOptionPane para la entrada y salida de datos."
date: 2013-06-14
updatedDate: 2026-01-11
tags: ["Java Swing","volumen","radio","math","java-swing","joptionpane","cono","altura","formula"]
slug: java/matematicos/calcular-el-volumen-de-un-cono-en-java
type: doc
topic: java
id: 2c5cab51-9951-4835-9d1a-63a89e2b5080
author: ARIEL
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/VolumenCono.java
---

En este ejemplo vamos a calcular el volumen de un cono en [Java](https://www.manualweb.net/java/). En el código vamos a utilizar la clase JOptionPane de la librería `javax.swing` para que la representación sea visual. Lo primero será importar la clase `JOptionPane`:


```java
import javax.swing.JOptionPane;
```


Definimos la estructura de la clase que va a calcular el volumen de un cono en [Java](https://www.manualweb.net/java/) y el método principal del programa será:


```java
 
public class VolumenCono {
   public static void main(String[] args) {
     //aqui va el código
  }
  //aqui va el método
}
```


La fórmula para obtener el volumen del cono:


```java
volumen=(Math.PI*(r*r)*h)/3
```


Donde **r es el radio** y h la altura del cono. La formula para calcular el volumen de un cono en [Java](https://www.manualweb.net/java/) quedará de la siguiente manera:


```java
public static double volumen(double r,double h){
        return (Math.PI*(r*r)*h)/3;
    }
```


Para pedir los datos: **radio** y **altura** nos apoyamos en el método showInputDialog:


```java
double radio=Double.parseDouble(JOptionPane.showInputDialog("Introduce radio:"));  
double altura=Double.parseDouble(JOptionPane.showInputDialog("Introduce altura:")); 
```


Y mostramos el resultado de calcular el volumen de un cono en [Java](https://www.manualweb.net/java/). El código sería el siguiente


```java
try{
  double radio=Double.parseDouble(JOptionPane.showInputDialog("Introduce radio:"));  
  double altura=Double.parseDouble(JOptionPane.showInputDialog("Introduce altura:"));
  JOptionPane.showMessageDialog(null,"Volumen obtenido\n"+String.valueOf(volumen(radio,altura)),"Aviso",JOptionPane.PLAIN_MESSAGE,new ImageIcon("imagen.jpg"));
  System.exit(0);
} catch(Exception ex) {
  JOptionPane.showMessageDialog(null,ex.getCause().toString(),"Aviso", JOptionPane.ERROR_MESSAGE,new ImageIcon("ferd.jpg"));
}
```

