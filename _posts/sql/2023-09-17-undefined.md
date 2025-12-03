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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFWTRWSY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBHasKhb4d2i8fueqFqr25x6wEXhoZR1YZ6B%2BrLF9rbvAiAYaozzNjnTkmBCR88poR2kaRJS2h7BHR1ZDuN5ikPdiSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMsdbl4UCrlZL4LEliKtwDXRoJrvk33xPLWipAaCI7qELSNDpiAJ38vFMSzZ%2FrqQqxyaVBa8%2BdPgUi6hyBt5yx6%2FP1El%2B4ZB%2FGryVF7GGfbrPOacxAh8%2B3ePqi0rtNcEAkpxgNKz4V8tG8zqseVSpIh02xcRLBYaf%2BKchxLi%2FPnv52HXh7b3422mCa4OdzILddiiBvdgCZsalTfpvEnj%2FZDXiqk9xxoI%2BCcy92g7M21DKJo2odn%2FYhYYU9wYIKhE0ir0wmdkoR0kGzGSOu4m54v3%2BnR9FsYjJohq8nwA49IVF97Vz4drEy78FVnemF3NAB3Pi9nEdTUZTqaDLHfSQ6pAKV7AB%2FtIjJc4PTr47Dt%2FUXds8vANdo25NAP9OeZcKl8DXSwtaJqFujFM0aUQlbAjIXrI7VrRILKAyNn1fvEaFrPavNicaNjPbrKnGjFv5SfyN6P3vpqfcYm5xZJ9whlFJZTI%2FEvPLDNG%2F9bm82Qnn%2BjHK%2B8fFkUml55yOV6qgWumldnIZHDQSHDEUN8w%2BoWMfAHUdm6T%2FipwS5KNlNDTKBaxNQm5yI1SlED2YAApiJuGhUNbSaEC1a9hE1dtSLC%2FDQx5oKi1lpGSpgwLVFeM0ANQjykNwpJ3GUZwCiyr8xIbL%2FB72FFuWkV%2Bww3Zu%2FyQY6pgHMzxxgDU7%2FJ12KzsS435QsAbrv1kw8mCSX13FUzX3pf6XhbL1bxiaJOjdgZLF%2BdCs0lf7IVdR5bGADkdsNwJ67I1FtxhA3NqnTtXV%2Fznyc2vhjNIqve4hSRKlw15LYDNQoN7T5q5Re5fkSomUFsq5BW76FVJbPiEPEKJkALw01D0LU18fk8lQcT1jXUrTxC4y2TCE7AoL1PR0zDE%2Bl0F9zhpWRQfBN&X-Amz-Signature=4c0d0da72d110f3b8ddc42a00f4e8b7c43133e73c948a0c27b944930bacc320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

