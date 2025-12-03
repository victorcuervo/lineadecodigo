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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBTLJ6CA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDFuSpm0Wd4uw9f2wY%2F4g962nm4ZPuW1%2FhkKuDIh27ekgIhAM6U1Nutv4fQbf%2BShObE%2FDp%2Bx5gCu9yVZSw4GLW1RO7DKv8DCC8QABoMNjM3NDIzMTgzODA1IgwBB4VNpuhyAvYf%2FDsq3AMj%2BBfQbww8qPKtXI5DPiccZ1MU%2FXuUaicC%2FeKdUuce16qukbAfL5O8a9TzEB%2B8q6rHY%2Fz8XFH3I0LSKqhcvzEN3DCsN0oY41BpZc8cnEFXwa%2Bh5MP6ZlMnqK1oklW%2B1uMvQtth%2B7SaN7fTxI73%2BEn5b9WvJF1uSVyRWWdUkdkJ10%2BIb48y9m%2FKX9y8gMavxrk1oIOqFYaLWxoMCPSemO0vunk%2BB%2B1aRysfuRcOXq3WdZfxFTgcOPo0X346wchQx3xqcQLk1%2FeaIdYDpkN1imijis9N7eGFj368OZeMGn%2BaMgQjAYFtFbseJ6AtylU08mCUphnWkHI%2FKrP%2BAOusb%2FMspjF67QatKlew71GwvvFxAOlsYphh1Vj5zIpcfvvEDzlduoJTkaQo2JnYvn4oRwySuPoRAgFjfYMs25YZ2fT%2BkYrmoqTnvBtdv%2FyCPsC2yxewLobbF4BtuVXFzNEHNBrmd3gbABvME%2BBDmKZ7STSUJghIBdfNIN1HsvmXfVCWMBSL94AyJeHDAPGgKxcmnXfYsiZNcldO6yvBAOU58MEtYU8Xk8zy7l7a6R3X3KLqpqRzldGA5TB%2Fjsf%2F%2FTc7wrue66%2B2BzCDU5j6%2BBmlxZLXNMIob%2Bx6TBLRQ3HepDCciMHJBjqkAYJ8f8kXysk%2F%2Fpdk9X6zoybcp7Ons8i09ZF1AyrleOA0kGWBc1MELjPZTw50vqjco3BQktMHtWQ1ujrOVQnF9X%2B8zrIoy5MJlVpnpwvTJ5goITExZYRO1h5J5Oryx1yt0xfRLlgIOzzjwGizvGsJqBzhtsf2GEHLQAiKDlgp9kFEH1FnFmF1R9abJuEaVvgnd6SvyU34MZKWB4mf6O6Dv6sVlJ0T&X-Amz-Signature=af060391b3be76554b3ac9f94add5e589d49e146a95e90996401d5226d2b54fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

