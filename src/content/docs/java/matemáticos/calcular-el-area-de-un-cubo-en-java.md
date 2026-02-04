---
title: "Calcular el área de un cubo en Java"
description: "Código fuente que nos explica cómo calcular el área de un cubo en Java."
date: 2013-02-14
updatedDate: 2026-01-08
tags: ["math","pow","abstract","class","area","cubo"]
slug: java/matematicos/calcular-el-area-de-un-cubo-en-java
type: doc
topic: java
id: 18a0b761-359d-41ca-9aba-e87e9587fbaf
author: ARIEL
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/AreaCubo.java
---

Para este ejercicio en el que vamos a calcular el área de un cubo en [Java ](https://www.manualweb.net/java/)utilizaremos las siguientes fórmulas:


```java
area_lateral= 4*Math.pow(a,2)
```


para obtener el **área lateral** y


```java
area_total= 6*Math.pow(a,2)
```


para obtener el **área total del cubo**. Donde **a** es el valor de la arista del cubo. Vamos a crear una clase abstracta llamada "Area" y definiremos dos métodos areaLateral() y areaTotal().


```java
abstract class Area{
   public abstract double areaLateral();
   public abstract double areaTotal();
}
```


> Las clases abstractas nos permiten crear una jerarquía de clases (clase base) que extienden su funcionalidad a otras clases denominadas derivadas.


Ahora creamos la clase derivada y la llamaremos "Cubo".


```java
class Cubo extends Area{
  private double arista;

  @Override
  public double areaLateral(){
    //... aqui la fórmula para calcular el área lateral
  }
   
  @Override
  public double areaTotal(){
    ...// aquí la fórmula para calcular  el área total
  }

}
```


Con esto la clase base(Area) y la clase derivada(Cubo) tienen código y datos comunes. Finalmente creamos la clase principal "AreaCubo".


```java
public class AreaCubo{
//creamos un miembro de tipo Area
   Area area; 
...

public AreaCubo(){}

   public AreaCubo(Area ar){
    this.area=ar;
   }
...
}
```


Para visualizar el resultado tendremos dos métodos.


```java
   
   public void verAreaLateral(){
      System.out.println("area lateral obtenida: "+area.areaLateral());
  }
   public void verAreaTotal(){
    System.out.println("area total obtenida: "+area.areaTotal());
  }
```


El método main de la clase tiene el siguiente aspecto:


```java

  public static void main(String[] args){
    //clase abstracta y la clase extendida
     Area area= new Cubo(10); //le asignamos el valor 10
   
     AreaCubo areaCubo=new AreaCubo(area);
     
     //visualizar área lateral 
     areaCubo.verAreaLateral();
    //visualizar área total
     areaCubo.verAreaTotal();
    
 }
```


Si a la arista le asignamos el valor de 10 obtendremos un área lateral de 400 y un área total de 600. Con estos pasos hemos podido, de forma sencilla, calcular el área de un cubo en [Java](https://www.manualweb.net/java/).

