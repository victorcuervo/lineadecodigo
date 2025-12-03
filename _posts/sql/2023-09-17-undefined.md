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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCET222%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDDW1BByMjt%2Byi7dv2i0bSEKD6PCafBvBhIYSWDjOkYFQIgP%2BjVb1L5BQcWO%2BwWZmptVdP4v6cSiAUP1mteMD2gmnYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDDWiAeHrfiokVqaxircA6T5%2FMCbL52qAaDxW%2FxIXqkaNYSV%2FLnHYBjvLHPHp5HWGrL%2B92j94FmTc2oiCHxtFfuua0h%2Bq8AX0yV6gxbVl%2Bjbqo7GmIRXW0qPPJju%2FrH2Fw71MieI82PYuVP9Bf0GkBXZcWMgKMu6e65M90KOSCBYuYflrv80sSPhsT7p8l4tjNmSH8Iy1QNKwYe1Bgytzyp4SG3%2B4L5A8UqS5nfGowGk2DpdExFZIqcInIdPIN0cKGBdKY9bI0BZgsHwneGrEOJuzp%2FA0cHrB7usnq9fKLUOr8kURaOtZoeBVERnic6r%2FW8L0RLZ3jr%2FMOBjsY71gbyTdm7dhf47eeQRs%2BuY5VJ%2BiQTGOVRoEGP5H1RBBEiyW%2F9FsdupS4J9akdRrU2GtouL3U57N57FHxQprY%2BUk5jU3sju5tpDGwtVahVxY9jHL0k3rdVIm04eHNdD%2BC%2FWv2e6bu7XWkbwu5O%2BEOg8F8ft6tn8GqUe%2F6eyltrwft4IuxpvjxTicXVIKrth%2B1mhTTnfU0F4ofLFBe4mdNenpToJxrw1gZxVtIzDAh51XlEgnWWJ3epH6zGPxw2hSOrkB9Q87jNMVw5S1fzycDJI%2FPZHHtA1SfOFIsdes%2BYwG1QivvyERaPNZc%2F7PwxqMOKav8kGOqUBAANCEfUIOwKbA%2FBJZJLEWIF5k04gcrr4%2BWnTaNCTKZAQmq5TwD7KUCJwF3FPt2l8TgPS874yD3U1THIohbl6Lp4BxcdYXzaGv8T7sEA5b5iAGigvpkCly2gqdY87yk17ObN9Zi13W2uFUXeNQom9OdcupWgCMCVg%2BNudH3XJUxg%2ByOe1%2FoPROFUjIhvSymuz35tEYWLbNRZB4lTR3XrzgKg9g52O&X-Amz-Signature=1160d25a48180974a7af63921c8e401598d7beb2c79e76a4bd36eb0905160ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

