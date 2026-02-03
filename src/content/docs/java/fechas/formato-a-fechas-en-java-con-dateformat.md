---
title: "Formato a Fechas en Java con DateFormat"
description: "Se explica cómo dar formato a fechas en Java utilizando la clase DateFormat y Locale."
date: 2012-03-16
updatedDate: 2026-01-09
tags: ["date","fechas","dateformat","format","java-util","locale"]
slug: java/fechas/formato-a-fechas-en-java-con-dateformat
author: Emmanuel Ramos
type: doc
topic: java
id: 7e809b47-4bfa-4775-8268-e5cef36b1143
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/dates/FormatoDeFechas.java
---

En el día de hoy les explicaré cómo formatear una fecha en [Java](https://www.manualweb.net/java/). Lo primero que haremos será usar una de las clases del paquete `java.text`. Esta clase es `DateFormat`. De igual manera utilizaremos la clase [Date](https://www.w3api.com/Java/Date-java-util/) y `Locale` del paquete `java.util`.


Un detalle de la clase [DateFormat](https://www.w3api.com/Java/Date-java-util/Format) de [Java](https://www.manualweb.net/java/) es que es abstracta, por lo cual usaremos métodos estáticos para que nos devuelvan una instancia de la clase.


> 💡 En caso de usar el código, recuerda realizar los import de las clases necesarias.


## Crear una instancia de Date


Lo primero crearemos una instancia de la clase [Date](https://www.w3api.com/Java/Date-java-util/):


```java
Date fecha = new Date();
```


## Configurar el Locale


Crearemos una instancia de la clase `Locale`. Como ven, ingresé parámetros al constructor los cuales especifican el lenguaje y país respectivamente. Ingresé al constructor parámetros para que muestre la fecha en Brasil (pt, BR):


```java
Locale brasil = new Locale("pt", "BR");
```


## Crear el array de DateFormat


Ahora creamos un array de [DateFormat](https://www.w3api.com/Java/Date-java-util/Format):


```java
DateFormat[] df = new DateFormat[6];
```


A cada una de las posiciones le damos una instancia de [DateFormat](https://www.w3api.com/Java/Date-java-util/Format). El método [getDateInstance](https://www.w3api.com/Java/Date-java-util/Format.getDateInstance()) regresa una instancia:


```java
df[0] = DateFormat.getInstance();
df[1] = DateFormat.getTimeInstance();
df[2] = DateFormat.getDateInstance();
df[3] = DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT);
df[4] = DateFormat.getDateTimeInstance(DateFormat.MEDIUM, DateFormat.MEDIUM);
df[5] = DateFormat.getDateInstance(DateFormat.LONG, brasil);
```


A cada una de las instancias le pasamos constantes. De cualquier forma, [hay más constantes las cuales podrías revisar en el API y hacer pruebas](http://docs.oracle.com/javase/1.4.2/docs/api/java/text/DateFormat.html).


A la última de las instancias le pasamos el locale para que me dé formato en el país.


> ⚠️ Recordar que como [DateFormat](https://www.w3api.com/Java/Date-java-util/Format) es abstracta no podemos hacer esto: `new DateFormat()`.


## Formatear la fecha


Por último hacemos un loop para iterar sobre el array y damos el formato a la fecha que habíamos creado arriba:


```java
for (int i = 0; i < df.length; i++) {
    System.out.println(df[i].format(fecha));
}
```

