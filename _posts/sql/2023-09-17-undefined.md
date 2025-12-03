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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KCEJHQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDjG014%2BGFZJX%2BZ%2FKuzst8dEETKGmmg5mh1krsdMHheWwIgKDDop2KZlNuIQuRLYgtfZXEx1%2FvsOdIEHbUK7UPvNqMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH3FUVwZi5Z2u0W0%2FCrcA0Jqh1yphJ66AI%2F2V6gZ4Qp%2Flc8YfXB1%2B9TfD6Go8kWVZlj%2BHGkZ7zMlqlQ8vNpWbQ3oymrtE1NxD7UI2pIJmHCf%2BoqMsjDqk8l9rmfTgs27I9hxg3TFMQKVtZbcs8G7s67gpLqIgkop7jIBYToFUA6pVaFSKhBlldwoUnynlDj7QJgYsIRMemoe4asQK9bHHwsSMW5bqwZ%2Bx1b%2BskhgFshn5Yg%2BJe3huebT9ZSlGrro91gDLFrF7xVpnW%2F32znvkGsiuhIIFMvrMXZ%2BnULk3rmEQn6JSNOhitsogEYKfpSO%2BBD3NM4h6HN2AAUL06WQkDyL0sSDzTHH2oA9H2RqZE%2BarqVswXVRE3MQjB5kHvKAsoSANZ79HcdQGix3%2FYcxPiHtXU%2Bns1TchKBAH2UPJ4QxVOKr3gguVNtx2nAHlbfqRTjXgQRKEsnmTFhNB1MeUlHVOsgS0pgZXJHz9m4guimG%2B2Cqc6QA0qtn6abvlo1fuBb%2B2gVCyNv%2Bj5DbWefUNXtpdJ60v4%2F3WqxinLHn%2BSloRlYJ4W2nyD0OL33PWV2Sl6s91pcKyTL8ubsXYU7xbD9%2BIMs8l1lyEVY6baW8tX9zcjQ%2Fw5Deqpq00bzQwFAg1wFeLWeWMej3acVoMJibv8kGOqUB3OXL%2BtnvtTO0rLGh6w%2BPkvQ6VnWLzDk%2Bdvl00%2Boe85nejHxPYcYdfN4jHqs%2F2mcHTritRFyQw2SYxgMnSnP8yOdrSraCKo2%2BHABGlguFdqiRxfTkiFglseC02xVegOd4RqCqBTX6XmRDj6cfm%2FoWU%2BFSOYbt8kgfZ4oWYrMddPX2R0NbyNXPqUIrgGZephYQSWLxr7FJKXcz5nHR5sAy%2Bh63rJJ5&X-Amz-Signature=707be6cde210d73ef9809d2dfec69ca17eeb6f22eb6efc3ea6dc605527f47c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

