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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFK4IMK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCWJ0cH0%2FBANKhmyxEmOQvj1t6JhAEVtmHS61uYnhB4twIgDk2ev%2Bd8ruXH9j8NrPdUnua0bWXO61FiZJnM0yArpRcq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPu7VDbMFAKhz2EeySrcA1iMiv5NQIom0DWBX2n2mNgkH366X9W%2Fe7Ar%2F%2BrVHyS0t%2Be56wJHG2QtONpDJaX89qfkysSSJgSB1Se%2B%2F5nwhzdYUff9dVGCBNgyY5GFt5bVv%2FNluexC3QLavfiyQBC0JYN6gbf7iWjlVP6msNWV10b8a4ySCKJuPqDm38fPjezRjcyRv%2FvmmcomTpj8ONegPQF4kiFvNCOtUe8apRC1Er9Q5PbP7vehN7LKH0kHaramyLqINX2AOWrQGLTrzDi5lTlMcsdv8VdsbayS4ySXG4fCYVINiEdl9DdL7aNjNSvfMfnKilPEXJk7HWRtcbzmaVdRx3oaSAy8x4ZA%2Fhv3pxFfeNarXP044zo9354X4AKDZxV%2FfUaMeNS6i5IbrF0ylF9nB58u4nzeKS%2BLAcZSTOkj5TPXQXvmydNF9f89eSlD9BklKNTkepxXTVrvtdD8XepY%2FBiP5oNs8Wj5XL90Bp6pOY6Eo5wHaKnRQrGjavpJoFsGnXCmdP9uhnuxRcP%2BcuWOj9NanXRiYaSR5zXEKnx53XmrJ%2FVVDDxFdySx7v9swksVWHKilKOfXl1ANwQ6WmLgx6DSNPT3zb%2BAXr%2Fb%2F2xNeSY0gFSU4ufsv%2BNU5CnnjaxrnW9H1TcofN1eMLnBwckGOqUBCRqzyqReh6zLKcCMUmPAUcohrCalt8Fv28SZt5O8ZC27Ea3OhqMAuCeLlKVsSY5GTn2rc4GGaeDIZY3neYWn19%2F7hqdg9yRu1wzlnwjAFUxeDlrcDb1SdDIJ2%2FYEOI8krU9GwDLBpJoLWTWtqEjiarg3QbaLIRhEG62TeghUjqjx%2BNnY6FcqzwR8%2BZnINXIy%2BrOb4DZGnYqzn8%2FjKsVAh%2BTv8CVx&X-Amz-Signature=8b751979302f2178adc9effef610fabe4fe48cdd9593d1137aa43a8ce7b5cd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

