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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S26H2GX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDZZUJb43BqqFbyTeKVZbmPgtWsJdoffaQpzrxBMM4MegIgDHvloqSekC54NY5VIpU7iBb%2BJnYKNd1khLJ0CBrKUTsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMtXH%2BQSJkbTMnSlGyrcA1iuAECK39m8AgOHEfQUoCGfAyj852pifv7tSUjC%2BWugpzu6UjrIt1q4J3uA2BDeYqW6TengXZA7JzawGPz1LVZVU4FzcBNPRqR2pEbRkZCmMYSzBQr7JKfZ5Ijsj4LLAegaGCHOFaXxNeZaPkk5zdurp8b2MMOET6UxCLy%2B40XpJW35vG6UwCou7Np6hg9vAy57Ij3A6Q2CU1FlTk5bNk74Gcnaf%2Ba0o%2BtQdKLKc%2FZL8lzWrFv6FYhxY7QW1%2FhjZPY2aneODjf%2FdLzRkTJUirt7Rw47jZN1OZWV3a91rr0tGt3QzhrVWb2InrMvBWtplRumhZZmTW4Wwv0FwYhzuF6rsAa5q2y11aRu4ziAVYW9maHuX%2Bj2YSq4Ryi8S2KktGL6udFn3JtL%2Fyo%2FL8F0osJxovFXvneckX8q%2FgeTiCEQgK81JOCplG6gJMG5iBRGB%2BvlXz87TIcgGZpgCaS22z6Puged6oOWVld6AJxd%2Batap9a4P6hVfJCIS7Dav%2BP%2FU7J%2FKFtVUFruDxnv9tXAo5K0fTEJeXa1UFCG2X9aB4M45un6Yj%2FHjAVBgdo4POb4o25sjRueAHwC5ZTcdDJPHFhwXyQNNuLUDeXMChLkvO0FWeh3j%2FC3wduJ86WuMKSWvskGOqUBya7sxqus4XpsScPlC0ab2QstA3r3n7zhEtd5qD2thNJBEVp5XVc2UeRRFombGSOTsUN6BI%2F6trCmeSYHdtpHE5DdmYKFZGZSiPkkzZcQprguOmBYmGCHSCn9ZXTdBX6wgQEGgX8ZqEkZ%2FFtAXz17i32Ne6%2FTfrAV0W7MR41rlv5EGu%2FVFFF5K73teYFj1ZedoVfuDivcPplJZFaRgPUwZ1LG7LmO&X-Amz-Signature=25f0f7fff75e69e7e5ef52d65819c68398a3b444a5878e5c41d49a49fc693b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

