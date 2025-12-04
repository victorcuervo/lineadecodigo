---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA755HDJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnHFqVscmjknbu8lSw8nLtqlqw%2FXFei21FtcqBN4GRvwIhAPfL8V31eBJXVvcbVIqWV%2BctAuvAwjlY%2BsRAbiTup15GKv8DCEoQABoMNjM3NDIzMTgzODA1Igwmy5243%2Bv7%2BvYXC18q3AMbP6y%2Bj4pR6PLNX%2FsGsUTlBdVBXDS7VMvIjXg6BcP912GD%2BF582M9KPHGsAVdHUBJ3xdZhBNYOrBFcrVuCCfqFA1eEQCyYqrVWRHji5uoZIxnhDdFOQXA0dk595WWdAygNIAjL61Av%2FHjM98dV0p60CTEM0GRhrb5BH7hT16TdN7%2FtG0vFqXyPQ6DyR9Tm4GasHcb5Z7c%2F6PsueZ5GfK78Rmd9q4xxneKzq389g51Q6Jlk42cQNHZ%2FX2PRKlTq9XYkNjjVYko8BwdrZckT5W1oV%2BDQhocXuu5DIpbV5D1%2FvfEUGHePFE899Z0duCTzMd9UYuLiEjqpE1wQF3btvs41bOzTSyQbltaNteVN4VFxEGbT7Lq5XraiqUE2w0pulFiTh0llE0d3gCRTsTLUwFWd3eXCgeGmqSEpzMOXdlgW8I67ClvziKq0vVVw%2BxcOLgmjqa0HakNilTYZw4gL%2BAHJn5k5okhFY2hqfMPppF2dacgl7DFkEjbYwgc9b1jZxUSCJo6lP%2FG6nGUAjUqBQfKbC51Kh6MPFOnhPq28uBI%2FerG8OpKD2YjcWrDQLJa8%2BsGit5Y4lyLbn3DAj%2FPuRF1SOoIxgSEFRPYCvuXRwyfX3FYKO45%2F%2FRlXIvtx2zCc%2BsbJBjqkAecgoy4W0MSf2O4XDQAQzgx2WYBAhgt9TXKQDRY4HrYoUQbySZvqJJphA3O%2BZROu2tG6ngnbRPl%2FBceJE9gEXKy1kwXcgDponQYRIPCStTRAtpKDRKNbRPvFElMVyi8ppa%2FSig6sEuQVfvNcsD0Na%2FaWCmnq4eRTqvzw%2F2aKLQuoT6iNj%2B5R%2BnqPDEbr8skOnlxlECo5mgN4Ei8lA1OTL9Vt0bwG&X-Amz-Signature=249dd31123d81a12b690275f44b139ddc7befd459f5cb8913d511006174ee2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

