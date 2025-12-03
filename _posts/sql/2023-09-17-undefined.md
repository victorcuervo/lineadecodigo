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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETO3AEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCfu0RoDpvjYHE5TJQNfGFwX09DRqhrn6ldmk1ZgPsN8QIhAJmVzymrsKWJtscpM%2B8POSZeUrezHsUAIr6Ghx11W7h1Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzudEv%2FQ69fIdn%2BYj4q3AMu7WsjeRBqUK9iv2p8OpOMXIP%2BZoNNrN2TZN99v6u6CtkBn2xPeGQW4wAFMKG1%2BJvmIOkLMmaCcgWkZR8NonsfG36pbN0EU3uPd0uSvgN4ED1k3m%2BaFUtgJjD8QzoR1qnd5xXRvog%2FpK9Txrz8ICT1QbnyWxKgt0uelLgkaJ1TizelTej6o4F3eqvTwb4bOEZpAD6cRlRVDCcRrKdwM8%2BUehF2Pl7ebVFXtlEfxhspW8C3ar0qpXhE3K5JUqu1LPnLSYOGlvUWfRfrYCEjrdlHOtttBUH77KwrzihTkf8R%2BhVHIC0JqnZCOnGafJ4aU4d0hxpcBnjPnFQvx8uysk%2FHFakMLhSy58Zr0zIkyhtzvrN2dTFIB3oBce5JENpW3IVbARFTK9qls4y2G0J1znfFlGaJhGqdR4vBlKuNdjZNuRXQDb7vOtLsOTpn8f7hakBhMl0%2BDLWTadCRZU%2B0srBa98AJrnd4y6TjbdHjU80GrERnsGxZUirAAn5u1Ku3assN%2FJweRLe0svn%2BAsOHhH5BNDs6q0fDNzokzOMEcZbxM0oBDcWYWjA0TsF2u9WF9UfeuLCGdNqFIjJq4tZ%2FfFC%2FawI1idCS%2BE5YDUTCgBk%2FioZSy51aJI7DsQWb7DDUlL7JBjqkAc9FG2WumUVkLL8bsE7QTwWxqAgOwcwoj%2F4XJSnX5qU4Pcaw%2FYfHuHmuOF%2FgzVDHNBIM%2BeL%2Bl8EYSkFBawrSsf8cgbJq%2FR6TmZ7Q7NZsOmMrbtpXQ8d4%2BM6DGv9gUlMvH0traDRrvNTb3%2FrSmBHkwNZOGiZmtxLkU0h9bX%2BdREnrgI%2FBrvzJHp0QoIf%2B3ux55sa%2F4l3r9P5MEeIuyIkSkXqr%2F7Gn&X-Amz-Signature=79126898fe12373d6298183ed0fc7023d5b525b2f11261c3e0cd26c1d538e93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

