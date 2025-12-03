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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UYPFF3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCCqdGo%2BY%2BEW8%2BFHyc7iv7RyvrRybGukJgpsZvRt5FanAIhAI5epW1vXDK4pQw7sTynNAR9apflxTqPGfw590crP4lhKv8DCCsQABoMNjM3NDIzMTgzODA1IgwCIBUrK2g4Jzgw4Vwq3ANlSb4nmmXTj%2B3a%2B2vP861gFamv4PquqRvgDu%2B4cWyXELrF1%2F%2BTET8XNi7aBogyujXBvNl7oxzo2z%2BmrNawouRM%2BmMpOR4O4bBwXy2MWw71miyNZgQ%2BTc0Hm4D0UuQoEVk3q%2B3mh72Azic5JmCZAXW%2FbjjOqJPljaVYxTod0o6KUX%2BBxERv%2FFSB%2B9h%2BKCokgX1Vzz5us5URs5DMOjq4tXRMq%2BstolNBqV1hDM5KG9NJgDj9Y9FaykmRGDwblYu0za29xQwJOJvgT1tcCQxBavhUGm1%2BpuXb6GvmZAAPYqpHs2hna%2FqnMsOKV3rxEcbZEp8dpjsDFhvWP11jdi6aKpVDQ1OPNkx0e3ypQKKcky%2F6BHuT%2FuDymrdFVLImcfXNC74jKCLjnrDBnbzE9orYreWsgiaW7EuVRnx7wP%2BuFvjHavfnNlZAX6RFpxPMBaGnhmXIFZut98kjgb8jb5NXOwPVYIIMpGlJxX2J6ZXCTiRkClSn3Gp0Bk4226AzFTd5VYY6duBXRuk4WPMEok9v2%2Bpjz6g0fo2omvEpXzUD4XWtfyVYi1uGn97knl%2BqWCLgVDlMlenPf3xKS9SeCGkZFdTsTGkMccFNTlogfX67AZkkGvoiSFK3a0dxQVZ%2FeDDZksDJBjqkAee1sEtfRtHdSqzt%2Fhv3UI3SQLEbD69iENiA9lK5QvDYDuCe6vsgPbi%2F3Jvlep8zWzc9TDHz0ooIVYhXl5JoZ51npJ7cQKJxEkIuyl0rI8lukKKO883sFJg1NDLHN1zoYJ9iK7FGTkFXivokTSnoSAiXYR%2BFC9szN5y7yape7CRyTx98pFZRw5RQ5T%2FDdeRF3D8MlXaBN5GcufnIezQA0ZrW5g5Y&X-Amz-Signature=aee59710227e68527e5c27b32773e44293794c75741486b65df031a60d88616a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

