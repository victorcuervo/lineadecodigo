---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FD7VYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIA80045mgySp3eQrY2iWdfieSu6WTp%2FcY6K%2Fl3EmhEszAiAWNK2w3N93wmHBHkBDt4hdtQxifDbNiuMTDt0sT4%2FGayr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMFUrxizCiXTL%2BAAdrKtwDDH8JSk8ERMojMpeknyM%2FrUhytOh5O917Xdf%2F%2FpecjWWpCpc9S3F2kN9nQzdWPmlm1utYdhoBAlstE5o537sw2B00ir4Eqm2u%2FZPVJFAmJ2mBTgvELweu6YbD%2FZE%2FMpcuulR7TOjnOrdGM2WgzODiVT5WhZeF98iKj5q1W0jhGyxxMZwZ%2BBUbju6uE1%2FsaHl3Wj7T5cJySC8asrTKaCGVY4DPdxk%2B82HWTV41dvcfMMdNmIfzicu%2BSDRn5%2FRne2%2BgWS0Wn8hwpvpaQR6Jq5zEzEk3e3ynzaHkc9ycAk7nAtCU2owqXdsiP6n0sbgr2DAhQ1sl0DZT%2Fq51RmAsmXEKe0axiCFTPQVr7cy4jM1%2Bzle7ZAm6elwf%2BMOmgEfOHqICQyXaq6yzi7wVaJqeUQlVEZxJEEIz9cfdN77KAxGLUXk26hMYu4GqUxSAk%2B8XcgyzjJYpscDY%2B3ik8TioUJziQ3X8PF1jwWvoY3fzipzJel1%2Bng7%2Ba4e7M9g%2B5B5OVA%2BSuPGZy3GqqWCUtYOnhOG0NOlw5pJU%2FJREK%2BLCoyTqghrtlHuErv2gTQt2Who2uxWiEkpytrnkQnmXKwN%2B8boMptimsjBz5PYDMPlMfAOuVCofLp4GvJD4YEwt6mgwobXDyQY6pgHMzRXK1qifD8mMMSqw04zY3Y2BkQIEVvFvOdErMaCP3McchQEjtM2x5wHFwIW2NpkGkZYNrYKigzQzQMae7jfa3R3z8djiFDenHNqlprCkDr7Wv%2FH%2FaQRBggOEf6YZqqrM0AFmC7nNAUf5BijgGiI1PE%2BZy8XM4kpL7knYkXv7oGJfpTfTKpil7jCUpxB7bOF2VtgBI5mVf9tcp%2BGUNIYEUSogtA9d&X-Amz-Signature=99f9e4b821a86572e6413208280f9390008b5d175bdc849997b82f3e4a375bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

