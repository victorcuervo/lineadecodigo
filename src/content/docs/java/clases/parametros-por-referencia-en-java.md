---
title: "Parámetros por referencia en Java"
description: "Explicando por qué parece que existe el paso de parámetros por referencia en Java cuando realmente todos los parámetros se pasan por valor."
date: 2015-09-09
updatedDate: 2026-02-04
tags: ["metodo","parametros","clase"]
slug: java/clases/parametros-por-referencia-en-java
type: doc
topic: java
id: a083f659-2025-4d97-bf68-ffe03ad8cbad
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ParametrosReferencia.java
---

En los lenguajes de programación suelen existir dos formas de pasar los parámetros a los métodos. Parámetros por valor (dónde se realiza una copia de las variables) o parámetros por referencia (dónde se pasa una referencia a la variable original). En [Java](https://www.manualweb.net/java/) solo ha paso de parámetros por copia. Pero entonces, por qué la gente habla del paso de parámetros por referencia en Java. Veamos en detalle por qué parece que realizamos un paso de parámetros por referencia en [Java](https://www.manualweb.net/java/).


## Paso de parámetros por valor


Lo primero que tenemos que ver es que para los datos primitivos en [Java](https://www.manualweb.net/java/) se realiza claramente una copia.


```java
public void metodo(int p) {
  p=3;
}

int p1=2;
metodo(p1);

System.out.println(p1); //p1 = 2
```


## Paso de parámetros "por referencia": referencia de objetos


Pero ahora pasemos a manejar un objeto como parámetro. Lo que sucede al manejar los objetos en [Java](https://www.manualweb.net/java/) es que las variables mantienen una referencia al objeto, por lo tanto cuando pasamos un objeto como parámetro se está realizando una copia de la referencia. Así tenemos dos variables diferentes apuntando al mismo objeto. Creamos una clase básica llamada MiClase:


```java
public class MiClase {
 public int valor;
}
```


Y ahora un método que modifica ese valor:


```java
public static void metodo_referencia(MiClase m) {
  m.valor =3;		
}
```


Veamos como se pasa por valor, aunque parece que hay una referencia:


```java
MiClase m1 = new MiClase();
m1.valor = 2;
System.out.println(m1.valor); // Devuelve 2
metodo_referencia(m1);
System.out.println(m1.valor); // Devuelve 3
```


Hemos instanciado con un valor de 2 el atributo de la clase y el método lo cambia a 3. Como la variable copia m en el método sigue manteniendo la referencia al objeto original, se produce un cambio en dicho objeto. Por lo tanto es cuando tenemos la sensación del paso por referencia de los objetos. Es decir, que el paso por parámetros es por valor, aunque lo que se copia es una referencia. Es por ello que tenemos la "falsa sensación" de que estamos pasando los parámetros por referencia, aunque realmente es por valor.


## Desmitificando el paso de parámetros "por referencia"


Pero para verlo mejor veamos otro caso. Ahora lo que vamos a hacer es crear un nuevo objeto y cambiar la referencia de la variable pasada por copia.


```text
public static void metodo_referencia2(MiClase m1) {
  MiClase m2 = new MiClase();
  m1 = m2;
  m1.valor = 3;
}
```


Lo que sucede es que ahora m1, que mantenía una referencia al objeto inicial, pasa a tener una referencia a un nuevo objeto. Por lo tanto los cambios que hagamos en m1 no afectan ya al objeto inicial. Si volvemos a realizar la misma secuencia de salida vemos que no hay cambios en el objeto inicial.


```text
MiClase m2 = pr.new MiClase();
m2.valor = 2;
System.out.println(m2.valor); // Devuelve 2
metodo_referencia2(m2);
System.out.println(m2.valor); // Devuelve 2
```


Por lo tanto siempre debemos de tener en cuenta que los parámetros en [Java](https://www.manualweb.net/java/) se pasan por valor. Pero que existen las referencias a los objetos y por lo tanto podemos tener la falsa sensación de que hay paso de parámetros por referencia en [Java](https://www.manualweb.net/java/).

