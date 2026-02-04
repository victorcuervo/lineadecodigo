---
title: "Consultas MongoDB Like"
description: "Aprende a realizar consultas MongoDB like para filtrar datos con expresiones regulares y optimiza tus búsquedas de manera efectiva y sencilla."
date: 2014-02-02
updatedDate: 2026-01-28
tags: ["find","like","expresiones_regulares"]
slug: mongodb/consultas/consultas-mongodb-like
type: doc
topic: mongodb
id: 162e06f6-3109-498c-a324-ad8b0b9187d1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/like.js
---

Cuando accedemos a los datos de los campos de un documento en [MongoDB](https://www.manualweb.net/mongodb/) podemos encontrarnos la necesidad de **realizar consultas MongoDB like**. Es decir, realizar consultas por cadenas similares de texto.


Por ejemplo, nombres que empiecen por una letra o letras, palabras que contengan una cierta cadena de caracteres...


## Sintaxis de consultas Like


Las consultas [MongoDB](https://www.manualweb.net/mongodb/) like se resuelven mediante expresiones regulares. Lo que realizaremos mediante la siguinte sintaxis:


```javascript
db.coleccion.find({campo:expresión_regular});
```


Para los patrones de las expresiones regulares [MongoDB](https://www.manualweb.net/mongodb/) utiliza ["Perl Compatible Regular Expressions" (PCRE)](http://www.pcre.org/).


## Patrones de expresiones regulares


De esta forma tendremos las siguientes similitudes con los patrones LIKE:


| **Patrón LIKE** | **Expresión Regular** |
| --------------- | --------------------- |
| cadena%         | /^cadena/             |
| %cadena%        | /cadena/              |
| %cadena         | /cadena$/             |

undefined
## Ejemplos de consultas


De esta forma la sentencia para realizar consultas [MongoDB](https://www.manualweb.net/mongodb/) like será la siguiente:


```javascript
cursor = db.ciudades.find({ciudad:/^M/});
```


En este caso hemos realizado un filtro LIKE de ciudades que empiecen por M.


> A la hora de utilizar las expresiones regulares, los índices solo se utilizarán de forma eficiente cuando utilizemos la forma /^cadena/


Otros ejemplos podrían ser ciudades que contengan una "r":


```javascript
cursor = db.ciudades.find({ciudad:/r/});
```


O ciudades que acaben en d:


```javascript
cursor = db.ciudades.find({ciudad:/d$/});
```


## Recorrer los resultados


Ya solo nos quedará recorrer con un cursor el resultado para volcar los documentos devueltos por la expresión regular:


```javascript
while (cursor.hasNext()) {
  printjson(cursor.next());
}
```


De esta forma vemos que es sencillo realizar consultas [MongoDB](https://www.manualweb.net/mongodb/) Like.

