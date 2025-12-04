---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4ILBM6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBVURStdIYX7C81wRTKBVvXF2AF8XmXyBkaFtnLcHwisAiBE0AGnLg7a6GOa1TnDoibhZlIiJFVgCp2k1rD5PBUzRir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMk4Nwji46WzVMOCV1KtwDPzmE9Olo47JcIwdLeOf%2FRoa2zFl6wAxzpJdcjlvTohtWAYOZWu4LQKip9c8NR3mguVmdOSeewo3HdplGS2mnWNVx1kX3ySOnEvdoPf7Ttf13Oa7tBrrs3TqYMrdcxZh2wYPIU9vGdLAJ%2F6tZD9vKoL%2FVBPFJyR%2BO5rTMzVG7nY28yY7lVMgUSZhvRzXhUQ5aeVVMKWvlAMTf3DwBqoyZEnqrdUxNUqPzJaVgsSialvNREiIObyVTUVgtHYWpV66HepzT%2F1P8LKkTu8Xw4zLXi35SAxh1Lt4%2FDwp60a1Y4PCd8%2B9FqEzKrEOLmETxIeRrcdY4rA5iN4MwZUA7yJZUoAlMsXjVZ67WEEe0j8mREJ7c7BbvmgxDmCNOIAlYRDNrD%2BX2WUGjKh65TAnUatDX2rdY06RyDpDgEHdNE2vfgzQ2i1SnMH3ay7ZSW847RBQ6QNnR%2FCl4450neulqsh%2FE%2BQNX6DzkvdwEI8aQhJ%2FfEnEP7npBngSkkMC9Ctij7Ca%2BBSoFpIAENs0vARgv%2Bdcku0LIiA9%2F7vyOROwU8yz61hAG%2BZ5RI4DzMYMnji2apVo1RKvh0uTscyyEuSPozAhU9D%2Bf%2BHjS1sD9hj91ACUfPvPK47PBreagm4EIEkEwq5XDyQY6pgG5iHrlrr25qcWANU%2BqE6ycgWJzCEU6kl7XSpC%2Bv48WuvgWitwI83RkT0Q8S7wcVDQEKodfQfrH2Sc6s22M0D8p5YMbzIXTi5YFc8JkhGmWYBJgP16EwOLpLN7f8TyTvb3KSEofqBvLjT4qbzO2wmdpfjV1vSRMF%2FnzNxi8DmW0yjfuv04hdPAgGnV4bdp7CCCrtsy744wsrwCxsHEH6zjWarD%2B%2FtPb&X-Amz-Signature=cd977b1e8c0d3c6f51f67eb40075001b88f2eacec67ebeb55d97bb79ebcf20e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

