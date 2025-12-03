---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2XCKCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDrKicn0jH2VPB4W3UKBEc%2Ba9gCkK8djE0qdyLn08NRRgIgPPT6VPAZAr3L0S0LmZinOPMfavJ08qJ60YzCOr9TGOgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGUa6lMqx3DflrEPkyrcA75TuLKJk81szpS8SQU%2BG8pwW4gAg7k7DUHvovnW%2B%2FCZwwqJYOAHdnhZuk6g1mRxVQ1%2F1E9jUZj6aY9gOftj%2BjKyAnkOp9BOdo6oocMmYu1dRWX71LDuuTHGrX%2FxbY2%2BT1nbeLoJKx2BRGrjZqy69RrpNrh50O3shffTl4MwQUz0HSG0NsIx3KmwOt1Aog2pjktk1QXnuLNQIJsj05Fok38RYBIP6thJVSr75Kx6F5Ff57u%2FPnQSlp2owJMak7R%2BZp2bqQLAbVyWElYf4O%2BjgHSF3y0M74z9OrHk%2Bc40EhZsmhwn7gmQ7O6o244uDbVWvOcKT%2F9vCqzukkVG8rGeqIOohIE45ppg%2F2eH3gnq%2F91KxRTxZcHfHuJMade%2BLstz5ohT8tYWU00ouShfe5DE3XcwXaC0pNnSIfY7uMT2CBM2pbBLUH%2FUXaS42F35bdPm3e5jj92CPMoCziMLVIVS518CLaRr%2FnzMF5fb9lywTmPuh3pwFY6CQ0SVAx5sU802aV1OD%2FayzUCKk8gKtkPizXY2gulnFv2iGQujOZ2y%2Fc%2F2se0vGmpiqEeuGuvzArtlvU4%2F8HvEfPn9zRrjYIKdA0XIKSSyTo09M4c25N3Fek650CBIwRjPJxegeXgUMMP4wskGOqUBOih3lZ%2BBGcJyY0esv3bDPM7xvUtdcutlvdxzLLPZW4h2SPN9JuqAy%2FwB74ygXgy7eQSGrJKNexBLGnD5zfFt0%2FkvVxgIM0eGsXA%2BqX0Pk1%2B6eN8Xh9Ua9cu2OXYr2YlzdFZfw8iEkq64L6AvFlv65TlHneLaqYpU4HcD3nSG0iLzwZveaRHinWCVQl5vwk6sVUnW2EN7NOKZQu8HX2BlWReyiuMZ&X-Amz-Signature=a79a6969e26795de014740a9bb1acaebef551f3f8c958f3d24f72bb81d318104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

