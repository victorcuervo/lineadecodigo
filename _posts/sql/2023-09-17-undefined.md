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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HF67SJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDXcQW7lHLRGAaz9Exl1raMgrVte2D%2B70bGXkgrpF%2F3dQIhAO6KRXANb8ej1rI2ViyDpTfijgj0Ds59W%2B6IJB0khnvsKv8DCDAQABoMNjM3NDIzMTgzODA1IgwAV8WKWy083twfTNMq3AMPHRsi8N%2Bat1QDPxpby8k1O0TkgHJUvXK5A4R4MkpO1%2BFUSZNP2YFwUF3D2s6zpcvKLdJYfi6dyvXT47eM1%2B7eO12%2BLC%2FSyj7mZoXuxxuqrHx5k0SNn6GbVaAAze6qGTmdxQOwFITgt1VCx%2BiqgyrhDlzF17Q915aDIX2CfoJJaXdrea4mvt0tjo4DQ30Y0aSNp2v%2BcOMuUfT%2BBJB18dmdu%2FAO1Kxp27MFusk54OrtmbRAikko1kqz1j2naTW5HtT8aNRW13yUBEINhtSziDeI4yLiEC%2BQ8%2Bh0kennr8WbUeEb1ccbKW4i6aLLSdTX7KRZdNzmZtfij0f5Ce77ymtEwSsgeGQTyuoUzuKxrG6EG7nOL0gUIhlhxIq%2BbYVJET0qKN8aPBR4y%2Bz%2BGmWp8CPCO2IkKK36kOtiRSCrUwhjAMWANwG0nBgHqx3TO8%2FwteY3BACzWvxMonn8JYNG4zWsuFomegg841kH746neULc1zXJDwR2fM9uA6Eeksyh5odqT%2FZk1D5TMjhuqF%2FSrUdNjZIAsr8EVhFfGJW51XznwIGDJNhjEy8btAQjZgp4dKoQH5HGaRMjSSu3xGGbVS65in1L1Kdf7mb7Dljm91IcrSbH1HiollXZJgFz7DDtpsHJBjqkAZXAE90PliwcqpiiiIctsibaqag4hx6TnOkYbgjLHo5svrQKCGszTufdJtjp%2BZ8mXYlHUGtHSkUBAyZS2Qr%2BFE8aNSvjCLrvLFSuyZ%2FQfSLNntKoUKE2ZERzZeFr6L2Nz0neNjxTnVhZiQTsIC6Wodxgo%2FMicn3fEwYkjsRB9D2Jg2CiXlx0KhUlHJ4Tp%2BA1G3NzTxd2NkQ58XFG0Usm26bdgbul&X-Amz-Signature=c3fbd927ee9cf11e94e19a2945a62c9b545661e3ddbeaf0c6c246674516f24df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

