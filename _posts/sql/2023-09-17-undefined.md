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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4VDBXM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCCkKBTUlcmU1v72RRDLj8mcxLjTmVWkdbj5rpZJmHI6AIhAJxO55USYj89S8IxGljVTPwIXIBLPTBMr3Ic4kVTBQA3Kv8DCCgQABoMNjM3NDIzMTgzODA1Igw19ZCoy0%2FDI8uyArUq3AOswJ%2F8Ioj2tObFE9lRiG6vRt405JBOh%2FwWKw88sIQxq%2FRXEeykoVUY6ya1DNYHAGhcpSYCkZOpgxXCVQEqZbn24xgTxdUIe3Ng1yPfO1NNzy%2F1mALDhSNfWxeoVHin%2BVdIcUx4oT3POq3wByep3xyt4vJKfi6aPakEya%2BAgxLoRXOOkr9QrZSNa4e4VH%2BDbJ8W98a6ZagK6zu%2Fa3T6OXJrEN%2F7HA0wVzq26KgHQQHziKFf%2Bl17VipAwyfNmGeZaDGszzbegd6NEyI3mEK6Pzf5zYULgbmqVHfbxaDqL1bDn1ViQ%2BOC1OUgM6E5IpryJsScMJcFttLOFjoQtfv7bleG6g4BngUNxfNMPoa0IwGWPh0%2BgHDAp3epcVvGDfwfuwkEY2sy6esMVSgOaUNX4lpkEhIC2gTrAOx7AdaN%2F5AH70n0wBeGWFt6ZZI7Y%2Bs%2FkOUvoh%2BJ34qaW7XO0DKroXmODRavdVYywFJewELzZLB5O4wHEnXHwFhuWEVrG6LL%2B%2BIPkTu8Jh%2FDTuMSmGarUSJnOYWjsSvx6RKYZLnaDx6cL8sG5YyhBQVcylqhqnwLu3G1inUnQfGbOw8DTxFdln7M5wDqOuZ0%2FHYA9%2BhL9SztSAavfhviKOA%2FeVrAgTCJub%2FJBjqkAYW68hQAtHubf9w0homfguFktreFDKzB0nwC0q2aeOSj4rOWF47tzygouqOuGltCueLGc%2BTFIcc4LfITM%2FsfP2mfPJMedpgMuWtTHE6AXPUW0tasxXrScbvzzlqWpUxMRgDhcijR8RR2E2VA7jHsIqk3cb2sh2RUq1ROhZ6ARyGyBThXWMDhPSYs4rtPYwtQHapAi9fpXZi5kI4d8fh43z1zMg4Y&X-Amz-Signature=1f552881fa75683eb3a146645a2d01aa8ec856485944ebade73dfa0013020c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

