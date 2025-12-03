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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK2KRMOF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDqXfV%2F%2BaScMMPkoAxSYF3plLkVDbqwd6K4YOjeAVQJCAIhALAFgTDrqdzS%2F%2F2xF1JTNO076RzxszhKFW38K%2B0RnIrsKv8DCDIQABoMNjM3NDIzMTgzODA1IgypfrB0jTtHy%2FBrXs0q3ANPPRDZLjND19o8n9BrsEe6MjiJL3y65LZOY4BR6MNW7gAzxN3XwuHLUZqT0EycEG%2Bpc9Vz%2By6iOL%2FUCaelnbukJMmZUGBIFAj4xdawp9J06iFGbDEsRYWtC9P2WBWYjOg%2B%2FrFh5L36pyGRiu6owtWSr4fx2tWt83MzM3O55NMkdJdpJr1RVKfU0S0P%2BE2MaFf6YclrJ6QywEP95NZOqy7P12RujaOAf9NiW391E8bNn3ucmM3j73vWZHhyH9cYydzJquC0%2FWFD1fW6B7KYwqfXdJv5%2BHRAuku8pjO57jf7N8%2FxBNlCCsp5f6dH4omeXpkUFiuarzteL%2BIHaB%2BoSnBUOqm35I7qgOrxmghnvFOf2Xn8lvqEmC6IdfjgAXrlPL9pdtV1IzqCWVZUbIEHuHB3SZzGDcrY3FdaIh0LPLNuB%2BpYPFaMKOaWIrgJAuAj2ufGXo7vyjfy1C7wQ0Y40lJr5I5TiekxZcDregKun8NHlzMKG%2FZms%2FKO01c6RxqAwD7X2V6ClUmDrPej%2BzHSYaPLcEtRgQE%2FNMHCvIvENeX%2BjgRgllvKkNx6U2MuXVaPwjioRtulitsLEDSCGmjak2NzxIS0Ui35LFj0RHVqpr2w69%2Bx6olhxcgxW5I1PDDd3MHJBjqkAVbNP%2Fk2QNKt4TLocEqrcWUhaAaw2nFEVs2cuPAXt3wFTtnxergHiOHcYoHRqlh3Thd%2FSzMkWOPe9SYDhY3uJ6jfu7qRmNYa5Mxk0i%2FIb0FAlwXUoI2YfFTjZoXIasqey1V8HQ1OekBw588VitlVmwjeIgu%2FKT18N2rT8mnMTY0X7ZO0KmQwUY9Z%2BVdsbPNPHuOAmFqtcyCRi%2FnHPBO2d8GAZrpE&X-Amz-Signature=4863353c9232e7207701328e82c32339acba1501fa348e78948b7d55ac606a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

