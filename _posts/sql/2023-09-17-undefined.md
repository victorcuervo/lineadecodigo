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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ELJBO7J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFXozpKt6iJWllxlC9ILotB1zJ%2FFnKT635Mjr8CxTtSsAiAZk6j2Jfq0vmVugGUnwOruYslSyIUidUIR4bmGgb2zjSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMxBWkobtkzoiPIeukKtwDF%2BJ2u7Li8eV16lExRzWsfiP08lleLnNNFUnA%2BXETe1jgkFkUXqcqCq6G0c%2FoCTjpVopUoCm0D0NGrcoKkvspOb6AcJWhhJY%2FMPMFiTKO2bRDeMaFPDfsND4Lgqv8wiBkXGsEhhpMCUUenWSCi7ZZovVVBaxzC4nxGHyI6ooq3AcgISOTp9ypeCR9b33iiDLeevQzwDpAIN%2BHSpH9ZD5ejGNjY1%2BgPAqHJjyXJdYpAYS7BTJAo40rDNseDKfOzL%2FAgYetE4HjQnOHiWzHGHO%2BNwgiOZYrp%2FKGg0GQWDzJAqmQnCAgVt%2BFXnak7vxs8GxWbodcf5MAsU1rgCi%2BgICykN0l4Q%2BRtVOMDTAhfoEvLXx6fGMUk%2Fit2t6sni7apUi%2BU1EVVvQF%2BV9VG7NLjn0GFplowhMeR1AY39GCYEsRQpMjNlOsp6ILnLFhFL7n%2BPhLakPoFJcKg9M4oh8g9KcVKKU7txD1jRJ4UyawnjnkCu7cGxgeiJQtVnCH%2BgE6XwnPR3OY%2FiyykOQiFXLvVXVhwT4neRm2fuwQ%2FNMnT01flqilIyE0eNC3oC8HHvJRHN3nlv8Y6tytDFVFW%2B%2BaJnAeslM9fEG0%2Bvj4ArkmqGc0rOpUZrxku8aD7V87JQgwnIjByQY6pgENMVnYWRrBlwgOlY78Q9ALYowqRAp1E5l6uhqpktpsoES1mz7bnDeu%2FH0%2F83H8nFOu0IIkFVOQt2znkIDBPD%2Bm1MgRh3jcE3IiiBdixi8BaFbSSvlifcexQeeKTjNTsPNkb868U8cxn0JVS%2FR2Eb%2FwtBwYQ21%2FAuSMz7p%2BdPcwKCiVyvwtV2zP6PJikDsvnRsAoQqpV2o%2BL6c%2BWgkSjzNySxcgOUBU&X-Amz-Signature=f5698225bf2fd60c0c98579bedf34b1a7f9da2434bdb02941c05d1d73c699ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

