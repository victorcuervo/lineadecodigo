---
title: "Uso de @GrabResolver en Groovy"
description: "Descubre cómo usar @GrabResolver en Groovy para cargar librerías desde repositorios Maven de forma eficiente y potenciar tus proyectos sin complicaciones."
date: 2013-02-01
updatedDate: 2026-02-06
tags: ["grabresolver","grapes","maven"]
slug: groovy/grapes/uso-de-grabresolver-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81d6-a497-cd403fde86cb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/grape/DefinirGrabResolver.groovy
---

El otro día [Ariel](http://lineadecodigo.com/author/ariel/) nos comentaba la potencia del [uso de los @Grapes en Groovy](http://lineadecodigo.com/groovy/uso-de-grapes-en-groovy/), los cuales nos permiten **cargar dinámicamente** una **librería** sin necesidad de que esta esté cargada en el **classpath**.


## Cargar librerías con @Grape


Para cargar un **@Grape** en [Groovy](http://www.manualweb.net/groovy/) lo podemos hacer de la siguiente forma:


```groovy
@Grapes(@Grab(group='com.itextpdf', module='itextpdf', version='5.1.2'))
```


A partir de este momento podemos utilizar la **librería iText** sin ningún problema, ya que la hemos cargado dinámicamente.


## Usar @GrabResolver para repositorios Maven


Pero [Groovy](http://www.manualweb.net/groovy/) va un paso más allá y nos permite cargar la **librería** directamente desde un **repositorio Maven**. Para ello nos proporciona la **anotación @GrabResolver**.


La **anotación @GrabResolver** simplemente indica un **nombre** del **repositorio** al que queremos conectarnos y la raíz del **repositorio** o **root**. En el caso de la **librería iText** el **repositorio Maven** está en '[http://maven.itextpdf.com/](http://maven.itextpdf.com/)', por lo que la conexión del **@GrabResolver** quedará de la siguiente manera:


```groovy
@GrabResolver(name='itextpdf', root='{{http://maven.itextpdf.com/'})
```


## Código completo


Todo nuestro código con conexión a **Grapes** en [Groovy](http://www.manualweb.net/groovy/) será el siguiente:


```groovy
@GrabResolver(name='itextpdf', root='{{http://maven.itextpdf.com/'})
@Grapes(@Grab(group='com.itextpdf', module='itextpdf', version='5.1.2'))
```


## Buscar dependencias Maven


Para utilizar alguna **librería** podéis buscar las **dependencias** en [http://mvnrepository.com/](http://mvnrepository.com/)


Como podéis ver el uso de **@GrabResolver** nos ayuda mucho en el uso de **librerías** de terceros con [Groovy](http://www.manualweb.net/groovy/).

