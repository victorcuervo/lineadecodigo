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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWXUNM2Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGL%2F0m9che9nTbCCdcHiWuzEuoTF%2BH%2Fo%2BRpOkzlxVXI3AiEA9x0xV2Jqgzg1ZaJm4DNXqKQbGiIiGDAMg%2BEIlezuj80q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDBI4sP5icZ%2B0RSWM6ircA%2FZ4SJA7AIdlGX08QKvawSbwhLDhenvDxGS30ohH9j%2FbwEculwLjALVGQBOL2vORqHuc37LAaDZzpbQeBjGiWRmLE%2FK8%2Fpf39mly%2BEDdHmqZ%2Bhgx1zmDddslH7JK%2FGYtx1k63ZFkutLGzu%2FDURBSI3cYcoM%2FzwiwOHGMpcuFK%2BnAW8cYVX8j1i2uVVijJasWev0Y4ZPGk9FUwkOwYPDcFEwv39Z8tbuWcMydDuh%2FdVeTHybD2b8K%2FXpFEA1J8gezdDhGxDxC4IF1InZllC4pFxiCJUQFDwIKCr5CLVtRZ%2BqhPKatsR9NbRP0lBXOtziNmAQVQp2luXfzizg8CrrTy5gTXVsZy%2F2I8kvbO9xqoqksXFIaeD5EFl%2BHqvBttK6E6ESxC3k9HnXsOMjBzXv8QlDh21qPo44LWgH6ux%2BBeJlrfiPwBgiWforjwFtnm3zwd7h4Qj66rcQjpQjZWhigD%2F7iwkN2zYqNzYyL8S1ZpP8VJERlzTmVbbEmMlOqzQBSdW%2BDZLh%2FmghGTkWCNOWEff4Vr43Ok1iZpm3RYM28zzGIVgURRojRQC1FgSbskVfTZbQ9mIBTI8L88JZ6eabIRQy9peoGaEJ%2FxOQzkwceGrPHKUhhpgMc9%2BUNF3%2FzMNq5v8kGOqUBe7UAZdQ2Y0CC6R79OXxxPFi%2B6u3hLBWh8dGUuBI3%2Fm%2FrJpMLCNIdjNsvuoljBai2mMQcxAPMHQwyozucxafIJBpO7lxOfaO%2FZ4vNh41sdPZPeK1oSE5at7h3Fdt5wK%2FzUBqk3fNl%2F79jKhOqGR35bSxOzA%2BhlvdJ3D6%2FvOtfviDYzq5yPlNtWNdrtPxjyNaS%2F1nCjHkMLLB%2FprL%2FDF4ep5cUJIau&X-Amz-Signature=b62949800e086a7913a01e5f09703669ecd2a6489e20408b43f22176d305f287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

