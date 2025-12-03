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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EFLGBH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFDgmlvx%2FP4pq%2B8D49JcWq5f1MkYc25ulkafFC7V9%2BRTAiAJdApDDO%2F1uZHurI2oQs800ACXEp4UeNZlfpIjdhwkfCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMJkGgeBlS1M%2F0JTivKtwDOBHvfL%2Ft0n7bJeRPxV3RDxCgnldFwD7ZVZSzUUxtNaifJQ3idE7P672nj6Bhf92TsxlHiZGwUREjnDEHcjZCPwMcJR8L15NbpJPRGsp8WzufrDnnSsfvjrhsy%2B6mQ2%2BDhX2GXbitSRVVOdfs0vndPQ5K95oCS9rnImBeUeG6HT8slXw%2BmjVzT9OvlzFfZaRZ%2Fvj93E4wxyom6jbYgNUzmGEMKHrkfZLjVl72XFkoUt6%2Fm%2BZpgcqGgpNP%2FC1YzN2BCJFpXhdqQG79qBfim%2F0TFyTxjxopsNWg%2Bnvdo9u%2F5umzVlOeuVGuhQar0ZGe%2Fi5zvcs8ocHZbMq8wscMfPFJKMuLIk5bhqnBEBfZYdyDL7O8Lf7VJQPB66HpKfQ53UpC4DvtJVE3XtEXMEXFvQyqhrqly8gFLTIA%2BwmOM9qpV2Ti75Ob0e5BEBESMsShQpL8fxPNnqdgJAn0X7IVEYD1ZF0bZ4LC8j%2FXPqPKQGC29qyX%2B4oljeB6ebspaBqlz%2Bv51DdfZTX1Hs0%2BDk1IiYjgVTTo%2Bxmb%2FEzdKwxfnLCoThH%2BljW%2B%2Fj%2B5CXaBP1OJ3KKEcdu5YnuSbBLy9Qh94tybh%2FMx%2FHvCVjE2BSpxEobnW9cV8jbUdceIilte%2Bqswy9S%2FyQY6pgFFrXQogVkB0lUmQZNt7JhMo9QlHzcNm13nztw0sicxG6n48PUqveqMLuxDocdXGOQCJ%2FprGCMz5me8pjceEfC6%2FskC5ESHgAaVM2jQIAzcpXpHEP4oBzVzvu6fqtO7Ish%2BrUkitNJViL0VZTWJxG23LqIJXGY9YUD%2FwYo7pPAOxc5MxkwFQ7wWPk6pjNBlyLqY3qliZZiDEhVNz6W%2FLMnwktFKaI6e&X-Amz-Signature=534ca685e72af10a796228f8408770d68a5608076eae50a614e1b45b66ed6a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

