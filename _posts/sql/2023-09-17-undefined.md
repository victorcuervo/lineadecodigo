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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3VNCDUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFQ6aR5ZIyF5PsljyRNNdEyJlX4K4ay01ExApmCpdcgXAiEAozLm7VksNlPqBjIeycxmeW83s1mQgsWIGycbI57q67wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDkVSB89FMOsbdfmZSrcA4yqGS5VELr%2BcLq0KYlE9vwNIoQAaiIGWGrubK8bwoJZWUzm3LnpQnygMKwg%2F54ht9%2Bo6JL57C8vdEEL8fDIyQ9ed32h9jc%2BqT8Xedf3mm%2B4jD%2BuHvVQdlhTPGqzGiYXCAr6k06T1ow4jAzdfphmq3GZqhWJZ5i8GeRFhWVWqpPQiROBLqi8VeEF%2FEi59lZUSgv8xoXyZzvUMKhEqmVAo9UJgBeRvQbz66JBqHUIffx1IxpY267tcOKW56GgAMq5xDrkTt5IBV3M%2BD4oWZ%2Fx6buK%2F7yV5Woos7emG0BJCnKJH%2FvomPJaD8TdhLiNeA2nV5qdJ0RLC01S6Xx2uOY1Ij6B7EZCMdbj9%2B1qitoMFiKa%2BeIsAY7geuwbHDT7mS4bGB7tH%2F3hZBxY8UcCbm0vw4Pu6h74gVy79hJREQHJkUalcyVUG2RLMeGGUCmuLNpbquZRmo8QRpX%2Bgi24Sr91gQfg3eO0KnhTtLfE7OUwh83woVVlM%2FpYuzB8geMYKC9ewDAPozVoKGBtvirPiJ6B%2FJL%2F0yK5iyjsjaees8VOx1vmYEoATF4aVyoBhzUWTwWvWkgJTBi74qVBLkBIWMK5XEx5Z62IMiVUcvJXMPiVTsMqPa8iGN0skHdU1lNVMKKWvskGOqUB3BmGvPKEkwnDWPbe6ecxdS0qrGJqTMJRXRWj1k%2F0ywZ55HmFtDa3ZFfENVBKEddK%2FEKknObEMqS1p9H2nQPBYh964GaeyOwDdwNe1E%2BjcQKLE99sOxcrnXGV%2FDwq6EXM2%2FLgZ%2F1XEqg2LPfZaRDFpH2O8gIgkFbUWlALQhrOCDpCnR3bBk9mOLI0TM85y1GqHdLkdqJjRV42fkMgOwg9GN6QWfbm&X-Amz-Signature=01af934d1f293163a2020d6d3a092a2b3c72ebd97178a5482c148ced47426a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

