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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR6B6V2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDu4Q4obGg5PIW6ZBV9rmKiEfxx394q1s5Cgp0PUxXLRgIgOcVarA4GoVw7sLrJZ6cTg40kblfKtK8x5znoRYqg2hMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDNLgk2EQv5Rx7sD1hircA78c3CQp1hhCPow0klipTkazGvkyBf9RwEwwVm5gqzdwg7QzfHOgGLpO5Q5FmLkCmovbsREszpHpkzVDDwaKHj%2BKr4YuF9IpQeldDbMm0Egzh5eGebZf2S6B7UzKtUJkMgTuQsW8XFzi1NZnz13Bww00bO46BY7aS5wmoX6Mz6vfCoZFxqQ3%2FhJgRHFE7ZrHOO8EwHZjQAg2dTzYDj5b4wSZlVQL6myBLL3Voqjia%2B8QcBkcncXEqwcmRJP5nu3Rr2tQQ%2F6r59lWPgL4QRkWGUqjXEmxeCxYmgc8JqLdyxAd5xonoNt96D%2FrCPyOBwP30jBIfXpll0Sj9Z1qo5%2BAnFiHxChQYCCe8%2B7klWABG8zjlpvvyqD%2BU1cMf%2B2pfGKDjqtuDbOSTThNVpz%2Br33SNG%2Bc53SZYf%2BreR9XtKiv2DEavg09cmI%2BoyKVVp3%2BstK369EXLgUYsWIE5v00ahgj3OsfVCYvyVMNqSk0%2BXvy%2FJvkpyLCMzAEWn5cNxadSgZQSws3bx4k%2F6p5swyXKZqDTPJkdJPToXCcqyTzVDovOCOyOpzQjpyMuB99l%2FgOLC4EJzNwz1rewggf5ZG1fVZua14Cud48Oz77Upb0QxvtO2uoLAq%2F8%2BR%2BWPxEA4s%2BMLO5v8kGOqUBqPrp4C%2FHkS5pxcuLy7cMssHWo13EpM%2FcYFTMaJ2EHaP9v0xj1kujfTyK8C4%2FIBCBwo3H4EtkigZLK95B9Ty7lthz8n%2Bo%2FHjdNRrGQfQ65RrzFm13%2BMWi4JZevGGOFMf58bgNVxwiXt%2Fca6Rkl0kg4ytRMLXMF49E1isVwOX3LPBYTU30ss9yZ6tzSBrjBGeMXPnpTjP7y2eOsBUZohPte8ZmYVFP&X-Amz-Signature=8fb6b6b7b6ccbf6cd48d673c43796023a3e8e0049a5488404ad95c2b9401c2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

