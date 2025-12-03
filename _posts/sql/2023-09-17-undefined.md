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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTS6RNU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCiDcxsr7JaIn76SzXeEuv9ddhlAg98V2RdRCPoGdNBTgIgIPUoX8RcnqpVEO9ojRbwUw1xUfOpeb9LYLB2KCpksHQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJCyC4GsRX1MNM2L5SrcA7eqA3y6i11ofLt6bnX1M%2Fz6MnWRv7P%2BDskTqHdfHkAleK%2FS0uzL4cIe%2Faw8PJ%2FxEofGCbH2zsaPfaRjqej%2FvuDYEyEbr3wE%2B0igBpNzpz0Fz3uTg1Z49wm8ir2pXQ3M3eO8uBdYAI3SCvrlMYQh67Z3mxe76K7GVALobojYRQzZ%2BW8Cke1AzoA4m%2FZnGMIV7J6ZKI0fHOxfidfzDtVsFZuOnlMKDu7WmJuBTsz5ZVBTUxLPyNNnvaSQzSAfbVnJK4noPRIX1QQEpDLX5MGkViZTUVxGmSP1gw7OhHFBYQzNT2l4AnfBJEdxJ%2F79UwvNI9EmCdilwBDEJi9oIyFzfiIHfGA3HKLgg6Xis2cUwyh5EnUf2HIUJSeoy%2FSHEVLeBY45YTnJz9Hq6GXtf12wWiYCZRgqytJWD7Sh1ewicdjrSDilTGkBXaYZudSoxhYh44L0Gtus7%2BvWJZuldoH1jH682yEfipShJbWKWKtWHTxK4kslZrz89KAPJvp7AlISce%2Bmz49WE6gYOjQeZ8Rvn%2Fr%2BHW8sS13Q577nclKzDMwSutZpf33dsv%2B0F6figdhYHbuYRdJQespKAmosj8b3KfaQ85H6HyF4cieMP3jnk1gAtih1%2Bd33Fh674cmRMNKUvskGOqUB7v6sb%2F5Q%2FePcsqfYttaO5OXaP%2BGoykZ%2BXQn8Qy%2BFPCBKGXMlc6ueHfW9BGZ3KU9Iiu1DAoxopJ6i1T1oILAwpWYBPjDchTqgl1oKyjXHky5fveNAMX2nirUuU92gRT8%2By0YcjUxyVoef0nyJT1x3KrYmmAAMnSr%2BN6jHDgN8yZqpKg5GmYlR44YQZQGzvAZo1kZ%2B8UCx9q1lHIEeb8Ao3H9sCZf%2F&X-Amz-Signature=4c8b3a29a3b30a841862bb3de01bfdd16fce08aa65ef5bf4835fed42bbd36dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

