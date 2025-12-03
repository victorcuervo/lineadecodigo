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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQA567GW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBVf7i%2BLCo60HBGiSTT%2F6EFuVU%2FKBLqINcbC1YiCQMx8AiALBTrWfomOU%2FvbZkZVFAMftdynsA0r3iyuQKXwQJE17Sr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMbFvl0NmSORAzMYatKtwDbGg3%2Fv7HkqNVj9LmcZI7Zz9LBr7WvyAqFhlqcscx6mTcF3nJGD9knVeRsZ2uRTMJRk84odpPAVHhMyZX2EUp5hL2N2EfeqjhXSIRtk9KoesFn9muTUu%2FZ5Ija7yn%2Fkttgtgj%2FwhQMmvHMG1Cap9fPogNvR48JyCkrmXYeAz7k7IQQhf4m1EFoCXqdX%2Fr0a0FyGz3ef3yzQ0dvRyilvfYl7hwk6XbClnryq0AXIB6A2iLrPpZg9oZD6zJ78zlyoB8OqSqHHO6yOW4HBMmw500wePCVTUgwtbA23Dyg8tQzA27HX3gfa7h5LbYsRlEmDaTxmrr1xvvBaerHhu8BuoUa%2Bx2owxTYSy6FclHgLqJ2XXgUZRMdeogLnArtCv%2FASaWxGlL221njSAt%2BKKCqZQLl8vL82CVh19N4shDOboYw%2Fg6RNuFlX96f%2FptOetJ4uV6FaQqUcXe6O8rx17XIOBFwtIw%2Fcq1KkSArPzCV9QxxhJQLyqo%2Fpy%2FhCTMJwZwW0h%2FNCH8dsj%2BFXR0Ax5snG7oLG5GdovJbHKBNXOjYA2s4C35XTF8yaj2Swn91%2BQJlmpir7piMlaTVrL25%2BBORe5tnPtS7Ar%2FpYnp992pX3WkkqCj2NjN5VJwH3ZkrZkw3pS%2ByQY6pgFT1SCjDru1pxT0Shp76Zo8zk%2F230ypiTqS0BXMVYhOvXd%2BQHSvOEwqNYd%2FBr2zob4ZnHfiBOg5NrQ3k8KmRdL5Wr0YkENCcKEEW4jzPK8Tgodcq%2BwaP7El1AqmAJOBwpINY4T38yGj%2B7jezghLLpd78ij82CESXtv0zPPYLAv0%2BTSDZ%2FXDcYAhjDjWHAcDpEj%2FdoeARfLxSeAa%2FbQS%2FYNZj9jTu%2Fta&X-Amz-Signature=4b3aa9a342baec06fbedd8c9ad9b990cd972f15f8b6ae7cb60688a966864e7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

