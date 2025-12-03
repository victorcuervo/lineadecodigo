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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5JEUJA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICoZ541leo0PWq8aYFKO2a15HZHb%2BLf1IYti8ygYibAsAiEAnrqlAUhrcXISWiA2hd9BbFkxyGYrftnx7jFOGZ13bhIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJW20I1jg2PtIro4WSrcAyDtJGTzJDIR7EYE7CiQq9TD3AEg3DNqojAS%2BLYyBt0T3AHJLqUD32pmUSbRHuTm7295Z%2Fj0L9fz8x4sGVc8%2Ft%2BOMzxmyrk91Ash0APkiHQ%2BVepF9DcxLAqrJfUEFpB4vl%2B0psJqmtLLLiEuZtbb%2Fo%2FDO4AO08LnuL6rpPp0Qvbq%2FwhpW13w%2FzDN3eNnXh8QuH1mTRj7yxbhSPoeLuu46gSszm4vtk2BhAUmrSOJTQu7w8Gl5XzxgEWYIo9r9e37t0i1sCcq1CklbSbAtUErY9oxUYuvSn10%2Fk7b1zkTuI%2Fyn6khfCUueC7HgCzdO3bBHVmi3h2JZ5DI31hC5k%2FgjKV4TePjsoS2DpF4kGBp3QKdn%2BJ%2FKpdywbeDEn3KLeMGrNAOuwuIhA%2BxS2a1alf2p6ZRbIuS3MxcIYLsJL6W0MVyHapuXHlqm4T3m50pN6PF5xtQdtSnc6wybmC1wfZBc2uLtOmIo1rNPSpLdwwEdXSzYRIZ2aXGfVSa14ahadzgl2OruoL6bIE%2FUVcq1sPvPiJpYVfWQXlsGvOcC48uG1gp0GRaauyUN3B6bkGL8nxN1zTx0jTLtuM5sgkhfHWz3fkMqdupn29vlyZWPTGgmKWbU293qGMAXbf%2B537VMMTMwMkGOqUBWqkh%2FRxFxPxqOGxj4SThhoSPQvRKPnTBVHX3KorFI1afr5oB5VpZWufvuH4iO9HedLl9qc5DcOIazlndQR%2FNpbEC9Mia49W52N1nS6nL2wwLmkDtkx5d4DkXlvmtcGV4%2FWL2hbavmEZQzXv683SvcKSX6u7WgwC1lwivlK3lH6YPStDiPGM0nkRPiRZ1XsDMNosYi3lKN2Fm%2BC6demIeKP2jxC6i&X-Amz-Signature=127af38a09e6292b2d5d3cc71327385e6d5865ba15850b2f46800621ba6e84de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

