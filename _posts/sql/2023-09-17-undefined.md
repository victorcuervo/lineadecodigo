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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN22KL2H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCOirJZ0j21WBO%2FvOZuAn8NYz%2FHl18vjxy6Am47Zwjt%2FAIgDgqpFSGGYIU5DPRYTOgVSJy33Y0s2mqtqgJhODXVG9Qq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDMcTN9i%2BUqwRlunA5CrcA5l4Lc8CqNlTgAXT1c2QKybsasNLI%2FT8rDf%2BHjGAKGebw5Lpfkew3%2Bu1xrMGbpY4stXy0BXqovtxUPRq%2FCWJRBxE0oYTTd%2FlpoSiEgpRS3whiJPcO6v8CNYuSaTW8XLxNMhs2ctvwZFEy%2FbygYMq7bsx9tAMMIqlCy7HDhiAPRFGr3f3RpiKo2Wo4FHJxQDRNJPIRhkmARCW2lkw6nQ1HzXE%2FR8NmzcJjEim5sSMxh1CZgXYZf3JLMjsdSr6CSY4Cd4ewchKH6QVW%2FG%2B0e1aTVhheWZJ1IbmbRHpM175Z4%2BDX9gy5isNbbGegOH85KTqdq2TcBZ37e5bWDUiR2tYnXjRmA9H6ceet1maY0wN3Ngfvt%2BhlFX4Auzyhmr%2BqhYLvcua4aFIMAr4rJyci9M%2FEJPRO6iZ9WLFtgUOQqZ9v59%2Fd3JGFcQ8C%2B%2FW%2FzvzghY8jfDwMTVJHt9eposDgwPH6lvJ%2FZInTwbH1VLiMKYBPfjDmD%2Fn7ffMs7h%2F3%2FDUjEf%2Fb4%2FQa41rexonIssOMJy3EjtJUkdwpDOO7Dmi5SXEGi9bDWGLCR52P9usBWqMtd5YGN2pkVPr7WsHG8qJ9ObB4rcMAVI8frocjNdjXvntWNgQwD3TxVWJox%2F0o0gTMIjqwMkGOqUBqkdTwdikwiI6InmNbDtY6CmKZrRQi%2FLG5Kkh6pzJQdFj1A0LFITsjEvyf3kOqvg%2BDcZ9lVwSwlkaoD7SErOJt6SqAjJVEVL6Zxec2x4sy3TrpWPjJ5dBJlwongVFyV1rqXQ3z4UWZPIgiY5P2FRcHKmnXLQTvt2U73ULk%2FUJQa%2BFbZ2KkY0LHpIpEK142N36%2BKu1G9KslAuP%2Ba7i7gVD8p7%2F%2FA20&X-Amz-Signature=d6a62a9abfe986982c4472fda4208466ebceaccc61f97be697e71e2b9f099dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

