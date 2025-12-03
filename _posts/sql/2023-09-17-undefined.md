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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQW6BRH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDdwAJOJlIaj7HkRgNgzPlQIF%2Boht6KMTtEQ67b0sC2lgIgMfx6QqDoafq1SvmnL1ilFgkJFArO35kTz6IReTZ4fGQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDHAguaVe3nMj%2BEwuaircAwlbw1HCEZTu21%2B%2BIDzNNPpMT4ACxXllJoWWvI84A%2FLTudDQe8XY0jwmxE%2FRmPvn5yjTfmeEvzDIETycCuNGui6f4o8IP2w2xG1euqe4YqdBhUyAq6FeBOF8YUrtPtbV%2Fq5eujRl8CMKiN%2Fj8wgkmOi%2BtZMmdtBz8xV%2F3do0bkAe3TYi25aY92k6ersnfeewcKWewgd4%2Bxtv88qTGaouQrV7AyH5mcaa7lUNR%2BxePLX7an%2BVJ7q22F1K%2BiEv5R7nEU%2BvBGB7OgdndNyWTaJ14FMvZYIEotjPZFRDMBcbdeiRIocOl98LYheN9elEpRkOlviDZTNv9Vd8x63fLMS8kQVazjrEGi82UklJQEAlkE2BzFiSseacjn4CX8hmXHrzshp7e44cQ6X3ug7i4ENZaFILKDM%2Fbl%2BgJxK7JzksCaRsFA%2Bo20fnndQMMotVMg%2BbHDzx1axY7LBbmPTO8lzxOXFv52HaA4qRt4JJ%2Fo6yOOZEpAlrFVxpjXcM6uEsKuWscPzjKlP7LZnKNI7El6Tz90BXlHESWCsfMyDe07qrEurvwAFxwe5n68J1Nh19tLwZXdBXkh%2BPKqgsECr8wK33kIlz9BxfZZU80P%2F1UdbB7qqsa5E%2BU3qt58u%2FuTJ3MNimwckGOqUBg3taqycdfgGfP3MkOp8t2V7RSEj75h7%2BBZ53Kt3miFplgjXIXYScGQBr0oUBT8aNpc41JX5clX7d70HHnTENmHavYud62LsN5ao3UBDX0i09XD4O6VrR9rioVDVzUGW4CvOO30YJVdiavN4fq3h1QUMgBY%2F6SQ474JubHTYt%2BwjidlZ3eR8%2B2YEDYXITa0jjzlhTdP01NSchhT2BcOoTKhrIh%2FLi&X-Amz-Signature=deda23460e5536d500030f343344f84fe81d08938ec299e5687c4c75411b291d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

