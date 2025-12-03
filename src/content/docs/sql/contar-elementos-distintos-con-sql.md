---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBF55M6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T223836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIHWahXUcUGce6p%2FOFvF9xfE%2BorES9EwO%2BhkAqiti7DASAiEAxB6HwEBqyBESJTfGQPgz%2B1lGYnAN7PtC%2FVGvnSepfHgq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKpHoaGhpHjX%2B73f9SrcA5GO76nNo52LnCZqyS7A9TMdnbifpsO2gOQVXhROmIdin%2F4su3Vv2Kit9o5pRBqoCqwRGJTTwGAnIV91mNWqeDKR0ua%2FgG4O9o8Zo0Bzt%2FWZcHWyNkV5FIxI6Zrr35IbSbu6Mbx00kD4WHSDu8w6jJUN%2BzDI4jy0JvUc0tzVx3M86wplLdHDmI6rqDzLi3%2Bug5J%2FbTPB1dG1x4KD3Hcp%2F2WVgS7RO3B6Q0SM7UIV8iWa4UdFHwrlLQGpoj8ij%2ByiRnbXCImRGaKQcZzNlMb6ofJ%2FeA16%2FpAGvqhWNOghu%2BJV0gvmmhWCN1ElS4f675eGeBdqk9UsLxzeVHTDN6Ij7CZeqZ4S9BzR%2Fsgu2hsbBSVTeULw6YhNl5y3va1qkISj2%2FZq%2BoR8nqPDgyQmTJ8FLUzT64XbbNOxt0buzwWufuA0nlzI4R6RyxmH3DsQDQB321MXmzagNHSNyIZ9iDAIRHzytEVWrTORVH5UWx95WDCETYCQUm6rNsbj9oas64ubolXG6msd8n4pQoi7HvF7LyQpmSsppiYnJQJNm2k2%2FsyoU7oDbtyD8SoA0rcLLb7hvSuJ%2FFEIzHk%2F2JA3ulLuTqh28eosIu27QeZUDrMkPJVNNZP3c16NOZg74tLLMIncwskGOqUBXowlIjsMqXNs79drh3XF9xu5d9la8W0GPj0kfiM%2F0ih0BhVT%2F4e38%2FXOiBWFiJFCp52LNgkr63gNohWNLtNC4d0cKxeMSdQMUhGEMeU1P7K5N1Si11lvtuKwPAopOa7jzaYg8dur1wkusW8SPcet45vHD%2FvmU9RHczBameJHKyQjLBR9k0BzKJpWg%2F7kG4eClg52DAJVb2pYzQ%2FGZdlQy1GucJXv&X-Amz-Signature=6d91a802dcb4a717c1a35fa72088623a4b426baf55dfa566d80e1fda8572878b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

