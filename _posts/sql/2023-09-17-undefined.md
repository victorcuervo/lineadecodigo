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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAK7OFXT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDB1fTqWoNTDceUAAvGRh7ZLsH624RhT7Ubbh2i7oMkWgIhAKHtfod0DddZdzqiHzFrArsArsDOuWvmWWG0iO40ihBAKv8DCCwQABoMNjM3NDIzMTgzODA1Igwpmjg9uffo3z%2BJC8Uq3AOKfpXGixm3l%2F61qeEA%2B2jcZQ%2BMaBjlH527%2Bxlb%2BFHkm9AWdyd20rNhrx%2FuaZ7PSlEpCorrseDrX0B8tKfd1ou3gsSyAy4LLbj0rCPqPX7i93s9LDTN7nD5btpNYkzGrKHq%2BPoKOpZcbvmJ7ww2aN3tmKT2PGVaLuAO78UkdExRJJ3E2PQBvoJB3mUs%2BwuEBs6zZa2gh71jYU9tTXRzhRTlJgdTNIsEon2iCfJnclyVrhd%2BK8bZS9CG5yYftWfkX2MZr%2BlNO%2BEsfZOwXrm8%2F%2BSSjAw%2Be8dpxsJxG3y6vCF9vMAZqjx6joJ64E%2Fz5%2FrT%2FIKaxwdJq%2FZ63ePpccNTf5RB7t1rUZyZCClMPdxx0oB8Hg61Btqm0zqn%2FsIvJgqX21Vs7ljXViYtOFv6f7gbFVWbRRCNdtrE4o3O4KoTKDw6ibAyi9Hf%2FNMKHUSH6E7KpdLMPjjGVuttvdX5udBObNblpi5IvhSr14C4G4SbAiCHUiDcSBKLOi22OT184g6a4o9BAz7oIHV%2BKxAHdvhofx7v9vYSPda7h58ZclHgQkKW%2FeaPAO%2BWVCEuJlbW75oHEgzKwnwgMaF%2F%2FtcGLL5CTFuB0%2F5KOwMu60aqCRPikMf91tkAUBePfhNeGoc%2F%2FjDErsDJBjqkATub2N225uRyvn9F4K6ydaMaCvZdFCo2tHlUMFM19JfSJtDPijujoFHN%2B4m%2Bt1AwaanyPg1sLznIPPHCYTEUzY5Cc%2BgbKIM3Yjbz1x1D2U4wsMF%2FNQLe0q8GAifyZV7MTxXb%2BA93B%2FyIFIXEeaC41WX13Jah025gm3XiV15abrm0Joy88uGWB2e31aDZysHzrI866BHOAALkGqKaF2I%2FY1kUDdwM&X-Amz-Signature=2ec999d030b4c7ac652c79a6a36604c8b6f14425d412e86782149f4ea782c5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

