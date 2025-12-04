---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q54E4BQU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICUhEg3DTiR3g9c3J7E7swssY54bFxpoYPT8GQM9aQB2AiA7h4GAoJyx0ejMgAHukezF%2B21DDUO8jY%2F1velPJbwPvyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMbxsEK5117kNjZbNeKtwDAttxrR%2F87NW8LP7m3f5OxpbhtpsHnbbi36DXcKqRAwZVhCgKg23PHBVi5HFJgBdM90kfFi0qgzgdOAE2rs2SwRYNazI7PkEes1J6hSaxewP5wzugMRCoAcumVlQGSaeLY0IitYoX3aP7J%2Fin%2BlcZaxJ9hhMaqLKOo%2F16l6LpU21nyb1oA9uztEu0XZT6UUsPxg30DHMWYx8le9G%2FbVCoxZ5tsUUp3izcNUCYacYxysd1ccbaUBfBKzO2GF5o%2Brw4vmHZ%2B%2B5YzSi3jvNxuIbxF0GhyjAU3VcloNOc1a5v9qMJKV691LxAIg8m%2B%2Bndhlw3koVnoWa%2Bx6uKlCAjPtMh4W4W9O9sOwC8%2BAMY3YuXQFdmCcQDrxovnAQVCPqhw1FDhgZXX6OWnBgJ1swxFlIV0DLm1qrMzDinempGvW%2FusiG%2Ffquplf2PIl2XY8xgbFXO%2Ffs49x3RNbVJVBgRWMPD4AP8zxFn8d%2Fjb9yN7YZf36I%2FeglgqTZh1ce2S6e6UseOUA8fwYfPANpyayQYqd7vFu6juITBwoxaHxuMWqVndFDmJpCsQAERJaEA%2FLhjlpuSZQWtLQEuYpdZiZu%2Fzhn%2BcHKhyowDyif9w4M6vxNrqdvHE53hAjOr%2FPtWaeQwk5XDyQY6pgE3ztymWdplf2wM%2BzXlaXd%2Fg1EogBWVpaasYaG9T9nTWVRprRVUfMDFi%2B31H6fOWbKRiaKj9PAN11WQ0OZ0nUUQ%2F%2BXODn0NItzfWGF65h9jdEouqSC%2FA8b4zNUnSyZH6tXpFyQxAsGuSldXbyP89n%2BKMgDx8wK6HW9P7qNS8rp2vBT6MVLbxHp2nAGvTTkgeumaXbVSDMPMzHbHfyn1lvE9NMrMdZ4H&X-Amz-Signature=1878a8a0985f75f3ac541771a0cf0d3191fb858da69111874c990db6faa9d7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

