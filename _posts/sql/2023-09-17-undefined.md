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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOEUUAT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDcxAMIMNi2262tsgGjcPZiJ6EV5fWj6x7wQyuDZziSLwIhAIW72aJ4ULOeyxUIgBzo9X2aHwOIsgWkOk6yfH5b9aACKv8DCCIQABoMNjM3NDIzMTgzODA1IgxxRi3A68WSJJHhhHIq3ANPUwaH1NzOmnUdJal6NWBvzcbKEx7YxDcLwj02KqEFI1x%2Fji%2Bo5GEy9ypNkKuozcvj0%2FUT9rYlTCfD7Csqo8DKvGpFmG01esvPri73NVdj3NUWl2fiSbd%2F2FhfhpvDdqPW%2FpBmFWHtv4bLkQ46DtRhWHYtwsdi3EJA90q%2Fj698fW5%2FTSMP66p9n42Qd5xBSLfK3gwO0ObGp6sNFc%2Bw4WxLfOJNp3gUpj1mpKJ8k9tqOd0%2FpJl6qh5SMmOFduzPliR52b3siaqX1UJkA%2F0T93MMgk6r0BFS0nVtxD5ii0FNcBqKMjG4FYlXnpw8%2BW8QG%2F%2B%2B73uN6KMdT09PhSqMGER1uoLEOpy4ndAoVJtelRniyDWgNq79p%2F%2BXNQxKepL1xIJwRxazKDv9lv3uOp6r3ovt1OCBaC0ZQ%2FS7qpU1UVfIAYu83%2BDiuC9gDEG5vaaKEM4q9PZeYGhNruECPffDTx6c1KyZovMSPzINqK2Y9r4cQxs4NKKoXV6l5f06sQKe68XtRBlqmykUv8IbrLNMvElWuqYLxgo7t%2FNVzsgTwV9H620jhxwMH6ttB96sfizWiQ6nmaUK9uFJbgUy4iwMNEvCGoWnWT9clP%2FrkGeGc9F1rjOhygRx%2FVT2gvAX%2FTCplL7JBjqkAdsPU5HwiLvsSycQcyGOq%2FwVaMIZq01ZluWM65DUj%2BsEQkJhTAW%2FhUDeZ2wgLt8sS%2Fgl8Rhx%2FVERot%2Bm6Xr4sfo9mJJwvgKPy80ow0TFlyy6yiILhuisyPNpzEBAo%2BkLoNFr7lWokckf2NuHcgMLmpJ6pvsAFB0RttlzEanvfENf0quoc2Yg26YqBS%2F0VMH6V%2Brh7ZJDpvEgZanQ2TmzjP%2B2e2e5&X-Amz-Signature=1c4eb591ad2c94154a37562122021772b5b303be35eea43b4cbd1c51d76a2bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

