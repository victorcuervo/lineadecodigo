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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WEHG5BP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCIRWtveg6o%2BPMslGYH2gZ1fCi3IYdbRKRRZRvBqyd8AAIhAIYfgvR107uV%2B1UzoKUhLE7mKY5uGU3DD%2B4L91kjxoG0Kv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FFfH9pPJcRHovIRIq3AMmBIhN17gjjojh2FwFm1E01iNHkeG3gXJvUUjczvjyVJN3egh3Qlzp2cQhvKQ6Vi1pv3mpvnk7gSABJn1Iaqbm3AJsYGciz%2BIssGdWHaJa5X8fd4oF8yD3Iy1c2hd2cNQzWCRbNwuiD%2BtAVwBxRQQCECtnwRCN4bumc3H9%2BUZR1jV%2BxJibfb4rD3inQ86RXyvEXglShQDz5v67hOvcdi4NeDR9DOZp%2BFP7zFe%2FQB2J6tSBkWJriua0ZJ3SbbDIwLjnqCao05QtqFvNWSGYSvo2M%2F5rgfZvZZGKFfJGVfG6X4UHycMMXj28me%2Bux3dl6rOOt7fLiwGY0Cl3NMGZmQHpOqKHcZQYS88PtAV5TTPZx2P7chXg%2Bj3UdjrjOIdAAKKpUKdxOynnLCvvGpgwSViynfO5OelN0wpUOzX585Pb%2BTerRqX4dyMHChCroQ%2B4yI%2FXwpklISOF32vKHOOBks%2BcI6pA%2B1Wn6PZNZkJvQ3Zgm%2BJC0NrLkl2YRSDcfviI2tUCRkgilpX63fqXtiS0OfFQvCr2VdBSevMP1cPWEq0iFJfo49%2BZKKl%2BXtneiZyDyu%2FR9lWwf5goR3x77cM4tgpgY9M8FZfJRhvhdMA2Ef%2BlgtYLKkrGQUMII8EtBzDpwcHJBjqkAQdQInzpRmSu%2FzW39WL429VlVznjcgJRwiwVtNuNp2zrG3rUD2xBwqGGyKlGZLWih8mQQO2qvId2Jgi1sh1UfvDfYtK2xaG8yMGc0nHIstv50N2KyjTqprZttwIT0w9HsEex9%2Bb2J4PQ%2BZ%2BhuHHElyF3l87WiwI9xIMSN5b%2FWxCdyw2hclcngJJ%2BWfq2vQrzWbersCsZdSc%2FaH3Kzwx84BtwM7zl&X-Amz-Signature=db592b68b2f73f6d5cde332b5fa8ae30723e502a5b7c1094cd6012a8fc7fbf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

