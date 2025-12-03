---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DEOVY2J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGHPjajC7GmDcxfDB5oiKBuuNHUDunpY8970MonirDJLAiEAz475h%2B1B6UIOR392311FJnFpoNuiQcvWAoeEfA3JEfEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIFMjPLFqxCC9ko9PSrcA5F7%2FofvszOr0jT2qHU6cOUmGPxnbEzRawmVADFkygHBcWIgAgXYOatQwIbzBKJa3VyBPlJnIXhUe0JjFK%2FkydyuveLVJETu68RS4v6NYp8tvM7wz%2B6pQ76e4tRDiWZ4WVW69KZfMOPLzfjR7xWGCWLxx3DFV965ZJmxuFCYPkjz6t6KsaVB4%2FJHcmSpCXyiL1Y%2BDMHKpcO2mt2OVuSH2wOyDg6ul9QnzHhh2Md%2FjwkAKW2UMOQGa1kVWHmeGw5t5FyGVuHI6nIiLxlbZ9BBpNPIC27I7RnJk1cgPvSBBxw62gZVhyAeGoR5p6yLdT5MI%2FL5TWj0UG0pHvIAhd3%2BBAx27f9epWTB4HlcuXPU7345bRpf5dVqK2pcxEeuVjBL3aXTybv46WS9vJ46xMA07KpD0hXEpFIbNLWoH%2BQ2hGnOIId1ovSEKCAknQ2o0yIUdPS6MwIV7pXTUIP3VJXNG%2FLK9JQV5MInn%2BlKboWRA5zIQnP1zqU4YN61saO4hIz3gOWsL0Ovm66epGMLQE9ng1Xc58Kq98dC4mIA2okCRl2FvckS5FBHYWjIZaBETmX39eUUzyL%2BKoqzda9%2B4h6bE0h5mq5rtrpcCSZyCOfl%2B64IIKYgJtuE7%2BqVl%2FmyMPDowMkGOqUBNL95dq7KM3XO9zBRJhQywodjwyH6oSqK%2FtusG5gLy%2Bo%2FRKnidWfFghHsKguPx1HbZxZSX5xITvsoeIbIs1HX5cAox2ZYRacMe7LxS%2BRNTchAqaG%2BmvkgZEQ0EyAqvPHGU0P33xVNDYHv7vmx8eag4tQsOBzRbfof6LQ7owBGFq7B4WHBAmoVaxUXej0L8U2Xg8fbJ49tMlv2Hz9TYgSN9L8Obk18&X-Amz-Signature=4d9ab894c092ae9d839af348a5b8fba0235522385e631709772ff14e4aba7826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

