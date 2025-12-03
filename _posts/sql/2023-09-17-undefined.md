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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6CLYV3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBfABQz6QIrVJY%2Bmnhimr2nQYsNbc2H2%2FGyYO3V%2BswiUAiAc8QHv0eoMylFhx9FsYhg%2BiP7Tzgc9tkI2heYG%2B2GXbir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM6%2FwDpKh1MX2hjAgcKtwDRctMJ%2BnS2EhZlwJKP8YuwsqnXrrc4yfjA9Bl7%2Ftw9dDCnhDhUo09%2BnK4orUKTk9tioo4XyNzobY3MALZyxT3slBNt3R9LR8dAZuqHK%2FXHnYGqMcPTc9jkWGlxb%2F%2BjyTRM2%2BOi1rTyGH7BIxWDIMv6Ry4NaWe8C6qxlmAhoNeBqBcKKP%2FAjLqz98sbD3OhK4FphstoQRFX7IMZUSbGYlw4wHIn%2BsIZwlEsxupt9NyEht1yatfH22TjUnk%2FZWloW8pZ6PdqdKJTx1GrC2qC9NWuxVd1mGQczH8MiYdvatgfoyVBQX%2F14y2qsAqqrjjIuLIf2Cy7H6M0CwdwREgpw84xg99sq4a86t7OglZyxIRfsnQ5NMH2GSh7BhFNS%2FiMp65YOKfZgbMMVRBhrQhjqTh4FPg2FevR0MNPfd9MU7l%2B1aUwAGWeaWWu73KwsfbVZKG5Rb37sanx6kX51YYkacPc76zgTRPFPfU7SKNtNzY1KudBSquaYRXWnFY%2FYZeR4paoLUv6e9VVZ3FT%2BWqUSaKq%2BhFKaNq5EC63L%2FsgEgKUA1eXSdIiESnSdAX7I1pVDKpqnoifrSGvVXAAgLlUgyYjVM1WNDg%2FMgNRIlMuBpMaYPlr%2Fth2%2B2EZJ%2Fgn7ow%2F5W%2ByQY6pgE%2FshsEPFxW5dXeJCz%2FJEFGmCVZBMLzeGgF3dBtEY%2FHqc%2FBfHS3cNF9S2JF6CtxbwCZIRc11JJ3M4uriVdkwk5tJhuQ253ejXw2wpaFBnfDld0t6FN8vqow87OTZJneuCYfTBD2i2IGFmjMeGsqTCwtpKW4l9V9ON2gWyfH5VeA4t%2BuvRdZpT%2B15fRlh1cIR%2Foh%2BDRAkXMiUz7ouDMEiw%2BgGA3OUl84&X-Amz-Signature=d24094b5b25ceceef599a4158aa9259fabf423622a172e85fd85d168fcc6b917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

