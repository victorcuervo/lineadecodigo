---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVXNBYZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIF24iaZye7jSpW%2BTPPCjb%2FMqkOqfEVo6RK7uNia6he2pAiANz2SZLp%2FC5fzJyhnvT72eGuQqJFXnC61lxIYa8m55Fir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMmJ5R7EHxYi%2FzFPImKtwDlz%2F4rlXT286DTorMIco98MWJ8lnnL2q9bqlvRc4YnWuAc%2BY8jMGkrgnLHn0%2FMitTNqP5o9DUb7Bj7QBmq02K6Jffuq3bb3Jb6V9YiR6dLzE5aIT6R00FMSCKj8dAQUu45ssW8pb%2FhyikSEXDUpYV3FRbPr%2FFiaS7PWAibMd4K0k5aigwMdJRstvJKiYgKSWuhVfIBwJAsnWaObIExi8eqCUd3n3ChezMQ5QGUfbobpOfqPI8i0bxLYmWDzfF8ztTeDP9PiY55Gpz8r4EkeSaaxhQyNMO0Gcert3YOGaauavuPwlhyRlCzzOFMk%2Fz%2BZTN0%2FeI9N0rUm2pMrHGkwAExntRZnEmrjQYuTdZ5UT3kMop9M6F19k9GWf1V4MHh%2BNgZaio1Qb4Ox9IKDG3i5SC%2BMZn0KC4iHV3LiBx7T5cby171cfxnIAF0ctc9s7opr8%2FSvbNNKntekDEZyPuLrQYSJdzDCHqMUaQaK5MxjP%2Fkz0BgaPuEZQSYSXb5zlB9arnsWw6HakeJlkYoRgnldU60L5bCoAEnx30KSbrEGG%2BHekktRiPNC1kjDMyIC31HRYbX29ZTYFOzjsR%2BRGbsNKebYeemluFlwzKDMlJr8ybxBMvicQZ%2FLsUGDssS20w1ZTDyQY6pgEtWNfMgr7PzJJGNUxOvrauZbesmL81hiY%2FgnXP%2BoFefFy8DEYMDmIawIIwy%2FQvnJrr5sbEiROWQme5UsbNRI41dRr%2BNFTWxtRLEFW8C16i9WjZwzYla34EYZGTkAklD3WW8IIfn9XEjfmQk6dX8RKzvDSF9NjYzGJSWAPE4L%2FJwDZMmoVRJFs8LXbVNKubx2C0A%2BCZ3IExBD%2FEJR1PDC1ZnJL8gwvD&X-Amz-Signature=5d7a330ac898845146d61609216e840550cb28760ee8fc95d4b27ce255393a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

