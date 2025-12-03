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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USXDZ4XD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCpqkTo2nkmexjFTvpsBDlUrfXQzfa6hfi88LQhRPqs4gIhAIwkszpZ9PizbsZdKrz1QSRdni6PNID8U31ogOrjENEqKv8DCCwQABoMNjM3NDIzMTgzODA1IgzT5h78xgav9TQ9m28q3AOzU6Id%2FpCkprENlIQpW5zJf%2FjEVL0EVA0SaLPR4QaJcnrHuQzHxN4AP1KEVTVVyb999yK5UHFtdnTrCgqsaFSCE4wB7IbwtbJcJyOBgn%2Fuv7lQzBAhuc6hOY%2BUaPY28b%2FOvddp3Tl4U%2FWGulTfgFlJPhj5fiPCtEEmtF98V6607%2FD9j0VdoE7AYxnY4xYy%2Fb75QP9yVsJvwKf%2B%2FUb%2BiOX2x2uQPdlivO%2F0N9tc1%2FRFpcOz0MtAMXt05MzEzIawbRQeS07dXHr3t1D3G2ewRT3OqiDsrWDsH5oTui6wmQl%2ByqSg5qSNLuwg3ERGttM6QcUMlwuL1UUZKQc69S8XUKC%2B37sr0xwBXD2IBK1tnl73Tq6pijzOVcl2HUDYBtKf1Oco4l0t%2BU%2BtCJc765lmjFT%2FgQE6I4TsSEx1rj%2FIHgGotNiGeltp0bEAzcFP7tQlhn%2B%2BRiF6gR24poYgGy%2FT3JFMHx5svD9TBY8wPnMSF0j%2BD6xmtX3Cyhna%2BW%2BMtcmIRnKV4bBhWDOQpa5ipbWlq5%2BL6CT9vkaDGUmU4LwATxt2hOtvbb1owDE6kCyn8mEcM%2Fmvg5HNCDt%2B09WsU9PxDl9AuDrbNL50hBSexvpbPl5FwR4Gvy9Ar9hZ6QKjVTC%2FrsDJBjqkAZXLUXDI82WcqaMMbht19fBAT%2BrPc4DFemXugtiqt7Ttkl1G24hzCH0lOjc80qpq%2B%2FbgwdOf3MqrygJOBnWCQPz7wh0qQc33QllzvAB69qfMwLCmuN2abeey%2F5hFSsr%2BHxOSSnIcisAFTSk7avaR07zxPzaRZzupRhggh2C5HQDSnSZg2nV8WiEEEweeFyudUXXS77JvPoUnWPOc7Cl3D1jR6W0D&X-Amz-Signature=91783d180f8f54fe3eedfdfa52f0f2b36a0d726300badbd58074927f53817905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

