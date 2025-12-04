---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHRVW2O%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDzW4zGHpwK9yUedFX8diIm9jiwSD3mxuZBam9WlwcWlQIhAMCXt7nDKSdZGL8htzqPYQjtImQPiKuwRgvPFE4%2FhuJuKv8DCDoQABoMNjM3NDIzMTgzODA1IgxIs8AJLt2bt248ddsq3APEwHdpDsB7UPCpKl9uCTZQuVB7OjZYAMDW7uxIEftkWxG5xNt4VSCxuRickIXbx2Ll2G5sVdPfQmwb7kvfNuW4qg8Mg9Vi5SqtiYpUkGoyjTv4WRAfMovwkMwXQ%2FdC1ktU78DGaDzhJYGhuSYEDLrC%2F6Pf4uzPXEqN8qWW6BONHgLy29lvKqD1d5MDHNG2r9Sr9sTCNser7iKJA1uR5Cu0dHhQSVMN4DnrIU467Gdu5l3fj8H%2Fc7FUJmVXOMghkIo%2BimwIglPbo%2BR18VVW%2BeV4SpZrQQDHUNTNjUGhnoe9NFETFUcktLfe7I8tU8BfGf0xj9d1UijQbhbN%2BLnm3ysO4d76xI6WsHIYxf%2FoDS3lRS%2Br3eWetFGVP%2B5Ya8AXSupmWzZIa9iM6PUIl8ypFm6vSHFpPen3Pegnk1eGN6JVYLQBKvNf7yN71aSOku6MK1T1WrtyPSuDyDLusOERlozuCGfkk%2FLuCHhK7Tw8%2BCVjykAcntFke2rvJiDTJL4DpN9yjcOMBzvS%2B%2Fe2kV2eGuXwMljeZNHyzTPD59zFAfvIeVjUDgVIzMZla%2FYeP1ncTOvDvQ59PPoph64PDexFs%2FfxllBYiCa%2FeNFeAk43sKL9OGE%2BKZuDdpx0p1xYhDCTtMPJBjqkAfqlg1jwTMfEJNtPzCL%2BmTW68ZHlJBzRZE%2BveqJ%2B7RlOXNQ6EWIxLduT3gZE8mRMAhgGRW%2FiBd29MqYDmbv8SUzjQuA1wIdwH7E3U%2BYQTEaho8w7JyyNDkL5cPK744Vs2SG%2BZWXCataQrHrz2TsjtvbTtw%2F1br1cUYsftIlgFf8dUqjPmJkoUGKuA5S0VvmEAMPYq%2BOFrUiAUg%2FDa6UPlsDCQwaZ&X-Amz-Signature=cd15464096943c2b7d1f5eab35193e710d400648b8e14028a083e0a55b897f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

