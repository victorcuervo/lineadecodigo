---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMXWBNY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T144033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCYgCo20x0gobgVynE173EIGve6ryETZHkObnOr7dAFZgIgE2UFqjZsUJgnzAbxsXeYxvWwfVnDNCHYFkuSrfkuTDoq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOmyLo46fF4v3hqB5yrcA6PNKSoWzp3eifXhXmpnbCUduJzv014FXedmMXV7Ri4AwwkNx%2F2pcHXkjOMBOr2HLsPaPy9szV3OYyz%2FW12lPf5llL70gY0iAHo6FqDswS1bm9DELr0n0GKjmC%2BonteXbXpTiOGZj4Li%2B93HNGBCJ1%2BdFVYMp3ceRoI%2FgJ2k8dTMEn%2BVRv1LWcntD68VnyxYIQLxBNX7liZ7f9YFLfQ8%2BP8MzFgf5YhrMbP7fgBQhpF%2F%2Favv0gzqL0gWZIwPDB2U5fEdJhwb71TaqQsrgYU3piPd%2FrU4d2NQQV4IyW4JtzNY3vIJ7cprqznUUZi6SPzbwbDH3S65DI47t0%2BzErud9wJoQ%2BHeAVOZZ6Ox2fwRJgLSu7C%2BPazuUR%2F2ccr34empfArgi7i0%2FAwUX9QFYeczXo1DXgfAP%2BkBZDXbLbl1LrtmAAl1NpVBgLhG9PbmUSFvtNnoL%2F09XVBSrU45xpFzzt9mrMHJxnNAnhcSLFhUTiWuZ2Ra8mKGKn3ooxot5tVAz9BE0qpUkPWHph1toYif4udNpA9lbI8aWGOY3VBfBNTfApMI9UUyoOeTk2J8FuPV2QZdZPyKjJIh1XNfpytbFjRnv%2BIVTYsvxdBhCqBM5Ayyl%2FPkMFRE%2B%2FBYYhVBMOihxskGOqUBvTQ34goPY0ccjN3GqGKS%2Bx2GjeAllvC0OS%2F08NDsKMsXj%2FyQ%2FmpzF4wi3eX3AN6Yf7fo15dMtipV7iLfJen9HUqQolHbT1YfALXmiJiBYRbPgx%2Bc4TDpbT63aKatrVDN0PlzuiXqfvrytBJHtRBCFSzcYushkSDiMPtKXo5HFUwt1yGMFQj9Rlhp8pbG09XqGYlhlUGWhpCCo7R83pWmQYfNiQDv&X-Amz-Signature=169acb49caa54c790bf14238b53e70f5311d757b0059741e70ca06ae3b1f3ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

