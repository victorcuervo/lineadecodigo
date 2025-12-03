---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2QL6D7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICfy8xNNSxXx7%2F0S9W3OI4H7djQrEZwZu%2FYtRG%2FDKYaUAiEAiHcPox8xGri9F6mFu2oV8IJ6eOwYPoi9DodZphcqmCQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFzRivPiCOxASGW69yrcA%2FPuwzfhkO0ZMJZ5xJnTpVIk7VqQuHuyC3cj5Tp%2FPYN4GPSEcqf0riXoe%2FqAQLYy%2F5Q%2Fo79C3RpYR4FkZsjNTBkZCTLDKcgYt4d%2FV25Rcifdz27zpqGOIRljwjpauv3Yw84gkXQGIoX59fI%2F%2BIFlqxqHG8PW8qfewsOHLv%2FM%2B8C7Q99M32xtejJOBtJdKXbryiNMYPfBeE2wTAv77yPJAnuIt%2FxIP5%2FCYUvxmkMWhc45meWuXbh1ax2XZTufG%2F5l4PUbNiC8VzJckT0T%2Fc1rKGCLznv4T7rYabZDwlUljDb7nG1p9B3rQ5JQ8Iy1s4aOBQiWfckNSQRfJvLBbk3b9NpwbouGPDMzOwHOtQKKOGdWjF4Lo6EDNg6qXrwYTJSJB%2FkkSrpuCjTHfBz4X10czJmqWGw7xpi%2FSWERR0Wv4yEvONpiW10lUv8GBAAbkGQjDS5%2F0ZW7Jrw0xuG53bRCd%2FCDN0icAhqT6rTGDmHwu0S6rBGyOi2T4Nv%2FpF85jO80iKotF8XTlav%2F0zkc02PGzxfixii8UbKviuwUspdLyKYN4VobeUbfcSnEUIVQtuWZtMorgM5b%2F97ZpFw1KIODqo5M9QozXrbCm4yEG4rVvNDXUs5gVnYHZMnULRmMMLu9wskGOqUBKG9MmEjKyHyugRwvkBldTQeyi7kAal%2FZ9pLIxMdVa%2BMAJs%2FBkAhqjZf%2F5YQSh9CZTrkHfUTJak9Iuw246LdZmlOuR9ksL5QbQ5bosuMfKYsUzEdgwyxvQyXYMNCV8WWLdbvvNKWsHYJuP3Z4b%2Bdhk5AG8azMJN%2FuVZk9q%2FEfsPOTTMhn%2BwhFK2vu3OYPpKve%2FQWlkBuPACoPd7tSjXDAG%2FqjIfMq&X-Amz-Signature=70854cf62e8571ae1f589f9f0e741bde7f6bb5a8096eb592b732e362ef3567af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

