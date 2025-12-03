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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC3FW67X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIECCoOWl%2BwJxXB4nCmOPnd5tkv09KHy%2B8f3y7NMBNC5jAiEAyyst%2FXRdWVCc6mS0uyG2XCbAdlnGoknK%2BpR0gWbgvHUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIx1Tqf09kUJ43ml4SrcA%2BrAaz7F%2FOfL93UtaCcEs4Rr6cTZAGFavhnF3D5OdwWiZ1tlO3r8QWj13KxQ632RnipfUMxOPbLaS77LPA4kEFaW7HPYI%2FIxeOhVpMXOou1KCAh32NIUGsla2BYYn%2FPxufmFHmjnRYRTfefl3uv7dU6rVM5qxfI%2FhNjSy0AIqNE4c%2B5a%2FWx54LQHgcMwi9GS0GlQ6qdxzKWwMMXWt1EvfKeoJI1krdM590C3weDh6Sn9kWr37RpQ5E1skD93jDP92cD%2F8YPq4w1IZZ4LuDqUHtPfO%2Ba1Q5I9TYyRuRiXVtw3bU%2Bd9TvFMdAyoyj%2BIAmvJeZBfDmO%2F%2BKqENfFUauoX9dsgT%2FPXigyF7FCCLdrSvNSD3fdBEEdhduerz4mZhwlufVYqnEhUvJ8GIqTTyYQfbnXX%2BV8SkKOPKMMkP39rnf2lYHblUGuwZJAEAf5qCTdCpV4PFHFugFWTiDNahcs49ZMHS9hH5SMA7Qs21pLHa6Dwx5uUWufQheHYYOSbCuQcCx5e1bmC%2BjHrkgXsA5lDtV5i8o8GEr%2BzSBhFMCvvT01yhYhkdQ2kcjv5jXd0gwrG0VJpZ9QlePeiBv8lnmCBtjPkPWxQJOwHwsTKcXHRlbKs%2BEwYTsqZ%2BYcJ%2FE%2BMPvVv8kGOqUBWm1d8OV94OiypeCaWNt4VWn9B9oByP6KA9rdcHtelFNB3TlVKeESfmVbdJLfwTVAeGc3NrlMoE0754yVBgI%2FA3PBnh59xVtQwR9vYBDvyPPqs56makeD3TUR8iZmsoE1Vw9ETqHKwApbZsXRV7AMh3U8A6SWm%2FexrWQM3OtCzjt%2FPQ4%2FuhaA0zAVM8ENmYdetxDRkXrSkBa3FqVZCMLnliOI%2FYjO&X-Amz-Signature=3107627e075cd4690de39a43cfc009062da77f631d9a6f307f81e5a2482ecdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

