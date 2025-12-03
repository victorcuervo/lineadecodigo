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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IRXMB2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDtntYJVEfwg4i%2BwxuBQekS%2B05PLb1Z7g7m9IEijqf58AiEA0wQ%2FnFLlaBqM5E8K5tHGENxccPi0vdWVFJwY6CmJWscq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDApW1kiwsz9SlyDS6CrcAzS%2FrV601ddeRCEO7N8QoxpIB6kK%2BWOnnyGYIwYZGtkJPUihsw1Wcy2CVQ366ysbY6WD4a%2BfwP%2BvNfux6MYK61tGqXCGDTUWLRyjqzZrkjmJEhvGPigKbkIDyXuilL9DTe6FTKyTv%2FwLn35bn9zi9fJtM6i1dXWF8yHkCWRDpZB7COcAEwTlyXXhSYM3zH01FnRjqHpnoKDlmg3D6FjcaD%2BYeO7u0lssarlHCrGsn5yc50dQ0B1AGsUYDI%2FYptaphvy%2FYB1jEr4ycdjSaavkSD0yac4tPgnUCWg3lzTR3Jg8spq1Ydtlhw6YuXL1jar1qkj72wQVbqe6pvTyTfhAljhP1ROyeKG6vWReEr4kIVFMccZn%2FWDWAnGKmEbdnf9EwcGgzl%2BmP5OEpy23S2CZQcJMeDbvQizQV0k3ujmjnFLZOIuJ8P9KXL11jwLYfc8INUmiMvNruUwt5cxX98PSL6rcw9WGuL4x7%2FkEXZnLNOEJG5Dc%2FaPJHELUu%2BowLcT08YFh3T1sNgstZMdOBbBQPBnz05kLEm%2FF3PlDCAbarwGN5xibYOxxWJN2Gic7dO8XHpkvw7DlJH18pbFdX1JoRDcKc4ZeUreQ%2BFeINLwOyUNpM5kAjq3YKf%2BWHpO%2BMKO6v8kGOqUBPmYqnd3Upc9HuwP8QoIeeZJbB1GIdlJ%2BeukymfNJZaIcy8z%2FOuBT6gmt4d%2Fq8l2h1mSrjLw%2B%2BOkDnPhDgSNdQlppExgMGF8LWxJOteOkdmnWyV6Bbkrj4ag5wa0W0TqlSY05tn8b8EC%2BBlKxNDR3U47lBWj4CJ57%2BqUOnBG3cMh86rBbFlnTJvzl5DINXCTWkk6l7O%2FbhyuD89XPLfU9V%2Bvx1SHh&X-Amz-Signature=a0cd7d0ac6ee5acada5548c35869a10951e6fcacb19761e5fd47e55ed1da36d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

