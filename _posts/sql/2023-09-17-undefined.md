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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5LTTNW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDJMSa7jMPfCXj5XfEcNzM%2FmZwY9R6XVc0i%2FQkLZmMcOgIhAIaBVWGVDM4ASZwafWGYnBA8eDj%2BwyqwsDzPsyxYImQzKv8DCC8QABoMNjM3NDIzMTgzODA1IgzuB0lHq6JAvE%2BvXvkq3ANkoSlecuOHrqBN%2B4iBB9QbXyU%2Fmhit2TVC5uTXOfFb%2FxkKLtxDuvSM3JHQ4rT591dsLNrFPrK6WB3n288%2BFqy6fkQIuxHIyNE5cfsLlPa3ZtNbcMhvXqBp1t8SQO3Bywyl4WJIqvyN6Pq%2B6vcTb%2FZL60rFEtlAt%2ByyCaihdD9a3QvcJqSudybhBoxe8cpinNOQFN8OGsafXp8xe7EHshf%2BT%2FjLUQziDkiDuQpnfc6DjD8V0CG%2B8JKHDeQKmJpv7y8lnowvckKCfsQhUuRxVNsaAf82dc8tIH8r5qi0C5iw9GAIMbTKqdQsyfsWT0CsET6G4033EJ7%2BtSukHmYSkZYoEq%2BGeBtQNVrdvSniv0fCrMdspC7evAITL%2B9YlY3LD2EuCm5TKDHzuL4y4tu8PRZsRD4oR8AVFigrn92G54aaw8xii1TxHQrRL1OseWfZxxNGzh63%2FTJbNOVFUE7oshrfKeQAB1zBjFnvUwCNPcqxr4klNLMJTVpeyxk2%2B8teeKOD3LIkch0Ma7XxLNa0RDfyK51xND0yi%2FK62l%2Ft%2BZR1fcL%2B9mJPvke18BU9huonS9%2F%2FRoUAKiwHKQ7haAKeMHBWbFBSe%2BehvMn%2BUqSTlowZbVVOovQU5gnOTQqFIzDBh8HJBjqkAe%2FWTAKFAYZ7yeGXHj85%2BXO9pnDZSVkzSU9c8fxBbtrvxR2%2Fl30sNn2i7j3VpJmW56i4BT5%2BA%2F7EkzTgeKMOEjnVCuhcFHt5N6OhkGmJAx1WtzCoLjfN6EdVkCXNrvsoda29XJZ2vGIylEiHnnqDraCLPjcH8gQGq5v%2FFewpqhSOG17TXJU6cB8FxFntFNs8X0mdYZkVr39TidQAAHEC8t1ySCSC&X-Amz-Signature=35c3567dc264179f369154d080cce5b8be363bea5e0d064f82cdce3d2513c4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

