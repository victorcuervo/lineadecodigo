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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BMLXK5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC89ZkqGaqEVYk1%2BgdcnBjEsggLrvW%2FJ6YGSbCrupks4wIhAKsivYDsxNu4wSGlQ7ICGXyd7yJtXBgPabyXYNZj8EZNKv8DCC8QABoMNjM3NDIzMTgzODA1IgzVAr4WPuUd3Qst%2FK8q3ANuGlmuwTS2VIeNu5GKWZY6G0025o0m2Evj2YmhXn1Dke7mwyQ4xkHbRWjOyRZLDZUmuvHbeoiaSAH%2FpG%2BuCB%2BM1ddXRC3GTxwc5DJCcSGFhJ%2FQKX%2BLboDWU0%2BSNi%2BMq5Dw6YgNW4StCQiSOY1r3qLVRmU8yEsAaDrwY6OFe4Xn8aBIrnDuf8bPIP3%2BXT3iJwBsdUztEwtLYDlvuAa5YY%2BA7nBBIXRzH4%2BXIJ25U6ew9pc%2BLO9SKSMmephXp6mjMMG11%2BPGGFG2aiBy%2Fk1mGcI6pVCAeX%2FdhkHyzwFUh8m0wpF9TxThpFyLurHrN8RcV31kl9FmsUeLVpNqOuYAmm49JYr6K%2B4kIh0QC2ApG9%2F4GvslRjsVbehFGjm5OMa%2By5b5JI94QBH%2BS%2BH1SIlPx9Z9Ow0kwf7XbHoHgrYdhBnC5CQoCAW%2FdBO0dwRtzlkKgOESJl16X4Gw8bV7FzHD79tMNGdFW9LxK0LGCbRyO8SX15XOlEUMHIxlFKbRF%2B7pgcg%2BgogPdNXFTKayHm2mfNFE9WO6o29y8klm6%2FA6uyHc1i8wmZqXTe7jWFYx3Rs7wB5DHNTeP3U7rj49nfAmwbnMI3TSGXcjagyjsbPHhWKcsKjk8Vo89LEiJqxXGjDsiMHJBjqkAUp1A%2Bec133oC2rlTEyydvb7NIJJBP7eSnnVseNF0ZwLA6YBzH5UMqxEVQOkcGrslVufrr4sgz3yW95YxP9%2B0RMCON2E39ZOaJRNtkeesle%2FKOQ%2FO1tQRVAZljItN0QaAvaouaQt%2Bh4MNd7WpfTgWpBDEJXPdFLGsn%2BUlrZXwd312FgzKtTvk0RfAR%2F1xsWN%2F0fdgTvwNsRHIOWeD%2FCy8gan29up&X-Amz-Signature=7d20fef6c6b3223f0627e899cfe463b77ff2a6a3050598e05af425f435898176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

