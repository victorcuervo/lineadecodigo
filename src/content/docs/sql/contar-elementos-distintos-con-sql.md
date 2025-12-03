---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIWLY2GS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCFQotJBvTvGjQGxkrFgcNrDlm1rytYkTYfFLtGGPxnOwIhAM7bsDFcEkwYiJrg4fjsBSGm0631b1hxtHkE1DmR%2BLBzKv8DCDgQABoMNjM3NDIzMTgzODA1IgxITeXpFXZDP81BLsoq3ANNYGqhyapdHZ8TsGCMayShfXAHD5I2R02JzSvXHuta4PHOKfwYbNRjN8wUeTDF7nh9X2eu%2B1pquOGHtgJXP6G7a6XBfGV4UgLd3ObnWERQDmpiMLm%2B4ArLPasJyJHZtP%2B5jlCxmreUQ4HayAvhNGwrU6%2BuqrSNvvCRRCqKz7r1ZV%2Bf954hw7nZOScB1XV2tGmMwOC9ERGJazHVYoIF%2BD3MqoeWQm5gotrSi2dhZoa8qTmXMEwfWAgXXltRhPNjiBtJYwoJzQuCG1xv0MuDcRupCdEgZgz1ZxPvgWvIwV4lIB4Ki7GFPWT4S40H1Ffsm5qkwo5SCL9DNTH2z4fjI9HuPxlxSgQmQ2nuWdlDdqSdJA6ZP%2F4Jj6oVIh4UEJUfT1FkiKDRC5uAd0F6%2BXT4ZebU%2FqdwQn%2BDwuBpmjiIZ%2FVZofg7vwYMImg%2BlezZCJKaRSoqsEp5WpK0dS8Y0YCbgPM1HD%2FQvZ6IohzZFJuP6OsE0QGvTHPUu7zWKsibAdkv4gdQM9a4ECfpHbOGomRCKW%2F3UIPvOx2QHZx4K9QyFDAJc8ZLmZbopOSIgqjwQcnrGHwqszKJR1cILuYDCMqZ1g1cg6j61KLLfHfRepQAu1P9Cat%2Bcslg2SLKa26%2FuzCb%2BMLJBjqkAbC4%2FyzZULDwhFt%2FrfIBrbGvvVjbcE5Wqv29T1RpxkEWH3Tz7%2FId7YJgYqXTRebUibskrC9pSBaeDsiJeCbcelpQk9Ij7eMkM%2FXDvPwOvSypYwi07JxioZSNkPhOaC01w2fNXYq3AOrGqNS6sOt8cU75xiDftr5157XMZjxqokcjxRaPB0xnpooCipGC1qIkZXSSUlCcxi6MThpSjwKZ0sXZJYme&X-Amz-Signature=c23858990c3bf3d702d865b2c54d96257a6fe7243533f1fa50e38ddef09b793d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

