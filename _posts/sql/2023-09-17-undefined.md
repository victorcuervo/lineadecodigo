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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTHQ27F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDFvKbiPqwRgBclG5tsjvx3XH0sgipzgQWLRcFYAbCQFAIhAN43tgwM%2Figb4Bh9eYL8Rhel2nLc5sGaPX4d67BgzZEHKv8DCCcQABoMNjM3NDIzMTgzODA1IgzxuijIR7rIdylws50q3AO5wbsVrt5PifZof7NK6xuYlUZOXvAmwNh6ilGEuk0q1Wfmc%2FjSuQaP2MpMFmSpSw1IHv5TRGveLa%2F%2Blt2F3jhUhNvoin5ksSy3615fW4ZRYSQCuz8n0ThM8cq7omw0TVvjIEEiTzLkBNmPoM97Znf%2FX5NTav5N9dGUbMTZ0hgqTjj9ecViWf%2B2guVe1bT4%2FH0Ewwmf5a5ErdN1qCjRa3oxJSBCn2Yu4R%2FoAmmDmCp%2FbNmt150VXPuPsCvKU477KHBdY1ohOOi8JNmLb973GW5VeNb2bwOgemv%2F5MUSQv9cansJrj1%2BLcYh3uEIKRaZ0IEbVX0w4C%2BCXH80fbEXu7%2FwHuewNki7r9ktJB%2F%2B1HiBu%2BncEwJTWmypA50sXuKaA8SnYUxWcMvf221W%2BHWdNe8XCoMq22KYazG4mJ4fj73eZlacGKrfVAkeHZ4KOLWL2NnE58nbtETJD90Vp5h1jAsW0dfNADasyGyvJXCApEvU84xIn%2FW18UJLWm9GWg%2FQ3CUblDCrVPg6BXXlZRo87vaIq4%2Fx2LB90W7FM9mjq0BZEmROtxn%2Bo9yV8RlFKBaTjuDHZ16u398lkMUZ8hna%2BQWzbyAYxJpWDtKr66m3QXdQYgAJTU9ZVWHkXSDYbDCgmr%2FJBjqkAXHI2u9XK6D5OauuzF6l%2BecF1wU8AAHumlgJchkO8J%2FT709C%2Bs4%2F1B1NlwzzElaRQhaeC04MW32HVhWmzMXQgNpBHlA4k1mcKpY%2Bk5mMvOsIb4oyTCb1PtCaygODl%2FnfGRJMNxbVrWUBIyfoDSe%2FDjHXAuarAhZEu6Bv4HWEn%2FfXFtBrfSp1vt8Tq8tWbqU8Ft%2BNvk56HbwvUJNVKv0SMKFaIJBu&X-Amz-Signature=08dba75bfce152820cc36e1dc3b06e40b1384099f955981e41b7a92df7a708e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

