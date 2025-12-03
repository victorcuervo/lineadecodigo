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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4E576D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEQnke6GXJTHLGbvn1NDq9FBSHFaeb7Mxhiwlk3n5ScIAiEAh8wmp7S09NX9Er9RS6lWB1epweb%2BDrkwl4899reiX%2BEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFOcZY9O2XbaxGWfsSrcAwKLO6ZuH%2FfNynNmBSsBIuxaFk8uUvYHHoOJ9v9dKMkqhBWZ%2BcOGjUNBZVbeM0ydZaA8Jp3FKF%2FLKulObDSswWYMzp7IOJV8D8FgNA%2B84bRRWMl%2B9%2BlwCERoR0KPi%2FEblswJs5gqUJlJxh%2FkVp1UC8t%2Beq389MsgGkJQ9pB9tG33iYXjqIE%2BQ5DBHGz6KYgfl1vmjKTrGhZpTi7mVN2gLIery1CvzzCTqRd7tcj1KM3IqYXUmlI12mLm854pawmmOcX7imceuLhZm2jwhOZviGQ7q%2FkUZoSEvr2po8ZV2s1tfclRyxiu2ESbm3rsf%2BLxgFqwaiETBG4EMICs85VEH%2BOqA2ywlfu%2FAYsLbTFcuO9vBU1wAV0IfYQFVnt%2Bg%2BtiJK4z6neIar3WsGBJ00WmMl9C8qw9tkmyo92SGUOVqS5LAML9EZneKNJ%2BqPnGy9iRJFKoMtE5Yf0LGpPEtBPEjtoM6h7h47NDNcJtlXuMjE0RRE12N2e1IRr1ln9PPHM55TXbbTEaq%2Busr2tQ2Vqw0yLrN8S2o9QHG4DpZacwlsylvFpJX20mVZu6nSTzGGYeuCkW2FoAULNRv6%2FQ8gnlBRvvfKy3bOlePcP5nex6agYc032P3UWQOWNts0FvMO3Vv8kGOqUBC2H%2FnLMdoznA5OkzP6%2FK1qzJS1QNccdr8BjXilhrQmnTk8AxrnxxZSDW9%2BvALmlW%2BAlVPNBiYx4zKSAs4tpFdlw5Nu6S%2BNpDD9D3t2jOvxcd038eTvBJMaDxsShTj0xBnKNw%2B3lUI3OLgemDe4qQ7DuGNVXQ98L2Gr6hbUU6j6dIY08vnXFBWSr1bH4CShBU7m5gavV44k8fNj4VG5NDLKZKQS2w&X-Amz-Signature=0f3fccc5181d45541f82b5ca16ca5a910a19f77744731193ae0dbf1d8cfc4a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

