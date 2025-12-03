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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIBTDQQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGYpkKNSrtdVk8QXDnuOucmdgO9rUD40sIhKbGE9MHzkAiAv00hHA8HU%2F2UDnbvP9N2Vb%2F7sEGaDSi5rjVHLkVpmqir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMFR4%2FwqwsT0LagXmXKtwDSePTDtB0d7ldWGFo%2ByEho36hylB1CWQx9aGxSt4UelYKG4RtR2z2PvYflrifn3dDpyRoWApNU0Ad68TAPw0fVufpa7j0jrtwJtBHywhEAn53oz%2FhSEciQ1gVygWbgN9pqWpHxTHsReFwwqmsfyRDP0u0Ibvq4ybr3N8RT%2BTI6%2FehP2tFGM89K9%2F24nHXIbQD1FzViSDiDt4tic0XBJ39Y%2FzcAgXfKVubt9Ssnm71Ue0K%2FldNkwRdVbql%2BCoBE4hZfkRUn1H%2Fu%2F3ZJk0hzCW2Hw4q2hZ%2F%2F2reCWwAh%2FX6onFQW8Qimq39AtEcA6Mvj8rJAmMntsGiRJSvM7r0wKtx8o3Y%2FHOlV0j6kXbxvKfk1qXdBf5fsr5uE1MZ%2Bk7JvwVPRAcgPq7e0AqlECpZ6NAwP9UA0z%2BwW5WAurV%2BmDSiTzkyxcsh28h1B2feNQOdQyYGIzT%2BsqBD%2FmGTiJLx26FSySD5T94hNmNpsxYZxrFb2IDnOqzEjCf0jlOOAinQ8AyUwJYJ2RX7Pul1UtDnfPc8Gh06kj%2BKIzUWzTqRdvdcqj5xpRKqvS8%2Bm%2FZw%2FGbltIHFu6hm%2B2LEm0byt0xJB6BrlbsFosmJgWLOILAHHSHW7uIL2DX%2BoTdAOEQM5wwwg8HByQY6pgGmsAfcieuFeOqWLx1YL59nzuuXEV5uPtDF78Mp3Gn5qy9sea6dSisf5M4BKn8%2F0zw5Wgs4r4OmxOmDftEp95m1EAWoceJ%2FqNJIRVX7QMTtO%2BfZ32%2BHg%2F1jFcp4wE54Xg1qwSuMKmUbv1vhP%2FJrktm5CdMgSF1kxqmFWHq8vzAlYIdfsBI61R2U7WxFvvOnfCcIAwg4Ia%2FGaK60LCi9CwZBedvqLJO7&X-Amz-Signature=d6d479c71240aafae4e0419f1351867587a91aaa39aa5f1d756c520f04281254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

