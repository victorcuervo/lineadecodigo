---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBPPN5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQC4S3DCVxboJeaK6wG%2BwTP7ZO8SFY%2FQK3FAMUV0Q10MTQIhANQPvjxELb9J5eTlT1FuS9mAtiqODt5ooZNdhVObcHLvKv8DCEYQABoMNjM3NDIzMTgzODA1IgyPDrTFkIO450XiyIEq3ANbSCvraO2KfWFOH%2F66nDtPUMwr9jDYvTMOBkHDirg0IFRrXEBM9YtRdBdGviag%2FF3n1Cg3WNgAfNhZsDqTOjucp0tujB8teVsjFdUoYSmi5F95c%2BDBVgoUfKn%2BM%2F006%2BiUPBwkvB2oIMqtuyrBDJsjXrA7hytxHaETpa9oTP5iP9%2B0zA6GoFMFvjlCMisj1f9iQAMxik1GAi%2Bke6GEHXmnp%2FIKbDPOvyVcjdG0mUcuZrrxtiEMUXC7l6%2FCu4430adI%2BrPdppEzMR8E%2B%2F9IW%2FVXeTdJbrrHLB%2BkmGr2iwBw%2FaLoGTHMt17xgQ6KBRvaGX2lSNYKswRVBu%2FbiifMZdu2sErPX5fg0P17uH%2BK%2BM6T1WKJFFnPqoN3ieXdC%2BOlY99VorZ4M9ep4EvAMIew6KwLEQHSO8dXtywN3Qn0ayt6qhK%2FmCer9RIxMxHXMtA%2BJMlwzqhcN7d4hoPrD2FW1T4P2v0IuWDzYO5OgGZlDTTsN6liuR3V4%2F7HGjlGat9aXqSAGISGjoPaP8HAVt977R5%2BJSaGRYCuaCIR6hMb6ImfUqVWpq2T3eQ7esvf0elDWjjKCjw%2FV7FCX4633fct6vDyH%2FutkWq07GLFZzWKX3zLIk2cFJS5MQ5cISdg7zCDhMbJBjqkAVDYtwHMEkwYN5K6JDI%2FzKSOB6Gww5sR23UU9EYJjmj05ueICyK3vInWhSE5U6lGipv9h4di7dGIDa8a5e5iT1EXH3yUJ0%2BW8ohtnvATVf796lugXUwKDqsNtKJ3dCuhHyCSsXAtzHVaOeiOAZHdd0ifAbRmQimWC6OtnE35x2hRR059znQuT6JoJIzV%2FHLhk5yTtjeL%2BtwOleP%2FFCg3HCyvshhf&X-Amz-Signature=ea5678f3059d57008873c600bd407e891ef0b46063c9f78d6bebc925b892ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

