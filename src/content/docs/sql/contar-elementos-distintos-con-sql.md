---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIBEOEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGDHXg%2Bj%2BF56o7Rite2sLP19eGiL94oshzp8eKI9HeXQAiAP0aK6zmU87llLGQCVhyNpo%2FSWmJT8sThhTEs7ol0ewir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMnRw2rkFQAxZQr21vKtwDDPX9m9ZqbvwqpP8x6oFEnqDF%2BPM0zGGzhFw3osXy5FDlLP8yVJrSuAbl44fSEUEWbuchHFSW%2Fc4Y7RUlQSfpUBYJdlIlEanzj%2F0bkooBzknVH%2BboaO8WCyO%2FjXI8XxTFWVPZXNZISbM%2FzDIrXDtNDbPYSgYNoeDOxzxViZsNk30tZBv55HonRkKUV0u%2BRq8FqYL2NedJ9T2p%2FXYFLAzUqv6X86bzi2Zx%2Fc%2FYifIYS0mFJsfj%2FGJtz0vfgDeQy%2B3SakiD2nuxmA5jPAN35kKCQX4iYshazFyC6N1fmK0VIft0RUhDZ%2FxbqLaHHfaKghvSWSW9HA%2BT3TyuD5aArTyeeDXQU4M0AQI7PtVZcRGTyHDl4XQjr%2BrYHJo5lgws0M6zdB%2BATwc0E5KYZ0uDgaSQj708OBD3fBVTvUrypBZuCRrbKnDFaCfayMzR9%2BGE83fqEYDns4arvgHIJ7WtyZRbxSH%2BgffXfxAZnaJXo9HgLsQEfN28%2FWUv1mOLjN9%2BSJ6gexFtfX6YnRYAzWZwWCO72ywOwqskqW8LUM1SQBy%2BfiCTHra5SefjliGfIBZYRexdVK87v30SPVvxmKz7MVGM0ZIDjaH3AT6p%2BSy6HkKX6ROZUYo1ArxkbKHNjJswmcvEyQY6pgHy2bX1o9yR6OcsOVLQbj%2B5fhit80FbTBObqYBmQXur0320mAxOioGOLvsMFPFSyV%2BOw6YzyA4AwNArbv02VtpLIoHjFxpnmwfFHqPPD%2FgQCNR4%2FLLWOPVymsic2jl1H7hukmHdH086hzjAXBJ6SzmZv9Vqvww2bqgpk9wBobUDXDVsjs%2BhM4%2FQOKeA0IVuPmpfuFY5VyURdp7JPLjOvHdXF9Y4IJTq&X-Amz-Signature=8465b2a459ff482ee3a4d66a9f4aa6399305c452eab3d8a491e3facdcb29c989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

