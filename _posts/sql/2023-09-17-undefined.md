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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBXLWQM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAZY6p8DW0pyQs3tm41omqlkgkrjHGOrqlxmZcnHMoAQAiAe5N4GVD87nyCHWOIaG7QVOr69w6nK94pokS3b03KmcSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMjxVcFtX6OqW5UPWVKtwDHPU7vNMo38%2BBj6WbiblQoY%2FDNWjCRIae9wtrTfEE6qMDE6PN39VnYdAaEuqBR1gh7t0y0z5Ae2FrAl29AzDGna0DVQEaU5XvThvF%2BSbE8J9JvcM8GeXf%2FHTvnEVsoX2NA8ST8cQyIbQlyKF4bWokTpwFYJkiYy%2BYle9%2FLGOR2iTCl3hA1XnHP%2FcWnc84%2BTnu3VYoLSaJyUTT1dx9TqDXvPxpVI%2BDsM7obu1b1vH5ImSQIdamglrGXqxaABNSsg%2BHUtDsgNf4JQbtTPfWZxZdze5jrNzTWs3HVypM3e%2BWMvI7iZ8CUpMrxFmrrMBwSe626BMdGDuUJAZdtjv9uHjKL%2BTkgL7nHDoPhuS6l1vYfd6WFuTtze9JxMKkvtokfX4qgw1WZuId2WvuURDlwdNRLg2Dvwh5nwOFY2BALI1WzN3cTtTsECwsDixOpassRqntuJIkjDR3Zp1yIo9mSs%2Bs855TRuPKmku4%2B%2FcwizFD5Q%2BLUXxRCbSrvI9fbARJ8zGNJHG0yqIE6QToxmw9pq5W2Oe186wOg6PhLSyQ8mPHJzdHqZB6WOQRFnN3syJMngL2ipBORftJC16EwmccSa0Ci1c9dvEW3TBTaOCe8Odt9MzlcScVuhwTOVZ6sAwwv5W%2ByQY6pgENaNJJbLgChQFlxS1S4hL9iuWJIRRuA89p0nCF0HzXTUFUtF0FcKms5Ri3m%2FPz44XK2XpziPMC2UFR%2FVhGKkHVoGwrlGt2iL1Xm2Qwrvn0jJ6AlbSjwR5KY3PNTje1bn2pP5zox0Kq7LnY5A5sYIBxDg14LSr46U%2BfAfpfIvLIa90fqMitzewiI6Crf7U9U6Z6ORlw38Uq%2B5xlp97iTWybEGzFzlqu&X-Amz-Signature=3d1b53591f2f9faa783ff4b456a98877e5922aab253eacd473cee37ac521a61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

