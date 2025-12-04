---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LYNFOYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB1AYwehizsgFFcB8F0U449NtkSZvTqBBvoO%2B2t1bKN6AiABJ3ly4qrm%2BZLgRjbmp%2F6X3fR6II%2BO1%2BukDU2MYhqpUCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMUK6TKCVQnEA4AGvJKtwD72%2FCM1qk6GSW1pqyT3Sl8%2Bj3CnAwDjbrDjPLF578jInf0p3nf4QdkQMCEfyc3QcufooLl4e81IcQQLKFMRHEFGjoN4ge7jvOmPmCqyHdkwSP7PvVi4o6vWuhAzHtjBVek5xDcYNz%2B4HqMBEZX94VMqtVq9UbwuwVikUVkt1SLeyZm7bVNSvnxitPtguvdAEoeBO0njDOsJen4VvREOKfwK08NpqsxFwGtJZ4pK%2B8ISL7EX1yIegZk%2BfKuMOV2M0b2z7cNrnhRgRwaOdLzrJhTp5FsraQtX0tD5y6lpjtNM9pbegOGnXho5zKrRPM7Z1ISRHO97q84OuQsjAFECOUQ%2FHX6%2BlOT1pMstQFzavmu1P2yxfIl03FOm27PPu7AcJ5eLKWgOaSBGgXANB32I4mVWPI62OfxMih4O%2FREugy2W%2BGDWjqebzTulVwxUo4%2FuYnwVASlR3cjKmTNHxrwoRX18BTNFGm8FdR75wesoGM8%2Fq%2BWfJStZ2y%2FobAp%2Bk3wYzLvY5WHIWVIr6SviUXKjoAf%2Br6H2H08NgtBESEqR%2BwPEFwPAIG8lB6TdUB5VNDnUwJhqqqWABT6eGwA%2FUCGTVz%2Bm0obf3EddXTwERDxgtD1IdIyK38%2Fme7bH%2FERmUwspDEyQY6pgEC4C1JhlzHtUvBV%2FvZsXxyYgyyN9kYmFynD3cl7GrpSN9nmMUoFrzrVk0f%2BIpmvpiX6%2FDWxtYEjFUikObBVF8eRAaeSaPGaKV5NK6RqTuTlwG8kcehgPKuYWgtzYo9CRYi6z2ellgS66Yw8Ipz3IrCKOOB7W7EXACD5DblNXFOLXV6WJ%2BlqEpfx1OgslpE8vOBvUWg02gYK7qYdkD2Y0avncF7KO5F&X-Amz-Signature=59a136f1e7cabba444185c4fac17a960a7008ba0ea8456ca38be90b0ad66ac8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

