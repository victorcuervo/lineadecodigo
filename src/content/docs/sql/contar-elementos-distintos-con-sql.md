---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S65OEKJE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICmVY6W6datxiCwai1rqfAxagM5LBSkglwhq11b5JSSiAiEA2eVAMYiMyCJyzY33pFU8H08bJ5oOb%2BCuwu7sEHZ9GGsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDPa3BxG8tmhMQXW8iyrcA48Ivj%2FlG3dyhG8lc7juy6KNShDNtbzJ%2FVN6CG8ysgRfdGyF0kMW30lLLOjbgankt6wdbuu5r1UsNQ3WLXioUCPhAFKBFYYgNvHmhvI%2F6CEBWHKsgQWYL0pbSV1eN9%2FUftNFzKVdZWCKe%2B4XtkSt8fmRzTwHIlsxgcPHqfXe8sFrD7tYVmyF9zhK9DTdfodyeXELnkwb%2B9X%2F29aR0%2F73VA4ugqgrUgHugwve4byjJ4Oj%2Fn6VnRapircV%2BXjaBsm%2FL5JAZ4vA0q5n5ucr6EsVMf1%2FdlIodRCn8SGURqawboI%2FjASWPq0VEjnXQYqEt%2F6eKGND5%2FcQ%2BGKnKgX%2BgZLjOqnMifRJ3fYYZdtZy6s7FF5CBWabHmGHDFJWN1gnj7cdQyGnOOAOxed5scMy2iRsyqaeMwNfqT33LrpPvDyhG7jBaPqMOS%2FcSgbnUE2537tZurYnodx5Gt%2Fs6ifLOZUZZUtjfOnejGNN4anE0OrbfJN1ThozuBlvKDMTeR6n5YY7WuBBoVKRn91M68mYyH3zc6n5IMgiVQHdVJuOg7nvogJ%2FnD6osUpi2eKI93g8t2yra9e1QSJ5n%2B0VY%2BcTyhhtLgeV9LCUWFLidhW8nvlARkXKkUVNuZWI%2FXWIXlMnMLytxMkGOqUBObGzI7t6cy72u25KaoULVsfREEfdci%2F6Z%2BlVsU9xc57%2BxT9LOinBakLhuOLHklKShjDjiGiX5PsOW4xc3myA2%2BC%2BA1tyc%2F4WiM7Ww%2BhnGDIL97Ri5u89A7X54mwnfgCb%2FESzgLTJsahJU94xJs%2FnYjyAfDnYHYpb8VumMH5eYFt8ikJbKVkX1DEwiiYf8ILbKke%2Ff0oVvcY5FGZibJcaWG%2BJv3vP&X-Amz-Signature=0c9d54d1dfcb7466ad5a0b9b6ff06f6e22ca0d58b9a67d265340568038f7ada1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

