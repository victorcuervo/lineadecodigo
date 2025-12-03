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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBR6TUWG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDArDYmozifVb6XrQrpEA%2BCOG7iuWY5aO2BFpmgZ0MmiQIhAI32SbHa92qDgt84pv1ID9Abgjdsb3iLJP8PPQi%2BRPAfKv8DCCEQABoMNjM3NDIzMTgzODA1IgzWahB%2F7wcIa3l28G8q3ANA1TzhpBUcQdbnw%2BlKmseeiZ9kVzMAOoIUmUBjQ9W2GHKHARiIOfRNRBIos4fD3xBvzF0BG%2BjCEjU80z9RWGLve6MVLUAxemDvily09FR3z4EE2BCZEnKBRvEtIoSHk7fVb9ARKZmQjQL2Rp9oT6Z6bPtLSqGNXDmUEzAaXctqS7aJCt0SlzMMb85jxwE%2BaN70sSADabCppqcftVqvmuv8W3VE%2FamqKbaNmyYBy%2FSBDqyIaWOgDOWSLKSEqNbF%2BHjKAzbVKBRbYnXieTV2q7y4WtPCVnCaXK6nWipJEiBuJ4p8WiGKM8dCxWEhfzkkuTPBIAYW4mJOIacnWTiDuwSQLZ%2Bk6tVA2ISG3HM0eFHafXsi%2Ba3f2ibZUmUn4enD2Pmnr90xckAUM9X%2B7qq9JhnenyJUGsFC5lok4IKASXhFnOXuRKzoJNYBWX9eExBpkfphg%2FKa5J5shK3HBRw%2FTQiWI00%2BFb%2FakLNxe9rkURzAZPoHiFp7GkXdrIF1UWghSQMip4B%2BrM264s6itgYzQBTGJnzeGjrrLfOZhMFDycHt6Y67dXvt0dKSGUdvg6TVty%2BBegzh5xjSeSC33EpFXPO2OOgI0F37U%2F6dImMI8n3IphwgyDNqrA8vLbOoLTCn%2Fr3JBjqkARdY5thXrhKhwhibt%2BWaYFSCYOHqVPceeqG70VS8BesGW0QU38qfGM%2F65OP5zW30gqHh8ze05Xkbv0l%2BJM1lqMGo1b15hmgJgYWldwnsnokSM1N1On7vIRaWgP84yn9sRGOW7fCOninYzafnMpSwHpXSVv62S6k%2FaPJjD5P98BIuimDtdWdd4u2gjqPYQZfiCB1EG9yrbvQAhTIq0jjJ9CvSBP4X&X-Amz-Signature=ac22698d9a31492dd16a666672c56e6a195367557fffa5475ae47c8daf35a37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

