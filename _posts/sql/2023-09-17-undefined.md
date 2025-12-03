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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIMBFFE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEVIrJBiexsnSc0TAWWsRd4NFNduVNdNU2HMQ1N6wgRZAiByffukk12P9N3vc13FoXFcqoZWxCraSor7Ib4rP1S%2BXir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMHMWyHlYvdL6%2FrHp%2BKtwDIHhEAXMtUhFJ9Id3CEoa2oKgggiiefZ6vcp5A0m3YdyIiN5KG%2BLNZ%2BHADkj8JDFG2x4F%2FuJSZsE9c4qFPVYmYeVFq24el0csoyXH5YCB2YGwVSnIa%2BNt7KY8kmr1MIlKk9SSeYkp3%2Bq7zNIQ1ONM57SfrI9tKVr2uKOY92zXUReTlG7s%2BK%2BrRzIE7ggtL1iRNIZKGkzsMmGh%2FUXJFzhhjgxuE%2Bi%2FHaSk0%2F4bOPRVZ4vPXVEbrItVaivkzT0E8neMnS2L67clsq5nxLoU%2FdD2rGoHvlUw%2B%2FGXh0OVQ3Um7wjn0rpeg4LfrFFCxYSxa9fSmDbbiqtceWgk8pFGvTBWfY5xI%2FuRPupEIRIeumeVK80%2BdVlIGR3DOrRKXhkG88oBhqXw98Ia2FGGShp7mNiVC4pgXLw7SxQlswA1grZ6hT76KtQF1XPLk14wdrcdr1DrsH1PtaeFj4GrUVm0vl56xjYfGcubb%2BRFBZ%2BvG%2FfB3LNZf9olmONPKCrSwRpF8lnVrcikbsFrvJHMvCoGYSKj239vZQ4Yl7gKGEm1XZYAhPC2Mdw%2FWxUzhj7y4gPqJbTObLYEC%2BuioRr%2Fi1ShJtGktMTVa0uZN0rLayphxiTlqM6fGoS%2Fpg5IqKBN0wownq7AyQY6pgGJhphqWo0Muzj2nZz%2BMTyQsx7T%2BV%2FuPsuYNt2nXD0XvDxe4pKVfJ79iD6SruiUPY7ZwG7C9yqjq4cf9EgO1bEUJnaOamyf4HiGvwznPa0iqYeRunuoJ5vhn%2FYPkZruEhekqFiA0J5oNkT46s6HXMeJiFN8OOJd1FAOjmuoZ8BAjNObpETHjzl7DiNRCUsZgBA8EwWp8F6mioua7OWgEK8R9QDyhMgS&X-Amz-Signature=f418611792940eec4f5f7e586ceee3314b72a4986d7a445e4245baa443a3dcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

