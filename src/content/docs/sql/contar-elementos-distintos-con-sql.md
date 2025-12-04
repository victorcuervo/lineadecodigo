---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPEWVZU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBJsHJmEakA4MeDnFB9iZq4wc3qRFwrirgVgeJKdSXOVAiEAnD1rEPcvFap8D4gqKfbJPZmoUga3jqcjwig4Ut8fV8cq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIn1P12lO6n6Jm7APCrcAz5U4jYJ6ikHJ7P2hqsbi2vMh9WrVgI9g3H3UAB7boaDZqMSq9wW85Eu%2F3EstcQDPriYIqkb2IJb4VztauJcXbwfBrYuvfqZoPLVU7icTbZ563QvlddgwoE66SQCgM01xW8YnrA2hC2zXDVkA5K2itIbM2nENqPKwtqlCYBtYXixL8XJAyiPYF2sVlQ5%2FTsBWezctwGs4sJ0Sk1yV9vE%2FiIadp5b5mzNb1%2FNDZ9Krgtyx%2BmQtIngQqAukbnDiQnRW%2FEPgFSf8LdKJOPbXANesiBi4o9LWWkMZEkQFyadrq2et%2FQ5MaT4YUI87CpYnJr%2Bm7cQDEZPZ2kC%2FnbNtk3bYbgvMWFV4%2FPs4W9eoy31IfqS0Sl%2Fk%2B3hwjHjlzV0LPPWjR4iKqhhxpUAtnyMJ%2FNGUXeSRE5ur4MwUzuIXNHYZ2%2BjF4MnNd%2BvU7mqGbEu4QLE1fPSlkaIZXxPLShLT1wR%2Bknfw43SY%2BvjaxK35hpa9rumPSHVhkZpAXp%2BUvYU6hwG4Rtv4vYd2V7JXX05jdiNfIikzo6jBfvvwe3iXtTPe5Jp35d%2FvPf9ao8shIHKkhz3t768upwLevaMVGrZq4dD8bMRdTbsHYMATBwUgxP8C5sNg14UZdab5SQ25orBMMGDxskGOqUB%2F4V2v%2FgFeVC4B3vc6dHyB8cqhIxy3ELHWNMAXzPruS%2BWf%2FDY2Xx8cGOtMOU9wMNeB%2F3ABvPfyjPy25gFdiPLmCx2OspBCgQru4DGlG3eojKXBVNRkTT4x5P8K7n7xxCLU9tn1t%2B6oFTb2ZOvyTy%2Bu34W%2FFjFrUad9vJ8LYy381xZHIeERAcxu0OjLOU6iF3CA3oo0e1P6EWs%2B5luhqSJYLB4t7i4&X-Amz-Signature=d64bc6284ba76c272cb40d0384f500052865fcfcf44c5837601a5d3799536204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

