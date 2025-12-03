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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKJW4PBX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEQX%2F7FqdpfoIa92K0uwAzUpW543NO%2F%2FjLLrJLM2RuImAiEAy2z0AR0cDx9VjKrfrRIEm3ZEsKlcCSVizJ6%2BJHbv3LUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDG%2FIpjqwYfJL8ktoiSrcA16FR7cWzWNWLVshETXwU9k0lMhHc67iLsAOpBbrCJukyEQIA%2Fu00bBj2PgC%2Fu80210GuBcLCvGuaN7TQZmt%2Bylu%2FzxhDMDkK6dUbrJYEWPSBYTZ8Kj3tuUv8gSoSIqXT40jlJ0uFnoxBgxDpdYNw004V%2FLYx6JRbHxHzVD89FwLMghu2URFHu0z5HjecCcYu3i6%2B7ZKE7sfperOhvr%2F8PBWGS4gMUf6ykEcMJjbYbZXIVTsXOQ4enPNQ1AYqRJYO5CCaxPu0%2BX0CN79eDmoPQtJhhoXdplN3y8Q8ELkiadDRYWGOwu7bC1zwBf1EtsS%2FajyWfwXZfOcSg5%2FdKkXTPiDNJar3Fgcj0zR959PQMH5tm8HCurIwR2mmiP95%2BeEUvaZgyUmxBOIa%2Fg%2FaXwS6%2BVcvGrnTPnN3C99nL3CflHzDkV61IrfgCjcySfGQ6RQlaktIqWAfnZHciNAYoEc1Oy3r1srXV%2Foe6xHrxtZQqFSBP%2B%2BvW8a3yZBCy5wqeYRWm2vfb9v1XpkjGggVwgLYyWhgRfxWXxOJ6ebID936cTehzA%2Bw9olkIcazW42wZ2nFwe5tmKAiyqwFHFOfmKcovPcmSyVK1PO%2B9BovzuuoeokqoMUhizvWuvMp3fRMK%2BWvskGOqUBMi%2BqCkpCrF2DWjkFhQLYRdHLAUbnKs4kM7oixXUMe93lYLfUusbuteNi9pF1OEct9jR%2BZSTS5qHnfKgrL2lkYDcVwGZu%2Br1rKyv%2B1a20KIMaG09WSycSMX%2FiRbSaue5M6lCw0GSml%2FfBhwEF1lTOwY4V6K5BS8qwFn%2FaYh60kaoeDKGTdKqn4QtcyB5IRfjsM639wKy1jxA2mJlEUZIeGL8bHUDK&X-Amz-Signature=2734d976e0df2f1840f761bef840ef1d94172fec175d06dfb7df4e6278d5be0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

