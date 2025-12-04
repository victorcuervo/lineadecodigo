---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X554XDPV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCMU36PXIFUqLv1CtC0pch4Qvap0pLv1FVFy0hC8HB%2FowIhAPq5eGnjMxKIz5Es%2F%2FRapb9nXBJ4ftTSXYvaOEyirWdJKv8DCDoQABoMNjM3NDIzMTgzODA1IgyMHdd3lvw79S9W6L0q3APqDXjnhtds%2BrZEwy92CS7mcKyK60y1Tj9ERHuTjT1fRe%2FJlEXg9JRgjCddFcn4Z5%2F2ofu1oO%2B7vpJi4exOXC%2BHzUO%2BMaHNXVdPk2WV3jgk%2BI6swRP8%2Ff3wYTvRFoZVZJdOD4YpjyP4yoUQxIfBIx9V%2FvfZ7WpAm6RoBYfM9qGvOts6w82B9ZTgM5lhMFXoxbLXAqMwO8aNOOtpABGFn74i07PYA194KU2ys3LNC%2BzpsGMkx3466zQOmjHGwuK1NJcbS7konlhS%2Fjhpi%2FHhRfA3k023849pZWosAb5UIdVMMng3UhqO6A4Ug7%2FE6EkbeJWPUYMrAQXvH%2BeZUdu8ECGHOZh2mkr%2Fttw6hSrfgXW3hxMOhwpOElb7Rns6hgJENZzlbY3NXS6kU89%2BApAnAcTtEst3X7oebwFmeiRPokL6kca6hAojbzKADJ4o82p%2B8yb5LWWRAVIJnAp2WGrO%2FZtcTZ0zfoPH0RZtZEG4G5d7YQDpLo%2Fpu4C3N5QABI%2F6mFuL8eAOddtf54L7urFi0Qr6ngWOs3hnpiSF0WYisIFk1dUZpNGUfGudP3ZfT8hKbJbKuFjvT%2B8p0bTDMTvedQFhETG6yFCFLUrG7Y5WdPYGb6sD%2Bo%2B6AI1uS8Ho1TDFtcPJBjqkAcEChpo2msovjqu2%2B1qUw0glFD3EUfbs9wDAYx%2FDyU7%2Bj945Lyt0lKNbHw1a84wsfkBuiRcuFhb4SW9fm8uCb49Lp6ugTNCRfDC8uYsNngB%2BfqxJP%2BCG%2BXHT69P8OpvSBIDeRhg1nzEkZxiweUE6MfA%2BGCvoAYsnu7af8l7xgy%2B1w7QKuL8AAQiX8d9xDFC668gycVfGsZP3swJciyqqrKDsDrca&X-Amz-Signature=4f879453a31e1c7b13b85872c7638fa1256f5173c3f57e6269c5cb456ecb8606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

