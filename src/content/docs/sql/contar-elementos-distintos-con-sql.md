---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466454ZW3Y2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCT0%2FifwKSSJhn6942wQypUIoOTc3nfq%2BvV%2BQDtIPR0VQIhAPGePYRuAVu4trsN0k9KdbpZVk7%2Fm%2Br9P5oX8gVpxcxBKv8DCDYQABoMNjM3NDIzMTgzODA1IgzpnRnmIozFmn3Oiusq3ANXWMxrptVyeIVKvk16dBN58B1%2BpnrT3UJrypTa9GMaYanVknSFcWerQN%2FU4K%2FbLfqTRY6kPgpQLgzOEWwCUvySM9tyIom2rKRkff%2B3UTkTPde9GwCytkCXq81e4LSSawk1cdQ4RzqFYRn10j%2BDH443%2Fhdofp9w5fpVFNDquFSquD35GL4ipmjpz4YBZ3ozufdrzSlKs2YDIX6sEzlGUU93VsnRs9qCgIWEN3QpVAE2%2BYj5coOuoOkKdTS5g4Jikwl1Ebwo49QeTAcqwkAlxWrO6tuPwSDBwxGeczDE6W4pZK6Z76sQUxtwj48crSxR67qm0oqdr8ApqcT%2BpzG1Ccuf4vsb8OPKJlhOdTPEFu%2Bjb5YthT5WPBhkuVOWhNizxYVlTDVAOA29qgoiXSKsgYrX574V8TCPQPLMgbMvCtFOjc6Wzxh1ZNKNR%2FLQc3AUSAA05TENEzMOiN7hojHDQjtR1WmuaE0OsKs5Sgo5OUl4EBDYThOb5CWTyTG0et0qXGlzaFJI901TH1wbiOq%2BOSYCGkJE8Ff780fkaxtBEqLi8HXprLRRwbIAMfz6SZcTdXDyHOK3nrNGSXmLVb53DkHr3wi79mCWo%2B12AAYXsLLVQyJx36b3glhIiZCaqjD4vcLJBjqkAZScDBLO49%2BLK%2BARwcWaIeRZdo8C4Rp33GO%2BPdJx4A8zFaKebO7FBav78sFXFpaoozit36YiRPwMYm9KzbpGvS5ZixG65qdsRSoeVBkw50MoAO6P6wahy6Q6ypgNHccpmeMVDYhIg4qImxxNeI76OvrpQ%2B8HQeTyzuYa67jZAXvWmwsYC%2BGi6D7lDE1ioigBuKnWPZ%2BI5kAsDu7PONBsGBAuQh16&X-Amz-Signature=b1d40d8a61f360618ffeea043b4c4139ec0b5078ec4942ed0188dae4f93ff0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

