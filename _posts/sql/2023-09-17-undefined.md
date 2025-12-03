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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCT2EDW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDWe4wUqCWsWYK5PlA6iMIwiV84KeIywsVtrP5jOdTeOAIhAO7%2BPPIa3AZZOq5LAtOhECIgixza%2FeZtIVHBbNVtBNiBKv8DCCgQABoMNjM3NDIzMTgzODA1IgzyBlSvSr%2FxPzLsCiMq3AP3KfvoLpl5%2FkDwXWY11sd85V7erFcWKrp9I9%2F8Le%2BOMnD7oh2QxShLy5CKvm9cfjcVgnLG%2FouHRFY0gWjzTWphqrLnoicyxDOMhuKf69qKwb5zMIFdMKY%2BNKI7GrI8ZbAJV4XRnmrmwOYY1iHyO5qQBW7PZhz6a4BwTyfpzuONBynA%2Bv5roDCBHnyGOb4503YzTOGuddVHl402AUoz7FYOLdlmAc0CkVRn0ijl4DP5UFD8ha87xRHQ%2BGBUTaFY6bXYZjuDhGLXPR3QTUOqwroJbp5exthqA3wwvseSVtWLKicjRdNilyIAaP1%2FHoKAy94xx%2F%2BKF7vhKSdLI9O2j2zFgsjUlgiFLknlXE%2FKzn7buEGnbfvbG%2B3A9ilvMHzNEvgzqXiU0hDhzSq46TKLc5C%2BCcDBzL1h62cBkS5XXJ%2BjKzOApEm%2Brop2iXnsplaH12%2FqrU%2BrMl3%2FT0bc1DHaj2Y82XgDwNb17xi2QVemie8NBjMDS50nULvoNuMCsCYpFuqMNb7SAHf3BQ173cj2spRZnE4eNRKkZrvdCO6BZH%2B2a3uKlpSNQHSrBNxBceOZp%2FgpUC1ps%2F%2BmK5kGRFHIownzd%2BwkIul3T5eA0BpqHKZ3qKNmwwqh6WPb5OwX1TDRub%2FJBjqkAeJVpEhD7fkSmLJ0Ug%2BX4%2F3HWdxKQ0Tf3hH0bQ%2BHKnrKUFciHOHUFF0q233IsqhhPc%2Bjma%2FCgPs2SVAbiJJRuvwDiCPJxlwMAbMKfbecnE2gYus77mgQMkDltCfy7waDYsn9V7ZQjh457XoH6BZNKxZQF7N94SJp9TQkAShOpdhCJy%2Ba4p%2F6mDBE%2FAhFTnLFegJhwYhWadqReRfK2mmc%2BtUsmUV8&X-Amz-Signature=5f4524d6ccab77e15433ea50b3a6be2ff56ab346018fe1c03017e8f2a25e2b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

