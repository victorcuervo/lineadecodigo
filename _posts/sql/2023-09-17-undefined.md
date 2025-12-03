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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYFSEGH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDVtnEz1LayR%2BOkkK5e3XmJb02tPZJwcrwlaoOYK034nAiEA5wVivL6BA%2BSBxb4Q3ZszRBgVplU14vX3XkJ7G3X0GJAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIb6kLIa63K9uvRwMyrcA0d4F9FMuNJ57QiYwD5rg6S%2BpqKeRrgAKhrTXi5Dh759saM3pHBCBguuflM7mSA2SDXTyFl1bBY6xyMFucXXi%2BWo8R2egBCrnsibggcxwTZf9G3Sk6nZvceZi3CcLW4nlNVdYo7MJHuMSVhqkXW%2FjA3eWSLGTxkcNuu4%2F%2BzA5uN0xcMdWYdE3srHxl8RWGNZbX9RlQjMeUA20wKXVhQZ5kn1DDwQHNx9ilg359vi4mbdNCNZHkNFSEqyXhjZNUj7rlDk3304w2gFy4v1yoYJ7WnHJ8JitPFbaNgDFmMPY9klk9ZXG6%2BJaIABiVczlHSjfsa%2BiLPzm9csQyDoyKP92Fq5wFUGcneyIaQmguBjik4OwUmJY3V4OAy89q%2FainT9wXWPEYh33Dmk%2F0fVabzQKQ7K0hKA4e0RyGZM%2BZdn2Kwisofj%2Bas7Np0syY3ETzT%2FT7KcCi24du08M4f3NKSH%2FLSrbTiZ569s2Mgpuglajy%2BPzHc4GUDzazjwXRWJX%2BIaNyneYagnkaAyA6IzSQTfFhUzkoC5ygBQ7EN7FYSsK1wBeiJUd45E6p8Z%2BMyuir3d4Qt00HfFaH67Hwr5FRQR7cm%2Fs2cYnsrRe%2B2ogotNwgwqtS0oSvcWw1EgbfmpMKWhvskGOqUBjGjVcofoV%2F0CBffZWcQFb7pWb84LIIXGA50ti8TsVOtQzJDWTBINLc9uxePMUT6kUu48R9vgl1fEHNq7QqESdsLlEVD%2FAH3hw%2FRqsYZzsvQP%2FXAi0bQs6Vr7r7CavRmnVrVu1rhrD%2Fyw7r%2BBMOJ34nScOeOKyLwv1L9yhD5FCj1C2GSf5zLoyncI9PQX0ySUvxBDCSQxPfxaX2%2FXWnu2DQLPbXX9&X-Amz-Signature=7d899f23c760bb5dc1bc0a55d760d38a8689640a0448d30daaf98fd21806c123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

