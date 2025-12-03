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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZJO4CLM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCtLqCX0m1d7n%2F1RJfZJjIiGFxMva0br%2BUOj0VPn4FAxgIgeKb5hE1lR52H4sfEi1swmBhwpcQ%2F6sPppmkE24VTVlsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFNM7tgBArKrlKfeSSrcA0cjClDQiGjDSb7zWpCcz6qXvgJrRPc42CL3YfRXNn%2B4jCpjyYgIPcc6NXz92K13IWOsMAP47S3F3%2B4kGGnJ%2FCUofBABd%2F%2FDRktVrOx0sQUHwt672WfrMFAjPH3AC5s37AnLm%2BgFNyUjuhq02L7DsCdCds%2BkGA8o2U7s%2BZtzgy2rBVuTqdw3bT24JD29eMdmu5th%2BZ%2BIT9udp6s%2Fqnvitc7gbEqClIaY08owa7ZOWBXMFLi%2Bfekb8fyImsT1HMhnz%2BkWR7z4h1FJSUxRYmz1hXENdOOIrpP4669OvA%2BY25CWtWgAHONQmV3%2F3HBtepWFey7oqjY1iWLRbEb0Iks4lDH1gYTMp4HyEryvSTdGp31czMxeSrqOtPG2G69pMbWi8n3Of%2FNn0aEwpFgaSViOAeWO6%2Bxb02nCm6wjTzQcGR0Y4GRoPO9h8pi2A7n0X4vgfbe5CW%2BWTvsIlbhZamibCF9Zss5wKazvBFVy2GslMxsNF%2BDvr9dpfVo5z150ZxN7igFOZOmr9ylQXl0QbUl0W7zspUCXDCJxpjtCkfF7XdX8tcllF4KtJyFwJqomWQQGQ8bNqGcrNzErMna3wl6lx0I8tjjt7KwWr51i%2B31KbhJmSHlf%2FmNbDjMlgqxIMNWuwMkGOqUBYx%2Blrp8FHTgyrSPXLsIPMxzADr322%2FbeiSOf4lYk6gPvIJLgyKtJ2WXFm8F0%2F9mJsHPinQPAJmBxoipf1PF9hjzKuZ7FOWECiHu6vokVd6htias4MlCEk87zJV9TzzXr9weClal%2B2ETUromvvveulEp2hX88HG0xm5L%2BSNaABjQ5JUSs5wkxHnuaQbZZwQbbjbUoimb4o6J%2FHvnH2MceIPEZW6FF&X-Amz-Signature=0d6a69eb3632e1f231f1f163d6dbcba5b924198ec80ecbad5b61187bc2703f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

