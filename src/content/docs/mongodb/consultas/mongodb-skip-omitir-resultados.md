---
title: "MongoDB Skip - Omitir resultados"
description: "Descubre cómo utilizar MongoDB Skip para omitir resultados en tus consultas y optimiza tus búsquedas de manera eficiente y efectiva en tu base de datos."
date: 2014-02-09
updatedDate: 2026-01-28
tags: ["find","skip"]
slug: mongodb/consultas/mongodb-skip-omitir-resultados
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/skip.js
topic: mongodb


---

Cuando realizamos una [consulta MongoDB Find](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/), esta, nos devuelve el conjunto de documentos que cumplen la búsqueda. Si bien, mediante **MongoDB Skip** podemos omitir resultados y no recuperar ciertos documentos. Pero vamos por pasos.


## Sintaxis del método .skip()


Lo primero será realizar una consulta:


```javascript
db.coleccion.find(filtro);
```


A esta consulta con el método `.find()` le podemos añadir el método **MongoDB Skip**. La sintaxis del método **MongoDB Skip** es muy sencilla:


```javascript
db.coleccion.find(filtro).skip(numero_elementos);
```


Lo que le pasamos como parámetro al método **MongoDB Skip** es el número de elementos que queremos omitir antes de devolver el contenido.


> El método **MongoDB Skip** puede ser costoso ya que aunque omitamos los documentos, estos están siendo leidos de la base de datos, con su consecuente coste. Así que intenta siempre acceder a los documentos acotados que necesites.


## Ejemplo de uso


Así que si al realizar una consulta sobre nuestra colección de ciudades, si queremos omitir dos elementos escribiremos lo siguiente:


```javascript
cursor = db.ciudades.find().skip(2);
```


Al recorrer el cursor veremos que los dos primeros documentos que cumplan el filtro (en este caso, todos los documentos), no aparecen.


## Recorrer el cursor


```javascript
while (cursor.hasNext()){
  printjson(cursor.next());
}
```


Muy sencillo el uso del método **MongoDB Skip** para omitir documentos en las consultas.

