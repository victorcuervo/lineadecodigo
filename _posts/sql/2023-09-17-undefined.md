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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVO2AVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCDxHkeic%2BHcsgdxoLbj%2B4s9IBzRkFzY0AihREe2%2FM%2BCgIgByiASrZC%2B%2Fty50Jt5a5JJDSTk70yx2zdszCxpQUKCLYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDV0lqcy09sis4Ir5SrcA32zYGbN6lcdhD%2BaLg1k6c0XJeUCkwIz3HG7UJUcUlt%2Fm%2FVJ0Nngh4j%2Blfr6s%2FKyjJuPplpoFlwEpV1uzdjv5iPa6fMhb8VkHAvd7MYvKGie16j8LyNMazn3pFJNqp%2FAG2AzDpWyXRTeKh1gXPs2mLlFqX4odbRdStHsqr9slg1u%2BimWbnvkaCTaoyt5ASAl6EY04oAhybliRcjzk4DQDIJYHHy%2BdEP9DUNiHVanvgRuvmk%2BmMGzLR9tORbGsk%2BE7jWPWph9zjs2DLEBup%2BBPTWq%2FHNylqVBHdPxcfvpONqcTy74l4p3biVdtUK85F5xmg5QF55Djad7xXiSt%2Bx2InhGq%2BwLw8NvOYBgEfd7dyWPEUjt7iEdNWut%2FAC6SopuEX8t%2FrFDwnZtmeIQkx7QjJiXabA5MfbSwmUjfsmFRUv5q9znHmwaqdSaFVg4eV10DOMrR7aSz85%2FP3K2uFrinm9SkyJLDEv3ErEyqfJhzdzidU5BTUpUnX4VY0eeGyJ5Vb9S74TyaJnz9L8f9IbVY%2FafUScPtivyyBwGcknImyromOpxqLc9bj0yh5z%2FvlrlshygGH2up6%2BQeHCy6VPzhxR%2F4s%2B720okMxLCQc1THDOq3cuHCB0OtdJJR1VVMKOWvskGOqUBPm8AWF61Vx059Hmcb4jJfgpfcvILxx1KCBGqGjKX3ZFIEUysqk8qdtgBKjSz8Sbj7glqy1865iLazbZ3B92jhak2MjyAn2tT3YTDE3FaVlZZI1OmxcDik9%2FaCr7NBxlMAK7CMND1kBQ4tBQ2htTgCkNytRPA5DgSbVfXZ5khb1p52RpW%2BvVEGs1DfIS7OdyEyDi%2F82hLD7DCikH20IQlCFYyCquV&X-Amz-Signature=c2982e033451c2177bbd6a3e5b0cf987481be297a7f78b9530676daed728cb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

