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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP6RDQXG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCWzbDpvWyUIzWlaEoh6flYcz8P%2FOdnqRLPi%2BadP9WQRgIgTaOdUQ2vETzmU0tHqrwqLiqcuTgNLO6PP7RO8rJuIdcq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOYgtpi7EGXYNEruzCrcAwgNJlbfUBUzvLIkytyWuDhpG6%2FAu%2FqAaj%2FXD8jnsv1mzA91O07NavRJy3dB%2BO4QZCeDfnc%2FCrxZCxKwzF2EMG5uoH3YoFZJ64LML8EOQMlto3VGLi81wXlRQ5JyIMgXW6LQDgrQuiCBNTuSTW9yD4%2B0Ka%2FUEZQxFBZJU5qv1l7SyNyNXsVSwATQIDvXoeA31n3nvXWN9ySl0uYojq3eLbVMZ9ZY6XEPEfDJzk20noVugBfrvSj1F4ryWBtDee%2BY1Fa2Xlbip%2F238pBaNPwE%2BgvItvaPuzH1J%2BL%2FVNfHrFPfBKoe8eUF0mkLzPnjg%2FECvfhVkpg5VVTb7VpGdC2URx0j3Iqwr56z4ggXdZilLh6KKi%2BvD6XAduqBFeqyu82ib2NE6LUbnFchY1xc8%2BkvMTohEmHI8orpkpw5vSJcXMnFNlc1lgU5WJzURI9D90Dt2SfXdOO0cL%2Fs%2BST6tJEhGR1dUQIzuf%2BpKvsOgX5u2GCefAwP%2FJKoERJZGd%2FHUt%2FoA68E13gu5lhSBrXUI2lOIz9i%2Fex2Wk4OVVHOiZX%2BHywLZyq3degRCWJBanf84qRChHMB0SYujDMfbDygzFOdNVeZpDYSWZZQrReJXQGPmALPBp%2B43E5sUWHvMtlHMKamwckGOqUB86uiI86OzkRC3AVLrPmVZmukEsezafi9paccJPbhCio%2BlLv1EZUZqOPMSGWxFU0dohY%2BTGw96BQ0nMZ7tQWtNFvVsGTlNH9phhKb3waeOqHP3zlXPpcGeIVR3ivkwaCYxMnc7ArN9O%2B5y%2FUOeWSVAdMaFy6yJmhwHeHB%2FPqPjwzhlGzbbCjcwngY5WkHNDI%2BwqzbBBiMMVKjrzQbpJKcFDUk7jDs&X-Amz-Signature=fda9a99535fc3b8e22438bddc5082dbaa8769618acb8123b1b89503fab1bcdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

