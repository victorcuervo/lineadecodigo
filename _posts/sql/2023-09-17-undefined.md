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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D2W5QQS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCZ3T0NNNVNoK84ndy0gFyX2u4kcozNJCQgOJAW3ecdCQIgNVJOwCdBGuULXfMpCi36SM0cdxh%2FDVYOxPcIItTxWaoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDB3eF8DLFJKF3RlO6yrcA2ZyIEzA9WCnKnCe%2FT50bbG4VbpLk4EDWLbJESHdogm75NPH3fXohGfBeQq1yzDADXTFExdivGCdwqjz9Z7NpBYxApJfMiSNefAgMHd6Vz%2BTCExcB7W8YJwpvIwW4Knqn8obk7VxE2sk2ViNydo2wIJf7LeeeEE1twklD9sRjXMwNJJou6utrVyVWe%2BnPbojjQx30Kfz0hZbxQBSkFs0kCkjo9cutgsLup7K5QzM42oyJdYTvS68Li7c0VNPxciWfnfz8OJPEJqP4ecZVlMW9T3X6cXxE4A9xNGPNt762HU1D4UcWyRMTLOicVJoNe2VKvj6aUBQijQzlrXP7cV5Wj7r4VWEwaGnIlz6aa7ArR8q5wXkTYdHEjk1mAioWY53EXJn60SujxQc7Ix%2F2n9t6dF6J9xsOlug8jLFbQu16JPVkyGIMEVpAea7rtyHWhTMS5ooyY39yTlejLsaJGGWjMa%2FFqDefCmTWUDcAO8PeiLMV8KxT3vZRo%2FZ1BUa%2BeVEeoLBvRUI%2BTDMBZhd5QuNZHw1%2BEhOF5OWBqLJZCFetqukgQL4%2FsPlEeX9LoxTvfymkCrzaRUydDStzhJrxGnLJx2xTAN3GPm0OvznLDtDQCFOEaNcBZA98JyGmupLMNz2v8kGOqUB%2Bkn3nT2x9bwEQ8gtzB9iTKaODQ7vAR1N%2FyrNbZRMFgJOTxmILzm9hbWS2lYyT%2Bfh0qlTwof7r606mERjvjJQilfApCjPN9%2F5pW%2FneoF3RhZNMiNui96%2FcW2ZCGZId6Wl0sO3xJUxtjdJjehOkbIeagT8u%2Be9qolNc%2FOrI2zAxvNVcPChOaVr8f%2BqrGzeNkPux0Cc87HmdTRLbK%2FqdVB%2FHFLkd%2F2j&X-Amz-Signature=1522195ef277c0155ae00b6b7f1cfbd3a8df63e3d61ac97e8c638e03c183ed6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

