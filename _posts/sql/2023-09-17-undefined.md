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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEMBPI2R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIBXnn%2FnSI0hMhCXZ0%2FMC5%2FpFpHuSaT8f1Ygs%2BysMRheiAiEAtvxMSIG3C9Ti%2BLFU5wr%2FYigPD24HmzHz6BBLr%2BbwYrYq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDA64cshb4dRu5%2Fn2hCrcA8Auv1IfNwFnNNHkKMM5gGQwJx841mzfhjjXmpctjw9YqTzoXZrzDVREMjgV2ivQmDYTGOaRhCQkNpeblYSxda0Tvc3D8RMTrv9JjJtff5uZFMVUiufik50VJqHXZ%2F3T6uBncvU3vatuX46WpsfvbRXtiH5lO9fn5BKQuGuVPs00ZYV%2Bqp6MIrHpMkOdAT%2B0zUbIT1kIY%2Fm89RNMbfNmhbgOaDG3vE9okhS2g53f1vxgyH6g3pwnr4ybP%2BUE0HPea5%2BvwprsMWwtSj7kDqlIJdQ%2FL%2FLY6Hwebic%2Bbqp%2BSt0Li%2Fkcmp83clEMxNaDintkG3g6yR%2FhZGTfKoHKcgEiFyRoBonz4gNQ288JO9hQ2YSiPZ%2FoEHczVCyWXk0473kcExaJvPrTX52VQwXHCb4%2Fwp2hXJbXDQvdbuV6Oz7qTywrR97F6y6A2lafQqiyTXQNrNamDR09VqulHGP0Vo%2B2%2FzXUx8%2F34nFqD%2FvXxmRXyxSFQwpPthmsCYQ0PSAtjyn5tQXSaMp8BLPGr80YP2Tt%2FZKN%2F4tRp4IjaYu2ZhU3%2FE%2FtUWJjhTPGoU3vgX3EVt6WlBm0%2FaRpvsJ%2Bj%2F137b1CVrgPXGwCZwyaKOF1KX%2FMa9Fv0xXVGnKopC0AXI1EMJ%2F%2FvckGOqUBJRnR7nQ1wHiLItvVkpGGlj9l1Bpc5kCHcT2kHdrYlLSRqL6BOnm%2FJRpd6KcDCJ2OmnpnLhE%2B1PhJNMSk3i8QtowoRCH%2BmGy7iHqzG78eMkzR2tb377h5U0%2FtmFvVhJ0mO4s93Pd9vMfBJ%2BuJlj0HndpVpslBDhVARLm43uRnt5OwdrdvZHdsKSQjmpTzePKSwQryx4TkDcMYughueOcDkHAKw55p&X-Amz-Signature=9503c7066e304cd26a3a98e292835cd6ff4df693a85c5f1d7625e31fd4b04345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

