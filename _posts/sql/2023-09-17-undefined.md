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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUO3ZIAG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCTp3spWLSanyXCE7DbqIodh%2F1UXMRpCC9r%2Frxp6QQCWgIhAOb%2B7g%2FOiPQQJxnNbzg4BGcdLT1o77YLvMslWWh%2FlmhmKv8DCC8QABoMNjM3NDIzMTgzODA1IgxFIdx8sTEMNseUDNIq3AOi7ewm5vlEqqd40J2wMFUkRRVrif2wKL1LVLoFO8eKu0UxhVqgC6oyNi%2FutzhLlq7n5Wecr6gRaxZjCR9kqFI6qInN4nU7FoxfYsZ7r%2B%2F6MA4GPP1sS5jVgse%2BXKsFQmjhmS9URZeVdNlrIFzsB%2FvnzA%2BTDxZjSTlO9aJxZ%2F0pzVPddnlVk3Bu%2FaLBBxTs8cCztcZVfIdRF38G7gdVWquwsncW2vLRycY0xHvOZ8BZTiX1%2BwVLkvoNtjQyUDminqDLVlZ3hF%2BFMk0ETdD%2Fhg02hIQffF5ocqIP2B7BJ66%2F3OxwTcLNKF0rAQCyOd%2BgJIyLcsOS0JwI0aqlj67%2FtiQTaGyBYDxLmm0CBBNaFGns2zWPE0yv%2BDsN%2FvNSPFCPz26%2Bt1he1%2F%2BRLhNh3P34mtbqpzv8NBoI9PzL6FRsJkHhRQLzIK702%2FiKerFVuBJfhVvPtG7ddRdGmvKP3wUCGVLRaLwAL9dKSkZ9mXWcnBOx6LNgKGS2gzFZpZFnWpNpv3%2F1WCUwYDvsn2zwvXMx0c8Z3IN7tOeAcq4EHSjrNnwGDVmF%2FyDRbN0Uu1d1R252GeaBCYvptwwt5q8PZN7qNbaHpxhscnFawoU2FQO%2BPJ4bGai58Ae6nWXWoUUNFjCNh8HJBjqkAUkt8MyWlS7vuOnFaIVLw03DN2KA%2FP%2Fu4142DgoCh%2Bv6XWVQrKtjYmRM5ljkfVoOWlNgtL5QcD%2BdKStjeUKbtMsoB03TPeS6jl8pN%2BShQVYd%2Bx%2BVYZWJ%2Bl3SsRJ0%2FR617MEgZcQdrY9Ob5bv4%2FzDeRpo%2B%2FZdUOKDL8%2BBH8bNhgKN8aOjP6%2FB5BuuFAgjge2CfvjE1sVmyAF%2B%2BAyAgKzkQuVxgpod&X-Amz-Signature=41b95e16e2760418db8a5d493383cc61fc4424555968b944fb497de7b4032642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

