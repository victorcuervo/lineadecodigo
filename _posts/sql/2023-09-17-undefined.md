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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MFONJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIG3jGz7z1TO%2BaCpi3SLN%2FwPpCxEgIHoJ2I4Zfe6hXvK9AiEA1psOmjrASsd0GLQes0qwdfI9N3jSJ1sWPLCKhZxZLV8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCqN3sxLjpjCAYGgkyrcA5e2Zp8gevNrFmLdn9QkLgSu7m5fQlQr3Hhg6z5G8f4AuK5s580cEhJz0ysbtMW3FDk7I2tZJ5LklA8%2FI9k6mX7oisWkDjnT5zEQQe3OJD6QSGO9BU%2BUmV0Lmnx3%2B4ZljI2Livlha9WD1cSiN69fYDvNtmRrCBrB7xZXK3qZ2x0Qvr4FV%2FkLp4PinWrV1RPZKUzTAWhZusoUJ0a%2FFkKacnjDoSY8bC0T17Os%2Bnae1z0xM9W%2FlblulXgvF5qu3IPa1hUFlWWN3E8GOEL6HKrn%2F7LgLp02RMWjhJGp6eOCJHUFtI%2B8v0%2B16R9gsradTSc1j7vjBiRWiRfgSJ2yVg2juo2HBbIdsQsqtJmiy3mugjgR26lZH18Vrg0H4lFkWyNNo26JfYjrhmzxbnP7Bxw1CPUminunxrkzkSg60dodItYwe5dxGlnWmCU%2FF1oFPfIhU7MGGbOso6mDsqlR51X5rtPrfppc%2Bf6662Z%2BxUuBaG8UQ7BadihBUKtTjX%2F6oZxBB1JFU2nWxdtr8sRYui8fNKRJ8bxKd13CvXmdiFLM%2Fs8WBMPWPKJs5JoiKVcWIcxGC%2FqCzLAo7eptV9EhsEfbNT92m1MS9HMIyjkH668LisZxnGPZwzkb3%2Fb3EW91MKHpwMkGOqUBQsIBtWMQYsh5dzWykrgGS9rqZoEW34lq2GburYdhbp4mGI2PpYLRZzpfUJN2cBhcZC%2F0zfGeG%2FZoZFRiE%2Bt7Qz%2FM41oFMYcvlpIlMbe0BMmJeuQBT1c%2BJIjIQ%2BG5ld6isACYa10HKeEagDHL%2Fmu6Vv4HrcaAhVrdVjm%2BRhUdj8ZhGwH6ZkwJb3Mgk0u0FHR09xnpO0TQsqam7G7xehdFT6UIvSDB&X-Amz-Signature=6958bacad0479226f22e40a79b7b11a715921bd601c66d71badea0964f7c4375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

