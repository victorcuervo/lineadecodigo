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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTD6DQH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDVrtgvHm%2FB%2FlY2kczkmSxR11n5cKdT7layUC7OtiG8UwIhAPd0Rn2gc%2BmhYAK7TQXTRhu9DTz5iybLEoFcfWxlBrCZKv8DCDEQABoMNjM3NDIzMTgzODA1IgzDo5XjkGXq5egDTcoq3APekV2E58OGJdkuRovFjOo%2B9L4FlkeZUxOIv0sZYH7Hi3MptNVGkGA84eFuP6qgqzyt%2FdfYCGe4co%2F224B8qM%2BYbjG2ejnYlg70iUrpNsQpMxeU5sH5HRaENrwNuO4R7qHgYIzZVHsfppsURV6IZg8GwbQvCV9zbu%2FcBNRQS%2Fkl5OAUKdArfWiWVYp%2BGrvWF58czdTATABA0MswMHFvSMv5%2FGwCHCWVAiveLL1h86lGEF9Q4njHrlv308jWXQfscop2xdOF6JjJF9DBJgpHrio%2BF8999zJhvlPR4I3klGQbZ8A1cH7RZDgxxyhlSaygE2WppfEUwrPEifa7auIoeUkZykOiUCXlL9sxp70F6oygRiVKZ2SmcC4zFNHxBGDX5HZ7eqHmKghsCKYZVnbm%2FbENCSFo14u553iUX2lm7%2F0Ivs0Z8LEIkcuLb10ljZKya3DVKhHH3lNfmvEMHAVMufHF%2FMneD3Dar2Dd1zKtpApnnXa5LjwjXnKCWUQg1MgZIJIm0qbiRVvmrAYzHePW0NQockagevL0N1WxH5jOO7HEkRH2jPyJScDqKwk0ia1Js6FyUNQcWaeNfbbywwQKLkLvHD998%2FQafgul95Sm7Q9YI9f2i%2BEsDUL4GhygnjDwwMHJBjqkAf5UQeP0Rzd7Rx9TlI27yvIJCumE8MjNvMbXvG3MmimTw6mbRX%2Fqag5BAAsDJmPJIBicenUOBk8WLSREF2DB5JbU8O9uh9ZHb%2FMnBgF3t%2BUOvgju8quq4FqxxeHVO9%2Fj9cN%2BvbOhZkm5spLzeuttnuOBMwcjy1Lsx5oT1NtfPQYcC3Emgd5CbSfjhNMR%2FLyGq4cPE1bSlZQMgkCqHBzPxdVlkAJP&X-Amz-Signature=7cbe9e6b57e04e37530abef754270fd4a9b99deff87d0fd7e7c37a872814152a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

