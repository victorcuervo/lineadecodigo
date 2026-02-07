---
title: "Definir un mapa con Groovy"
description: "Descubre cómo definir un mapa en Groovy de manera sencilla y efectiva, utilizando pares clave-valor y closures para recorrer su contenido sin complicaciones."
date: 2012-12-26
updatedDate: 2026-02-07
tags: ["closure","mapa","each"]
slug: groovy/mapas/definir-un-mapa-con-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-81ae-a4ed-c1b1f0e9b6a0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/listas/ListarMapa.groovy
---

Ya vimos lo sencillo que es [definír listas en Groovy](http://lineadecodigo.com/groovy/crear-una-lista-en-groovy/), ahora vamos a ver que también es muy sencillo definir un mapa. Entendemos que un **mapa** es un conjunto de elementos **clave/valor**.


Por ejemplo el mapa:


```groovy
c1 - Victor
c2 - Julio
c3 - Pilar
c4 - Patricia
```


## Definir un mapa en Groovy


Para definir un mapa en [Groovy](http://www.manualweb.net/groovy/) añadimos los pares clave/valor entre corchetes. Por otro lado entre la clave y el valor utilizamos dos puntos. La estructura sería la siguiente:


```groovy
def mapa = ["clave1":"valor1","clave2":"valor2","clave3":"valor3",…,"claveN":"valorN"]
```


Así, con los datos de ejemplo que indicamos antes, el mapa en [Groovy](http://www.manualweb.net/groovy/) se definirá de la siguiente forma:


```groovy
def mapa = ["c1":"Victor","c2":"Julio","c3":"Elena","c4":"Patricia"]
```


## Recorrer el mapa con closures


Una vez que tenemos el mapa vamos a ser cómo lo recorremos. Para ello vamos a utilizar los **closures**. El closure se lo podemos asignar al mapa mediante el método **.each**


```groovy
mapa.each imprimirMapa
```


Lo siguiente que tenemos que saber del closure para el mapa es que el iterado puede acceder a dos valores **.key** y **.value** que son los que nos proporcionan el contenido de la clave y el valor en cada iteración. 


Así definimos el closure para recorrer nuestro mapa de la siguiente forma:


```groovy
def imprimirMapa = {println "$it.key = $it.value" }
```


Vemos que es muy sencillo el poder recorrer el contenido del mapa en [Groovy](http://www.manualweb.net/groovy/) con sus closures.

