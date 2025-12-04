---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HOREXKM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBYP2kcAH1xdFLYber6sSTp4FI5gZIZ0maKzQ24tmye5AiBxKOe7c96kJ2nEzEUMHlZ9hfaJhrdUr2uuyMV32E4i2ir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMiGjagzGS%2F0yxI9irKtwDQkZmxAfT1iXqTxtGmLzRDA6uum2Kdd9Rp%2F9%2BdqdArqhF7RW4l0RwNyd2uXAgZN8gUXn%2Ba%2FfYP83uo7%2Bh9ZiJrgAuleUkzc90%2BPslX3tYqDh5WEXys9%2FPNhQ2FEcKJr855CDtKvhRMcWggNmddDs3fEQrppbj%2Bxy0H6Odfz6Jz%2FyLo%2BtkguJMuQMTROg3UXc4pX5L8QefRNuY3P22mcc6gHWREF%2FHOIMB6C9Bk%2FCgJ5Mp4lSGUJsyxgLsD8w2L8rSVNvGILaV3NYMglRCCpf%2Be%2BjRhAfjOfMpyf06ajlh8afRq80Qli5Kj0gFP4nxXdAhd41EnbZMrq5Iz20QuAXFg2n7PB8N%2Bnpq2winS9mpytIhu%2BfWstgxZRPMXNEvv%2BQzvNRXSpunBAiujduJ3xyYbmDNoTSgW2neReRARMxKPaEG8x9fymzFO%2F40P050JVioP%2Fn3eF%2B1wU7tpy2v%2BNjPatSr2LH%2FatHFY8vKcSeaZoOcJcqJUfH68ShvDoI3CVchNppQ36sJ44Afhq4Ok1R1Bghac0gq8zWrjbv7DO2THxmZ3COPichCAeyFvf37Jctbimw3pnrgiPd0pTU41SfcOZE6sS9DocB0OSjzkVqwjYEOHw%2FHQOUyQGKE%2FC4wnqHGyQY6pgGikFQ%2BeCYYth47%2B%2FzWCgZAFIG0N7P884P2ZQ7yHMxJhKawNG%2BDdG%2BapQ4o6FiLJsPxlRYkXT5B%2FgNX0HzVLeVjR5nnocjMYdxzjsXhhi0cEGwA4OO9mXgzz4sqvwOEErYDfO%2FzPSaxjVgzBZ2mRJn1OLOjU7pmsG5cy4nrR3tFdOfWBV13fpX7MRd0lNkds%2BZMk%2BUlFMOfIvH7Hm7ttqbyqm%2BK944Z&X-Amz-Signature=f0fcfd2b94327fff1bda73fc1d5acca7eb29d9fa2c3184703aeefd02717ddf92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

