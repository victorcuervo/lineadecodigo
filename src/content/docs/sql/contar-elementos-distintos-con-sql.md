---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWF7OQZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTt1csWL9d2E7Ep%2BnCbW5gD%2BMfL5Rzz%2BMnG3dgShxV3QIgF5YoZVuQpKZhrn94pxBYs79TzqHV1%2BIU71b40espY5Iq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCw5MJytQAolF3pqkyrcA2vLxiBa8PGgR6lJbsy9TTTJz2jU6dcw%2B4fstX%2Bd8PpWcKTUL%2B270Bk61KRHAfcCSb7CvLg9BrA%2B0YhoJ3TgQzK7zu8FKAKiDFdJSoLX8NkYtWNoJSrgJlL3Giy6lrhhKclaIkHymsJixLQbMd8bWzPbXF4%2F2FLJSjtIE%2ButGM6joH8HbYqMV4%2FBBRSbJK%2BbULfLvxcYv%2BVin4aXWOX9KsaFWzVvJNIGyBzJ05ftwIKiM%2B1m0%2FqxD57Icz9SswxV6sy8J4wSmH8tdM1qKB541sDf%2FjQjfFq6XF9A3XaPCfmKg82hGifj2gltSCTcJgugcwt8n1ucMtHII0rV5IW7IMxqfLX18%2BMjCsoP5%2F0sOGc9hnutP9U1Yn2Sf5Rl675zRHfXuftnk40PznBf94gjal5Xv%2FXQej76xA%2BQ0Q%2FPP8FSxchg5vNQz%2FGy54Hg2Q95KlDpAzLYhEK7CFgFmp0Crk4%2FvtuNyMBZmAPX9mfaZAn1fnonqe16fGV%2Btkjwu67iEZ%2BRSQhbcfQAeVtHlW4j9uYPdbI05A%2FCd1rB%2B6rN%2FSvQ5fps9gctBKsbw3gTxpECLKQDCADJrLCY3wLDadrlgKFGlK3zBeSlRjhA1CNJUEiyFBG7TfrYh78lCBFxMIHcxskGOqUB6tz9txjtfs2Sw8iHatkbnIAavB9TPGlk8eBoELSIIUP1f9p%2FLd03kQ6YWBG6hdcKKU16fF2WGXRbaNHAhct5VkTmeNbKH2ZLkcWUQPZtHAZvzSknbcTXW3bkzXMS%2FK3jqLIEV1bV%2FjapfRmT5WeVTs0o2n1D07qCGQWEElJhxuz07%2FaMq8IX4rCjtmRVeWg1QuYO3SSw5yHkADvi%2BNLwYkOjzZim&X-Amz-Signature=5f5bbfb6932ef2ace6986125c439534de4090a36b9295f1152f59a3f4eb0d8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

