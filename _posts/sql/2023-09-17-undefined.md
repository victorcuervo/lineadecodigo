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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363MOUXP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDszGpGLeQMNp%2F4m9dXJVANP2rfuoir8vv2Q%2BYuXRmjLgIgG8WD938kP7Bc0Jd4fb45QGzEemYJ5T%2Fdz9r6Wpt1jk0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHpFYIRicqWKr%2Fm%2B%2BSrcA4i62A2SXQmHBcWWDj%2BnvCR%2B7D9lX0ANiOdo9ZLFmzHDZfMSOYAlh%2Bz%2FKPOU0pYPExweBcfGoCkA%2Fm%2B41rXb6WrT5znbBsvel5xLLTBgLSCzwbhrd95X%2BlRs7rK7980Nx4ZuKstXzWmQd58zdIYP%2FPizHYdybgbcBLVTg%2BqTzKqNTThdnWC6GfxM2Qo0lIxFTXNj2Ci9sW0bvN9ObsJSDWa8MazefcfqKLrLO2S0Xz3S3%2FvqJw5PTvRB0omYHmCu1bl9iuqU%2Fo6cx5XGD4Bf9AlW6GDmffqKLbou%2FYAj0NtZRoQP52iziYEfIAwaTs78Iw%2FWqJDj2ai%2Bf%2FoDm2E9VmlyPhEOWqDEYl5LIqSsqX3xL9mTr1wCjJ%2FURDzLMHmv41xK8O%2BLO1IOvw97khKbJl0i22u74l9skEHxJG4OKW8M4Uk%2B7tqDLV35%2FvKa9BYtG%2F9Mvo02GJLgIFlThu4N5XGPgMR1UOE6aAJuvQiM5XdqYg2Od%2FLmEqJXa6UNfMgVb%2BA1yxoESqYd%2B6XkY9Z2XVEb0sgRuXk1Ha2BKNtapjOQCjRChA9vGkJotKTtZ729DlaV25Pcq0AoocmlSlxajuv%2BO%2Fz6ThY%2F%2Fphf5G5AgQRwZg2MQCwyOA1YTb7RMN6UvskGOqUB5uJ7kDSCA1iTySPRUVWdC8KA1ZiDI3lNtk4itSjqtUewYweaLmrEcqAWHhPRuexAZefVp0q0XQYxPYsb98DAN%2B5lM3Z3MLHiCN5WyA9fWv40JzeKuIuZ1Ov13IpkSfxCIlJzbsCQzUvOUiNPMi59NbhMVSkvhsqszYTrkywzSNJ2WkFcOy%2BAAFRoQvzEz9W5ZJYhoFvELN9rj6MKIOXnsIdyvbhV&X-Amz-Signature=c10440e13d23d6c6f03161b3f3c63e72d525323b94150ef0da0de6d4995a4642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

