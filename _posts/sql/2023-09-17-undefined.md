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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYIILSH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCGivVW74p6Xn1XQUi4uWLRF0ubJuEKpgRlAmt%2BED99BwIhAPKXA%2FQcT12JPQIRQkAGSDuBzw%2Bl8ua%2BkZlAoSIywC4BKv8DCCIQABoMNjM3NDIzMTgzODA1IgykF%2BR7wHXXnVOWygcq3AMzJfzaMCF2SgJ1KFe4szE%2FwDTxDc2ZqBd%2BzO%2Bg8CUOWTigJ%2BXWnb6%2F3WwIxxSuNDcgCXdQWcEHamBPBO5NcYaLfK9EybI2yoE1hg7%2BlGrE5%2FR4k0fqTuoP06FlgetnxznUNASG89N2gYb%2F0m5TRMY8gUpC8Y%2FCCwkIvMeY1B2x3MWRqaIDy79yjH9De7MNx9KQGTmiRc%2F58%2BOZIvZAkpygq1DcrwjdYOnmZ9UHxNh7mLcDsyMcwpO9FZx9Ex%2BnTFw8dDYpsNrucaeDRF9Kh0%2B71eJAom2MLm1z%2FqP1cGzgkblFAAFme5CEi2DqZmTStle63jaOhlFWW4EICb5CbWHYXAF3wl%2BtGMPmkBDm4yTO7yngXjDKvmjGyyeSLgIGzeVyG9hGM3TJ9itmlyBC%2FMZxgxPKqN312HFKAi9dRzLJk4AhSkAWp6GZKKp8YTi2bpAb4xGmDmpHmOs7Cl5d%2FC5uAQAbs5JCXtFw%2F1gcbmTEoxyPwLSMsSFhuPcT4SbZAUujl9%2BLlbNb1700Y%2FQmqJRZYPnP9cgiQZNZbml7fd5QiR4rx%2FnZW7PlK0f2DuSPnAKK5JLc0Bc7E8q4RE6r6NvYHjLfz6sd8sEYIIZ%2FRiYYmbuDYnMXi4QGa9Z6kDDNlr7JBjqkAaDXcN72n5I%2Fqe%2FQIhPMX%2Bvu5xe90R%2BFaK8sImd%2B5qJiGSB1ccBK1ynYNt5mGzmHq5bFnlJFnq%2BGFesuEk38ouJtcTRFr2ubF7HkgPBbbbWY9N81SYN3IQ7EmPikJjp9367dd9R2pm8bpflfOoitKCcc8E11Tt8htiY2iZCMtiJqhZwxt2pcVbjgs3l0fQjTCeAyn8cR%2FQgN9tAEQFTbuQbyG0sE&X-Amz-Signature=61223c422dc38d21b788bc1928308338a8466f9b0bd0d4f6d80a101487386bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

