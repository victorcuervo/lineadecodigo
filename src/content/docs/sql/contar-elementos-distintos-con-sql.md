---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NFM55XI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIHaM%2FR5JzoUFYukp0itReMsYswcgaMZ1jAPw1%2FwM0BwsAiEAysctnAFvcKMAvvFpFcBPPClKd4Uj04SG8%2Fn64Hu5uQIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEbmI81Mw%2B4QkShpxCrcAxXiwRGGqVYM5qYG8F8XtNYYstmIH0UOdrDJsakcDdAdUy%2FSqbR9zj4AAYlK457d%2FrPqx%2Ftm%2BMX61kfoXXoKj5%2FWonWNyX4NevwBSLam4aDN77a%2Bk1i%2F2gkh9jJsqfM759EdPrw9U9Eneoyn9XI%2F%2B0BDvyQHBmdnnOf6mPTseOWC%2Bq7VAVE6ZvSt6jr6xC3g%2FECKjfODRKcUVRAW2xVJ4C4W7p3RBZnvqtmRiqZhqAFpvc3bni9mL0j5CQ%2F3rpm555ELdDs8Ozp4Cet%2FpslnS%2BDDrFh040T3QxgmQs9JxV7%2Fr9tXRupPAnr8ZoiL6ZCzLBohxVquQ8QRrIgNYaY7neiIgMPeWHiWmwR%2FiT0HlmEyeq0cfD9GI6kaICoHRaihKuE6hGTJmn8uYoE71plRrDJJTqHIPgQXU%2FeVwt8%2B%2BGEaxJBWWFFn9nqMQXqrEJVHbSSDk0avIzpwnJyaKiF9bmI67Nb%2BZ9QNOPI6k64oa7FdTuSxhe9DZ8XRH2IxO65tzn%2F92WKxi3JlVQy30%2BkSIYFfwLkHHVEOxYNP6jzUSRoWwWSAvddWw7%2BdAcaIypXunJD6l0bk9Zr9pOuynoPxR1zUh9Vl4bX3oFFOYr75YFIIKJIXq%2FYRNO8JIOvPMJr4wskGOqUBk%2Fr3PAXeke5Hu6u%2FbNKbFsGEiRdumf3bi9yO0pPC7IxRvRX9Ybf1SzXJecixZMu9bppsguY3UW6NdwzMb%2FeITQMXdQhutyQMrEfdW4QnaMayvZp%2F6ZYs9dyGkE7gVpx6cNMMiV1jM5i2PmSbXR3TswBFfmOJfqtJCsNPZqzIm5Vik4Agdk%2FqRLBTLucrwFIAe6wkMFVTDFvzIMWxshLJMgCs%2FscE&X-Amz-Signature=1c278f485bdd8235675ca31174b41c04cf9a8b7b76ba4517f1c5ee238511e6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

