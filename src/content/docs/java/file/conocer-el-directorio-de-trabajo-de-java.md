---
title: "Conocer el directorio de trabajo de Java"
description: "El directorio de trabajo de Java se obtiene con System.getProperty(\"user.dir\") mostrando su ubicación actual."
date: 2011-09-14
updatedDate: 2026-01-11
tags: ["Java System","Java Básicos","properties","getproperty","directorio"]
slug: java/file/conocer-el-directorio-de-trabajo-de-java
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/DirectorioTrabajo.java
topic: java

---

El directorio de trabajo de [Java](https://www.manualweb.net/java/) es el directorio dónde se está ejecutando el programa [Java](https://www.manualweb.net/java/). 


## Obtener el directorio de trabajo


Si queremos conocer cual es el directorio de trabajo del programa [Java](https://www.manualweb.net/java/) podemos utilizar las propiedades del sistema. Para manejar las propiedades del sistema tenemos la clase System y en concreto el método .getProperty().


## Propiedad user.dir


La propiedad del sistema que nos permite conocer el directorio de trabajo de [Java](https://www.manualweb.net/java/) es "user.dir". 


Así el código será el siguiente:


```java
String directorioTrabajo = System.getProperty("user.dir");
System.out.println("El directorio de trabajo es: " + directorioTrabajo);
```


## Otras propiedades útiles


¿Qué otras propiedades del sistema conoces y crees que pueden ser útiles?

