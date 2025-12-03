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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAFBNP2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHE9u9G%2B2Vux7Z%2BmIm%2B5N9Ozsb7uM8j%2Fa3rpqcif3ewaAiEA9R%2FSBv%2BWcrXavNjXBuLUaAn1NW7ezTIi%2BbYyJIYvmjEq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDCHx9Fis%2BuJs7qOmXSrcA4jwlXdlA%2BZI%2FsOMeTuV%2Bja2oN6laoWHdMTRHcogNVEZUY4jZc6b81BO7OEA6qzKG2yZ4MgWNhgeFWQZpL3wM0K%2FsgMvHTs89%2FDdDW4y5Fyuvtu7teEmmfLYpLF0ILGJSs9IkHEgPTh1WEgXmijaV1QOzwv1dc%2F89hM7iRiUWfjgtwzh9u4R97khcEPr9h8To81bq%2BOv7NBhpJDDUY%2BZpKHmSbzDhn%2FZ0ww0RqRK6nprLrlPpnKN1YAXvK2D0HHTPb5DwMZckOObMAT%2BdBH8aVPR4tEHe9ZOWPUy7%2FiM%2BXhRoUzQUHV9lCDHyie87RA6Xc0PuBKo6HJMvCYY3xP%2BHWDYgy%2FkCj5GckF4M2SsKKgI2le6hMPo9wl4Ypq2Fw81oqlfvyxUpBCBgEskPcaCJuDHsrBzXHsCFRaYhkJcZQ6pOTzfcvtOT5y0F1bIhXU3KUhXsn5XpKuef55i2%2BVIFWGAOfQQpdeq06KIXnU5ppvZm%2BA%2BxnS4k1LNHFfmwM3Bxvefplz%2FJRt2j8h2VWHAzDU%2F0PwYwgUxzkgKa2%2BNNBcDu7gObvndueHS%2BcblckUZD3hexy1Bqn%2Bdi2HqFKA4bBB5cB5c1%2FZEX7lUiZNSVybvltIxUfj9aGDQDLsoMOD%2BvckGOqUByWM7h%2BHnkinuSNUn9zPN%2FyluL8FN88zL%2BcUBChL1PwdMk4Z5zcGIrl3DgPkB5XFtwmUW5D7Zt2GgtJByH1hT%2FsqY46aveZe0uC5pItyrSDu8bMmzkHW44DD8ehwzFnLmE1Rj%2FnvhobbLpcWOuFJtL338%2FUjI3P0Mlq4RfK04rLYOVWTBL6%2F%2B44sEZ90iYOfiVQBnbY51ouyV94%2FU7CTkBBWlC%2BH5&X-Amz-Signature=b1f78f2f025d4d4e4a1c99564e766324c198e3c5f723db8c67997e52567410f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

