---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW27A6TJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCoo5pvXnmFTiJCLZMZC77q%2Bu5cBDzjsVNwQ2vfuoO2GQIhAJgyT1g2Z2%2BDKqgzpZ7hzZcqm5emOxon5EdqpRG0BU58Kv8DCDYQABoMNjM3NDIzMTgzODA1IgyA%2BN4N6RNBbuY9qeAq3APLo9mehwbphwi1NvIvH6axtT7UgJVwYBxt91dmEyYxbiMSgGyPGbVXaY4Z6ht%2FqOcW%2Fi1LtzsttMuusBZeM8zywBU%2BzFwyBTwSRbBHhHX4KXyJl112Rp2r5yPMPEvDVeGaK9SW6Mcl%2Bt9dFOBjzP5J1f5rjmfLcvnjs7Qbb0GHPPASbkOM11KtLX1nWqIua%2Fb8ZMreu4bsFRr%2BKT%2BGq69FR9F9jIOc340qAcAHKR10X%2BgXkTfNYnfsQdN7CKt2WC0T3qylTrxjxS2RYdVcHsgrAJhuAb%2BJNIPwrgwPlT45uViUudLP1%2FelW7bItAT6A5CX%2FK9FqAxlAZJ7XYDeJcPojrZkhpsbrVy%2FbfrTbIOwK%2B0iiZF9cYsfY%2FvdHgQM70R576%2FPs6jfoKwpGGUhH9nfx2X6AfHkuy64TYRptWymKl0%2FUdoYXvSNpy2H6i5sJ38Iffu2H7Tg8eRkCDOzLhAH3VoWucD6Xu%2BwkfgMAktWzDVfbWtc3a6PoDeW5F8%2FsMyLeEli7tYRheDvxXmeSuYO%2FJmgTJJya%2BGDb%2FPySFeOiWFiyI9SwEPFsAzPxp1bUWMnZTaA0LeDnFbCUCkjQYuwMZd23OmSb%2BV2%2F%2FSsH0cN6oCSkkhaSaOp6nXDyTDDvcLJBjqkAZx5ANWTnBVzdCzhc%2FRx9vcSqouI%2BiysR6ZtMjqwazSKAsNH5uWp%2FARmw%2F4gqbLI5pcsArlLsy9w%2FrbFrRk8A%2FZwP32%2BGmb8nI16IjrpLYRS%2BcJsMeYOqDeKRexxiz8ZNVjGJ65Bp%2FPQ5JBH%2FQiyFVKA0LxLyaErW1w9zt93VD2uqBh7GqoRrP3qv1U3OxRHe0Zh1cZKxfHjphvzjrqqvdVrb71f&X-Amz-Signature=15eb2cada99e9cc6be060810f057dca5733ca83937d4135754b64d43ad202299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

