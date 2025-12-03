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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGWZOBMI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCSQsKdYyHfNUm5w36afF2EDrx8Zm4rfoVP4DZqdQnx1wIhAKDe%2F3sLYvKcFxvgTgzgfFe1lIck1zShOkgK3MyFB4SbKv8DCCgQABoMNjM3NDIzMTgzODA1IgwSyROSOkQQwQdbCmwq3AMFkb5Rg0EEIaH8JwDYy0XCukduvDAFz6GocPE%2B1JLhY%2BzWXnJK4N3b%2Fx%2B5r%2BvT99QrHqWHHNNdBwmexFmif%2FjrRNkyFJbUQfI9LHPMnoFDlhrxhNOFdc7MU7CFT2Pm2ZGBHBkZuAGhY27%2FgmFJFjlrpWwCELHUqX85XqeVIMDkdf8wKxXmaRjcL04VlSQIstnRLFRHJ%2F9bBEPlUAZDFEhCl%2BEWBEAySq8xwUiaZaZtU5S6h6SgQhnEs64OjYVsCb7UfV3dlOWopfRViee8Zm%2Fi1SN6welLzLYAEdI4O2db0G2I%2BwMRD20h1GOP8Cq2vSWFqPtcq3pMjrdr5NxxVdtgjFfgTw8KpmOx6a%2FBgBREPbMX1qHj9lmceCUCyE9nw3AIKIJTOxiwTE8EfP4b15xRWtjxqWAd89V%2B11QCpdgU79cS6%2Fh6GN1oD9ixXPQviqoouvQ4wfyX9QPyJbM2IdpVEA4dCp1bHNmtV%2BTc4JeT0wDvtOMI0ql4n0hIMELvBpozed%2B8YmsL4ZOb5CiN%2B2QGBEAPyRbPTFvhBz3BX%2FOpco%2BvRSB0Yp1iaF3zaW90UjtjazBaA7M3hjEbSzcKkAzqy6Qp5TOzpQk%2FCh5lsWrDXFlWtQkxewKeZVeibTDEub%2FJBjqkAatECw0EwqYL4d7WxCoL6blWO1XU8TuSjfZb1mLgETWqw2rMD4xXFEhF2iWu%2FH%2FTuT3pEDRNCfvzWbf%2BOVi2ggltPsKkjByPeidPxOvcwQ9HeobZlFolrWxQs172twG1VlL96ZIAa3IbfySmU11BWKe7HVtoMbGuHD95ZrrUxbR%2BbxzDarOXJTER46%2BfX5IfgEHGsFTzlxiBWRMbFFNpx1VQrg0r&X-Amz-Signature=5046d34542582ca4b2de5d92b76dd82a0414953100991756e248a0066881b4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

