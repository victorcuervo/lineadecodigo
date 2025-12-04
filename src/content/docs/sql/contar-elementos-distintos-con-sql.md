---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOGDBFIO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGcopA%2BMe49BoyFHrJnrT7RughUVM3CV4b05Lh%2Fib4iDAiEA%2BAX%2Blzho9FlYRRREMq7UpE4gQG45Uc%2FjVqh7B1voJ0Aq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFjBQwEePZW8aRr7lCrcA8mB6UYPH9PzJyp%2F7lxKqo%2FF%2FeP9SVND4e%2FOLVqMze4T0twfrAZUi3vPBWqahSUlMcsIphkH3ifFJeP%2B7kh44byeCfAAXdZud0bhSbjxlewalBO60WDZJJrJgeBdQdTvxHuVzOY665BcEuJTP5hLgIP78W0lQ09S1eDx%2FPi2UyHcpDsyPp36DzLiyfich%2FSXCYoCpuHlJudiTXxqHvdUe4bCfj0ZHqlXtexOaJ86SQpNN%2FuHVbtriTkhq%2FMX%2B9wpjkVIhMDQ3Pg7bYyoShPPAXkQ8B41EOD2g%2BH3P%2FsshSVf3Mp3i0yunH3sNnd1UwHyELWwYZ4xKUxfrWgs0sTJ1PupQGpTTrUPmwbxwGSB3A4bCu%2Fm6KSvMtpzF4D46adCAXTtWWV4rYv8NIE%2B6VwZFVGWRmhG2I0FLAh%2BEDXc53ChpUI1YIrRSGkdaTcVqechfK7A%2FKh%2F0vpVesdcUDrWe5geMF3poWEckXukqB4Ufc%2BmB3kZ0v5o1GrBFaM%2FvOIhWSIOx5xtXmfrb4NypT9Rt4tXmb2u7sVjYC5Ximiy30IG5mUkzNONnAke2Rmqf2jV7DGWxvCxtlAE7KFV6o06nL4yWRf3SI%2BCw71oN1LtC9Es8NdjU353G0cnAG%2F%2FMIjKxMkGOqUB6lCu%2BhB6vVymKEacO7bDKdMZnpz%2BvdloGlVdFLSpeMC1mxV8560LhafMBX%2FJKRlzhxscLVKySLxFnNNg8tonkeeJT2S8V2gYEAfwk7rf%2B00l98mOSwkrtxMF1M9BpZBDQ90Go%2BcaKsw6YGj%2BDvfNFcyDQn9nD0G%2BOKrFpZGuki0YQGK7kY7ygPC1uJfX9GH%2FGhdNqKwobPF5CV5kiGPFqAn5QXjS&X-Amz-Signature=c74efdec468d38b01cd56c2bdc27cc2ac6e2f115357a080ad8b4c56248e72a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

