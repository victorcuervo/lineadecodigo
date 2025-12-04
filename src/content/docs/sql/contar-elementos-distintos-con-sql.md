---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6XHT5OZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIE4Kb9mfBefwNIA4JYlUyLwOHHqsAf33Hxd3Siub%2FLgzAiBN4NGa68d08Zp9p5iH39ONXCPJJbhlz762GIhs3mYN%2FCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM83Fzn07QdIovetdcKtwDTTHiFowl9TdU6pxXKii7KSyRmg%2F%2FYEfUWJi4PFhxy0iUprrXxgSMiKl1yFTRGF3O80WVDnvk5zzhY45Bj2MxO5dV%2FBRinOoRl%2BM03fvPg%2FMj%2FRKjUuIx0AWHS7hQ14hhDiEVj5d%2BdRjJXhxl0b5Qq%2B1yHxY5WYKexqoi8EohzgZ%2BRxl90Nl%2FraKwFvhLwG2kQNYqJ6Kyg112ZHiIPtiGguIWmUzj5D44AclXVj%2BGdRDUbk4AnFlNjuN4w9iWE1jk7FKmA7Vkyo9VY6usW1lQPmOb2916fRzFB4xlf7ecIN%2FzuzXDFvqh%2BqTOLw63VuHkyKisjhXGa0wKOncpFSedE0efkfQ1uIMJNqy5ZC8a%2BqgyXGYPZfntCU1d4YU2t0gROaE5d97ogamlC4BWQbXWg%2BCvm17MVyWgFvrvb5UjaJn7ZyaE5DDUMBXvt34o6L9QiLxAJyl7yoOiGQyyxPpNxDvHopYMwUEWaETgUvGVZexzW1PlqZf3LBmKTAZveynWNJtga9hgeMrvkU5lwNDhyXu9NWROys15c6g7uEQMcqbCvIrguM9347fjAm3nr3rVHVlpOn5zzXbwZF%2FrmblMX7FUxGFJZtbhutqsGc3spW076wwIIwMacYjIsCwwtq7EyQY6pgFGA%2F2fnECVTmwvixF1kUHaTFC1zeoUU7tRk0fMciayzh4kpYNoxe9vfOSF8zFL0X1TjbOcW1NfrwIJaiqtgOv9LiPVp82l8ESB8CD3PuN95nhTcbygPui3iNrlLX0y4DPbRZPEL1PesAlmxDBQ4zZkv6%2BH5p%2F9ifPTDcgDYPA6DteK6joTyyKOlP46a6VO4T5FqCLqOfeoee1JId8T2cpRSC02LpAb&X-Amz-Signature=6335955e46c4af1f86010c6d7d83207926f7552465ed73388a2a49de998676dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

