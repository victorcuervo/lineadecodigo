---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NX7BGM3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDov13sbnBVINg%2FvJd7v0w6BGOxqEqQayAlIvn7DLXyGwIhAI845mxbFM%2FG4L9XS3dtDB3BkLsNJEa%2BhWdWYb9e7vY%2FKv8DCDsQABoMNjM3NDIzMTgzODA1Igyx%2BUVjy2OAEupfZOcq3AOarTckZN8u0qpzGe%2FBm%2FQD5r2ee9IpWNVVa1xBnld5Ze8%2FMVVk%2FeMksy2yMKXss6DOk2Sb41thaFsyPu%2BilrR%2BGebp8PmA60TYWCeB2c8pKwblQ9qhUB13rNLvqYxzSRdUEvY8hbZEJXw07qkHDixCbpVcevM%2FufYW1VrWSMjPF2lek%2Bgj4npDkjrg%2FV7qDQkzanhW6N4xjUTjVUHP%2BZ%2FWRtJH3X9G1zAisFqEM5vmiAzAHu6VCFtVEbju0vfDhlO76oDHoIKOMo9etqPjBOtdxBWtGmkwjL2H664a%2B1PCp4Orp6KNuB%2BELMF7NmV%2FLoUebPkMkwNb6eAVJBjs6ndndPX3UPpvWf4fhlOwh5EHJ7TIUQ6JS3V7Qo5cEzvkmYhI4RvUfwufLt%2FOp1FZDC0tt%2BdHaXU%2FS0aGqKkAKDTT7pKU5m0l%2F7eNjMvDh9K5lK0aDrQlqxyv9Tzn903EkZXdCGKwmumd2TWcHiw3v3bxckUztxYzqatc345Qqzfel5SNZspKe889hj6DzFq1w8lGtff8TWxOfs8oFdGLQtWJ3Pvb80sHqCGLxOL5yda%2F%2B1%2FNsqLAH22bsXYYwePTGOdbOmSDBS3K00dj0GHU%2FmAYDhPXDrnRKj8uRVMEYzCs1MPJBjqkARG2%2FU8sP8T7Bl2MGXhqhWRgWPJJT4KECGIOiQNozUivT7LYgxMn0oi5yU7MFy7vOB3L5jND8YKb13ym1bSVWmF665lstWY0J8CjlJmRfTxVWto9Vgb79xlzArMvUsTPDlsdFwjpjgAYY5QZqQERe5p4lR%2BNV794Fz6Jv4E7BCqqCnJVim%2FIkGXG7oMunIN201uz25EXR1P1cGdD71%2FMszrcOh8t&X-Amz-Signature=cc8f7d4f8acf8f561922074e834f37162f330236547e8585e736b5b6f8e5e26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

