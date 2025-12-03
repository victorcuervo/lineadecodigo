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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE7FHOBL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDh4cFGuth%2BU%2FqAMusKSmVr%2FjBGISDXezFpUxigBnaqJQIgK3Je4cwXuXWDYi%2B0l9UeC4URaLXxoVaYPE9I%2BrvM0zEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBGnLWxjgDx9Fe1wTircA1BPJ54tsjVOv1RLGnjdn8zLXPAUtOhPRigdYRi307G50bm6ne%2FCRm1qg5oVS3U2IQsZihn9Hiq7%2FReQETgwy2uBf9UoRKEmmJv%2Fj4yOh1V7ZykZk5pnhmrYfcaFhuXKv9%2FJkZbfE0kbdItJXjA9QcXkQ4SWas0E6fUv%2Ba7uvum6yVffFpNgXroWE9%2BExSEAXrxufXrFJOoCWjoTwwwaGOEN5b0zfpeADfEXOios8IQmLczaN0QgLtcFCgcLKREhz%2BkrnWCv0X33AJFXuMudfpxqLW4SqIy0zLqQqoii3J5nPBTxZYodGS7xaEMW5%2FpBOBdxDx0imzSxSBAFVX1FLdQaGVmmVPYRanFHAhb0yLC%2FUZEMHkpDpBFWiMXb4tszoJQDqa7vppIFK%2F9stvdCgPrsdIrZ%2BVNnyqxBUO1U8zeWXZMAvq5yFrg0V5wUOlMNBtaWXHrDBmhfgaYO680OFy5KjOpA7iGC4wVN9l1jsq0sQfm6%2Fioiec7MGXjjUsbF0qsJzEF8Q8x1j%2FaRsrFlTHjgF1TXV0Vgs3NUVeD5m2iySehUS%2BOmMjZWthUPVWHpGKslzgAMuH%2FSDbXd5vfXzBH6YP8pBIV%2BkRXeKGUWwkrFW4ko%2BVyzgYbpm5m7MNuav8kGOqUBlmsJoGuaUWgRHY%2FskW4XN8HcpiKOkgcf3fWpEbGBtKTRaJpoMrt0oiMMqUejrPQPg8YfK374liUH1mZMYp77lDzMM3%2BLF%2Bz4aIHBJWt0a2TdJBZMkcwZ324AfKDGEwbPpdwfkxVS46iiBNNoRCTJNIAp5oc6lNclPmLEkMTk%2BlkcJ94lFJUJlSoJaH99FMRUlRN7Klm9u9sFWUt2Nzgz2XyOSi6W&X-Amz-Signature=63abcd2d9ada5c1851e4cae7b60bfcf94d4216283f50dfdf83a8d77b3f1deee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

