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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5XCQVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIEc8ZhfGlywshtdKZlGbGtbmaNOHp3OwKvjqAyXuCvjXAiA7ogI8S62W%2FixIuLdKss9t8VxFWCCjr6mGN2BNn9Si8ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMUEAZthQ6y9LEWDleKtwDP2ZsBZSWUZJQfqx6yAlQSXigSVO0TNehfE7JMJyMk5sFDR4jWgWvuD76ftD%2FtTAsOkZsLPr2pUSrWC7vrFHP5vYSLTntEFuess6zUJaSPBV5RukzBviZZQZQZqL%2Fs%2FBjPtmDtkZn%2FmoodWHNQ%2FUWibxL937Sc8U7jsUnBj6CgKXZT2HozdfTp5LRlRxj4YQLmuLEetZ11eaZhatkkns3HCrEA1kBJS3J2%2FOFVESC0HaEYjGjqLgnp8CvgjfBob2JnVsRGx0CqM4hFSWexai30bpiudufrM03GS9PLMVUjPpkP1ezRpk2DerZDPCgZbJGij4N9isG8TVU58DnE8df9cfPVuiTPaSYFubnTiwkxhjnx9Mwl0ObSkLPafBFyNSMfebsHA0olT8ulLntosLiUBAnJjhVizPRCGMhtVGSKT%2FGKMq23kgVxM7NF4d9v3CbQ1vqaigJ3hC8KEDnhUn7lXex9LAX6hhnRyEyAA4sehtIP2WUVgcVLcizmdvRdxaCWtU2GDS%2B8usDoBF2lKXbEoKE1hxvp3a4yy42D2gCIo7TAQzHV54QXLlAGGIrnKOHTB6WQJR1kAnYkwp21pkXxDJPAEspzqQZlG65nG9VfaGfMM9AdAdi1Q31Orsw4MDByQY6pgGFftnZTSmyz4EknFjVd9bB8pnw8f8Xe5gmyj%2Bp%2FBq%2BZ0HG0TCoklHFUu2IJFbtaxHh0IzTt8WOTQDAOh59mYntUG042h8OgE13Acjvl20d1jjEaq9OqK3XgN1yRRAJC%2BVh7q%2F3VSb8Pf78KmwkiE8kG6PSbJuikyFGGWETC5kz%2BRE1WIu8pLlItJCDwYZ0PyzNe2qK3OZzsCxdq4bgZRzylRHnuqOY&X-Amz-Signature=23cf5585f45b8939df783aec0368e159053e472d4464664afaee9007f81aba0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

