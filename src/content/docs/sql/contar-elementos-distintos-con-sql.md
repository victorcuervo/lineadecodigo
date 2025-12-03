---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V322OLQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC0SgibXIIPRjyYQYU3xZWmhcRZ%2BDAs13IkBRnfRbjYowIgNZV7aMt8KR0Mj8tsujZOxjM6erFFUEWPcOja9NCeKR4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJ9E%2FQD82WOa8HfZSyrcAy8FdeBqIpe45himhZVoibczJobyARkFPvJtZpCnYhFR8GEIq9%2BKpP%2B%2F46IekAe2x1JWcyYsP0eWMlTkYqWgtzseZgKRwcQ7%2FeCFVgGa1nNe3eKZKVLOkkoOIG5NxRTBIjxTMJ7N5N%2FK8pBFfYrPUvtygRQyrtvkv4wMRuBeS52yhWiuB111pVLqTmpzF70GSBXgKVEICg7Ly%2BdPGMJd59AtkGkLNaAl1KFvKfp6GZniRKe2T8xrhpiEw5aYvXd9eGK3doALLVGKyet%2FGE3YDhL1cq3X6gmZVRYZzudAkd7%2BqLpBTLPqlCqempQhwhv6JIKoi5TkbyHKCCrQxmwb4DlICHkhXxa6Lk4La8CU4JgAwJxhgaCKee9bM22stwvYzw6ORECMfcB1leFbNhrBX1OYtH1dUhYPSsKxYIz6XsIOLgAx1p2yaH2QpRPuBCZxsI%2FRMol4TKNeQsGSIyy5kt1%2B5MMB41Qxt2ARNlELUuK084%2BXiKHARnyyb9rMyPqiuRtgFDIcc714%2BM8f10xJHwm6cHL0HjOKLhnMe87Jl0tRf2R3jivb2RCyJpAGbdSY2NBU7bOxiUwwHtgoHYxvA5qXQhzlMbv5pjmR%2B7PdZBtTlqbRqrRZ%2FncbQRdEMMW9wskGOqUByOu2zGQ1ML0BEQiLl7psMbBnlulyEJVKbBcarigJJ3zAuJSZ0z4onBAOM%2B3h54dnOuZSJwjy7NMfBOBeZyx54gL47qu%2BAuyEFhipoCmheVVUb6Xo8wfeiNBpXRXCuPcbUfaqqBgvTqPbFVNRvNmrIW%2FJHmfkwH%2BthNkHGoTp%2FJgdDuvupRNm1e3pSxn68K%2Fa6ZEE2ACNa5m838QYHki%2BL%2BhpSiMQ&X-Amz-Signature=a9b078c0e60732d524d5f5f2ef5c1b3a1fe4a03ba04401b0ca0918cdc4feff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

