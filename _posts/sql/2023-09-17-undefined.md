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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWKT5CIG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD6IHiU1pP1gECFgQS%2BN%2BllvXUf4zaj3A1AE6HfMujrDgIgfzUK5qwdKJ3D%2F%2F1HHFqf3Kh9%2BKBOoZp36yfXFPQZCq8q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDO5KGOO9rsqIOSMSlSrcA6M1CnlkO08xbdnDZOR5mxBV8gbDJtSuxSmS9AH4Cgy2shQjB%2BWotKCkhFOqt2WTNkibFlqD0ptOpGeoXGrk3ULJThDmt7iuYhaLl6nXnrLxDTbk4YqR2L%2BLt5mzjtuzg8XkNclb82hl%2BpuOeqeVCHwfoq24ukhuOCG4LR5VMcjJ5vqxGFWK9GlP1W11G8PA9JcEmohqa8aE6g4Uo10VivKFpgS9pz46gusxermjXTqg6uZpjgZ6%2FlnPHCY0xCBdl4Bcgny5CB7ZbaTr7z%2B3hJKz2FErCAfQB%2BKtOhocjodQ0I1oifbz4sVQeAMc9aXCVTn6nZ42rIYzoLv%2B%2FYq44OXTjdNjDcdvpRKbFsw7fDO1XXAuucjJ56Lf6m6nrlo123uWhuOxLyVAk9Hzq2buZnbC%2Fw%2Fu9eE7tBWbuic49kZB%2BR4T6Cv%2BSk%2FuoivTflE0JwsJ4cfImc17OVViOFurq42cca%2F%2BgBk56Ca5Ube0ehVGWcETwAKo9C%2B5JDX4g3bhEFU0BG70ICc8xKNZ3%2BYyiX4fW2YNjvpDBemx7dkR0%2F4HVKu%2FHLuRunbkDFMsFn5l0xl1RyohuSElWAnmho%2FMv0BnOGuHRc%2B3%2FQB45%2FbyjpGJhU31eoe1WqHEmZ63MLyVvskGOqUB%2BY0ul902T4Ou3MzjIxlJLMJcpYeTksGINKbQ%2BOFcSTSGQMu5QZXFX7CspSQ2ePoI9ptR6yaDjiWMW0eQHiCljBMmJCRmpecbRuDw987cRVJ9b4KxgeLtFOIgDHl%2BbvKsjVZkpIuwvbd1Rmee7jdlfcZOUhhUlSAriDJqSJ2VpBNaInYWTsoYOAYiKWhv43xHXxYjQaHChThB2WteObRBnf3aSWb9&X-Amz-Signature=03ead00b221b8f791d96945c134f8044d5d85b3e3ee73f1789c4974d70b93453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

