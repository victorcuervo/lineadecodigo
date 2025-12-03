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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWO6M6W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIASkSsnGbRL%2BaFqcLZpkCoCbUBrqbT1hPIE7C4y0Yiu%2BAiBKyaadgN6cCJzvjRKE%2BJht87dc%2Bdp%2Bl1%2BvgFXz%2BLNjPSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMvCVeCQVc8NlA139rKtwDVSQM7oBxY1emE8xXDPRsc9kEls67SsTzkVlBxX7znE3MBbxOZoGxC%2BEsOJqy0%2FuKOAt9dZElh7H%2BX1zPRaFUKh%2FcTZqE4UMXbcT0IKh7xIn95uGWzsO90%2BfHwSfibcrXphAar%2Bqq8ApXy6rWFl5%2FnSZ1STI%2BkKt3ASuxYgVJB6taBvk0yNEuOARxbRSV5gaG9PZ0NXHlrhcKSGx8A8%2Bk5j5LxZ2ir74FBew09gvmGmBSHisI3NyxLk8j6ZLr4GWdZYIsjLAvhoRvWukvSHVZszzhwcoARICPGNWqCEws5WZlGQu3HAnI6b7gpkP%2BnNztNYlVZZulJP424QnYVMA9ht8hprShN7AqQV1JOqM4P2pcdMFJaePcgK1Umnnwvhs%2FJ9yJZdcFH00QcWs7a3p9TfHkKdM0Hu%2FUygPMK4bVokN%2FLh4lvbvV5uN90qUrz3I45E6bxk57Y90nAFNl90PMjRjbT3bkb36NGONUXCBw3zp2eSUPEbN%2BD4FEG55JUhw5BX0UDkJY4m69vADystF3aVnEvAinjm0T4K403DkJ3OPQ%2FfdO7FOYNLtyveOeJP6D9MRdphd%2Ba9%2BYdXaNSKOnkDhCzou7EJE55P4OqPTXimrLahVQmnMYXLy8OHAws7i%2FyQY6pgGJbXteAMsEf8ZpqAnqkl9NrhTwssob%2F1VR%2FoA9foSDgIY%2FRhGaMixY%2BJWHWsDDMaYwIufB9nvZS%2Bi5HIsZWy%2FnlDDCcM2kQgPOVOxTA205lKXcS20w3tYO3ELGiZ1c%2B%2BKX0lS9ZxrY31J%2Fq9fQ9d8WawCeu2PoAqIAeTDUp9LipaSIGMKcaufPWwvkhQ9uuL53vp1O3RS2HBAiaWCtNxFU4Yk4jeml&X-Amz-Signature=41419b6ca8defe74a141db779094fc249086ba968403780d1bb5e23143253bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

