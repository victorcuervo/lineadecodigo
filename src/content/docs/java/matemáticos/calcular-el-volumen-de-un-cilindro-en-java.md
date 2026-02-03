---
title: "Calcular el volumen de un cilindro en Java"
description: "Código fuente explicado para poder calcular el volumen de un cilindro en Java."
date: 2013-03-09
updatedDate: 2026-01-09
tags: ["math","volumen","cilindro","interface","pi","abstract"]
slug: java/matematicos/calcular-el-volumen-de-un-cilindro-en-java
author: ARIEL
type: doc
topic: java
id: 33f3d06f-81cc-493d-83bc-0175602764f4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/VolumenCilindro.java
---

Para calcular el volumen de un cilindro en [Java](https://www.manualweb.net/java/) emplearemos la función **Math.PI** de la clase _java.lang.Math_ en la siguiente fórmula:


```java
volumen= Math.PI*(r*r)*h
```


Donde r es el **radio** del cilindro y h su **altura**. Vamos a crear un método que obtenga el volumen de un cilindro en [Java](https://www.manualweb.net/java/) y le llamaremos "volumen()", y otro que muestre el resultado que llamaremos "ver()" dentro de una **interface**.


```java
interface Servicios{
  public abstract double volumen();
  public abstract void ver();
}
```


> En las interfaces todos los métodos son abstractas y se puede omitir las palabras public y abstract.


Necesitamos ahora una clase que implemente esa interface.


```java
class Cilindro{
   public Cilindro(){}
}
```


Es necesario agregarle dos miembros (radio y altura) y definir un constructor con parámetros.


```java
class Cilindro implements Servicios{
 	private double radio;
 	private double altura;

 	public Cilindro(){}

 	public Cilindro(double _radio,double _altura){
 		this.radio=_radio;
 		this.altura=_altura;
 	}

  }
```


Una vez hecho esto le agregamos los métodos de la interface:


```java

@Override
public void ver(){
 	System.out.println(toString());
}

public String toString(){
	return String.format("volumen obtenido : %f",volumen());
}

@Override
public double volumen(){
	return Math.PI*(radio*radio)*altura;
}
```


Es de notarse que el método "toString()" es propio de la clase Cilindro. Para mostrar el resultado tenemos la clase principal "VolumenCilindro".


```java
public class VolumenCilindro{
        //Interface nombreInstancia= new ClaseImpl();
        Servicios cilindro=new Cilindro(2,6);
 		cilindro.ver();
}
```


Ya tenemos nuestro programa que calcula el volumen de un cilindro en [Java](https://www.manualweb.net/java/).

