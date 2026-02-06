---
title: "Listar lista con closures en Groovy"
description: "Aprende a listar listas con closures en Groovy y simplifica tu código eliminando bucles. Descubre la potencia de los closures y optimiza tu programación."
date: 2012-12-11
updatedDate: 2026-02-06
tags: ["closure","each"]
slug: groovy/listas/listar-lista-con-closures-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81da-a6f2-ec5947fb92aa
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/listas/ListarListaClosures.groovy
---

En el anterior ejemplo vimos lo sencillo que es [crear una lista y recorrerla en Groovy](http://lineadecodigo.com/groovy/crear-una-lista-en-groovy/). Ahora, [tal y como nos comentó Ariel](52081), vamos a ver lo sencillo que es **recorrer una lista con closures** en [Groovy](http://www.manualweb.net/groovy/).


Veremos que los **closures** nos evitan tener que crear **bucles** ya que contienen un **iterador** en sí mismos.


## Crear la lista


Lo primero será crear la **lista** en [Groovy](http://www.manualweb.net/groovy/).


```groovy
def lista = ["Victor","Julio","María","Ignacio","Virginia"]
```


## Definir el closure


Ahora definimos el **closure**. El **closure** de [Groovy](http://www.manualweb.net/groovy/) es una función que tiene un **iterador**. El **iterador** es el elemento que contiene la información de cada una de las iteraciones del elemento. En el caso de la lista el **iterador** contendrá el elemento de la lista.


Así que nuestro **closure** simplemente tendrá que imprimir el contenido del **iterador** por pantalla:


```groovy
def imprimir ={println it}
```


## Asociar el closure a la lista


Ya solo nos queda asociar el **closure** a la **lista**. Para ello utilizamos el método **each** al cual le asignaremos el **closure** que se tiene que ejecutar.


```groovy
lista.each imprimir
```


Así, en pocas líneas y sin tener que utilizar un **bucle** hemos recorrido la **lista** con un **closure** en [Groovy](http://www.manualweb.net/groovy/). Por cierto, el **closure** lo podremos utilizar con otros elementos de nuestro programa. ¿Ves la utilidad de los **closures** de [Groovy](http://www.manualweb.net/groovy/)?

