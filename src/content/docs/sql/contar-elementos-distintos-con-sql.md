---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CFW4J3B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEdXfoXEe7%2FfIrNDy1c8MCmbQgGay1OPHKQOfSrro%2FECAiA2vj6KwvSYDUYPa0lRnMf8FB8GFJleRMeJHrJTw%2FJwaCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMgaXVS%2BvJvgVPYx0YKtwDNqBoIPRlU5oxxbE5b95ZrEyT1q4tyNMMb6stLNf9wIWEsgdkcIzCNxRegx%2FUUoDcxcLXLu%2FW1D8WzvmewRiIFEaNt4iyOBgrQPmvVKTSi%2ByAN2hfn6quBuHAi5Nf59H0bupWh7u%2FcYGPimHJu2Nwk9TiSNjXBgp0YuDOww%2Fp99vJi0iiq4d65GQFb3Iu4F9zjK2Pp1FHgr9S0%2FBkrKnwviK8J8wPzH5EI2gjzNJFQm%2BBcFCWfmywwg%2B2JN7M%2B%2F1gJERcDcbRI324dcnGgB5MgfB2XcKQPOFcgKUj8xe%2BW65VC1aE%2B3AKZetv7uErbJZciR4ZNoLRM2rampQioGvilIVO2TY9Hvkkpp3%2FIyFZi3T3%2BpJGSWu05a5oZeoRfyKmOK3%2BGmHlPUg3CgNyJEk9Ueizf6bFM2iYCE%2BVm5RZJWDZXaOPMTxStRGhLbie%2BaKOl3hSxunEsdyiwBW4g7I%2BFAdmcU4esKJKoQicopNyaoB5q0cmXsxvbUb6OWJ5InlxmWsqhhCTXXoYLFY%2BsxjU1uVuj%2BbuyzEt31SPpqka8PK8miGBIPvf3mCEFu5zSkg8fF4ElsxvdK6db5XNaSBzJBa5JgkULKmYCxnHj0Y8LEpJMBjxJpsnr%2F3vJOgwuMnFyQY6pgGzpGfkXyJfkOCcNZI6UKnovP1daB9u4EgWNrgQ3LDVl9QrJEPEe9rrsPnjNq5eGPlNcc1bUGYtssYyIRwqbtYRkC2SvpEWtjSymgg%2B4P5J9U9zHXa9n7kmFT3Qtr%2BUDVj9WWovTjG%2FsWE%2FXqPaVPTlslqyA58T3dkXaURhMPRebJMur63smnfj07jZNyxIkjMsq3HK3ERD%2F41%2BeQDm4pn2Mo%2FaFC09&X-Amz-Signature=eff4aa37c8d57761ba0266d91039bc103fb8e2c72cc493094dc4dac48e163c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

