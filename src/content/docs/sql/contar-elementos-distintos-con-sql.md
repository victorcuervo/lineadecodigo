---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCGSJANY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCWv8lNF4aNsCJQ6LKmUB2WzKDpwBBg%2FG0m1ICPNJfZLAIgDK8m3scjKY4PphAUSUYDiMQP024YknnsXwiaGSsDN9Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIxALrukqAV1JU6GkircA9AIjFaSaS8u8GFuKWou7qWIXxXwfb1RuhsI0phgt6SPMD%2BKO%2BUd08P%2FZ26%2FNY2yKAfVfddenuu4UB5BGi8tyxv6uzAXiCahA9Z96kWCckDgfhVEPjDAH2VkTY3X0sONByhGGs2%2F1b52Rp52QmAkkXtOW%2BHSjNv8ASA9kGFp0lG3F%2BSRNxDJogH2rlAgyGbamCKxSXUnAnmWTwR7TLi1Ish13JmaewW%2FyLjtcjWlnJgBrS%2FmwsrNtPkSPWl2Kfaxtq8T5%2BFfFKrUlgdJxRC4ymP0sFHuULUCrK5Vul2fKO3EjpIjmYOcfzcCGK0y%2BiDNplhb3C8%2BLSSvyc5sPFugm58sRwAbe9Pvf73HPt96qoc4PTLTPfZQVNCpVp0N%2FF%2F9cSsHnp0zs7%2B4FYkOs%2BKc9SbHl43zhPuIFrApoMxUwWp0tGTYfGyBAannoeVkXH5pdo19v0GQ2k9G4qmtZFS7NZ3gmwR2h%2BgsIv9XWNo%2Fga9N8F%2F1vNRT1a%2BVfrM7BS24lCsah9yMqmuUUdxN5mYZ%2BQEwrVN%2BbgnmOFMqENsIMzfDMipsQzGFueNUFtPie%2FaP9zNlqh%2FkctnYUxmF%2BmCC2W3x61%2BMUloy9F9s2DEZyJxELjZDdj3j%2BgQiO8YTMLHoxMkGOqUBW0%2BSkE4bjsQSU4wESXP%2F%2F4GHpHQIZYrX4VL%2FsbcngwDA9C3gM%2FdnhB4PBR6xy2Oz0Qh1Gkfk94JJZBTvQEnDxqGL9nQkiKDLU%2FdblXYZGoRiv5Ssplax1yIF%2B0oeuxH7VvjTPn3F9W63AW2V1ZMpZxO68ilp1A8SwSUYmTyvigvvByJfPsfxfLGbG3K7w64M6fPPnUyth7wT4sbyDlFKB6qUW7%2Fq&X-Amz-Signature=ea345054e1cdc0466056774270e8bd063ec64b935c12126883ea575589b27eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

