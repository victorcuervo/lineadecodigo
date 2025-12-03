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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDNMQZC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC36ufFKlA6dV9L0JB0CiZsipVjD%2Fzi2mgr2Ttin1s2xgIhAOUSefx4UZNNZF%2FsGr0woKDBYAQnC%2FfCTYV%2F36J%2FGZ29Kv8DCCIQABoMNjM3NDIzMTgzODA1Igzwb4Tw87ifMfYOJx0q3AOAE7i%2FnjYwKem%2B0rgwVZvDRP%2F58O3jKO83Xpsggx95HGA7poqKwDTPXUCuRgE5ug2USaKZ0rv2k5Dm2cu0xUMmQpjOI0E9sVlNMxMw%2Bv7aoXoEpb63VgMH0jYpJbRYBwlqlAW7Mz6bkX%2B9hmDdFgx5Rje5mLN2n1FewfpVRFonJ%2BlfHogfFvx5poIbg2ne%2FrTDL%2FVYJ6bLJYi1wUuLTrgL4%2BTifx6MwZ7ZfneT8LEICcW0pxPr92ISdXCmbyrGmRtKzq2FwsBdyWkIPsEf3mWmH3raaMmk6ea9%2FuIQdh0TGCMO%2BwDOA9IxCr2AlSmzatTgqF%2FteIjaK6Wd4VyRNpbcjbe7PBBBvuwR94nBjXoscED7uyv%2FnviRsgi2c32pwH9EKh3P%2B0VVVaM%2BZTIBRLMFEDkb1qRzQhcBqBljYDJSALchMdysRnst62QjXUxK2cDvjixMQ9fgTsarAimOHAWvfLuzbePPF041c1LAi2Ymcxz3eF7%2BMmnG6n2wfFVeFpvMyDqwQ%2FgaumzpT2B8ckskeuCBcuyzcNpQkBC4tMEaHJOksvSkT3KK2xZcc%2BhVcFjwNdjWLkeUOltmgORcEvXaSD8rRXUyIrefAcV3B3yaEGThe8qTm4Pj3M91NzDBlr7JBjqkAcFs3qZ8cdzZt8BO0YKli2TL6iERVfVZQGwaqg5nKdZaiPl9ZwT3TRz1lFjt7oMeAG6bSKHd8MDjY6yXQyjWAdxricMRQBLdmXAuEHqJYTh5%2BhxR7vFz1UarMh0bPn4um4rEmoH9zgAN8t9XeF%2FjdK%2Fk%2FoMwi6tjea3py7X%2BOdBVJ2uQdaeLxHtwv0lGck3Mu5iqV7bR%2ByeaE5buGjusGv%2BoO2Cf&X-Amz-Signature=bc63fd0ee81216dee28d4c58d48fce048338c0e9bebe65d226092c18aca4b148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

