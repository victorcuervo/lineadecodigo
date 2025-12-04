---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLJKJ23Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCulFuKs75%2FhEdqPQQpNYjmIdQRSLlr5AIzSQoWjzXhPQIhAPfOH9%2F6kSLqahzyJhzh0LCHMQX5bmnzyf88xkyAyLYHKv8DCDoQABoMNjM3NDIzMTgzODA1Igyw5IhsUJ1k3WhLvcEq3ANErGCgpH8A5KADFgSsyN7cCsSVLHR%2BIkuY9%2FEZCPMV0jzBx3aLUrbx2wXUovdDoXoNH7MtSjDV9xWLqFo2T0Z7qMsjElYY2kLzmBaaHGitJHk9PRvf%2BT3q6N4hy0723kXKTbBJktUzrZMaZ6FoYpNblmSu5WHFOoEhA%2F%2FuYuXF%2FfMtGmgAcl6AS6z%2BdiBe8X76Ww76ORUoIpqoq4dGfDeGvg%2BvGyc1qaPpyPHf5%2BdI0d7Fl%2FA3eMqyZXtq9b5Y36sHGAbqhxv376IkJuBJK1N63s26dJ%2FTIgVGOlDXfqfeBray50kOUUAI3XhiqO80ljolFXTELEnqMBbME3NcqOTJv4GOtMKM5tLp4r7j2ZV6JlAqQ7GDFgYJEZIoOG8vZSY7T4Ftf39g%2FFMquILcx1oIDa%2BrFrgvHvaA0Jn%2BblBHcYP%2B0WDLM4ioGMFAHKKGo55DZGw6UDx8j2gnLR9No6DLsKOHvAnReg%2FImyDlXudGI5TiftwsHYyE5kLR1OZaBHdb5gdxQwbWcctzxewLEn%2FMjJWqY6HVGZ1hFC4fXy9urf0d%2BWt7G4bKAaZL3qn%2FL5GeuShDnlOV2OVuGGnPZ5Ajs038qDVCEQDUIXLXH6ihZYxdj2TL9VSMdThG4TDltMPJBjqkAUNKdr06R0DAjJUifIcI7%2F9QEVNI1ygeyHZrexUnfOgTdt%2FKY1VOTp461puiN6AUgNUJHX8jMzp1doI3ErI4u55mMMviwcTI%2Bc7gXB5et49SCDFN1U%2F054Fl1UJPggmR33wt86JGQqm6rDc3byp4XlY4W%2BNS6VEJQ800E7FcMkLIDh8Vttq9Pp4MU3%2FugTbF8aJxDD0HRUGfdOHiIwYxnHV6Dibg&X-Amz-Signature=c8dc0adf19f3ceb05fa4c7af8625fed89fb6acf7701655d76d0263d16bde4f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

