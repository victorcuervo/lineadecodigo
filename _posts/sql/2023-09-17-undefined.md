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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBBIHJTX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQDHtVKmdkAIEjGZVkbeeMxa0Y4myxGd5j96Uj%2FFOCHT6wIhAMrYB2hYUB%2F4A0ly4UeNQ4cXRbiM%2Fx%2BAtfjfvmAb1ocCKv8DCC0QABoMNjM3NDIzMTgzODA1IgyRirxKRGa8Z0T5EqMq3AOGSbnNZuEuBjQy9r95Iyo0tNJj3d5GgD2E75ccP4qVIdLS5PX%2FCm%2FPNu%2BHy5fiO%2FIELGxlcVr7NLQiCNKH0Nr%2BuxkbNgJJtwvaVeudC8F%2FALBBFKhKfjah5vpH3X8gXIZDMmZGd4zwXjOBoZ55%2B0isf96PLrjZAzoZ1tV5kWPF8PyfwGu7s1AhFWiJQ2dNd7a77lzEwamTrVVaHUdg8TCOlGIhCBuKwk0sy0ts0u9tziKUIJSrywwo40LPvQxCTECMogegYaUGURPUIDu8NdFhdlHETk1r0qC7tjwKSvxJui8kLx8Z8Sm1O0j30OI5vbTwcu%2BT0zrxY4RMAY1FLxqvpzpig0RO9Aw4Rre5kVj%2FxSVyIu9sQntFqq83MLNoo2cxIXMw6fW6LwWlk5i33vXfHCwHTTHyXCjuFYMa0glqlcFXRpDSHWVwREHQoHVLGuJwjh6V8NIxmf0NvRjfdbEQXeu1zdbVS4u4%2FkIxUfD6l9qm%2FS0Vrw6neI64B2rEzv1Yen1gePEDkCsyRuIHqwPLzHVjWPQOFMPTzJpqLXaI7jLU8XPl%2B7NxNSb7uWKyYKmSKuKrG7FRIvWKat4%2BTzTUb0B2jJRtitWZyTL13s15pc3JJMV2ny0q0Q%2Bv5DCuzcDJBjqkAff976paTXu0RCFYjhS4KYhma%2BR6%2Bw7LreiGpkjKD3VcfOI5Te4ZwKF7X%2Fjj0EoKsICs2FBSiBYnbgMFbfQcsdykyVBK51xHPLWbDHMAaXQ2Vi6Ng%2BeArOYqlzU1110o%2FlYTYtYVy6JQqQtmggCWqYwRcQ59cV%2BZZSUhqRm8gUxpEeaZtNqr92hFBga5nVvZ%2Fg%2B0X4uDJIHriWsHFX1YkPRfkJ9p&X-Amz-Signature=4d04097fb911f0dafbd5892963e1e3827098fd2b4906edcdd3c3559c22b27b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

