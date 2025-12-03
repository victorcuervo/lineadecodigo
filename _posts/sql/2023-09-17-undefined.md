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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSX4BYJ7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHtV33DYsXJGmfJV3FRJLq6BOQVzWsZOODkCUH9wtJUHAiEAqdo4%2F0bes127UHILpcB7IeEkKlwvw1yuj%2FNpRF876rgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwP54si%2BWY%2Fn7P2jSrcA0pc8RNgu9LsmsOhAUyZhCDNdCMf7Y8PaT2sYt2anlsj3nZk0wGDITs0X56ESqLMXPimkvVFC51Ik8mE%2F8gEUfMKwShFRkwK8KnS1%2BvyqFnn1%2FU56RsOVpWj5UWaX2azpxSj%2Bcg%2FEdtInw7tEQ9wYIqxTpIyGHCSFrTLrpnR7aXGbWEc2xYhjmBqkzSDk8fiaa6WlEMBu%2BeG2Ny1qYNgCiSUuGafOSrsGzlDAOhFsB1ISi6Y5cOZEnOeHORAB44jbRT4SP92XTzVRbpODxLvztjqfjAIXXq7kFwoZlVckIe7hLzck9auZgNFXgMXJdRu0GN%2B96o%2BwcqYyLVUllXhsPMXmmjx%2F%2FbC8%2FZh%2FThqGU6B1WmqvqgWiNHC5vm71Ys66WNhRP1yzwiBWtlCZapMi6wXRAI0tFVle3hughpQe6OEcPOr2hDId0p8ucGhFZB0cJNLcWW7gAQPkZnOaqL6ErgML4a1mVt3VrepyW%2FGgSIznEblZ37p3gEUkxYuhsyUtwqjQO4XzvTBMCfWPCCrZkJ%2F6G53HERepx%2BkEo0xAxMMHcvq3xooTuHuIpZk5RldrvGMaW4QrOcmXBQK6eohz8x5wLba3GEP8hHRwPzWTzs1LRoPXxLczDuTQcOAMPLowMkGOqUB5P01chAzBboHY%2F7x7rVnaJm8IV8XoSJGAFvdGS7AIj6YmWZXCsSAPTcykwoSnJXbINr0%2BpzIG%2Bn3E1Xh9TnXQ76bztpAn5E40lznv08lnp8oXNVonuGDwqWkArkI22MgRF0DJAhGg2cZnCAIHX87hVCpL9SsUaOEuswZsEzNKjRssmiMQNv86MmJH0qCSPV0JjkbFapIUOsfQsf159B3uLp0J8dg&X-Amz-Signature=9729244b6937c328c98986a5ddfa12de4d3e24c08217b1411444e25ac869b610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

