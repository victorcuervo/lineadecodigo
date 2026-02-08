---
title: "Insertar parte de los campos en SQL"
description: "Descubre cómo insertar parte de los campos en SQL y optimiza tus consultas. No es necesario rellenar todos los campos. ¡Aprovecha esta técnica!"
date: 2013-02-09
updatedDate: 2026-02-08
tags: ["insert","values","into"]
slug: sql/inserciones/insertar-parte-de-los-campos-en-sql
type: doc
topic: sql
id: db8c4455-dbb0-49a9-acd4-abb8602155e9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/insert/insertar-ciertos-campos.sql
---

Si estamos insertando elementos en una tabla mediante la sentencia SQL `INSERT` tenemos que saber que **no es necesario insertar todos los campos de la tabla** y que podemos insertar parte de los campos.


Es decir, si tenemos campos que pueden estar vacíos o tienen un valor por defecto dentro de la tabla, no es necesario que les asignemos un valor a dichos campos. Por lo tanto podemos evitarnos dichos campos a la hora de realizar el `INSERT` y solo insertar parte de los campos.


## Estructura de la Sentencia


La sentencia `INSERT` tendrá, en este caso, la siguiente estructura:


```sql
INSERT INTO tabla ('campo1','campo2') VALUES ('valor1','valor2')
```


Vemos que solo indicamos un par de campos, independientemente del número de campos que tenga la tabla.


## Tabla de Libros


Para el ejemplo, si partimos de nuestra tabla de libros:


| **Libros**        |
| ----------------- |
| ISBN              |
| Titulo            |
| Autor             |
| Editorial         |
| Fecha Publicación |

undefined
## Ejemplo de Inserción Parcial


Y sabemos que el autor, la editorial y fecha de publicación pueden estar vacíos, es decir, podemos obviarlos, tendremos la siguiente sentencia que solo inserte parte de los campos en SQL:


```sql
INSERT INTO Libros ('ISBN','Titulo') VALUES ('970-26-0518-0','Cómo Programar en Java')
```


Vemos que solo hemos indicado en la parte de los campos los dos campos sobre los que queremos insertar.

