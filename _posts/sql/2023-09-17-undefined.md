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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDBYPZIW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T100458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAopEb%2FITLE%2Fd9Dt1YZYzCkAd5r2JcBvAC4l1zG0f7%2BXAiBYpA3rX0aui4l9bhhpIarCAtryQwdrMhDSugbwleKYkyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMakyD73Oln0NkuAPaKtwDq5gCIE45dzmPB3vqmSCgjoScJ%2BqpGEF9B2rQzyC%2BjQNuu0zPS2fkhoY52q%2BtNjKXVi9UvRa%2Fwlq%2BnrKU0yEANObu2%2FhDDdtkMk7KQBBbDhA6NKt5eEkZttLlw3R%2FRKPt2TvAXdDZ%2B7UfY9t%2BJOv2QnHOK8%2BpPBDKQdttRt5jYm7WtpNMVtVOMxAKEsXA0Xi71bNDm1QDKrmJd59TU6aJEUvzBnRFidZ5lHekD%2BA2ripXMf9VgyQkvuYmND93deoLqFQMlSiuQDVGaPaVRjddGdC9XTX8Lkxvgp3xoNJmfy%2BVxcbPdrU0ZWbaxOm3OEMCJRfySHXwJL0qf63G6v%2FzJ%2FMv02nzNC1XAbClgHS9ziRZilljIEqQkxhj03uOuftPcFJD8GPgwkOCUbksfSL09ZTmF0iyEhPkVddl8ecNGeaSrEPBgZeZPkL7SZYGJnnciUWhcRRzzTg9qtnlYd9dsQlEZB8a7jPlHVOVOJSiKaMm2F7Q7L1TDoqZ5daWuu98mMH1oY7eieDo2UL4Ell7r44LufWU5rt9qwu5q1OGVFuF63pEgYE4DDpqhQGmFs9AB%2Fc6lLY8euJT5MsBNEz8GbvgLz760sUuHcL70FmTbyTC9o7EuAUr%2BdTCgc4w55PAyQY6pgGRZcq1iDTHB0gwy7yOLakzempN8L2VGyVQaQbus4JoZ2smJuglqxxksRO9aHepgAm%2BV%2FaCsaQGiuh35HgKvcdQBUS6lwq%2F%2FqB6dCmr334uW15TOGF1MuZHOh93FZ1%2Bk4C29R5w9hHbngdsHvPsxmo4CebeXpbRSTDpgsfOcw7r547wbFSQpdlhbyYrtSMuDiBHNbqpedWm5y%2BYRr%2F4Aae0q3yTDu5N&X-Amz-Signature=82cfb023ff5fb446d8b61a06f0dd744eb917362f1fa0e969b7ceb1148e53fafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

