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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLAIOJW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCUu7NbCI2bo42NkwM5n9csBupGvmVtMhG22jFx%2F3InlAIgRFaiS4TPZrZtuREmM6GGCudqXuXCtclles%2FkyyArwuwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGnNknH4LP%2BiPQxoMCrcA6PhSs7vg1J2Xdz1bsCiMDp5kt6kqol9xgPDdkvZG1FU9419VtKLxn4tJ35wtzwtw%2B0ASk2b2ncJKJSI1N0hOeZIOBHygiEkTafb%2FlAx6uYSFSuhVY%2FtVGQOFvnuuBL4O8bom0qbSynGSO%2F6IDyMITqU0ZUl6F4dN6eu7KP8DvowxC%2FueZkJYVP6EtUn%2Fist1LUcinlWBwjUgZEas34Bm%2BZ7OeOG1hik8e09T9xjX84rhXAv5QxXnCH6MqeX0%2FwdQNKWzoo5Uk38NKiol6Of2KDd7%2BVpLOWpQ4C16v15AApYlXMrdm5o0%2FqBQ7yVL4NSGudYsej%2Flv4EF2YMz4Tizfrm5SrZHT5zroQOVzE8yK9UvKinFJXYxMT3b0B%2FLRKWG6CIah%2Bn%2Fc6fwPbTj6a0%2BmDf7XsWuyfY1iJWt0kcryEop%2FksU6JLqEqMh47FtfXWxAR81cUrfJcrw1wqEjocKYvPJPNkobUkWZ3HVfgCzhY9eR%2Fu%2FsQDUniEHRS3G9lqUsjHIA1BVcHk1vmkK2J9MjAZhxB%2FMAi2FgXEi5a8P6hc36z1DRm4m%2BU61qG46Yiz7j8wxy7CKRUs%2F0jeEpuT07Pbp33Ec6QBlp8VWxvvClfnO8nuZuOeWEOuXVWpMJzawckGOqUB92XSvzJtp%2B0FMeCXNtZgo9yE8LxMLb0KE4ynlBQ8egdg2TF0QO3VLWLeiwzN8UZnfG1SKmqvLFBlre8A1V0rhqfU2yBAEHXu9aq%2FOxxEpMHFek6Lr6ckN5KaLywk24ijCsBJtz2xzP0bHOz1H1rrmVflSaivHEu21HpJ21ReWYBzMYJHSX9IfzcdO4g7LqMQHMyYsT8uZekciuk07zrHPQamH8Cl&X-Amz-Signature=5d3ac6b4816277d10a9eb79b680eb7f6d9c71d30fa41196a85545a75969badf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

