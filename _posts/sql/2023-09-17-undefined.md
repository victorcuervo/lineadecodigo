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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FJXH6WV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAm5f6k7M8K17vgmsT84PHh8roSAuwTaoNbBf2grrTn9AiBqNxMHSuqBg03hIz6Dc7MoTLUohT11OCElsASjbhd3%2FCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMUs%2BEB14KniX3Oy4xKtwDFbq5oIoZsCd4qvARwUYOJ5EpnJxs2ybPsx%2BK7PXZOjDgwDzPGuv26nPWyyjQJjF6x%2FIpyQqSIUE2exkOoltKC6kMVBmp3iWApjcIIoGmOVL%2F1aBgML7joBbOFfB8eQg%2BLagfxzF6Mecf%2FnKsqpTwFXi6Hsq3VBWdgsCdruVuzsWDCGAfxl%2FhiXDyaARuIDC0Mz0MMgqiuvSHq1vUzGinFFCMIF%2FJILh%2BOIY7xiEIMAho4rE5Q2VVp5SyEGrOIH%2BZ83wceV%2BVAVGzwg4qtLJG2zF1oqsuzl2YmRu6WOGMqqgMFLr4Pnh9JL9btnUsatGi1QCHVo27vh%2BdnHRJ1u5%2F3QdfmBpmmG4gu8UEyN7IByCwGyop4kKD6cXize0DATGR8iE37DzUvCtbCGl4Y3EBsKo%2F93kV7XojAcq5140zuGtQ1iBfv1LmkdwFsuMADHXK35bOVZDaA8dNhT2ImgEEj%2Bm5GSIorw%2FFadREWOfhylFJmpsL9vp1%2BslE0%2BCYomVYF9OYMlXFZVQLZXl%2BGXys88z5pJWiD8Peqo843xB5qGqnUw4mbG4kVjV2DAI19x1Dwpd6a9ELN49mxzikdQgQixfTIR93h%2BQnuGN%2FcImHYVpdILWsx1o2YE7cRGow%2FtS%2FyQY6pgE%2BT1NpW4W5K9SWEJ11owzN1Vyzv2ZFYUzFvFGqDpGb6d%2FMej2r87Fi3Pnnh871xF82UV%2FiEMmr2fakyRbVDqoJaF7khmYZdEkL7FSODfej6fyxgtsxlqCRp4VEwiXsExK9CPgFTkpiMDQA9RUGmEM32eDNB3BLn1zP0FBoUEWIFv4JYykdLYEQN71gagBW%2FMnChEcioS%2FgnoxQdIc%2Bsj9YbP62NM35&X-Amz-Signature=40c44cfeffe9b931344d99fdb935c5ebd6a319bb34dc6eb4ec871c47ab7f12a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

