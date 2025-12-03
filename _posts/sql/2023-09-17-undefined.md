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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYT3V6SU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH1pb%2FR8oyU9d%2FcjTOmQgPoAr3nkq3ggyJifieMcGstnAiEAh752qASeIkvjvG0M6ABu%2BvPE7Ve4WgjwxeBdpgFbaCUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKkNM6HLr5O6YIjdrCrcA4DukzZ5c83grgSWQbAnLInJlKdCW0ritgV6VNvuxDkTU40e6WtUQAwockOJtHK00VSnyaYWOp8JBfiOSGfzIGm%2BhbcntDEszpFAKZztF9ZlvCT6QI5iKRioO5xihzn0nvpR1QT6fXp9k%2Fy9%2FA5DIHQU2rAR16BnoIkgqAUIs4WhowTopjj%2BaujqCSjIIW%2BSXEj%2BwOCPOlPRac75b3razvLBNega10ey9uplLOE5PbUZeGYCiXO6Qp%2Fu6vnY%2ByuYUL5IBJrsLL%2BaYXCQdHE6mlzniN%2B0IgC7DPqS3P2b7YbFYHbpoHZhiD1Pj85sBwmAHJ6ppHxmBYJSLlZS67UO4R5JOrJ3J3I5au2oX7sTjJMidGbZo1QbbKrgP3p8EPgHRMcfX%2FEJaGa4tAWsBKObkJ%2BapJPpFbz2gCC9k0h8m4ZIieNNSzO9Bj8Rd86Qlu%2F09CXjesECdAT0jB1%2Frcwy%2B1do2PRcroVrcMi7bRofGPDWmww7zPd4xswStY05W90Ma0mtrHHaX6Qby1UYcWb0SiMqD3ssfykWZY9JNnhJqnSdVN0%2BpJSL9Luh7ixXtgR2ozshCdd%2BdMz0t41rERHZyMOHQW5ICWnKeeCyeHlrhIk5idwPcnubML9k7f2CMN3awckGOqUB7dK16s%2F4nasgEPlVRJXx9qc1ouqfQyVTUm%2FfpMQ5q2qYE%2FordNuFv3DBPyQy3I317W%2FZ4ffwMR0GxCOkNuzPPDBBw8fpwLEi6gaqYQIwh1Za9qxKFM5FMGcmGgoe4M%2FiKiAVrSfKOmwrSEkWvnwemUhzT8XmgKEYoC9wwuM%2BsPhNaZpJd5tVmn%2BMrf0YgTkuPi%2Bn%2F3Dgn9aP1ciq28I750xeI%2FUm&X-Amz-Signature=f9b790eb8e4c53a0ea22acb74fedb262edbae87f5f0e19539dec823c32e52d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

