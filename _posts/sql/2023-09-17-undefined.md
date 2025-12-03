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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIX6K7B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCuyNkCiAkvZjOW1GJsfSeEYikGLPuMjIkS%2BLrHtJ5u%2BwIhAN1wIVFkXjMzVLxTgY%2Fxi%2Bj0uRpDc%2Fe%2F5%2Be7K21n%2FBLYKv8DCDAQABoMNjM3NDIzMTgzODA1IgwodmtxwukmBUdkh%2F0q3ANjNc8gJwiTM1bp6qk6MPj7hKN1GiQhksndVwWhozCk2PMi1aolx%2BCYkTzjTNjdaNHq1PiJggDT2uvoV4on2rwn5SnJXQfxo8sPJjk1apd%2BF6V9%2BqBYOlP7hGPXkNFGasaxdEDrXZG3a%2Bs2hAqZUsUkg6bM3nj%2BehsJj1PkA8rP9a3rKSoT5xrUgDF2309TyuaGjnWlNG%2Bc407ylznS1RjQtSVbb7h%2F8sI87dzF8qLTizNY9gcjsjnz5bXhg99pFkbGYrzb8Kx3iPVEotRo4t7FHjKPBjOZeM2GPd%2FQCBsLvEyA21W6w0fU0aQSDtVUVSfPphzC94gXb9ICqWlmw1GfH5phxe21fNy7muvZ8uj3jKfhZTE31a9IYQh8LbKUdBmZsMAuqrnpiuK0eJwgL0DUIRYDHT%2F%2FSEIpePT1sqQE3X1xzQEjemPt9AuBf5MiRT6BuaRuhYHA1GQI1Z1MeQur7w139kK05A7u9MuTCtDsJl1chX0w7Ytdpnd3%2BRw3M9c9DpJTEsDKLqS1pyILKe9NKkdQy3j4v%2FK4KOVtsaeLkshJxzAcuPSRv3tbOrE4ndAZa0r1W%2FA%2FXOe4F7IOoZxpGcPhcnT3T0kq5qk3q9YXLiYzZLy4suq3ERSeBzDCpsHJBjqkAZPm3eNQ79nYracPi6mlKA4xMB2rspc0Mkt5ZbJA%2BO2pJ8RfnT5S6LULnUvjveAUxzQidQjJ7e3w1FkEppdu%2Bs%2Fsocle2powruuS5NscL4ViAOA2hpaxAWDihMaJggMHspVnsFSO7%2BpF7sb1qeq5r5vMLX8jICUGN0WFSCAhwt1vnPf%2BoeB2Iu8NmxFHB99XoNWbIhdf6LodySU6UUsF5ZZvVsPY&X-Amz-Signature=6b6dc79b3611400e3460357b3cd0ee2a265f0008400cf00cb277e0157382ed18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

