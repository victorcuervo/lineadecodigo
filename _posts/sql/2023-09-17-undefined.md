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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KNV66Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFKADpfEU6BaaP0Aq6aP2Sia2mWZe75PuhKnm0PSERUcAiEAupgXeGoqPSPvTcU%2BuC4OEC0bbXTa2GNIWsvoOcQ%2B%2Ffgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLCQIiFEqMEL9RUGPSrcA4zsXAPRnwfMRntuNWo4VZ4%2Bkcp38ZQtXqtIFUX8nMnXJBFmg%2B%2Bg8Bsg482Rsl%2BE0G9CnBoO6Ou8A0JogKjDTk0fG%2BJcikENAxu7op0o9DjQ9LL0dFUsKWJbjZ5Hjl%2BEVuNgzhctjyZn1rCl%2BFqpbyZbGOfUG%2B7PVmTThQCuK981nDBWiki%2FgEm7B4Yv417p%2BjI70Opi7IKm5O3zxFmVh6qQtJyCgweaMsYwlSimOwQZD4MuJ5OtS5LaGewH%2FB2X28sUD9%2B7HrE8SmXXunfAsC2cVzzq7SA7c%2BdaoigunZ4rnlaBHycc4%2FBCiMbbYaL0fmHNgA7OttNo70CVfNrsa%2BWdshwawd7DkCgi7V0rEz4JoeM6lH1uSms93p3DQaj0cFJ3O0YCAPDCVeeXoNswbzDBp%2B%2BHEpjmZpSXuZ1lHR2ke4B8c0Z%2FMcXNJpjxYloLChEzL%2FCcI5VO4wYYavvVj5YcsPq3wKfoSZaiRoRCUH0%2BIfKCB2G05s%2BjMdDPv2brOX91mPBHFgpn0N4xu6uL5gmWeQu%2Fb0FrwPciS8JaQ3EL2xTiHHdp%2BvvR1N%2B6BsEoQOAK0WaOpXH3tMnfUdBW0w79UGzik%2BedjvnCV42%2BmKdTHMXDbsdMCpCXeVfMMO%2BUvskGOqUBepx5ndhH%2BlFIyWjyVPULhHG1Z5XYVc3nU3CxS8%2B8XniZzc5Fni7MVH6kuMN2WR%2BSp1%2FJ00ianj2HNEAQIpH4xl64fTwxTyPAJ5ded8cGwSVbbLnlcUIa7YM6C1szEdUT2tXfyvBkxhZIeWZ%2FIXwWiqsei9UIQ3JWz2Xk%2BxoQv6%2F3R0MS%2F5XRhZRPdlr0L1ApADMnPnpFdKBe69xxfwP88xvVGTv%2B&X-Amz-Signature=e9752025e62b4fd9d432624fd1f96e377b7b7188e43aff8e2ec69c120182690c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

