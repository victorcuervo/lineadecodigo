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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFQZ7X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDQ2HbMutpf5z9ILkFHnUH3MhVCwQTeBTYSBUD8klfpoQIhALQMI2%2BgGPhLxIDLMG8A%2FNn5kBic1C92tjW0zCKaLQvBKv8DCCoQABoMNjM3NDIzMTgzODA1IgwRKcij38qkST3Aj7Mq3AOZjTnvfXvujTQu8RJRTN2Kp4F0%2FRyAVghu1a5SE6wl0p6hH1aj%2BAiA8O4gdK02Opea8be%2Fwkld%2Bo3qfABAi4MQ%2BSc6ir4y5xWPvf2xQGHP%2F%2Bh8IIGdd3ORsbbutg59EuX30RUZOkRMvoKes617Pkuq7cpjVikA8Ki1X5RAjYJUepDxjAhD%2FEweAp1U2Vtq8if9xaQhjFWlEQwPv0tG5rR1O1b9EwKBbpr1r19xKHt2ySprBuaCvfvPwYNTL8Rd%2FhGNpl06ZmOk7sDMxrUl2ST3%2F2%2Fq%2FfhU0qEg32HbHRO0rGM24bUW1cxsoJd0b2S9c2Ohqbvf6pGInZlBybc9fjI%2FegX%2Bn9gsYPLgjgCVgtayJHPD8PTRAUOrDzNnpUjz90ygh9C1FHm2zzsutDLUX1STr4uvm3QcJpLUXHJPHKgpuBAaH9aCqUi9bH5UdFsFfXHsKBohxSDudIBdogxgt0S9vMOOgTkei7lJhxJIYyMEp%2F4i52PZ6gSX30vdE6LbQDv41AUYogyUMijrQIk%2BNw2Pwf8phwm2qAuw%2BE6iBM0%2BIHYkfG143R8sXjCErGuTo6q4K0XOt9iZPgpPsvUmNJa6Aq6oQcfmT41e89poKeFQcqHoEHr8sCmLDykVnzC%2B9r%2FJBjqkAYtPvJr4cMTPqt3qQgWIh9lXe5Poqvcj%2FHL4ogueD2eiP%2FW5pr%2FJCNuQFZhEKn9WQh7oxPESrsudY5nUNctoQ%2BdBzrh39ApWnb8GYfULkogQvrrQfAAU9t%2FbM2XaYSi6JmdNpoZ2HyGVKalp%2BXYrA9e8x%2FJqWx4SswyBEZtscrUWuFjRVUzhAjDz5gZpMp4DOy%2BxhyKbMkGxmUNhHnzI75VWYFKZ&X-Amz-Signature=6dc87c68dd7ed8129c7bc4de3d51bc9f66145480e64a27cae456725333790db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

