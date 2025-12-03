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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3M474TN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIF7vTCW29VUgtbabsmZalLMY4ziRan5c8JqQEgY2VTuCAiEA3M3PTtmacECwRpEsuYFgcxSUGp0Eh7Fso%2BqRceJKmO4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDISTKPhgWwh2ipoaUSrcA8TvpON2umOhRxvAu%2Fo3VvNm3B3Xc7CQcZiRLaAeOylVArEoSZ%2FX22fgbJ77Y65UksldNBCMAEainfQ8sR%2Bdw6l2gcbgLAGs6ZFsayYm9d8B4cQv0T%2B6AyD5rvTRPgmyNzNCl85b8PXXEMgRTtPBAcXtsYW%2BsZuvdKn8kFVYQPPi2OpOfsULLh4cK2qS%2FO%2FlGr%2FNFpzPC%2FwncSNivjvx2ZcR8S2ovJCNtBzPFGjJUZfZlpy2d%2BG%2FLGU7vdBY8wGwsxOWB0PMzpVBDI7Xde8TXt7z0tBeYU3JiiYKoQX%2Bnh23YI0Tli5onw%2Bi4QSNaYoaxIOEos8q0W8ggdkBrxIVZd%2BBhvf5DZg82yGHOn69YBllgldR1Onfe9ZUmc2Pm6Rf76xUO4LhLzdef0DEg1UuUQBFElarwAsUnV0MWhXHQ0hTJTXnJOEpFwpAThPEUSbt5ijAMl8E2tqMNDkiteq0E2VIJIsPTOnbGV21eNKNpjExpaEBRoM5yMss7CwHBHxIZ5acg%2FkzpdWIquTsH57imW9Z5OjEuCmMJwj%2Ff1ND4b%2F6GzbWGLsU6lgEyUiPkzWBICJYeFOcHDLcXPd%2FVeUS6gMGnIytzUR5Z98fuGTnfAidjgThl7GOkbaS1OaJMN7pwMkGOqUBFL83rM0KbKKcYUOZmx3vHBZCU%2F2GF1XRtkH6nF2iDQKULu594Db1pW0mWHQxgJVNKLP2m45Spehao2SPkMnx8GXg%2FMfhfXLU1SHDMmWFS20YYIhuYnkQxxYMEmd0j2tURt3sjOAsTGUqplZkyy5MQO2pFiwrxjLKoyN0ySbb6Aw6Ai6rQJ2Yup6JJNpa8UTg2xhGmoizIaLQnUTL7rNaOIfiLpr0&X-Amz-Signature=92cd9b100fffa0ae8fe1f3a78d7690c768fecc181a7313fba0cb51601f19b784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

