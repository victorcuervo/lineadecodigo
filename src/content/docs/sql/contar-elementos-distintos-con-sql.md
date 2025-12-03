---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RRMZDV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCqkLl0qqokhnl%2FuUPU8pskW8Bc8K6kHIvzxsESgXeUgwIgR0OfC%2FgunNqIz9oo7n41ABmtG00mca7qeKvBjhyqbkUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJqfSVh65dTcE6sezircA0lYTn5Gxs3TPHfQYvtW43zuFnAi1J8g22o%2Bw2jU2boBktpz4HMn0L6ZfrxZj8gRuiKQA2jrXW6rSsSRr7cx74bpPXGtiZ04Jg6jOw9lenoxmX6V5jIJfakiu4F0v0PGZyRw9CVTvhTDKmuUAugeKPxT%2F2f7wLXW5wsNiaiJhKwXxiQwf%2Fhvr2uivVvsqLsSbeh5AKJf580FvlVGVqYqJE0sSWwAeahDbk9r6tso7isIVg%2BOHOaXcAG%2BePoO5v%2BtXtwsJD8VXt2zMzMcIbrhSt4TEa0VpIIdfZOiUJcicT%2B%2FSy9I%2FBQuiCDKFcELmcMvwQhjPX7zkSrxPaJpMfdeHIbTrfp5au8e0CCT7ZMfJXP5fuG%2FKEyVRVztj2%2FPsk0adVC301dH%2BuEMTqyEnAlycCzEzM%2FxUAeV4o8sktO%2FOLydgEtFvQFXXCn7buQN3onmID97GeyLk76km0Fppx1TD0OdO5SXNRAiGPoUKQc8PGxvGmpTMuYsDTiuRuIMDNp1VbKYGoQeX9OmazkGWY%2BDFA%2FsZDpvBEqeIRHXhLxjXMC9uunGO6JPFXvsNm8QMjRxYdUOb7lIaedJy6cNl0mDdou2rMpktJv4vUIaemuPhHJEEV0XGQ3xL9ezwBzrMMf3wskGOqUBN68p8CtJpNojNgXZPrG%2BWH8Dd5katgRtr0AVSXwo8bXUjZZL8H9nCbrQXML7EXrypqcCkvHCVUqsTtF0r9a5mrNpHwi7y%2BHBT7PHsXFpa5w6ljHZhHZ12Ngou5R2LmAPwkuXOs4BLWXBsRwCjqa0ohDcL2IRvom0%2B9GvW5L4kAPKaW1a57%2BoL1xSjwbVtLm8biErhmOkw0q3j%2BTecwss9VGjM0JV&X-Amz-Signature=9d057dff26ea6c9f0c8463b358e0ed4c625ab90daa6c3dcdbdd17334454a7702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

