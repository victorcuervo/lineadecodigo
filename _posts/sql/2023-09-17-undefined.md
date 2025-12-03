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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV37CK2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCHKX5WUAeUEqCEEDgrqT%2BO8LURqRhEPYPIjnsUsKdySAIgfpMRnThGoBxslCBtmDu649vIirX1k9TyIJpSZ4MXJyYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOOgi1tnpa2%2BR%2BQVpCrcAxkH6Pbj1Mn9W3tpLkn7unPxAaGXq%2FqW8R0b8U19M%2Bdqc6EdZKJcCTvdS0M15Skec5hUv8IpxgATgbe8y58I98YY4z2AYE3C8Ms0DYKwm1wIUMEcUmHoyRnaMBzGq2DV0tX%2BS9Wd4ZUcSQ5kF6zqViXQl5moWtdVS6famykLlnGcEzrYUwb6mnhdNz6erjSAhGQwtR28h7tToNJagK%2BuACOW2YlYZxDe4YZcmXGU6R4wm3WphvXHSKpNvJuUXTJg2JVNdeADWAM4szrx8CUc52ZJAKO7ObdYryL01hL4wH5OkqPa9h2r3tR8L4qHEI515ExC4FsdQVAArtP3AUVXHkPbrDQ71RDkg4gnat5dT0YnaODnmHvFmO6i6%2Fua2tJQlsJ5RZ0%2Bk0jxHCX9iOaXf0TfNNtvqHnlPVybpfCFzMtiA3rVcPexoSVz0M4vz%2BeBtlUIrnvGJ9RuSHWBOT116zERdpOBacwNcJh2s9IE8aHaksem1V%2FZgW0KgUcUqNFdRN7Q25X38NMvfS9ggKhj%2FOkY7CbueycZpwrqAfXb9Rah%2Bh5nJAEIy2y3vCdtqCeryiLjIFe5oHJAAfp1T6CAU3ml0HTEpaIOC9tTWmSNNcWS5VwANhvtRY6xNVAZMNSUvskGOqUBTZRfQC6IaghGgcviSH5%2BF1hlUft983%2BrgJCf8cT39zUE6vfY7%2BjGcWEMHa5x8YBWEmNqVtMlABnPjWlhzE7yWgIe3CFFGz8qfoc%2B1Jqh4OHt6fD6ogbTB6HvYi3tIexCs9oJe3lTogMH0sskVBUSSbRjqtByma06fRp2kbaoxqWo42y2sO2gvR%2FwEVE4OJMHozeAL3YLXPnT9WlkkJTUDzyC1Rf0&X-Amz-Signature=6caa1e6463482aa43a1ed9b9abdafe9b13bd01ef2552ceaed8d63c67a17acbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

