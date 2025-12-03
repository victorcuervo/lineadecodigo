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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5ZWJAK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH4c1g6A2Fco1tgOfnqhYUOF1HJQZ%2FWTdRFE4LYeJBqlAiEAhGdRXM64XbflR00eTlWuRYHtQULsBsG%2FJcC8JQF3zMgq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJnVJpzFaO87fY3TVyrcA0INbMCSN92Qz7k9jO4ubuxACqVzZGBNBsos%2FbRsE1enaVjGBVZ06UBK9rCRIymoEIAjYEV7mD0QiyCKzenpmiejI%2Bq3jY%2FExhyOmjUTY5WGFF3%2FwybBxb4G8z4bla8B7aXjae29UOe8rW8OacocpRYBRYh59QNF9Nddelq6qaac3q1JLX8lBnO8tqSHZPa9IyJMXtiqf%2BBozFaqbIDYMD1G6s%2B%2BCp8iGJjdfoAZvWWRCwiqgpAorDWUWIGv7yGVF5D3M0genR13Q1ufQV1grfNs6KnwgdETN3ecP5mrOnb5Z4VoeI%2BvrKyXD%2BAkWNKC2l933GytNLYnurtF4%2FTJ9FlX4ItI38x7Zf7zg4ngy9m0SYHwr6zoRlc2HieLsQ91IBlR8fmFLW%2B%2FTbnylf4RBhyK4xWBXLywka51ST9Anh1SS%2Fw3DBL9%2BB604%2FhzaGoafCk7IVMfbK9TrGRXZDEn8cesp1AEjcKv8jHe3EScRxY54BaRqJbtS3tCI9Lr7XpOk6b3bOIuGsTDJfVH62KxtJggEsH4Prk%2FwmN4%2F1SpQF3HbGWhMYkNk61I7%2FW2QjGfxz8l4ycnRKuEc%2B7v25a4M%2FXEG3fPdJpj6m%2FiEZG3RG8UZoLd5uDhfa8dIEKwMJCHwckGOqUBOLOvN2v%2BAH8BSnplKuGz8ovpOT%2BV1pskfzA5IRwr9I%2BWtnk%2Fo6JI8aUaiz7u7%2FG3T2slD91%2FHmMlR%2FBgja0qsdhV5RJq229CQs1cbEGGdwEJhdzzEC7XJkDDYhHovjd3DM%2BYJSMcyhwPiLy9rG3m7%2FDTgy%2BYzBpGjH9ncKDeWW3dNNbI%2BiCeOMiEsWc3NW7o%2FTtLoV24k%2BCjV%2FJEwEbF1%2FeTw7AG&X-Amz-Signature=f3a2259276a81a666272c02c50ba69ffb172e735373c0cf18e17b7261acb2cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

