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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWKDPLTC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFkubzBeGPCNnvHA0vQUE77iTKDntqBo%2FBo63TQSedd6AiEAgLcGl5XTq4BatFds5qwxY%2FoPblLrhC3j7Nt%2FZ27aeOcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDB3VRxLvRnn08QM80ircA8VjxQPaK2eV13CdYFwWUx%2BBnE4IIU3qVJxfA3fEChxgH9evVvYccoCv9PPdd2R8v06YTRfYzCDrYclLYyvz1TuOWB4hi6ZbeTLeh11isSLzfKaajEeRKy8xv8vc3UOmn33O7s1vw%2FS%2B%2BhOknQuyp%2BMXXp9PuWqiFxym8F%2BGcueDcR8%2BDmvJT1xNvKPlKSPR99MSbWef6XAQG2R7PH%2BgU6fB94GKk12auwidRIHeHKf9e2X0MUfr9KTPeChssz4dcqUGOAvsSyggu%2Fp9xtGMjqi%2F6rS66CPKwOlg1FKxO64Ng0KVdBi54TpqabLUZ2NxM%2BH08ddqCdKV1ARwtIXWHZPNjaE9Kz%2BY7MAII3F8d91mGVHzQcxQQbjQ1ub5Nz5xT7nHin49LJ%2FE%2FTB4gLas%2FyguxajmkX%2Bx3NpHSlEgFNKlIj8hiLsBA8zIpgEZWrmO6emxmgApPUhPhGXK7JsFr0m0H2sOBSuWU3kuoPlA0PWvDb%2BIQR6Jjl6xSBesfVEYhiDBXXQerRBCcWDMNqy6wpcv8VF3OzUBB%2FUWIqvpUxDggYOoc6gyP9Y%2FtnVkALDhrT6pYN30yzBwine1v4QKENTjPjPCe4x6ErNADR6SHrCJMxn15i9jkTCyh0qTMITWv8kGOqUBCkq0JjHz7ODo1EZsSMwlzQZPve4mt8IjkaSwVzn9OKgHSKYlcK%2BkcJFiEZUIAZ4CRFZnEVqmoWzYFnqH28swQFKVznraAgHIzYkZnN%2FMFQ1LCnw%2FCPkH1xsor1reIpqzIiUpQo%2FecsbdvEBpCa4GOkLmalVdq9IoNZRN3aUNZev6teWjAcChDvOiNoJUgK13UTkwrBPWJabKdzDTDQVbaH%2BQvi6S&X-Amz-Signature=29abfaec6059ed372484dfe60ea4e569554b271118604678742a99d3cae6fcdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

