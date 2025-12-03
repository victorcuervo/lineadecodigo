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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHS5BZT5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIAQvSAQay8VuOe7MTw31Zwa4vfz46%2B7qQ9OvA%2F5ouC8VAiEAg35JnDVT14WWNPn3WHKZkYFLUnaGdNUXJ2PgAJmfTLoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPEAO%2BL3p2L0HSnXmyrcA%2F0Vp9sQ9%2FFUs5JS8ZgDlL%2B0P5c9%2BTd6Arn45b5wArpycNBcFfMWBReFXaxt1fCCABRV1dnG8LOmeAOOO2jL3L5QLXq6f82ygDUx1v3nvxIygIey32Ec92%2BgglAGpDIqXbE2YoFbd3WI6F0wapKvngJYTDd7D8ed6uMaBRaxX5sjGd%2BhStrfuHDrGQLdQuS976fUPdlNxB2OjcZoirJcGqVeL%2FOQp%2F9WEeK9WhXMf7V9zD8KdBrkAiFsfoP%2FOcwUJZCfyoZLsZpbmPzYpPcLJ3v8qc9sWba8nQ9bcNGbA9GYbZJeY2R2o496fbvPB9rKZMRm6DNwlkP5CNMnboonsMFkyd5ooDZ6xDVQ21q6eiCIeYBCRh4htpQDUiOOK6J5wQpSpkHWdpPodz9fT5nvsoXdpwMnbquGPJhIbvRS5i8%2BTfk0E5ZX4LK%2BcIrZ%2FC2HgHsftu%2FEoEXAz9teHMR8p8eN%2Brtz6FGHYCv6LcO6%2BJQNxIOzZ3H9fcJCQxl5fJuXWc0E94HvxQDhlzUTf%2FvMm72Bw6NvnpCAuK3SpUPTeCJdEyUrgimNbQMPUeDg4Aflvf%2BdoWHV2D7KZSX8TyDbNfwkyFSNU3fwc0s7Swgb4bpG%2FUD89BtUbn%2F6F8tVMMG5v8kGOqUBboaE9VodxgkEBYL4RRzZ94ZVBhP01Aup0kxcatOhLSstDziJniZxQpGl528LQWh5mkx9qO7n8w6UhU7O6XD1ai3IrROR9I4%2FRYqoWWvlU71CdU%2FW%2FD%2F23qATNvYQP7pMMwuov64NBnm88EDydxGZc6wHJjFV9B%2FKFcUpmIbQiXKHS%2B5z6L%2Bj45ikIdmj6Ds%2BZtx%2BC%2F4B3wyNKxMX3NGmBsKZa%2Faq&X-Amz-Signature=ec02e57b0d1ea5e791f76a808994bb145ebc84e4ed4f98187b8dbd339177ac69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

