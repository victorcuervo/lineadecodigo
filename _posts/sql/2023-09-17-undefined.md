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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636P3CXE7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQC7S2bctsJI1%2FxUa3WAvG6aKLB7rmvMtDVdF091tW5EdwIhAKEwhnAjDY2t6WsxUPYaTuKz5k0YwrOsj%2F5V46cz9i%2BsKv8DCDAQABoMNjM3NDIzMTgzODA1Igz2UmHVQxXtJ77e72wq3AMU5XDa%2FnLG31CkdiF4BpBVClOgDCg6YoQw1X0t16Hmczc3hthggxAW3gh0MW2YcMKtLsFlXB0EQtjlJPyqQZFlJO1gJOwXX8EMtFhuOov8pCOmWZhKkhO4Mp8X0lOqeiHbiw6kY9SmPanJ3oN5mrE9Mrh01V7c4Xf96%2F%2FRU%2FkHpfaJobfQ%2F42gF%2BwDYml6iDml3b5%2BJfYFA9OGDPp2jJc5N887lFNcwNw%2BF7ThXKV2ekFt2khF8cgsU7tgtDgM9e67Zhz83453uSaVwh6%2FYe1KTACk0V21uzpwDTs7djH6OKL35vliDhJCPuhZjx3KPVZtFVl3rgBYQxtBoeTa5JxuYXoo2CvY7AzbmV0zVllbXa1OMo8mQdaqr7wKsSIVyWAaqXnXNVsQIRIsdJsXn0%2FKqQ9sue4FlCmJIX77xvugGWUT8L8SrMx0VlxIs%2BjGoIVSVt8jGlegh2VaT7rQKWVphQj2FhHu2W8Ibwiya9t8ZR3U82Annr53wh7lQnwZE9NWK5v3iNHDi6a6bzsXlnT1A5SQpsLRqCiFHmOhBBSJEPhupR42VCU%2FyTEoG%2Fd5%2Bjxb1W7IgFIS%2FiXIG74PjNkDw5W%2Funv5YXOcAmrDqmigplvWPqX%2BAL7PqCpnkzClpcHJBjqkAdHZ9HQ577RC%2FKKtnY9uom6CxqTombql6fPLA0lXDcUfwpX0MyxP%2BSj%2BLbsvBz8rj6TIJigrW1xp8%2FD3BWgYRCochjBCl7Yg8qDE0x1mw0vhhGRmo3fPuTRngLnlbeJQlv%2BPRPdSdAmcG2GRKniT0hLDn1FYzCvTMVG5KKoPHmvIVM4M%2FXvBUT%2BIOu%2B9b1d%2FFv8sYOMLnSvdxvtNdAsCx1zAh28j&X-Amz-Signature=4278a3790ddf86df60f5930bec810f292eab4726d5a16734034f63ea6927d038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

