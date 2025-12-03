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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNXHVNXE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAPapFbMu8ahpVPgYPbJUBk4MChPV7k7%2FyLxDkD%2Fqe5gIhAPO3y7aJV90Wl2s44Ptn5dolciD3qlKQ7jM%2Fj6jnja7OKv8DCCgQABoMNjM3NDIzMTgzODA1Igy8TqhJYZNslZBznGIq3APuj9x2qYVopYx%2FNDiEmEXdWFLzBuLHmad1M%2BILdhbJ5JDKBGlMEpYeb4uzGjAvMJZoKBsjHO7NOZ7N3jrm8yFHapMxmR9r%2BS24nfY5sCib95Y0jzLr6XyX0n%2BW3aKfF%2BaWCPgCrx4l5Un03qRwe%2FUBuAr3GlGQK7svW2fVpffGMKO5YSqb78qZ2lUOR86WKw8UnlURk2RIMhFI0lyAfXL9bHujuFTh3KxhcScDNxtvaNmAOBRSKA4IvZUwFVZOYZZLV89uy7IxCNApyOJNnWN4nb2mbKcpCsWFHr%2FmZh7YnqS0ViSXWxEoFfhfOUMuf%2ByV3HthCqt3%2FrWpRYF1G6fS4lvV4hN4F5mnfa7%2Fu6fgQApapojJQqM0%2FEeJG3QdAL6EE8qJJTTWUzEuOre0snwriFmBAzUQDOW%2FpGhAW667em%2F0jKbv6wP4FYzSFyDxocHuEJMazu0xadFJiMlTWL5Z2RSt%2Ft2BtnKxMY83U9%2FVMUb3tx0xXXNnpD7m5OGl1h6Q7sw0sGrhxnd6Sl2fnPs%2BsZxYasiG6L27xj5XpLhSklGPlKTCNrdGyqNjQNmP7E7NxA%2FNY1SuCul5419gJ7%2BZ5D40L1KSUQYg4hveEE8ne2onKkbY499F%2BS2oMTDTuL%2FJBjqkAaoG4UcBSqOWQLRn5KaVwuotOIoQcesvgBRiXTGXIvZqIKpps8osmexZGHYWzfqIy%2FQwQK9y7KhLXnY6tQSVRKmsosbxGa9jPyCbLn1gIfbBhxQuxVOOaDLj0PFyxlFd48Poq%2FIbUB%2FfcqdTA77RE9H9HBLgBSG5jWimrAFJQLJ%2BuH%2FUYvGDb%2FofZuffM0P3gCtliRIx7ATp3pM6h%2B7g0O5TJobP&X-Amz-Signature=165a8e5ca90d06291eedb7fde04865c28cce1cc2f7b7d264326036119ca480d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

