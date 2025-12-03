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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQYC6K62%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFTPPjAcJnOKpwGj%2FU3%2BEQJabMchhAl8Ihm1v8nwdSHXAiEAzEeF8w9vpy3golrXqbWaJ2Kxs1qgcoPwEtwGYYkQLA8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFCAppYSiJghpNi%2FASrcAyKZx62hUwvLfd9cGkLFHN%2FQhgUE6%2Fm2iWT1fTxuP%2FmJQ24T58QG9lq5u3DtVtIOPYdWXahnVkhJ6uTjJcxXVqdLbM4zn1f4Jd8sFNfni2cU8bJeIkzPPAkj0W3n0zyBBLcIIv10QheJeizYOBfOEbPTQgAhu5xHn832GnzKwQqTYhh4m7XOz94Lfi8f3IpJIxP%2BF%2BsfFJZEqecqZhcJ9X6k6geQ%2By5o2v49zf7PHwD%2BdJJRn%2BA4z39mokTyjY%2BpKN8xO%2FERMa8ZTiFZKNUcBRxWYIHGgvyP%2Bw5kPpgIst8sc92uqXaqYBVdCWw2qLLYvzDdEndFrtt3QmxvgymtZfSSRvglilVLNkESHS1TwJpyWwQ7lOIPumfkdgQIEZSL9U5czoh%2BjNZQ9ZaSdXbwAv0Rqo1dBv%2BTabDKGBZPKKdNA9V8cZ71I3cac5Khofd76NeT6uEuS4EEWlOcrRKeGxXT9ib3MNXAWRL%2FeRkmyep%2F8ifiACGM9BOKhjNoujrna5huUJkC41B2Tlu10XVHblzSQH41%2FUPsIS46G19mYyJGPS7mdXSuCKo9pjVbW%2BkNKAJ5vQCEpvJ%2BZ4Q7jpgkCqvQvsjH0788bkfgD%2BGJP3GMfRhhV0cU5rbsUD%2BOMJvYwMkGOqUBlL22dIrJG%2BpqBvSD2xyBK1ikXjPZsmD9fgIi%2BUvLWa86JExniAqlMiv8YWSwraZDNuJdmzTBSJUZjwketorpc438g%2Bd6noCBEMTzoFv3tS4A6gQXxZPRGpdTNFKXnacoNe24yBbXZz6yB0qYuOx8NC3njlYnI0FFZ5STe7th49TA11qUAbeSKxdTUGIbY%2FBiqQM7hVFS1Iotc5NkawaNdlcEHi40&X-Amz-Signature=a811941e7d5c22713ce653c4eeffdd5b790503e28745f66385b0f4d9cd7d5801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

