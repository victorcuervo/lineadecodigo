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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYL5LZP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDKaxHpZa5bi2TxeC6SoyQ92lhaLw4Uj39KODKeW7EeNAiB2eldTmEpQb7MP1EQJn0ZxJOKrgS6lM5AilGnrJ5vgyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6kX7Zt4rp6%2BKEG2RKtwDIIdsSht4u5Qw0AEWyYbZKlKt1%2BX7jJiPdUkhwSx0UiuavDThTrhBqVsNWsvX%2Bm5iYRaf5rWxf8lkcqQNOyUeFAsct6AW1RuvkTj1RM4qg7yz9G79oqIJCK%2FsRip6E2igRTnZdkC41VtymjSQ20pRG5hFCawo4gyqYfP0NJco86v79fMCf6w5NOhM2BwW6MCdcH9wA5XPblFv5LgJs1islfb3EA5UkBw9xeEB29Naif48iKvKWx3rCSEek4mj7KLfXqxSCQG3sLKKDgjuCSCQK9FpY3T32M1OMGV55HDqRcFg9%2BL22MhwcucZDLeXH3GIAD0GB%2BnT9t0G3QV3sJA%2FBdqmviMQWG%2FR5E6EGFYJNQB8p67wvFUdpsm4ol%2Fketz8shSm61dvxWuL1dEPaSKa5rsx5Ww42eEDrS293zh38kzDL6xo%2FJyHiq2Uj5cpfNblgwCV7q%2Fd9RdYGhkwXnc8bkR4x1q%2F24eE0ePOXKQaKAYe88QA3J869R82cXFhUv5hkDcG7ffL0EB9mmo6ETBmXMlo1Fv0Qk1IjK2HpQ5xJ908XeA6gaibGFsQ2esBotT21%2BFc86H5AJmjjNdN6l%2BjXKNCt%2FHy0zZXurHcgQxpnrMHtm8YWefzbF9J73Iw2ZS%2ByQY6pgH5zD0WgLBJ2NfnBZOneMmWuHFBLzaY%2F3pIs59jM2td5ld2LBplSsnfJnntdmPbKIabSKv2nZUmNk47irkI3BwYLhKw2RjsatevxDfdiDCdicCYaWRZO4a3274ifCgqSsxnPeg%2F%2FK2p5klYxwcTC8rnAdXsr9BrpRPlSWpKYLLijqUMPeuU%2Bt1VRRsYnbSyJl4djeYaxS47raxmd05%2BLh%2F89zldsr5q&X-Amz-Signature=fbc9463b193032722b7a664b65daf5e8b3d4cdd678b7205521b408f68963b727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

