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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXU4WCMM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBSJ8f7sG%2FZhFzIFjnG1Q6X7YMc5OIH2niAMsUsSTOVLAiA4Kyp8QF7p52yWVGu4S2q6M1QPGv%2FpTY2SIsRuwvyFMir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMnwf%2BuWJX6TCqvOd3KtwDpspoSzG%2BCr6vAoefU3MetEwmb0lG3%2B1%2BtVc%2BoN7yXQuXbFE6kvF9%2BC9NbfkRSSnYoUENV%2BnzzlRadu4x6uXfEOIBgVGGMlmGZ0ADAk25yB6Yomlf421bjl1eSNGpB7OYg0UHAOY0oJMsCihIvpiNdVsfycguVwQ9my2xI9xAo%2B5lAXuVBIyeD9%2FScsPxI0E4MPWTPjjuVe%2Ft1rJIximZZMEiiAyPoQeH55Oln2ndL8w4HYgR0e%2B42n%2FFM0%2FR0MHp7AOCGoTj1fJGbrVnmTcvTs98oE3R64BVH839wcOUPoJrTe57BKi2wouSg06EklIYK6hC13MK7yWtvNweXDCFfMpXfL27IOqZ2cg6nG6%2FMnwWrQj8G1MkEi8RI84s0k9jrdmGUIYuXNTjCA%2BDD5KGuM3wnHaRpeJy67LaxutRtb2nnWw%2FAp2c2cg77yhzERf7hfC%2BdGgGHN%2F5uNf7A819Hjzub%2FLAHym5PzHqAc67BOnl%2FVNkaN7wpARe3hQLm9VdJuDeLp7JoWZpfAeOVPjWWGVLiwFkTvgX7u5TLXo3L5rsHPg8EhIeYK2p8howVNbSWYlyzMdIIqlTTo59ap8cc1AmskK7bj4ZqpTjhPHZjwjwbslCZZhNBVxyMvkw7K3AyQY6pgFdY0hh08y9DfbIlwVOb1iuOJ1HAVTvOM98MQntlVkr9vyBK47Ox%2F4Pb3Ou4OzvW1p2alv6j1Mzc71XO4OQq7v0FM2p%2F2LUOrmunWN5Ju4eW55PBNlU%2FkN4n1MGPiHN1HMCSS4GM5S4LTDof%2BeYYhpQfuaZwlGSHigsasHKZrXNlzzV3O0rEUyONTm3E15Ftef4JdxfXpRJShEJQlIY%2BGiQJJRBfqcS&X-Amz-Signature=d8f05f5014bd72185acddc60057532fe7b9f1c37751069990001b434d9ccdb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

