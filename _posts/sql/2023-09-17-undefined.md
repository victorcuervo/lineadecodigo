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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MMGCBT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCPldBzMYkeaFbry2uBjQMEnoRhF7wd3TyVaSR%2B1j4NNwIhAMC1DnnuQcR5pnTJUXt8bbgyGVxuPtHklV2HWvyH4p79Kv8DCCIQABoMNjM3NDIzMTgzODA1IgwTUlfYGgUA%2FjSXBf8q3ANVV7bZiBvmoktspsEUiwTQAK7OkHH6keZSpSeMioTkGwmiQFFRkAGrEhxuxNUNmpiYnM%2BLgCOymT7miK68KbC%2FIWjsYzDrzYN4m1bbWDy2m9wjZMpMTCus42UUp9yrTrP1CMpENVpmDsALQDIQFPOaHtJJlQyW05nufhwNuMKdMxa08YQcKxr%2Bq7hyRDMiTNiTUI5ALvSh3ZJK9l78wtPOKxI3%2FR9cZz3Sf2NkeJf1Es7ka4Qb%2BtBSQkDiU88C8D5RdP%2BGsm%2FbbrOQi3wQ7TxEawnGr8fJAHddAd3xP3DAam7Wk3qfD%2FmJNiTnTv7BUJ13qKz3yAdqY%2BfoRizbRrKxpnQ6%2FkQRhwUmiI86T3Y2kuRSxaEx9ZEq5aMiwDnLn8PiStGOLy5014Y9%2B94vF7dfOBMeyqwRORNvesohhz%2FUhWSTN0geqGhYjwu9C1lKmF3fnuzl9VKwPB%2BWhujaBEz2dbqfadfHnHQpfQi5xPv%2F3nTGErQrPIPAT%2BV%2BeNOb4hpYFEel%2F1uE0NR3RxXbe51M20EAC%2BWYqsCU11Ql%2FNuYjfjAT4C4OtC5fdvzH7G%2BZhTb5lauIREA3TXn1TEqkp%2BI5UqZSoEU5C0VVaNQQoAp5lFIRH0wLVhdBA6i%2FzCelr7JBjqkAftb9ZVrK3%2FA9SUAmVeG2pw%2F75u3EvHHq9yDLh8BreaHji1mSFfO5a1phoOKaf%2B3kiWCm6joUL1j%2F7SO68VYfMYBRTIYsB5CaeuR%2FLWlzgNsi%2Bvs8uZ7kdL9PuqyLped4bVY6%2BGU0iquxtjF5t7zM4yceSm5Pud8DO3va9Af5tKek%2F4zn2xILjloAgi2uqOKJcCKejD5ujMtUeUjJEb6gBSPCUp%2F&X-Amz-Signature=6287f950035f62a2d359e5b13ef462b38b98022348932de105ca14a3101920ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

