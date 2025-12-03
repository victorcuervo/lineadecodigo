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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFKFVUT4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDvR%2FgZPVrSSi117So12JeXvwq7YWGp%2FPvR%2BBMMZ5qmQQIgUmw%2Fd%2BY3rKqfHLsTBTOTUxJhbhSIs2AK8CTJggyvITYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOPEUxevBkMHpTDY9yrcA9ubsEY0ws1l0yBViGKSmxouq2S0UaUpNBRRmmJ75bw4xYxU0WlI5lbXTV5xVqq25O9B77Uyu6fh7%2BjxK12c4oLXUgKYn1vlldl%2Fjh5%2BbKrLO4PwZ%2F9v8LkEvusG5gDr4QHhe9iT0KzkC7w8%2FdZ%2F9Nlbpdz5SzOO1%2BLESHEDshpMmFw9Q49ckwk5zr7IcgT2Ebv%2FvhJHGkM%2BUs4XkwDNVKW%2B%2BHSyzG%2FeVwsufkPw%2B8h44ZD7zILge4lz3nG1m6dUx0TPC9HSM8KMhHah15keqr2fg6mruKixyQyGkkbQR60xL7f5rKIiHYsrG9nk8ytcA1ekwRlyyjqSCaScRlAR3oq7rTvS5g5qVOqq5bXLNmoNIAksooXPvd6SJHNvc1%2FFidfi5UwgsElmwug5nRfo8e858oRDtHglweQq30fLcKSJpNgvwS1E207T5DIRQAVoZYgh8S4ad3Wxx4WKld2CJ7XJOA2UIdH3oe1O6w3JZAOI3dY7gWVmFHe27GnVAzS6%2BdtH5wsqQhDap%2FCSocZFpjrqInRLrwuuZPcT7w4ijOIwjtBSwSaWyRXV%2FuxCshdiXBtONmd%2FNYXU%2BZJqvOq%2FgSVfxMbL1lWik7yMntdy4ioUQz7H9LTkOlnHu%2Fa9MK71v8kGOqUBP%2BkpdRcOjRAu0ZgOJj5%2FhFJDMkLj6WHwdWQ9Lg67CKvvO4Zbq2A3uYGF3SViv%2F5aunNlPJBBPGPTd%2FY3J%2F%2B72hqGdMw3ZYAOUid7bCHFvViJDEJ%2BN%2BqK7Th6pmDS9FldY2cmolHBApCWImMXxi%2FlhXEaJFEe3zxDc8LcGuk1XHN3ULKWh%2FwKu3H9RLwV6bq4Ddsclga6Zt%2FHDIOQa3cvnHEdrPh%2B&X-Amz-Signature=e81dfd63b13edb08bd9979a4f2481a1013cc42540326711811ea74601b865074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

