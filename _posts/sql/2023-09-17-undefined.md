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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERKUBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCPyf01TGJvZ5OqMTZp6LdT%2FnZViO6eUEhbHEbKI%2BRzbAIgdxK7hkm9xZ2X09PYPsmisDfWmCgliGwT9feG5DWr97gq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJA7E9HID34E%2BbGidSrcA0nRROyE%2BmOAji2UAsVtXOXt1xoQtA35w7oANnJqQFND6SoBu2IkbRNsv36%2BIGYlC7sTinnOLCFU8AxgJp3wclGQlo9eI%2B1%2BZ0oc6zRleJuLrRd2SLOHaz2ek%2FHFtyrhQ3vjw4%2FJsoBlsHtzyoi8t%2BOBkH5eF9TsmrSu1Zgxrbq%2Fubg1MqIHM4gvAeCVGzot8Axs996gwDuPYvygcpLlIvggoIBL5rHjZIkjsWzuej3FBHflgKwTthqz7fcasX4Sus%2BUImI0oSi0msP3m%2FPzm0d0HgX1jO6tV1dIs52aNvHJ6TBrWcO1602cLV1FaLzzvCWcjcjrQtXsd1DEavgRWHq5792%2Fk%2B7h6ZB05rgNevgvBdvxhGy31OHquxOoxoRcOXnnSl5e%2ByJ3y5ji8oTiUrfpasQztyZOtIKETq1L8n7ufvLAPx5tcBjJLYMxIA1S0PREFcdPzLFd13fX6HUdwXjba519CLDKpxv7hSMpl6Jh42O9PVMom3EwTqjNLNQbZvVckhdpH4s3Nvz7Whv8w9HcSbP8XwaaeVPMXxiHwKJlbcgGoUr04I%2F%2FIPkmHdRgj6%2FyB7WzSyqz07xNOUd5kbc12ntUAEks6HAY2TH1GO1dqnUr4eNGjFouqYKKMKrpwMkGOqUBsr6NJwKPMP2BcqAyH0KvZRZQF5LoGT7WFKn3FkCCdeG3ETugsSzWfRtIn7mOGV7NGJDPLOQbirKK3qFLBS5dXCmL4W6Z%2B1DAwGlJkGcAxIzfz8eueM1p2EEtJPk3hYMAEMoMDo4jMGd6dijhHRjK6z3UCDpyPOMTiHxyIxZJLk%2BWLGzcyR58%2BZwmBl3AFrXfYBDjvA4unvFnlKPer9OZrcRSTzEP&X-Amz-Signature=c6abec1d2a807c3952509938392d055d32f2c49b04cd973ab4b46ad34b45a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

