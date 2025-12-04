---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVA4WYNV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD2DjkS5VB%2FEs45CcMkNWwCs69qVAay8gXjtZoUKVIj1AIhAIFRG%2FapPETNg4tc0GpEC7ZHGOCTfEMJ9HGGTN%2FdQ1isKv8DCD8QABoMNjM3NDIzMTgzODA1IgyTGOh%2BbRvUa2fLtdEq3AO9Y0dNeR0zA0pukMs2f1zRvJFejHSIP6%2FZBJHJ65qnu%2F3q%2FCS%2Bd3h4w13k5sFLj5VvLUYPMlUiAZNxzA16UlSRHnCZp2ubZOtgvjtRZ1JHE8%2FjaMMfmlSD2Edlk7T0IeuLpEW2vv3jKoY%2FcyXq51kbyYLi7nxi1XJE17TlguXE1Hq0QywaC8HDoX6aBWcxWMgkG2GwrIrcpigQblszvQPYl3rwxKy9fI%2FS2D3uZEmnr%2BrefsmWgRhjPHvF1ZA91TOll4%2BvRbi8lfuOxS78%2FscZh93N73DiVoV0%2BYlLQymj%2Fhw3V%2Ba4SRn2R5JmlLB7ov4eNDCWDOCLKLTOTXF%2F6b4tiCGsE8cuXns8g0pZg7DtXXvYOarSwuQ2nnHxuW7NecBhuYQYm%2FSNbTC6bu51TJOfyz4JZwdp9QiiWM6KHq8A%2B2jESLqyP2TLjjRk1jzI32ivthtzM62U2397vvmu3Nn5ZkoWlN6GmfyL67iXoDx1Z3MEnaojB4g4QwAT5JONNyE71gTSajcQnV%2BCgzWPxGI6zghlQcqV%2B9zCyIX8j7%2F8rrLPSzyJkde3WzqDpHOyxgb34ndNjwRkczPPuSCWjBTsL1d8tP5pxF5xiaKU5deFOCtIPco7yKQNLkPrcTCtycTJBjqkAWJHa9jtEYa4ObpcRFiAyQ5VHiUxvM0WBSZRBH6rQxGFjy79AtYvhem7exG8v6yyvvA90UdsPFy1FXkAWfRUF0rsrknlG4U2kXpT54%2FqlqSYna6SP39Sl3AzbJhBwSGXK7faIabE%2BMyrKISj%2FW%2FYF5OmYbTyTQiaCmhiyH%2BRyquKgFOvPm8wHHYv3ZIsYnwYZ%2BJkFRRagNWKDAzvZD8GWdmHBBV2&X-Amz-Signature=914e0c8f8a14a386bf7780a9425c6c20ac1605d65b9abb3536bd02c33ba6885f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

