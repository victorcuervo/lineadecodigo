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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQFCEWP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIG7IoGQ%2BHVGnkk9lYlx9qVBjmnUdDy8f6815u88d0BS5AiBodm0top9DwCl1bAD62sEsbiyS3XnqiXSJRhfawFrjVyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNHp8BByEcycwF1o%2BKtwDlFM92QFBf3vAmS%2FA%2BC7sWXv9DJtB7Vv%2FKo7l5xDpRihuBRmeWj7831uAtxuwJZVLxIH9Ylldot8i8dvooIEN8ct3k5ekT%2BA6jVKVVpzncH%2F0xR1VR30gIWWIWyA4Lce4NiZz5pyCw1HUV%2B%2BTBFArG5s7s0rvLw8L%2FIpBv8v8R1Daz0e3EfWuZFGhmXjaLdt8pcjEvb9%2Fgzdof8OSuB8E1mhM3oR2mzC8o7YnN7msXb8mDnrzaf59U4dAOxhDtumAplphV2gcNJK15jvwn7hlyuT6BFXEgeV41AYDw2UVaABm3G%2F4Sw6RLo5hHdykTk89K4WDYdFvP08tOtFnxDRbZ6h50VukTsVewKLFnEiQMbbfrvysNE%2BTzAX5tfpJsDAVnZkXyGx6KP1Lz%2Fgx4ZgBbh5rOrjIYWL5AEfoUhZ8Y1LiArV%2BzOtB8QdW1FYB%2FVBKOJH5I11MNQfUZjXv3AyhbFSG%2BaaRorf5fTkFiIkjpbMfT7jVTtzOzUBq6ANga7%2BzAhfXs69dtD%2FyNITNhReh3WBKAIHTgx9NkJRz%2BZQKG9E6jzf8m7Mgb8bF3I%2FF1eZpiR3kS84C2JELHts5rnpB%2Bx8utzMIX%2BEWsRPjp6XaUWvBGMpc9VFBl%2FydPPEw6trByQY6pgHgUtdBYijDsQDbc3De0b6iPcdy%2BXfUiDAZ3Eb4s%2BK5WYBG7jiSkGWwuWULEzpCx4vwDDtAgqJb3wkOvk6OuFCCBvNeZUypBcj6qCR%2Bx73ALOQlQNVALOeNoJrQYsmEv2GEuH3Doqu%2Fg4vCAUqNFulREmVpqWYe3p11%2Flj%2F9mMbfNexiDmK%2BBYnU63N%2FRMEo1JGOAZ%2BvtedvIi3niscqxKY0NAbBKc0&X-Amz-Signature=b2ad910a4fc87703fb2f471ac4bafdb1bfd6be27d468ca2a4a2e16454a6999d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

