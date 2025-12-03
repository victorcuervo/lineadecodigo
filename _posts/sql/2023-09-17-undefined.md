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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4X4BHCV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDugceQdLT8%2Fk68xkERLunVXTjTcDDVhX5n7V4esfCBIQIhAIic1wrZIU%2BS4KXLlkxXb6ULjIaNE%2Fn5BsyzoTO8bFBAKv8DCCEQABoMNjM3NDIzMTgzODA1IgwpTvBLAmUySg5TcG8q3APBVK0viiGwGWb51QDG%2FBsXIfkpwabu0w%2BjnFPRSsA9tQlcfzLyzcC9HmXr9ByfFED6swLaG23qPvy3v8mpFTrWLqDTX2jxyPUBXDt6i5f9MX5ncrZLURd0mHgNNhKBAdo2JvYyYm2D41G64Jdk7GyVwZVBZ6XW%2FcQwkX097xD5kNnp6cvVFA0%2BQupeP3hmDeBoLPmXJ1yfrz%2BqJmTxCojTaIy3SIGQFFgY06eXnkU8Wz%2FsNr%2B8YYDLGDGCA044GfBo3KBKnaDoCAbg4I5DGAS0fqP4Fw6WnYKry1PMCWuIsFL47Jv8gJ%2BZv3uhi6ZAaRPDY3hqjcJ4tQUWy6YSbG53OGHZOkrHZwEPxoS8bCciay1uB90yOgNj6M%2BCImpmmHS8EhlUYPiSX00I7irsF2o2BTCDiMAgLAlLNqH%2BdZV49azYAaoETXDPaVyx9WEGxfbgTO94mxtp%2BmD%2BAsm0b4kcTyxjjU%2Ba%2FSH0otnOUn5c%2BQLOotta8uHUZgDWQ2TbqLiwRVsQhQIGvoEDRklzXas%2Ft7jAlBOgUol86Vadk1zQt89%2FmBVbI525AJ9djuer81NKzrZh5hEt1GP8KQ8qOAVc7cYOGQ7Yj3yVqyY2vtK0RhuJX%2F3jsF%2FnOFEG5jCK%2F73JBjqkAem6YKlx%2FyjFD2uN9jeyUvT0HJcX0zMvepy0dnqCOUEdpYJYtaGc8OOalu%2BqrQ%2BaafBlTNUP19D6sS8j54SDlzoHBHoIlIgjr0Fu6Hd4y57DawKzxtzCsFQZ4H9CHFJGnfq5ixep9%2FuPpjo5fHlo5fuQ%2BtUUVL2%2FoMeLvFT4dva%2BfdiOssexF%2BggLbg1yxQArV6AsA4VBg69LHfrdtvPfS8bwE65&X-Amz-Signature=20d6ba18a5a226ac4f6b491592d78341eed726022a4494cea0b4fcbcde0472b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

