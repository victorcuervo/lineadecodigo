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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z353DEG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDRE0k0a71DqV6feUOyfK2eGBl61s5QLgZ6iIcYfAGaZAiA2Rn9Vp5h9%2BO9B61MoqvPXp3bwmWieKVV8cfaoB5dkHyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMAR7dRzGQZppvmjCDKtwDufMKMZ0gIF7V9zciySI2GTvi9r%2FCcQmtazjTn93fRSW1lbYP47iqBaFbD6CIIBPWhzQuW5KXtW6u6XaPjP0Mmyyf%2FVZU7H2cpk33ic0C%2FvyBO9e0wjzRHRMtQgzoWsKgDz0qnM%2BUDm6PUV5Y3%2BHma4S9YMIpkorvqESmOZyE3jMofheksFAkiHlfZldJDF%2FVlCJKDfu6hpfvMyiYmg0%2BF37DbOpAkL8zlmypejHQxy%2B2kA4tVBmzIFOdUTo4hnIfIDhqUdOe7ZU3Y1lZeExvTfPBno%2BMniVSQAbL14xA7zElVmy715RpKW7UuS9Ot0mhqF2hymUJ52ZIat%2FOXewOfu49FPzNzvsF2QIW%2FQUYi50eh8%2FgvLLz6Z50fhL7BOOBquRGm4sARODDqs6j%2Bd%2FM8Bl%2Bi4O71fbQomB71Q6Cz0XDjLX7XsWigzxgQRBAUfOXtvx3sTO6aZoKkFaMxoTnC60%2BWJcUhXq%2F0dD4Fdcf%2BbKVYzYlpY%2B3ZMue5fDdAOXc5SCvml3Re1xcpdtIahq1qUIZZsqcSXIISlvFlQsQcf5qIKNe2PWickyLC7SErysX%2Bedn9e6Ac8ZjznIdXC%2FKu38y0TEXaP1hxnDEo1fxFjJRNxWAFtoz%2B4ynnvcwtJS%2ByQY6pgGrQ1kFsFw%2BhmrhMMuH9DxG4RBpZioOUySJK2raf1FJclcEpRAgVtUuIm52y%2Bgb%2BduOLUAMp4vxyWV0H73mIEMxnVK6%2BUNE1LLCI2w29Z2vjLWoKzcLk0auf5nV8gRTBiBtiJ2kb%2BZW5l9eERcKVLezjkqr2f479zceBufFdN0zY%2B0B3FEVdarb9aPVyC2SluwDvXcOaL9Dk6VRmswy2FPLsZKoM4QF&X-Amz-Signature=f8ed16749afc1209df8e1850a8ab8998ab39a03262a388185de2847a297fb591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

