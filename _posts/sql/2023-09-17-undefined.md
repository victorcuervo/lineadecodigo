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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2YITDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDF6OSj%2F%2B3UahPR8NuL%2BLlmLjh2hW1cBJsnSuLU8xXaugIhAJaMPVosbRBCL1u1WqS2mFPViZWSAyZlC7SLTUJoIIx9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzhPJiMG5TBoVE6HWQq3AOEpjJqq7mL7XeNhyQnP8o9FV6OMO3sRbZSF441a1QNVdCuByEZsSc39rGI45gQgK05vl5eF9bEx3E3Ec7ehPnBBwpqUBTgFaDpGBOR3E%2FWuG8KMz6VqwD2vXpeXHFQ%2B6gIwar70NMHnnez01T%2FcDxO3fOWBWHgDXqCy5J0egrNllXDrcT0lbLpqtJi3oDeLPGEAWCP4gXqKUL6ur5AYUjNLL%2B4GTosT9pgH81f9LxbeAWh%2BorNcMWqpXMLLAULesvm4XnkzK2SHS7ICuKj4Wa%2BDGUCPNGlsFVtJpiwhxOZ9R%2FlBHYq8yj0gjmYJvmzr59t4H0ggWvD6bdaQz2c85T9rbCv8vtP0k0QXzRZEmYl41GRtssN1B4EL1%2FpIgRwbOxfR4o2h8igB4MS6KYd4rKCLtSi4lZ%2F7nz40okpudJdZOI7EQ9oS3ngJpk0d83vypw34XCi37rwCJtGrmkMyvhRsNBXigc2Imq%2Bxn37ip0Sl7xqhzN6CSSkxENydlpq%2F63taoG4fyqBg8T5FTXeYTH5Sm4C2rFmFCYCqx4rzqdPj4i7Uj2e2f%2FgCbHUV8mDCrWwK%2FXBunbp6I9JGX0cR%2FERvMPFKYYseg%2BKG9lVTcNJ%2BcV40R5oUoeNLoQrqTD9lL7JBjqkATS9vNrWoJibHHH2amF53fJEj%2FIQ89O2LKE60Zl%2F2bAhB0Ba1tafNx%2F8yIJTg80dVkBoSMZ%2FfVav2gQ%2BAbZlBjsWgBVHxJrTnTNF8Jc8OBQ8aWFebUY5xtmLva0LucNRSSlIUA1ZBc5Dt%2BKe5QwNCnZALsZoWLiBaCfNhuVwxOLOHnxNUZc4ukBV%2B6JjpUfFKXbG8oZd1xxow5A34y2R6UszpFUe&X-Amz-Signature=2dc7b3e5ee5be371d90405d80e3705c552a4da0513a90184b666f9d5bf27d98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

