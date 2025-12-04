---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ5N4UCO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDhKyIR93ZVIB730UhCkF%2F94zZ1neWBopVQnez1sjbhNgIhAOrs5uyuWHEqaBll5aYwEd4R9YWjHGUFZVDuXB%2BiTLwiKv8DCDoQABoMNjM3NDIzMTgzODA1Igxdv3k%2FwtMndtLLnSAq3ANhb6rIfgZYCo%2FxqOhFv61Qp3e%2B8dQ6npgh2SddlG%2BMDTtoEIHObEUyu5pgUrNOeXkHtPcV7m1azTk5UDZTBmNwSLrCVlvGEzI9HF%2FfnxbGkJB1%2FfxXRwPLCCj0jRVhyO8Szgo9ijnBh4LYURX78%2BfbqQVqfCGG2oPePQlIMtfAOAFoNoEVF8scE5C2QRXnIRp%2BQMzP7%2BNcrDDbFCZPyqboaMUJI8Hh055VKOmtG%2BAG79i%2B9YOwyvkXgdLGu8Hg39FEfLAYHzBIxMeywvoE3LJIINLInnGUNI2cU43MeNhgcONg37WIpFX249K6cF5nyE5aCgXMMt%2B8IVORcIaQ6Ox3msvVuQGooG0ZL%2Fz06SOQMLyD%2FrcLECbh82V51JzSoWYhTtHtdylxGLrtQjFZGRW0eD%2BmSmcz60Zft1V1t3j4xUQjtLn4soLsGyCPs0qaRSbAPiisyEe4WzNK86bWXMv1Wd%2BxsvXKPS2p0UXRN%2FH2gv6KtqDJb%2BT%2BRcBBPE9KV90vlFc9XlQYcC%2BNrxdY%2BmoVx1cKUYR3C%2F%2BudeWzQktv1CZLAuZNTfQc829dCF26jiu7VMsI7n7YSEFs1ixPi%2FWfGDfGHcJYoJx5wITX2fIhUBiobR81URmpjBRPvjCUtcPJBjqkASV7T%2FJQ0%2BAtOG7RZsAISLBaW9qRUP%2FGxBh5i1hGF4ADkKudQjl5ZDmxFC1ZSaU9FxYKW6sB2G0gSiuUixO%2BzePSF763cohz5rfoBkaPLvE09lkeSi26cYLDjdX%2ByKpNuhaJepgx55AlS2wSBQ%2FLfQYhd6Ur9TlmzMcblS8BFCJNuMQyKoL8RTDLSup0RTwQs4d7Q3ZyUZc6Yb699km6uxr62bln&X-Amz-Signature=016eb74cf229e21233aec775f4a3d87e37ab56b66d35519619a92678c48baea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

