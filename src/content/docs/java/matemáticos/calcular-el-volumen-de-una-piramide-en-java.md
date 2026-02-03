---
title: "Calcular el volumen de una pirámide en Java"
description: "Sencillo código que nos ayuda a calcular el volumen de una pirámide en Java mediante el uso de interfaces Java. Ideal para principiantes en Java."
date: 2013-03-14
updatedDate: 2026-01-11
tags: ["interface","volumen","formula","math","piramide"]
slug: java/matematicos/calcular-el-volumen-de-una-piramide-en-java
author: ARIEL
type: doc
id: 7bd20679-02f4-4b78-b3ba-759786593b46
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/VolumenPiramide.java
---

Para calcular el volumen de una pirámide en [Java](https://www.manualweb.net/java/) vamos a crear tres archivos:

1. Una interface, que contenga el método para obtener el volumen de una pirámide en [Java](https://www.manualweb.net/java/)
2. Una clase que implemente la interface
3. Una clase principal para visualizar el resultado

## Definición de la Interface


Dentro de la interface vamos a definir un método para el cálculo del volumen en [Java](https://www.manualweb.net/java/):


```java
public interface IVolumen {
    double volumen();
}
```


## Fórmula del Volumen


La fórmula del volumen de una pirámide es la siguiente:


```java
// V = (1/3) * base * altura
```


## Clase Pirámide


La clase que implementa la interface requiere dos atributos: la base y la altura:


```java
public class Piramide implements IVolumen {
    private double base;
    private double altura;
}
```


Ahora definimos dos constructores, uno vacío y otro con parámetros:


```java
public Piramide() {
}

public Piramide(double base, double altura) {
    this.base = base;
    this.altura = altura;
}
```


Agregamos el método `volumen()`:


```java
@Override
public double volumen() {
    return (base * altura) / 3;
}
```


## Clase Principal


Finalmente la clase principal donde se visualiza el resultado de calcular el volumen de una pirámide en [Java](https://www.manualweb.net/java/):


```java
public class VolumenPiramide {
    public static void main(String[] args) {
        Piramide piramide = new Piramide(10, 15);
        System.out.println("El volumen de la pirámide es: " + piramide.volumen());
    }
}
```

