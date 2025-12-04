---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCROCHNE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICUuC8ciVkjh%2Fh7yFDT%2BRqKAczpLhVW4yEoYEhdcIsTgAiEAjdArK4%2FZvNnYMIjZxHToa0uGa8%2FDplw%2F%2FtkeApYJe9oq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFALHcGNJJ2HatJnYircAxgzkqpcEDUvzquA47Dm6g4SflCIzk%2BsZd6l%2FFimdt0o0Y59l%2FY8Ud65phIQrN0zEuaeaAXLyHh9ZyYL%2FZK2Yermhbeh23QU1vdOoKsY8Sp77cSmf67SLCx720iiUdqtBXJAX%2BwUpSnw99qHG3LjcE%2Buvd2ZBmCqB4bQVgrdL%2Bnh5fkraP1s%2B1LEqlAdTnuksmESJyvnXLjP9lIM1P5sl6nOv1RfV%2BuX4FAPtRmigzN6eNKeYU%2Bymyk2EqPmngErpVeQdJbdB40s2AGjwnRqk%2BrkLu%2Bd3tsG1ID9Dnxz8WGUBKkxRlMWLI1%2F0DhA0NQxQUYIl5vuJQ6vkohzF5YAb%2BAOmtd%2Bth%2B69WlMet81TG7X1%2FPtolqc9RDtjYH5UEj%2Fo%2BT0JeSqCOdg2UJ12gtJtdrg78eyfNqGBO7jD6z4%2BOep0D68gRfFlcN8MUpD%2F4Bcr%2BJvOch1jdciHkee1hdh3qb%2BezAKdsESRgeasVx3gE6Jcn3Oj%2FvhmtSasjXhqukOCRMMq344CWTVSjJyGK4AhmUpRYfBljCbUKV0VJv7nNlBwH0QdpNurb2UplkUo9Kw935qfr4CGqFtWw3KOJaPzoYa%2FY2lU7Ievfw%2Bs6rv5%2FF6FEE496wal6oLM9CtMMCDxskGOqUBqzg%2BdU5uj95jKG2Z4RxBjgW6oMUe0ZDT69mxhZC3pPoOOQWiwPvU%2FhjvAcX3z%2FIbR8YrA5NVL8WUIdnCO4wiqaGNPO4Z79sDtDyMPqrJs5flklCrcorH4fMatRMGPpuaAFxrTI%2FTK2qZwJacz7%2BvZeejP6SRMDBxJ1RdvuUFEFf3vM6bwQksM2lwTULrcKvRoXgJ3saQP21%2BdR0OPNIn1xp60HfS&X-Amz-Signature=2d25e0ea5406357cdc812c888519ca8e67998fd561c8b4195fc62d3fd10ea30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

