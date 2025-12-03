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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCRGS4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC6s%2BYipkPQcgZQuzcRy1fVHthrjwQtXKyVKwnV7ZhooQIhAPtxeE5FEhWSE9toUX%2BbP2TBweGXMdzzHrA1sE3cG5V%2BKv8DCDAQABoMNjM3NDIzMTgzODA1IgyhWLQxp4ZCAACKNhgq3AMtSuZXV16K8qslelcg7LJQeH3m%2F1ISQKK9yaPwE6g4PHS7jLVlEbMGmlQ2yZdGn2X1Bk5iHEbJq0q%2FKivBvpS5yP0uSlOtyqeasf2O9kL3a2%2FIA0W0CcuMI%2BnUlatKny5%2B9UB1awilsDaonJGuRBXrnE5n%2BZ%2FJOLWUVPeO%2FgdZ5OFEafyHgQV41sxEJHkyg0P0%2BpFQRATeBKViqqE8Q9EKLPN5d3ZJ843zO70ge8k%2BHTc57pHpFdIqlz2bEkn%2Fd0l%2Fy2f83s0YUqb%2BkoyD6ti8m7VU9H%2Bi9WC3EPpvbRF%2BVa%2FnUKwKr0YX7CuEP8ju%2BVDm%2BCvhR0FO%2BkbJoq9KXbHgMHC6xJJAqg7X6B1uExvugM5t7IYmwoa7s22l3dqcIbCWGPXawuLHs9Cple5h7TcTrgWz4I1iWXeDzoCvwnXMASCbvS8Ko9KJvqdDgdT5fXyCs3%2FcKMTn1aUh9HpsVgpVgt%2BvuzAnfKJC9Ner7ZnK24qgk%2F4jqH%2Fc2XdfcKRVMHQ3O7dwG8nGVYOE0QIZ%2FAwYJ3fyG%2FVkffz5YjlxlbYRFXZAVGwaWFMqR5qDuQI1q5h1EY2IgcoEiGFZ8wa5L%2BWug3peG3HO17QUvmEaYoDSTa4qwWopsGywC2waBzDCpsHJBjqkAU%2BxwopX0%2F4Xc9VooYrb90RroHsBZ0mRWt58%2BhLlT%2FkLX7t5JvvDxh%2B%2BStLlBCxAP6qMFSdL%2BVfkeOj75OswdxDrYbLe3cIVSTk9veE2NM4gMotUWTmLPvVMIsBCID2ZpC5o8hP2YVTSpGD3JFf%2F2KpjqKN7pKRA5O3IBAGs1mOWwUv38vV9BlTg8ffquwpMgDta7Qpr1F%2BHo%2BfcXAfrzlWy7XXz&X-Amz-Signature=544d21be33dbc6ea967872dc79fa05ec81f7ff681a8a0ccb1e7ba0a4e89541e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

