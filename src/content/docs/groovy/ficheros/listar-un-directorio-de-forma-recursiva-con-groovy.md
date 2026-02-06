---
title: "Listar un directorio de forma recursiva con Groovy"
description: "Descubre cómo listar un directorio de forma recursiva en Groovy de manera sencilla y efectiva, optimizando tu código sin complicaciones innecesarias."
date: 2013-01-06
updatedDate: 2026-02-06
tags: ["file","eachfile","eachfilerecurse"]
slug: groovy/ficheros/listar-un-directorio-de-forma-recursiva-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-815e-9acf-d0a03fcf47ff
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/ficheros/ListarDirectorioRecursivamente.groovy
---

Si echamos un vistazo a un programa en Java sobre [cómo listar los ficheros de un directorio](http://lineadecodigo.com/java/listar-un-directorio-con-java/) y el relacionado programa que [lista un directorio de forma recursiva](http://lineadecodigo.com/java/listar-un-directorio-de-forma-recursiva-en-java/) veremos que el primero puede ser sencillo, pero que listar de forma recursiva nos vemos obligado a realizar un grupo un poco más complejo de bucles.


## La potencia de Groovy para recursividad


Es en el caso de **listar un directorio de forma recursiva** dónde vemos, otra vez, la potencia de [Groovy](http://www.manualweb.net/groovy/).


## Listar un directorio con eachFile


Y es que si para **listar un directorio** en [Groovy](http://www.manualweb.net/groovy/) utilizábamos un **closure** de la siguiente forma:


```groovy
def listar = { println it }
def directorio = "/users/victor/Documents"

println "Listando el directorio $directorio"
new File (directorio).eachFile listar
```


## Listar recursivamente con eachFileRecurse


El **listar un directorio de forma recursiva** con [Groovy](http://www.manualweb.net/groovy/) no nos llevará el utilizar ningún **bucle**, si no que simplemente deberemos de cambiar el método **eachFile** por **eachFileRecurse** y ya lo tenemos resuelto.


```groovy
def listar = { println it }
def directorio = "/users/victor/Documents"

print "Listando el directorio $directorio de forma recursiva"
new File (directorio).eachFileRecurse listar
```


## Explicación del código


Lo que hemos hecho es instanciar el **directorio** raíz sobre el que queremos empezar la **recursividad**. Para ello utilizamos la clase **File**. Y sobre este objeto utilizar el método **eachFileRecurse**.


Cabe indicar que el **closure** que utilizamos es el mismo que cuando listábamos el directorio, ya que el **iterador** tiene el **fichero** y nosotros lo mostramos por consola.

