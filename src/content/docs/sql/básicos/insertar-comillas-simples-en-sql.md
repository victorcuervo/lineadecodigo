---
title: "Insertar comillas simples en SQL"
description: "Si queremos insertar comillas simples en SQL en un valor de texto, deberemos duplicar la comilla del valor para que no tengamos un error."
date: 2013-02-07
updatedDate: 2026-01-11
tags: ["insert","comillas","comillas-simples"]
slug: sql/basicos/insertar-comillas-simples-en-sql
type: doc
topic: sql
id: f836d300-376f-4064-9db9-dbafacd9dd99
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_sql/blob/master/insert/insertar-comillas-simples.sql
---

Si te encuentras en la situación de estar [trabajando con una base de datos](https://lineadecodigo.com/categoria/sql/), específicamente realizando una sentencia de `INSERT`, es posible que te topes con un problema bastante común: cómo insertar comillas simples en [SQL](https://www.manualweb.net/sql/).


Este lenguaje de programación tiene una particularidad cuando se trata de las sentencias `INSERT`, y es que utiliza las comillas simples para diferenciar el comienzo y el fin de los campos dentro de la propia sentencia. Esto puede generar una cierta confusión a la hora de intentar insertar comillas simples, ya que su uso está ya asignado a otra función dentro de la sentencia, lo cual puede dar lugar a errores si no se maneja correctamente.


Esto lo podemos ver cuando nos fijamos en la sintaxis de la operación `INSERT`, la cual se describe de la siguiente forma:


```sql
INSERT INTO tabla ('campo1','campo2',...'campoN') VALUES ('valor1','valor2',...,'valorN')
```


Por lo que si intentamos insertar un texto que tenga una comilla simple (') nos va a dar un error de sentencia. Por ejemplo, imaginemos que queremos insertar el valor O’Reilly el cual contiene ya una comilla simple en su texto, la sentencia [SQL](https://www.manualweb.net/sql/) que escribiremos será la siguiente:


```sql
INSERT INTO Editorial ('editorial') VALUES ('O'Reilly')
```


Al momento en que decidimos ejecutar nuestra consulta en un motor de bases de datos como MySQL, nos encontraremos con que nos devuelve un mensaje específico. Este mensaje es el resultado de nuestra consulta y nos brinda información muy valiosa sobre lo que ocurrió al procesar nuestra solicitud en el motor de bases de datos:


```text
#1064 - You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'Reilly')' at line 1
```


Para poder insertar comillas simples en [SQL](https://www.manualweb.net/sql/) tenemos que **duplicar la comilla simple** dentro del valor. Es decir, ponerla seguida dos veces. Por lo que para el texto O’Reilly tendremos que poner O’’Reilly.


De esta forma nos funcionará la sentencia de `INSERT` siguiente:


```sql
INSERT INTO Editorial ('editorial') VALUES ('O''Reilly')
```


Con esto ya habremos conseguido resolver el problema de cómo insertar comillas simples en [SQL](https://www.manualweb.net/sql/).

