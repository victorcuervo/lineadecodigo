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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVWKVNL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGBn2EFwbRIadJV6ELvNPp5iAOADXja7eOlFWPaXusl5AiEA%2F4yr76vWNZ%2BYIvNLnq9gdYTV1NwQVszRWi3yLcg9toAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDGUjjqjeG1PGtnC9sSrcA%2BjNyDzwikQxTx7HWo2g0vGxpgNgkWoYfE21itSb4CqFXngYOxdpQCc9PYX49R86s1mHPLFIYMhjWpc1MALnCzwc7jC8LLmac9mGqZBpTp00P6oVUGqQx9tn7mTgV6Lo%2BG2hKM0j3hlxeftE1toMmZCG0M4WoFnazQUymEqEnxhokWr3kRePK6hvJG18bcsyxZqytfKqtOxwjDDzBmCuaUwemZxQV1B%2FrAQyJFSIfXgpp%2FEFV0EbUx4%2F8Ub6sNI4s4U5hkna2xUYzIMNnPDwG21REfACHgJuGGX3EHICOPeHinlPAj9rK7E9hGIm%2BwaobIux%2B0iQMpIV1ZMnSxouYJ4Cr3oh0AV8YPP1JepkUxEcGJJENAPQrGRs3RkP7Q9x8ZAm4Z9ATQWg7us5ULtWersY1jo7WuRTfEDht2aHoy6cY2gdk9xbBy4TYd5ddS%2FFhO24CLeQ6BCI3Zz1AFWDEKUynr%2Bz7EJMWxS1Fk5Cp4m16swBLVckEuzYOZhs1L9vzx2bIW88J%2BL8Sk1tXtbdjjvc%2BypjlxLri3cBtNE80vtX52NNgnwYHY2Fk2zFg9xF5XI9acwIIj%2BXIek2Zh0IMtuLoXS0ISbCYi7dP2GlnJmLXsa7tj9BtJqvwY4aMP7Vv8kGOqUBV5c6VBu7RNn%2F9gpvwEPziTWL0gtwlr%2FH%2FK7PyokIFeEaB2j0PG%2Bm0kK2F5qbSBfBVNmzTxrwzo87fs0mXcf%2F7MmFwhfx6GkxHYnwWR7nou%2B66cwNQhZlgy71aLqDQgTCWCTaYrSfIiIk9QWTYx6MJYOEu3qNauKEfXmIfPPq%2FoZY1APGSc0clzCXDuLl12KQ%2BYrPLheBYd2kOsn6kQiAJjg7ZNbR&X-Amz-Signature=0f46dadd8a218055e31d4dffe1a4fbbd3d859741e19cd5ad83e82e6e88e56c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

