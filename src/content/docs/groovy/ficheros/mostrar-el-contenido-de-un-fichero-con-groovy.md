---
title: "Mostrar el contenido de un fichero con Groovy"
description: "Descubre cómo mostrar el contenido de un fichero de manera sencilla con Groovy y aprovecha su potencia para simplificar tu programación."
date: 2012-12-29
updatedDate: 2026-02-06
tags: ["file","eachline"]
slug: groovy/ficheros/mostrar-el-contenido-de-un-fichero-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-810f-9fde-fc68ca93e158
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/ficheros/LeerContenidoFichero.groovy
---

Cuando programamos en lenguajes como [Java](https://www.manualweb.net/java/) acceder al **contenido de un fichero** nos obliga a generar streams, filestreams,… un conjunto de artefactos que nos complican la lectura del contenido de un fichero.


## La simplicidad de Groovy


En cambio, en [Groovy](http://www.manualweb.net/groovy/), podemos acceder a un **fichero** y mostrar su **contenido** de una forma sencilla. Y nuevamente nos apoyaremos en el sistema de **closures** de [Groovy](http://www.manualweb.net/groovy/).


## Obtener la referencia al fichero


Lo primero será obtener la referencia al **fichero** con un elemento **File**. Lo bueno de [Groovy](http://www.manualweb.net/groovy/) es que **File** está en el core y no es necesario importar ninguna librería de ficheros.


```groovy
new File ("text.txt")
```


## Asociar el closure con eachLine


Ahora asociaremos el **closure** que tratará el **fichero**. El fichero lo tratará por **filas**, así que utilizaremos el método **eachLine** para asociar el **closure**.


```groovy
new File ("text.txt").eachLine listarFichero
```


## Definir el closure


En el **closure** tendremos el **iterador** el cual alberga el **contenido** de cada una de las **filas**. Así, podríamos escribir nuestro **closure** como:


```groovy
def listarFichero = { println it}
```


Algo realmente sencillo.


## Añadir número de línea


Por otro lado, si quisiéramos añadir el número de **fila** que estamos tratando podríamos crear una variable fila, la cual iríamos incrementando en cada una de las iteraciones del **closure**.


```groovy
def linea = 1
def listarFichero = { println "$linea - $it"; linea++; }
```


Revisa cualquier código [Java](https://www.manualweb.net/java/) que acceda al contenido de un fichero y te darás de la potencia de [Groovy](http://www.manualweb.net/groovy/).

