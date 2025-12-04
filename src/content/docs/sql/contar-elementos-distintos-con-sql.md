---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSHVH5U%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIEeLaXtqmvCIIDX6QBB%2BOzGhkwd6073o7wa2cuzq2DFGAiEAxAQFjEGotKkf%2FO68xGjmpCBGeGBAsA3iEQIEaUwOjnUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDBu%2BGlQwyiO9hoevCrcA7RvuirjtA7wVt%2F6tSEMuu0CYixveGqd1e3NC8Tx1MnrUsH0RYpSAXhATEzwtWCIO%2BEHbAtJxsCghvNPPfRBD79nnhDuxcLMjtB5WfItGWZfZ9vFbzXm4x4vI5KgNmb9yMBtq7Drn4l4WPblixrW0PO3zImdTZ0rYCXTBstQD62cEn6IXG1GchFyRn7UcVv1fjFYAWz8WzVGvg8esJ60kR%2BoTd6iDUygUba8RuFlUrDPN%2FK2vrA%2BFkoXKN0TmFNXinkGXYT7RDRKnj4WCy%2FBaRCoqfQchRs1u78o8cl3DQKFLQpmjxYWTUbt38AYjgdJgP%2Fy0IKDE85%2BUlWuBQJ8Re3gczg2ywB4M5RI5G3NIofRxr9yXvPeRwGn7iQQbE4HskedNjTgljyouAOy2Ew4eL3Qn%2BgZwooYjHHaTd3g4t%2BWfiP4G1HoK57dob3WWeDKuKaj97bfYiQJTgw3WrW5OJtFurJraang13%2FIQybatgYCV4jeAcKUK9eRfqFkv14uVlz1ayfClRdBeTY%2B%2B8YwDsRL83a6yJJ2pI2N60ZACXP92y%2BkFX%2FT%2FXfDd42bz9rxSbXy%2FwpMMk5WRgcG5CWL7mZ4tVLJatPNNQ6QmA3uv4W2%2FUYBzu4%2B7KJ8TSsFMMiGxckGOqUBCX%2B7e099G4nD1VE92325sRWZWJjfN43UyQEmbnGFdshryHOVj2k6xxAYbE0Aa4qSDW%2B9saBymr4%2B4pKtXNbYZYqCSDMG1asDyt62ycRKq7IOLf6vS8kh4gppU0TsqiZ6h1z%2BFlZy1IJgO12cF%2B8SiXURbM%2Bj9FoO6KnKLsnA12zMrq8zihdG0z62VpX8KEFjiEy7xGgDUzu3m%2FPVDXo07Qj2GM9j&X-Amz-Signature=93ea5dca6a0ef348b8a68cc6aae2c54df36a47d50622d67cf6d80bdfac60624a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

