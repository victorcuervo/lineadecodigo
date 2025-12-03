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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663COQ4FDK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDeGbewMV4npOTbCk3%2FdW8enEmIGTLm1pOB63wcIfnagAIhAL%2FvRv2d4j6cfJx4Rd29CDj288drzr2rYRtWBu%2F5%2FG1nKv8DCCwQABoMNjM3NDIzMTgzODA1IgznC02DSBToMfRDw6Aq3APfBVRvQIyh9Vvp3ukkDL2GbTUShWuyclKH7VxPQ9LnSYBmvubSbHLG4OoXam9PWqf5aN7Dtb8Kpptk6%2FOs%2BTHaUwiMmCziKBoWEYCACL%2BIV1HIPN8p2fFlsR92cm6KBHP0xcbBfz1mf%2BjOyNtAbqakxRo7mxpny5fdYkTGsIO0fGTqzXaf6ArTghQEsECmy1yYFfzuag8DxAeQNmg1DV7Jen5ANRKEL%2B1oYZkZ9N1pF%2FASEEELZdWQNS80whx1H0Gkhn9YdQHPttLVMq3xX7gFIX2%2B4viGX5xF34Kz4Z9ToOM5FLYe4LEWtALhTBu5A9Vs4jdjE4aAyo21l4Ktrf4zUUhH2614xn7h9K2wWLsi9R0wsLbPW48AxpdGY2D%2FLR9nOohdGFE%2BKpUMR9NqlMM1zvZw9MacX8KF7hZ3%2Fk5tJV7zuA4FGG9JKe1ANipu0ZV624YJgdW%2Fk6VyV9nx7Mb9f%2FUVv9CMWFwXsXmlXXDRyyUodPPVrkValZCiv4mq2ZJeqvrNy5x6z0Z0YUw9%2Bsw0s2YLy0v5mztd%2F0PRTIeqguBGc2sFDnwXqrKWCRpCZ818f938sDqvkxJhdznxkNA1PfmpEnMJ%2BA7RXKJ%2B3K60o6tgjdyXllVlYnXpQTC%2FrsDJBjqkAbqGnhk%2FPi8GjfICXqR61WmQmtdE%2BNNMrhrCkZs6i%2FJ%2BuKxO%2FJtgKT2%2FQpJ3GY3joIMzVbvpuq0E0nyxRgJQXlnjziNrjggOK5FsGm3EriXMWWI0yaiEpPJIO3FUey9slYc2saCuiIdiX2%2BpVy%2Bq8Iz3eUcO6trCAIB8GjSmjth5m9mKnvCvF4GJ3Z7dkIKUzdYAGRGeyIDn4XsttrXxkFSfMYRQ&X-Amz-Signature=c790eefa300419e715e2022df0e70e4cf0a7a3a3b0d7a0b0a610a8b963e0c56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

