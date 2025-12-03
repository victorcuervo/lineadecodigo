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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636E4DJ6T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIBjTmVDTnJbpLjalKUXMEbxiShxBPvj31LxwIgNUVxxXAiBNBXhH6IYD1ZfJC%2FZGibUf2g1OsFSxu34lOv9llJajSCr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYGPNDnMkQDAqUr9%2FKtwDID%2FxEVjUfrrDXRmhKZdMPXAr2HCWrVbet2SYA0gbhPQpas3sB%2Ba311szs3%2FXn3Ixn0hmUn7BInlDNNerRG2Ip%2Bs1HTLUVFNmN7Ay6MIe%2BcugEVjG3EB%2FtNYDESVJLmjTOYKokt%2FfomVV48xTB0IKOL8UhtWO6%2F0%2FrnAG45aOAPYSu6z4o%2BTIkjpp9tMY5Kd8MrcmM5%2FMUMjZj8iTs3vdG%2B1tnBVKsJukckcusZ1TW30qhFydPIApYiBF0QvNvOLlQxO8UdyvZmgWoY4BDTMGgfT3R%2BmY4hB%2F16pnDJJf1wcCxFhmmLOJITRwcD%2F276Sz8QhPL2mZ0flMehc4IDunQLDf1V0EFxt9cl%2FOmjLl3ugdmtK8lgayb%2F8CrreQLVGK9GRvRm52XOjFkSWTa8AQtgPbIBgOrIkj%2FKRLbW033ZVExwVXFtGYFhmmIqy%2Fv%2FbxdG8vJQ4zUdj13s4gu44z4mlE02jN1NxXKxQYNjNhNGEAffm3SnsPB9TZbliJ6E7hO3STzxb9pvOSiNXv%2Ffl5d9j6vMm05Bb%2BPUbCO8nBEiS3pApTbsjfWW7hQmQOXm%2BzAOHbBpZa%2FB9HdYeLSBfrv9KY8bHEIzwNaQnB279uGu9W2P9CxEZ1MDCLCOswn6%2FAyQY6pgG1sVaiejoa5sWAj1SFNM2zKyQoEXLTuxR%2FfnpYElmd77b4RlOUHH1gtT2h9XuzO2B78wzIDX6AZlLowf1aeD6%2FX%2FAREBR7XGfOXDg%2BNKz8NRen4OYo9o%2BvCSMqp33M2P0uUrAwrEUYng061wNUMmGIvgwqU0K5oLzyKqVrHRL6yOofeg9tpr7pgQ%2FC3DpoppG7GhR%2FS7CdWJOnB8BYkLsNUgIjY5Dr&X-Amz-Signature=972b083f244b022c1a479f5f31c76480798b67a5035fa737019181b8e7bfbf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

