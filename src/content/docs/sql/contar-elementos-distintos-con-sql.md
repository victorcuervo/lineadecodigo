---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BZFO3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCWWxSoqRvkuO%2B%2BIMPhJGzoEjg5aOMiFx239PUVC%2BKeLQIhAK8C6XAjnEJgGW2u%2F6XYV9cgGL2%2BRKEmelhWOYw43ma0Kv8DCDwQABoMNjM3NDIzMTgzODA1IgyWOpfd9j3v2elN78sq3AP8Nds5x%2FLsOHOeF3TU9FU8U1M7ntdvgZaXd8YqKn%2BbGlJUB70IK4QNDzU5COqiR5XVxRDGw%2FuDDL1WYNoOO%2Fip0SzArB%2BN%2BB39R5ZZKNOjH%2F7qziCPXJuEU9z1LXYMeoIIRbUanamNRHWZpx71OsMw7y0OSKDkKjVKexwbS1nByt4OKODiwnzO37uv5mn1VIwkxU1bcQsc4vp33Ee6FKyFWSTv6rpcYRf8ABq7jfFi61SpjjP492DVAOzJGv5Smb2HpWpRH02CVxdaPzLceesJ2vVYryB%2B6NIXFcVZRRnf0EcLycfU68lZ%2BloeQyTV0RrrCGU08q1b7ut7aZRe8CYrrWfxdesjSIeAbPuVfbcHHPp7oRwTQG1mHwhncdf%2BPvfh6z8BKh2cLeE%2Fx8pTEnMlHEh80T0X7pL9w7hXPewpug%2FHnOdbgixMp1HJgQweNQ8Zr%2F3Q%2Bs%2FO1mhwJudP012DuQw%2FSUQQLa%2F%2FfOCBfsAqamPIr3NVqtF3oLk7HI7O5HkvUFGKnXsiiFToVI4oJmmrAOZ2ETYYjjD9oPTVmDmP2JBu963rAmhGYBs78xgo72kLKAqOwLD%2FT1rPQs5Cv3CytI7KVOQ9cgd5CVU2q3CB%2B0jDtjxY5KKJNDQZ9jDi8sPJBjqkASOppC%2FiyvSVfuY5u%2BWcqqa6184exiK%2Bj1Dc%2FLUIg830nbVI4x4GWe3AQyrBVYa3vmbjhfpReTDE6YeGqZBV%2B3ebk7I6MGzMgl8dSCGBB63jIHxXszYspxtp3yo3O9AM3I13L8B6cdTHyeX7vKBXraiAoWhqKtzZhZanQL4Jxf6tj892fajdCHo6hMX26gmMvzMertYGOuG2KxFMec7s1L2mxt99&X-Amz-Signature=34f10bf120357ac9794ba2a2f43b33046e1d1891e4f34a530fe8af156ae18799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

