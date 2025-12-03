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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIERJWYB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDeyG%2FrF7eYeWFRUmARSkA%2FdaPLcUa3YpdY31fanYkywAiADVsFXUseZ4RNZVN1Gmv7NH0HKIh%2BvyYolqtVc9%2BH3Zyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMpsOtJj0UTZL7e5KTKtwDOzF2nVhKb1rHpPefbQDpnkr6g2v9MNCsLfHI1k9E2jMiC%2BwP7G9pPINt%2BFt8NqVu2BSQtwYHSueaJqJJ3xEPuy3omDj0xfVPAhN9fku4nKAskqw%2F8m6sYl5CQonnYmH3Xn0IiEpwghOLvRsI18Dsuh5XqnlWlrlCEZoqHQ3bQhqb40lRfqqOn%2B%2BWCDBIlbgmMs1lQMglk6iP%2BbRjhIVnjYxBq3WOGmURs0U3deRrzK18tIISZXqTcW98qxdaH3TEzrbAIaTagXMvIfZDz75Q3No7wF8OiMK9SzP4JgWxvyKjKhutbzwezxZl9%2Fr0TAs0bQT5of6tcCTsM85wYxLy5z3RWPw8IzuUDJKLR0WOCKe1CQ5xO3k3YOFy9YxSflCqHblIFedZ7tRHgu36gNNKY3ihVbS%2BM5XP2sL5V0iOFRs66mV9zK5GxpkBbytPFnnAbPC8jQ2fClpZLUA32SYMKs2wbubKiffzFYPIj5xvow5DLyWnTWh1WN6gD9g412Z1aIzr0lo4rg%2BFFer1%2FISJ%2FV%2B6hoFU3j0rujD%2BzcC6E2IyiHayuB6TEWV3LxISSxSGUkPey06N1hdlvD0CqtLI20RLEvxrSfBA31NFr%2FprA04qnpbFKekQWQBXNtow3szAyQY6pgHIx4TeHBzIBQtzIAvrCxeRYvA8gdOl9%2BlbZBP9lh5VAG8dMqrSVgR2ZYnODbspwMpFcej%2FpGgk5YDBDbVEIHeF9sJ0UfNY3dQ1Vzqs%2FJ6c0oc9yrQixKPSNavFfDoaUggr81USJqgufjWJumycAvq%2BPuctRQHzGp7X2WhpT44eSiDvB1TIvbDth8xl2%2B%2Fbno%2BqCb7BW7VutBR0EDfsoACAkMmehl7A&X-Amz-Signature=e801d5fe8e538bd4c78c47876d9c320b016ed1ec926e4d9d7911e1981cfac615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

