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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GHDV7EK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC0Arr3uoGOTlfY7a6ikL4AYd6ZD%2F1WLIn9B2Le76rJSAIhALeQ5EAsNWG13Kq0BM1cOG9iPx9tQZG73ch4nA4cO7U1Kv8DCCoQABoMNjM3NDIzMTgzODA1IgxHhDeryD7HtPrPkRMq3AMY3A%2FcKntjCTu8KihYm%2F6fHleSxHP%2BKmuENjN2HmmPur3KUEX%2BBhwCIp8nHW1MHV3kst3u6f2DjvLpyBAGUPiua1CIyqi7CFCkh%2BxwYK6o8Fg2TCPJ11IWYkjwsSQJGd%2FiTDze7KLQlPNQg234cv9ri6aSNqypm1XbI2%2BXABlFQpMTAvRzVRmbTe7WkXpGKmYXzr7duZL0jMQmFwvYDkgZgNa808jCsCQ13Z%2BrjgX2HqY2sThouyIeFLa5iy%2FapcrsWP8ueaGGNy7kv%2FLwbS1z1VqujvJA3yvtCcpt8weqLWbAcUkQv0%2FNnoxqdjVTWrept8m2c0vwsoLHsMNPMHvPEh1sWP0tW4xJ55qee%2F%2BS5DHLSgiigvaXKYMTc7nVQujQkDZQFFYi2Vk2UznqiGT02CG27cr8XgF79loC%2BrgIbD1P%2FbU6BZXTzMzgYEgAIK%2F5HteM5NiE6y3ntYiOKda77RbtMduaMjakPLMqJ9n3TQm%2FcwciAwIchLZlsMD1EMKt%2Fw5B5dccymA%2FpMxcp14x2AmBcG%2FaFIbHZMv1lHM0c56I8r4FemI9jYdz%2F5XN2LYVOmofD2zO%2F4ao8rxcwXut2%2FxuVCwRVjU6bTEtM5E1AxLSCuyVoUbPNz64zzC%2B9r%2FJBjqkAakDUEKJcjVhmgXWwY1yNKoLVp6fczkFa9WvPBce1XMm0x4PDSCrOdTWWDS%2Bhfu5pwXIPQeFo3IXP69d0vUQleN7%2BsmAvVMM9B8%2BWoKfRorl91%2FoB48wx7fBAw87a3td1UzSGyKgalvm3OKWgvEFPovi9dX4VfTeFOTyL2uS7oGXYRbmt3EXm2zAgsDCF%2F1qD9Y0QtHAAOHvekaSX0YTEwtR2k36&X-Amz-Signature=3e31c18e2182caf2cb1667bda42c852877c666c51dac68fc37f96e58eaf442bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

