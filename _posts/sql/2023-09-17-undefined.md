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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIPYEUF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF74hGICisQQzSYADjaWd%2FfikBw%2BC56AhAzpDiddZNA2AiEA0Gvn2%2B7R3Vu6mbiHmE58iv8mn4ZXnarrrMwc1xKZZt0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFZcIt3W9EwQGJb6OSrcAyTdGsGli%2Bjtc4y22isYAP1%2Bc5DlS6nb0YFpdUCVrOzlZRwyLETN1RDWNcLVCK1b3exy8M4KQ1sIqlj%2B9FcLoPmAseAZuhrTZzws3gxjw8aMGrzcN%2BvgZ8Q7eEc53kd%2FzgpGvjhSdypBNmcnviA%2BvF8kP11ElkAuyQ1YfW3nYrOryIxIj4msK6sB6vkVRQToWwST6H7gQKeJnSpmJPXxnJarIPvNva2RJGYM4usPddekwP0IbpQEOAB3wShOlBqXytRN%2F%2BQmz3uF%2FWttjMLN7lzrQDQaIZ8GWWwgY1E95McnFdbtTa7yXq4vjoaaP370gPvohcUDa30HwYgDzgOcwITmW1ejB1bx1L2BUJv6rsOgI8R6F8yO27gmdfRSFILZRcyJ3ZFp7b8obQ76sOqrLenTWGAbLQ2pzjWNt8e%2BLmrb7aQUQZEmZEoyTgcgXqzcy7qggW4DtO64JbfOAgeee5u5sr0pgNxueU%2F%2FoQ97JmNTpZwJMshZ%2BZu8MmkSaGkWpHYfCGeQEBIfSTqafpnwpfjRiG51z0pKvZGJql8qWRX3BkKSr3vmAt%2B8D0%2Bz8IHM3OU5jcuaTt6XEMSF8vxbF%2B1mfFjrRm0ELkStlkX34Rlw9WY3hjuO6uiAqa06MPqWvskGOqUBjm6FdQewsk0oJUtmv1zakrvfRob11jCk1zeP9jmAtrYsDQIImBw17UimgHIBGsHa8%2BLc22xZM5nzN9rhrcba9YYIes01tuc6D01cHSPIMf%2Fp9oK8i%2BxLo8vZfzUisyIdTms1Zxcrpg7zZN%2FlmZ1KHyJZl7R5u8LrCNmo74gJbbC1HHi3NjVvGWktmhjc%2BU8shzAGRJbco0APk19SJjt8MMFz3Ewq&X-Amz-Signature=f12bee1ac1fbd5e075bd8217d9e89f4863016a8c8d6506a0898cf4cae6bce6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

