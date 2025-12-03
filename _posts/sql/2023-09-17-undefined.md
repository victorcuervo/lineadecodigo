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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZFBSTU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDDk53cpBaCUo4U2tWYdfI0O%2BwxUb4Pz2%2BnezOPXvPGkwIgPvmUug9SzzbpoPNIS4GnEj%2BHZWFSOcbGvgBMdjlvGdYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKXPqQzPwxdL9WHICyrcA2pRI%2FlkKjoCyLmxJy%2Bh6xf0RxaGmKUFY8B81DHEWblI5gbf34GcoHuf%2F%2BQk%2Br2bJhh2zqW0VTTuh2YOBxwPDssjRR5kcSCXVA1SrbL8ERmCzrle0pDa9IxRKJ3x3voz3akPVBLcXSGraBodnouzn5P3s9CYzVMz0RhW7RfvOUioRa9nlsUNQLNq4tQezklkheYi7t5oBrWn6fv7upXJ%2FI35fE3pl2LyeQlWsB97nm7TQ8NuscXJPa%2FR4k4E2293AGiqDn24aHXi87dYl7fMox2se%2F0SVu0J26GjChUUFx35MmQQdm7CvAMA%2BR2e6gNmDE4gW%2BTkAWfRLiq79aKW4mFqBwoc7I2jba9fn55rCsfSQ5W2TtZNRwY9D00FSZW1NFsSmjflJLIkmSPcSiM0sM%2FiZ1WbRSSCZu%2F%2FIRpJvN2ZEOWYvK891hFUT0Lp9QImozmZcWQtC%2F0bsVk2qAuS3B7QFBH926yzV6SMm2K20YB9DATbP4oHB2fkL1CXbatzGjLHkxYK10lPtwtTLIuCK3C2hjevRN6dOXtp%2F3Vf9Y%2BuQkPKjaudoeol4X8jCcwnIwmbzyW4gRjOkoXYcI%2BdBDFsD2QzTUCfkOQ%2B58jj74lwpFQlu5UpbbyXwoqqMLGSwMkGOqUBQR6riFt2ZMCrfLcvUw6uapymcM%2BF1FkIGdKFZi5SlUVF3OlfnHPNLmzTpzUZ45rZ%2FF5c634PRYycIP57mkDIl%2F2I41gt%2Fb7Yh%2BsYRnSnLB14HZQFb6iRy1qs2wO0iptjQqEgGaq0gdQnLezmVDdbtwIQFsATrwdNpNKQMPQ2aVUM5jtsks82yJNCUGkFs8wkGx6%2ByWY%2BvLJWUSoiKeht9RTu2TID&X-Amz-Signature=63c10c762b7d7c22ae2228a9459ad98ebaaa249cd0e93c4413e9d0e13b9bf13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

