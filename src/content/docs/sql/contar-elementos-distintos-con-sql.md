---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQSKB24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDXPWrbtWnVdb%2BeHp3MvhHNsPUItEZU5HIqSqs8XtE4oQIhAMuY22YXogZg6nW3wTggVojgFCosGuFKzOhdAI0oYkvOKv8DCDQQABoMNjM3NDIzMTgzODA1IgxDxTILCp2v7Mvzrhkq3AMqV2yCvHsgcnktCydphp%2FfIGg7l3nq1jBgFh6I3LFBlWV14sVFXYUXYuNMhEHxgf4ZKnNWwursMTkqnDyEgG3PIP7fXKYWrfJtuMIeyo2bDt1NpfG5nhdI%2Fgl3rwEJpyliJRtUilCZnerdB2%2Bzom3gelRT28agINQTc%2FwwpvLPo9Qw2HNkWSpPLkh0mDQFGHWgo1AD8cjRCJDilYev8mIANGRssId00gHvUU5vpSHKSNKzvJ%2FhTu7vWOVSSL3es3PrgL20zpDBp1yTVN0UsVSOarEkBOKCYMbrWZ%2Ba%2B6bD%2Bepxb0LbweelwU8ZyOxLreI7y6xbohlcEaumu3egipmu%2Fndh2f%2BoQYyUYPpXSzqR4ncy3UaJVnQHJPwoYcud5HxXi07GZXY0jooIyBIolHNIB8oD2BcotP4YE2uu%2BRNk%2B0Wd26AZ40YnMPV55P0KhkF0evpdfQuoe7a6fmorHm7JJh%2FInRHvPCHKQrUqknPsrOTYBGoQ4wVHWCL7fAvvBZ2azD4t8i%2BktWg7ae3rqFjfNaWyhAPKnl4BCgk8nmWhUsQ1amEAbnvJ%2BoBcj68n%2FSGg2tiDdVQ%2BoTGHqHBIDmn5HWswQid%2B0RzJGIpmEYeThbrE836FifjZzldEaTCWksLJBjqkAUJX%2F8XkSh0oI9dh%2FJwkFwXmnWOKv%2FfGGEGBEntqwRs2jKqsgvdQLy%2BuFXXvXLr4D5e%2FQODeOgmvFCisWsqChaJTwP0i4J63JS56Ckpqhh%2BDeAatwnU8F%2BzCWqm%2BWTUwHChSZen7icn2AF2qOGA0AgTedoFVt1akUvlJuvyUAv1ajfYYFwIQgR5KkE2n02ln2WkbLUrLlo5wcbkxzqDfiGjsYxTr&X-Amz-Signature=b309c605b715150bd252b832a39baf823819427aad925ffbd352443d78bdd9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

