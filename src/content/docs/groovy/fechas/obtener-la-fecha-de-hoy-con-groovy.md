---
title: "Obtener la fecha de hoy con Groovy"
description: "Descubre cómo obtener la fecha de hoy con Groovy de manera sencilla y efectiva, aprovechando la integración directa de la clase Date en el lenguaje."
date: 2012-12-16
updatedDate: 2026-02-06
tags: ["date","fecha","println"]
slug: groovy/fechas/obtener-la-fecha-de-hoy-con-groovy
type: doc
topic: groovy
id: 04677663-45c2-483b-8a41-ca0e66d80cf5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/ImprimirFecha.groovy
---

Cuando estamos creando un programa en [Java](https://www.manualweb.net/java/) y queremos **obtener la fecha de hoy** lo primero que tenemos que hacer es importar la clase [java.util.Date](http://java.util.date/). Una vez hecha esta importación hay que crear una instancia del elemento [Date](https://www.w3api.com/Java/Date-java-util/) para acabar volcándolo en pantalla.


## Obtener la fecha en Java


En [Java](https://www.manualweb.net/java/) **obtener la fecha de hoy** sería de la siguiente forma:


```java
import java.util.Date;

public class ImprimirFecha {

	public static void main(String[] args) {

		Date fecha = new Date();
		System.out.println(fecha);
	}

}
```


## Obtener la fecha en Groovy


Ahora vamos a ver lo sencillo que es hacerlo en [Groovy](http://www.manualweb.net/groovy/) y esto es debido a que la clase **Date** está directamente en el core del lenguaje. Así que solo tenemos que asignarle el valor de la clase **Date** a una **variable**.


```groovy
hoy = new Date()
```


Ya solo tendremos que mostrarla por pantalla:


```groovy
println hoy
```


Ya veis que es realmente sencillo obtener la fecha de hoy con [Groovy](http://www.manualweb.net/groovy/).

