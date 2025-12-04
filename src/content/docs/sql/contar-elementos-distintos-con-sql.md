---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EE5FBDQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDBoPD5EbVDFTLFD0bDhCpvQXRRtNhpL0kSf0U5qQenbAIhAJ5XVtfEflbQ00Dtdr%2B9MBwnN3qjSAfhy1hX0l5cYPZiKv8DCEUQABoMNjM3NDIzMTgzODA1IgwDeAaZT3S1hzOUUT0q3APo0WTG3y14BOQ74YwPBL800nwIfXsXXLtOs7QWOjoVHyC5tcJvF6XAJ7ayAG9LJDzWd1u11IHyyMwLYsfiI4jpW9nRVgSfombgLJvKI51rad7dvua9y9cjvnLxgOx%2BltAtOaisqYnUhL%2FZzlw1z0YnamQbiVxVfBq%2BcU2hoWPoWAdKMA4N%2FAF6DW3QrGGima%2FVy8ajMJfIq4kZ25fJb%2Fp1NzxLmxGqBJIB%2FDGisefI74yqQmwnOCHIPFkwWQ%2F9Omf26qOsFlW6tPu21oRBZOnDVw9o8VFwg%2FYZoGt%2BBo52Rtui79VmMvaLfPQzCTjyOQYlf9TFq5b5M%2FvggWWHj1EVjfSfOmAx8PHkGSdfzeVfJiweS3IIpujp34nf4l7BEh5UWrnP%2BM7CMAGS7RgAeDyhCdRXIYFZohZvRwMilvCn2lit2y%2BHh4sYe6Xeoi7eaVbl5rJSIHRFRuwWs1VjGWPL35fJW59oSCmban39RnsjnW0PiyCgrLLl4QvYYmx%2FADXGUTOQ%2FstwaoRWJC6BSvQ5J4RtSXEiRTNIREHI7dXVgw5zPj92HX5%2BYPmH%2Frw%2FVRBxLDyXuZ9G5GWLnq4TtQ6JUknKpasiiMr2iHH%2BtTSgjS8PxgiIu8uo6qmhVzD%2F5sXJBjqkASFO14UNZP9nGKw%2FSDDWvm9rVfa2HHMQYoPnk3OjDgX9DB6fkimc0Gkj69Aw4gMCUdWGAVyjZGDF7GDZUUjnrTvgOLC1wUyGEQXtA9ejWngh3GDGlLJ4KIntUHe1UfcbubSuM7AFL8lB2CbLNih5ZQXZsnH4BBRVJmSUM5WGX6HIoJS3Ec7q2f8QQcZPqKOg0Ood3dxypWwyUJ2g9Wd9dzJqxOIS&X-Amz-Signature=4c1a31040a20fff7ef1d649a69a2b8090465fb011f789499bcb80d8b02348700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

