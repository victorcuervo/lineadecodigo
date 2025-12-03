---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Y2EVGY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGtppKJFDGZXNRcKJlGj2rmcV50L6QnBBnqisZS9poHpAiEAktbta4l%2BN2nbzlN4Y%2Bl%2FLoxXlXkw0nsYHA9%2F9%2BAdSt4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMlvf42YWrD0A1ZzWCrcAxCgtvkqvd1AlP25Hk6TECpEuVMjJOQ9MF53EzXw36IWEx9%2FZudaqNSp5dRcvIGZdUSXXoPfy5WvrPQsfYFaaZ%2Fl4PWRRFn0msvDZ%2BJVjyzL7teaOIRLMdB6tGlxyhTlpALsPNzaJBiFPQVpJzj9B%2BP1GJaCvXPaEHijRf8i7uZCiUBnzT3p%2BQcJR5SC0Y1InIZUSXi82qnooaBFfD8rbsZEHoyFYrfIb38vRKRpz8cR%2BYpUTI8leLz0DmbDApy1d8rhc4mm4hWAz7R%2Fo4rNXgTzpO%2Bj%2FoIiasM0XZyOMk84%2BlxtIIc5ECMA1nThRSlpY4HqZY5MwedZZ5IIGMemvMfFiz922ruaLCp4rcd4xbgpLpEwSf1ClL%2BdTCUVZ0p%2B1uSUjsW6R6Irt2%2BlWCwSYySS1a9%2B8quS3Crm2AwpyZyL9tcSU09bnAKRw%2BFobp3iiKrIVQAJ0zHdZnKr7A7PCrdPWLzHXDfkhMsQyu5LMXbPcyLcLlT%2B6v2WEsQuCl05ISDrzqB7CM9qGZoSV5k6FPlgFNGjlwse98keEUd5LFflFpn8nuJxnJqGvF66BvQmd05SyfGIqyzoUZq9olfIQ2QzpX0XwhlkW0BP9Iw8wWdiWQivygOZ2tPtkk1rMIqRwskGOqUB9Iy8q%2FaOChsdBZCvmdJZw50YRHC9jVlDmtjvrkSu%2BC6wvzMFJtBz4goZ7G4Vp%2FMz252cdD0Au9KSTEc98piYsWYw6TLpKbSJCiAzmbRyROnqAAbKbi%2FKC%2FestdhXxx5BJHCEmXN%2BnaJNeyhzzbKDOBLHTTrGnrmvDpvu7%2BJTRb7ngiR5fY%2FVCXj40pR2ApGvHSRli0%2BvPuyF9QzHPRH6JGBtzyh9&X-Amz-Signature=91ab36cb59ab3b0cc0a7f74ba40f3f2e422a87828e69ee09dd530dd5e4874c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

