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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKKDVJG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCdpGwlxEBW%2F%2F3ZS%2FBgX33i%2BuU9REReJNUWa2qINc5jMgIhANC7Map9w13Jh745A%2FZ%2B7MTHTSJv87VLyuwxoxWLCx86Kv8DCCoQABoMNjM3NDIzMTgzODA1IgwFlCwsjhec7QNvLkYq3ANl2kMGX0bbrmj3E59JQ7Eeiw6ozUF3medidxc1TvNhs8ypIj22TcbTc9QtBGA2HLsM8zEql0JA2FiVMGzkCWvM3S1AQBVcIGdICy41K1JDU7wFHrEwiEig7SGp9IphaWJZSNehh5gRSgu3ncE3c%2BLPm8U2q9BYxesFJXDzyGVSZpxtpEIK1snbRKIbEWTtnNxbj8LW8goKDSQC0bJOYULobJRq3kR1jwNJC0l5w2sezRbESWqhjnDZPkumZK%2FMXjEkTDMPW8CAtno6TX3dh2iwwCcubcaFsyexHLk8WuDR8Qj3hN2aIP68FDOzP1TV8aQWW3P2mCRAX6gCBOKG4mZIRQrGe%2BfaE%2Bu%2B0bi99jnaUlVuXTlbUe9PBZRDKZF5twL3N9z64pAMLkLEN1VVCxfxXm6okIhUzXqHgmJXoabZqfoN%2BGgAxgI2vrohVerGTEYW%2B0Aq4KfMZsKg8fOLhdHw0clSHiaCMf4lhLju6n0hjrP3WKZseVMt4ovRUo0KHjcMpeS6uWHLML%2FIEDtD%2BTBeTW2WV0FbUl0TDKi%2F9sKxFBbm1s5yEURWq6Z6D9W%2BiNn2LoHgpDWogNtsteBKSE8ah3RqhXs75e0megCh6AfRiq8Ia%2BE1Ut2BZxNmjzDj9r%2FJBjqkASFo0alX9QG2nqsVhW%2Bd6X6wakFhGnQFfDCBD%2Bzs4fc4W3aahYo9CfrXksAo2D380lnAirNe5IlAzZcCZ%2BlVTK67ArVmteWGOVWwVeCUkoppyPvYEOaHLIqAWDHp229IrI8sx515Sr15gr0kWMj1f3hnJLX5ucrP5TepVh2V3HB4XKBP3Q2mb1DyzN8vPjDvT7iANbm8LEsurl%2FDqtQEEMKcBXqZ&X-Amz-Signature=fbc7cab942d19fc9a0b5671ae0052957f9825aec5407d08faba4d251ba59e7ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

