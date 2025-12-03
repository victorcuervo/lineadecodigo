---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQLA6D4Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDsZjvxNK2%2Fd%2F6o6SVxOluA0WZKMqBrurcJMZQAQ%2BQ3JAiA%2BdMm0Zi8Rhg5TDi9jjPb%2FxRpD%2F1u8n63bTJjQESuJBCr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMn2WTKRqjXgkb7mRLKtwDDw1P3b6DL4VSkDf8Blc2%2BuC74r2cmLoJVq4uFGWX%2FC5sm1gXYKkCHjvp77gCJgimOPk8dTvVOXN4UWpYSo1%2BbJGxofgOi9PBUL5CkaoFGBIGTKGtKuOPwbuFXHk7cELG%2BEefgy1lGQBSRB0lp2o8p0uo2FYbOTQOO22DDPO6ALaNjdUhs3Du9ONQQDetn5DpnXglDPjNmVxP9hUVaQp1cfV4IsY6xEL2IQMiV5H6A3bh2cTynLab3xBb4%2BarT2%2Ftw1sYnMG%2Bqlv%2BBo37lrIi7fFYQXk6F%2BaHAzGD%2FbJsBaVpYybuZlC88cKvKHez5wmqqwmbvzsvhqHY9MIXdELlq8ZedVNQ7YGfP3a7hZGUMA6QEQYT%2FUYwahbSZJkYl07coubbPJUkQx0rQ%2BJ9pqLdYM1h%2B%2FCQK40ogoRFLnK1rwVvYmSn6H7ajW9yTOHLB4VKPn9vvgBCpjssfoqNX2QBxlrbfa3VTyERo1HBhNFp6HcIaSVUMxebzHvRj6AlySuu6VQ6RqxPrZgAmBWlyvnC3CZE2AY7KEat3%2Bgi%2BC2Apy34aRgdG5iCVv3MUp4bF4h1ItKaUCHxEpLUU%2B8SeiRxGB81Y1xpwEtRNtQNylFX5WaXQnlNOSa9wZm%2F%2FLMws77CyQY6pgFtsjOS8qhiRrPKT8f90hd%2FDO5TwzzPzWucz3cHDc3xwWKBHfBjv8BD9HXQQpYAmYLGrPv%2FnEo4ikVaqCiZXtVrxrtUGYyIcjRkwwdGcenpMSsvQON62GLJ%2F154r4bLHZdLF8slJxAOVJ3eZaOwb%2FCUf2QxMoEXwWmOZMJZvzD%2FTvu5tZBPHJJz3rX6f0h%2FCXjJfUkpPpqx4x4j2C8eC%2FPgh0Chi98%2B&X-Amz-Signature=63098773fcf75e866df25c5a6dfc4015db567813e4e797497802e02cce551503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

