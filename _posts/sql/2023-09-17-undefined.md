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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3ZIHVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICWa0sEN%2BHpqysbLYomGKsHwvFxpjVsiee0djtvDyfItAiEAqup%2FXM7ng4Qfbh8V4FAwFOQWhhmmUVzg8MRv4ivw954q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJwm0uONEVjtOhoeBSrcA8j4xkYf8hmrWpr8Q8TGo9gADe0lwXm4i6vpandVhSxxccD0kCrqmQj8wL%2F%2BgGR70rWFM9NStPG57wVzMhAuVLQpVcvnHUvZ4HWAAH7%2BsnRRyClj0mxLHSBzXUC5OO2VwMhqgOLaSWYPZcBPjcCx3cBve6SDwQVZ12LY959hBzfNqkjNDVScOwIeegm2Nyqv0vnEgPIES8iQpCuagdbE9FRRbrkpA1eHRwyVWHl5HdfhyRxu6lEMqpVZfWAzuYvym97qxuavgP%2Bdfe%2B8CXfWO9wcD1fDF9B%2FzqrkrlVA1Vpelh%2BAtDX%2FfERwZTSyfHMsYK%2FQEQgUvx%2Fn049%2FYCguD2dt%2BDwAmZUdePaShSoYXCADGhBEJssc1JJnKPb6IRx4KmPY831S4BoxugTyIQn46sej8Oy%2FJziD2U2wEP8U91GMS0%2FBflmSdw6ja6rOXVlNtvNR1kHEq1n063uOOdqgLRjJaPd%2BDdqUDNykts7sys6TRtVBnpVio49mB5UuOjvDinm41onAbc2W38iMxVNpnu6oigXNM4pybfpHabjNQAAIXxuGn2KZ9HYi7%2B3KwU1G1sm3p%2Bbj16p3JpbJvlwgbEzBXBW2Q3Remq6Cu%2FKOs3bUhF8QtPXAJsicoNOmMNSUvskGOqUBztLzJMOpIkz9rqOyCm%2FDYuAeFq4AZZIOzOgbsPjMeF%2FfYwL2UBqYvcXHrT8yXf9BqqcVoujGe3rm8eXF1Y5u9mu3Q7CFw2Avf7qSlCCniMlBgcmgnLXbTLiy2WaDPfPjB2Xv6pc7%2BvPsvtfZYZDQiQi5gnF5%2F6iFM6b5EOiQb3DoHcpbgq3EV7fpQHu%2FYACbX7a933m1o%2BfvuH0ZzblAJtM%2F2bEC&X-Amz-Signature=7a41a2eeb4f25714c60107864c2673cf837bc81d2d4b5568759e820d7efd4184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

