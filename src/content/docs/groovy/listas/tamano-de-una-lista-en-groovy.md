---
title: "Tamaño de una lista en Groovy"
description: "Descubre cómo obtener el tamaño de una lista en Groovy de manera sencilla y eficiente, optimizando tu código al máximo. ¡No te lo pierdas!"
date: 2012-12-27
updatedDate: 2026-02-06
tags: ["lista","size"]
slug: groovy/listas/tamano-de-una-lista-en-groovy
type: doc
topic: groovy
id: e7fb3394-d755-4a2e-a782-0e4e78b8f577
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/listas/ElementosDeLaLista.groovy
---

Ya hemos visto lo sencillo que es [crear una lista en Groovy](http://lineadecodigo.com/groovy/crear-una-lista-en-groovy/) y [cómo recorrerla](http://lineadecodigo.com/groovy/listar-lista-con-closures-en-groovy/), sobre todo si nos apoyamos en closures.


Ahora vamos a ver cómo podemos obtener cierta información de la **lista**. En este caso vamos a ver cómo **obtener el tamaño de una lista** en [Groovy](http://www.manualweb.net/groovy/).


## Crear la lista


Lo primero será crear la **lista**:


```groovy
def lista = ["Victor","Julio","María","Ignacio","Virginia"]
```


## Usar el atributo size


El **atributo** que nos da la información sobre el **tamaño** es **size** sobre la **variable** que representa a la **lista**. Así simplemente tendremos que escribir lo siguiente:


```groovy
println lista.size
```


## Usar size en una cadena


Si queremos utilizar la **variable** dentro de una **cadena** podemos hacerlo anteponiendo un dólar a la **variable** que tiene la **lista**:


```groovy
println "El número de elementos de la lista es $lista.size"
```


Un código muy corto y sencillo para obtener el tamaño de una lista en [Groovy](http://www.manualweb.net/groovy/).

