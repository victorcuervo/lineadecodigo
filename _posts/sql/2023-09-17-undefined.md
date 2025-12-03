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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ASMCO6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDCHlcvKyMQzDnNz5NuRTXJP1BUPsGH6hlCyMO73xWrlQIhAKgDdXNSzPx1U0rJn16Jm7uj%2BmCP2tSJ8gmhLwlMuZO0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgyiT%2BBnWge98Bd1PJgq3ANbatZPjzQSz89PlXW5cFjf8r3TrfegZoBWRsSR%2BLXLRZ3FIlb8PajpxVP1VbI2Pc29ODiPdzXtxCZDFbQQnxi%2By4RM%2BDJpchVrsQe5aVIIiDIy%2F0YZyWXPY6CcxK61DGopAs6nnt3JJEAE31WYARmdQFAV0u%2FdF0WTkfDtkyMJRFH02SAD9fR86u5KnaSAbho69%2BA9Wc4NfkjGpLtPwHOBXmHK3RWO4HrEJLZoSxtWKPCSca3QORZb15vumLHL9YknjKVmxpLrEaG3%2B96KGyT7IZwgluckV2BW2ZXmnTVF5ouyKTUEG39ESWwla3fgQHXxS8L8tcesVMC%2FbQT1nUGuLW5pS8lJ8bJFyWGkB1X7fhT50YbL4r46xQCzhA0tY86R%2FQb65pydatZOzCdAFGRficXM0mdslhXJ3mAJl1gMP4EqPAG8RQwRfNlMJMy0gkJ6RIYLuzGzXjk7TTgTOt8NwR9gMUOeCJL9RpL8vmq%2Bli%2FLU9EMk2TymKugxNU%2FpBrc326S8oRcMblYM8V3ft%2Br8HnZwIua8o6o6q67AZP6LTm%2F9%2FPsRiDp9JCQeBB7W32Urhv6hUAA%2FOqcQB3iJIEir1KZ6f0GAeETq%2FyogwMP5mGw9rebqUl1oZksCzDMl77JBjqkAeqAUjH7sv%2Bsi7RVasLpFpw0B3zL5UM9ifgXcx4hghHX6mXrjVWoVwmovEKneXxBSCuKv%2BM8HYa9nXelauyeUK8wJT0GPYRBEgFXSq0oJj0Z6T8aS2YTIORkPNOVRk%2BphuY%2B%2FrGqQNlC9Qta0DyG%2FCrDQlqH0FcTh4pbf1ABX6D8JVWoSikAXU2JVEJPNDHpqQlWvj6MHNofP2%2Fsw4mNseif5I9O&X-Amz-Signature=8254f05b9049ae73736dd9576f3eabb180dc906bfa6ecd2de15f3ac55c8bec7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

