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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P7CSROI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIB9zJ4xhkmXEpBI3N3poi2iVoZ05%2BuliHAT5qVSSGWbuAiEA1W%2FnU8ojyUFJdCb6PzdoqOJhYnSBqs4Q8E2%2FJOW32dUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBZCwaXeSwnXPF6qeCrcA8jubgCidyRiLDXLW5ieVUQOMy7cHD%2FWg%2BEtSUGgyO%2BmdXYUfoZ%2FctSFv025k9csnhJw7cyLXhd9oMrOEHvD%2B9h2mDLnCg%2F%2FXltF%2Ff2%2BNxt4r7BrOlEC%2FfDLnSu2046c4jJE%2FfZsVe2zbf6ET0BfQyvdsDFdFx96CYe068bOFovtKJrDf6M5FWXhwyi%2B%2FRhXf5tyEeUYnV4O%2BhFM7ktJ%2B%2FDtCaKn%2F2eMSvBqPPRjqkkYpTQ2lo3TN6ulNXkS%2BgoL8GTlu%2BTWCVZA5UsxlVLQbBVlq%2BCxpC2WegWnczBRWRa9L62YCjCyYrDB1EjggmZZEqTNqSgpuI%2BLQVVW%2FbzEKo6dqZgkalCWnWhLYY0ion4vO%2BN5fSs5aGZBYOJ8EfswewWiNFzluSSL%2BbchATGiD3Y7lCNDiMHvBJG9QI6bB6UFHXUjJ6iEQNdk24xls92KAQM1P12t47AYHZxyxgzD5KLTQrM1izTPOMqIK1mcEjcohJY%2Bx0ytbmQUg%2BLXCS6XKp5Qm1PicwdR%2BaGpIHTLeixJhik%2BhvX4LmwjpPs2Yec2YClBM04E6cw9omVVwL32egRnz0NYqMcDTX7EV8dmeff9hHr69uhxhHEjQnDDWcvtG%2FeI2l%2Ba5xCnhr4YMJ3%2FvckGOqUBNLRLFamdPjAnuBOIq3WmcjNTfaOHuE%2BduK6J2xI50aOSZqsD7CjwE7f602en7yWBCKj38%2FPyLNjFOb%2BtJQI1LW1CTb8DTLgykH1Tv8%2FsR%2BGF4OWWa0h8qKZTpGLEpr1FDxHCqmbSIxkMnXcxrU4M43n47RtX2NBHPz%2FMHmeX%2FCpH3zQi00TNUv6SIAD7QfC8VY6IuN%2B7q39aEHLsOweaJYUT4DDq&X-Amz-Signature=f428fd1294a9a7181213e2cc348155776e5d1e3218f9f4939065026cd5aaa3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

