---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GCSQQTA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIDVe5eFQ9g3uGA8cE%2FhH89%2BKw8tlFuDW%2BZ9VoeAtqWyLAiBpTEpxDkQMQQgaQoblquvz5CHmVmoefYQZE%2BNiEbzmnSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNB168FegzPeoMMX3KtwDI8z7IAnhNUioUR4%2B5sFcggKx01tXv%2BBv1GuZOwXUpGhv8TSGpjKujiyuYCH6rmBvStXU3O7h0IwBw0Gd60DPAbt1htqrTbaKa%2FRALJ4pwFTuFZM4rFYER8w6Ki60nigyj1ttRnzOTi%2FsxFEyC0AFh1jg8tgOxsArYaB%2BfAzVqaAv9858CIEs3VEY6k10aN0UE4N6qu2KQYwkgwTR1KQa3idXdZvV%2FHn3OsF9qXSj4T467d7ctgjWx%2BJ5gAIlQBHLm1qPa8YYjDxzUNZ6EMeZ%2Fop0MRmRP7sVseKq8sRdRJRlx%2B5ZNc%2BmhsW1NfW3g2EFnHOkCCKyEWzEIwNJEbyzstWwe62y7OCEc4zgkOYXbByu12zzG3AwV6u79cA%2Brg1T4ZihUhg7kvsRQ83qypZO9wOVt0NR4hi6kIGCNK94vtdnqSGGlzatJzty1%2BdFr1USdaXnKwno5fHikOBpUMjQ0dJs4tb9FdQCXLH9O9rTNxV%2FybSq33yV%2BBRjAnBFraRzrKbp7sGC%2FdEwcmK3fieYF6gpjhsLukFiNQAy9qGF%2Fk%2FC7SMH1eI5W%2ByPeXriiTU36lJYHk6J858YoM3TxWX8E8ZYDavVMPWiXkqY91s7J9%2Fvh5wClkz%2FmsXgUt4w767EyQY6pgEy0bM%2B048WrelyZzB8pjY%2Bn0z3emY03U%2BCW7J2Xj8CUzOxVOMq7Ch2l8iKxK%2BhkbEdc4AKS%2FDq3QsGdZFK9boY5CaP5qVV24ONx1vwqJQiIyymcM3PYFQJLgkxn8mNA9qa50YPRbAvNMi1Thg07h4gUtV0NKPkXyQPCTtssuEfpbpvUvAknIdRUwo7X3vs3qapg2jAkNVF%2BPqt8ZMEqtyEEuqZ2%2BLg&X-Amz-Signature=ac10134f58ea5db50bd92213db42e1a5eb7ac58dfd2d7bc0cec6c367110c5a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

