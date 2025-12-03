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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARYOCB5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIDSZ%2FH9Ro2W19VBQ6nL%2FdGbWv6JwHDHvc5thJior1Q2EAiBx4WoddBlkx9gu8C7mHjAYIp2eOczmFg71Ex4l8Aq60yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMlL1roXHFu1dLNKmBKtwDKuYo4NLInhn0NQS6flqslm3ils5RyGFJrLBL%2BaNPAZmU9R%2FnDiiq4xF34ezrP%2FB4OQu18zFg3kL28NsOUtwdMM8eMKV2VA6YEQ8AtZN2nPtpOujLy4NIo99jVBZERX551vZXQINwJnyCAnGdsXc2%2Fs1e%2Fv0wbtYV%2BdSqOIcETAESpOjM8gEW2DS11FXDOJR8hPkuQOanxJYiGin85WOckguGGhZjdf6p0z%2FPeuufcRHwBCUXekDlNkEFANG7nDjRFXzxoqlOmy6qj6wY%2BF0O3e6GIz8xmTtPSJQbxEJCMFUeBe4PvOSU2j8P9GqAj7aunYJlmIDf93IEk7G3Wy%2FLLduppRY%2FZdo1AohxFa1%2BWS%2BbioQCVe9ZeDA%2BMRhfK5DgH9WeummLibEL%2BUmKwXWv5oFBaV4Vr0q4Glsysx4T2j5nbK0a8%2Fl4bNCsdKTvVBol1JPU%2FVcMsUfXbcjEIRyykrhBsbMqR8E5eO7oA5vmiIk0ctPlNr6Ifn10yhwf%2FCLOSdueoPRqLgBBSFDCnzQwri7wdDgACt2wBQKaqKUMU3tTO%2BeSkV0ywlDhyA4W6Gj5IGCgbnZcGD1AA2mq5rPF1cXRsAMP%2FRlVZAAHicjZX9OZ%2FDmVl2X7sH2qBccws7m%2FyQY6pgEtAc9%2F3ypO3HbXSkw0GudiKgcZyFpMhwOCawWHBVJMeOt3%2Byamy4iZs%2Bbqb4yycav01VMqHOE22SYBv1vXVviCVM2S4f2IajnMKwebjupZwhCJtfjqFOi6GdIB%2BwcgWaBf9jW21ShR9ZEYSqCSw424bg5jHzl91w4qx%2F61BzYirAiVL9x6563Apr98hn885uvAne2KDneBbGgrT%2Bbke1u7%2BYRsgePs&X-Amz-Signature=1919d62c06bdf2fcc369e6bd6d9914fb0ea4bb217a55f8ea8b85ab82e0171d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

