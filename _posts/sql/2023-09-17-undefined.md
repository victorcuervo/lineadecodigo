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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LJIRBID%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIG4sqP495vOKKAgmbM0L71MbBlYZ2npM7V8%2FEn3DLZ5DAiEAzwReYn1allWC8hPAfUZwxrGPOj5obvRNCfuLtATQKPcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDCaF2lEaNgwmku76YCrcA2N5JeFI8bvZWATjceANX7Y3%2Bkk40xeYYWdm4si%2B%2By06CBxa789%2Fu7xdQZWAtgeHWtRwxcCoOL33Rb1DjoxwEJ07%2FAWAYwiKV%2Br7%2FHLKomuj0isO4ChsaLIuHxK3Y%2FSoFp1yZb5OreK%2BJP13Kp1EPCLcSc0CxJ%2FjuznWbbjOv1o60h1xEqCa1lvgcomqpVEv769mat5So%2B%2FFE12zWyw54XSfSbUBRFdUH9VN5fAwVFAe%2BzBofUcn6LMoVP8Nk%2Bwf6z2aWyIKNnQDzaR00rGF65js44SjapFHoJvB%2BND%2BC%2BQmOXKmbtoiLTa7O7hh1Z2tUDyrMnVC7G%2BiH4SQ6SBoKa%2FjZ254oDFh4k0ZzgxYh2w7sR1Q8NiGN3PlkyqNXHpXcfPgBYmxI80qqwDBd72kfpWdEfTyc5f28bVVR%2BkWrYh%2BuZlg9wqMGbtSdQHqTpDxew1LdZxn0uY3jxhzPZtsoZ1lGeekKfUmKfE1oXcL2%2FM9l7SEKLQpGb%2BqpYS4NX4Lix5rTTy7AAOtqEwcYEA254KDK0DpPaFjiCA8k0yZ2DGqMi0lee8QDvg8y7s8Bi2d7iVAE4jEjareFY62riUC4FN1TynWRwTXiWnzXFgkrf9F9E8KLYGysEQe1UY9MN2lwckGOqUBlJ%2Fkt6lGUYEgHhltq1aUSQPvE%2BDdkdf0sPvh3vo1TlrLjtg%2Bezb4pZn7CiXwxKi1eHcjIBYrXopYeEN1iaDPKaBGlVRG1c9OTQkN2uJlKGz2WP4FOJOMEoVNpU3DaT4Dd1loB3%2FR1TLFqdrhYyiO69iybrUXcuJP8k%2B5MHJeGyFkVgd5ozhlZ%2BG3fREw%2BWL3M0pKmGrC3H67a4YTzAnu0LZfxVKt&X-Amz-Signature=7f29dbdca34659754e8ea13330dfbbdcc613fcd1390f86c70b7348dcbae874cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

