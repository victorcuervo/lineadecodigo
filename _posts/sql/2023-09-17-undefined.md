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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCXFDMR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDRkE9msDtGJo9h9R%2FiPnpqMKWAzG2Tkl0UGDK1x054LgIhALU8yMk2qiHrcNGfvCfQarNEYxUXHbCMxHuZPsnOcfxMKv8DCC4QABoMNjM3NDIzMTgzODA1IgxgN0QquxECF5liATwq3AP9SuI55J9l2Gl7CnWCHOYAXTNL5yYvJrUoYszorOaH0dvIF2QW%2F1mqPohdsBZCiu1mNuqx8zPSJbqHRxeymVbcq4ARKKotH41VUjc2sTES0F7gX8Pj0frO5fDCGzxYugi8nmeDo6M%2B8wfbwg2MC6zO2bynIzBXbXUS%2FzqZWhkdW7VSDD%2FLoNCt2am24qp%2BjDfAW8lZKqlXRkKKhEuKfjDwaHSs6T%2BmpZhrk5pjemS0NiI%2FE0q%2FoSc%2BAg7Uv7e5JKGzUV0i1oJiWyv%2B%2FaneulWXcO9pMs1fcd7kvjLEoMiMg9J9o2YFgC0XWEwhuY9LUsemhDAcPvW%2BoSYN%2F3Dai5wIdF8KMho%2Bg%2FzP1GagVFyUV2zWKcJTGJNxMwyCLsUOHLSxqwjtoZfabp9advcPPVJiBWpXb2RYtLboxB6z4mB7IuY6H%2Br5MG1472lWzJStFNG10EO5jIsHLL9apK2UCUmUIJ0hIpUU1SBaY%2BSfAJPJdVKhHzIn3ralPBWbB1updBOzUz6hmIkzy3iwBfg%2FPbmhjMnRVcOyK385YK27zCZlLBCoJlaTSTZs3lM4Vpp2bkKgD3iwi%2B9bx8DAhGDGOR2MuZSdHQ8Ez%2FpoYkdinPMi6BWEdV90Uu4OsFN4DjCN6sDJBjqkAcjsXIHVECh98lrZVNa0fgzE2fxCYZ9MMGZDTSw6vqLNRKpsPvZK1ZYpdtXCqY2wxlkYiRRB%2BBS3BLXr20tbDcyELrGvbkBI7fj8saxHJuG9BLRonWg8vUC7CFkj7S5ZdQfyUsKQ%2Bo9ibUi2fle0RC2WVI4rsG1QV32Lv6%2BVuCh3NCCUOQ3MgzJNgOA27iyqBkQXWuDIX978bgPJM9Qumi5%2F8evO&X-Amz-Signature=09ec3125761502285d242585a437a8bd3b2742ae64620ef781459bc38318aa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

