---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSTYN4ML%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzp1HNJj0bwFLOrLZiwCKD8qc87Lcu8%2BFPGQQ8%2Bs451wIhAIXSbsSdoJgRxP6JsFGFeHgXlhYOZ88xgkyOxPwbrnOPKv8DCEoQABoMNjM3NDIzMTgzODA1Igzm3J7qRK%2FbSPgIeocq3AO%2FC5OJpRBhKNr87hbeFNeUhU1x08bCzue3GpASRKwGl9sMANNMT9afpWTgk9z1go%2FbMCDqIq5k0P9Cou5q4GthOrFO6cesatJb3fQxBbQqZzNVpkVQuvORuQ5d1NjpS%2Bio8%2F%2F%2BkEqUVika9YHOBsGkIEsxw4kzbA92eq1rLSAlIaFCSgRNlzLUDlo%2FHWWqU%2B2xV%2BDVCJxe%2BhW8Xn1eNYcMfrvVclwaXZ%2BbK7xZFLiKxm9I29%2BuKUHCchqnK%2BS%2FVLXf6yOhBIkBnADu%2FHxGFsErTCu8IkV1FEtUe85iWI3XYo3YcygoWwI93Ok5NE7WT9ywS2vwN%2FbpbUaf5%2Bj%2B8x3eC08cbMve1pX5LRm1h7hEQsF1lWJIMeTM1z0iSguK5aePU%2FQXOlDqbiyKjipcMj3s8AoprZaL82nNsPTH37qvGofQ3eJz496RfQTWCHSKtf68xTvBWLl7f7fys%2BJuGHecQsWWYmud0kdevBY7JaDJTjxXp4fTpKW96wF4bKL2N%2BmpPhX0RcsjB5SUa5Mnux02F%2BD55IX2cmfmD3ULX4cqV43qzPVE8P7%2FVEAsylnIeFaB9dZrfhqtLnQJcZUMlOLocqGadXbYgdRMEpeZVkkeVwev071hStUeLd%2F%2FBzDl%2BsbJBjqkAVsjo7ExzUPUrI1jSJqE1CsFZ07mVIkuHiXRDIiX73oWQH85G1VnFjOOqHe13SrSUtOiaRYtjU16izyT295vtDuY0Odi5KNpVrTQTIJ9dqYsiN5ptD%2F6iErgeqyc2DaxaW8PV3NXfAwCVR9xA7uvXT5SCRFxjKKfS2%2BSl6GzkwlR7QH%2F1OHDlFc6kFxUfgIGzpbXjbA31%2F01RsX2U5tx%2FtbDcDsT&X-Amz-Signature=aab5de0a81fcd9aa97bfa31729c63c44421be671ea51cf0635e6cde93bb47ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

