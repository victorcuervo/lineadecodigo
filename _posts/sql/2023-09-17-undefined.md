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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD3U3OX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAwwSu%2FSqW7yzH1SY%2Fy2ALJZQMtujwZbpgjqiWC92elXAiEAg9j8yhaYtV%2F9O4vWs7OrguLA64mjJwXM7tQn6yySWWEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDL8nTVVKG2ph6Pwi6SrcA7mVWNU8H2W2uXDqsQgKnmMH8kQBKn5g%2BBcjYV9fdgBa6YFlsqjirLf73W6FO7uB53KmqIvKa0cyyE35uuT%2FDrQjsdcPyTM%2BnM%2B577phfykM%2B6IvkitsfBdqtxcCXnuNwFVtU3ztNOjP%2FnhHJOf10HyZ4MmpZnzhpoEsW4ViRoKgJ4fRCwpbdf70yb1MUUBn8JqfAVokUJG1AQCdXxy9Ih0%2FapK2YziHI9GK37cSDsWpWVlfjnM2%2FnMBP6GD04KuixQrkkw6EhlVZ0wwksQJXWYt0uoOroHHntGfWLMIYx0anIqVcFFXS5HBhvrgqy9gUHmrT1V6ARDK%2B%2Ftwaoc50vPVAF5yuHK9h8sTELc2MVWZHy%2BDcvmrO8NLB%2FpcieaWaM%2FthSEN8hMJ3ZLbye4vS0SUYPmH8ek5tPeFS6sEwTWrBHaGcieQTUCboJTL2pr10uWxpZbegGQvAm44mQjZLhEIVyZagoinirxUnTQcMW%2BGZ2UI98j%2FA%2BUddYucs8xTmvxx1CYXP5q%2FpO2qpR48xWalPnTkSPkSfLjDsRFxsADfvyn8NSpFrjSOTSZmml%2Flsw%2BH0CEspj3y3Oop%2FkrLV59DEElZiKvwU701BwArjpP20uMZ4wZRQdrOOnvjMP2av8kGOqUByEfnJGJyBoqQlCeOZMg3iMbK1wal4oeqwG8VKUqzr9lO1hxuylynqP2Yn3MGwqynJkfu5Xd0hz9fnvfBGPLktH6s0OD1XCHSY8sSVv3sLAlCDBEYJa75Bw4wSUMj%2FC3e%2FCjwGNSqDHMiOVBpD6B3NjHtPXS9S95iL2GKAXd5W6MxGGwzgm2Op9fy89iE2o%2B57qy3aoOuxWXMMXPfokv2UpjlqYRt&X-Amz-Signature=792393162986cd1841f4a1026d16a04c3b10da20d32dccb54bb13310c5822506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

