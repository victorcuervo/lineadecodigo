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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLHPVTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEEWR8FuFZuiAsW5howYw9uaEouJCAWlghiRN%2FPxG4ZUAiEAqUf%2B6bNuUw9NSProMN0%2BZQyUdz7BVzK2dO1g1fWqpLUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOR3DG3gUU654ZKrLCrcA4%2B%2Bzx51%2F%2F%2BgbYtnGE2R7x2aUpQaqFWGpyl%2FutXDr4Fv9%2BfH%2Bki9x6CYxrDujfvZlzje1zklzoC8fKZPnvgJVvH4BKJrDdvPpc9YO0Ytv2EMliKZnxQWlKhtL70vnyFIPeDZpXnMHn2KJ%2FZT%2ButeoRpARLsXyyEag3Q0wsBGo9hf%2FUbJM6xIS3lvSiErC31VI0Zd9ljWnz9nS3acLzs0lK3FFNsOSyfJghqL%2FUZZBz4cJ4BGhkFMJm%2FkqZKW2eDNShX%2FBwVd7TeX3F4%2F9JlxZ8%2BrFP8D9N2YuBytn%2FRP2t5znygM%2BCnS%2BFVevPrktaYPL8rHIjiu7o0aB10IadsuqDIJpWhGo1YImuwYOYpGGUrD4QgdRoMhHRmTWjRH285BmYewWGEKAhjelCyfR9jEufUqs5aRS4tHEpE92pe3gOPgYOwal%2F6QKsragcFrTDW1jztSqc%2BmmTLOMCEPDuybgIBd%2BwEUJj6c22PpvDmC9w9cZ35vjMIdIC9XFi2pg6lDP3Ri1%2FF68E07QmdaSeSSr0enJMUUUqHWa4XhvR4QBfmbcoHulcqTIsFMgAmx9iBRvLuDat240JkMSpQE3Fb5wES%2FisS5vsuBuGORN0iHNG6rxLBYNemxc0pRX100MND1v8kGOqUB3DcWcTVlyIZ4uwZYXCNwA3CAb0fttGJQgqVC3VXUc4xn7md5SAWYroQwPPUM3wGAvH0xBwdXMQ6DVHqYCd1wo9a%2FJ3YZ7uosp0dwALs0Ch2MYW5yuyncN2lN%2F0MFqt3aI5lXYE7f%2B4ijq7gUmceiISFypln3NnhZFbug2KyzklCA2Ves%2FgDcrDEk68EOWEVv%2F8YjtDOKKEydF1piO43pyd5kmCX6&X-Amz-Signature=95cd8437ebbcb57854258db158e21e726c38118c104eeebe05758964e9b2a5c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

