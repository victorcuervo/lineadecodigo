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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LC6ZXRV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDOxtjkFR%2FTs4n0ECZiwsxDcGP8%2F9WS3F02q5H1iZMqNwIgRiBqxEDCBXifQIXk%2BXiOGo%2FTUx%2FOfFvXuOk%2FAvreqBMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDF1B1YecvX8C26UN8CrcA4KnKgGH%2B%2Bfqbbd8Q2AEd%2FDDAvhfYht%2FIpxfzOxPJTybFf9cBxRyCRYZF0RZPqR0BmnwghG%2Befo5oG3pUA4LSnmESqI2U2liAPmUL1Q5flXPDsOaAzwxFYyqw4BeaIlWINd%2BQc92jCtT5GiNMlr7Jw2wrH0MjAGEcWTLcIQf3lKbBHoOmH51IVoyaIMSBwTcJGf1QB2zzam9T26J3mz8a5aSm6%2FI5EFkzzrERSq%2B7bwCl%2B68WxH9Ac2Kmxeg73zsUoEX9FsoWsCvnzUDB86ZpTFp1qQ1EtYB1WWDaKbowyglXWaJohUHQazpJjV56Ffb%2B4h2NYzChBRpBa2Onylvbbq%2B5BxHUIYECqABSgS29RMEs4PaA6dPhrZ7aWvBWNXhoVQgd0sJ%2FmPcxPuUYRtyGKmLLqXafOQPSF0reJpSlGIt6UtRAiIDMMrJmYtyg60FfWiWClyARzJbe0JciQVIq2nkdWiXIVNVVxX4YFs0NqGyfOwVETnNF%2BKgbhP39OSx5DUMG7dJVoeboXyahcVc4%2FayMczaNU2i2R%2Fy1NonE%2FFZWmwIiOkxtAguJgD%2B2yJi7W2%2BomXWoRgyabVRXTxPVO%2BHOhL2zazoQI7zn1ncrMvUPf3ddLbCfL6Af%2BqjMPX%2BvckGOqUB8g%2FmhgwnKIguKAqVJnwn3RCTfNh9s%2Fp2Bb0lUTxlvEFPot5xGyUpWw0X%2Fdas%2B4Ms4GT1UZ5OgN9C1NC9im9atIzQ6z4%2BeqoiB1ijCUfns%2FBSq1Q4aximHlUaTL1Fsll75qff6zMGbavcqYF09ZNVMFA5pfAs67QOd9pgrmlZ942LPr4V10RaLaDujU1U7it4%2BpdxiJm6uZqcMJmqx5PWbV04a3uI&X-Amz-Signature=e18ab8977bf5a63cc81dd1a685a4d38d6c5a4054407be845cb1e08de4638f81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

