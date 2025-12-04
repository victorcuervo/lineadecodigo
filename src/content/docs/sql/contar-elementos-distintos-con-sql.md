---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4OVCIPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFNM57lWTG2rS5edRAhXb8O2OX8Gp5Iu8zqnvmrOzh6EAiBIQQaUdD1b8czTqj%2BjcKv%2BFdGydGHCX2v%2BWEIsHg%2FHoSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMGeO%2F7BwDDkTiWTkxKtwDviJppqH0o%2FVuBhHCaw6OZGfUXLhqCsenp8y%2ByN2cXUxpfx1g8NEMjAWGqlFeH6ZAcsoJKQR1GX1FmdxF2QPa%2BShyjgfrcfvWrJmbe%2FFZD1PRLLUOg2ZDozJHdOmjoWNnxJLhfbOvmB0QrAqx%2BHNGobBCUvPhvVM9K3U6kodo4Jkvt5YVsn7EZAiID7eHxnztoG9%2FFGr7Tyww8W4V4mYg2mQbD6mOTuS1nat5G%2BV5KvY7s4UugN1V8YZz%2Bbguajh3S5ERWhCMJNbD%2FL9n8wDfW52m4eBTPaqBqNFJ2JIfG7%2BimOLsB4dPZRNxXCd%2Bv6pvufPNQmWj2%2FD3wohuzu1jf7EIzPGr29jwQqCo6U2vVYzi7IYiMm2BF3%2FHzL%2FHkbSQrriOfD2jFBkl4wUTWjUZL90ajzENx1aM0RgCpnykymI%2BhRsFf6YQpK7FemPmbd6p7SJ%2F%2Bwh4lytZX27hfHc6d9j6XHUCtUODXt6nbw58CzLC%2Bcb48JtfZt16KmZSZPnmUrrgi06rluQCC9%2FVtmPhlfXgSSd51ulxlaklAjBYtZ8ySNTMnqcQfgnHE6UzcsbomlCCtmA6wlHhrJdyDq3uZb7aeUjIZiZODK5TtxiVfgrAY40t0pz7Iu%2FTx%2FkwwsrEyQY6pgHBa4XL8aqYMcnhd8zchIh4DGILRghWKDBcmRm3I739L0yYAcqbNH5cr4N7VtX42p1y7MaWX8EXltQqK2oTVyuf2NHYNWIhQsTBmfimGId5tFCTtqGIM3lWEVIP%2BzzO7hjZB5ci%2B5CyZB%2BYxm8NBaHJGz3Cl2HTm%2FdzWvjtjTRyCQABxlQV7tod%2BDHjwHG7c13wPcd1jBFItUYHUk%2BkoTvCsopKzCm6&X-Amz-Signature=580669c41281a3b0f86ad61d0430625705ff15e9c46c0cb15658a7dce54925b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

