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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NG7KUTZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEakKA5ISG97I%2BySQi3TxdJAtTpwgIrbMzo4N559jdQqAiEAnyLUHBWsRcfap9%2Byb2Z%2Bjc8KAX0UpDTA5xNkTsX78E0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL%2Bpp4zThj%2FlSUPMhircA4q6yHv0I5%2BLNsdL46rJ3zVlhgPI237XDw6sN9VV4P803Vab7H8ZPAiYqhaCnqqlBu9SmZQC2aPM3fgJu9LflQiEbl04I50eUgr5jg9xbsl0X16dvYyCKNBrsDs64Fie9rEyMx0lRU7rizJdvjWx90okF%2FnbevcreIc8Sc812OXjmUpsql%2BeWruBZ4hHdRJ4fYBDX4Um%2F7E0h24pXbUrREf913dWqiPwaA9FpycxobsiT5Jxx0oyAF5%2Fok6yMJt9nc0to7FJJUorxFJGqzcTZaQwRi19rhWShF0tNOxV8vp%2FYyxALBWMedVj7gJCN8CMuOnaTYV9F20HCFP9B%2BuPNjpGwxTjDEatZeO4M6sOjCiKJbOQHpElWHohTRrVtq9r0%2FpwMQ%2Bv7aJ3Lh3bsF57oBGR%2Fgac%2F%2BWnbFZkeVj%2FvVToIVhAyLolWkdGjrYa5RCT3Q80Rso0oR6piQ1UWlrhQDNwxk%2B8m%2FKGeO2LuE0jCSpNH0E19Ez4KrRv9QvEL5RxNPRrpRmOv5y9EBbD4lZXgfwFm9xjWsjw9x%2BgZEimMbUgMYbHAbywj9SRFv0afjdlCjMkskEAtevwx2T%2FcVO9aIDJPPFac9CgX%2F7CGiXIEPCMMx1AcYnp2iKEImSqMOiIwckGOqUBvN%2B8prTvZ2Lz0oNgg6VdkpKTujnlf3UHFkrNLtP0x9WWwqeVMdHJppS2%2Fv%2B1eyMKoxvwT2TX93HJKFbwSkNlq4TbKM5WVsLZa%2F%2B%2B5pzriUuFHyMuWQ%2BScfxfWBqvOl1kPnzCcqtcVjPpdB91aGkZ8MhmFBTg%2B4FLO62zEBm6hjFx5tmrPiQRjC%2BffnbLFDut%2B17q2Hqhu%2Byt2TT4z%2BWDDOvdAqD%2F&X-Amz-Signature=5a2e80b5ce18f2affbff665df3f2c0785ac78590bc0ba32e0c32c4bad6ca1827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

