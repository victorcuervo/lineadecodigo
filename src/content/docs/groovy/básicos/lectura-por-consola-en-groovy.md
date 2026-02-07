---
title: "Lectura por consola en Groovy"
description: "Aprende a realizar lecturas por consola en Groovy utilizando closures de forma sencilla y efectiva. ¡Descubre cómo interactuar con el usuario fácilmente!"
date: 2012-12-19
updatedDate: 2026-02-07
tags: ["in","withreader","readline"]
slug: groovy/basicos/lectura-por-consola-en-groovy
type: doc
topic: groovy
id: 29eb932f-7eb2-46d7-911e-18331dfc8dad
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/basicos/LecturaPorConsola.groovy
---

Vamos a ver cómo podemos **leer caracteres por consola** utilizando [Groovy](http://www.manualweb.net/groovy/). Al igual que en el [resto de ejemplos de Groovy](http://lineadecodigo.com/categoria/groovy/) nos vamos a apoyar en los **closures** para poder realizar la lectura por consola.


## Utilizar closures con System.in


En este caso vamos a aplicar un objeto **closure** sobre el elemento [**System.in**](http://system.in/), el cual representa la **consola**.


El método que nos permite asociar el **closure** al [**System.in**](http://system.in/) es **withReader**:


```groovy
System.in.withReader leerConsola
```


## Definir el closure para leer


Ahora pasamos a definir el **closure** leerConsola. Como todos los closures tendremos un iterador **it** con los datos de iteración. En este caso los datos de iteración es el acceso directo al contenido insertado en la consola. Apoyándonos en el método **readLine()** obtendremos el contenido del usuario.


```groovy
print "Dame un dato"
def texto = it.readLine();
```


## Mostrar el contenido leído


Ya solo nos queda volcar el contenido de lo leído por consola (si es que no queremos hacer otra cosa con ello).


```groovy
print "La cadena insertada ha sido $texto"
```


## Código completo


La definición global del **closure** leerConsola será la siguiente:


```groovy
def leerConsola = {
	print "Dame un dato"
	def texto = it.readLine();
	print "La cadena insertada ha sido $texto"
}
```


Como se puede ver en el código, realizar una lectura por consola en [Groovy](http://www.manualweb.net/groovy/) es realmente sencillo gracias a los closures.

