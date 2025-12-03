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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PBNVKPM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICxh4peIfJ7SunftCgILu4xVr3DHbC6ftyo1iu6oLQZ%2BAiAMSeX1rjYhyaA4h8H5DDAvlFKY%2BDf1Wj%2FapVXMZTEaXir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMRe1ElbHPGLXzUndeKtwDXHPbDQMl6b%2FJeykJOTvH2y1Q7liQZLZLv279OUFgT3ol%2BVi3aJ1HfI3LebSx2jjtuP%2B1DWvV8lHGUuwwskYR2mVi0J437ohOoK4ZwA6LkuFqrm2uFq2kf4CiQXllmmY8CVS0S07c88D%2FuV%2B9PcOpxTOtESbXxvNKglCKAJVYV7SiEByw25Kji7LjsMo1F5EBHkj8zBJet7OYhLvYk5Bo8IeZwwgWuayAytTnzsqFao4lj5AOfI49e3eYL8Q6nJdtQcCYp%2BqG4EaIJnzwMqmY4aF2ep0XBCEjBiKJdjpUzGgikxG%2FWJ4h6OCV7WUndAehSQlBpegoWCMHUZLLyDP7gcv9NTudPgKttaZQ6WYIL93q0qPbvdG2THp0nGtcDV2OPJLPDNw0ot89q8FtqBZOgNfcEbQmEefs0lPfwS5aNuz081YxxCk7LMBWUwKALqjVkzYyJqNY%2BWy4Z1bYRzHVswBUd4XMNUCHjbPmBxdZx4ER%2Fd8LkcpbLGn4mKf8zQSbaqCykqLpHjexKIwKwGoRpXtBgQLzPjO3sJEsChoswVPRqGUJByE2d7ynqYe7cLki0Wbppbe9QpsJf1IVo1ZjOE8O19d3qu1I605WcnCKZm85zajX8VJ8GO1BfRMwp9rByQY6pgFbsCLAHBHwvfxkQj1vC%2BnysBKEzVeyQUiJf6M%2BrBtVl1XSJFkaT4kawUfX694jLE7Zx71sKe2gfnzvhtauhhyF%2Bdt%2FnHJ6QaRjVS2YrfvW518nNNb50BlhPw81HglLcE9YqhYdCGhP%2FhOMtU6%2BcBp97BObNErfGMiTuSUikW37PYzeVrL5o2ZASVdAuHSrvmgdqGG3ETJ7d2k8HZKAFnLPjCj1F5aJ&X-Amz-Signature=a067ba72232525dd75d79ac2bef331604340458d20c871982889f10e4f6e6f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

