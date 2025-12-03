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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWHS5BA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T043124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIA%2B3tEiz%2Fv28YKu0G61PGSOVUjLaDiHTjGfBOd5lG0Y0AiBTmNAwBJf5SHfFPhYExSi8DmcQ7IJ2U7sU9EuADvEHDCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMlEZGEuylJSYDuN2jKtwDIU2H65uhVXqUkM%2BjYjSr7pentAnc2YvDsPJbd15eBK5g5GVMRgue3PXcSyyfmyvx6%2BuY9u7zykVFO58Q68yEwPcAmcUetGT65RFYaav6pD2cGGlPBV1B0SFxzOq8MA%2F6V3Ak36%2FHBbc66q%2BhNRuIjGh63w7AqHdqDVjjjKmBpBr1M%2Fpcxhp8eFuWPW2ulVnt%2Fn8ySP49Qzpq9EOU%2FBXz4wM3BwnWbuv15PlZDSlibTtew%2Ffgdcg4kJ7LrXM36WHRaU6MHWc3G4M2AxHNdeCBS8meTNgBgpkQ9lmawVoK%2F%2BWLW3tmUlvPKTaQRykiqaA6%2B9NCEJcVR1La%2FqFXaD%2BYc2h0J3aCmzpGx1mTJGlfRwxWTDb%2FDeD96kydnRkvvaLqbWG2YAikE%2Bu4ZY2uUFCT7YwBcfvuOuXjYXaAFRit%2FyOMC3fn0qP7EGh9vIJG1TOK8lhRTmZlf2HEn2DxdZYCyvB60tCNyYEsFHvOcn12lNYNEPNWJRWf4Zey7lSTVLrKavjgV419SYg7HdaAfelt0GiF9%2FKm5xtLQIVgDjDNASCPvWX8IJjxhHp6cJUuMBUhRbSiae%2BAnjWH0fKyrbPCPVr%2FMjAUm9f5R87%2FPvch4nv5bubj5jCp4HKbdKMw1JS%2ByQY6pgEwsWibuArje%2FoUYUdfvQy3fj%2B9eksp01ait53IWdcDQwRRNKMINK828qCEczopoHeeN3%2FdnV3U2S%2BWTBGtRmevztSk6JyFMZd4ii0gLMD7kHrkXHSt93WC%2FzA29NHpE5miqCCVm419Pq9zFjh77ilon2msto3CDuwOa6XQF2VtkEPxzXM3j9IiLx%2BxGAENHu8E2OABfb%2FOo4TfoO2iwkhSoOIeR5Kt&X-Amz-Signature=3756c5ae56963864d6f7835600cf9065aa7a66b45eb1dfa123b7f63b732b981b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

