---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665QPREAX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQDcI0ksuKYug824bltdatgur5U4aVsj7oGKeSdnkoKepQIgeiIXXhTNDtUGl6wZVvfqNw2C0tcXwL28PYtremxPshEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDABmkaOz3MkQa3vMiircAzhK%2FW838OrCmVhQjvI5ksp%2Bi1HGVmXO1taA3EbQ%2B2h8DYJFp3QfNJWTAtY%2BTDikp0ZMlprihWqf8uKqkiCFRfgyKTY4K0VhJlUD3LzvWHAnD6nFgqQl0tYaR35woAc1wYeeD8SL8KxzlbqKWoMsPqMT7l%2FZVcF8xJ7xCuivqZzyYwW0awJgxy%2Frxwe3dLuKbvuQ2pVleic5MgJNiW5mkA9pkxWqc0OoBTPNhe1yG941e7ak7VC7rXLoHeMfpX%2BgnpLzNeB%2BZOl0VFlRbEJpeh4NnrhBUeveu%2BtdgYWfpIzn9a%2BFdijzXyPOj%2F5%2BASUM%2FLJi%2B3udmzrBpMP9vX1hu%2Fpm5SSRqId7bjf2N6nVYknlTRDfOyX%2FfsPQ28p4cdxeudvsTjZd5E6kLw7r8wMfHK77VipSSsWYUYcUqfZ%2BQUWkVrnbWJBF3UxkxykWj3obSR%2B2Bp3oEona63M%2Fpq5SJCQMPC5I5SfkTOg53p61wwTMV4%2FV3pwaFHw4pfCfYXnEtgNhxgYK43Rs6eX%2F%2Ft8oKr%2BO0pIm9H6XLTTgtl2WYNKEDq1%2FVzFnP2KydwU6cR8%2B5N1M%2FaV7OIhoyTuGFKIZa%2B3A8qpVPbx9BWVPJrwwS2vSLbIWQ4lSjrEYMen0MOKUw8kGOqUBAL3kwXSU6Mxo2NwTZ00XOZrkb3HrrA4lljblm7zLI4sdRjk2oRopujeRYOp2gLj7MEFeabHYt4Ag3uEDc7i1AObDD%2Bp20CrnTOyC5fPWBxSb8GLNXFXLWEimk2Vj80i2yve4xD3TVrXAHX6ECiJuxtZyV%2BtDiHp%2Bh2SzJ6rcMuqW8zXJm0Zoj5oSdMsNGZfBj5SBDQOQfqGralE7r6BLSSR8pu5y&X-Amz-Signature=bcea1eea3f080334da6750fb5cba8ca465447dc504096dd430617b1ba12c9389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

