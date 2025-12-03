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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SV67RPC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBcJ7aJac%2B2Dev90TDiuySzr9PjnYw5%2Blf6W%2FKHoxrrEAiAIiJmIXsjowZs8c5FXOkBQtNMAJa33GXPqg%2BMqOHifZCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMXd%2FIKARUZadXN5MuKtwDS6UkUGzvpPcpsPrvljurO2jD4DtgHQbtRScgPQvuA6jF5BPx8i5y0hJI5jJS6%2FYZHaBb%2BhkCQ%2F8Y9fWoFBplLHZS9qBMge4puA4NWBQcDOU8Q%2FINmDfdw%2F8VyK2JMxhcsX7kvU56hqXl2l8cyPa%2BujAdGe9Nsf3AMKPSbGyG0ZwWXpncVa%2BeosD5JGMQ3tQ%2B4oEH%2F9UXMawzCdq1osHnFeCis1c4q5fEpoo7LBUOFgxgFGG%2BQVSMw3JYdZXDu6DnYNZC2JXh16IQJBpGe7l3l3zDx3DA%2FveVTjbGMBuk80uoaCNJjbVx48zmkw7CJhBdTB8W0J%2B4d%2FBJ68SBRAsKtWG%2F6xqaNKCO%2BxciY89qOoJR%2FwMX6Okb6uAhR05tD6ZJ%2FcPqE%2FQgwFqTYctzmvudQA5sV08QPEbq5xxRHcFtSF6gfRhhc%2BaY4z13FkwT%2FlnEozpdRZYsoS3EsTQnvcDUmkQfvigfgP8J5VYKqdtPs9XQI%2FyI3QiJkgBiv9%2BULfeLcpQDNjo51dzAhk1%2F0Qd4l16OtF55VjH%2Bhk6FjfZYaS9dVC2BLQknxjfuvZI1%2BXTE2L6VjqRLFEbUa%2FzesCmHUiEaZ7SnMNBVAE5aKtfIdSlMIzlQITu0uYuXuncw667AyQY6pgETQw676h2ylHFmp7UmS6x8JqLWBv7IkD6J22TArdCPLIZktjyL7KIt%2B2h5sW9gZ%2FHuFZtBFVQitFShUAvP1fjHESB6LC5L8%2B%2B7NWC2DHvaex6T4AF3%2BUA8YsffTs0dtV2wB8XNCfFd3doBNZdFHiNWYBmq43hxY1SemUEoyLuT7EIGa7PxtdF%2FqcHiJcny56rifTPIpE%2B4TaOlzISCGAYviLobwG93&X-Amz-Signature=42bc70872080d0147a315e626d5086f23e1db0e628fba45bd1b0ae1be8ef3c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

