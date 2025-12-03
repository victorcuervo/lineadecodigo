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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNMPDBO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCID9IiVxXwBpr0xR7ISM0Je9b7KypG7XXxfwtE67nr%2FkPAiB88aTfkEQoqofgAbPibCLZcG9eWV1l64PxPXutuaGmPCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMBzYFJuKTsOMkMtWfKtwDv6p0WYnv%2FzN7hWtdx8IrvAflSW35hf0UQtaI1Ng2%2B2e0A1O%2FnvZqxlbmHSg%2BklBmS5S9idh55kd3suw%2BJ0rVLtCoKsShaDneNc8sG0sNSOVKuJmrwdldakTprvzNk4YtEaa4Ise4S6ENG9bZO1%2FBjus8ZhsPoIxHuTzFMlNMAD72lmNPR6M6qHFSxGcQ6jgAVfALW5tG0ETVYgYLbxLWVZ9U8gUJFuvcA8t0OmNBEEyl9Rzv%2FgFJA303tt3GXK3NCp%2F%2FEdtoaQQs%2BsudtubYMOQFcCaMOSomqddAuYP43qK7JfHJuYcRxDEYBboRVI8qhmsoM1HXGAC2upgY9hhj2Ak8DNzZPmJExtD9E7TlKyEGBGGNcba7ioPzZbhdaeNM0%2FSkS%2F%2FHMujMUkq4bIfU3PkN1Sl2Zu17XOjVLoQXxiRRfFoZZh6mizn%2FDvijeLrY8jLWaGOKNfERsuQQ1FdnK7oxx7wk7bCX4vqa0BHgOFxHllpby2ryfF4%2FfZ%2BvfYzOr2pGmoizofk52zZE%2Fy7rNYBUbV2llHtTvLhzN%2FZKRngTLpaqisoQlEgVvgrBkbOxrUe189aexuFOJ%2B9fo3k29FMQYeZG0hiQVfmxUV%2B%2BNv4fZwK1Hqx9%2Bn%2FrnhwwpevAyQY6pgG226efXswTsH7rp9WOUT4xXcuOxuGrHGs7phLMsX%2BJhz%2FQAObEI5Fn7Jy03K%2BZFD8GoXTs4EsMedKuFI%2BztMZaFy9nm9cSP3Zta%2Fy%2FEFWn8oc0UC6qw%2FVlrTGCq1BDFmKggHhyXvfMSAxNRy5m3wOEw0L%2FAPv7SSDyG%2F%2BSrbY3B%2Fwit5CtRz86fgMJpzaYh5xIHNqm67B%2Bgv7hXEVaf4AT7F17qwI0&X-Amz-Signature=6d8e5adbebd0a61e5c2d1b3316902aaa8648ad53a92a2ff93399dbb8b23c4cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

