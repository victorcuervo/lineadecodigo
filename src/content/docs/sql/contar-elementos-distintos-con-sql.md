---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJHNLGT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDfpQsBxzxqB9AAUsmydtCPtjk7gRuntpgr3rc2VAXV9wIhAMgnuZYvTiVAe%2F2i7ZecN6AI4t9FKrj%2FBB1XAXj8AoJnKv8DCDoQABoMNjM3NDIzMTgzODA1Igys2sWkU8BmzY0qn3Aq3APrSSQ6HxxaDbuA%2B%2FGYdmatnDqVDka9dMjipMFdrKA36nzneVLwgmEkD9%2B%2FHpz9j97MV2zx%2BTDvDVscYw9%2FFQvHfaLrTJ%2BHAZkzsSGoDwjtU0lrDHhuKVFK9JAnURAdlA%2BW4VnbLFLOa8TpVyEZ4YjvSaSI769t2gfWqAfomoNB8pQ9RPLAZmoZA0mo%2FBIFZ0KJg0KiIsRyOlU4YzMIR6Gm22Phf4Ww%2B0HBAU9YW4RCb48Wg6ilUZTaUZQXQMQCWl5oYu0b2YIyX91Z5WUwjO3vV2Hr0BVqcxla9lFpoUZ31OR55AYVpaMt%2FOI%2BKMLY3D4M2NbjhQueXbEeX4B0Ld237wMr3KLnCSoIWZx%2FrdYM%2BmLt5QsM4zM%2BTTElM%2BVRR9M%2FRlTec7UiSUp%2BojoBkf38a6mXqWHji2h98wmVrRr3JQ76S1JEXWSo%2FWLgL9GwoFqgIRPEe%2BveXi3xZtKJ5CRLMvf2p%2Fy0meSgE6Xu7ASuVYrusGJMWdglH7zXO5TNvkjfWQSR%2Bnf5QALqBCr8aZ6RRq8vi1NZGBPyKXSDMOP3nYdRLxtlmt%2F%2B%2FvNDVvwop2mTSK2Hegrhk%2BQhOXok1jH6gEKL1UM%2FSw0jHmjLKot9CcWnT78hY7PFUoDNMTCutcPJBjqkAVF4QkciAc9dwLm74TVQTvqhFpxPhS11vJRAKrA6SbvsqVkooj9AqTa1e%2FVwVupegEwX6ahDfGLwf3VMlweeF9QljzG6ZEtG0kknt1rmm2yf8HBak40C4Uv3m4h0%2B7qGk08k4i4usnNvox8HXv6z2FQkN6IGetS9Ee9F8kysat57nRP%2FqwJYAxzcAsY63pF0bV9X10I3VDxfbXAGbSQ5xjZ5NJZw&X-Amz-Signature=c625072f713db2a5d4ad49c3e7e1b710dcf9b0478d1a630aa7fa2a8cb3b9164f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

