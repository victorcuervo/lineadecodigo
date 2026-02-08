---
title: "Consulta seleccionando los campos en SQL"
description: "Aprende a realizar consultas en SQL seleccionando campos específicos de tu tabla de libros para mostrar solo la información necesaria de manera efectiva."
date: 2013-01-24
updatedDate: 2026-02-08
tags: ["campos","select","tabla","from"]
slug: sql/consultas/consulta-seleccionando-los-campos-en-sql
type: doc
topic: sql
id: 6e058b6d-e29d-465c-b0f0-f4b802d95164
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/consultas/consulta-campos.sql
---

El otro día ya vimos cómo [realizar una consulta sobre una base de datos](http://lineadecodigo.com/sql/consulta-basica-en-sql/) en SQL. Hoy vamos a ver cómo podemos **seleccionar parte de las columnas a mostrar**, es decir, que no queremos que la consulta muestre todos los campos.


## Estructura de la Tabla


Para ello partimos de nuestra tabla sobre libros:


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
## Sentencia SELECT con Campos Específicos


Así la estructura de la **consulta SELECT** será la siguiente:


```sql
SELECT campo1,campo2,...,campoN FROM tabla
```


Vemos que separamos los campos que queremos seleccionar en la sentencia `SELECT` de SQL.


## Ejemplo de Consulta


De esta forma si queremos obtener la información relativa al título, autor e ISBN de un libro realizaremos la siguiente consulta:


```sql
SELECT ISBN,Titulo,Autor FROM Libros
```


## Orden de los Campos


Es importante saber que la información aparecerá ordenada según hayamos escrito la consulta. Es decir que no es lo mismo escribir:


```sql
SELECT Titulo,Autor,ISBN FROM Libros
```


que


```sql
SELECT ISBN,Autor,Titulo FROM Libros
```


Vemos que es muy sencillo ejecutar una consulta SQL que seleccione los campos a mostrar.

