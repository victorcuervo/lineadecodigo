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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647KXQRUC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBvAZiU0wkEEmNVr9bY%2BrU%2FbXHhlkP4QFtnYPVBcMYcgAiAiUBnDsAwu3QFeVo8r1xXURAmqtaZp%2Fuv%2BCCfGVNzOoSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMixDDg%2BRVOMWcOUHnKtwD1rgU56fPfIGDxnkzu8I1vGoBoNiRl6lch5wmLSkwUTdu1cdIQDBPGud0isxFnknwPWvqcNlvXUXWy9LMFKstb8CQ28Aj4JFNxYgs6GIPfj%2BezNGlgQ1EfI5ZmZXwtPbn8dbpArbwYkPRaAo9ERb6Cyddx2oGKSAzuv0wL7AvIuXMys3hLJcSsMr4uRrzH5ldtftXAaiW1qnChrDj389PTb39E3uSQlcfdrHzAYyEQZ3Rn1bjkIDYZjY02bgmiZPUwhKoGqqmkWlPlp1m%2BzRK38%2Ff5xqXvdv1w%2FU4mEvhENhi3b%2FE7nTEG16GSDcnmxCWi0B6l3Ar6lrlAFVTNX0t24z9JCRbNP8zPNzUNKjUM001a7HKaJc8oG0Qm6aSF4gVOC7tFMWeViD9Z0fOys2SdOQ5pBTYIVcpUVeEmnMzjcmQEOLIjLCe9QOdxBra0g5vOHbcwgtp0tcj5%2Fmd%2BJqPQcCsHsRZtOUiYqAqVZzmbJxZX1Bhj7HLPnJcnXWwKPhVNmHPtugTRF8YrQkblpENTHE3YMM9vVFCJOAWXEXrX7A19nMC0vOkVqgQwOrLFaRcN1V43WddPh%2B0nVWehR8IgsVYNcaxW8lVP1%2FFk7iFKQwgRpq6kKkx2c90ThIw5sDByQY6pgF8Tty7B3XWAO8NVTOhUhHWGGEjfSoPTTCxuoybMfg%2Br%2FA5jjgE5dsLbudJ6JrKgabYMEcjxDc%2B5hivk0VYbLDsCWDojWBDUfATR4W8hAQlo0rkWQi%2BhtzIt3Cc7g8paAG95hP%2BsshAvWGHV%2FmU7gCrvEvK2JAyNZ%2Bt4ZFYdNU5iP4foidnfymRQIRNQzTix4TbtnW18J58c1jTjTKHM0dJ6CSdc2zq&X-Amz-Signature=7dc44aac68ffb8c10110ba3a197eb0a17fb1dbe4472d937397b8529d9b15f209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

