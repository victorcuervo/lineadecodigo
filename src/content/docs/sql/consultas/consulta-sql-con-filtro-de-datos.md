---
title: "Consulta SQL con filtro de datos"
description: "Aprende a realizar consultas SQL con filtro de datos para extraer solo la información necesaria de tus tablas y optimiza tus búsquedas de manera eficiente."
date: 2013-01-26
updatedDate: 2026-02-08
tags: ["where","select","from","and","or"]
slug: sql/consultas/consulta-sql-con-filtro-de-datos
type: doc
topic: sql
id: 1358b089-32e9-4421-a9f2-e63678a2b4db
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/consultas/consulta-filtro.sql
---

Cuando estemos realizando una consulta SQL lo más probable es que no queramos recuperar todos los datos de la tabla a la cual consultamos. Para ello podemos **realizar un filtro de datos**.


Los filtros de datos en SQL se tienen que realizar por alguno de los campos de la tabla.


## Estructura de la Tabla


De esta manera si tenemos la tabla:


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
Podríamos filtrar por el ISBN, por el Título, por el Autor, etc.


## Estructura de la Consulta con Filtro


Para realizar la consulta SQL con el filtro de datos tendremos la siguiente estructura:


```sql
SELECT campos FROM tabla WHERE filtro
```


## Tipos de Filtros


El filtro SQL tendrá una comparación entre un campo y un valor. Por ejemplo podríamos tener:

- Si un campo es igual que otro: `campo = valor`
- Si un campo es mayor o menor que otro: `campo > valor` o `campo < valor`

## Ejemplo de Filtro Simple


De esta forma podríamos obtener todos los libros de Cervantes de la siguiente forma:


```sql
SELECT isbn,titulo FROM libros WHERE autor='Cervantes'
```


## Concatenar Filtros con AND y OR


De igual manera podemos concatenar los filtros utilizando operadores como `AND` (para que cumpla varias condiciones) u `OR` (para que cumpla una u otra condición).


De esta forma podemos realizar un filtro de datos donde saquemos libros de "Cervantes" o de "Quevedo" de la siguiente forma:


```sql
SELECT isbn,titulo FROM libros WHERE autor='Cervantes' OR autor='Quevedo'
```

