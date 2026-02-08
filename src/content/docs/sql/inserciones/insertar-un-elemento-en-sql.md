---
title: "Insertar un elemento en SQL"
description: "Aprende a insertar elementos en SQL utilizando la sentencia INSERT de manera sencilla y eficiente para gestionar tus bases de datos con facilidad."
date: 2013-02-05
updatedDate: 2026-02-08
tags: ["insert","values","into"]
slug: sql/inserciones/insertar-un-elemento-en-sql
type: doc
topic: sql
id: 2c8a9dfb-adca-8143-9654-f439149dd473
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/insert/insertar-elementos.sql
---

En SQL existe la sentencia `INSERT` la cual nos ayuda a **insertar elementos dentro de las tablas**.


## Estructura Básica de INSERT


La estructura que tiene la sentencia `INSERT` es la siguiente:


```sql
INSERT INTO tabla VALUES ('valor1','valor2',...,'valorN')
```


En esta sentencia vemos que existen un conjunto de valores a insertar. Dichos valores corresponden a los valores que queramos insertar en la tabla, **en el orden en el que están escritos**.


De esta manera, si tenemos 4 columnas nos encontraremos con 4 valores.


## Tabla de Libros


Si partimos de nuestra tabla ejemplo:


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
## Ejemplo de Inserción Simple


Podremos insertar un elemento dando valores a los 5 campos que contiene. De esta forma la sentencia será la siguiente:


```sql
INSERT INTO Libros VALUES ('970-26-0518-0','Cómo Programar en Java','Paul Deitel','Pearson','2012-08-16')
```


Vemos que el orden de los campos coincide con el orden de los campos de la tabla.


## Especificar el Orden de los Campos


Si queremos poner el orden de los campos de otra forma deberemos de indicar la sentencia `INSERT` con los campos de inserción:


```sql
INSERT INTO tabla ('campo1','campo2',...'campoN') VALUES ('valor1','valor2',...,'valorN')
```


## Ejemplo con Orden Personalizado


Así podríamos poner primero el título y el autor y en tercera posición el ISBN:


```sql
INSERT INTO Libros ('Titulo','Autor','ISBN','Editorial','FechaPublicacion')
VALUES ('Cómo Programar en Java','Paul Deitel','970-26-0518-0','Pearson','2012-08-16')
```

