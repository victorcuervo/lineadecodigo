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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5MZ2SG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIHTuG6JccDxo6GGFLh27yN%2BE2ne9BfQ1YlJyagtSY6tHAiEA43OIEvt%2BV0dWqeTJPeK4HR8RHhvl8yMWHaa6QbsUHR4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOAvhRTzKsYHo4EO%2FSrcA0cNY4gbXRof%2BdpylMb6%2F7I0aMfgGOppUxuy6fAR%2FZSAvURCawfHUOxVRv6ro%2FYtkr%2F6ohsT3sGWGQS1vgQthNowFYsBS8vWS%2BAHcIZAUb6zupB7nTUvMAOlrxhPldUlyUe7X%2BWj3mszyBwQG3BtiWqGjlPgSai9GJIFIisFylK1c6n3ErqtqCiiHOrrV%2FE3fFhbxcv%2Ff%2Ba5NmVsHvdn1LwigaLAeMzIhusNZ0SjfVjVCKbMdZJ05lmMWkyIb08azJ2n5OEh49Z%2FP%2Ft6Jey9%2BN73tH0zH%2F6EGFQrfVl7p%2BZBRAscm%2FNb0qVvU%2BVbjHhZwuuZvlqmMJtzMma51fLdcc%2B3JTrLSVIYytk%2BladP2%2FfXP3okat7DnYA22ogfSG%2BO0w4Sb1vj%2FDbde1J%2FSVnwZNgiXdI9kRXNwl5T0qgYY%2BH2eWbFxn17c4SoSoR8u3x0duSp1a8nsX7WerBCXgwp28Jw1vElpAup%2BvgCXnuzg%2FbsINc6NXDRlej5tB3s6ZdFgvqehWqTrjPEAVcYCr9%2B2D4AvFytXKAZf%2FR1nXO%2BjOURlQnVMOqjjSM17fEST83mgD8ngMystKY4JcTRycoiBFII%2BuScpA%2FY1FZFiWZZUfofzpUAAJqPgcN%2B1ztRMMWSwMkGOqUBZ4DYUM7S7ZYoPPGk9uVNwUBoBzy7oTscF4BrkTn7CyvabPI2X7hQ6Iv1Pvsz4L6kTlPk2F6%2F9Oga5Brk7ei8WQ5rRqGgiBSZwRiq4HulnGAwgc%2Bcf8qvDmLXKyeB7M6AHiv37aNq7psn%2BCWQWmq1Ez%2FR556CtOLqfi3M9peB23MuZfjLk%2FgUF5JRNYtecrkmLGZEgXNKM6I3sXnf2K5XullkYf6D&X-Amz-Signature=562122c3281e084681168d053dcbf0c5f30c2fe51de922d4f751928f1c356b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

