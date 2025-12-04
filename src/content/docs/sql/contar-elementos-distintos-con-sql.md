---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZLCKQE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCSydDuNFdRYCuNFbqBTndquPbKjGTBkqHoFh2iae7uvQIgfDnX9%2FqghWHC063jkTvYG7NUTzscU4sfdDWT6e3BBBAq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaEQ6whxN4wmMHAxyrcAxyWQ2O750rH1gbGLOoXkNzpJhu%2BB7AeVwE5KbUMxPsgbgpIf3zPhNOTEGdFSt6gpGyfFnfxuNKO7%2BWNLYSXDSNz99AsA83WEFGMLNOH20OwScHFtzW8x7DhSrEkztm%2BoxsocQi3Zr0n5HsLtNyGm3VGItVVlK%2B%2BFjwTI26wtOXXBYn3eH0XcXj2srBXzLox%2B%2Fgy0%2FDV5q%2BCqxipwuR32LzvdHlJCOdCDdTIC79iZNFpEqWsEoimpjgst%2Bymx0qSnwY%2BsS728iLgkV5wKvGRAQXD1AQz7tOykxQjV0RmJOLWbdvcfMBtouSzgoG4GRcMMq9NVTAogzoF1KmKKrRjcPvGo3oSXs7%2BzjKJ71P%2BFxSoEDtOmqHiPcHxq7bjtv4pFfJSbzDNpMNJ3Jw%2FMk0%2BUddeNlHTFiM5ge1B2e4mfg5HaneXUlw5siUtkjoZlCuAt3IzO6nTmeuOPn3G86V1y4yEnnDF3sYdSv5%2FmN6T5sEinoS%2FejDpUdFNe95VP2nU4xAN%2BCgjI0%2BeKT2DiGx0liTQdlwflEMw8DMqygqS%2BrSrMmAsNAnkDrnptMxdppzxfI3bMHR%2FTejWbgDLJiW96OmQdRUONDFFk0Z8NCYoxcJ70i5Rz%2FBOXjkA6gK4MJ6rxckGOqUBC9d5mQknlPwnvdpI8ZHButzL9IKj0rBt8j9pi5owckE2BbaP2q3lG%2BsvqLOhZnsX9St78sh9yhZJU%2FfI2i8F%2BGX2jYBStqQWE7xyYZX4K%2FTpPZjXkX9HhvIuNtPK%2F1AiH25NUqZHx97q2VawfZwu9cX6HL%2FQK7Tmq6fyPEuLWEKgD%2F84mh70gaJT0vzu9uJz7GncF7r7Aji5Y%2BBf%2Fjad7BWkymmv&X-Amz-Signature=b108eef6cd8374ffbbf7fc4e71ee9c184c2b69f08044dc5fb788b4c1f20e413e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

