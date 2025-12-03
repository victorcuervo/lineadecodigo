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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4DQ7FL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDQx%2F%2Bb%2BOrX9AhgvL5qj2c%2BXwymIJFzxj6EAlYmTTM11gIgeguMGtuYjXL2Qmoep9Kqx3NtaRgCo%2BuxhuzJf2h8a3Uq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLIfdfeni7w%2F5XBvDSrcA%2FBrH%2FodGh4PQkwKgdQTdzQ2GLm4Z2aWK7ZUxUzFHWymt%2FOGmEfYOB1%2BZn9dKkZrVmYNsSe3FekwJsIyEA4NDhCacVNr%2Ffez%2FsLpymoZTk1830IxNAUdONhB87gFwVqfpQ1AqFsnqamWQcbTUHdRAToUiiUgatLReliqWPIOercN5sgw%2FGD3AKm42fXZ2GJLHLo15g0dRl6AXx86EBsm%2Brmaj0Ou4iI5p83hPW7CL12b4vCFI9okr5%2Fx%2FFytr9IXvtbAg2dgjF1sZ9q0FV4ZWEtNRdICtfEPzB3YpQ16whMzSISb0qS3tULew7BMZR5hvFBU9EZkgiJVDTioESgMkIdtj0ZEki28HBY%2F0%2F%2Ftr8pVoamx%2Bo0eg2xKORhE1%2BVAucIpkAi%2BRVqj8GJRvoEvI2%2BN7moUAcUk91McgbAY3cCYLZHVdTH4MHsXvVz4r3ZHvN8cXyR3ZHStBYx24znKZL0o8kq2nLuzUw9W%2Fwa9oG9qIXwmJN1c9aBfUERxcuPtCIadYgRepo7z9FgnMkyN9KPgLLZOX3a1Wgc5qdjyvQGxG4nsJMKPkfqmnCGQ%2BCSoBDEkvjQjKIhjXsiYNqr8nizNO1WITC1MJlUACkzqoHPV6%2BEktMs8r93C0qcaMOiSwMkGOqUBNIADrnXJdPegzRhc3upELh55i1PuebwhbC52NGt0ju4HkXzVQryl4f2UUetfIWetBgv2bVjXLRSZaqv6fetJn%2B8XXOtUEa9FpmA0j%2F8ToZQVAjVUrHnj756RkGkMG0KM%2BP2esL%2Frt1lLo6qmYqUr2azdb5SBLA%2F0iunAl6PP2h2p1uU9w%2FP6XUbecSpNMc%2FrVGT1s4%2FrB8p4NwO68G4jmnBCXzYo&X-Amz-Signature=72bf9f15259061c004e383c68d7481ead95ab37deccda8be0c31f79ad735f2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

