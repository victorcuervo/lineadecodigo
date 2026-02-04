---
title: "Pruebas de rendimiento con Java Microbenchmark Harness"
description: "Artículo que nos explica como realizar pruebas de rendimiento con Java Microbenchmark Harness y probar la eficiencia de los diferentes bucles"
date: 2021-02-21
updatedDate: 2026-01-09
tags: ["benchmark","jhm"]
slug: java/rendimiento/pruebas-de-rendimiento-con-java-microbenchmark-harness
type: doc
topic: java
id: ecd7237e-f3e8-4c45-bb7a-5ea12e17a42d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/benchmark/BenchmarkJHM.java
---

Cuando estamos desarrollando nuestros programas es muy probable que, en algún momento, necesitemos realizar una prueba de rendimiento. En este artículo vamos a ver lo sencillo que es crear pruebas de rendimiento con **Java Microbenchmark Harness (JMH)**. **Java Microbenchmark Harness (JMH)** es un pequeño framework para realizar pruebas de rendimiento que nos ofrece las operaciones básicas como preparación de datos, cálculos de medias de rendimiento, posibilidad de dar información en nanosegundos,... y del cual podéis [encontrar mucha documentación en su página en GitHub](https://github.com/openjdk/jmh). En este caso vamos a realizar una prueba de rendimiento para ver qué [tipos de bucles en Java](http://www.manualweb.net/java/sentencias-bucle-java/) son más óptimos, si lo es un [bucle for](http://www.manualweb.net/java/sentencias-bucle-java/#for), un [bucle for each](http://lineadecodigo.com/java/bucle-for-each-en-java/) o un [bucle while](http://www.manualweb.net/java/sentencias-bucle-java/#while). Lo primero será descargar el framework para realizas las pruebas. Para ello, como no, utilizaremos Maven. Así que introduciremos su dependencia dentro de nuestro fichero **pom.xml**.


```xml
<dependency>
  <groupId>org.openjdk.jmh</groupId>
  <artifactId>jmh-core</artifactId>
  <version>1.21</version>
</dependency>
<dependency>
  <groupId>org.openjdk.jmh</groupId>
  <artifactId>jmh-generator-annprocess</artifactId>
  <version>1.21</version>
</dependency>
```


Una vez que lo tenemos descargado lo primero que tenemos que hacer es definir la prueba. Nuestra prueba será lo siguiente. ***"Queremos saber cuanto se tarda en recorrer una lista de N elementos con diferentes tipos de bucles y que en cada iteración se consuma un elemento de la lista."***Así que lo que haremos será crear esa lista y el número de iteraciones que queremos probar sobre la lista.


```java
private static final int N = 10_000_000;
private static List<String> DATA_FOR_TESTING = createData();
```


Necesitamos el tener un método que nos permita cargar los elementos de la lista y que hemos llamado `createData()`.


```java
private static List<String> createData() {
  List<String> data = new ArrayList<>();
  for (int i = 0; i < N; i++) {
    data.add("Number : " + i);
  }
  return data;
}
```


Ahora que tenemos preparados los datos lo que haremos es empezar a crear cada uno de los tipos de pruebas que queremos realizar. Para ello debemos de saber que existe una notación `@Benchmark` que es la que nos permite definir cada uno de las pruebas de la que constará la prueba y que cada prueba recibe un objeto `Blackhole` que será el que nos sirva para grabar los datos de la prueba además de indicarle al optimizador del compilador que no optimice nada para poder tener datos lo más reales posibles.


```java
@Benchmark
public void loopFor(Blackhole bh) {
  for (int i = 0; i < DATA_FOR_TESTING.size(); i++) {
    String s = DATA_FOR_TESTING.get(i); 
    bh.consume(s);
  }
}
```


Vemos que en este caso hemos implementado la prueba del bucle for. Y que cada vez que tenemos el elemento de la lista llamamos al método `.consume()` del objeto `Blackhole`. Las tres pruebas nos quedarian de la siguiente manera:


```java
@Benchmark
public void loopFor(Blackhole bh) {
  for (int i = 0; i < DATA_FOR_TESTING.size(); i++) {
    String s = DATA_FOR_TESTING.get(i); 
    bh.consume(s);
  }
}
  

@Benchmark
public void loopWhile(Blackhole bh) {
  int i = 0;
  while (i < DATA_FOR_TESTING.size()) {
    String s = DATA_FOR_TESTING.get(i);
    bh.consume(s);
    i++;
  }
}

@Benchmark
public void loopForEach(Blackhole bh) {
  for (String s : DATA_FOR_TESTING) {
    bh.consume(s);
  }
}
```


Una vez definidas las pruebas hay que lanzar el proceso de la prueba de rendimiento. Para ello tendremos que lanzar un `Runner` que será el que ejecute las pruebas. Este `Runner` recibirá unas opciones de configuración de la prueba que crearemos mediante un objeto `Options`. Por ejemplo aquí podremos indicarle cuántas pruebas en paralelo queremos ejecutar, de cuantas iteraciones es cada prueba,...


```java
Options opt = new OptionsBuilder()
    .include(BenchmarkJHM.class.getSimpleName())
    .forks(1)
    .build();

new Runner(opt).run();
```


Si es veedad que estas opciones de las pruebas las podemos configurar mediante otras anotaciones como `@Warmup`, `@BenchmarkMode`,... Una vez ejecutadas las pruebas de rendimiento con Java Microbenchmark Harness (JHM) para medir los tipos de bucles podemos ver los resultados por consola.


```shell
Benchmark                 Mode  Cnt   Score   Error  Units
BenchmarkJHM.loopFor      avgt    2  55,863          ms/op
BenchmarkJHM.loopForEach  avgt    2  54,118          ms/op
BenchmarkJHM.loopWhile    avgt    2  57,999          ms/op
```


Dónde, por cierto, podemos ver que [el bucle for each](http://lineadecodigo.com/java/bucle-for-each-en-java/) es el más óptimo.

