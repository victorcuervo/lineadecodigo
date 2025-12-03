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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDK2WWK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIBtmuzculGHtfXtn6%2BzTfFBKVKri3dC73FF9lm9t%2BseUAiArNgWHIU8AKJLLmHSfjcnYm%2BxbVBDRzjLT197sHCuFzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIME%2Ft1Dr%2FxBZrn5V74KtwDja6C6pujfdoNPfYCATTgULGSPpcFl9R1dTXyPTVy7FJBQLU%2Bj%2Bqb0GiJkb9kVgn85jv%2F0Mrsj%2Bfymelmk%2BNK3pkwkUDoNRMqJ%2FM8vQPw8nyEgK2ygvU%2BpLgjhG8CZXOFIblxBoVAc%2BwQsj6lhsWem%2Bgak%2BPwxHh%2BIgNuQjkkplPslq%2FskbmRN7REQknn2whCjg3uByBXPqQr%2BSNdY7ltOOShxDD5XiKvZJwvNRsOXVv2QJAnrhBtJWtlpaVKLb%2FYLrQojy86ZQj7Z7MaAC2xdON0ej%2FXNGBIsBpOd3JuKlOg42xSNqlzjFRWmmvfOi04TjD91zo3XB2Mo5%2BV9ZqHEmofg0w%2BCdbQXtGdGDrc4ULlJkgyKXS4dzOf7AZckhfGsLMW0EyCMCzjviFj1nGKe16l4cqJpkvFttlMVN9VIP7fjhSVbqINqsY672%2FCYbA90gqagUXjCqFh3I00mMBs09UewnywvXAXSJs0a2qfOLWu4q1lx2fnyBF3r6JymzxkAQ2dR%2BQBWg7ZanpwD699W3O4hPzUhsUbEArmn%2BFzKfJ7M6F14TIQGPqtZyY%2Fg2DLsZ2k5T%2BpUYGcBvf7unNZrHvQHt%2Fhp9Uskt9hs%2F8i%2BMfqWocs3%2BDwaIXfG2EwiNW%2FyQY6pgEcUD6Qr3hqguZMQLc6EznqW0XeE%2BYFQI%2F9ZTRrTMIwYEXVcEtH1bLAtI7%2FwL59FbWE%2ByP7KSz%2BeJXb9QrR%2FPWx9aUGcJBzHtfNeo%2B%2Fu3rsSJI1dcHKUvsPXabKTGQkKPy2eOluqzWBEazrQ95Ix3uFf8PbckA%2Bxb7cC583WsFWI7ah4gBSFPu1Ug96AGKY%2Fc3Z7eMQK9kOzYWH9aVrQDFVZ8kII%2F3A&X-Amz-Signature=b38a2c1af5bf492b6e5e977bf58c9ae6f267a4f3409179ea0ea9f1bc37140cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

