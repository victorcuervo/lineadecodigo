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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZXEO6M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDeIBk1lOyG56i2%2FPfEpn8YboX9Er1Kaz88uRqYhLZ0xgIhAOKGWQYkhJOhtMVsDP7z06wJLXnyXUFyvDjQ7o6nfOABKv8DCCcQABoMNjM3NDIzMTgzODA1Igx1N54kX61w9blb%2FUwq3APhv%2BebnIQxQTJcV6CSamzEwewq6Eif1Wvy599w4jhCWSE9%2FWw2ppiCvhTmMlTCUmJP%2FYmcs%2FFINbxEe65wRLtYo35leFD6qbz14mgqwAKcLmaJHsQDdQVbbjn0BQYPmnZZi5vY6ltn5Ti3vL8%2FLkBHwsdghyZk0RQg88Zo52zcAFLphrA%2BM%2Bg%2FqhAKDvd0myNQGvkGymkFXikpQ1QjntdC7xUhV0lY4Aq5YHfotlBx67OUN%2FlQvLVhPQWPQqP2EYW0npt38okfD8mzG2q5tvXgSIUtMQvMM%2BJCyNVoXwFJNonE6wKC8u4MsbJAKPAHXk3JuKQjI6xggqMhaXKX6M31BTd4bTprQWPVXVB8YTFmPy23qScdk2W%2Bva33wnKs5RnsIy%2B1H0XCafaUUFaAfc%2FvXCsImhQlX8dtcRFoUNNHOXjhV8doV0GYIKcdGMrjDXpb%2Brc6SasUAvWqWU%2F9dSbMPQXPoy30jP1qiYwAJINblpLQm4yCb3DDqgxyIY%2B32TZLn5zoQLixHVnE22cmI5%2BQW84txX%2Fxw%2FSdKYzIKQuS9Dt7FUmZ4ReJcSIijPujDz7XtAkboSmSb2MpqFnDo52rXkjuFXEvbnZHR2UVzW0drxnFLTI%2BRZt06uSHvzD0mb%2FJBjqkAdYz0sK37pCZj7s5ULKZwOEtoGmvEWp0MAF%2FJ9eSjlL551t66RFdSiQNAcvtLMhZJxh8isLvGJ35%2BwpX7xMmdNIezdmmwplLGRAOGp9jnRoD6ywe8qe8TEi7LojujY1tAQY8Ww2Sma%2BaMy3JDc3xUlLcPZecr0uUvsGAc9YhPHLCC3toA1fM2pV%2FnzsQVi4WE4mQhYbAvOcflEMQmalX2QlIAdnC&X-Amz-Signature=5ebd0a2e251839511ade1085d36fa9b9f01c5087c1181a1f6e8aa9ff47a469af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

