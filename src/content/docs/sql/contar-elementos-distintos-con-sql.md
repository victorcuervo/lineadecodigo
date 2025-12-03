---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMCMDAXO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDSGVl2VWflaOOBJa9%2Bl61pOdGkZ6HuXWwHzu3Byz95zgIhAP3O3eZWNgajSqWMWIdO4zYQoOG7TDDaGKwtdlSrSYBgKv8DCDcQABoMNjM3NDIzMTgzODA1Igw6ir0lPII8LtumtNkq3AMZqDTry5vF2fUGyYQCSXt16WKhXKmw%2BHOONn748Tuor84vn%2F0jvOedkNyhn8YXyVqDxAav7vvL27G9yhESsi1MEqHFoaZh%2B0WhhkZByQPlZJzk7VA1O8eLLVRai2hMGTLxswpEqLXejpmdoybPFoDDzlaQxzTqSDsz2RGdVX3IFoPHvvApqbmwWBVLd0UIXAoHuJb%2B12hCbjGyJphvh2GkuwRzxZ%2FMt2xsnEUS9%2BegSRUAJmDLEuMkdGPvzOJOZcjoOtomeblFJEEAvz%2B8BWWx5Oe2vd%2FRWD8nTIN7q%2B6mBswytWTBJ4H3hnr6mf8t6Va4OC9aiIeGoL9XR%2BecWw0R7IrFpcejREo6z1oqyHNUodG3aGt%2F%2Bsv4ojpJTb2lbCtAJfllqwcXIgC0AQ1nUlOXVg5%2FTLj3SCXByZ7hq%2FBYFWEekTVKs%2BBzo6nzQovy6mNGStd9r%2Fh4DkjYFl4%2F6DeWrYsZg%2BT6nfIY%2B8a%2F%2FSB72Vn68D%2FcP9SJKwsrRy5WD7cVBVIjWvWWeefOgxekQzaspZGkmLFDQxu3DLZri41If9mPYfvMqiyI3jbs2jgbQhd8paeJ5HRMHAe%2BKryMvE7xRD9I0QtfD6CRW8AE%2FVD9xdecSm1dY%2FLwgMrI3zC93MLJBjqkARrTPYk9EotJ4BTcRjkF3E21V1VbH80iID9x8lwhw7s60l15IYOgUvdEO%2ByRRdqM5EUBYO%2BCIu1u%2BvyBMPCbWqDUqWKi%2F7iR1VHogasgXQm365ZcNjhneukXu16Rw0nT7RjNiiMpC8pKwecrclncl538SwMGHxs5WrD7mF%2B8g9BdqEoKVVA1u0OK0%2FN9sPOCLgV3dGnBmdGHoW1%2BczL5jDqgX%2Bub&X-Amz-Signature=9d79567bd796caf79fc7f87f8af286f437e8303e0ff8ed0c40cabf5db40c680f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

