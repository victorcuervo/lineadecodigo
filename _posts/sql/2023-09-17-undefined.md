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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZYZB63U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIF%2Bx%2FrOG2%2Fi8vKyyPKlsFHIfVsyN3EyO2YVbqJ%2BMr2cIAiEAvM2woUo5iPbJv4ZiV43rBKCVGW%2BsqGXtsLtXYnWGBWUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAZIjMOU%2Fs3t20RhGyrcA5c3zECxrDzz1u7SogBOoCZxKbTAhcGNoZ10eKQKQLzk%2FSKhgqjgHtkBC9Zvh74eZO1JvINH%2FlNeAwChxAA4vnzaBPaZ%2BOuIWy2KIXEG8077z4GltH5u%2FY5ukmJoyWrdHxoOQAJ0m3uQ3BSrNg3azt%2BfrZXY4QWmcXZL%2BR3FFKJ1MmRoBYsz48Jo%2BkXDku6guTQTRoQDJ9r6%2F41qbiR2H5NdcLRubcDF8dDmeqzW%2B7IdxYP40uBmFtPdqUGcDzY1lFZ6iDqBGZMpL45JXTf7WjPODkjfQdEmwTszy2J%2FgOP3%2B3WCBmUONePNgIIpDFQ%2BstjRDOQ0A4DedCplU7fXQbt5KLfyjToyOghz5W9fWMttQkX8UrSi%2F2MrWBJ3YapQtgDr%2FHiByiojXpuzp0fttElmVJ7KNAToSyoofEiVMxKmwClv3Xucoia1SWNXRKIaiNNO3Dco4v3eFNjqc8Dp6dKDHavvQziC3exaW8eTOW4PNXtcSrpVEVYsBjGytGrJcYnR1oo8D7wqi%2By6z9UjKnutlzh%2Fu9LuG5IBjLxAL6Plri6o6bozLzzKPgnSngM7lfQo1h5xmxvXcyya7lDhRNocH0Oj5p2STBIqDsGxTxO87DSUjVuYR5iFVUctMK%2FMwMkGOqUBB6raF6k5rujB1osp48AEEkJowe8l021MXEOeIeTSYN9EFCqXwE0V%2FLWzX0V4vGgH9Ob3n8FSkubVHF3GQ1A0rboLO%2FW2Wp0I1MaKY8LsF8rpiol1yLaIUYlm%2Bn0F3XVzJQTw6E3HDA%2FRRJ6fEc6Gkheb5mGcR9odG0pFucR5EbfNxrOgBTGfQ%2B%2Fm2VR1dPGMmODFrk0TxXJ%2BrXtYWYCk4F1bo6Yt&X-Amz-Signature=4b712bdd0eb8339524590ccbed08ccf0926b89e5eac119324a3fb935e5d5358a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

