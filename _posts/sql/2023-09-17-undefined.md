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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQML22R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGv4oRWaYrDHtkWvz8kwU807ISV8F%2BgpRyVdAoTe8gYiAiEAt3OmcJn0409N5vJDFTc1YTRY0ON%2BZluzfPS8RVWWb1Iq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN7kxqvA7zw4PmLqZCrcA7sZ%2BJMx818qLG2rYP5ByD4qHYpk0LnqSSUK7eGTnZ4IILzdP081pTMpvlFgQrGGxnQP7e4BHy8FCGKo1BqqtmZeHB4ICFK4PV9cG3r7jpz3ivW1iZBYKY90nkh6fNnd5qNOsY6FlQ0aXLt141N3NftHm%2Fk8G3JDX9q8OY%2Bd%2B8R%2BVjobLC3%2FG9OFzYruZWF16%2BTU4jaIMc1zuVefLKbgnVqZ30dOG8jgR%2FiA6vtNq2LEaG26YsD0nenUwnKIxNhToeHYELCCFbjzr6QIJ2q7iHkL3hOZLfBqcmE41CFGgf69KP582b7SEVC6F6GSsQ%2Br2GFsLp2As7ZzgN%2F9SxjlfL6oiTB3UxKOUUmXHWRP6M%2BJN4yh4DQyq%2BG9FQA5MhjdvDVKGI%2BzSHVzV%2BFSEcWiUTI9exHPtHIO0gi6J2BFBmXPINV2EgNIRbb7e9wYIfnaQ4i0aKRDHPOP4n4Z5Yjm5FsNQ3x7SNZnnH4LiUZwOklmuHq5v1ex%2FF7qdmR8Pt2G7DHF4KNilcxVsBJ23m0jL6UAne4csVvbm8PeUgut5hDLzzTVvNdwU%2BdjJvXuSI2rrTmHOcAWAhvWEjDenMnUI%2Bj1gspNQHosv3NEk63IKLCOceqYNu%2FM%2BVRLPWWsMKCWvskGOqUBn44G0J3glYfM%2FZQEWSOSNQDZDclb3Dl0lMhoT7ks%2FMm7mDG8KAsjsGTFWD2FXGQbXIELrdsbjUI731XycGCwCAcjnW4STxTyzhH13%2B53ZXcHiOVz0a5T9trJkwnjNCpay%2FDXn31uoCPWmqzNrsoYYzR%2FrJG9f3VSGq%2FF1W0qxLweb47CmYJHHgQ8G5Ft%2BrFB%2BKtrBuw9%2FbjBRrIRdqyeS4xMyBcp&X-Amz-Signature=582a8c0c8f2f8490cd949711c608934b2c15d54b7d6f0305975f6da34179e02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

