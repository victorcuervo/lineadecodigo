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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5Q6YUN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCfn77Tl43QEI0CMWsKgePSOO0mpcbl3cTTc3Qys4B6mgIgEIokW8UWnvfXV%2FrWUrXvlv%2FHnRptnHeE5%2FwXqSsYnekq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNxGCtJ2PQ7HoOyLlSrcA0gTW%2FvEAqJjQ1xY3erkpi5XspIBsoNM2nJWDMcNO52%2Fr6zkwVr8IhrWTghqZ1SEe7fHdMLnNdTrJXO0IExve7g880nFkPvJjp2TOgRMyaRyLdT88YTHMfn96cfhfFOuNfLWlfQjm00Hb6nO%2BKFBQpHZvvnvhr45how7V%2BcGAcXQ005z1r6yUrfkARlA4RDuW71vLscLOjFzzMT4oI3UFSS37rN0HnFVRkaah6HHnrurSHte9YhRmWHJNHzin%2FxnQuC3kxvoWKM%2B0qb3fx8ZZh0QQ7QezoS8k3cYKHFUpvYCN03OROvK9NU62Ild6wFvWn0k%2BuFs4XyD8D4OYHD0HgC9841DOXdyoVO1i4G0yRcpbelvy8HGJv629Zpe8Zq%2BFLtYN%2B%2FJCGFVO6fcTrS2MiePAQRRKZDn5yDSBMeR9UTCTAx6dlYpPa%2FHtOqUgEWjpIYUVFq%2BFptv6wQTKqCXuj64PpaT7WzDhKn1tjgI9XPk4fcyAqR58%2BSTTXhy6eCpbVP3%2BvaRDzICQOkKj4yfgypWRtF1KZytIynYy2TtmuZ6qP4Mc%2B9pS5ba7Pb2sm3Q%2Blf5L7EWZyepxVYUSovp7PzMEccWYMwHCWQAWreARxuTbPErTYtaRwiL8VbbMLWHwckGOqUBpxkfk2BUPOz0nd4x2H6%2ButhnCyYGc58aWTcSJNTq4kIec99ILdzuevBQ%2F4o0yiiCnGIA5npZ2CCiTe%2Fz0qlFQo4lmDdDuN0wtwQWv4OqOQMfJVe7kcHsumDFtD%2Bu4U8L%2F8L3QBiWUymFCbr1Jfx7Kn6voDu7E4Eqi%2BrFzwkSWYd8yYQjWRtGI9JTpZYrPmhpERadDFYF2eScUaZw6lqC4TKA6ld%2F&X-Amz-Signature=f3f562d45e508b157889b7747c23f652d2ea6b41d1e3a62ffb82536210ad6a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

