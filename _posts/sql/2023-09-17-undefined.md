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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553FRW5A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDBTj%2BUxYZ0IXRdPkki%2BPtHgSai8z1vG%2BtBTmryo8cSDwIhAIwn%2FdWDEsw2N6mhS6Tr0RKf2cUc2q7S6734hhgNKdgtKv8DCDEQABoMNjM3NDIzMTgzODA1IgxZQ4PbKkiIEBRB%2BBUq3APaza53IG4BRcSrYf9wZ7WP9TUjkIb2zAMhEyycdn6RUI44ucq7sZSWp76WL%2F3BYIUS%2BShbC8jP8OiVDeAok4dtAC%2FHPssksbsMfpKXOKpS7Vo4XkRbyEZRC2RxoSRbCqETkuUeuDeYGRl23YHE59RmVyTNCijymq43ZEKuvvLqBeII2lUElyuuF7E1PjPZYT2tggVSH1NTb6XZzrVLMLtHtlTCxsCenn7kCMvp7y9rySpXh8QED10KuhlOSxe9jj8VccQvzVtRpFR2%2BNbs09yYZwlHqEZR3pXeXMQ9QccpMCHXfY0UlpXNfEWyieQsaov2PE%2Fqg2zg7EKsG54DJiJHV7n3ZlCoq1a8WeKA3LRmjDlzMiGTtNJb1W6lQEfwaV85X4aDgMhBd3dcnSaTkxHyzO47iZnrDWIIInAsUeuyUxHh8lYhtsVVoPdB7VqWHjIoBM38gKlVuRE1RsAr8PnvWuUFXvP%2B0baFmAuof8vfcwtONjjIm4radjvmkPVOKlVMVxImYWLrpXCLUrJKCaSOa6a7B5e9pkbkJaAb6GKELmOhXacX2Xn2gOSRRqccH%2FvShK9nV0HxH%2F1nyFcnmnF8Vl9ieiI42eJUDGj3RPp0CMIDpqQCVmgG0OjQCTCDwcHJBjqkAZcOGV5jPBLdgfg7dPAxJGio3WBUsTHHFxWPFnUHM68feMyt0WsmtLC1mJOz9xyCnZe0rP%2FTX%2BpJUwN9NGzpe9%2Fd0x8X2msQdkfVKU1Ad04G%2BGHdE8lyaAM05M%2F%2F%2FfbTRJaJJ4A35lDvV5mJ%2BakBuxI631EKuQEqPqFn%2BSi1rr5JmvU%2B2PXC1VQGTHY1F34bgVWIlXKGqfn1TV1ExT4sWZVB7L6%2B&X-Amz-Signature=d07441089f9063753b4aaaf56cd9e905b3f819dc45cd2ab8ecc38a1dad07b5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

