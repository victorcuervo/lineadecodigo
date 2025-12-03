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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZNCUGB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICntOWI2x7%2F%2BYkO0%2Fx5GxFERw5GUPPmUS2Rq4rARxTb3AiEAwxoZSUAA1hmtzU8qoafMc8WH9wjoXj6JZY9T56xB9U4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBWCsBBWTmBxS8bFzircA5Ng4kc8OleF5ufU3DML4JL1n6ghQgDdbkuflZvp8v7I0HHU81ftatvSNHA%2BsJtVWRdp2lW8FkXpYrMy6DHZMAhX6e59fsN3z5A3FaqLQYsksbM3q7kXCPjHyZG2GVa84Hh2ypjyF2YzmqnfG7EohMYEEC1p2KM2KLFoYKXKwzc%2BqZ%2BD%2FNSe7UM9UlFvM29PitEXh6WW1xu0gegNCT0%2FXL3XjHAjI4WqNxTShEDntAs8ZSbqbFCdpHFDCyogZIYSvY3Ov%2B9wJD6EGHckeQBmJo3HDtUyiNUzvZXHcF5Nu4G2toAUC6Z%2FBohipu8dIK%2FopZg0zDC3o7W6IvcXFH7XiNNxsBmxcKKuS0pKHItapwwbYlYCgxvLIeImngFQkV%2B1Qs5ltEP1zUshi9NHsKFPeGvZkRN3I9TYgiq8qnvvSnPTyE0%2FbJ1a8rFxwc1WeEzHrBD%2BnQuyuHC7w1kljZraeqsbRT7QVsuasMofdCaMDqybevtT%2F4TcyPoWkZXKXnHxwj%2FdXCGmrdMPwjFwmFG4ahCZHDYaRdWIUqhMp5gNm3vjNN%2BOifNwJ41m053VWpAoUI4ijhk5MvIF9WXmtdGDDJYdJqiygTV8gua7pCYpDTM6BVePYfz8BVRhx5NgMNrVv8kGOqUBw89MtBuEoxwPJEm%2F46pHPp4LCIv6NCPXddNI70VHSSW%2BwTWV48dwVFOmZd9L9rQq9TUXaxY%2BcHHgv%2FBnFTiMsKmjvkjf7r1vO6BLt9ugi8uAfgL6bpSfdn45icp%2BS0I4rpEFxC5cF3F5G2UgWey0YLs9tj0dKV3nsydGl7TY%2Bc8G4GlIEtOd3zJ1ik0oRzVOZL%2Bz7kRQfMXKJ3RoZ9VqonmmPR2C&X-Amz-Signature=5fd6edcd5f6ec980447108d6ed08310007763330236151fecc3f3f9ab2e67573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

