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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCHBK7Q3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAdM3XqFSPAPh8y%2F2fqbLNZlpATiN%2FFHYZZyNQSv787gAiA30a8p%2FNZ9zHpWx4CPVXr4fN8ixNZAPnwg9KvnXr4F2yr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMqemwpVWK7BTLGGhNKtwDLs18vtOmnpsr8FjLdGLf8Nw6AXYYg8h4q8BBMIUd74feCDcMeih41QEHn%2B2g4IWjeWYFex4zqDlqc1SGf%2FpBPcdNEct58omCaA70Yv24%2B%2FPj7mCtOxSE%2BWo4etEYDnpZZyoW%2BXGrbReOwBa1eUax8I6%2B5JjpCLLDwmfLYyYKuZNar5h28VJwycU9k8IPF5C1cjkK7u2lcp5%2BjCNUCcGyW3Lf3UioiTogHGBo98HP821k67SvTL51owpS1%2FvW2TNdMKLF8kEcDvkTskLf6t8uN9jEjf4KEGP6%2BdG1ZF4xHVjvv7YdtRTCU6e7EsiPuGhGsF0o5MbKlM8cN63GCNWdfFiOLzvH0zu7svYKgRFM%2BR23nc6ceo3b%2F1v9Vg1z96%2BJfRrQ29rTU7%2FbmSfXt9LqlJnTNmgZFIuq%2FIVDpTDWr0XI%2BDnF4DrgGFYS1p0jAkaSyKfncY7VfHSIx0hntdHhC%2BxXu8ykB0J%2Fz7Dgcmh%2FKyLm7IIe3l%2BeVblnFDqlZjctkr2bG%2FpsfGnCWbyLrA%2BGOMB8hiV%2B%2BfvkofD3j3p3ywdZvKnl2VJdtuAtmzTDDNyHjzCL%2F0YbXf4OU1ff98xXQy1QMpz3F3luil3np8r9YRXZeClXcnPaMGWjB5Mw1pu%2FyQY6pgHRuJbnb64lmpbTDJeP3Pqeaulfyp%2FAR0yCaOFSLtKprBaKBT0ZHtdqCiCYTXIrLVhANUyqieR5YLscjR%2FKPeUhZFv%2FvTcw0ZpUQDTNRiJiqYlFUnhZFBqbR7pKQxnoGRfwt4%2BL4EaqZ5hEN%2FPM7jL0K%2BqcuUVVFEgdpGjxQE7cvn9tK%2FHTrgvGSENIvIwpUa7xGzSQRZumZsO9G4gyW0annVz%2FIv4S&X-Amz-Signature=ab113f02b577f6f6711237f256405bc8b6d2979141974e361eb157c507b8e0a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

