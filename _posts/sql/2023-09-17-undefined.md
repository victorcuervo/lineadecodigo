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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROU46OIC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCBv9571lW9zTCvUyY%2BGYMnB90oG7JjT3SazXG1Tep1OgIhAIQq0i4k%2F75uyCAcRPOoSDZbesamc2nd4LXvoM3DzNFhKv8DCDIQABoMNjM3NDIzMTgzODA1Igwit6HGPb0bZRrBkKoq3AN6WjM5ZHC4TuuWZzqbOu%2FV%2BzR7taNooY3T47%2F8BemdLGmxhNHvsnDjAtoUl6Uyz4RMle7mJqLSm%2BoRuYoiBF2e7F2MUBi9cgKzUstBEuHFIfPRYodBM%2FlPeu0K6TVCIKi8MoJdxijvibXy54%2FYKzqTTnOrxdG0wJGiK5IgeM4iOV8XlnxQdsoCWat3E1t%2FF%2BwsJ0lWkDCD9uaM%2FUJz4E39ZjVYA3v%2BPXH1ISdFimrWNfHKU91SlteDXjNYjz2eeq%2FHmVcMMZR8gJebd40SyvvLpfk7urTcOwxQqPeoAMuti%2FlojBd8yY58W12xUbREoparbMM1NCKGdIAr08ONdz5Y3OiMr4jEQWMsC8VefrECAbSooWJ7qd%2FijpLXG4YP6EKnwpnS4Iur52XnW5JHzmHPReVaBxkEgcG%2BeU4TRkFHjjvmvQyCUbT%2B%2Btke9pjilKrO1TZfCboNJ0IUxRQsXr3KAW3ClReqM3X2F1oxagzuPUu9TeAp7uswCFDr2Bz%2FNEz6R3kVDmZoPG9NsYtsxj9KWh7imO2EwQ05%2B21OtZMvE9aztSgdsMlrBL96Xz2oTqggCOcf5pQmjbdZ%2FBJ2uAajt2SdMJ%2FpS3BbkQPqe3z07UENJm6Z3bUxlNoKPDDm2sHJBjqkAZc0CxUoguIXBx%2BGLs02M1%2FuCSGSv4dbnTYAZ554cw%2F0GqU%2B6DUu8h7rEWKHFS1HsOGHOxRxg76M%2Fk2wVjZqak77mk%2F28%2B%2FFqKLl2%2Bb462zJZ81d%2Bt8axatLXLOa0uQPQKBzviLR0KiEbCi7TdjCzfXJksrvml0ej2lfCLH25CAGa6MaTO0oB7%2FPEqacJgLtTfatWzW1Dk3m3Rrb06Wfil%2FL13qp&X-Amz-Signature=79ba9f0667a008e9e8de002f74f9c2f06e95f557601fcd6087a59701c85908fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

