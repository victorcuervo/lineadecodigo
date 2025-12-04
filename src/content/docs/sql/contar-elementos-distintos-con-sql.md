---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXWNOKMT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCID%2BMQGgF9QTL90WaW14R1ct%2BS2eH%2BeTUOdWOyPYcDKggAiAoA8AUKZnUCwPsKE4uGHHdDrC2hUDu4YvLGwG9FzbLNir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMURimbwhg%2BaRH6pxxKtwD9No%2BFjuWe5ZFcdUrWMGxgqMIdBHQV5RIhtwi3QMo488kKd6PvgnQ95X252O3JpKLupTXd0u4MnzqkVsRs3eyh%2B6ZI8vKbhZdrb84vdQrHWAan%2B13zxI%2B5ZlI2Bkk8AijVvhZTjKqxw%2BnJgHgVr4xoDPvXC2BJzqF72%2BtHqaSQFGyyynnWtqxFsuSiZH1vkp7%2F1FiO199FbE15dWZkyJmu2VvwTUrXF41QsUSevg9EwhS1lGv6b1ZxkwTjqKozWw%2Ft5DauYYbWz9F3JW94FrUgjKLWc2qk1MmU7yAtiNID%2F2YTdYSL8P3lO8M0ifB6Brc%2BnuOSQNOPb6al3exlar4Z%2BCgLFKj%2FX9r3bqGQGZ8gLULX5b1PErYp7BmP4p4E5vFdBT3DpT3H5cpZrNNuLdCW1cJ22JJ%2FJuL6Cm%2F88RRY%2FWb8Fuf5F%2Fs977WZn9hCD5KEw%2BHAVr5KDonA6GOMiLHQNGCEMeaxFMrRa7aCvR4bGXpY0LdNa%2FyQjqotx6k3OktNiHxwYXOX%2FsktgBf27bqK0ve9vHykpS7LhLsrFTeRtTiJlCliqaK%2FIw%2BzdXNLBLOQ6QlxdAcD%2FR3iYh8qRm%2FlNx9qp6CDEOlKrm62yt%2FouXDwEhPpzu2BaBuBeMw2efFyQY6pgFxLrvx%2BPxBx%2FPuID8LHtwj2EqaefvCfDTeIhvn4Aeo9EMI7FiSd%2BrQAX%2B0hfIXn1Yw2pVabGLpP1ZWtAbqVn9ikuif2dtBo8Ytxj9S%2BTETucbhXU4kWWDNCwzRNSgDKv04EAKUpeKY7da8m55vC%2FYGyOEfXwo6WXfpxBidkNCgM9NJ42Gitvg9BN66pUDYEW13fpjuYMFXgQmRvm3gPmMUfl5FnCaU&X-Amz-Signature=e650b00822a95df12e551d217cdf4e06b44dd76459ce2410a355340995b0f0b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

