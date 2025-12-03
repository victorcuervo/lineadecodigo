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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCE5HX4W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIGhG6P0UzSmhlIr912YG%2FaDfIoKR2Dv6e2tGsr6CV71DAiAvh9wn%2FZFFhVfWP2amqMdwvsj2cWdGkAIxxc0s%2FuOPcyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMohbdgLxwfNJ%2FTF07KtwDTgQZVGeReH5bB%2FsTcT9avfK9mV6ORZ2v0ln%2Br3HptvQx2R28buJzORK60TnDty3%2Fcf%2BrpA%2FXdFIPTYD4hKZABZns04XQ5hyJWPCpQyNE%2FJbUmyXTrY1diHdeXQ877rsHw7hxtcgukFKzDMUhvzHDUCBz%2Ffr%2BJdEGq%2BPMYPRsR0nSnttAzAV49nihORtKgBnEwACadnkRS2TnByg2F3IfhrjxdFNBK6NQs1epovFjzgSGungeIKuSU4LbCSaC5HmyoAhinGfnvZdsQpFXx%2FgVy6%2FvRnOcZbbnWrRmqGbYZTsyn%2F8ckitJzfTfBMprIVO3mmmOHuCUtMkW028BsFG1TF%2FJk3PLN0lUzocOKRjkFBOUay8WOlZZ8b9NUP5E15MFiSoNcE9HtthUhARkPw6JvQrTT17aCTmB3c87QcYp69YiSxhehnUW%2F2wcBCGz9SSz8tRHcd%2B5hejIWwdFHIvgW%2Fk8FJ361iChUGP8clZQdVt8D0mZsEKfwdS1Hbwd43d%2BMOnUcJXEKs7CDRApLt27ujK9Eo3Y%2F2pbiC3LPK%2Bw7FF%2FVyL0yH0eH3z0uj0xBccL8uk2NuaPeZqP6MB2bSOWFXGXGcy5O%2BBAKm3bMeTt5R31xqWlmkejQmBVlnQwxM3AyQY6pgHLWvyunIqDsSUiyQcUBVJ7Oanr1iH4jnNYYtznKGXQrd6RWTDAxl%2Bn8Z%2BGOD%2B5obG%2Fy0UeQINncHnNyiVD4fnxbakDzwVWGuftXiIq4Gk66K42sJM4nsGgEdAs1OQqIM%2F672B2tDkQ80RCV2YLSDiYNnX35i7oRSf1ZWteQvjaU4wQiIvezgs47JKtad1AwP64hVtgpEVm3%2FAzLSWa4mJtI%2BL4XPwk&X-Amz-Signature=0b53490e0ff03bd91320cbf1e0acf9d56a265433eac4af440c94e045801c9985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

