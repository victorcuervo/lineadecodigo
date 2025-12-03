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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5LS47CL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIGApDcVA916iXMT9pQZzpL0bMrrlXoVY9Ic2Kn02GxYQAiB0VUUynITL58iKd1Z3%2B%2Fu0mk2SVtUca8oKaZMXNdRgECr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM34V3u4U%2FohWH%2BEgTKtwDCbKesWel01v8V%2FEhG5XSQdg6VjxBa%2FwGi4zGrEx%2FkCFXE5x0V%2FRPb1MWCwBP%2BjtKIzsGd6blHgkU2iqZx5W8gTowigX7THqbBTD4xHXY3zwYSURm%2BL4dtey4lt3aXEPeRchnZNaspqnbwzGGH2k0XfM77LXFbEydpOCwNAJWuD%2BgLFbqBstTgxoOAc%2BP4OXiG4BPUFuMG6af2Hd9HtTAMDA%2BaK%2FL9pEqxNglXUTZw7G68NRTgziAZfKX%2BDUBeSpjcrWNsyZ84DL40S9vlfBXqFw51Pb0G3MSmQIsRxlbmqQWTolLNKk3t9MV%2FkH9Zhvn5cC0XFZGmB3QvHhMNUWGdWYkft2ThfKs0xoIepzRgFoQh9KbyMYdfgvjESWRgkwjqiTys%2FW9sozUexk8UreQMyJnI3ewu2YX4e%2BrRDLIaW3de%2FsZ7dXiUCZ0sAU1h06fFiYs8tl7uWagjA%2BMUwI0XhIbhBuJwg2sm4co3xme07CQ94Q%2FU5%2BtJn4Son2G0p%2FuxcytZ227%2BiNyaJLC0K77782N3PpA4%2BMKf0AONBo12MAiXJuUHGIxGasd5VPD4GdQiH7q7VdOXZjrfHLbTPqVPlqcQPpGmC8qH2o%2BdhGaV4G8wNBkb3UfKfAqwckw45W%2ByQY6pgGw6AQ7hnWEKS0TqHCX%2BPmgOh3nYXgUt3vjAwDAfB3Xlrb9JqgkADbgGxyYTZSpZG%2FNwytccFE2CMGITMt%2BbgxVbPVOkxxDjT6zddRI%2Bjpgyel6TaBvJazh0CXoGTOZ8kGrE%2FQ3vJaX%2FxfMULTqp3Zng39Y48dMSPc5FVbGbs7SaWNT2NBu1O4oreCJb%2F6iA%2BjeL295Jyky%2BHgfKgOsOAT%2B1p782lAd&X-Amz-Signature=201b48bfebc6aacfd36604f154cabf18859552210d459e4c42f1120067ec67e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

