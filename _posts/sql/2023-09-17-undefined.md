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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4VH7LXX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDxHkcUdMi8xYjjyP2RcQx6H%2BXbG20ipuwEMT7PYL9d7QIgLehUJ4mRyxXqDPzYQx2yUYP6Q9SG%2FmrSRxZcTV148oYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJQ7KFzsYVCaA71aACrcAxD%2BkO%2BqCHEcsTkFcJTxw%2BpU5zw7dbwC%2FI%2Fn65jG01XtaNv15Spj35zuWRGvN1DNSjtvm4sh0qhV0FbAVIcnn0GiWg1eO2X7zIBFV32fCp0INr5YNpoTcAL4niSNW1UDwRoVxHV6glOz68xXEBLEmpIRHqS9m%2FtpjfdvrSZPq4DNvyCy8gI36PWq8ubJVFcbvLi8hs%2FSiz4D5cr8L3jLEZT0K%2FhEvxHKU80l9jKqSJ6v%2FQlw4KCKiZk%2BBsSJCCsWeMrriqx8FK5ZcBGf4lXQNYexL7ul8J5c9rwJrwHWZ0ENYyIDGsoibRWi1HriKxMbQUbwOQ5IIU5Erq1TFm5lQFdEqt8zXZ5ImGHcfaDK6qU7r34rnz1oYotp0c3mfPtXiI1TYiLhO02HEwYzStZVO2O%2BFVxzgNpGdoCObBnN7PxBRJN9oixqOL4CQc3Vr3raraMXEmsS3cFgjEqQpSl%2F5E2bF6kcGElaUMdhTapzm2JDKdfgxYMmNe%2BePiCi6kev6ltB%2BZFZ4NG5qNz8FBja0FO7bYwCYi0Y%2BCojSdje4LCWS%2FPet9GUQxACLyFVV3BBzAOO5O5DHv2SrRCcBBSkyFKrYCLu5BvnCaLcW7Z6kE9QoC6L4q3emTWxsjQ7MKWhvskGOqUB0xdLEAwhSDF17jhpVs7Vqc40uVP%2Btbh2Pxyj1AeAZhjGCYLSKligosvQ%2BwM19iH0jRtsjUWYQjAA8N%2FsHG6O%2FQX6cCMtZaOx%2FvC6HEBEmxuvQBDUelDT6q1WHzztLMPEBJmjh20o%2BHC0%2F6ratCsnWdPkOxU0bOx4%2BYQxYH9SCMu8oxgqgh4DXuhJj9HBIj6RVt3NlW2XUsaBqS4rRxDIE80KmRQs&X-Amz-Signature=06be63d7e349f70c7fdf17c2280d2c6391ea7b48a868c6762bc9d3e01b4cda13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

