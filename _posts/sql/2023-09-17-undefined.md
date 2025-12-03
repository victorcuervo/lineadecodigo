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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VA6UXAF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCjWGCeK6n7SyCvWfpKTWnmlNt4ZVsTMCcBtBQaLQS2%2FAIhAOnqoGi5XbSBBhe%2BLzC68cN0cFJa8EhrC30N7reSURkAKv8DCC8QABoMNjM3NDIzMTgzODA1IgxT9Clw9bmW5%2BJ9%2F0Yq3AMmKAGQ7h5hEkfMXVEIeLbtwqxLa46VNeC6%2Fjk8jhxTWRu9VXUfhSQfAOI9pdfwO7EkAERKOZt0Fuz%2BP3SrYEqKUZu1gKSbHMof9K7Jwu%2FvX5R3teqxlTi2bQIQvHmybk2T8KuMDUCBVS4bS5v37vD0E9XP8TOVlIKU6DwRtIllGq72svovWUWFBG8UWEnmv9ghNlg2lgygoMDpsWl3C5WKx8WdcJ%2FcoG8HyM%2BbcKRtqaA3CeDPyJrcTfJvEATo%2F0y88ykWChgoe9qaNoVY82n7OWqynMws%2F%2BRpdtOZqhLMlTyAkI7WTjFnLjTUxCZmXgV26Imt%2FHAa7QOhiuO7GyKgfmiFaYMQ1AS9alk97OCktte%2F94FPmrUamvvWS9Bi1nkTib1yMxYCtha1wD4QJFzmESRC9i6nU96XwNTpqYDqsP054YkpSdNXBiAUR%2FQXAa5ioo3ZxLizSyZkcyXkwo%2BStZ15yYyIZWCxvoupTROchEFEJTdpAPaiJAWa1nwuwNYk08fmFQYbiFRRpzQbCO2Hqj6pCZgej36vnJckgH0GKgNdiCHS76Zb2jks3goJxsr6TX5pN6AktTs1kCgo0F65twNDbg%2F3T8Lgq%2BeN0Gxsrn1Cak%2B1gnEiTFS5HjD%2BhsHJBjqkARixh8moH%2FksBhXHPiSJ%2BdbZX8bsIFnVFlAllukQe5b56AQkFcHAmDZJ17vA7KL77euNOcipK88gShMNPAhCgYlZqjViNTwOrwD4B7kZu2DWIav4fcGb3ZzL1eRdrdeO%2Btz10kDcC8yU%2FXHLPq6eOn%2F1IvQHWHbFKHPyiByeascjTL6c2Gnp3qXR02hY3fGnvnXSBD%2B4eTS%2F7lQGrVCZnn4vagYg&X-Amz-Signature=b1617c6f056f49851b40c5edf36b19c563f992411321429c2679c5baa3f76d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

