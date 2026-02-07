---
title: "Definir una variable en Groovy"
description: "Descubre cómo definir una variable en Groovy y aprovecha su flexibilidad para crear programas más dinámicos y eficientes en tu desarrollo."
date: 2012-11-13
updatedDate: 2026-02-07
tags: ["cadena","def","string","int"]
slug: groovy/basicos/definir-una-variable-en-groovy
type: doc
topic: groovy
id: fd20d5b6-cff7-42d8-b2c8-2f94d402406d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/DefinirVariable.groovy
---

Hoy vamos con un ejemplo sencillo con [Groovy](http://www.manualweb.net/groovy/), una vez que hemos visto el primer programa de cómo hacer un [Hola Mundo en Groovy](http://lineadecodigo.com/groovy/hola-mundo-en-groovy/).


## Definir una variable en Groovy


Una **variable** nos servirá para guardar un valor temporal que podremos utilizar de forma posterior en nuestro programa [Groovy](http://www.manualweb.net/groovy/). Para definir una variable en [Groovy](http://www.manualweb.net/groovy/) utilizamos el modificador **def** más el nombre de la variable. Así, si queremos definir una variable nombre lo haremos de la siguiente forma:


```groovy
def nombre
```


A esta variable de [Groovy](http://www.manualweb.net/groovy/) la podemos asignar un valor mediante el símbolo igual.


```groovy
def nombre = "Víctor"
```


Lo bueno de las variables en [Groovy](http://www.manualweb.net/groovy/) es que pueden cambiar de tipo. Igual que a la variable nombre le hemos asignado una cadena, podemos asignarle un número.


```groovy
//Asignamos a la variable un número
nombre = 123
```


En ambos casos podemos utilizar la variable [Groovy](http://www.manualweb.net/groovy/) en cadenas de texto anteponiendo el símbolo dolar. Así si queremos mostrar el contenido de la variable nombre por pantalla utilizaremos la siguiente sentencia:


```groovy
println "Hola $nombre"
```


## Tipos de datos en variables


El modificador **def** se utiliza cuando no sabemos el tipo de la variable. Es decir, es un modificador genérico. Si sabemos el tipo de la variable, podemos utilizar este delante de su definición.


```groovy
String nombre = "Víctor"
```


En este caso podemos seguir haciendo conversiones mediante asignación. Es decir, si asignamos 123 a la variable nombre no pasará nada, ya que se puede convertir número a cadena.


```groovy
//Convertimos un número en cadena
nombre = 123
```


Pero hay conversiones en [Groovy](http://www.manualweb.net/groovy/) que no se pueden hacer como pasar de una cadena a un número.


```groovy
int numero = 123
numero = "Hola"
```


Espero que con esto ya sepas como definir una variable en [Groovy](http://www.manualweb.net/groovy/).

