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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7JWNCY3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIC8aMFmrgvEMf0DnwC1cufAy%2F3X9gdNshmQV3TqgY3GVAiEA2wyaj80pJgFHrRmlol%2BZzzE8sb4JVq6JtpQFM0td6Xkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDI77dJomWmFoh5kvTSrcA9o5FIIw%2FAtF32JFPZYaJt9WG9%2FNHvOXQ9AYP65DUdScfhEYOYUQl9iSRB%2FpTg%2BAVUkoeNAyry%2F8Al69ZidRpO%2BhvRdi6g9twvAL1pYbPnlFrsISqUbWF%2FsltouhNeyh6NMgmEkUHA1i6A8WbeRWU9UsUv5P4J2blic7OdJUbPvJVC706BKwttQr%2FsGWquciWiA7Knt4eK9dJLdiaQkgLfaPqNOylWz4k6UlRLy6QeZ1Dp8ZuuolzzztkrLikHTk42rYcUav7PDxyRbR0Mteq%2Fl2ELXkz0di0PsRdmOFQUL%2B7mhoLRa3KFPcvYC8ffnCvXOCbXi%2Bjwkmdw%2B3u%2FXnzMNJUiDBbcTm0tyOkgdorWIkgw2CL7O2Mr7lI89hSwqkcfgNx6fVkVlZ%2BTeGwRMaieyrpbJ%2FQg8kRE3KfdEmrJk7rExTmk5V7rmJ49GLitUL9I5r9YabqKr5x%2FKIsOER86jbd4oUQPMquZawEg1UTfNpGqCL63cA6ftoqyFn6xAx8WivznWZ5QvYHa2iN%2FH1QnBX7WjWPWR1JhNXcFwq1rOE7lcRu%2FowFgGwvlU9oSyOXu6jurM1uCFAovoHupUjezATx0uVTFcopYbUx4CVbDGXy%2F%2BRQX7Y5d%2BzDzJJMNObv8kGOqUBjTGbL%2BvSRxeRgrXUQxMnrnjIBQ64uFi51KcXx6H6LCb63DC%2F%2FQuaIbN%2FAhzI2phTgDnw1ZmJ6s1YQFX0D%2Fsni9hryJ7H8U13iuM2DdD6FkAYdCsp9h2XZAsOa1Gg2fgkDAju0Gl8%2FiI4u81dzexY5hBg2b8W9uq3xWOFCdYYk4%2F%2F5QjsAkHbxNir%2FgOpEK0jsiUNrSPsb7WNHK%2B2mM1K2XV5XRVs&X-Amz-Signature=9e719cfc9596424e2b2324689994eab8cd5137ebfc66c3222f51f978c2539023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

