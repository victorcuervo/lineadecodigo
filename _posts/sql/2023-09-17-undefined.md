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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCPGGPE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDaOoja6M8G7oaP7sACdjW0yOOqKK4PO24iXCI1iPbndAiEA885zvHk4mpVtiRjTLzMvspbpPHwEMYp2JFClnSSY2a8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOqOerklQIY0onAkEyrcA%2BASs0BGkZS8Iy%2Bo%2BjMrKFmhvdA%2FgX6%2BLmH7XK0KkJWyIGfYsmPof3qAY2Vi3qOsFF7KCg6H0di9CkZveXslYxI4gvx1yEKrr7EsQ37ErPWiFRS3VbEi96yv5J3iSiZG4T8uqkd%2FdFmYJyNfDh718Z4yUpC3atThR1s1hsE10E9i5MXO2jDhZi0oNVrypsKsPX7IauASHHdV0SoLR2ed9jg0B4Uuwc%2FNQKeGTKzNslhuyB%2FJnFleLkIAd0dArVPWZdl1newarlpwMs%2FIihTm2NMHFU9LC4jVWdH%2B3Yx6KigTwT0%2FRU2yn%2B%2F6SP4%2F9Rz%2FF9jV1zIjwKnJ4J1zp3%2FU%2F6M%2BkqbaWmxJb23bgvi6emI01%2BAoc%2FMH8NwZT%2FHSRyeTappI5jexrH9SrvqShHDJe%2FZpDzkYj4HGSbV99PcGTv5eoqUU05SnnMgiwD0U2y%2FwK0Uh%2Boh%2Fhyjc7wx1Oxrq89hJZxSc3LnfBjQ1BEPZ49KCykbPWVkDmO7YGQVUdOQC1SdUSK2vgBdxso2xJu7HUlbuTWKogRbJn5l0rXTdoCYtoyzyHXIgDqryHSi2wekrZjkDcoWMPv5w79aGG3ePXmoBhrk44i7yBiYz%2BIan0amNp0HWYsnlj6uTps1%2FMNSuwMkGOqUBnkPaZDroIOaJIOOheAmVWtQkgeMxGT35ywSqWKEpIgoEUIjvFnq2iczGr3%2FQuK2i2QclfgaDZN1RcCu%2F7weqTRUrDYmaeqFdNv4Mldiw%2FrDtqSjl5D0C%2BqXX%2FB%2Baf21%2FQwB0b75Zyo51HGrdNnEJFeDKc4EDIcylLqcc7wC1q0YMK2W0b2cFHZhRGmVMI6MWBt%2Bo8d334XuBqH660I7MNViAU5Wv&X-Amz-Signature=83cc05c3f7f2e1df11e482a3fd82ca9412a129325b30f36c11032188beb1a8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

