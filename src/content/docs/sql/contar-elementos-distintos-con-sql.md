---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKFBWZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHioaEO6kucvrbdYyAmRvVzlDb%2F9a8jx2ZMvQFRg0LNiAiASEp03fBVLF5%2FIcGVLrzfmuKB6Bdz56Q%2FahwUTOhzhJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMtdznbBdH%2B%2BGzFAE2KtwDt9mMzk8MtZlcLPHZhdzgy99MK6Gi5Pf09Kmow%2B5wsBvugHBuc2PqHisnI8QyJFrndPvQ8nq1DpcRtPvv%2FVN5z7cthwnqJgqgrXKQC3QywnSDgc2FrL7eaMhnBJ7BzID83JSDTCx0IdZ5wHdV8tPPNl%2Bh31kLczhhpxNurRmFox59s7F6fPhGt4bqQWS8Ay5aYF6tGoQ7jNHkA8S8hm8eb8S%2B%2FRu864SKpMuyogVqqiEMlqhPS37Ife55NRFUqw80zXRYnjMbpM59nncHf925D96E%2BmRxR%2BhJsUMI8m2YSoalk88GwvA1Fd0k0SNU5njCUg0HfvNw%2BS96wfmrDUaQFrSvzXGNApV%2B8D44hoJdsT%2FIpFgS7%2F7L9oB6PQ33DVlo1Z9jLG4XRVBF%2FjA0P4U4u%2F%2B5Tw2e2P2Pr7sUJViwj66JYlnSGv1L5QLZ4TZYzaKA5l0G9HXBzZEfTsPK%2F%2F1qoTr%2F%2FXdD36OZclZceG0rIo1Nk39BzRG4ZrA%2F1lnLefkqn0NKnWYKpf2o7Xv%2BDrzTmFnJZs7zjoLUuY0uJ81NC%2FpWevo44BOKL8gdOvBX0wnBV9ArzGy%2FFOd7IfgJvQIh4mPM0gl%2BC5YB7%2FbxL10sh3Tmd6PLiaf8oih8wZ4w6a3EyQY6pgHpVMKntN0CyRWxJ%2BJ70hml3h2h4VkxYo2yuiqMoBHYZ7wiIPZC4Qqi6EdYxHFtqeqU6ce8sHf79uABxHexbab6R4JIk1NwNKOyGYmpBHNLen4R7bcggf7JwbA19J%2FqVuAgom0og727w9mZ3QIz4vFn9vKo8YQVg2EeS1sIYRh9PgWYa5iX2zM5fbZlgS5jV%2Fr1%2Bpg9MN5SNBYmzpiJSYy9m67CSAvc&X-Amz-Signature=c772600a8fd33ff643d429d1a53416c94c318c040c94aa7b78372cde3e4c1b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

