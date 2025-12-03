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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AFZNFTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCp9uiKen3ZAbyIYJLqkvok6vji295kC0YnCYCQPcyFBgIgB7SPAT6CKSS7mw8DBkyOXJeFRha6rwCtFz5ABD19Qqcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCHoNMAG29xiTqvtQSrcAyLr%2B%2FHhKujRSaa%2BzgqXI%2F3XtMrVcdB4sr6HizTWiUUiLvPf%2BoJ3ohfH82czeW8Hr6RW5N%2Be9x5Dn%2Bu0aWLAVE6CmWvvcPCOPzaaHULoxfIQXFs36AXz3SvDu%2BWi%2Fr8iUJZcMERV30pHCf7j8yTIquvwTCxdUGEPs2aZY5%2BmIVBkQdSsMkMexe0fxYdvIkHUHJDOuT2i4kDhk2qpUsLtKw6OyVa0TE%2FBq4zRahj62aFG4GbIi7MyOY6QpcGXwsx9YV8zxCwCzbZ1uD2NyydfQBKKG9fELvfA1G8qZoBT2QqQIOpjybvYo6vh5i%2F1Az11SHOsOK9px6xMXuVzXBJNpkYOT39ypm%2F7JHPlwGu13S9yfDvpUz%2FwLEnVx7ANKH2OXvEWjzrFbn3Duic1UmrmkUh4TtY%2BKk0cyRnFHhFX9FgRYwgygn8Obx6jSMUj4htewE1bdjUSyhFfq6VZIBFhcjqo%2FDD1USJR3W0IYl6pZFr1ij2P2sHosmra9KJUP%2FbRW%2FLmWStdSTkd42%2FB0IIvBTjtlN11f8rRGmq9bYGQNLkEhgB7UnkIHi4oZbqgeB8UOufxIAUIjCcyZg14jGaM82DLxOl9Myc1j7n42JxAqgo7ttdNZh99E2rqJDAzMOSWvskGOqUBXhv4sTCVjVxF26I5FyFpYVZ1Ux0Dvpkk5CmLrepDY03k5A65jkqzSFCBR7XFCMBLQXkvo15DMoho6tdv1ocE7bNtKGkORmCgXvP93oktCrTSzQPXZMXrCdN25BqJgmTG%2FEmawVzq9t2IxGw2sVXsRcciV%2Ffr%2FH60bB%2Fx8fHQkKdBRHl53eJxmhTuHbPtKv8zC2osh%2Fetz7w%2Fxvlma2Zu7Jni68t6&X-Amz-Signature=626c2e773ae58e515b8cdec8cb75608cf757f071069ae088ed00792518b5be51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

