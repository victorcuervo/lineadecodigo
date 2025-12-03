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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466777RY3SD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5oqs5vh3afhJnWFYeBDZU1EMOt%2B9TbOpUBmFabiAxBQIhAMvEVFXYEfij7bMcrxDtfPN3wg4btfGmEOiEBqRlQTM%2FKv8DCCIQABoMNjM3NDIzMTgzODA1IgyXFLx4JFGczpLdsOMq3ANBcmN7OPsR93nRdL3YwHrwAKvLoeC92Yvmhe3XH4bMOdoVyUFmsPPUrK74uZNQwL9nqfjG3Lv2yfbrUTxg%2B90V%2Fc%2Fx%2FjMqTYbV1QQ8SMilsKHoPbkjqDNDexzE4uuvev2W1bEyncORZZZxVjYyegJ8bErpgn6VH0JOB3DFbA4IQVhoaZgUJQjv2q%2BXQZs34kUWv8bcfnShPL%2Bt3xIoVAkIYupQN8MxtpNwZTz9b3BjcwRerUkiLmDNBmz4O4jNFagkpz4R2fESL1gjQXoa1uh2pEdehzje8WQ9nYR%2B45a22tp9xTknn1CaMCz4XRE1aUZoxwCj06CCODq7BxS9pC6u6ypqgvAIhCg5eA0ZhGDztXvFoj0ktwsv6U42IxrkIit3825woJYOv0ZmSh%2B6S3lYgTG8OYppnN6IXFJbsubu9At9NoZeKmlc5nwn0Bihf2w3OyGzOexVgVR%2BRFdA9k2IaDYrSPMVA6ebLRZ5lE1ds2TOX2xuNmO1CF54oUP4QdsE1ufLlpf%2F85dNQBaHCH0fMWFXGOZm99aXscQ0TlDQmFHlgc9fORSznTZhbmV%2BxrTzYBHQogVrOMj8d6EFqkH0uHkNjq8uZxUUI64R6cF5l4iyok69qIYW4eienzCelr7JBjqkAc%2BGnEJGJNo%2FkQXzpSOGsth6a5m4wq0uj6xGLWpBXquTRKurpzoZAanEIRBGFHmw57KHRw4%2F5SgMPFBLKlY0Ka3YbX65AbELaCwADKnjmPqK89E719WOcX3txQDAuWeFhUUaJzPlp0gj5HcJAsG50Ow9d418eCMDOVilnP86177pLCNN89ZbO0xM1sjXo5of1wSfZorwJbyobAI8eI4%2FoAEgXFl8&X-Amz-Signature=9e54132653f00a25bd87c1b1af17cf107c14de23bd41414c641cbfe16e5dfe61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

