---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54UQCEV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFaOL3Do5SVVCIs8x%2BcxpDz82VrVnS24XUx0IKZP4a4IAiBtnHS4sIcV4%2FChleikr2h5lxC1D8F3r1%2FNML9G93gWkir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMWFxXFb3O%2Fmz23L4ZKtwDayd9FL5Rof3oFfTTN6n0zNtzjuioCUXhPochxQTvpyynRpEKO%2BdHfAEBcHLxHbr6QF9SXB85FbwXFwn9otzAfScTvYhEIv9WF7uTkMfk2L9%2BLmCIVSp7gth8d1UQ8ru3aakQ3Zj0setmJxNDDk95go0GPJsNEhtwQdQOK4afHxZCr4%2Fm145q3wHIv3fw2xScB1A6epKZvLFFmZ88eL4yzLpGj0YFyHa%2F9gpPUOKtyMK7Cs0StkTV%2F747Qw%2BjOBTlV%2BkKrS%2FYPwkfyPaNlWOXlVrGnJR00QMktjaRJVBRIDT9csYiERWoVG7aMEYZiiAtCoWDAE06h4XVSezsTl0%2BJnfLu4rnvPyk0VSnf1V0fdtMWPB8p7Twwd0XBdGGhSp87PES%2BqW1TKltLu1zVlCnAcxTs85YVD7uCsstqgZ9810Pf9z00KM997erkW4VxlCaYG%2FlwrE6WZXFWchOiqEjTU9SNPg4Q4eCHGcqmyPhRVbuy8ziv9cIqD95mlJLk7IqkIROYumpE7KdvYsnsMgtzwQeJ%2F6NwDOOjybIlD8id%2FeZX7QStM4j3WTohKQNkNbzcNa97%2FNVJF6k6BjuWgwMNovrbO78W%2B2cn%2BvW4qJPCXrVL6z4%2Bl2HH5PZ3MAw2PrGyQY6pgGxbI9rHBP8JSYf8ftLiwtPIGdN%2BVgqoWpg6%2FSPQCdCo5xnlN632OQrw0Xmpab6dzVdMFoS4IuTKdb22wYBzePMniKq%2B0EgfvuSKP%2B41r4tU4eMguueIKPE%2FuMfihrIMVWEAjWZ6M1VvisKIDjmK%2FA9f%2Faoxg2zqgawrI3f2gxfci1hkX9TkKRhVoPMUz0tHDyGD4Q2uhAZd9dfqXApJFZdn0SqrAGP&X-Amz-Signature=33ddaf8a50647b9fd3908b3a3f062cc7f315d8a664e0cc8d1cd349f0d03e5665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

