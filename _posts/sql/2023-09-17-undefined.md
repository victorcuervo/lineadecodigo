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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK5RB62N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T024556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCkUnIcSYaUGrAcoZWFL97RSmWMY8PN3q4yFioLc5Vc8wIhALHF8QPTeaBEFsH3AO5rOTdk8%2FuBKgphuBCergFWzl6PKv8DCCIQABoMNjM3NDIzMTgzODA1IgxmMyVJykekCDuG7sAq3AMayAGFArj6kiqJy8PVNeISlBSYQkTut4kJWoVD4wger1nc1u2mAWgofbZHhQPbv6qgtjB3pQrvR3qbDUXtvg5VJsFrRqLspEWget7tunpu92tnsMFSQzovFfYKkeZ7hCXWeaaEwJ7w1DPZDG9iKu6YuznXSxKGPNznd%2BSWR9tdX0pPyNues%2Bqm3MaiwtjtucOSDfUX4ncQghz59Wz1nShQpjvEZ1dwECCunhav8Iw6Lpl%2FgYWisOlpy0QUNW9hmgrXlGkbcJb4QUNa2qNnu7oIvv23fZ%2F24K51iIQ%2BzlAGkFT2cVuC7iQFofsdzChAZbwXJadXAz%2FJW06NUZQ1f3tlAAP8lRRL7SahBGw3IMLLRcqEc0pc0mDEz1NzwgRfgQKiNfIGIYFbaIlXFTBqAzTzOaei3hzH8wTZmGyOdJPLKQ3YHcWlWy%2Fl4mqdI%2FITJYz2ubuJ5BvNXcc%2FLtyV8NRKTuzaQYyn3r4iMdbQtLqUlIW426efvEACVDn3g%2FHov5BQrkKm6bRzMmoVgmIiIk5ebEeNH4gHycvWtCMCuOYe9LBjLbR%2FeAcJRUW3%2BfsA9%2BRT8sskoBNN7ptVtBBNHn7bt5F6okStblCBWeck9aL3YyZfj5arc3ry29IB9DC1lL7JBjqkAXL%2B4eKOL5qqCoKZLaWOFht1RCSqhuYUTdlSfwP2Z0ekPtyZMJNkZpq9AKkAkAbNNU4bdVOp4YRCgHCbpRztp6wyxjdNPat8fEfwDmjHs%2BWrK%2BG%2Bsc8upnDSZwcGdfcdD5CyuTThmmjkav%2FCcWqIPyfngAn%2BlcTEstrKu8aS1ZzHrFZa4Ui%2FWHb5ndBjY3eruCfz2jG%2BIUWiMl0THJ0dYMbMG4ss&X-Amz-Signature=8806bbcd72b3ac158b5f5a9a96f5fef2ba97b57a02eb2eba306b600f033191b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

