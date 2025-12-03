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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKPSPLVW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCSwTeEOEWk90diKQmrWbZSHGQ51UGrf7s5pmez8sp3jQIhAMZixsyOiOEsdE%2F2h2GNPj20h9O6LMC2zNzuR%2B7%2BoQ7ZKv8DCCIQABoMNjM3NDIzMTgzODA1Igx4AXsJpSFEbZy%2BVjUq3ANs3UKbmNlwBUMsn2PxOotJCOxST8fnkpA399eHR2K54yTY6YX02leVRpyK%2F1EJH1dG5KoCHhFwqIteXfrLPFP9qniAUQZC%2FP8%2FJ%2FVwRDIzE8zjcBYZptGsc%2FjPORHEbRRlYl1bSsSdQ37rvj1sBosUUbcTt8AKDCP18oHa4fDJO1Ww4At%2Bo09762HjeRcrFmzrwVU5Ra8aATpjlGWeryKKEoYxpl0FSJqdIN%2BkqWKtkqdVuJTwstnDrrS5Oourmf1CeBBIg%2BM6WycM6Hg1meDyYPFY1y3bXJlL0vWbgwHgTuj76jkUNK4va3ZobC2fGocnOJCZ2Jb%2BHGKND8PMgwDhHEiEeryj2zK7CvXkWJTTKHnuPxPmTiuJP4aG8bt%2BC6C6OY0sWrOMsdSl2DMFw16gb3hepsjzkjT0jehvPPL4Hjmqna2IYARsU7uCDPhHA4OOo094%2F2d8g0mXjiWC2sp9eCXq8ku2sUMuLeXi0Jlnt2xAgqXgd9aZS1adYUqDM64K8ReWPIodATY8pHilOSefK9HJ%2FjZzd32KkvfH4vc72IlaErypnKDAgJmyuDMWvgBpLQZLcAFmFZ3qufA7sXegVSTYNDDrR5%2B0XziNTQF6%2BqZ6l0TqBRQV%2FTtk%2BDCglr7JBjqkAdNLMLDksig2%2BuQlK191TsYB2twnkOtM5i8g5SgQJrlDH6dEOKcOIIwwicT6EXPcxT0494ufedpkoULuNJwgeBqrkQDt%2B2HgwGB5HYRWr72humAVF3UrTOxfwCkluzCxFQAdz73krM7lyAJX%2Fm%2B39yZacM9gJ83BXN2WtjmrSBaup%2FZbJ84MKAb4%2FHtMYpYjRfl1FuJ%2F0O%2FZQuzqX133WEr3yY%2Bp&X-Amz-Signature=06f179def69ac3c81150dab85cec2ef92bdd876e97d5747fa05b51f04bcbacce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

