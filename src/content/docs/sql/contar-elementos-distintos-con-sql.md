---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPI4AY5N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIExhYxlyppSutBMJ5xnYZjRBhk56wRsyFoxWHdSrZ%2Bp1AiBQWQhcz23HzE9SqEjcLCzbB6yoSlOedR6XBufzdgZvYCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMNNSaepSqD7qlvBF%2FKtwDWMmJDI8F0fcWXmGFk1SJm1AoJqhGMQ2uAe%2F21uCR5vdDjbiFx9jrKDgKvJF3Jri%2BFv8JdwxOCdgBXCb8pmyQqW%2Feab4nyedAP%2BgdmXSyUrmonuqBxU%2FjpFjnGniTSVAUCvqVElTWOfwP3lz32y2Rpfmku9Ut%2BriPhEASvjZ7WgWuFAMSG8x8VrJ6LwIw7eTAT7hpN4oyINujW%2FAcmhDsO1tuEsKEpc%2F8NT%2BNen70PTN7ungK1Dl4t3CEULDkgZe%2FBUDoVJTeMxeQO3wFXH6ADc7HV2D1n4vN%2BqIjfkoTbE2DQH1ZSNLsjs0HJGHEpfLMcn5PVQLNkgVcwQhHTYQeH4zNGaKWdwnfj9sXJkdswaVFIE868oYDmWmvMC2LkrTLtvBQma2azuhHEYftksBoda8olAP4xJHLqeFl5yo6OF9ymqGwNJ9Vr%2FEj6E9bV5zsL7co6ISDhBImvn1JlhuZOryeYuY0%2B%2B5vCyAhsPlOjUI23T65Rbjtx585YfbZMFO14HIwIbYbpmCM%2Bzzw0V7gm%2BzXyZSUmsp0bgzA1aECCTLZAGJZd9mxoLFA%2FpchMpxrtn3Wx9UyZrP8IhFcsg8sTvg3Vnb3ETJjV0by9aQmEX1I1s6S9FL5MgU8%2BGAwoqLGyQY6pgEOXX0Uogeniz%2FwIWAyrPDd9hH87%2BbHWXqYvNZYgglhlnkJIQDKuggJP7w3W3ZNdHmsSwzGg8RyZZaq1hgg52IGC36Yi74qQvDvoDb%2BWyWhS4lhSHmJO8xi10%2BYESO4U%2BR7rf9hAg4CkuCFhvS0f39DL%2FICHIlrwfKI3ecaiEtWaazaX3bGMmbmAhYIER31wtow9%2BYI2DYpkg2tPAHc4nAScm131uTL&X-Amz-Signature=eaf3ad8c898ce6f62ad400feb19a42d793dd6050293e3962af62d0b9ae1bac18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

