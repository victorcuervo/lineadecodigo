---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2HM7HM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDONjsEtoWu7LakWLxH0Rv1ORxmJB1ptI43PvZYODD4FwIhALVABvrwkD4uvtIQ46GN5hc1leau7s3QW90KAEK9RuJvKv8DCDcQABoMNjM3NDIzMTgzODA1IgxaKIKHrMdAFvPr03Yq3AO3I87M6DPvBXnOnZRsccPOXdsAiJlFh%2BQE1a0hDdEQ7x4XdFqZqFOJZBKDRs9%2FQc5IyKAncCDC8bMLLk8KswykzoWyN6%2FdGp%2FQIShj4qZqZTBnZ1CJ9Xqeex9qwecsBK%2BAy0WfrzLU%2FvQbUVqKmYOyamBDg23iGnyyOmMj9NQFWwWb3GtFLzYv4aCTO4HgFmiADKVzdijigMiuwAEZYyCaNUkxJoGDINPTDln1PUa2Vta2NERIynI6OoSKP3ItP2475MMoQnEXqRghjw5TdzRULRFdvvumYATTxbN1zjqn%2Bk7g3QZ3Ms1CBqu2tmRFE%2FielLMNj54lV%2BlTNgjq%2BAIZYKNVtZLxEplXF0HtrifvhmhZciuJhdua8Q1Ai9qM28YZgTvVLWb4fTle%2BRc5PwrmxYzs4L5my5Mz7%2FyusphutaZg%2FmX3OQA5UDq3DrEO58BNf13%2BkoM%2FYjAvtPaUUnhCW8l%2BZMM6voEieigwqwIx44S0vg9SM7IblqfMiTZ2dFrF8FaVsb8GTbXq6h8fFdyy92USrsFfRVnklCdINPoA7WaKdQIwRTa9zguMHxrZzXwvtDm4H0axaOMUKflflpnL%2F51hJWBrNlyf4XTPk2aaMC6QJbMlLxNy96WBkzCs3cLJBjqkAXKpTFnzblkZ6OPhQoTfetJI%2F2QjAKcgUSh207610BNyGaZWOy0oSqAyIf51kBLzoAUe934wwUb4zAj7eaLZlSTUWdm%2FZh685TmaASMEP6hqiibaPwTlX%2F9Se4EJS1QYNQft72Znk6OytcZG5MRss2QujU2%2BhV1RbB6okapvcWHmsLUZ8CIWjAAo2FoG7KqV5%2BO1eN%2BX2k7tEG02t%2FTTsUMDtpMH&X-Amz-Signature=82812c2ce188f7cfa911c71b97abbef3bc3cd100ba4f92a3586e72ea857f4633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

