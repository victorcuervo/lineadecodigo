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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VPJFMJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIHlaV9ypdc6LcW03IjxKiA4RzqL67Wz%2B0hRk9oCmgEd6AiBNB%2BcYNzqJ1Fy0zT%2BvkEAqRCCh2mn6fiGlIO4FPDOr3ir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMjqdOUF%2BAyIXx7uOaKtwDpBN%2FT3BmHz4eZaBkjkSx66DRlYMHY2L7mMT3f8xWNzpnxhIKcAG6YwkaHwntDJwzx0t8VwoPgzddZKcj%2BXPshuMeqAht25whjmj9XrimPPzVy0bzMGHMSYS9HlNH3VRl1T%2F250A5KLsUyVavuxlhd8hYTg66V5yo3i5zgvXfAIDZ1WppyLc3BsmMkUVkvIvBzGevyrpsk47GhT%2B2%2FTOJavSAPYfp3V9IfzHAMPxIGtlnSKPNyAkHQfzDuxclcRYPbDv6KL3Y46aKRHTp1IMLXqev7aIxoQ2XAYId17HMKEdqFwcHa5LyC1rKSWd8MIg9WqKz2cDyijRbsl1WMgKTtlV6KkraFYeqFYzDmZhZHVItakgHa7yACerI4z%2F%2BekKs1DAV878U%2B6%2F6TJp7dZACpalozh0msAOnLMtnmUYgtDDvFjtfwUbwTL7%2BJIhUM85ovFB%2F4ZpM%2F8puQ6L7bDX0ncPowsUGrl5S434sPhmOdpXJMuZ1owbqUgFipC7fBcFpa%2BjHYrJp1FNKBGUJhca%2FFcYtsJngHYOWPYAUKbqV1ke2kkCeFYMVUihxeahB3wc7UtGsI4Sl97Y%2BaNAx4Xd9yiL8PF9Gi1wklKQ4Q%2BXcDmmvZeS%2BZVPffoJkhqIwlunAyQY6pgG5G%2FA%2BZooEJ5I4VdLZMdA5icp3pRfcotdInDFAsEUQjOEVD1PWbM%2BJQkTbexfq8U7gZkVmQsi06uzxCY3qRJ6%2B54ETS5CqhpEPVEbgPLghosl0WUq1tje5o2yzLGDamOnHaPAM3h%2F3uSP3a3%2FmiZ5OmEpnNv1ssXpfXUG7jSxulPeP9w6ASOZW5MpW2p120Rg8Qn17jaxJu7IO5GZa7js%2F7CaaeeUr&X-Amz-Signature=9c54c8947b03d96c53bdf9ef77f9d2beb2c0dc77cdd957b0d1ec0585ff10fb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

