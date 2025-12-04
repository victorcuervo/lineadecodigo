---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QAEGRW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDIf6%2FH2xqcQGjhxtbA7jBQrgS5lW20B6T%2BMt%2FZeAlsIwIgOZgLTONojHaBh5XK6grT01EVqhwczrAFPoRwUSzCMWsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEHF%2FpgnUhVc5WKCoyrcAzTVCgteBEzC7Tb7G%2B8SLWNOoquj72SZ3fzPF9i6inMNrSzwJ5rfCHtuyneS5B5SMJt2zejFFxfPPIKoWSopaufZG0wxrsM3BsAkx2%2BMwTcS3Gnjlf5XozHitiYba6mBd76VuG%2Fx%2FYXEFLHUK%2BOp%2Bmf0cvs7Iwwt4QBVrsVvjCmhlA%2FShsg4sYnguBhI8%2FOWwHqeqnjVK2LCbrXrJudm5KcZU8qDfTLast60MLy0Om9rUK3bb5XYKolZBdtwzg5HfmPvMeBvxiZ3KWUlfdR%2F4pyJo%2BSs9fqeezwt8gmDIybkaPtqn5Y5bdUDjoU4%2BLIIsP%2Fe1fj467yc%2FEh1uSNSQ1lxj80g7EHl5B6E4a%2F9WevzLqZqVBMxoVor%2B1oxJSv5bVtGGDE7yP0tZFBF7V0cGWjj%2BjKa7tYYZ6lyk8tJ2wlWSOqDMcA5%2BmwBI5JCEqIw0aY7M%2B5laDVK9NHJsN8m4lG4FL2m5jgn0xMVktQHmeFi25ks8rYQeMILIfJlYpu0EqLtd41IUmj80u%2BZgHrBy6UaV2SrKcitcThxvcsp2lfOpAFinoxM3JaU63O4oK6iYmX2zFMQuLEeHTkwbIOQh8rThbOCGKOXX9g3yC4VyvGtpSHrxyBAsHBrjk9oMMTmxckGOqUBheiTxeX%2FASSSqfdoyhyOdaCJ6qLeyBbM88MIyjCTrqKGPqc3lVK7cN8Nm%2Bwo2yW%2Bp7LBCrNyLlfYdrVQqMg00IO1atKMH%2B8eMrWhpma5pFpmBIEPl1R6BP3u%2BhZYIz1Bk1Cl7O%2FkBSWSMGNWJ%2FyHr9qmuuTlPImlG%2BZXO2rHSBzmbncN%2Fo%2BbeCY5Eu2zgSp15BnUCy%2Fj6V3l3DM4QP785ywlJpFw&X-Amz-Signature=74fb5b57b77fd8a8695630c82ab394b7a2a7412df93ded88d4b3d3876afb6e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

