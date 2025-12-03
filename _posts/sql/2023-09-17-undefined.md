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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466654MP5BJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD54dPqMCKQf46c9%2B7FSFmddwsPCPcFGevGzQDOsR0jdAIhAJQeAOyoYWJ4w%2B6vNhaiYkTRKH6z5uxvaOdXFgmzthdCKv8DCDIQABoMNjM3NDIzMTgzODA1Igy0XW8lnKCfxVfA2Qgq3APZpah%2Fffhhna2bkPYA4dNZOKaF6RAYM9oqzMEfb739H7eGlV%2BPP88KPmm1oz%2B%2FLxSpgfVSFm8Gou5bZBMZHj69w3S4a12S71klFhrOikKCKlHzG9H49j7Fx11PXse70lFejcf5Xeol1o7V2uMjMJaIPI3J0Fvp2wACYlXAgWi1JqEgyMU2VEUc4sKOJV98yNG4q6X5Cx0q1b993q%2FzFyNrbvxuEgAicgMWqdYcT5lAgK3ImJA7DBdGrajcYpSvw6XMJLYD%2FQNCqbtu%2BF1gZ0%2FJeieCQAFb186rhN6iWdB0iKqQo2GAEyii4RXQ8vLeT4pYwngeFS4R%2F1jXgU3QvacFtsPYaYPo%2B50%2FOsO%2FpsH31c8Ma9mtzy%2BYT6KXSJq55kyvxF1giU%2FRkJcAzh8H8svssl5LhnVtwEmOLkZ0CaZv7D5tyoxnEwxBUma64%2FQAPbiBpR1tZKuhRMeAd8AT4hKIXImwLTvEKwTIzeZPULy2FxdfJegABdDpoqjKF5qVN3uKivmvZSZAOVX055%2FJow8jKC1zhqtLBKIFYKkikEtA58sPrbXJZkaV6hED9W%2FtxDK94PWgLL%2BoXlSWtkJobHJUap0KllZm%2FXBlw3P5YKs7PT7%2BhHoq5rLS0hos7jCW2sHJBjqkAer3ZsB7AAoka8L3tW2Pyy8lYIavT3bFbrHKLqGtmc2kJ63NG%2Fcek7%2F%2B4qZBUG%2B49ucNX0IPNW3XQRHprcOG9t%2FxNJ9vaZUUI9EsOlRqzTUghxb%2Bpghr3g1kYCmmGuQki0k70YQy1AMzbA7FwK9nfJH3BYggvGAE1SqH3dpMSVzYrZPIKZzZbVkOeXIBN%2FnFFd7zQc4WwQQJy50HvdvDFVCsXFto&X-Amz-Signature=0f638d45d723f3debcc2dbdcb848c7a0bf8796031c263389e73fccf368b00215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

