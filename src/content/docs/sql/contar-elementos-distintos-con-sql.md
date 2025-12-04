---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAS7PQV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCujkEyikEaBDzo48yYk79YW27J6IJL7wi%2FCAM5369tbQIhAO%2BTgxrwuhT7o5l6%2FZTJZ7fR3Gtay6G%2FdXhalZcs0pi9Kv8DCEUQABoMNjM3NDIzMTgzODA1IgzCjP9IvmXOuJ1gIjoq3ANk%2BCxzLQRkpyelagb%2FnJup6wEe%2FknimjWPEFxtJEzasmAMgJD%2FdMWUcZbhnIKh7eBueauxlqB5vduyXw%2FXdJKTN1BuKuGGus8vLT%2F%2F6oyxp0cV8%2B9psCNlAK6j%2F7p7xb1QCuNj052NjiJv%2FgIWrj6i284b0hX4F%2B8QhodsXe65BWujGBmikCjAMhRgC0Ud0tGZx%2FCJu86AHxIhtetBASZCZFiR4TB9TmX3Rq1SUe6zDcBrSBtDjj0HD8f6XxWjgijHFmQqcySL%2FVaxsj56gOso4xz6su4W88%2FEFhm5p%2BkAZjeDjPfX9%2BWZPwf%2B5n4DSTqT3C3d9ENol2KAZ81SNU8vzWa2nySHqvpmCoYj%2Fp%2Bv%2FAl8lz90l8rh7X2hgLG9xtLF43XFRbCsqmaTaEyLTCfpsjQcR4N9ZrepGWfl02uF%2F%2FQJJcvk%2BKl9rU3eNcAdat6GQ3DBv5IZ81Ja2hRBXOXW9ovwWdZBpODoPbHmw5gS%2B0xvBzJCj4sqJwxkduGHUd%2BGOpHSiQenTODh1lFwJ9sui12U257tHW1cyBg5qVB63LFWVb8abMBkkSS7QyjfokWd0DLR0G0GvHkKnOW4GKff%2B8aMXm6qPYNlsP4fPtE6nnA7Gi%2FsGr09BG7UDjDX58XJBjqkAZQegu1JoJXjZzGVQhadTnKwnVSXjE8ro07JSdqrXjzoxQX8eEW34%2B%2BpXjTP1WiG1MUISwcE%2FUygLk9GqEUp52%2Fgcr1gFeweJc2XF%2BpDqIVZu3k5kHEeoBKVRmR6Ua0kVljURoY2ZeQyNyq7cMCGLIcOx%2BetvBOaXCWnEKKhFlIxn0tFsQ1JgEBW%2Fl281PTV5Q01OmXrPFGO%2FwcrfKMr62gYM6nW&X-Amz-Signature=5bf468ed47ff58b033473a5a1c0a05fffdfeaca025b98261163275cd58c32982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

