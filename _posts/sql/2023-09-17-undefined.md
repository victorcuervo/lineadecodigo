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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5SYKA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBgJvPyLWYWwkcF0wly5Opqg6s3eB3jBJ9FZi2kdEcoKAiAqMoBwrkGR76mPATkarwLJGg20n2slQOhxAw0xWqnIoCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM3v%2F2m6WlN4T4AwHBKtwDZiTC4NDVpbyxV5gVTo0wGwrAw1bsKNJApy%2FqALA3%2FfQDhdDZHiJuNxOyeHu1aAxBlnHf9HL9PVvDyqFbT6vCYzkwV3YCOl%2FQyeSoWngM9aE9TY8r8KE%2BSOvOmSQzDpiUNIzCFv8TlYpX6OZp%2FH1Mcub%2BlpspM7nG54woBGl7SwD5l5SxPrSpQaY765lXX4h3m7gc2qhbi9uvi1eY1e2a7526vxz21Ssyty2rT4MDFz0XJEnXPs%2Fn9cvAhiQl%2FklrdlUHZyn9jkuCEwvS2dQuNjt42Ns5nTObXqY48jwIrDdEK3dZOV194fSDmZKvjynSwa3%2B%2BJjhAsbqLl0csMDzRuHG40mvXMpWaEiRD%2BAKyfb3iLo9YiuRu9bvk2DQSQdxa9yh4kQZ7N7Obrz%2FEMOwUE7kcnVDKhBL1ktGaFM42B77qtGRgp4J%2F7IESOuT5Nfl64OGzxuMOOXxDdMwz5hKrmNqxlWyIsP7n%2FT%2FLCb4c9BsJ%2B9cnbJrQQ9jQy5cHl%2Fe%2F8wXCo%2FoRSl%2BQzi0CxIydK4s2NrxBNzGF8G%2B6K%2BhBa23FaJLQxJuFIKyNxjDALZBBVb20GjUFF0%2FYsNDGwT8pwHuXgpX77OLgvyHKNShTEWAtrtu9rlgjCDfhQQw3JPAyQY6pgGsE%2B2LUM7smulhfh4Q7bL2f4Bk1j82%2FbWxsU6wr8RVQfD%2FTTVtSBxj8B4lN2SwQvgV0zFCtd%2BZv1uDyz2BwfeFTQ9MmHaykOG6z03jzuNECwxPjwpeRAFHKVfSXSbu8yn4Kx0Uijn%2Fy1pfNZPtyXxDrtT6zTP%2B9yncxuJvrxiGYWp3ePsbpF3dVG%2FjRNBhmMyBv9hN5b5u2FNbk%2FPQer8beLlsoS1n&X-Amz-Signature=fb5d883fb85cbbc3e0b3dd9b2d435f9259198e4b4d65df07766a9b5ae75079f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

