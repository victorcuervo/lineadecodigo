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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663EOR5SZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEp6UEPNyetQJ7aUieDl6899e1E1T%2FqltBJ2TTWjPAEfAiEAnRzQeIbFOhCOuT92bf%2FxLDQD3Pt6vcVeM3Y5NjYl6S8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPEygx3W0OeX8wWLRircA9JfWtYCFroVIhGsbhn8l57XdYDYDCLnVNGb5SJ%2Bt53mTk%2F0AqAq5c85rNLXDlLJkL7864e0vYvubS921azDq4rhjzVJHAVajwYbeG9XiFBU%2F8k5ITSg8lj2MIGxKWuwd%2FJciANQ8HstYKztK00XTjlCQgaktw%2BbRXvIrH7ntlTSs8vwjvXexb6cbM81S6Z9ChVty6Q0ejG%2FQQjV3wMgAgzl%2BoB7zA%2BKKiLc2Ft%2BRr2LCmfxM4DgPIw5lzZGUkY7c%2BY9o2EU%2FuK6dxpQRLZZOS8LaWdOAfp7LL0ji3iGXq63UE8zU1rbHniNyPCobndBut9iymrPNk3ILSw3WyG%2FtJoZt%2FnmQRwp0siU4hdMsNXbOw3e5OIt2vStqFEK%2BKvF5%2FvDEiStgtkNKRn9C8NhGBRT19wO841MVVJ4KgUD7Pi9qAJETRtRxLNF1DMC4%2FDgJaMI3kxyiRcTSMsShKrbgzFC1FF3Q%2B5zvSyK5C%2FxtOghfOB6yZ5za7M7yv9XNRBNoRbo6%2FFMdSdaxXCc6gsqSIwL7S81X7oHG5Pqj6emIwoDQ9i3s0vsioWmQkQT4P9mgBvmXZgIdJ9OK7s7Nltg3A4fc%2BcQDcV7o8N1Di88eOftVvcnt%2FJYblCkFCYHMPTMwMkGOqUB6p6EuAFBSRXNcB9a6vjxWj1LHABeBR%2FekY0OuUyXQoM9kYJTlsGTZcT3gAuuqGppglxFkTrzOIIVHUTU5%2BTUuuq4kyxTonaqixf5nhpmVNNzVv7HccbmLFMazOdP4DZ%2F%2FiyiM3Y2ogwk8OAyZIOIEIqhD8cmfAEJ4us0yMw9IbeKUAjwD3F1%2F%2FuagjT0mXfw%2FhgvEAv1E3GN22YdibO1DaQE%2BZ60&X-Amz-Signature=c2e35566adefc7242e20a0c2ae7f91ec863e32bf7c1ff41a25b5bfde0f1d9172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

