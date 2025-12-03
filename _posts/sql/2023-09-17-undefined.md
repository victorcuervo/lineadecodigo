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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JIGNCZ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDJ61nU%2Fp5lnSHAmyhWgNoA0PBvhy9gDXQBSZ%2BubTjBugIhAKVK73Mp6bEKB7moeSz%2BdrNm2dq7oPWfAx1j1yw8O5d3Kv8DCCIQABoMNjM3NDIzMTgzODA1IgxsZM6y7epDTFHS3Ocq3AM5IAHSmz21QVTmPhQurODj302y07HOLRqGH3WgRNFjYdA9fplZBMz0fJ0iH%2BxjIy94Z9v53iREbeqgnmZM0iQ%2FEEM2v5%2BP1KKQHBIbJfN6lEN6nPQE4HFnpDnhaH5csJlvD8cvwW%2FAK7KVS0zgY3Nb4IDIv3ztyQllquxkS3r8yIYd%2FdnO%2FSpjPoUenSjlF26fG5a6zBN6C0z%2FvC3FjBWepFh4o51YrLFVNr9WTJUASQSg5bPxjBMlrK97pRkuDLKnRHbeSLANKD%2Frjb4xYhrQBB2Og%2BKx2jNZFck1%2FOc3looald0U%2BxeSWqdsya8fT%2BUgmLZMoa4wJz1xMUANMLubuJAUbGkQaLtP5ZJ9x%2F5K0Y50b5CI%2FwF0UWjUB1oZigZlzZ7JZzb%2BMgf%2B1FPA4xgvAEQ9eRXQuEYx6e945tZ%2Fl1OxjDMkxpbVpOHLmCAwODH9Vj15D0EhlUkWLB%2F1Geh4eTnuyPNRUcjv7Rq7m%2FbKL7GaLhw9FgjL%2Fw7Blhg%2F%2Bl%2BxGjFcQFMPmEfzvMf7hr89y4Lz%2BdgcQLNnYqIpqms1GgDjgqrZ7Tdq%2FX7I58hSGieICmrcRNNdXMcJWiCecm4LzH3S3k02diK50oMDA6vQ2M9h%2F8RZr0ipHKyA4TDZlb7JBjqkAcs3a8DAE%2BvIqMddNC1YcbUTMu485h%2F6xOyhUS1n7WYYSKXIugkefFkPkgekSrDfw8J2QZljD%2FlT%2BOWLOEfEhFaxHftIlnUnWo%2FCgCnmImfzbLdkgeKLVQJQgt3TcKEk5%2FL7Bx5at99Rfc84Cmok6gO%2BIc6LySo11FyCzQr5D%2BVIWr38d4W55CueSoAmJElB3Yb4K6CaZ6j8WmbANkeLZIboaz8a&X-Amz-Signature=1849b0b3250704a5962296c0e0166f7fb3a0996be23b73fe9119adae9b648b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

