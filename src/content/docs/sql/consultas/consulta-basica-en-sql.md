---
title: "Consulta básica en SQL"
description: "Descubre cómo realizar una consulta básica en SQL con la estructura de una tabla de libros y aprende a usar el comodín para recuperar datos eficientemente."
date: 2013-01-18
updatedDate: 2026-02-08
tags: ["consulta","select","tabla","from"]
slug: sql/consultas/consulta-basica-en-sql
type: doc
topic: sql
id: 2ec6c52a-4066-4596-8209-7fd40033f3e1
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/consultas/consulta-basica.sql
---

Este es el primer ejemplo que vamos a ver sobre el lenguaje SQL (Structured Query Language). Esperamos ir publicando diferentes ejemplos sobre las consultas SQL.


En este primer ejemplo vamos a ver cómo podemos realizar una sencilla **consulta básica sobre una tabla con SQL**.


## Estructura de la Tabla


Así que lo primero será conocer la tabla sobre la que vamos a trabajar, dicha tabla tendrá la siguiente estructura.


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
## Sentencia SELECT


Para poder realizar la consulta básica vamos a utilizar la sentencia `SELECT` la cual sigue la siguiente estructura:


```sql
SELECT campos FROM tabla
```


## Usar el Comodín Asterisco


Si lo que queremos es recuperar todos los campos podemos utilizar es el comodín `*`. En el caso de la tabla utilizaremos el nombre de la tabla, es decir, `Libros`.


De esta forma la consulta básica en SQL sobre la tabla libros quedará de la siguiente forma:


```sql
SELECT * FROM Libros
```


Ya sabemos cómo lanzar nuestra primera consulta básica a nuestros gestores de bases de datos en SQL.

