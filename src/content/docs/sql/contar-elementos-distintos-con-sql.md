---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CI6GDJ2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICkVNWJCsFgQLInODLQA56zyUXTm5%2FnpzIZTZReQexQZAiAreWhzqSmc1ZxEAt14047K45Z1wAlIrjlEtTLBlQPgmSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMGGcClqg2009EtlBBKtwDANGX9A2oWZebIT6cX4HMJpGpA4zht%2FvLmmuZNo41EtaP5RC1ueOL1GeIr5wyiQwnk7qN5lYxJCnx%2BlQUAbiv2Rhx4kTAk2GhB%2Bu%2BWLe5%2FfQlLqG%2FBwp5IYBYjRFMW%2FR5lCvcNTsea59B6EoVAATRS2NiaHaCc2hJGLUdyykHE6%2B6zaJmWZ0xJezKdnqIYpez%2FJoy07Ib6w%2B%2Bd96OAyb2XKz1Q43kyqGwnImYvMOkT37KiR3kQ4lcjYpHMcWno29CMgx%2BOL7kbxjfzgT9kG2vY1ZyDRpC4qITLqdDXyRfaovERPrglY3TlkKJ8igiwEyQonD5mwerckQDCADtWpQSaUSMJc%2F3hHBPpqk8DDpLCqHaScVPR%2FuwbP67VXSfbcS5WtWDIXk4pKkDrziUO6ZLmhmsRdOFfq6oe7p0u3R8i381okFvNLhDhWQWQUlu645RhYBqyLGGYUOyCvoPAg3s9c6%2BwezFpOBx15y2Af2m5TpmKWcAC08SGxczmdbHXeD4U%2BqB5y%2BE7pUc%2BMYei28dtgZtm9Xw04D1klHW%2BCm4%2FrnDu8KpRUywnHRfzL7bHrLaTvUBcMuc7wCz%2BGERZ03X9RpDrlvyKCTabc3BP0%2Fr6WTo0uCmGnwNFJXVUksw1%2FPDyQY6pgFBs2UAXqTfP4bT7pCxdHg%2FSSc%2Bars5btII8aIFhD4EwXs%2FijC4MZJKU6fC%2BUTnTWgnov1l26IXGXXMEU5IBXbltyhvkY5g4wujOtKTPaBUWbJ%2BwSy1Iju%2Fh%2FCdIpv2qPG0ph04xKfJNQv72HP0%2Bx5Bu%2BBRzo3WxYi4CIUEkrQV%2B7sdcn9F2h486R7%2F9TIfgvyKnF60MCzDWU3YrHk3ml78%2BZhFpNlH&X-Amz-Signature=5b978454365bcbc39e19306261bc1333edb00341d05ddec3866c3bb09d0af5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

