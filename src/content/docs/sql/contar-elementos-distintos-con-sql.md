---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2B3TS3O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBRbyJxv7G1NkFzSibMXbi0GQC%2FltXRS5xnsHEvF5dSxAiBXbek3xnepzAd1dxz%2Fo9OTfvPtNnYcmYMRQV8BUeQBGyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMqb%2FU3pTewIlE5e6TKtwDjXTmaCoDRY%2B0CTUhCfS6z2%2B6FCH3xlSr%2BrpDXYabMNuDDVr5%2BDDW81q46QjUdZmV6VH1EPIzwWtWhzffS46KI96OhMAyxMehQJhqX3NwQCPOjf%2BZnfwoT1AF3v4Z4jP22UnoK5z6NhyIjeH7OgoJFZ7R8YpGlIeIfz31VDQjwVlN6jUTaUjKeOrvzDynpPG0aa43RHyy%2BtFdQuLnU3h4jqFGoox9GE0LowNC7cYiGhflFuxumCjTTUd%2FyQcwAxMvXrmoSGYThpY%2FzqnK%2ByNCVtpRqBqN%2FfFhSzJP4gmM4zpTA20v345t4hCkvSa0Bbz6Cp0MmZrBFOfq2o0fG2QUMfNMEqOpwmUz0XBVuYdU3lR9hYqHahMMCYB8e0VcOMzi7WyRKpLxlU5ZT4q6pTLGPLCUCUMli0UkWEkICBmdXEJlUnyfJ8BN8Rw80ZGbJomxaETsNcwt8hBY6dUV%2BL31ty3P%2BZXHjk4XfeM9iFGxWzb7zW5oPhIUIHuWIpi9Xr9rHkSw1TYnEgLj8gp9NGjfI0%2BFg4wHHd0H0e4FZdi1%2F4zCRm2kZ09V8Egz2%2FIobs1zCfc4lDkxdc4MX1wxFhwrmARo%2Fy2ttixoPQ8X%2FCFnS94iY%2FpIUHj%2BvHns9JswhMvEyQY6pgFdmmtRbKdMvtCPh79uhH5FGicFZx8P%2FYMWcV2zqVt%2BlSM9GokQXDUT7XzqbhVYQYv3jnBrX%2BAU9XIeSb%2FznrpvMLXOtVOBnz4AZCA2SZPDZHA2bdfK5hoFmMSQu4AAadQEQaq%2B1mzFspNpvkYD8NLYNTXCLr%2BihgarUrDkyPXxragGUS10g0XHqOK9Tu7gk8GQpXFbFXW1T3D%2BJhUwWB7UJbRp9NbM&X-Amz-Signature=b387d967e49736023aeb2bb738687723cb3e073537cff77b923c80eafa378e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

