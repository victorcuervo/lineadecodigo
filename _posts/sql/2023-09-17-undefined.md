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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOTHV6VR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCrcpBCjxGZb%2F5UqoomdhAK8VIFiibs4Qh0up2m%2BSzBugIgA0BTG%2FH0b%2BuxsgExGU6evrPNJdumubbLjers4LWZTgUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDKpd6Eh4%2B2T8Dx%2BoUCrcA9qMHG4i5dNL%2BArr0awJEncG9mWpv2P41ohlXKfzj1P4ufK7fS%2F79LzZHCaN9ydd8VNLaBKqk1vNn0pgc6iUx8mbLAGSa7WsjJJQ9veQPZslQXbdmuBHxp224JlHXHPh%2B%2FahQ3eGNT27Oxb6GmgSh1UOMQeWB6oEujLvJ6jT6JcOdzDptx%2B4l%2BmKfOF2OaO3eR2Ga3FsMsmfKU%2BskYuxaNC1Hud%2FwUpD5M9ogh8ZBhMjy2Q3e52dEgpQhcHephst9obKQ64b1X8FuOxvJSAFhGbciLtOW4QJHmqgyj1uROnOmFs3sDnb9%2BeytoV0T1mTzpvK8JjGQpTIod8C6SGd7qw4jTSBp%2FatGgtCkrIZawkIBMC9sI7Gx59cavhufysvu0A8DrJB9Q4OQ5viQSSQPtpdi2sLJDzW%2BfPsOdkjmrVX7gNJiQsOGxHPFPvUjtWiEoMeNPNOLMr%2BYi8x2B1c0nDUP8LUiNW3l22M0XR5%2FBl9HLxGAeDoY0iBpu64QLDVr3mSZlmSdVinaixSyfYyXt5rAgJTThszuCrn25A7KTZrnMMHJcBg%2B4x%2Fok%2BA2xpZnnBKZTz9zX6E7N59iIOSnhCFwZnbNcgGNt2aT7%2B1WonCt7VzwTa%2B7kQhzhggMIWHwckGOqUBLc5%2BqmTeP%2B56XkFCRM0imRgAgJCU0SQ8yyYDJ0hK5gIT%2FwL8naykXYRmfKYwaEapo8a12O24plaUUFd0bxFVeRJtAYz9s1RQC6TMp00pUBgR%2FUIWIUW60sBI5XyfmzKEI7luYNPoh9EUXdsP2%2F%2BB7lwDz9ASk8HSu0PTWVXP6dYEzxFNJA2DrA5y8HIdPBvseHwaXK%2BFWfQOL2%2BeznP7x7XwkHY9&X-Amz-Signature=3991cc9fa640ff0bcfd71323ee3fa5cba299f6613f57183a5dd6d0dc06eaafce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

