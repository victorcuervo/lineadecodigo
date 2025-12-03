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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL7YCTOR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD%2BWYIhgmXIqKkHaeKWtClUuOmUiYvDgxrKAwFC4vqH2AIhAP4Do9QPibjiC4MOMK%2FmEMEVrUYXtzCHVgz%2BKjDRoWKoKv8DCC8QABoMNjM3NDIzMTgzODA1Igywv4f%2FJCzNeSeInyEq3AP%2B5HhMlYQP4QdDpWf3d0A8T2QeaH23%2Fi4Zlde3ClH6FwbP1R4kc4pzS%2BBMoGTocp9cs4eeC8Tptzn7eIzcvBXrUYf8v%2Fe6tsI3D%2BinEobQXmianeunkQ0npvpNSCusKQXSSggw3E5waXiUZUQuxM4peNjwSSR2UUw9fAs7BicB5Z1xlsOcklagxYtJZCefA0A5UCgBbmqx%2BITUYCCajoSjP3dP4qQNEVq4F%2FWyHV06vTECu%2B%2FrWfl%2B%2FQr%2FPkh1YU1r0ApKRNDtEHjHUQPaIt%2Bco8SEboBE7tcV23NE0q5Sqvdlzxd7DDnd7PLc1U6Nqy67rzVTIJZdfPAdBsmhzf6hV6s7XVsyLwgrrO9Bux%2FORuuwR7pzNmHj2jyGadhvHQ%2Bkl%2FW4qubPbeI%2Fxbo395rSzkZpKS%2Fvput1AeOZrmaqZ15Mw7JBd8m2Tq37RH9Z7rfSsS%2BDK5v5edHpSejjKmPTddFI4e1stQdhyuDyfDcdgfHroR28z2qJIB7R0SeL3ni%2FjVG4gIU%2FEJqM%2FeCUgRWy6EsrvvIvu41FK%2BXbYbsHpwJ9nwgOBArhvWpS9tAb%2BRGcIlD7H%2BaabxJQCAV%2B9Fgb4J4%2B0bj44UgVV%2Bxx3h3h8mqZoaGqz4u6jkuRjjCQiMHJBjqkAbYxircUlc9WrIUDN1lCxAIHH7cHAaudazlrA4K6wC3dJCV055Xlba%2Fyxr9ToW5ScQ9JslJ%2BNYPzeJMB%2BHVekmbN2q11PQBquRavLJaeu7nouyOAPsIyjN0G7rsAFrXfD8R3LpW2LO06y75TTUqDhJ7jW%2FApg80%2B4jPoopgva3mXfDyOYOsaNi%2Ff%2Fgqk8lx%2FvcCu70hg%2BSDZZWc4YkaqjUgtMOy3&X-Amz-Signature=691af2489b8838611bb50340b1509d1ffda850ae439806994ed9a4c032a7e00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

