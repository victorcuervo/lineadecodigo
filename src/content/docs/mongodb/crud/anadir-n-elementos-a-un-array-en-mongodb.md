---
title: "Añadir N elementos a un array en MongoDB"
description: "Aprende a añadir N elementos a un array en MongoDB de manera eficiente utilizando los operadores $push y $each para optimizar tus actualizaciones."
date: 2016-01-21
updatedDate: 2026-01-28
tags: ["db","update","push","each"]
slug: mongodb/crud/anadir-n-elementos-a-un-array-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_mongodb/blob/master/mongodb-array/insertar-n-elementos-array.js
topic: mongodb


---

Si ya has leído nuestro ejemplo sobre [cómo añadir un valor a un array en MongoDB](http://lineadecodigo.com/mongodb/anadir-n-elementos-a-un-array-en-mongodb/) y lo has probado, habrás visto que tendríamos que insertar de elemento en elemento, ejecutando cada vez la operación update.


En este ejemplo vamos a ver cómo podemos añadir N elementos a un array en [MongoDB](https://www.manualweb.net/mongodb/).


## Documento de partida


Volvemos a partir de nuestro documento que representa una ciudad:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5f"),
	"ciudad" : "Zaragoza",
	"habitantes" : 679624,
	"monumentos" : [
		"Basílica del Pilar"
	]
}
```


Lo que buscamos es añadir N elementos a un array en [MongoDB](https://www.manualweb.net/mongodb/) pero de una sola vez. En este caso vamos a añadir más monumentos a la ciudad de "Zaragoza".


## Operadores $push y $each


Para hacer la inserción sobre el array seguiremos utilizando el operador `$push`:


```javascript
{$push:{campo:elemento}}
```


Pero vamos a necesitar de otro operador, en este caso de `$each` para poder especificar una lista de elementos.


De esta forma la estructura de inserción se quedará de la siguiente forma:


```javascript
{$push:{campo:{$each:[elemento1,elemento2,...,elementoN]}}}
```


## Actualizar el documento


La actualización del documento la realizamos con el método `update` y nos quedará de la siguiente forma:


```javascript
db.ciudades.update(
    {ciudad:"Zaragoza"},
    {$push:{monumentos:
      {$each:["SEO",
              "Palacio Aljafería",
              "Murallas Romanas"]
      }
    }
})
```


## Resultado final


Y al ejecutarlo el documento resultante será:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5f"),
	"ciudad" : "Zaragoza",
	"habitantes" : 679624,
	"monumentos" : [
		"Basílica del Pilar",
		"SEO",
		"Palacio Aljafería",
		"Murallas Romanas"
	]
}
```


Vemos que lo que hace es añadir los elementos dentro del array conservando el elemento existente. Así ya hemos visto como manejar los operadores `$push` y `$each` para poder añadir N elementos a un array en [MongoDB](https://www.manualweb.net/mongodb/).

