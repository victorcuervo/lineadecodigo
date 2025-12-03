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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLIZANT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHdHeZO9POqljZZ2emQFAo1qFLGKFFuE6Qd9m7wv20qWAiEAm63Ua83I9h9tMk8dfgP%2FWCLbmFcRjc3KZfwoXpNZLkMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO2%2F0JlT6mcs0WEDEircA2cQaqCjN3AR8ojE1ZAFONoo4sWgDHq2nbPM9Mv%2B47y96NQvcGsUogIYn1KmSwrhfdTXOThPon0HOGkJAZh9xd3Nc9MZuceyRCIS8Utry1zRjqjHvb0dbjOeP%2FaFQrJlvJ1rqcFJpLG34oHQePig49Jdxpb1F19LSBPNkL0QJoq3iJXP%2FBkrI1HuqyESbYhJjw1VYKdo%2Bh0DAFz8pD%2Ft6yDhWdS1iit5tKduyVyFfcC3YgwnEX%2FTNDjCU5cCcTToL%2B4Eeg0twseXlyxV%2Bs1p1GX1lR0cLAYPpMMaVzM4EmYUTCJQAoyZDE1%2FK7dZ4rtoCJoVL7EGXQ68uSSxxikJuSuTAbPWm8i1M2jLVsbJhglmnPeswezQk%2BvzWAtjmgggt7%2FsQGhWizztpc8iHbnwd3Xlt8rgSTLS2DiYbVBsf0SecGW0jRJNGaDjIpdPn33PVnR5FgjdBUWG%2B7N9zd3oOz3l3W1iMxoliDFxPsjamFm%2BEapyEo3YoNzoMKQHnB9OMzb8ff8aD7PczViTPxbjRKAleBvSAVNebiJdYV5l7gz1JYShMjr%2FG8PBy3wISYw809SHZiw2sCo61zqD3cfV6vhT5LahRkV38709mglTYOGFgt4oCD4umQY%2Bl%2FrsMJGcvskGOqUBldgjzXLQqp4Suw3h0UDxU%2FwaTOBdPq%2BMF2iTbWPs1yJ%2Bofe6c%2BoyW8%2FRS7pI0nIIx1kihscf8clDJdb7E4kK6Vh2d2AwGhCPa%2BcEFEJV%2FGYFFUrHtGBEHs%2BVhmPHRj5NC49DoHJGhoPIn%2FFYXyqpNnIDyvVWWaWdpGlnJZfniC%2Bd8x18TD%2FCcGcu9iQU2Y6qk5ZwmcA5JuA6h0h0leV0K1N847Pp&X-Amz-Signature=68ddd6c3ca0f54d7effaf8630da3ad5da18a4a5894e231b5c66988ec9695afd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

