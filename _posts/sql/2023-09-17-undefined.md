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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TGBQR6H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAkebSyhfanmHAKvAzrC9gienUnPXBl7S94O%2FPbiENEPAiEAihPcJ4RtXxMAR%2B4g3QCPz5SJ%2Bmjgf%2FGLTPu0SC65vroq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDICIXUA2ITCMHJnjsCrcA7lWTEU7QzEBlkhyTRFNzWcyFpzDOdzXZBLoH2kJ%2FdhQCzukf%2BKFsIPUDEq6wMY00FbBdLbvi1zWHhA3sLgQsSvkQtjlgIWNBzfqJbxZeo2FsgPyz59LQQVnPmAjouEtgcSxoPRxywW5vBRBISDOaDWo2N%2Fs09EZP%2BzizV7HueWsRpDOT2MU28EaN1yI3O%2Bu8tr46uVFmwf84dIIhyhbE82%2BHobfV0jtoLvRGJFPgo1%2B6M63xbHasb00J7AF6i5qmFUZYqlLTlrkN13XSvLFjc%2FVTeBTcUJQwQKk5Vf7Fo5I1CNrfWoUdCO%2Fb2KmB6yLOzjeVCIJaHLC%2Bemq%2FY3Q5AG1jOY7kZcnfVWdLRDswMYrlE%2FNo%2Bk3spWinKX1mdxeQBXMr%2BM%2FuRJb5Jvq7JrMf5QYwQgFkpHHH36NRPZukBOyHYT%2Bx%2Bhm4UUBPzRrsGQSQPOyz%2BY%2FAVdKwdd%2FxvZbal%2FUxVyOKy8bzpvh%2FElVCTjxYQHHNgRCYV9dRdFGe35pDy74vxFGJREeRoWq7FcKzuNvlQnAbqKA5QeLdVUHg1WUDbgRiTGq%2FrIGjGHzDyNwi%2BKx8M3dvh5KW%2FyPqxe2UW4P58Ncnlq0ElXweMEQ1uA9b52uqx6NhKGLjCntMKnMwMkGOqUByIFfhibihuPNZj1Ez29OqG6aq0CFExfAavskefS5pie2Jzw%2BwybIMgNvTxjiaJSX8Fn5fnOC%2BwMtGwtwjJZDOG9wxDO4Bv5xqs6srKvKG2amsuPPdeBk5mJxXqbZpFnM0zvxF5ijbSEpGqTkoBf%2BHUoUF64ek6eKUjJ226FFtg8oXVAwJoHP8LxUdF5q7aX0OtHUR9IzIHhiLJW7KqNzbrTueWFc&X-Amz-Signature=8b537913cbd60d073a5a106c43ead4dc7a901b95a64d5b6db751fd2a76d133ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

