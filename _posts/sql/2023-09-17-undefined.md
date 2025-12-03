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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYVJMJX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHSrCGjZ7ilVAGb5LhnSXVD3wZymFmKXX%2Fgl%2B0VinWOaAiEAsxsHQzvZNGvl%2FahtNYuOoeT4%2BB8ENazec4BjK5wlpOIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLSxv0RS3oqheJ70nSrcA7tFf75Q%2BIEaeUlXz0u8jBuw3M9ZN6Mopk6DIi5Ls7GCIjZPC5nMv4qfsNSkzBs369tEtdxYC4U%2FPdNCbTLYrr%2FC9R6NU84vNR84dx4QkVhhCOlZTlDBUkYnY3sz%2Fz0l9b48ufhWeqAxwywsXcp%2Ftjbe9%2BchjpsaKMYdj6zYTLdNEb9th8r1rIm%2B%2FcNthyc3hvBYPC%2FCVa7QcBqXTBdfmW8OaF4VYh15QtLRDxTGF506UjKcLc2dXDlmo2ecYPAmIPEtKbfmjSXgtDws9MHkJRdo6P5zVSBhGOz7eSJ9dCBHXIYMUXz%2BlFoF2SjBxGcBqGodhYcbcbQK8u%2BskMvHb0BDKRFWLIFsWYCtjAzPWS3o%2FaiRz9UoAsCO2z8RShpVW1pz71Xfspfs%2Bwc27jkRlr5CgnKkZIuBxLgPXDPPoj03iI0NewPQ6KPKnLJzZuOAWaCj5fmbpKGfWQL%2FMu%2Fg6T%2BeWFGo9O%2FCVYODxJYd07xhj763VhO2x1KFS5s23VgBqVfb0eEy4r1ttM8FfEym0UziyrUfpMqVW1prfsolNAFrBZKs4lUYvw4VEVamnbTF30wDbtn%2FnoXsR7EKmChkDTVK2eDkNCWKe%2FvpkmDq0i29rU%2F%2BunsYJx6f1uHiMOiWvskGOqUBJeK9JZkLmjwXShEborwj6ogFO%2B1lGzuFMSaUpQ286rCbvFRJtfwWRtddhWisghwWimMvze6YO49wMWe81OkvZOt8nKe1Eja4rnYd5FHEqqCvrxWZUN7TUy3GC7H7gIWNYTrEJeorFqT9roNwlowAjwGZ5LZEZdZB3A46tblbBjFlFi6Mggslof%2FXdJVl7DmejmB7FDYkwxN3COGrRf6TODr5C9LA&X-Amz-Signature=632b5f46940fc3ec4776ad3c16ff8c3b7e82a7f61ad88df42519dfd605fa84cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

