---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDZCCXZY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2FoR42uk33UrLeTB5VSDOn10SkI81WWWye7D8RHvRZbgIhAKfhXNsw7QCXa0uHlIv9aSBBs2cxkMn3HWUvqAvzN8ClKv8DCD8QABoMNjM3NDIzMTgzODA1IgzxrRoEP%2FAwHo26uUoq3ANcaz%2BZqtpW4iA83ESCkFuVGXlGf6vp3%2FMlQPITe0FcFCStJqISXpK9%2FLAPH4r0Zf%2FaZGKrd3ilQ%2FGPKVyNKJ63%2ByQWhzFmbA2GaikliJ7yM%2FNs6Lh2U9Dcb165dpdhxwARx66plqbgjvNPb2vKv3iFsDGEq9K2k%2B4E1NCRlVK2M2GRtfLAfhbrYNNofPQiL8JL6M%2Bqc1S485Ag7LAbMaMjrl1wSgJowIAaN29AN7WHIn0JTYXRj%2BorpjdKwxm%2BzJWCfWusiHaUnZTWMpw3Jo0hvdMlQ39jjDWr9TiAl7PyyXOZgJ8S2Zu%2FJcF4KuxyxbMCO%2F1fDw%2F5kF5IEZHOw%2BruWbW8wYXsRLk65xR2EbIR3nLcI8p9TkSKnxKeYBjYRjc8rcD7b1vgpXDyan7dHsBZ5xG2FX5FX9GTUtm4oE%2FUhs6iiKjyACCo8JvDJ44BMwzwLciA0T5CwGGHXX89nQ%2FbFK9ub2e1LtQuZFpI2dFD43EU2DvLmUQmUWWZP0gBRDHv1GNOdgMJaU2zcbJ3DYL%2FR5BMG6ce8Gx7ez9zi1RrD3WfEoo1YH4XEdt049wxkfvz8Sv2v4KEE8%2FVaVFBHlcOB%2FYbLuohutWdF7N5mrdnsPlvU%2BwPvWISz4BiejDAysTJBjqkAXJqzHo%2FvrT%2BEuHRq2zrnFwHI%2FYrtQubeo2E3TJ6CLRJhPbvuuok3zblV5JEjzbuIWdYGkkgVgV879bK0QvpT5iqHHn%2B1CqOuARxtlKGVTcEO0%2BipB%2FJ4qxC9oz2x6oo%2BhrOOKRQ%2FSfxNn11ahktXCg8%2FpwVgd%2BNsLBr5n8pNTgXFbQU46LHjNTfzLDToOSTmb4Fx8GeXRO7JQ1jmXYvFES4RG2Z&X-Amz-Signature=472e62806947d45aa22a4e5d0caed66630aa53f1ba61d5e46bfdd51c814b53b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

