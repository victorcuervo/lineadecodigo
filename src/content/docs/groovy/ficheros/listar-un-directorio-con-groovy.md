---
title: "Listar un directorio con Groovy"
description: "Descubre cómo listar un directorio con Groovy de manera sencilla y efectiva. Con una línea de código puedes obtener todos los ficheros rápidamente."
date: 2013-01-04
updatedDate: 2026-02-06
tags: ["file","eachfile"]
slug: groovy/ficheros/listar-un-directorio-con-groovy
type: doc
topic: groovy
id: 56eabbfa-ca95-4389-b930-4f127be98325
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/ficheros/ListarDirectorio.groovy
---

Seguimos exprimiendo al máximo al lenguaje [Groovy](http://www.manualweb.net/groovy/) y en este caso vamos a ver cómo podemos **listar los ficheros de un directorio**.


## Utilizar la clase File con closures


Para ello vamos a utilizar la clase **File** y un **closure**. Y es que aunque parezca mentira podríamos realizar el listado de un **directorio** con [Groovy](http://www.manualweb.net/groovy/) en tan solo una línea.


Ya que existe un método que se llama **eachFile** sobre la clase **File** que recibe un **closure** y por lo tanto el listado de **ficheros** que contenga un directorio.


## Ejecutar el método eachFile


Para ejecutar el método **eachFile** lo haríamos de la siguiente forma:


```groovy
def directorio = "/users/victor/Documents"

print "Listando el directorio $directorio"
new File (directorio).eachFile listar
```


Vemos en el código que estamos llamando al **closure** listar, el cual recibirá la lista de **ficheros**. Así que este **closure** no tiene mucho misterio ya que el **iterador** tendrá el nombre del fichero, así que nos bastará con volcar el valor del **iterador** por pantalla.


```groovy
def listar = { println it }
```


## Versión en una sola línea


Y solucionado, ya tenemos el listado del **directorio** con [Groovy](http://www.manualweb.net/groovy/). Ah! Se me olvidaba, en una sola línea:


```groovy
new File ("/users/victor/Documents").eachFile { println it }
```


¿No os parece impresionantemente sencillo el lenguaje [Groovy](http://www.manualweb.net/groovy/)?

