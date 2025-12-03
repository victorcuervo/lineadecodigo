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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRJP5MW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCIWfFBDvHelPjUk3WmwQ%2FzC2cWTBsu7BdtlYHoyAgBfgIgEr%2BT6a4li7%2FGsT%2BYYzp1QKVf6NEfXmFeyJPFS2pFcA4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDKYzPGQc0hunEzoT1ircAxrAabLxB1JWVIYOrQFWACnxz%2FZ8F8%2FabMc1QQ6t8d7f6rtotPrV2dN7IhD5rASZNF01fRxSeuFF0C5JEoEiOJdHyJAhDKkIxjDSNOGEjx%2FYpT3EPgIlWTgSkYGHiSyKbWktqla5y3K2gwJq56MPdL%2BeNQxZjLQ2Gox3j38ybf3iTJc6hEttBirEBGD7HFsUYjU3hk%2Bpr%2BPe8GFE8cjTE40Lxm8ilgGpzxlP%2BgJ0GogkImL4HovVBp4%2FAmUcW0H3BYmaokcDhQPUqE2Yc%2Fr5kn6wdud%2FCk%2BU6s9pcFX7skoSWfPAWeHiHcN68BZm21ls%2FhsF23Oxlo%2B9Nr2iKi9UWf2humlXxmyTSyn%2BQcR2BGVnBIscjDElgUeeKB9%2F85xFnpuDSUjSYyoxkXgl31QEajGErY8rajTDUTb0iGqi5%2FpwqWvkwEPQBVstsFTfDH23DZRxQyyJjnyy59EvHGtiSUVrvdNkyJ8EsjYFHSdj%2BjaeIVYcTxELQctqdK%2F5%2Bo1G3zm%2FbKjZzrSWwM4%2Bk9FBq2mVH2QGUPJrr7%2F5qbJRHTWTSc%2FTtaiUhNtQXpYFh7ogZKrlOTe2MHkj4xot9PeTwr8t9ZBxQY%2F3IELsu5T%2FfIFYxWAXLPSrrMUP5UrpMKK4v8kGOqUB1HWj4Zzy%2FWkQeeeI%2BEGzzC28q0FDmNrGjMX7E9GQ5vDbe4AUbH6U54TIy6bkjOwrVMgls6YwARX3eOUNLB1E7rp6Ew65U3WpILalgjfE9E5%2FYQGkbnOT%2BON0%2BvSQZtpeH%2B%2BnNpCW0J4tLwXFk5CN83rnKWEUR163y7%2FZmjwpVuyRh%2FN8kQ%2FuMqsXBY2YoOroY9QtTtkqblkDd4WmEyC1Am%2FNnJPS&X-Amz-Signature=e7b6c490e347db02345691e0657cda2d386e73f75215a7f8d1fecbedaa7361d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

