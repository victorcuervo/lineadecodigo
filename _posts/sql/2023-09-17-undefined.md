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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYVJFRL6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD8dYYxIebHQ4biIFM51h%2BWQsTQN%2BGaPbYwqLlzoIbqLwIhAI75ZTNRqHhclL3rIDZ27O5fsbRwYWSGZmSK%2BXiGQLVTKv8DCC0QABoMNjM3NDIzMTgzODA1IgyeEutbcHLI7m%2Fyf00q3APifqvG7kIxwGGBy%2Be3rTqaUNgqz5Bc1tZecE%2FhaKm5tKJ7jQuUtI0Zc0fOGp%2BfXY9wEqYFWOJ%2FuMhaMv8SJB%2BnXFgVA34WGMVk071BWq8PYHkPGKvVOBumyfTsa1IFabzma%2BiDnMMMgrGXhRohge5S%2FvxVsERsJp5O8BSYiHJk0rwVkfCpN6OklsbduBl5pXd1EfQ1laF5XyByIBUr0dS6nMu0xPbMPrdW7%2Fqgj5Hp%2B4rDkCr1rjc5%2FaGPBWJlt1zLyUbmO8ZfNmakONfPFEEEpCCMIiduB6b1ugP%2Fi671cjvS1au7uMhr92b8CcOWB%2BHRkBxRc5VgzaamCM9nM427hvxXqkMNDBhcSzcrAAkGYfDorHw%2BYW%2Fa%2BXWGHOxtOMWqgg1NaE%2FlCSwzdxlSK0HXciJ0gCOPAbeg%2FH%2BGQeAPM4B5Mj6P%2FaWHxatfbGQqEQDdQ%2BhRAeebbya0nL6XolhOgccxO4l4qPpa%2Fp2SZNdObuJXweLW28qAFYbzhwYFYJAwb%2BMiEyhdGEwheKIgDt3z5hguvCVteSb%2FSeg7kLvsoT1VF2dmoPc%2Be4uGpm3ZfPXgUhIYBBGTo%2B3y93sgNjYuMKF19kPg%2FaRzprxnNHe%2Bw13QV7LkQxIrFMT54DCpzMDJBjqkAR%2F%2B0T5pB55zybIaAd9Wqo0UycjHcckOcnLjsGxKBL2LUTrAnGIPeCB1APGDy10CDBTzNxp35f4a2JxvFMlIT57UEaSQDP8EY8sW7%2BxM5cdvvTG0cYd8W74Tpn9JlKhUUO3YxGJcw%2BuO%2B%2B7NqZRpZWr20eH6AliFW8JMP%2BdYwz%2BQzfRGgyI2G3W0FpUZCgB0IDuKBdmvV0eWtcB4qzvB2KHDZUPI&X-Amz-Signature=ee0be3dd651596c98d0b87f2579b226a9af5d9154d3e52888aa0cb0db87cbc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

