---
title: Constantes en Java
description: "Artículo que nos explica qué son las constantes en Java. Adjunta varios ejemplos para poder definir las constantes en Java."
lastupdates: 2023-09-17
author: victor_cuervo
---

Si queremos hablar de cómo definir constantes en [Java](https://www.manualweb.net/java/), lo primero que tenemos que saber es ¿qué es una constante en el mundo de la programación?


En el mundo de la programación, una constante es un tipo especial de variable que **mantiene un valor que no puede variar o cambiar durante todo el ciclo de vida del programa**, es decir, **tiene un valor inmutable**. Es decir, una vez que se le asigna un valor a una constante, ese valor permanece inalterable hasta que finaliza el programa.


En el lenguaje de programación [Java](https://www.manualweb.net/java/), las constantes se definen utilizando el modificador `final`. Esta palabra clave, `final`, indica que el valor de esta variable no puede modificarse una vez que se ha establecido inicialmente. Por lo tanto, las constantes en [Java](https://www.manualweb.net/java/) son fundamentales para mantener la coherencia y la integridad de los datos en un programa.


La estructura de definición de una constante en [Java](https://www.manualweb.net/java/) sería la siguiente:


```java
static final nombreConstante = valor;
```


Si nuestra intención es definir las constantes `DIAS_SEMANA` y `DIAS_LABORABLES`, las cuales sabemos con certeza que son variables que no modificarán su valor a lo largo de la ejecución del programa, podemos hacerlo de la siguiente manera:


```java
static final int DIAS_SEMANA = 7;
static final int DIAS_LABORABLES = 5;
```


Una vez que ya tenemos definidas las constantes, si queremos utilizar una constante [Java](https://www.manualweb.net/java/), simplemente deberemos de utilizar su nombre. Así, si queremos utilizar las anteriores constantes, lo haremos de la siguiente forma:


```java
System.out.println("El número de días de la semana son " + DIAS_SEMANA);
System.out.println("El número de días laborables de la semana son " + DIAS_LABORABLES);
```


El código completo del programa de constantes, dónde se incluye tanto la definición como el uso de las mismas, en [Java](https://www.manualweb.net/java/) será el siguiente:


```java
public class ConstanteEnJava {

  static final int DIAS_SEMANA = 7;
  static final int DIAS_LABORABLES = 5;

  public static void main(String[] args) {

    System.out.println("El número de días de la semana son " + DIAS_SEMANA);
    System.out.println("El número de días laborables de la semana son " + DIAS_LABORABLES);

  }
}
```


En este caso vemos que las hemos declarado de tipo `static` en la clase. Si bien podrían ir dentro del método `main` sin ser `static`, si solo las vamos a utilizar dentro del código principal:


```java
public class ConstanteEnJava {

  public static void main(String[] args) {

    final int DIAS_SEMANA = 7;
    final int DIAS_LABORABLES = 5;

    System.out.println("El número de días de la semana son " + DIAS_SEMANA);
    System.out.println("El número de días laborables de la semana son " + DIAS_LABORABLES);

  }
}
```


E incluso podrían definirse dentro de otra clase. Siempre en el ámbito que pensemos que es más útil para nuestro cometido.


Espero que el artículo te haya sido de utilidad.

