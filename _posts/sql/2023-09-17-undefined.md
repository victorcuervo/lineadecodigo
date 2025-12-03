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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6ZWXRI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDIE23E3re1DAQI3Uxo8ZxPKRBTQI4Gp%2BWYpGj3PZ6VugIgYwyIlCGd6akfgHhSWeaZmrHzBiVsqw5a%2FMwlmlXZlDkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBjERub4PpBQVDVBdSrcA%2Fv5WvYWDRn9RCAe%2FHnf4PDyLvJBlzFMFEep5MouHaQold51p%2FPOAly8SLkOds%2F0Qc8X7TZ%2BDszIbTVKmyaaXQefMkAnrjictUHXD%2BzRMOmD%2F8o4lkxU2sD4kx%2FsvhvJttEz4ZIvaJeo9Xmn8rmY%2Bf6W0NYTFp6QsTtMtosfBaVFDYCEx4eHAPqjTnfqWn2ASbkIvYYpNrsyWfGvW46ZmNA5GAD8N1gzSlidYVvKBHqOcWzb5K8gbOQTKxKgUMAEUYciChZte7PrDiBtBk%2FfuPaKv1Ymk8yxq5MDCpmrHNnLvPRJkrNy07QRmV08WM9WwY46SMtjapZVK%2FY9ZD%2FWZuP00DOF9GPV4wjbya531mjTil2xXv0xVe%2BRaByZeJmgGbtyPr0SJgtdq2cwDaNdC8V8se0odIUkS2lXzDzBT9IDLH%2BpfCeqy4OPnsQGUMPJZpPgmVYkfWvgdl14MQdcfWnCn%2FhUrmy149F%2Fr70L1nFWTJjbs2CLavrc4IPQL9DmvDYbeDOvvOstrw3Qby%2BdtwN9vMNC6itgK1K2j1u%2Bcc8Ey7XG0gT88G2WKHciPhF6%2BetphJI0%2BC1i49XDoRpo8n5goJeM%2Byoi6j2jhFD8vjQ4D6oz%2B9BwBEVsV%2Bl2MK72v8kGOqUBNHYptiu1btslyDZ9NDwRDE7bZWfJq%2F4wWnHTPWQmupdKpJQloJFF7hsZn9GHfT2OxLKcyoFvAMeM1fNIdQcydgcrFVrVafXJtYYVqYQpr8AvuQYG9TXZS2m2J9AaciQ2GBUrn0bBswf7SLz0l%2FJqrw3cSUvLxhyTdxIazGOeOJG0msLaMeBPgyMUy%2FfgGFAz28RExzC%2BjYHiBfIwZ2J5EMkNfY1p&X-Amz-Signature=ef022bad5506cf9fb350a7bb09dbaac25b38b848adee01a80dc4863ccf59566f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

