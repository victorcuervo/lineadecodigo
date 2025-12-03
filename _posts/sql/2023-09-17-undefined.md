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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TBUDVZX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDfUC9zvOZHW3ZSxQgwgrC68kO15XzcW8MVrjAhCSzPhQIgU39xiaXOlz6PvfytSy3CgdBc1UsvmtiLq0%2F1blo7Fssq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIhiUZGGUduhmaHNoircAweNXVpWi7fkGzEITA8w4O2Oz3G3KmetyK1rb3CJ53fvaxhRc17tkMWgZJFf79s0aIb97Oa1LZbN5vhoZ05e8XepcDa3b5V7TqIsLROVfI2wN8pBylUVqDH8FGSJqHopfT9vOZpyoUtvxQfd6FsE5Dhfq2QX2Pf22ZSTLkUd%2BQVMiKpu3GhIm39xRCgqfuwKqqtPD%2FuY7D6aqyCdbZ7LFMt2Ny2LzNam5Oo5njcqHp2YNO6OW4znzpNkQyoIJnc55Jcs5bp5MvFkbsLSydJigpYAZ0c3bPwzp3nfCbO0ewm0%2FbjT6DOqqm6AVEyo5ei4hEy2MMMc8i4J1vX7KWSM%2FapMSGt9zPbcxL5y%2BGFxmdqd%2BwkP0Ku9w7gD4VpE7SHpyNJn4XsjSVbi4EBzrWN8mg3LZWZkQnPK6RAF%2B4ntu3xWjc3sFcPmz57pTA6Dxq3MPooEw8NWXSgI5KrIqPraRVvtYkS0nzEnEb0wN6vKKkJmknYvt5ArIBNE7KDhFB2ywXmeGXVxm%2Fw%2F9a32KBA7T3jJf%2BD6piseU1TwnK4RFMSnLXQjtxvHMp1%2ByxGR9JreA5P57TVlr0Lzpy63ws%2BmL9RsqYca%2FZzhs1tXAfkKaq4I%2BlY71vUTxS%2BSShT2MJeWvskGOqUBIqXe5FSjO6HY4HgOMnbnVMSGNTmSu6Brtcw%2FlGz%2BN8RAAAyP7nK6boWYdBFxVBH8GgYiRhZ1aPvpa0ZAK8WnTq6gbLt33IDhJ1PyStcpP%2FPQxbw%2BT7NxwYLobhTfSurb4Dd4ADOoDSKMGthC5cMXEpUujvuIRtQU60F8EvJIAkVWy0Kra6sPzDyEr9qfdYrDZ%2FRuM3VuLRkUyPr%2FjPYL0die6TQ6&X-Amz-Signature=cb6cc6aeaab55b76f1db089a16578f0ed10d718ac9b547958f221daf7e187cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

