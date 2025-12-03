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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUMGZK6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQC3EQgn9WlmxMarUJmnNcB5WBsHcgT5nyO1b0f1uzd%2B%2FQIgfk51eTT5tvSONRyyQt9Fj%2BHfiW0dYXJMzhmilH%2F1szwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDP9VRO1tjeMRSffcPircA4u0bIXacvV54%2Fw%2F4H9jq3Xv5A%2B5opiL1iegYly%2BJbcU5TCPm1o%2B2MwQ%2FtUsPu6z4HaEi3YP7rLxCc1s2Q4rkqSw2ENohlXhrmHfjIVnYVZ2TPoDKkBE5tO9NKSMuSkobhxtv9hK39hRR0WgXKkUIGgjMuMP%2BPIqWz%2FZOj3B2OGXqg2fUCkpKiPsskdVNA6dMLcICi1vyRA4AP%2BkVTBY5bRlnR%2FvB5cv%2BrNtha4ZFRhWrP%2FmYVnUuT9GJN4xF2GULdyB%2BJ5oDIuXqYE2Vh0DGrBaxbbcJUsobxZIdvbrXvJALbCl0dGZKLgdMmlokFS0%2FY3kIUDc6OnEgxL%2BrxXyC5ww2ly3O6AMiNxkc8xcz%2BIQM97kqXFisvwtvyn%2B3D%2Fio4ZzuBcLJeWHhhZxNNsPgV0fneAE98N2MvTGpQ63robHr%2FPz9NyMKUXNYCLF2HNSGwAUcl9ApOmjcpn5Lpjs51XgCVb9tEgfZmmfHDrPeAQtF4le%2FNeWXxoG%2FdxTU19MPh%2B7or45CJ6UAA8zDRRYqGWzFzcPO1AEa%2BKHrorY2RrCV4o3V1MM%2BNStOkdKl4YnPBzHJN3JcAFXhqj9TkMMvo6656YKStwmGTXrK8Q3brhd%2FGH%2F%2FbhRHukHYoS1MIubv8kGOqUBD1%2FIMPNIMgyK8jII%2BnK7L6PbG254TT5Q7rWcgFN8zxtrO0F%2Fq%2Fh78rdIjG8%2FgN%2F8hILArf0BLQo1Ila%2FUPbztGktdCXRStkGPPzUmPNRKTG%2BPgi0HK78XZAKVdidNkqAV0OM3jQdYkO7cDbH2D%2F1bxy2vJRxVvcHaTSjmVaIkm3MdDw0hUiralaA0R%2BWW8L9eONTYheQ8HAvHt5IuCHv2m0d3LNp&X-Amz-Signature=4e93979bd7a2b756853ae99dda4cfa8432b4518f14d986c41de39e9988c42beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

