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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4GE555%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDK7ZwivM%2BLU4xFmngAqnntdMsoQoLFen7Ii5Twz8PrAwIhAK41D1wkF9SP5S%2BFYFGR3i1WIXE6%2BGSKaNK0euon73BoKv8DCC4QABoMNjM3NDIzMTgzODA1IgxeoJqmCi%2BXKJOGyaoq3AP1QsMhqhfFjtnW9budcUNydtOhYcGcziqqjr0JjyhvjWp2cF3IhFbrz4mp9g37j5MT53CL8QONsPBg%2BHldVXAs7SZsCq2RoMFDbdfeXo2aNB42fFa44J812%2BNTJ6ngQdepbsq84tjaxPfjDDTMtfdHp64Dcx3bh%2FWR2I4OItBkHhKyU5KNtdLr9T5SqQf9TEYQhl%2Ft92VDbHb3JddsLK%2FyYwAX%2FfPQNvrNOv0GAUTm4COcDA8RnDFmpoD8JCy%2BuS3JIbEY7HT5AoPvzNAv%2BjRmKJomAfxVxJnt2IRt8SSmdMmaAeISP5UlL1yuHtW7QeVdQcayET9TdZo%2Bq4LEmj1lnbPq71zDyuCZzp22cXJivMrot9R4QbtT4%2F5a0WgvwnskZZQqj24XgrNchUHS4WYQNESwy8y%2B%2BL3BZmmD%2FrSIs0v73mJ55oRTzZuJUFNDIr8GHK8kyfJdaMdwWvyvl%2BTOFBT1zBlJ5YCj19Je%2BJlq3PIj2wOaFvLyoMs1miYkmewNFbFHRaVZVMB8LCtsDczJx7aHka8VcOpdsHheEcU3fF09V%2BYb1AkddY3BF7ZVepV%2Fm68lkbUwtOb3pQ5bwpgxvxzR0cAQzoUa9%2BPFQ95NuT865B5%2BHpXG1mGqiTD96MDJBjqkAXTsS94Bj2mfQns0KiIF4pRKmgn%2FbkWe4KJGIT2bNSP7WvZ30dvSHty%2BH0zlSiabl9Mfq8t%2FNxu9JoMB72ikhkTJiuPQGtJq5poqc6SwhQy4irQk3HTi5LtPqhiQx3pFQNgkNJNri1RLf2HPduWQoWiqPDFKP3NxwPscy9KELXK26qsaCsBk9%2B3qZABzvIKgSAfi66Rcz4zC1buhQ%2FCzEJBBfcfG&X-Amz-Signature=dc2b15419d4d76c67d636d4f81767738ef399255002d1647faa11c0da0e79319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

