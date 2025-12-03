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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJIMTHK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDq0fKxFR3AgHdHyyqlyqVIfN2ttpaib9OTs86CSFb1aAiB8esWt4TYHcALpzhrZhsZEFO4ajNxs4KD1CFwwBcUQHir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM2rWDFP3CKc1OrtyVKtwD4SFkCxVUV7f5KIIgVDl8SHPHwGlMm4qYHWzxKv3v2SzG9Bfc7p7VA7x6RhGg%2F4hHwoHZ6hNoVSqixL1%2BpR0ScGfrxDjWeiYN4VV7cm9JJU1qmv9LoAQPNyzylaTTQKTChquilz8dunn7G%2B%2FvPdUc6gbGfytquIAM2ynDn4eFY%2Bo4v1Y4KC4B9H82XmaknJUtR3G2YdV6X5JJ%2FYU8z7jPdrK8kZuXQSLT6MFdMSUriShiiJUqbEACu16gtSiLN%2B7DFblw%2F%2FiqqaftFwn7HwFl3Gp4Umth9C%2FXTiJyFoz5aT9DTjpvm%2F%2FJ5ljyRbboS5Rtw1CpPYE92vmL0AKaz%2B6GHqRYGmpAgXAUq8Zy7G%2BWIJOGeQ1%2FT5aa%2FJG3v2aOI%2BwKY%2FoySs%2FOzD9hhn5U3%2FVOTCMZmKI%2F1QLDPK7NvFCFu%2FP480BCIyMNBX1kprUu37ZueHc%2FCRkFQ8XA1I%2BLFgo4l1D73gHW%2BMWOrc%2FfLPWWQhb3ozNXb6reXgSTfBMW0G1%2BwxcrMVD16bBK50oNuzRmWnpypwalM%2FHvWEBBzsi1nOmghYqUf7jWKX%2B%2FcQVLvneNaJ0xyJ8WBGME65wY5isVgKGhDtYI5pLanIJJFHV9SQWwBW08r2qq6cXeY2Iw45W%2ByQY6pgE5zhHd1BzCB4b5Ko%2FKjcNp6uTzGi%2BqDQRCt10mZQ2XRUfI1PfSEwKrJjHwEtD9tuR3rb%2FWSf9VbAhQTJlmbCtythFEA5sHwefhEF4k5%2FeUOKiguemoubaHjlyMM1jfOjwCEfYugvJ4TAXiiOHvJ3PlCqUYhSfgRckZD7oYNoP5qiNZ9xuzIDE36rjRlWIKHGV8FQxhCprwfTERuXxuZXopetRzjotE&X-Amz-Signature=bae71d9778d9ea892541fd577fd4a8b5b6660aeae1db64890ea5b379ab9adcd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

