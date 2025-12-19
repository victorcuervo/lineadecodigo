---
title: "Área de un rectángulo con Java"
description: "Programa que nos ayuda a calcular el área de un rectángulo con Java explicado paso a paso."
lastUpdated: 2025-12-19
slug: java/area-de-un-rectangulo-con-java
author: victor_cuervo
---

El calcular el área de un rectángulo con [Java](https://www.manualweb.net/java/) es un código muy sencillo, pero el cual nos sirve para resolver dos cosas: por un lado ver como hacer un programa básico en [Java](https://www.manualweb.net/java/) y otro, el resolver una formula matemática. Lo primero es conocer como calcular el área de un rectángulo. La formula es la siguiente:


```java
area_rectangulo = base * altura
```


Dónde el área del rectángulo es igual a la multiplicación de la base del rectángulo por la altura del mismo. A la hora de codificarlo en [Java](https://www.manualweb.net/java/), lo primero que tenemos que hacer es definir una clase AreaRectangulo, la cual tendrá el código de nuestro programa. Veamos la estructura de la clase:


```java
public class AreaRectangulo {

 public static void main(String[] args) {...}

}
```


En ella encontramos el método main, el cual contiene el código que se ejecuta en primer lugar cuando ejecutemos el programa. > Hay que recordar que el nombre de la clase y el nombre del fichero con extensión .java tienen que ser el mismo.


Lo primero que haremos será declarar tres variables base y altura, las cuales contendrán los valores de los lados del rectángulo y una tercera que será area_rectangulo, donde almacenaremos el valor del área. Inicialmente esta tendrá un valor de 0.


```java
int area_rectangulo = 0;
int base = 10;
int altura = 20;
```


La siguiente línea de código será la que multiplique la base por la altura y deje el resultado en la variable area_rectangulo.


```java
area_rectangulo = base*altura;
```


Ya solo nos quedará mostrar el resultado por pantalla. Para ello nos apoyamos en el objeto [Java](https://www.manualweb.net/java/) del sistema y el el método println.


```java
System.out.println("El area de un rectangulo de base "+base+" y altura "+altura+" es igual a "+area_rectangulo);
```


Por último compilaremos y ejecutaremos el programa.

