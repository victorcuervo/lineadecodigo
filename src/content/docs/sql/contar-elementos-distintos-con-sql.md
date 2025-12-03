---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2S4KXA3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCwbFl4rwBVTDwaBFVd%2B9dFqgRgXkbdat0lPjo66%2BrP7QIhAPLVq1oKZDFEPL%2Fjyxn9vc1UhwHThHvyZHPix8u2JhJMKv8DCDYQABoMNjM3NDIzMTgzODA1Igz%2F%2FwShFND1iAUMMQIq3AMCbllnXX2urhl0WkPCK2aPx0bK01Y7k9QYV3bVSa8IoPphdswMnML3saYgIEiRzxyQDxG0jCmnaNJaI%2FfhjKv8OFGXMjrf%2F3Xtwn%2F4%2FL%2BlCnqHPcDCOyy8TJnpDlYMbRvmiAi6Ri4zVc5X5iVkZfjMy0B7TZl4Ih%2B3x42QlpfU3vEA8nvXHHtc1J4c7t%2FYvodDDmWoYhTnjC7ZRZYCwdTONnscSs3%2FTDZ%2FpVSn%2BFWvsgrTVb4Pbj5SBCC1J8S%2Fuw35mEGGFCh8lVP5nMLBTJry5dCg%2B2B7WRpE48X1JFTeN5E3dBqwEa4Jt%2Bo0vJsjFIP8982cdZipEWu9leNdmcKxdh17AMeBOIsOzTyJUGVFi9Hwbfulkf77KCGB0XXdWu5D5UCgh%2FvMmGoER3rgaBRz%2FZ3B63OmD3fGGYkkBE77wKA6dhBTROY7xvLhGQ6k4ywo9rMP6hr6SBTyJElwi%2BI0fB0e7AiTACiQfmIvAlERusMhINibpWtdP02eHfWASQsH3iIZwyTYe9bUcZxsXGiS3QANMN7CR0Dpxo5W%2B3mgLJZMZj%2BrBmUEkeLKAhUTOn0kgVdYiSKJVPw2qq6VodpOPPXc3p7nu4gW1DAJ8OWc%2BakEYM80nWTTAXe2vDCdvcLJBjqkARECuZ7H%2FhDhj3S7CVCag14VNjVZIIuZPM1lDAqgQctoRJcMUOUwc5NXkcAtg4VeTunJxTewqqNSymAQY3GynrEhL2VEt6j25wpr7zxIZhe6R4uXpBDT6loeKinlfnAvc2JmCgq%2BnSX3gs1D%2Bl4tC39voxa3SYeCMfQ7c0RAJw7iU4dZIOvmuuwhp3cWfnkfZFbN1up0byDrcsSJhcNMF8e0vpru&X-Amz-Signature=56ec44d7cb2440d5e6311e61ec0877baca2738f803aa5c42e09574f2f16c24e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

