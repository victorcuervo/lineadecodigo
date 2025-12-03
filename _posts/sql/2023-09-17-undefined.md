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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WF2TA7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC4xLut8ySvE774Vkwefl37GYz882jj2wG3XsRAj%2B3EDgIhAK3GBqfkR5Emjkec1LWkD2ffD%2B3aaCzFNrYMZ4M7NTbMKv8DCCgQABoMNjM3NDIzMTgzODA1Igxvc4Iax8aO54vZkXYq3AOKFi2x6IzQE1F48rxv4gb%2B5a5eyzpuqPbV1TP58TXd0tJ3Ax6x%2B3n3%2BOKcs5RyahY4KISJ4OdCksDuMWI1Hskv3BUmhzjIdJ2BNJxvDcoLin5MpwoeTrDevHze27AeJFc45%2BHpEtlJqyZX9IBlfrP1waZulmgu9%2B04Y2BHYhK8KKHs%2FtWdXdSrXGCsCDfJz8izt1PnYiHimttHPFKG52nbM7fhludfK5aKp7H10X%2FA8E6RoxLjGqGv9YdDCr6a2QztQ7zViyfR3InGGOBvuH%2FUuzD%2FF2cAC%2FNXrbNeUm00PIlU9nzdLMhjIQDCCcvnRtX1FYZxOdchCIjiXEXVX6WWdswcXwoonnqwGkicULw6608sEqZCYt07i%2F6NCv1Bb7C174uLSTvNBhvuigVqbEZX09XmqfvPdaFpEVHwgpO5sUqZ%2BV%2FFgVKNInWtvuvtE90%2FFYD2l8waotxFVoIaDWMmJHAFzHje05J0i0uZwBTjJCY7rOk8FPwuSrZ0DrYI4T6lqX9pMjIXmrSBotKQprIbrFy41XT070FY1dS9kVN8wm4%2BnQrRU9otwhBvVThQ4Z4xMT9D4qYRphcTmgYHEUAVWQvyVMQqwKZM8h9U6BYlSlBUxvhYACBnjp%2FBfjDKub%2FJBjqkAXOF3dZZN%2FGDERkQmT%2F88tnYjmaODriBkcmVjxvMysRHobDUePD6Q3Biy0qkaQj0LsG0IKwWIHC%2FF1%2BDpJcFlrKfwlY6X8CreH%2BCfHUtIIbaldpCFiJ72hJh%2BqKazoqCiAbEX%2F9wU5sj812Ty4IjtoHrd%2FJ%2FJGPQwOcvbGF0ohC3OWXttfxsmv7k1vnVDMjGN1BgjiyETtoKVH4Tg81wjk9%2B0g0Y&X-Amz-Signature=c1ef8d74fb152fb271c16fbe57fb474e95d8708e3a6a6a51d083e3dbdd6976af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

