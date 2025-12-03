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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JDP4LC7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC4jSv40zFeHljJMKGLV2Uncl6ZL%2FIpIbKdstvu8itBkwIgM1KqeNYaNPi3JMtigBOcY7fth7CZGKJGNm2ZN6NxS50q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKlXQWMKuflM%2BtGyDSrcA1PEip4YND9wb9eGfUsY%2BfoBGEabllg9WnyJG1gtYnTrgcxiYvk%2B6GJk%2FJfiD83TeCTE4u%2BDrbBd0dmBdzoZTUL9affH%2FBGD7qkKrpsej6WkdFE8OKof%2FID93%2BoDCvX4Fxt2YhkukS8gOHTbpWGyzE847KhZfXxBwt30rOBu%2FXcKxKw7FsapdgYxvwKY4joGpX3Mdaafqac%2BY1oTaViCpg%2FsM4HFOoJsVZy0XEgSRLxMk94ZuPq%2Fgtb%2FEGLUBicqRtVxviT6HI%2B%2FYfdiwyU2K71NqkWDJFixO8jnhFmZ3qo9CrCgf8ArCQloK7rrO7lN8ubKW8VtNO6ZqjeYUd8AUKPkQgZxNZWKqk%2Fkd5LfbeVlKdO5KYaApOJF1yrk5nttQT00aEIbcW8VfTFyerhMRLD54gHZHwxCHs8utyRLxw1ZBC3GhjMZxoeAtLXAHEkEUZfw3NHY9r4aFFqWqSO0UzhYN1mNPecsjEYq3HWUBrBEiN6F8YZMdeRlfftqI9moaHdjug8sqy0RY65cryLCcFSLm0A%2BPCtMqBayzAEDC1kLilKCKQXhdqmwmftXpPLgrSLzBHXZEMcUhkMnl%2F%2Fr0sFaOsfKy%2FAqg3vzukrM2juDiXdJcibHe5w8GDnjMOvVv8kGOqUBNlndzeAxVVZvf%2B6LNkTf5j5uKPAa08wXO9iR2XWdyuwYmNDg8rhS4Ev5C51ndPZAvCZN1lOgDRRuSi1sv6ZNG%2FAa7utvY4PiFk3waZv2ERW%2FYFyG7QvIMwwNvd5CJ3UGWEewUZP%2BSicenAd9%2BwaJWlHQd6EoKsdqSL76VQ9vtLvlXMNciIwtr4BQ%2BRddz1adIPixpfkm1X7LDQMifz93w%2FrBZwxM&X-Amz-Signature=03471e92e8a4ca494d8a84b95f43222705806ae55575dccfd4511f742fc07844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

