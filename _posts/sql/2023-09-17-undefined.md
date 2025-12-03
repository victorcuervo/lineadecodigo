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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AKO2D4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDYRTNi6p7VKuATL7dSKqdNCT9SCeN1W9OYB24hPjXivwIhAIh6G6R4xW41lJww6ZYfMuAXRB9j6iy13TCOiqBD36AkKv8DCDAQABoMNjM3NDIzMTgzODA1IgyhO77vx9Z3gSG6lYIq3ANOaA5VxCtmIHeUspDnXeDunWZ6HKwdB0w8897QL3%2B46XrKrtqNtpVp%2Bulp%2FBX%2Bax5MprRlecJE7iCEl7LVDkY0rkWMwCtgtClok78RDATSx78DJpLmLFJsX3DEgf656uTA7sG0MRcx4f%2BxsYSSBjMRDhDTRQk9p5xyCHv1dRFdmynFb0qHYPGZM0aLXn%2Fx6tkuW%2FoCRSP9JZY3neyAcrk2juRelfdOyrOEno8FbLSTFAZjTO2%2BtG5Gwx3cfVvMI9pMvfgvbkrqd2U5JfIG90XiCWkyXyqfopuNNCivkbo31BFAcvLKxbubdOVRHAvEvOn2r%2Bl2GueJZjbOrasWiQQzsLEagRFUiNuIhxwB2l9aHiW3Pju9y%2BdPy83q14TouMIRzqbhOm%2FbMG2ULRyoyw36q%2Be6mGoLpsvhdTOOXuPlUXyb1QsyGRuJ3jL7HHnx4OTFyMw4d17DpwLozzWNF7RL%2BCol5OsZlesjlRRkPwxtj7NV6ayzKLqK9ff7RbA%2BDA3v2Ls3Lfha%2Biq16Eplrk7UIPgOIyDButaPyc0eD5sjO%2B60ONbGhI9i2v0A7fROxaYrYHyFKLHU1iCLSRqG1%2BnUFRSp2MhPNtXnNEwVqTjLdMySUKjI8tf8ztPrXTCmpcHJBjqkAbFcrVHkrfg%2BjRSft9YePphlufztQKgwSa5%2Bi9W85OMW9rH2awt%2BLcW9GSIak1m8Pt57pdHhu6fMjZ4tIK7XHaGbLL9MYYT2%2F%2BHPsLYeXJzJqZ3vlBxJ8YDsyHaREUck4VK3UDJuXBdj2k4Tc1DziCwI3XS5mpVs53kKNW8%2BupnBXhR7PidkevoHJOQayp6rE%2BxxuV5kelYbpQXan6kjyQ4IvRMe&X-Amz-Signature=6b3c9ef43a0820d5cd2621986c9e9c534f3ed7d8900e6fc513c9d9b2800b7fc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

