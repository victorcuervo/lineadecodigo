---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL45XEVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAu%2BAtgyFYthvaXNCbwW7EqFc95RIsetRUFbIPMSTyhlAiAu53SUfeXmBZmSFKD0EGko%2B4u5JJ%2FuW4Fqet5uIjoTQyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMrI3h9bYVs1l0PEafKtwDd1luZKTWrPdPrdxyE4wUE0imque%2FWdsUNu%2FusKGKwivsZGmWKEyMQj1EorZ2wzs4fLS%2FLzSjPohxWjp2zcMQg7yCq6nw4Da6PwAEnfwz4GL2O2pz1oQQOE%2BHlPj%2B292ZYylvXfxIOOik8qVUibFxaKQtFe6pp04an5xC7sTVxC%2Fa055sqFJ12v3dg3yQbpvFRNKZJlkhW3P9iP8NL7WPNBVL9VOnYey4lvT0HEj2n%2BD55j9YoJ6XbpFNkVWsttd4YSdGw4evUcd%2F0irssoJFfkS%2Fzj2pOKZwn3y009vmeido3v1u7D0eOrdpadU7%2BLTPnOhOQpZPqmzyuppTq%2FAUB3C1zBFWXSlKJj4u7Ot760I7CA%2Ff1ZUF9O5R1sejw5cSvW1QNYvrBmQvFGTHJ7HVeZj3af74goA5ujMX8868AiI5zX7iF6KMchGKqjE8phxeceP0YBPgf4OvuGDc4OJFNvRVtomYsa35fNtz3rIok6JIlxI9qAZ9lEZqseEhZdsVVmow1HlzfE6Li8pSagDV1GQcX5k%2Bjx4e0MQGDjbZZM3DQr%2FTuCEYVM2SoKr28ELeyfCcxDqOkehwbRb14XjZbTrw3JZn1vQRJlYqH8oIjjmIj9YlogYs0BMZe8gw%2BInGyQY6pgFs3gUANJJgk7X7VKTLRgRy6rnmHZc43jABJPsiGq8zgMXTSgI7uHfkNeS5XdRqyaSSlHz%2BZ7mm5UUZA4bsVd5MYzBeGXpm%2Fmr7U12cWwDEvMwQEIhp7nx8u63wvF1EkZoxTSGn%2B7hHlXV%2BKOedSQApfmqKKFhrcilTlUdoeqaIx1A0J3DLp%2BnLAefdcw5WPbnV%2FeoWHsuy5QYr1OP%2BvFm5lrwNVAQ%2B&X-Amz-Signature=ca32773ac37a0549383a9573949c0044a630ece799cb3ef0e3194fce4045468f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

