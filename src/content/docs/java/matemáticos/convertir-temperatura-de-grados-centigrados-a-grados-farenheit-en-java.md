---
title: "Convertir temperatura de grados Centígrados a grados Farenheit en Java"
description: "Código fuente que nos explica cómo convertir temperatura de grados Centígrados a grados Farenheit en Java"
date: 2013-01-17
updatedDate: 2026-01-09
tags: ["centigrados","farenheit","conversor"]
slug: java/matematicos/convertir-temperatura-de-grados-centigrados-a-grados-farenheit-en-java
author: xhrist14n
type: doc
id: bb4b4c82-1026-468f-8746-160139b1d99f
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ConversorTemperaturas.java
---

Como ya se sabe las conversiones de datos generalmente son datos numéricos a otro numero en especifico según la entrada dada. En este ejemplo vamos a ver cómo convertir temperatura de grados centígrados a grados Farenheit en [Java](https://www.manualweb.net/java/). Lo primero que hacemos es definir una temperatura en grados centígrados:


```java
double centigrades=37;
```


Este tipo de datos como son los valores de grados centígrados o farenheit están expresados en decimales por eso **se hace necesario el uso de double para expresar los grados**. La operación [Java](https://www.manualweb.net/java/) para convertir de grados Centigrados a Farenheit es en base a los grados centígrados procedemos a hacer la resta de la quinta parte de los grados al doble de los grados y luego le agregamos 32 al resultado. El método [Java](https://www.manualweb.net/java/) que nos convierte de grados centígrados a Farenheit es el siguiente:


```java
public static double centigradesToFarenheit(double degrees){
  double result=degrees;
  result=result*2-result/5;
  result=result+32;
  return result;
}
```


De igual manera que si queremos convertir los grados Farenheit a grados centígrados lo que hacemos es restar a los grados Farenheit 32, al resultado multiplicarlo por 5 y el total dividirlo por 9. Así el método [Java](https://www.manualweb.net/java/) que nos resultará es el siguiente:


```java
public static double farenheitToCentigrades(double degrees){
  double result=0;
  result=degrees-32;
  result*=5;
  result/=9;
  return result;
}
```


Bueno ahora solo nos queda ver como funciona esto :


```java
double centigrades=37;
double farenheit=ConversorTemperatura.centigradesToFarenheit(centigrades);
System.out.println(farenheit);
```


Ya hemos visto cómo **convertir temperatura de grados centígrados a grados Farenheit en Java**.

