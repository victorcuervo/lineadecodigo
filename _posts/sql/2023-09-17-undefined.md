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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOP7CI4N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T141623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD8Gv9JQU3bNuZzcsjlwlIACmDSQQ93%2B6vcFYohz6F8RwIhAKM6OggrTJ6pdUd9HDLew8Ti3vb7U2HF6HwbKrUucloEKv8DCC8QABoMNjM3NDIzMTgzODA1IgytgHf2CM%2FA3TUivo4q3AMLXIYJXUf3DKuBPVhA4RY%2F9ePOvSpTgt5ZJCXsw%2Fac2KydoT%2BEuojddULE1dcMNZdDsIfMY09xWHUOFXqu8zCa71X0UIGEOnpy5J6tR30AQ177e6A5ikmoytwnhBWZjYXwi6e1RS7YqkySdC6veL9Qvf%2BAtgM9rLmNnKeWyTwR6615WtaslosxBVE9nV%2FfGpjPibI5cqcEo74wz8SUDvap875MP5xPvaGsIeOFOk3qUkpIz2rZ5%2BGlsBqpsgk%2BH5Y94b86uqVRokG7zaiC%2B3%2FKgHWIONI%2FvIQaKX5qv9QLC3ehW9mz%2F92szlbXc9MIfeuZju0NSe0r%2FdXpk6wKAu8ykFKanOSJ3e3NYXOjvNvpC9yu1CPGcKCUFhw5JIR%2BYzeBmQkJRzpQnN7hXtDBTrhpWJF52E9WQ0NqMGeL5jDSOFS6%2FX7%2BY%2BblQMqGNOOmI7mchW1Qpq9zbHC%2Fp9RWWEvJYrs%2BDPTtYjcW3t9qScCPhOghRFGpUyVW98Yrwrnw7b2xpHej90nVABhTUVhwF2%2BHZd9MFhs0TqFiapFF0PJv2olCBzyk9hxpN7YFM8xsvYplZlqcT2odTVRmUSGXGr5MLbg4Gm7rsKqCbaMZZYq8cyf7Nx%2Bpr1w6dN0srjC5h8HJBjqkASn7CQWv5G5Y8b0rpWHzPdVPrvIwMWgr9kAo%2Fza7Dwr2JTFKNAQGksE9EccdO80Bp548umZpmzN85aM1UdVj26gD7v7qSBjW7mmPxlzPo2c3I7g5RuzgvmtAO3VNktkB22eF2F2O%2F67yNor%2BAhnEILOFf4GDwXXbHHcb%2FIDASSd7%2FSpc7WOE1ULl3Z8BQFOsSi3U9ML5rWgtSx8oZNBANHTORLLZ&X-Amz-Signature=dd1202f54c26b54d16519f23a5761218e4e2171035fbaa10a488f2df84c1bb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

