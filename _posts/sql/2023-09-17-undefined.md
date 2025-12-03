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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RD4WXWT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIFcbvvzp9M041rhA5EMtP5pTHCXH7BI5wjz25u6LOgiaAiEAvlnEJ4QkNCq4dOUx5hBIFCh3rphn7T6HIJUBd3S8r2cq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAyYpZB93A5NTZoUYCrcA7SnVPb7sOO1EYNhGM2hvtrapHaPO94STuKe2F%2F6LPC%2FVDLvh3tMuIhDKq8nX2ItL0nj7Zye5%2BH94O3wc0F%2BxZwlTAcN0LgZ%2BXKuXWugV8ryBZjEHzXnFmoNMzZFwc9jSZb22pwiDJj3Lo20JQpH6WwkWXSrwpUN8z0k6mY9li0lv5iWID%2BWBYaC3J1NTfSgKlAwQT7FkMU8Bfk7f77pJVK42iMo5Ttf0%2B%2Fz84T84ZfmaFA5yACOtnC3B45skuT6m7n8bQ%2BHMMKhBgGbUks80t4lh1jv1x1EJHlKO5sGhJrgUEf8BG5iUmG1Mcdbyg3%2FvIhrkhWt7Pmy%2F5ouhO%2FFJKeVz6LLUIIbUBFz73qB585Fyc7G9OjbJkb9gkEyR78T3aY%2FFy2Ht8EmYT2LOTsdsl8WfYRtg511qjA1muUMfGUbNog9tWN21DG0TY0pmQqen6OWXFulZJtkqRlZtmMlR06pKjTxH21Y7xCgDbTXZsdSLPesBDJjUWw1VTW7yYKjFVPSx%2FGDHnON4g5GM2oNEqbSnYKcSh5T%2FbcjsRfPF370p1VSMfgbS03P%2FsHJo0P0M7SDvPSzotPtyKeVRUsUqF7%2BX%2F7gUd61DWSTt3%2BzxR4uhJXogJFbtiegq%2BXhMOGHwckGOqUBg7qIHKftcdWmcoeE05%2Bcooi76LhHYR2AtwrTUkWIHFjzlslJmD9c8mO4Y%2BGrSIk38q1XQTIRSFauwWLD340X2kBEP5oJhGKl2Gs31%2FQKllx1RWewn6Hf7azRKLJeE4cOJu%2Bm3IYxMQJXVPHhOdfGPJ9v2g8Pz5psz7reqTYcm2EW5JLF7IzsFJQi111r67SzBOw6%2BtAKZAdwRv9NoenwC3kd3u%2Fs&X-Amz-Signature=4338c2655e03de8bb926bb005f911fbd250b90f5ecf8c38b1500e5a1f012a506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

