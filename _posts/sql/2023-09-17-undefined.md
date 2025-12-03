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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRLJTVW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEaUzqm8hyflVDCliNykaQ3KRc%2FCzONhOwVRMIENxJnnAiEAxD5mLXwupHnNKdjv4NzMoQeiQmH%2FaMDf%2FM7O7dCzzJoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCncQ0ayYIe55zD9bCrcA4bByt7PMTOroo2PLRkGWYtMX%2BpzJvcDyYUqp96QzfN%2BI4PiVS7vtaqfEjENYiYYjbPUAU9afWKT8qsP2QuqgjUmZ%2FNVBRbGzRmVgXoVFeoOE4AG0j3LWyt2kqZL2pteZyanyI5Sw8ZrZEpkQO%2BvHGVJ6BdEUqEXHvdaT%2F6459cUgq2gJlwlInQerZfQb6h0RelKzZzhQET7bhaz1F%2F3KvzFgcGrQqbTYsUnpyqicrb5h1HL%2BHcQiNYEaXXEpFSP8Aced%2BvB9EY2FGgagFsPQDbI91l6FJnDh0Dmlk0OJlOq1KKWrddET6mNGFmOWPe6kQk0mj1X1kqGeXE0XlWEz5EOLAKwcA9AMFY7Aoe9JqC01KhxOhfY4fhhMtfkQGwtxc3AQJvopYJzu0uUxlryLWP9Cn1bZtPOm3jYWBh05hZ1HC83yzkzYGStXw4HiGwqB9ig5bQKDQLtK4F80I2kX2YqseJbKQmRvV0t3skBWFl11G7WgK61%2B6GunjWiHUnFxZDxVh76xybUNAJr8S6hJZ2AR8kqWukYoVPCHoKyIQjuV2Ks1CYe0BKvE9UAxaPS0%2F%2Bi2iPLWqLISjqk0VJkshOfAdDUF2nz%2BS7dRusR3hmV018gY0On%2BlkCCBOaMOaVvskGOqUB2nCiQLnZFJnnt1fkpQBZr6Arp5wNNlLXUGfpaOU6kRWNsAjmdIp2yIfzXu%2B0TAWD3bvzNLIPSEDx%2Bz3tRrQej8Ym3W8WFCFgLBFLpmJT%2BlL6%2BHFDizgOmijJEE330CT7ySVTQNnopcXnEe%2BC0U2taTyvRS5YOzbWPwOmDya6T6j0%2BjikbiyZ8Q7FyXWEpu0%2BuQd%2F8oqPy2U%2FZICGVReBSWyLuzZ%2B&X-Amz-Signature=79d47f797a2e72cdc26354458506a5564ece5d844787846cfe274dc3eec7692f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

