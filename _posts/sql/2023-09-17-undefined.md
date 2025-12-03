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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCSWYSU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDfAa0VcWtuCUgDeWLI3Lqz1OOJGPq70S72GXzI%2FF3F4wIgWcGmiyiPgkikdNgcbNaU281vLmZk1S2PTP0Zq%2BkxESkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH84cFGm8vOfYJSe3ircA4tpiCwBQbKYJIdWaXvYiAOURXmqZ9QTrG2f%2Bp2GLzx5Hm%2BSp9j%2BH%2BE70usf%2BCVU6huPPrZqh00XZ69LAEKUnxVGdaQjE1awfGdthyFRp5OlrbAg6QBv1pIvCMAwSHBhpQ8Ei1cpgndHIuik8UBAH6afjUNWZhpv1h4%2FiPmXqU6fZcqCYnVAfgE7B%2FQ0OOWKP%2BurY0KbnLCLyQGoyuUXokAQ3su4Yno8UqAiXuH0V3spEl2WSamrtGwNlxNh9qJurxOZLtdgYfDGoz4YuI%2BEEKl0%2BvxGOlA%2FCaQ%2BiVph9sz9LYQJMzIiI74%2FK3ylKJ7qgEkZXvOZOAMtFb0LltMVywqMEhcbXXy0tH%2FCJ4qjuxRicKuFiGs%2Bj2T0D26C%2Br2MXvGLj9vvo%2Blb0%2B9uLvfZbjbylH3k7EfyaslMQlIF%2F6QiO4BU4frfFjNhVsfBFXSKNj%2FUVMzC99SNSQq4za6b9jLIusbQhNfSU9%2BVeddH2M1eq46MIwnulB4jhL06ZZI3n3vKUSkWqdYjm92maLDF4DzoyPeUnJ7vhh454YOShN%2BUePTKlULtdBVlFLDC5k1D2tGb8qumKm%2FnNJ5yqM4aOmUwiqV%2B9BSINCrlpFtSHMwpNIVPhiaZ2jSTsevzMLSSwMkGOqUBy1LAq1Fe3nLQJ6MIvvT8K83357w1M4RSNod2D8uFukIdnDbU36RWVYMO9H5jFDOtDfQ2oFYS9apuC3V%2FD5%2FIoXVc62a%2B%2FdVTvDWY7xisdvmyDk65RmDGbauX7HRUyw%2FFUDJVbpdU9A%2FnOlXs%2BjiZnchGI8iuTXBMapBGwG4QXomApIXCUHwLfV4%2Fin1S1uEQ0GnLXaQhkd10damI9Oo0Xj6J%2B8ij&X-Amz-Signature=980f4ff6dd45c41d95e770c9516734d21f8c22ba61894840ea6e0f2e343df3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

