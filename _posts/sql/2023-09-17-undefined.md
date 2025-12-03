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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7U6AMH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCvA2z7oqO3jy2vYaqXRtNWEkVwuLyUk%2FnDdYinwFlHAwIhAOMiUQP7sR5JotQBRK4jLNtkr9by7UQ9f4wpyanw43%2FnKv8DCDEQABoMNjM3NDIzMTgzODA1IgysBZlYXvBZEHnsPjQq3ANJ6UiAgYWt9GR51ZHNFkTJqHkxjZlb5HTFcBWwSFXa2mR4gpI7ycRQdrDnguKf4VRYzsN%2FbRmG04kwSSoh8o13pBqj%2BbP4F%2BE3aVv%2BqlmOWxipzy2Ouzaj7mtRJXDZ%2FGM%2B7TsNa7T9WrRhfF6fRcckup4Vl26kx1Mz4iGa1%2FfSIDFL%2BXzUXD%2B0HE7u7dFMc22TcbbC8zQWRxWWOivjakiZuYg0Yc84AGao9VHhLcWJu3vBSvCziWZh20O%2FQDVo%2FKYUBL8imn%2B6igYcdtScU8KyWjKoBd2kzpZSit9SV%2FZJ0J2mhMvvgPH2Nn9%2F4kFOFZhawKCSL3hjB9nw2oXoaI%2ByNcUjyAkYgPBMFnSkPDS5nSprHsvFHkRbU8ZbabVJhsa4sL4jL1SLJz%2FjbH2Jc91nDaobpdpOAR8KUdWcPVLcCdgbNchkRBqCOlu7DdDn2S6jesNK9qVrf3Wv5HKJ09v3cxNyI%2BxU24pxw10qT6Ii8Ns7T2UnCzwN84iRuWRl5J2LaQDauobdEJNBNuMOFFKcvzQDz5%2FR%2BVd338%2BJ7EbKHfv%2F79bWg%2F2xTYi3vWVE4L5O1QOkQio66H5YC9aqbB38DSIUKep%2Fcdou5ZGESXkhOCa4TtDyLp7lDnubEjDqwMHJBjqkAVdDkF1uGz12AVmdjh4CfuHKh17I%2F94EPOLBuyug7HkWYUyqBLRQn1jXwFHRej6GExnf7BFiBcQ6OUleRgE52w4ZXs1sqNF9SCCfcyneFxOGagq3AD1o3YCo57U8fXn5MgL5Lp07cXh%2BpuWGDtlFKKWaydPhwZA%2BJiVViVodAMybBMFUWbdsLFmPk3qkNe%2FBdcKrCyi2mWAOgmWDwtDw7cc3OF6i&X-Amz-Signature=d55f0709ac31dcb41e8a1ec91344a62a8cce6de0705de097480b37d16720e4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

