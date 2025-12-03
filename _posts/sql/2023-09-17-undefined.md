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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KJY27L7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCBzsT6EcCdsgRxenBaJspbKkzgmmm%2BqjQI11%2F5%2Fueh6QIgeg%2FIY0nCbbMymp1sQucSLHAjjwPSffJYFBiBJOguLyAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEw%2BFO13kVLzs%2B4RQCrcA3ZOfdGXX4YHM5gLC9bVpw8BJWPcMllxVCqrDNYLsAWdKjuI%2BBZDMufFOksPz6YvbniJuYgqDT2lxhaGXOmgOO3mnmeZhhQ38pzddwb8H05mN2xvIzIti9mFboboNb2AmPGTqs5R6weTH1ufK8UQV8FqocBWZDTO6Rsso6Uyg5yq1GtTjZkXeVUdHJ%2FgBx3pQs06ii0wXr5LWtak6upr4VqZqDa%2FIUmdVe5fsrQVLOzGuCyyvkyKWDKLJipGFhJcqxz2eNpf3bXMdGUyxh0CUT1uMdViEXhpLYsnSoD0fEpJedeLtCQgnF3Tu1SYQYQfxxEpYPYwSL9X06ELBZSn2XWCN3SG2tEoldjBdl9bYkWp2nVTcJlZUaxH2eDlKi5TyhMuvbO1NIaHjjSh5KUeveYAFgyW5fgZSjwiIjHektUYc5HmFgjOMfdk0wEqMkmMeaSaXpN8dyP3NEikg6vOANGB0XRRDwKOfdVr5jYnAKahBG3Z%2BKUfDCDQ%2FhE7wVd75%2FX6TncA3og0ElEExItylSJDSm3FrT4a7kYkPhiYRb7CJD7ulb4%2FsKj0ZZoIO3%2FD57QH7UNB6OWKoVqhSG4RbNTD9pNWtp6pe8ulQEy4R9H1pwmFYYjigkjLdRNGMJ6uwMkGOqUBWZk02OGD1k5jn7zODIJW7DJeOPV%2BJMu4BuVjR3ywK61Vfub6KlHjOQBoIZxvrOHokJoWhONDIvcgBwmsWh2Cy3KRcTl6McOsp5w%2FsV6Z0Vu7UpmHDU4Bu%2Ft7skHhcWydjCZs5fsU1ZdVmw0ygOeLxumGF6TH4BirIqOZjvYbdphJTEgJdrbUE3lcXeCdvO4T6noB87Cb4pLpALtVJ4P7e6V%2Bxkq9&X-Amz-Signature=b36e2c0877f8d01fb9aec60041b8a9539054da47341a2d2fe80cc7f296ccc5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

