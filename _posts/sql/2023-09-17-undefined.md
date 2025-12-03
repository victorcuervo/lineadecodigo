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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUHMF3D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQC%2F%2BGujOlam6OpCDMiYSMt7BN%2B2Fx9NMnn2lHnl5tyKKwIhAMj80jeh09ZEhSKRZI2YHWuFPktsPctEhXc1rAvbhUiZKv8DCCwQABoMNjM3NDIzMTgzODA1IgzomehhurcIHo6BXV0q3AO8t0YwHaoyVpa9B%2BnmceudP0sluD1dklo9d72j4eLP8zTXDg%2BnoflSSSMWLZ2qUcKYI4s8ixKlrhT5aTLXc%2FSwlQcqLAVeOefAmxrGKvbOdNaDMbXt%2FzbEViI2Hkoq8506%2BFdeJs8D7VGm9JoSMOCKBJMP3w3%2F7P5yBXm3ar9oqnluEl24o%2BMBU31S8Iu6Xf5EVXtFGFjfbXLdxwD8E9Pbvupvfz9%2FbW13pvKdecrVLKh5F%2FwMXQtEH%2B91hYD2pYS8lFigxA7iB5AVCsC2g52P9tUiOBM8W78iRC%2B0%2F%2Bk7epMr3h8t4A%2FvQi91kNIjI3MMINTbkBYjHEWTFgEYch31hKkhpverBX%2FzpWJ%2ByVRYkVuPotKeRt2VPrzq7zdexaV2odD9rafRyhBQOBBpY7wxvQG%2Fw6loEyC%2BTK2PhiCWrSjX9ayrF6pFSlo1vdlK5DZ0mKS%2FQpL2Z6lXQohxvUEEt72lxg0N3we%2FNmaKm97E65diNuO5EiZDPhXQ69gl%2F1dYBHVnTzzFZvWGmqgt%2FlFYmtMadaihb%2BYV5Izl0rKSh3XTNB%2FAAraR5hQUSjNiyoggZyQobZrKpadTEbedveOatobAXirnw2pQSCl0F8Nc0smkJrp9fsCEw6KmojCfrsDJBjqkAZUWjoEPegbmFQwWJePHa10IxiJj0RwaE3QGXohvhq0VbCw8dGbxF0OlEwPGyeS5GNH6j%2BvZhUrLJTCX%2FmBPG8V5G%2BPu7TRg0foHim8MMmsa3Mk3IxA6Eg6Rpu1EzTL8ibws88v5qUTfoywq8%2BGQnePGHYA%2B9qBQfrr0ytvRjxe7I0n0omBKxVyS8G3chOHHQHONFYVYlEnGsNJKk33adtw0Go2B&X-Amz-Signature=defdd58641ee4696efa5727d325e43d26924772e4fa2cdc158d28cc42ed4e711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

