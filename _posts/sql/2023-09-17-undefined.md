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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMITSFVE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC0Tqy2gXPhrqCoc%2FG8aKfOBrm5J9AqGpnuz8fKpDOGPwIhALDfYv6naQl0R8Wxx%2ByUNs9Swx%2B2qsgxySEZdD%2Fa9CGHKv8DCDEQABoMNjM3NDIzMTgzODA1IgxLwz%2FCmO47lrtDdYUq3AN8vVAlb6cHGPCx42bZYDIWZeUfhBdPwtAWNMJq1kAry%2Btk7%2F%2Bs7i5W0bEZJNyenaZ6ZgHONn7V61pLZ%2BJdKAJ%2Bn%2BrYh%2BN0Ut%2BqdD9w6bwBc1Z%2BERL0mSL9OvFk6mm4aLjG5mTHFOT284P6IPssLm8HF0ET5KsYv39z2qrehYB8MH0b%2B3fluUVy47JQaj9vZGnaMP%2BAxAtfeYdyq%2FTq3SlAyHnO3Rd7kkIqoeQVabnsSzv7td1s8yVni8cSENTkm83DIAme6cZ%2F97DKV5ZQUlox7X%2F5Mehfcqt70bMUuSqU2JhmKdH724KSt9eQ%2F5euoetx%2B2G2Rspr250CtDoyFAbDzCOkEmhZs2dL3FdS48DWw9GNBcr5t4lHPHIE2G9v2gtfBI2LownA6UTEy8a81wxFuSj10b6XS1Pg6GXbm6T9kBYMkXPg8%2FeCz98W6EB1X7qL8%2F7owkWNZoACc7o6351CJzArLyb%2B%2BVRGH2nBc7CVP7k6PVqgwmU0W9%2FVHP412xZjSINJspW6R51ziCkbzIRJEPoiZ6lF6Ea1Tu1kmXjpggZ6z7%2F6xfsdt3IA2ps1Z4kwe0Z%2BCkQPeIXp0LQd9PvO2sme5eW2EofLeIhiMQVeCZP3nmPQLFsu3%2F7S6DCfwcHJBjqkAW6%2BbDiWh2Ck4in710Z6gOXgTTdvTmnuuMGY0GBhlu1IJjJTYgxWmmLgNLSUO%2BfOl762mVmaMRU%2FtOwFRfNVBTBVqQA4HAkwD9FuAm4vuVm43y6vU9zE%2FnR5%2FULxITsOYRaBG1v6Luvmf%2FaKXO%2FxFBAO5Wv3iBsDAfqPWUB8T2tj2zfU4vU9i36MNmytNtn4qEjckRuLrcSmUKRNf11Dzsm%2FZCJD&X-Amz-Signature=ae9997f280496000a324b5c559983b7d3158e7c76c348092a3a2b2dac2184eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

