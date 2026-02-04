---
title: "Conocer el Sistema Operativo con Java"
description: "Cómo podemos conocer el Sistema Operativo con Java en el que se está ejecutando nuestra aplicación."
date: 2009-02-18
updatedDate: 2026-01-11
tags: ["properties","java-system","getproperty"]
slug: java/system/conocer-el-sistema-operativo-con-java
type: doc
topic: java
id: 65387058-f6b9-421f-be4f-688157746bce
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/system/SistemaOperativo.java
---

La clase System de [Java](https://www.manualweb.net/java/) nos va a permitir de una forma sencilla conocer el sistema operativo con Java. Y es que accediendo a las propiedades del sistema podemos encontrarnos con la que nos da el nombre del sistema operativo. Lo primero que tenemos que saber es que la clase System.getProperty.


```java
System.getProperty();
```


La propiedad del sistema que nos permitirá conocer el sistema operativo con [Java](https://www.manualweb.net/java/) es "os.name", la cual pasaremos al método .getProperty como parámetro.


```java
String sSistemaOperativo = System.getProperty("os.name");
System.out.println(sSistemaOperativo);
```


Solo nos quedará volcarla a la consola para comprobar que el valor coincide con el nombre de nuestro sistema operativo.

