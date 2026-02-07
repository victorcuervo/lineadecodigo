---
title: "Escribir un fichero con Groovy"
description: "Aprende cómo escribir un fichero con Groovy de manera sencilla y efectiva. Crea y gestiona ficheros de texto con solo unas líneas de código. ¡Descúbrelo!"
date: 2013-01-02
updatedDate: 2026-02-07
tags: ["fichero","write","file"]
slug: groovy/ficheros/escribir-un-fichero-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8160-a961-c26ef184071c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/ficheros/EscribirFichero.groovy
---

Ya hemos visto lo sencillo que es [acceder al contenido de un fichero con Groovy](http://lineadecodigo.com/groovy/mostrar-el-contenido-de-un-fichero-con-groovy/). Ahora vamos a ver lo sencillo que es el crear un **fichero de texto** con [Groovy](http://www.manualweb.net/groovy/).


## Crear la referencia al fichero


Lo primero será el acceder a la referencia del **fichero** mediante una clase **File**.


```groovy
def fichero = new File("fichero.txt")
```


## Escribir contenido en el fichero


Ahora empezaremos a escribir en el fichero mediante un método **write**, el cual recibirá una cadena de texto como parámetro.


```groovy
fichero.write("Contenido del fichero")
```


Con estas dos sencillas líneas ya hemos escrito en un fichero con [Groovy](http://www.manualweb.net/groovy/). Extremadamente sencillo, ¿verdad?

