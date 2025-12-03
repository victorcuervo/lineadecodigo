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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FZYSQVO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHPNiWvGwfoFzzWv8%2Bx4qyw7LrLeDF%2FrA0Us7yJdibFPAiEA3sB%2FSzu3G%2FY1%2BOLIxH41wKxuJcQG4Dnh8TmcqGcUDrEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOd83ehzFIXsCrY0EircA%2FTuyB9Z8LOyQkfWoukp0X%2BZLGyWeJZTdNz6Bv15%2FegmbsQikodGVoAHSTE%2Fg%2FaKtVnMmjT1fczlbHCnyN2XeyhVcMIQhjdRUBa76FN14HKzbx%2Bmf9MTayCg4CN2ChRd9OtmsHdpEN52wyyfWeoYtkXK3l%2FfHLcXEYb4Bo9SlUOLZLLTDMB1Pxa%2B4gZbbvqqtPoR%2B4e3JcXK7wRU4akqiHOqWqXhU%2FxixcvnpchcFRUqmmfrI9T%2FLpubVmiwuAudQOpzaBiUbml%2BOpV3f14dfF%2BAMkusvVqjtWJALzXVSl%2FSWKJWfKLX9nMtBc0SX6Ctw9bQZiLkxu0HvKhkVPXE6iMfaFoQp8dWDv2TAgBJZD8BtyfCDqR7LDbBUM5ReB7BXyldpqVTovCGAlX4EtenOhgHH%2FY3lUrvSBNQy9gbRf67aizldN6bHHAwlYVU7rcVxqDX3%2Fgh8yt3LC89q207tN1WjIWQNIErivx%2BQbc%2B7TK0H69EZQFxqEsIpEwbol7gmw4CwW1%2BCLrBCO3dSFyuXncINgnQ%2B8TWXZqDIsPYK3SH7RrF9gzuqMdbCg%2FFxGp3IqRpBVwspfqZqDhmq58RhBjwu0W6eh5GBggHh6G%2F%2BuQCE0aOPAE0Pe3M3ksJMODUv8kGOqUBdYBxYOP3UeIdh5bSUJWJ0ehZWLIUWaUTAkwpNiON5J9nuuwu43JxcC0QjSz5Vf%2BtW7pwvrv7bN%2Fy5cCkrsqx3R9Z3SJ9D35Y5R3Mm7TRzefnQG22W1ts3yzUXc244wtV%2BrxuBI%2F9TRx6vwyJXmaaJDXJZP1u6UAL0Kp3RMdVdx2n23AsRE9nVwQrMHu35H3idXhk%2FabuDrIiM3%2BBNKfkqX93GS4b&X-Amz-Signature=33fe7fd495db98a2aa96fda57f308a4c03491e0a92d2b3bb01b33507b22a5b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

