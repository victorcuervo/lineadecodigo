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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PI3YGQ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDHMLfUGIxQAhk9gqqCed7FCgPpN9Mk6VcIKOZ3Zjp1GgIhAMxC0NqM3fO4kb1XoJXt6xoretz%2Bus6Gh3kLlvFCmSuEKv8DCDAQABoMNjM3NDIzMTgzODA1Igwi4Nq%2F%2Bs5OhuULcecq3AP4wEJe4LLl1JsOCDYP4%2FKfjsH%2FWs6ohOEMwIAyIu8%2FJgg0bo%2FTtUWjdKe5llAmEvo3P%2BN6Fkuo0I%2BeuMiMaZ%2Bm2JBgTe6iGRMwJjc2uKf4ry337uI8VLbe3Ry92W8%2FyPV0dlBG17POWAOyXmvM34OgTzPtmx%2BY%2FOYpvMSo9nAlUC79lNJE3Vrst3YO6EAE9N8hzUugR7U6WzeLjI1U65SvXVhv9Pp2DgUi%2FUrBycPe3ZUOOXV1kVnvRWmEsGikDZaeQ33hQavkl0GhDsZmPoLTESk7x6uYB3xikrOWRNPtrjekLUETTmd3EbZ%2BNz%2F4lsfb%2F12ERfMjnbERpqTjaHQGKr47eManUpfwOZqo44wm4HdRpYuqiQS%2FpaI9Q3cdg89eNkO0Q%2BjB9X1R%2FbX60yq3H%2BP0duwxqnoFNI9bKbrYw9XvZoWt3PPZdZjmXhT7G4saGC6fs0MhW1xVv1S84rtPE%2BxrdrNRIiNvH3o1rxP8F%2Fdbmx14zbcNLfWObY0lPqPAjY2P9f2vyB30%2Fv0bLE0NZ71brSLQhKEDTXF%2FcizfiK0GbXzeo3uobF7ChjW1c1w1lR2Q4seoUPjazo1SUDrnAT%2FHKZvu1VtgrfDt1Mk2hTQhFoLlF2dku4FyXjCFpcHJBjqkAWNnNXTTIeDnYlPlcv0M3wDlA1wrMiXYBovB9D6M3yl%2F6hw87QeUKXfbFhdqQSxInbLctHFJ2jkmUjXi9u0SN1pdLbwhkvKQRRyxiVVNcJlFI6T%2BxJCScRLYLk8VdR%2BbXCJAqi4s%2BLrNIPjGgVP2ugZQ4d6hKPMEb0eHdoo286j2uHng9ZPmjfSGaTPWRZd%2BO6YHPh2tmAinjgekyb2B3XutDf3E&X-Amz-Signature=c2aba48ee76afe1fdac3dca0bd258e9b28367423fc1ad35bd5de13c0869671b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

