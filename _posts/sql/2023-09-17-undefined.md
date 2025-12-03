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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZBEPXA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCtZFkbMnutdPF56rzMTjUbJMDInNv5TEcWbE51gSGa%2BgIgdCBV%2F7aCZWql%2B580DXTaMeebaDaJrk5w%2B%2Bjj37qpXxYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDCPD%2B3%2F4G%2FsgeWrN6yrcA3PNtQr6EKHOWn9fgwWAewRnRsWvKmly47S3O99%2Bhas%2BDNdahspFibuncL5fyH%2FjiaIXDmfOlBTZ0X1E7YxCxYRISH1H0xfJFAFv3AhnLqpwNb1VOQlcwyQsOAttRaVAgWs579sAh8J%2FPY0r0zhwv3KLG%2BzJ%2Fy8jVOYZmEGqEkUdbygKdRZwgt4yDPJIOugK82dWItHLkiUaPx6p39Z7NonR7m2zq3VaNwFTeBCm2Z5XNcJ0DrMTItpMzjFfGanEWgTsz16ZgzudeiaEOALr1k6StUnQAZ4IcAWVSz7S5cDm%2BY%2FG6Tty%2FO07FkcWm%2F2BpV9AmYyzTqsOpB1SM%2FcF292niypmSItQpEealJ58jaMCfGTKr1VT9OpUDaMjJ08ZhyUWGhpQ%2FXJDWzktoOTL1GVJ7Y8Su81U1TSrWr32JQwxoHgMPNOSm95TWdQWq5ferwnv6m1z%2F%2FoQzAsdtEIqx7VmCJWM5yfXCkMb07FMcHPNd0A1EqtGZifjvbZHtGF9o4Y0FQVv2Vlds0HJBRPoaeiGh68Zyhuz5MHcq0qJzr8lStZ6ktUAEqIxcPjlX3I4fqCBilIiV7tXjTi00%2F%2B2QE5eVShzeI42di9MVn9V7b5yUECqpZ3OEabE78tNMMX1v8kGOqUBZ7Tl308Rnu9%2FkUDLTEeqO6mC74PHij%2FRz3uZY7xrT4t14oV0FMFuAXHl0phCrmcrUbq1YBRn45zdxb2V8NpGCvxJv10a30qmFKxwsIIcFd8bnwUMG4nKYFrQfFVdA6AuPfEMDO%2FygSxkkGTuXDqOkX9LunM6uHVs3XHtsqMZlq7ssnesp5d7erDk%2B9D%2FvECAkTYXMN4%2FPRVKEVTk%2BqdrScvdletW&X-Amz-Signature=30e46c8c5012ee52a8bb68ad9dacbba09f6de3a288d66368a82d2b23f46bf13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

