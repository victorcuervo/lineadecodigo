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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JBPTE3F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIFVamqeMRpCepfdZ1bVrx4pBvpwFBP6RbDvMQqyE1FKQAiBGviszOarnAQ0Cz89mmImTcF8ccj%2BoLpFuZ1oESiZ5vCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMxrBArrLwpBeftAU5KtwDVQoFbCJtrzmZXtPKYuXFDXpd8gdrAHqw3y22AunsCiaOa6Dnscqu2ZGcIHCZPGfqrJaxMNxCQgxy1T2xhHkHbZfe2Hs%2Bp3UKsOGQzZ8YjO8oZjXLrDtmHrJHhALehxo%2BbgASiQTG5YyQR5NAGuUfn2EZAV3ufS%2Fz5CCQPIz0OoiUSBQvvaZKtrnNbOIZ1LkIvH1TR5z%2BRlx%2FgNGhq2H5%2FiiasAx7K5Abr7eeA4EN6ND16iWLMuGjcI5nlE3nqoZYtFbs1scFPHqc3uDjMazTu05kp%2Bu37i7DjrHYH6Pkwp7BWPf1ixv46NuIvPd4PkR32BXg5aTJy8qn7vXhIEFvwBjB9Qz1E8RV808qs3rSserNZwV1MgbB%2BmMcyIwHourf6CVwbwhf2itEaWBc9F3SJdyuaKsBH9%2FT1RYo5BK3a0vQ6j2nowXor2y%2BfSRNmn3fYinkHQ%2FsP8h9Xwsn6A5%2BXeOGTkymbPaJX%2F4sVzGYa9YadHtVqOza%2BD5reYEH63%2Bv%2FpwWdaqtcgs%2BArxGdeBVkNRg5SEkdwuLzTISPQqU5F2ogD3nTPpn4ai34h1Sq%2B1FcWF6w8ovTjCWY%2BeeI0lN%2F2Bj%2BILHFmPLrD4h96nJh37Yl61OXrRo4ApUCBMwpLi%2FyQY6pgG1MUXxqP8xDa94yHv0tH2bgXQKjE0eOZ25%2BvOr%2FhCOmJjZqcaxQT1eoB4oeFsEBrpUAoZ2Df3PxfHcMy9s5%2FS8KYzkc87vq6Cdkl%2F8XG1s6PPx717OLyI4%2BCdby31aOqoh0cjniiynxEoN%2Fv7uCQWVv7JZxSVnF8LWy%2B4zYQYa9n4LpQ1zEdrSZuJnc2yXvADkZFEx6YqxVYSgZMBFLsprL2S5NFT9&X-Amz-Signature=2d8c0313bedbd9c03a5eb0cecc22e63fbfb41d2a5ff0788824ddc3e428ee691b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

