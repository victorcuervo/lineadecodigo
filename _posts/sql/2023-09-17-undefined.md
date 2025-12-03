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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L5QSZCY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBTl00gfvxXFRKcIWkBUgl2lDJY9a7i0o6%2BNpISLgkQqAiAPQHc41SD4p%2B3ZQ0V9ALY6YqgoiaASjpwv%2ForhOj5Ygyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM456uPYFD5mLzILTMKtwDp3FTGXlPx%2B57PNXK5YYk7NveTwWmHq%2BDjGvM%2Bed39eyo2563ACGNRo2ZI0vXZJTR1Kg5vH%2BD4Fv6No0nDdnglJTojQegX7S269ZOw3xYNmPKsRLqGrsruiK%2Byvo%2F9aRrShkXXkUFc8%2F47t5vNSSoAhZbxLZslT7PHDh13fqDuc%2F05EtYPDen%2BgtRn0F0NW5lw3OOiKwWlCjWalxe2EgBeat09%2BVr5XORW4XL5u0mVcnckwEeqWTXmL%2BROYP%2FEgGCQp05IEVsY5g5tH7WF1B21BMRCnWioI6kuXlzGlD5SEQbsuAkiZAwPvFrVYz6gG6eUwaKadv0Xd%2BDGAhjJlVhnwn8F7TD9ymYWSJgMrRMOZZCwMlUGSeWl16ozKj%2B9Oaj2W6KF0VGQQmjG9gfe0gGV8aVhxoQNJKNOrFHe%2FJlT2fGffA49i18N9O3oNUmsjmEp8QhNabCqIAxYnwxBavaRDXRL60MdK4%2FsTHaj9Xx7Was22xVZ4MApSHIVmv3Um3RQXpIWHKr38Yo8QRBdJFaZsIeQc07ILoxUYKUYASWoUe0c98ETramePiGV8MZNM3GNQwYnwtYYuVK1XnQjasNe9OZkBlbB9PWEkKoXsdOLePMJBt9Y1UeTH90nqwwjpq%2FyQY6pgE2D0rWOPibIyKHIQ2YU%2BSGEqgI5BlatZwkhaLxxnYlyHUQBHUnvg%2FiUMayGGDls%2FZGG70Ogd0B3Ume1bgJFiZedMoqqb8vcdpkVTWu3z2WQy4rFKEDJFXU052XpodA2qERtudspdaqy0KZq3OFc2Pt%2BBSXmJt2aWulJwMttd4bgRnsbH3NPWlnuC22iOhkQ6%2BEu1UavgBa3ZCoaeZw2saYmhIvbk1r&X-Amz-Signature=7ee11a49fee1c5057417b0f0a05c2e70411a319b5911d825f9f689ddbe3e0458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

