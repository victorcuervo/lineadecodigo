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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3XONAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCfEtT6ukHDLLS3qvFJpCrlLKsdRxwcE46beYrmsTPqfgIhAOh%2FAXJeh240IFvS%2F6cSqGL5Him79BvC5baA4MIf8e40Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxZEYKakc3sJskADwQq3AOn53vmf8LYGOsoLQNhvdOp%2FzLtVzUeso0MAUnOa14MtNyvJV65CE1XZjyrC5rx%2BgBQ%2BBovs3KC4z5Md2aWqFnVvUq4sEnUj8t9U%2Boe1ss1IVjLR8xXYBDbG9ycozF6s7O1pMkU8Iqizhk4DcoVRmsMcJRu9zQBvFquVNX3jbbC5ZVaYVFDT1DRxyvM8Bwfknj550rSpR0ps%2FdiRYlHQosfo2SE76uicbYmO4KgezFAJRlIViOJigstKEdxEc%2FaAH5bgY8FzDsCB1FQCMmY1hNJplkok1Sy5krWnehh7BId7%2BIQ%2BcSNMrmGbehFK3bqW%2F%2FMq6vZvkdRleMbu6tKuyQITUemAiQQC6AqwGBIR7MZkVPIcA2Wbgj5w5Wk6HTAITbIcv3GiGV4qmP0TWEOMnmCGbz2ZDHyJ%2FlFgaMBgz%2Bk4HPHhqDbyFqdIQv1wf6FBeB6rG2CSK53gD36hpnhb%2FJc7fpt%2Bl8LZDhEOWv%2FC8R7slF9f8uEJLblgu1bWzRpRNu5Q7k3JvwLyN%2F6ycRY3YPJ0kyQTBx3PNR6YoGVICNmA4HPiRINHQEmThOwlxz%2FndI1UTyDapH%2FU79T16rfSkkwooAeWuDpvHssrd28%2FvQ%2Btv35XEzRWRdfSuzBeTDTub%2FJBjqkAYX4ZFUB9715Y2a7KLCcXeSghC4JDczrCsZ56qIU0kjY0xfHtPKRXe8rLYlE%2BNr92N8K9PtKdx19nmhEK5ePGQ7O3vtSdnuKz%2BKEZmeAGT566kq5dEh64gaA8x4Gd%2Ftz%2BEFXqKyzXMQbZhn7D1a4fhF6cr2mMEQPPBQnp8JnHIPHUNVnvBrffgEaSNeJXLJRiE%2B6hCScKtFgLPwduW2g78l3FNNw&X-Amz-Signature=ed93c8b5119aed570ae74b3c313b8fcd560ff046eeaa1d608b6a0d2c138710bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

