---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XHZ7VIE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDG9JCZyGjJ95vz3SMeUAv2u71IKyEuqQ8W1ND%2FEFsIwgIgUb%2Bj3ht0C2VPaz%2FplkmsBYajjH3sl0uULM2lQ16u78Mq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOmZeIo9%2BZGjjb5ooyrcA1Fll507%2Bn%2FWaErzAUWzVJPZCvfai1BfhgyJwlSpAzOQy9CvI2lJJGeFzDodHI%2B%2FHkVrekGTGzRG0PXg0kHqVyREbMIcDMNMgNLEUccdr7t1Jsh%2BnOwuXxh6FLcx%2BFR%2BlBxKbPzwLcUUIRyKXc8PunJQ2mInMVNByCGHb2qTkP5Ycyg%2Fe%2BFLT6M4fUCKgq05cUwKmJY%2BKkSZsZ4okZk8xOEJh4dqYOqTFUKVnE5C1oVA4qCJW%2Bg%2BPalnnc0NhBpTLInKv%2Bybv50eYevU5jK9LmSfyUcrMxkGNBPl4Ikrw73uJ4J2UhmTsQiaiqyuM54zP03aOEkz9%2BNKNh0VEvPAEAkkq3veAonPWeBNSMSp%2F3P3rDz%2BZP4DfwuMiVzmWxRa7XC2IXWsFNmiAtnK%2FYPlQQmLNUwWh%2BQ8AS5y4CaAhsdAhwQYWpeP2g2XRyg6tbrUqpNllpuG2FJiOp9RZq2tACr%2FMu6xbR4E2ukXqUVv19pRXTtjmnDcnV3SVxCYk4KmQlGnTrM74plNYBj1ja5t%2BQgZE%2Fk7cn9bv%2BAyfaMftpioa%2FDngSttmLgLg1pTwc7K%2FEyL04Gx3BO4iaZ3pAd572XII04uSxIVopdhakeX5o8gBXJOfmAXnUevcEZhMPm%2BxskGOqUBJGzQqYkYDSYGdR0BNECra5MKiAdkPZLPvwjM1g8E0kdalBwVoqcFEYETIXqGM9uFAT%2FJM8BYMGDpgtWxkA4Pqx8GQxVeo73QfTWoMFJYs1JFJRE9WpMdbenYSW7UX5L6qnABxcI2OHXkDNc7R4slRl%2BP1MiuzIHN1yM%2B922cM6nKbNmeb2gulTHrqzbEAPg1sEx0FVl1%2ByxrA4rcAV1sIhsgX3WL&X-Amz-Signature=dff2770a72d42cef2562df6d4794042e24bde3e8a6efb9bd30810da5939e97c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

