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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWVN7ADA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC%2BrG27y6DbuFK6QsTIHkXPQsxbXCzeZVD%2FQWkCCOuifAIgWUwM6myiddRh7%2Bu39ovEehIXbngzZpViXpXO2Uro7rgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKidAYYUgckX1VyTnSrcA746enBQEhWN2SzxguxLPrurx%2Fwa%2Fbcw8LdwndFk%2Fo2bu%2F9xacs4FuXg%2BzGJLt7o5CqcZPLBfnkYEgkmUiiY9vJ5xW6z1K0uwkvPeVF4Rg%2B%2BrTmm%2FDIJLKAtYy2IhM7UjjGaZ5rQTmmcXn40s2PSOjRRuLF7FMJrGdn7irVlENf7HhDxQDWSNJpX1E8uUIb1FdbQay4XMEjKUtbdoPz%2BJTqDRYO8eO6l1xn%2BP2ANXeM6OKA7f%2FwtDMYN%2F7t6Crbr2GiL8M968SxwExwY2wJ%2FyIXx3gk2%2Fbkpd3NNfzim2naNJ2yTTwGD70ngjHb1%2FcVj2rphQ6RNnvoEdNYVktgmn0JYGBlKx%2FUaaEQ0Fj1T3Zq4vdFDINqn3KM4Uk%2FyJgN9Vo4nv7%2Fv%2FlDbL%2FnI%2BpXfg4nr3gopENWjNTJv%2FAk1virGNbDbxm8cf8ynZ5RNqb5kCnQWh9hhrk5MH9fP7JbRiSQj%2FdbEV8H21K1rmSC6njaSQuvGch85ql9ESFeTgr585XNMSOwoWlF4FPwXSJLiNDZKihPmQRKvb0mVFevBJfb1ctcBKpAq5Vz3sQ91xkZJ%2F6%2FJ0kGhnkqPI4hOHO0rej96qCSQbaMRmzmmWNq5I7VstJrMSkKDWfi9NfylMKqbv8kGOqUBwCJEfN5dniy7W1yH%2B5w07IzqfkMMG13Z6RIgW132WFozIdukMSiZ2J%2FgPGTxPg0Y5nDE3tNxGqYnqoPojOv8cCAh%2F02eFv9R3TmY%2FOKnnR7mzXw16CaE9HH%2BZzonQNBMX%2FM5a3fBoRXRpmqOO9uY0MLJy0iDiXraj9VNN9LPA4YMVmQ%2BQfC8RtS0ok%2BxtHsQBlLg4kaqLJkEQX36AxAv3DPREcGQ&X-Amz-Signature=4236a3abfae9b5c8cb9d6be6dc7677409d0d5c973e183c9fc60be035bc637a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

