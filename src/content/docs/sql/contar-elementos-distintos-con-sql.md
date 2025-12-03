---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRPX2FE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIFvX7qBMuWK%2B6IT3JjCaEtppjG6k1nsdG464HqUtz%2F3kAiBbzom7pweRWib2ja3XskNK%2FvIHYgLNibIhqQrULIio3ir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMQWN6SPnzgiMBgyUVKtwDv%2Fyp4VV26%2BRSzhiaugg8iG2BUnQPbreJCt5eQoFmugrXMgbfbIHJd%2FPmNNXuBVRVQB2RioJGus3cGmwLSSN6%2BZUSihP6CVd123vjK28h9LIRQkDwgPtrAM49mHKn6N8I0sI%2FqZ6ghMdIva%2BnnGcFvCwiKK6%2Fp2tW%2FIa6JJCDPk4NOJ5IlDQH9XfhjnvxuA%2FE%2FD2i5xGXSifID2OQ7pq91htoS1kxJ2hm2aDocPmMeJpX1FwLr7RiLJcMrMJznjc7oel5OXU7%2Fzzpw%2Bxv9U%2FDL5PavX9E8iw8J0jzWU%2B2zMuen5OJ0gnwfBhy3DB5g9omYQckgBeYdfp%2FOwcOgrEAixcxMsS9tN2cQbtoLBYalv%2BoCnU9ocnnbrXk6hgI1J7V%2F1%2FdvEm4O71WXQOpyfbFibcq5%2Bankx8bGDhFC10hz87WLepFwpYzOh7aSDQM0lLGq0r6cOCy16zNbq%2FVr%2BTw6gCb7sw%2FXgBb43UQ2FvPvMRcplxA%2FwdrsnKo8VaYag1SixqQb5csgBx4mgt7%2BRWj%2FxBYl45cddFQ89xBXsxQ2wwC7cL83eZJSARU2XhZKm9ADqT159tnPiXmtTQONOyNsw7Gm42gw61EnFPS2AoZwAFO4bwV1GYg8R2z9TMwjNzCyQY6pgEgybuJBHMU60JqNrQyHBNsiINdOa%2FJlC%2FnG3N%2FCk66f7aneZ2D3aXsqBpR9l%2B%2BiNC0SNJGBJOevi%2BkZAbtpT1HXYYUcG7hiiFmWhCSFA3FyxSsES5t263BYFC9svnkAA5Sq%2BMYrRWsDMYZD45Bg30ND%2F2wp8DjoN3Usy%2FvKvZamBaxLABxpv7%2FpM4g%2Fb2k5Ft4fmkwxDwdyEGU%2FuwdGdfGdOa7K0Uz&X-Amz-Signature=bb6ff3465644873cb40550f10e1ab52c578e3f18e64e89740be1b6b88ea52868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

