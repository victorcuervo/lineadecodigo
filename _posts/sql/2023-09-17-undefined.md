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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7ITKRR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDzXxhlcmopqIk6h%2BrpAKFAOn0v%2FE5q0OJMCzMzEch6mAIgLlEborRr1LeLXLKJtzVGkxTWENCH22SJpXn0KsVmo3gq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNbuCb4bUhNlTrbA%2FCrcA65Dhg%2FXN%2FijkWewUHsdy%2BbbnJTup1KIkdzdOereGlNveKVksh87I9vBMjW3LCD0ll8bGd62yBaNSDOf8A887CQyO7JQb4yHSvb0EcpxI%2BlzgwIrx9x50dccnjQLRAGB94mACN4l8mgvLLWWZBWG7VXSznzg2KFiwD8E%2BqcUE0BsDhB1SXZq48r9Rd6hrKM0Q21xIAaPcFevRQ%2F%2BG8BHlsZseA4A7K7QZMkn%2BApf6%2F%2F7aMs8lzeyW3BVbJ8CZyvKRIwR3rRKsAsVx9USCW8cRLMj1VGeqYMo8voKfkZbTS7MXfOfj3v6xLotChonVFzAZE9p7LnuH4AvJSZqd5ohtTOjTGof3wA1ASLS%2B2Pwhm%2FTl4DcbfGuIM9XTvXH12bl9k%2FDStr%2BpgsNxaHJg15cJD0cSboQSZJ%2B%2FKGC8OMy%2F0mwHgV57vahIEhhaZuQW1rk0pgDBuPDPa2S3XoQR8Mge5MJGjZvM6KjW7ZNFwG9flv5Q6Hdrqktrj7XvvNdo6R48Cuh3QuwpfdENKh5tAvSYvgOkin%2FbbIRGPyKLghmUWXPfj0M6nUAVQrDLIJ%2FD6JU2%2FLjoYFsvCDX8iIicD0QP83Sw2FEDHgyZwAAlImyhcQVIeeDeihBXX1rLmyVMMWuwMkGOqUBU3zuRUphJhQI1V1mObBZxcx55aDjYKkQf2t2YbX3EaxNMJJ0U%2BxOE9FbMSvFskCb2NWiaptT5uWOn9ugKOK0WqTExjuhurB%2BK4vf6PuD3yS34jDFzqcdK6YAXVPUJfkN6eUmXoAwacJfooLavMhtOOJuL17LViXDIbhaL56FeRipH8ShsGQYDZVLilJiefs95kPLxoyDeBu9cSeFGMuWOx0Y%2BS7H&X-Amz-Signature=b67583e7d916f1cac5b267ffb47558dd9e5bf5e71d9719c55fe320b9de3e6fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

