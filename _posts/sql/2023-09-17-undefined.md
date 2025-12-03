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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYGYTEM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCFqabCamDRHb2KMPnKBPzEJCIFPbmusshVj2Zlg8c7SgIhANxJpuHVgEGfjjkagCnm%2FobSH87jl5jbO81IqkmHUkFWKv8DCC4QABoMNjM3NDIzMTgzODA1Igy0z3xZl6741oTcUmUq3AMCar%2BI4%2B9TmeVNqcY9I%2B17tUGsNBFKxrKox8bmuaKwzqoV08onaTdpn1EIEGpua1i4lg4%2Bqllo7LqIdiEn%2BQUeS4Qoo7NqkebTs%2FjJ9Kl6TDX5tXY4GPigcC%2FH5dfEqZPpLqAnOqxW%2B99koVXNWhNz0h2rU7OKlfXUATgdFuHobBQEnFYJrDSY2EzMn%2FIQDfV0%2FaUedxlG7jfM4E9rgUzqHCXm3CgbQTU1svpF67nEttT8qvOttKxcEkis%2FJZ7GMmzs0c7Fh1rVKku3Rk%2F5UGzVL2iZaG4Nqc6AZsicA6Rb4JEibBjVQqaaZ6CPe9mpPpmReUIbqQQMwNZt%2Fbc9ey2c9nqEm5aEJmVvHy0jKaVoPn%2BVIOeEnRcKZNGv6vHTaDn3dnVmeFH5iYRGh7ZixYS9QBzEeoxfMn4rnThPnoPS4kZ%2B8dAus%2BfpKLk8oe6MAi93ZYkwOdbY3FlAFwnXWcbi0toXcCCMd0PVyxXWOnk7EwZ9F12wVLStveLvMC%2BN2KBj52LDgq9lXRTH27CoaucNjCByYa5kGLrrCzn%2BZbFQ%2F24Q15m%2BiFyWovhPCtk1GNx6MOk87YSoSOfVdiPgUTPhcQgXbjOKarIeXJ0ro%2FQYYFZp9N3UhLeTUaSUTDt6cDJBjqkAb4mtKPAXzLe%2Fyi7gFUjl%2FAqWhaXBxli5lpzUm787Or8uO8ppI79CL9SIrYyRu3ww1OUIg18HgTrQHPsLuPK1JJFJgvny8wEhuKfzLKaMSzS0r4hG0e2qCRaihrTvJhJ2zRTOBOEJ%2FmIlzFxaqBYQ7RlrdaO3OtNj%2FOoAsmi%2FEHraiOLbJexvq50pWI2%2Fcqy1aPbl2FmUy2n7SW8AbccGk55XE1l&X-Amz-Signature=16ee963644477da6f0fb03908b246bdc264f729817debdb409b95c67b868f8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

