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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6OGKGK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF2co5QjmujoJf73wEXn6vTRr2s%2FCHDurs22J6W9YgDFAiEAnk6BqGDEPUdkqZg1Cj1hIS0OOppNrYmUf%2FPj08WeUTEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBUlHNbykRWGszf0pircAx2tisRllLv4T5uEzZ9fjgYJgduc8oFC08%2Fi19QCUlGV4bFPmKbHhhPMUj3QurV8BR8gWvqkMrDNKKKr0yvFi5MAnF3ekfHnft1Q9A1UVN7bJBfKP9no9ukpUtnHt6TBJWdVnaE7PsA3LnufS60MdqDaEgdlFaj2a8%2B4yc1R%2FYTVnRdQ%2Ba1Pg8lpEcQ5A7ePexw1q9dL%2F%2FVJkCSK5pgKl7QcuRToNU4VY7dNx0J6hClioTb0tQgnd95sJT%2Fc88W64o8k0tELz8BPkR116GxNKNCJrv8Xy5%2BmQa3JS4oA7wlI%2BRcjL5mjdUFng7W0OBtYCYmGPFEwfTGhwcvteMss6%2FYHL2bMPzws8XuqXSijHePnG7TQQsD1PpX2VmHFUvP6hythqH143%2BvYMXpRk1sECL3JIDBRYlOcEC3DqSLEpCWfZafUHLgfA4OcwO8Q3ZeRZK7UkMKvlR338Xcf%2FLajx4770LyL5pNmj8CZZaCPmlt8d9MrFL%2F7uBICBgsanFOj300z1oz1h29%2F5P1XYbuCC5HqFMUtmmc8fWTRj9IBh0P6bhVVwaO95gQcf9wBp7sPDKqswLbLw30D7JG36Gns8O0ryYLZqM%2FdTjM9xglze%2FYOF%2BC8NpqxAemqtpr4MOzpwMkGOqUB3pGz%2FzyWEhM4SBFx07H6exxO7HS7gzDV%2B2ddGxZ3kzJjnQpnUbiHqkbY38kfSKxHvktUGbyu1wYTOS%2FxzQjRdje3wh%2Bw6urr3oQXJJWcfK%2F2%2BYmRCZ%2Bu34NSYUs%2BNE5c0G%2BgSh%2Bz8dQ%2B%2Bk0uuD5DALA7suxi4GgVvLESC%2B25pR7OV9V%2FEnAcxyJyfelMfhO2V2ivcXVO1SADs18%2FJjBX1bYQbQ9Q&X-Amz-Signature=ad25c956ef466bfdd01dd9360b4841ae4c79c6675c77c06b8672ef63d5eab129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

