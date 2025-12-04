---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635BSMKNU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEbyCFxDET5rhyvhxhUKhmDwsQ7Ri4zbYYPMXmDOIo97AiBqPTZNYE7kcBeNeec1vU3W9O0%2BBu0Qb3SMWhuLvgx0nir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMN%2BEN31GDRFImnpBQKtwDba2rerygUaNS2IY2toXk%2BpTRrGRAwzS7KpIL3FlFrj7XAGLCBpHCIh2ew8%2Bj78FqU68i1zAsQ9MQDnfphSKOWwmH0JXWNtIumj%2BisfHk7mTkk9gWJ8jd5yYg05lO%2FzyKQycvjXLMUJgQhiAX6r9pvVybi5nVSbq4Mv1a8WIEp0z6GoQPFtgd79XC785FYfiCFzgqZ3Zt%2BOTjnks6HsMov%2FwmJvnIq7QG9KQWIlLgohcZNOPw7CNNSREnBpvkxshXA4wF9xVYs39irMhOZa6oDi%2FM6rK4zM6xrYxRZ2Fwrfbk%2FswlVJbARqq2%2Bjdv5SpiReXeV0%2FUFZB%2Bxdy%2B62C3ZZUapDkC4VSCoFGnQt1rxQTHV7FZX2Oiiz%2BKlBve%2BeM6e8Lfwjcai%2FtFzbDXh8Q9TS%2BZ%2B9yED%2FYw69NJMtdeXWUAs6FEb9cSwg8XmvfZfm2Kyd3vctZjb9xrt7DuRzoMmnXeqyeRBWuYEGmCzxv%2Fkr61uzANQi4w5bFtPzgamWDtCMbHU9DLADI7a52%2FvREtix4aXg2VouedYokQPV%2BJXBgGKrypKOA1Gmri2ss04tNZbesJ6suIT2xrKDP8kZl86QRWTwdO3UWA3%2BftjY2TZtIDTzZ5mHPE%2FS97opEw6oPGyQY6pgEnQFKlLWN6bkk7o4YP5OHzR%2FznBlT%2FvYACMDkXTBZuRwTroG3ItomqV6PEpHHWDh%2FI8ZuyzhvNOIFthLcKDFqWgmU5FuYKHBZ3pLh%2FdnDU31BAh0RGEI1%2BwWT5XKjyjdylDbhUZLYvM0pN4vDWUjlv0nebh0yFJZA93Z3lUmwdLDoq9rocBKwAHPdiTNXWwtDesPE4vwYEEGu5nY7Bq5aZ3qq3MzrC&X-Amz-Signature=85781a0fe82885b7b343ec2a5c54a974b899231c064a6f447cf93faca1468048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

