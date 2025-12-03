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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDNTYTJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFPHRmjspxsJhVHYX15Vz7XPzNP9W%2B8FWNiWZVEA5XizAiA4hsB%2B7OF4TFpGAsaDN3PMWa0NqCZBpu1OTCn66f7JWCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMlvXZMBXkL9oq4VimKtwDBayVkpZCiDLCwE8btwYZ9GCjAyKsYR6ZPqPdZ6XYIGvDBZyC054K7v9lrkagkI86mQLBgOxnl8LqBYxGggLcrsX9gMrfZWCI2CBgGR%2FM2XMgD0mMdAhPkzlu0%2F84NBPclMw4CFLJZLc5ygPkIfOi5llW8o61fnQDhgUR%2FP23AuwvxiL7aRZFThkxD3KubmYe%2F0WzdRlng2nplyDI5sX2EFThXd%2BRl%2FKHu2wV80AgeWZKloxuTRh4pNvlouRT3%2Fhbuop9EBGa5XwKWujlX852m%2Fo5U9gecNB43LFs%2FxTxJjbxjw4AfgcdAUel5YShptECuI9X3XQDPSAiAM0kTeOfvQnJ5zkJYa2pijJYNg4tcBebpxKhoQvMXQtJvX8k6z0FRLotucHdNKZXsDW0OUwL55FR%2BqeenK3b%2BFsi%2FhPhXQq%2B%2B2HhTLTlMFm091sqTxqAIf%2BzSIeT%2BabYhsg9a8yGUzf3nMcQN4lj6LuGu8WXUY5KSmqe7v6JwahfSFEWeqv8xqnIUvtUox%2BkfSDkxqoVu4U0I%2FEr96yt806ShJbf4KOcL3Ehejyh0yaxESb74Soe2LnTtWp%2FyJAg9Gx16U%2FUjci0%2BOETgGmJ9D9I9exaziMhHcIg29LgyX6uhOkw2sHByQY6pgG6PoQ2J7NsqUnvzzaOWZibu6OOUHlU5u8lRCkClvGqRUglG%2Be66gy31yR%2B4Q4J8PRJAsxhEu%2F2dHAZvDXFTX%2FrCRZggHsF8lBtL2slLzUbhCpvp9XuYa6sVntyrdsd4q3d6SrfeMKlDYUU%2Bw6PhWqSAYKYJ4dVyceKLg7Ft1h6rYk07YpbrUApyxHulyoBd4Sv3BnXpONsb%2FXeExIAnhC%2F6nMzzJOS&X-Amz-Signature=47390519068c91a57073ca77a93ea704de3816aeb886d7a06783055b121ef461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

