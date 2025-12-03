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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHA7HQX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCthFOyu4gIr4%2BhoAvadXSdO9bLbYj%2BzH2QjF4LlVUjPAIhANnxy2HzbNpsxSMrrX3abX3kZof%2FA%2FDhJeNB%2BOQC723cKv8DCC4QABoMNjM3NDIzMTgzODA1IgxmOa9syiGqA0cpar0q3AOEnmzWsyK1t3%2BZ1BVDGQkRWzePxidh3%2BFwhNAyMd0ngbarMrrJUBwaZvBVG56uZsMiGJPQ9b9LAyKNEXrH76Spnv6uvrHU9chbefT03Mj9M7sn4KZKJXOg3C0k23sB9g0aIqeBiNLDUlWqMnhiNxdCpTJqNEqIzSsxVylv8knaZOtyra%2B0tHaT1r4ybgrlahdkiO0REq8OJ4CpO5Wg7o6AXspgEIgawb2RZMkd%2Bjd0dG2IrulcqQGDuJYkPZQlO6Q7oIq71Nf8l1XSwHAK9J3tv5uMwNjiMSkuysHC5%2Bvedyf9%2FpGxSP%2Bi9ZR1OhkIEFXakUu7tvGaGyjef6DmazoEHsjHmP6hKoAFemfRWK9XdFFJKeb6JPREgNPpCZIGuut4tXfR1nFIm63iRnF19zrFDOlgywZc1Rjm%2BBf8%2F5pgL4upPPg%2BsBkd8ysphfz93AafqZxUB5u1V2A22KGj3Tg8Yef6F4%2FgyKOJiJDfIz95W6caHaCFyj%2FYpj8GIlIA07zdKjA4gGgBHSTqvGvmVzbPlJJXRSc2yfDbAd2van%2BQSuT9IO6BOQHxPF8HIVdE5GtNxWoK6VvRB5XDpajsvQoogxDVjHLrFeBCBGolRzRKVrTvfl3LhTKeM5aB%2FDCI6cDJBjqkAduA1jAPcil6iNFa4oZbTwSUW2yah17Qa4hoXI%2FZ0rtRey50Peey6xrXcG%2BsCMyUZk90p5le4FK0yROkwdy9yfW6qc2lL%2F%2BZ41df0JaOoTwWaFD3GsXhuo67SoeigrIy9DkWaPcNYzRF2uRovKDmMii3ukS875oQhDiuX%2FYld7PrDn%2BfzLTCXfR%2Bqu52jXIbnir%2F6n4BKql13qEFamJ%2Fg0KmmEKl&X-Amz-Signature=98ddabe4356265e884f970af31b67ff97bd2db8aa4c1f8645669a95d4ce021d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

