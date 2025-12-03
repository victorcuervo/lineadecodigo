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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC6K5GVY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDlouHrsEhOppKs%2Fc9jrJPiJ4B9prpvYNqRUQ%2B5zL3OqAIgAqtPvDvOVT7WhKsoZ%2BBlCLaKHra8TkEad8W4XHdNQHgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI%2FCxfhaabwdM2j%2BkCrcA9mp%2Fp7xCLQPlq7sTC8PzE1G1vyKfvHg%2FTiAl0sEBrMT%2F3m5hLuA%2FQM7t76v%2F7oG4DgBfzDYWhnS5AcCTmo3OC%2BPnKcejoK8%2B0MQwEDyxuTkqyNem3VrQ7Rjr%2FMCYlvjlnQaOmIn3kVxjjze4dy0m8O%2F32%2FTWfVQQq1rtg4mZU9gzP0xOf7r1i9pme%2BrnC0mhjLpy18jQUbilugP5wm1jhHx%2BNsDyib9R9dMpxjQ7Srk54TQZGG1VfShHOip%2F%2Bc0ipG9mvl8R8EzETmQZ9MPneoz0m432HfTnraoGZ1E3RKmTJOPvjmGaoshw4iap%2FjDHD0a8t%2B3oZSENr%2Bq1hJiEADqNRNYCdaQRlTxE6ORQvpbZghS0qsSvSkVT1xLzXxiXeRsMQCBEYh%2For9livlyVmOecgcc7mH6RUPT%2FJwVDDqYMrBTLwLYvxiECd%2BQgb2Ua65ehErTcSNLPsoZGGHeTco3uaK6rN331FbiqHPgI8pHiueBq7c0TNvX7p7iPiDpgH5GYXtQzspe5Ep8TtiZIKd%2Bc4NsYE27BfV5qhYlDhoxm86bDcOE01MxJMOgHNlymCec2%2FnPTqoRfzrCeuo6HE%2FoZQeZyr9j0Cl%2B8Q3SKMhNqks0wKDwVQU8hoh%2BMLXlvckGOqUBqSPvvjoc3zbTMU03KVh4rcdkJGAaV1XqFn6g%2Fh6HCXITu6aDHNVEQ%2BGKZuWIR2xs5IjuKQeBtFkosUhJUZuZYQuXLs%2FsDhl5fGhaRwLGpqKDmnT27DNeCU71uTfoITE8N98VVSjbXhZfAYer%2FcbBxgyEDyq2rXO%2BceDpju%2FZWZiXAVOLaCJ%2FOq2hkzS%2B1FFvRko8uVNA2KjnWuda4vkCPen4%2F9uw&X-Amz-Signature=fc5788c38caa2230c2436a19a3e53ec52c6e2dfdc9363ba137cc362806af826b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

