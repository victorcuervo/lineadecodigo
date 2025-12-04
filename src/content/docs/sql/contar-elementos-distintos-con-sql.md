---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IIL43O2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIA824A1uzkBIcqd2qCiO92VWm9yIxSSNkjxOtlbIXOVMAiAMdD4Gkosf%2F4Bjb4FadyUqXMTuJZwKG955UYCinymaDyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPCIllQ%2BGGA%2Fu5ZTBKtwDwnJ7%2F7n2mc3OuVL1%2FKRmFm3W2Eqp88sQo9bHezV%2B3%2BgAHCjdX3%2FX%2BQpr7sUQa1qE%2FCodG%2FaHervkOdkAVcUPGxHOA4AdKTu12AbBmc0u0cnXa4xbSKF6%2BL4kFMHvQ0JBjWSxxzq7lFTdl%2BkwM0sE6x%2FhFTHmQM05luCsiH27fiBgQnnjPrffK6jMffdTuvFxvptnVMxnf14JkSU5rICbq9E8uKlYb4RN9r4Hx8lnKtwp1KG3jVkIMUwljUzAf6bgliW1gIzcJShHN6QUm2oXFyEp%2FCPR3fUgfyMVnzJEGywxIW1lUoRHEio5hAfmqA8DzFaK%2FmpKi4cNd5MqL3BJM4ScO9mMLdQvyRZY3JrVCY55qN3bZgp6hMsnhnoVKfbM4lwpCob8v%2Fs7SzK6Cpp3lgzybyKquBCDZrUXQBmUDwGOoiZgcGSRmctBewkqumolMb3xLfcgzGaNDhO6ZzdNlSX8ALx1wCgLxRvfvndT%2B360HW7%2FAZn5psmHjZQQbizGDgKHPgkeWDPPZAx3KTmCnI87DrtV0S8dMX6jKlJRo2sbaVOTI4bVCMErA5Vt1tovEOEIOAkU3IXnYmHwaLgyKcic5X4lUg1LOGyINn7SDnK16eRU3C%2BQuApUPGUwtcnFyQY6pgER3%2BMiDcbj1gWK3TaE5StqyzL3GLZ6Us0YEBwNITPTn75GOaPjoFCt5yaySQ%2F0yHTEsRGJDtwlPFW%2FtDRiDXn8JaHoeUyCRl1uYafq1iQZpETa6p1T4Wc%2BJ5F8G5U5cjnRbZlTgBgwAE%2FVg72SZ2NCses07knSPq8FJX1w9Iu%2FGfHfgaQitzQVi9T364jdgo%2FWXa7j5%2BSDk8yk6FXzqjy19yfwmehE&X-Amz-Signature=c8d9dd7420d3b3671542742cff36dec9cb1156370c328d49bd9d2e074e3b9543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

