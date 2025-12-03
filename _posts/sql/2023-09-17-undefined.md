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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBJSLBT6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDrRLm9eQLyXliS06%2B7%2BPVGyKIASQjdoeSXn7Y5%2FUnvRAiB%2BkiU6GXUg1LGR9Ii%2B3r27Lct4Q2hQYV3O7lMYAPEmhSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM8gaSlwEUUvG7uWX%2FKtwDuM7%2FEZbc%2BN8HYFRdbHM2Gr%2BJwC5gJTM323KFt%2Ba4nhKewFz78IhsE1hYEYM1X5pCRPphccY9i3%2BMjZeJDED4TdEqNUp8wULHeLLfoe7JnQE2KjuNPRFP89vQtpQaPjuq39hViHk%2BpRQxDSK%2Boo0J2cHT%2FZYjLLQc4wtWqrSe%2FISvPVPNvS%2FNT2M1gb1J%2Bxb4%2BDle0LPz3q2e8seBUUZ6S5wbIZxuiPFAcQFPXab%2BU9KxnQNVXVT8bFud84wtqTCW%2BuWls%2Fnr3Sraq15XobVSur8kdGce8dVUARuPpIEiA%2BKWDkPfcK6ngxWn4Ke%2FoyWXLNf1CxggY2UTHtpgzz0x0Iw%2BZyBt%2By0qiVd8TJL5eWsraRnHPnn27xoXRzL9iTNiV51ICMrbUfOg%2FMtWM0wxfobqg8s39GTCVyRJQ5Czc8RyzF1tgOgfxE10I2qMe%2Fk1hNF%2Fek9nDcchvn6ZnIugqwa5W9E4juTkLZL4UUjAjZAYiNSWmkaLmKJXzSyu2SgopIn4bmEAJGPxtF7%2BM0t7nMm1i%2FhaB5%2BOV%2BAEIjAGBkHDal%2BgyCUKCd6Uom8ObMRg4S7pyxU4UHO8Tln4hKSEimTjltI2bfAaFo5L5ooOp2%2BDHPXnMc7b0aI9RK8wmve%2FyQY6pgFHaonBo%2F6kYK1OD7BTBCE85SbwWtQaVxseBt599vWW6dv65uYreXQDg1D3UoR8%2FCBIgEdBmoNOOe11%2B9k%2B70ep3Xv%2Bu%2FW5%2BgokBRpzvHdZeRRLca0uYBG1c6ODCqG%2Bj%2Bxy10PZhh1EpnpIvt8DmY7rTh8KFOEEK3GrQOMd2EZyj38lGu3gHmzIn35lhziAcAt87DdNBAzn46nz30buIDRUJ5w5ihmK&X-Amz-Signature=2c3cb9ce92e3915d4bc335d5e82d5e7e4dfbc8e2e7fc488571608e318e54e424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

