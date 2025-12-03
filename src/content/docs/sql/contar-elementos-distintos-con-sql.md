---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YZLI7V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD0YfwR9ZlpHJwnLIk57p%2FYO8lOLC%2FVISYqLff0P19QqQIgbm702cBGs9NK7225wWHD6%2Btm4befyVF8ZmcyxnyNNr4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDACO9%2FG7cZLglOvufircA1myAoAzuiXoykX0lGODYOcFTOMezmEWzQgTLAbjJll8XXVviaGwS5sh8y%2Fl75GNwm3ngG5%2Ffdqi88Bcj%2BlEy1XEXGGDamAlK7Mc4fRAdS%2BJpyhhUmiwS%2BfXcULytATvpC%2B0G3zPtv4bwEhIRnfYUmhPFiaK1fbdyxabgiIwHiDts9Lbans3ElbqOmQjtgKiuDkcAtHKV07Cviuf6EWnQO0sb9xclFtrbpov7701VVd6Sa%2BybP%2FbE3sH755vuwvFOua7xqKssw%2Bw2D3B4fJMMjebOX0ZamoaSO%2F1iBTE9Mtu9fMAc%2F5PGp%2F2DwwBMgx2gH96FrNaVVnPRslT%2Frh0l50IiaM7ItSAfh2N%2FMmDl5ql0ba6JfElsmC9z%2BDt0UcBJXKpn4R6hcWSQCAWde8WF%2FTQDpXhwKwJUg%2BEEqs%2FANueYzidz0ashwCIR2fQYhKkAEBk4F8n9TTXZNDVeIkN0WPc0QCc5oJopTRHKc6Asd6bYzObcwyftRhbiYXGGUvcvOicnMEvwqA9EHPY3EgGq4OdqsExTBRlfMsYw23q6LJUMeLfE1uFgWehCcFELNAat%2F7dxxgEvRlaY4U68t8i73A81jPAPaLSP19mbHSC5LDdPpBcwpjRBxQNKHDyMKzcwskGOqUB5%2BqJa2Pq54lvjc37wQhoXrrK%2BN3%2BvCu0ZFpfRg4rZA3bA4zZgL5yKHNW8ZPud117GJxdu242ZvHtMGpbyGBlynXAxLk%2BC9jrNoEDpFsAsQhzsix6X8YfRxbxbaMcTLHpstX5aJyx5oGKsRsg8BZFdsBdhh5uJRFW1tjbk8qz1WNh8bH8iPOPbIK3g6L1fDEFdPHaQJqV7HmRNQftBm%2BZqGElk1Z0&X-Amz-Signature=a7028b7d77444f44ef12e7a1a9c63e6d9a761212a227b68aa0ecc63828c15248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

