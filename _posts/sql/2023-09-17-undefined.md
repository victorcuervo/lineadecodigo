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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHRFP5D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAjoEBJXApBWZjP4HC1ssxAqfrjcvLKlbmtSjbfdxKr6AiBtz5CMkhfbQmYD8w9E4x7m9EhR4Y6PScRCMh%2BYvg9POSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM9xM1aF4rh8m5kun5KtwDVJiiG1D3Ngj%2F1JlRwQA%2FwammxuI4xhBVrTzRRv8sLSf2nOPdbVptQqJWwZXfgXlpBs96WBHHjzW9IvflTbIFU5k5fWOjZ0TzeHM4lHpbYwRcl%2FFd5YScIOx%2BY0TniXt%2BCrDDu9N2v5CdhbEeJIR7RjiN0ZA4etULd9jsigh2vQelLi1OnYr9lNX1%2FQClcbxNLY6ECReua9XjX9H%2Fhg7YQ5yk3M3UwL%2BPytwsnZJcybpbSNWRThbuk%2FsTpHQ2s2tLr3JNmu0uxgSbhkIB0t0fHE6KweFegNF%2BYo5PRrya4y0kHxcUxsRU9qG8JweKNSnUQ1R1Q%2BXwL6NPlyWR%2Bj7ojN0D0httvLuC1SKDv7TRjsCJFmfnPplDZmYRSfMKG9NqeNSz%2FFu98bxhQLdkW1%2FkO6SDw%2BnDdVNlisiCw445LS6ML1Js69YxZ76UE%2FzRd1JuT95YJaILhfwkbQpCmT6zrb6oqGqWx7K2Ig9TyqDHfPA6KNz0ACQi8GfgVY03iYPR3yyys3bK8LtIEtZax%2FFFADiSpMgTJIphqaJh8YPrI%2B4DRieSJeOAQPC4IIi%2FR66jjNu8fDhHWgAGXYPJuoYD%2B3IqDNnSBmp3Ve4O%2FyTu2Q2iPIhXGyVeaVpZFuEwgq7AyQY6pgFof2BCgK4LWDjGEWXltmAqFBm8%2FUOH3wJun2glg2KTKkTEY0LYPSM4%2FrRb%2FYxO1STKy0QVtyiErSIzG8JkviemfDXPabk1qKFa9Z4xL48njnsO2NnkH0uBlui%2Fys%2BiJhZyn8pFnvKPWmNLnyyt9y4f1gPE8aO3dMk0AFyu2rBu8vKYYghXrucgIfufqEgc%2F3Qp0vJibiCpIies6WoFMsUzx%2BebUwHg&X-Amz-Signature=85000e3161f662144bcc789ddd8ec2b3202af3918ab53496f515e8990f323aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

