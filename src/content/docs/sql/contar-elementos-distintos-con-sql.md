---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3PGC7L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBWRgAlc4XT%2B7mdK4tLbWhzfFAg3l5qbCnidJVZtScgPAiEAldyKMZ82WnVkJkcVeu43CXrP7BzODzxH8TODyzELRkAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK4S0AafoiewySFWwyrcA9wkiIQqmppYvc3vRBbHrhNuzXWNnQ1tb20AaFeDu%2BFkumVWzRf68EHAE3xWKJBjpOgirNLcbYaJWv7PnlTpd18gTAmBpT1zgWbkm9z%2F2SDP3dZDLIdUU7UDXTF5CNk3q8HoGrQqshm0VuG6Iewuc6BRxpIu4WX%2FQQSSePR9wodt%2FJWyjbI2Mb3dJ%2FjB9PIy98WP300x0wGx%2FSFyCkB4it7EnLVfyyzsZgvXnLpPUMBcSqSyradz6OKnLpVeGFElTMOzsuEFqboGyzfys87xXt9IbAtK%2BeW3y64RWbnJNuI0IBoEOipFYBmuR0pxvYLbInFMOVEc24DEpDtgTmZpBm61GVgn8xYkL9nxC8LBOiyaSK6ys3aQCX0GHrWINri0Hm6WtNyR9XB5dCViAyI0FM1QCyRZ2xHu%2Fu%2FTKIBUqh6C3tJ0w29mkQQHwjLJ%2B1fe7vses9Kq6DvKEpE%2F7lJ5nzyrLT%2BGvtMKmmXA06fRom4E8G8a%2F5GrNhRtgMvwAjl8Ba7rWETwOn%2BVcqmmMPDg9Lp2%2FBbW0CSgbTVbBZ8c34sH0oIwQFxSbd6%2F0gDmUZzP9XJyGC0NzLOFUaSzqy9stWNeMhkhUwPa%2F%2Fq5ScqXYv1roRHe0k0oIMn5mwyqMKq9wskGOqUBYnX6Z8yBCSg0p%2BCX3MG9pV72wX00vmYQ4psjr43tjJwmhGFny4U5H%2BKyOIOdGhjzEqNFrPTfO8STjG6w9cL7470WOgPlHJheHtJGR0d4Szp9I4CkuIuxwJAxD8qxHRS%2B0E6yvKoZxiBEqa5Of5HIG8l9ksbe7xCx1BDFrv61%2FiMKp0W2RhMRbrYE99cfNFSu6l%2F8PQMno8S%2BnIXPWBqf0AGsPLSt&X-Amz-Signature=c0a6a6473c19f0009cb4b57f69701e4cb4ee4a8d0db936598a0618fb961b6455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

