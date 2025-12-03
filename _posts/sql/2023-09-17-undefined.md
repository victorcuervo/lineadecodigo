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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAAHS37%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCmvuU19Kv77hR4tdQQRPpPq91phn8cBdsZ%2FYwQNAjdDgIhAOJB5kxf2fsuZrXQemvAH64YoJDBngZ1hmowDlsqwhsIKv8DCCIQABoMNjM3NDIzMTgzODA1Igx%2FZ1%2FFWVGVAGJFUfcq3AMKiWrdNGg6mnWHFfWufhZd2ODeVweXBcha7rcXiJqyHs3d1CzSgOZ83hTXXttnhxnVBAkj3%2BEgT%2FNsERT%2F3mP29di5RonV8eIa79XfOSOjduPjfTeUTDOGUWmQAXGe%2BwGt%2F40KgzW6rABpkAu1Bk6261bYQFddb82OYRiz1KRRyU40t6U1yEU%2FLEgXliMrAPuNg7%2Bm%2BNRJ4WAIx%2FkjBWWrn0caRH5ntgTfRmOSKkRIoPFTCkHvxpy7CP6IhwvQkdvCDwWTPhRKZmLegZe%2BpCX7ItRVAxwMDb2R8fORWp2L04RDVGU1EWndddjXkp%2BaDhBsVzACtaqocgMSPae%2FuxtJPukallDxR2fvYe7PAwCjfW6%2BN1olbB9Q%2B1vGODKSLydyUjWJRWsLJpMccn4THEB0WGwupoeOeUig9n8%2FtWTemouzoO3AzA2vrCPEb1z9vYI0FOCxznNIwfM%2B0tIdJSPk9jRU5fj1mXKFBAAJinX80s1pOkD13XaXuGT9ShAojeg%2FWhsMWZntPxrDZNWcTbyLKQUiXFXlrhFyCVtR4w%2Fa8J2kUAq%2FFQmw9pjyutiPuRgM3Nt25BZi4SSfk9NlUx1fB%2BQ0wp%2Bzdj6lTfwOnJmzTYIdmf1WyvEb0tK4ozCvlr7JBjqkARTMapjjo9mvp%2BCWGoN6CF3w2TaqYXRR%2FkBX4spgQ%2Fn76gsqpShZOrOex00L%2B%2BRcBco2UuM%2FLDM9sTW63u8kr3XSzwZx9y9FFlvyZkXfmJyEZ%2BXJl2s3kEfyIRRUM2WRu4Vk7ojnruH8Z0lHf3lc9kdDGl01L3TaiU13fCBdgzz92EM76641mYiI1wOnXvr1CND%2BnnJML8kAV84yA0VzXFvryA8R&X-Amz-Signature=02fe936cc7d5d0c470748264be0626fb3a7cf94b2540d311365a6100117f5ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

