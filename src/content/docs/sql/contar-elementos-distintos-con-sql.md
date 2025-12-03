---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4LKZEIB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCwc35vUJXBwqXNnWDTxZGnJ8LnY4YhuYI1ypZ%2FpRwbKQIhAN5jB3nud65Jl%2FjHKiSnVrqeGiKkEO%2BibJg%2BqEiGJHNOKv8DCDYQABoMNjM3NDIzMTgzODA1IgzfpasFtl%2FlTD0dLiUq3AO12%2B8PyGeK6tP0f8M2tITwU5k3AtBT1n0qa8fQ%2Baw0FR0jKBLzcq7B13P5mUbZsMdta0D0T3APiJ3Jy2uu8WBJ8THyPvNGBcP2Il9q8SRNOPYFiz6nWQZnIyX7LioauXG58H1YCI5Wndpha1qke9Ke2YMy6ZBncJGGd8Fho%2FvgZrpav73b7offIiz9Hq1ZVaxNH7bSIkNwbizgdDje2Iu1fXljh7JiI7SVaShSvlGbiBWi2WnkVjVbkd%2BL7KqvreF1BBBJ4jzPt4ODQk54Zm7DX1%2BE01eCYUmFhHpDlGTTdytaadTvXPzlR%2FEa0UL%2B1mcJzHh%2FbG3lFe8RoDZiNPhPs4NyDn5mObV%2F9cZY17kNOXdnRXql7a1kSm%2BCj4%2FpLGiMgCOWVGYHh7l%2FewY4bWYqefcxnmLGjjTwAANIsTSpyseLTwLjmuEen%2BqE2EfFKsxSRqrHnkehNZiK63Ug%2ByxADRbqcVdONOuj8RSEhbeXryKd9hUustJHgT3Nn%2FYOXxaroAfEKTs1rpXW0sBqpgh%2BviGjZP4I9eGJZiVUGF%2FzauPGt3Y8YCCSigW6OS5a4FKFKUkoZjR1TMuJboiodSw6r0v48RsdoZhvcUHsZ9y9r%2FZco2gZA0K00jn8KzCLvcLJBjqkAfgtW%2BEunTE88emmSofjow%2FpfKQauw9b9k896iS4nba8ZguwV3qeDTJWVUTKraLes4yCy6rAGNWN9K6W6Y%2B%2BCUdgrWowBgQ52Vs%2F1VcFDHNte02HnHX8Hg1kxKUhmIHjBfXSurbGmioiwcj%2BQwDyDGsfDGagBGBcIjFYZx5ytw8ktZL16FSVM73PVu%2F3BWQ8BDMrEPj%2Frpf%2B7v4J58VLQLywI9Sg&X-Amz-Signature=3c5a14309435593154c0aa41afeb144efc94e915bf02726b3ab6d2c66bb8f324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

