---
title: "Crear una lista en Groovy"
description: "Descubre lo fácil que es crear una lista en Groovy y cómo recorrerla usando un bucle for. Aprende esta habilidad esencial para potenciar tus scripts."
date: 2012-12-10
updatedDate: 2026-02-07
tags: ["lista","for-in","println"]
slug: groovy/listas/crear-una-lista-en-groovy
type: doc
topic: groovy
id: 3daa92cd-5353-427a-b83b-e6573fb450c7
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/listas/ListarLista.groovy
---

Una de las cosas sencillas que nos permite el lenguaje Groovy es poder crear una lista. Para poder crear una lista en Groovy solo tenemos que definir una variable e indicar todos los valores de la lista entre corchetes. La estructura sería la siguiente:


```groovy
def lista = ["valor1","valor2",...,"valorN"]
```


Vemos que hemos utilizado el modificador **def** para definir la variable que contendrá los valores de la lista. El modificador **def** lo utilizaremos para definir las variables genéricas. 


Ahora, si queremos crear una lista de nombres podemos hacerlo de la siguiente forma:


```groovy
def lista = ["Victor","Julio","María","Ignacio","Virginia"]
```


## Recorrer la lista


Ahora vamos a recorrer la lista. En este caso vamos a apoyarnos en una estructura **for** para poder recorrerla.


```groovy
for (elemento in lista)
  println elemento
```


Por cada elemento que hay en la lista estamos mostrando su nombre en la pantalla mediante el método **println**. 


Con este ejemplo de crear una lista en Groovy vemos lo simple que es manejar estructuras en este lenguaje.

