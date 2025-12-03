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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHP27Y3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC3G6YdjkyCSZF88vUZaeg92cZQXqERe3BcYyaXzfoWtQIgJohekkH07IAm0zmgFgMLF%2BkhPvk0rTNACiJGsg81ogMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKZ52P0z89kQPH1JXircA1XwwLaMjDk3GShTx0UkJd0nZghvf0z46i3sAYLCxQ0Io5qI6L8IsIxnRUF5Kx1ATe%2F9tI57ZU2iYsPLT0eyB3Js%2BncCJjjyQpIUljdqNtuNSXYME5Lbf4QhEntDO%2FsthVUxxqTRlhSdT2Unz4W%2FtzxL%2F3xJ1yqnQwKb7PT5F8BrTkoSpfGzrQc7a82MYMI1MhGK%2BLPN1zZY7H5u11yy9WqBn0bEQtcfSWLqqt0MABXIdHuMkNZz6f9OXj8p5B%2Fuzbpyglhe%2BQypnhdWFddt8G1FN4xXTSgwgLJrNn6uGTc6WgDLoaYSKqNmICPUo%2BtEfRKP06eX0Jdil8kpCGOqY8b6w6qF4688U3ibvuFzYGaPvRwhI9rVc6XAdivo6GSLXRZZHd0dcHgx4KG9tAufNkxwpu3yOrbl857DM7JNZmFQN8LDOgbXG%2FKYOSQzaRewy1l2EIm6wPn6BFW0WCd5uSj1oXZMRxH9LUxRYlTb3W38ywzyhDfNj8f9xg0zGszQXJhCKn1B9Vd%2BkG0VFIEh5puKM2Yuq5mqWe8GD1%2FiS5OHN7EzpVz0t1T9b713nTWxQ%2FOdQVYmiGEyorNCUkl1kV%2Fg2NJIYZfARysKPk6t3%2BRGJhJvqdqsPg8v05cyMOSVvskGOqUBEMERbx4AabqvHiVpIfAbJuLenHnOYc78fXiA3otNHWpPQ8aVtdjPingFNEVrR1hSnjXx6pfeq4kC%2FDZB64VgMujyKAyCJHnJVbOXINI5eFrjCgd6ov2nDLonIQCHsUxtFgVHVsQJ7H1gEiEEo8hmtz5MEvXO%2FIEM%2FlTi%2FLox5iP3d8s5F541LAa6m%2F9%2FQXGtaZyvFpARGh%2FFIJHxnh%2FwyYR4bTVj&X-Amz-Signature=1eb3130a366ec7f738f8315f51628e109f6fbd1809e06a88f8bcfb5ff14f8441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

