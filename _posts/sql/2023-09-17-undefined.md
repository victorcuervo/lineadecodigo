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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFWYNJ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC0Eoxt8MZjabeiwPNupEklPtCG5C2JGUH%2FD769%2BQ2LBQIhANf1UG2KzlIlv9mKuayOm1eE2jQVM7v5uOu%2FQFinh2H9Kv8DCC4QABoMNjM3NDIzMTgzODA1Igz%2FPqt1cQzP0Jdx1Tsq3AO3DQkt4dyNu1B7ZiWGfC%2F%2BGWKgpRPaSKA64A8fTKFzRCRXjE3Bmj038ljjXen0%2BdmWKji%2FLwx0BaKOY0TJwAZo24H5ujasVr3p3Uxi%2BSt%2BG4V3yLYxL4QsTZ6EIxIMOP7KJa53LcuPlYipcjFtupMjSgONAXh0CLECcY5JM3XToVgnwGoiqnlF8PHFrW95ElDbQteBefKA%2FE%2BZHLDA9vf18QZ2Gx87qlov4RxuAJIq%2Ba%2Fzg3iAT2F2APYaeLaVrK1UJFLqibVjRJA6I4OxZx144JMVr2UURYFhXkZOY8%2BKcZjgjKfw3F%2FtrhxMlJU4Yt4SakdON6xnta%2BHEeY0W8Q1fsevy0ObZwnuqrNNl5ASIbTzPTnox9tJs4S5tGZIrd8dy5gx9CkfJX2vakwFmBe8yYJUN1u97T6yyQ5QjgA8b4iiW9iy7B4YTUMhbdbE1428a2ZeE0tpZ%2FSCHcIt4tRDtVM3WCMozmMgXLZeS5hjf2UdL06Zs4rMjhVmUchIuSfm3ZcDTQDZCr9V8YqbnYxtYorX34fVG4ir%2BA9Zt1AxSwBaD7KSpEPHsAfJKMTi7hJAYxG3ObwXv0Sr3a1Fgca7mWxqotTdbWgWXTl%2BoVQPYMW85%2B4hhBQ4N4G0JzDI6cDJBjqkASjRkdY5pa1jTuY%2BAHOHQEb%2FKNrYyMdKtHx7HlKV58VWd8HXGU7vCBNuq6Ia2iBgXBA7P9QTEpJUkwXO%2Fu5z9Ntrt0z3kLSszxHTuPQLxjwMyRTJgXhYKkN9PLKxpTKFQcFqI0tq16tnp%2B2L4c7zh0L%2Fa0ANAPAahu4JGnV0KFWw99TgXy%2FlMH79T76Y6HipUIr%2Fvpj5Abp8ARJp%2B3kr5knw%2FZ5t&X-Amz-Signature=5912add06e3b51c6a1de8c916193609cdaca670a57c71cf3ebfd8ab04832e080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

