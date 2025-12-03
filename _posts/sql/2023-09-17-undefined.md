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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5Q2UYTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGYSbA4Jcg2qV8%2Flom64aAHt1XgWWGVTbtD6GzyOdv4wAiB%2BPaopZMUEfLh1%2FCZBPZoJ2NCdxdr23OxstfLOzZ%2B%2BHSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIM7TI16AxNDKIYMPSkKtwDX96T3C6JFlLst32KcIVrzXDMo75MmYevUD4ZPF96Uz3PghBfSZwQTjsGixQ%2BZpueMjyM880jN2Z90iUZ5r9Wqgk%2BxWhnnvKSG5tUWw8A5R4IVrwvYENF%2FMifUkiSejFhA4wErItPfGzdmPt12QXDOfZKqYjCJW%2FSGDA2c%2FaHQlWyGp1LenqOFkZcPeDeiCqK6blCI6LxusNtaGONFS0hqFOJEaXsfWNMcd2JyRibeJt%2BLGSzTXiLrgAhsvbGeReQOu93fa5eh80oYgaePdZN3q6KBQ4n8rTbv7yKGk7p7nIeT5DlL91zodzpj8UXLp2CrzPDGQ4E5dau50SeNqk0YaKfDVv9Un9TxkbFy0I0shcTNtl0uZmdKojpHBBcNyhQYKXfNpDiMtj5uulNCWx3uWMRmYX3%2BLcUyuE9qPKpPv6HvwAXs5P6TpicZ0qoKfU%2FYhf4tHYBS6NAcaLHer2izX0o8VvmNc4R%2B1Hw2wOYhMMzIVe6e4F%2FrgAsGCX5ct%2F3W5NTf6CEjmFMWjP0UonmO5C6g28fZ567M6Hik8EyZ4bZP%2BpEslDG8u%2B6uLj2OZvbBqnl%2FBMc9j%2BTTsFQiUUFcxFdhYRFmk5fTCFGa0Ud9RqlaWKVwucZD%2BVnK1cwgqfByQY6pgFMEIc2AM%2BtsAXReMEHgaAR0cktFfoOkWbPN5ATBaM7Vf2VjuiFbsQLCy85IImlAC1rifp%2FJdMUCMVkOFZtKc272alBQPJVsy2o19DHyeVU2p0nc0JJaMDn724K6%2F4yGYUzJyb%2FmUezE7iDDipCIQ%2BtPIuzB9S69ZEsVBhibhsZ61GC1%2Bo9%2FzHcCJQum%2Bz%2FttaD%2F5SSbfUqaCN0LpFbzyIvuVG8DCKS&X-Amz-Signature=b5c61a0b8054ba2243efd98fa1123cf92f5d5c95a6d168e9d9f910f44299e3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

