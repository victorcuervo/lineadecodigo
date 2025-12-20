---
title: "Calcular el volumen de una esfera en Java"
description: "Programa que nos muestra como podemos calcular el volumen de una esfera en Java mediante una sencilla formula matematica."
lastUpdated: 2025-12-20
slug: java/calcular-el-volumen-de-una-esfera-en-java
author: ARIEL
---

Para el ejemplo que nos permite calcular el volumen de una esfera en [Java](https://www.manualweb.net/java/) vamos a crear cuatro archivos:


1. Una interface "Servicio"
2. Una clase abstracta "Figura"
3. Una clase hija "Esfera"
4. Una clase principal "VolumenEsfera"


Y es que aprovecharemos y utilizaremos conceptos de herencia para resolver nuestro problema. La fórmula para calcular el volumen de una espfera en [Java](https://www.manualweb.net/java/) es la siguiente


```java
volumen=(4/3)*Math.PI*(r*r*r)
```


Donde **r es el radio de la esfera**.


## Una Interface Servicio


Definimos un método dentro de la interface "Servicio"


```java
interface Servicio{
    public abstract void ver();
}
```


## La Clase Abstracta: Figura


La clase abstracta implementara el método de la interface, además posee un método que nos servirá para obtener el volumen de la esfera:


```java
abstract class Figura implements Servicio{
    private double radio;
    //este es el método que calcula el volumen de la esfera
    public abstract double volumen();
 
    public Figura(){}
 
    public Figura(double _radio){
        this.radio=_radio;
    }
 
    public double getRadio(){
        return this.radio;
    }
}
```


## La Clase Concreta: Esfera


Creamos la clase "Esfera" que hereda las propiedades y métodos de la clase abstracta:


```java
class Esfera extends Figura{
    double r;
 
    public Esfera(){}
 
    public Esfera(double _r){
        super(_r);
        r=_r;
    }
 
    @Override
    public double volumen(){
        return ((4/3) * Math.PI*(r*r*r));
    }
 
    @Override
    public void ver(){
        System.out.println(String.format("radio: %f , volumen esfera: %f",getRadio(),volumen()));
    }
}
```


> Como se puede notar la clase abstracta "Figura" no tiene la necesidad de hacer uso del método ver(), pero la clase hija "Esfera" si.


## La Clase Principal: VolumenEsfera


La clase principal tiene el siguiente aspecto:


```java
public class VolumenEsfera{
   
    public static void main(String[] args) {
        Figura esfera=new Esfera(20);
        esfera.ver();
    }
}
```


Espero que os haya sido de utilidad la explicación de como calcular el volumen de una esfera en [Java](https://www.manualweb.net/java/) y algún concepto que otro de las herencias.

