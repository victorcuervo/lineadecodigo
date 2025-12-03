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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXPDKF22%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHAnS2rmxIOYpM3gbYGS8tnhpnjUdLmenTcHDWWUC661AiBcIXIXt8J3779i9UNPJRTgMQEvyZOmmExj9o8u2Wv8Mir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM7IDU%2FA3UvF9iBkZyKtwDxOLpwVMsZCFJtbNpgiwQsTxBaGWWW6P4XOBvQHA3XK9tPH8%2Fqko7IQsEKJBGqTweFo2EXoSPRZ4xxzsJWsTA%2FjNu1Tfm7MX19q5CQNLsD18lqEk%2B7Ohs2viP%2BBnhILcp1tUY8uTYptPBBE4c0mGq3B2tNG8h3%2BqsfRYwU%2ByA3TcT1EgUcWZIsa6jiBNC0ayC3jBcK9QVHEBqjV6uRVsnUPBGYy1YH%2F%2F8Sg1lQkWYTfnwRlEZIySH1w7xE4RpPbmK%2BGsjkNjJdB1Umq7CWadQ3AuzPiV0W3osNTGx3zZgEjiAT3TWKcNyim2wDG3OD2iDWjR8jjDqwsw5kYI8J3K5nxLr8T7hHhrKW2F%2FCMKExhhelQJqXoFxCbVoWkd7TpCBxMLBXv3aZ0aoaW2Rh%2FOL%2FOleGQN%2Bp7IbngQcVHYzwD92vecj72E5QydgHX4vJyIz6pn5oBs5vjJrZPb8ugcEd48gg9jXXPIBgJLtMLUO5EjDMkGAuMkwmLy48WlA9kymh6MyAKnM0WGFXEcLUPztqJdqgiV4Kwxl5hSXfoOMjjsZwVyTPAtNAZ8Qz3FpSEeVSkjnNJuhUX44ew0MfyJWgy0vJnJ4v4UcBvRQWspELYnRvZclZxlTXzD5zPwwo9rByQY6pgGcgxvfnSbQDV1Ly7d%2F0lUc5WwyXL%2F%2BTFgdhXk2%2B8lE5WbegyCpq1lQ3MTZBzj7yXEMhOGdC2aJMXXEI2tDLIp%2FPD2WWTROzUDyiuSeIyxDJxjb%2FtXt7xAFnLcbKp6pCxxQu6C9b6uDcBV7SmtT9mzuD%2BsBLR7%2Fy%2BYA3CYX9T8jLCg2M43ZDzDCb%2Frs8X%2FAZqPaifRcTRXTQmL0bpJa0KPDM3a13%2Bs2&X-Amz-Signature=4047d0a3173ba13ddae8a111e1ebcadede0414c743abcfce036f22458799904c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

