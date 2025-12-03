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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7YQRC3I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCbk6RJ%2BPS5Qs2xjj%2BUlB8hpP4ZoTrCc6Y%2F3UPJ5CNH1wIhAIS7Db2iNBjAN0XZPkOZzdoBqQxWJAZ%2FoK8SJB6wPFwSKv8DCCwQABoMNjM3NDIzMTgzODA1IgxOS41JsjjpfYer2Psq3AP7GPWVxteNFeXE%2BQX43HOu0V7PCrGDyBXuynGDhSA06nV%2FU2EMB%2BuwxZlxjpwHmjFQ7D2H6lZ0EBohaqEjQP5qPu9lHaVCv2S432Q1s%2FV9OTC06m9V2pLtu%2FhP7ZAYOaGOQkqrXePp7I9%2Br1W1ckjdYSuFJvpkjtXzt%2BeeKSyqjJ2wApVsaHAZi8%2BeoqJ7xTVRhUWdWJUZf2e6j9u4QaMVzExYMvva3VYwWUpyCOEgLx5vMcZK3ljvA9o0m7eg6at9XXzzINUX%2BOeJ73QZe8y0hwyh3XMTPARgAbfY4pXXmZSa%2BEl572gJq9mHN4KyObVOhubTwrHYp13BzRCkV17KNqitnuNswQz5lE08hkdTEfgvsITuhCIkMAZCEczCcLQpFlUgTXjefCAUNlS%2BAhLvGSI6Nqz%2FwwfB9lcjOfZCJjlvsG0fcmGN5ctYtSOgBKZhKO0OrryAfXzKRoOl%2B%2FiL7b4mxo68N8bfEWjEK9jrmI8cxQ%2B%2FJPmouOCH7cjVlZpmA06wgEjOMmhbd8qMZR8pugFfan4VchaMywMN4VrO7DTi8Rb4ZF6Z4WLH8nBgs5Q1%2BLXDksA%2FBl0uWX%2FOc8rXbgsFF2tmQI4gDi48JcQEbGk32Ar0PEHCo09WCDCUrsDJBjqkAeMm4yC2qQCXt2FyAfKnA8KhlOXwrUwE%2B9X17CTCbHB9MQVlOX1ulAbCaV7XtJbp2a473deayMDqJCezh13K4kNn5IYq6mPADuok8S%2B2soUhcOp16TeaQJjjhaIJQPh4zalCsn9tSjEl21vNpJ9bR%2FD7eQsV4I2JNXi2kfOJjVCCgYrSdVS0%2BgX0W5iN0ClxS%2BQ7FN7i3yKurhtdKMvb4WiAE8Jk&X-Amz-Signature=9f8533b0de0e67f0596885c0b8e210d5a976716f4a1f02b93b32c4df47c98eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

