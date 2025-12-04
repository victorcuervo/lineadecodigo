---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SYLWS64%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCaCfBYFNkiu3vwRoZvIuLk4xo1W3QOgsaktG8VlqDpVgIhAIC7NMP9VrI4ReHX1cOWolTFZsaadl40f%2FQGJldOy1rEKv8DCDoQABoMNjM3NDIzMTgzODA1Igz2w6mVEhGoWGbRLBcq3APjjN0jLvmf2rKZnf7Z4LF%2FRX896vQZmrQ3GOWiDH7s0%2FsHyIN0DKl0THeDo5B2tpSPPPSm3LOj1AydAikoNMtQIB1%2BcWmmGAM%2F1ARxES7w8BFCIvsGKBC%2BYlZ%2B3Ymd5NgMeqHdcJfbKNS96SPet74Yi%2FxdYOB%2Fb8fh9aFNytiNrvXqnHTx6N8qZzmJnp50pZ55IoFgPhsA4CI5jqqZlw1UN1ba%2Fi0kABDjNkRJD%2B65lRJNwjQaUVciPOljDyoAXxqa%2Bq7elM5rGt%2Fn2BwMD5ZdD0LvcqAR0p%2FG60uOQa98ZT8kBrjg1ZCrxQJ%2BN4q9%2F8%2BIj8xEpv8RqILkEjF%2FLbcBi67Pv9lNQ31NKdk9AsgFBwGuzo1X%2BJdDZBLvFDnYVOPuqKPEos5jF9U0FYpyM7CmWyeZk0JzYg%2B4kaNawFzUir9E4yCUomsIqNAZKTHnQrdDNOOMbHOtydtQ2bxDuaWSrnWuQQABjmrvhggwNN%2FM9K63Geyki7Xg9a1igrlpdRtDFipEEG80yNQMbylvasKR%2FZS7YYZyVNJlKX9hI3CRX51V1f%2FImkLszWGZIwz6WTtEsW%2FOgDVrQsfXQntk2Uy4HvcKkROwFP9mCmMqOSTqvsw5S5vIQ5TM7%2FcEHjCitcPJBjqkAex1hQYkbit7lT3LTBH1Jy4%2FWzGw5mggoqfs655cMtg3F4GXldRiOvuDjKyAVVaXWpd5jgMQ%2BT6%2FnZuGEYfbafchnob1I4479ImOooRH3pv9HWN4FKbknoR8i7lB%2Fe9uBww7%2FHqhgwBfHnhPHmIDIbm%2BHyPvVOBeK1qxnWBLaW%2B7yonGtoKyIBQJs96gVXyHgQZsaIaUZ5oitgPSxmllEl5HWXmB&X-Amz-Signature=13bf7b08115a4825b0fce1f35bb708b302442f5b08b0ae7a2222c3d1853b6e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

