---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G5SMEXW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCSCsOgQXzt8IQE8ncQXOcZPs5297ghG66xTIg3VNg63AIhALr0Ay5IMbRAd%2FF%2F9SNdMHmF0OxzHS4eiIsE0hHjgXIiKv8DCD4QABoMNjM3NDIzMTgzODA1Igw73kiY7Nn3oF1WQuQq3ANN4%2FZ655Cv9rKolDCO9yiLJhqlNY6iDqT9IW%2FfQm7OeDsAHnTaDd0SpWyNnSHE6B%2FpxNYqzssnDWRfyaXxZqbv8fMt9Wvarek0PZrll90WNIVwCmXTNROboVxKNpIy2%2FWDj4klGaSq1hwdxWxsDZuAdYeoZ6%2BZJSNGpeL53F%2BAFBij1%2BQ0BVmLdW1i9tEYTGesydrp8H3axrwjv%2FPZWm4HsI1SrgfcLeHyQgxheCevBFIH%2BhmlG9iJDF11Z5XBxlEHgqlEY6b%2F3CWKmDG4FAUUYgOvsoKq%2BUR8eN%2FHktMs%2BrKnUMLIg%2FP6Q3yd5SxZQGK%2F%2BdJAPDhMiuiO1dgFaNb8p8gem%2FUR9M%2FXZZkS5q9rkVGVzhbUTLTfTkwXaXG%2F8mfGf%2Bn2MVRXIwfOXakToS0kOIbpFllj6gl5GLEHWOfc%2FKuwLxKtXOaHZJ3JfMl%2B5XPSPiMQgKgXwvA%2B0KiJaXaApBkxcRzFrR32UHo1m4PlTeKMm%2FM3bB2xcRueJdNLa1G8qqz6vgCE7InWaAJTYS8UXSBNFU1c%2BadrnlU1Ox0H61Nr1V4wvZfel%2F3vr8rOUe6SmEUivS%2B3iWv3UjbIojTEAUJI%2BG1ZzdQmR3jDd9ghNibJX%2FGfxFF1FreLVDC5rcTJBjqkAfjskWdjc29sf0aEPqKIrHgi%2B1dKQSUwMsbMPhuNtR0bSo%2ByuOI%2B96bqSo%2BG078dt34CgIQ55%2B2QXM0ZI6dBLWqmwofRphXETH0p3mZ6UENBQVrzwkMSaqWiPC2CQD9p15mqGKcUz3HYurUAsQ5rn1%2BOveciUqWZWppN4SuYqyx5AmiusidvTCIEsDySp7wf5U3FxzKFE2p3XzAgmtlcC7GtIHJ9&X-Amz-Signature=182cd3758841abd0f4d6f875d8fd92c9d1a3431d640281fa81aac3440a3e272f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

