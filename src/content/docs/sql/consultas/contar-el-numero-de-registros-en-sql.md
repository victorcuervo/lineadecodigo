---
title: "Contar el número de registros en SQL"
description: "Para contar el número de registros en SQL deberemos de apoyarnos en la función count a la cual pasaremos el nombre la columna que contar."
date: 2013-01-28
updatedDate: 2026-02-08
tags: ["select","count","from"]
slug: sql/consultas/contar-el-numero-de-registros-en-sql
type: doc
topic: sql
id: 972a41e4-99a6-4ac2-a5aa-5449bf689f82
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/consultas/contar-registros.sql
---

En algún artículo [hemos visto cómo podemos consultar mediante el API de programación el número de registros devueltos por una consulta a una base de datos](http://lineadecodigo.com/php/numero-de-resultados-de-una-consulta-a-base-de-datos-con-php/). En este caso vamos a ver **cómo podemos contar el número de registros en SQL**.


## Tabla de Libros


Para ello vamos a partir de nuestra famosa tabla Libros. La tabla de libros contiene 5 columnas con diferentes atributos sobre un libro, en los que encontramos el título del libro, su ISBN, el autor del libro, la editorial en la cual se publicó el libro y por último la fecha de publicación.


De esta manera tendríamos una tabla del siguiente estilo:


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
## Función COUNT


Contar el número de registros utiliza la función `count()` dentro de una sentencia SQL. La función `count()` recibe como parámetro la columna sobre la que queremos contar.


```sql
SELECT count(campo) FROM tabla
```


## Contar Todos los Libros


Por lo tanto si queremos saber cuántos libros tenemos en la tabla bastará pasar el campo título a la función `count()`.


```sql
SELECT count(titulo) FROM libros
```


## Contar con Filtro WHERE


Pero, por otro lado, si lo que queremos contar es el número de libros de un autor, deberemos de pasar el campo autor a la función `count()` además de realizar un filtro mediante la cláusula `WHERE` para indicar el autor en cuestión sobre el que se realiza la cuenta.


En este caso la sentencia SQL quedaría de la siguiente forma:


```sql
SELECT count(autor) FROM libros WHERE autor="Cervantes"
```


## Uso del Comodín Asterisco


También puede darse el caso de que no queramos indicar la columna para contar los registros. En este caso podemos utilizar el comodín `*` como parámetro de la función `count()`.


```sql
SELECT count(*) FROM libros
```


Si bien es verdad que siempre es mejor indicar el nombre de una de las columnas para poder realizar la consulta.


De esta manera ya hemos visto que mediante la sencilla función `count()` podemos contar el número de registros de una tabla en SQL.

