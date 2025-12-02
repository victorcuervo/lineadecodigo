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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDT7DEE7%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCmnploM1kRi6J7xReY73sF0974UphFJ0UwsouAakP0fwIhAO1W%2FLfxowOrN3fqYHf5IzMvXBY%2BKbNKMxccDP76Fx7zKv8DCCAQABoMNjM3NDIzMTgzODA1IgzIx7JBC034Y5co1K4q3AP8g1hi5lINWaLP69hPecTabWGoQFhcSER9cQdySWQRc2L2zu208aAR14rf6wCU2tRlukcwtvhn%2FkoeTpMuhZvzVPye0AorD8l9hMEkCf9xaAe8fmqEFGhrYxNLnRA7HYEEGJn%2Fx9Uf1wrMxHRAnZ%2BA2oX1y1j6H9rn1N70ir3OPie8cCxn5mPaWdMFLjiL1fNoHB07xLE3vDZsSI%2F4gvazUVjI1FkxB7CthtoHI%2BFwpQ83DogRHPk7SXPHfd1Pb3%2B8IRwqyxkRkycSxW4jtorGKyLRuPs64kZIveOtCwMwxqBZDslCmWpZM9xfcPBONgiyZTk3%2BCz8OX7HAr6OVW47fY0Z3Tup7zMI2%2FfO6oZPeAlLmaXNH1hE8xJa3P0hSepKnx4QQYhFeUJr5u2x0z7mf9r5zbf6iETnJCqQAREf6E1hYHLGPyVQp74r0v%2BXX7PPMBe7mC3CmYPzSiJdhsHREb0KhuEfFz4p1fzBi6zAxD79WqTCYsdg3k3RWjbDokFkh3MlJX0ZXyaVb%2B3O%2FfXN49JJOTZVwoqhW75jqHDTm2tjuPByT5073%2BE956da%2FUS%2BThczxDdhHcRFpKCleWkw92llCIw1RXngWCtioAXN23%2B4hpG%2FhnKpyr9ScjC85L3JBjqkASs%2B3PUrEj6KDvawEronD04yzWXFGckSfWH8FGgE0qUlSgHlHxMxfAx2s9My%2Bi1DK3Yoy3p8iLkab%2B0be%2BaVrc0670EdYOYaVzo8nWMhad%2F1Uu7hrFGY%2BoDLEyINqqGZ9CUbfORRmhH98TGHM26Y4isRoBBDaZvPaZ23TUD5W%2FuB6otI6xdm6HCjRe2DRKSLEbcMpIwYUEAymPx5UN7%2FBAYjQVhC&X-Amz-Signature=f480ecd7cb0d26209bdc5e999ebd035e9485e52751ae59d7e3d02f836a3caa85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

