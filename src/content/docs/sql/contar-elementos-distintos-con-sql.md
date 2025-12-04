---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA3UT5AR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDbg4QvIx8KJNCmmTtCuCyjOr7XNzE8u8P2Z7KXOrjtYAiANJhXM8P8fFIn3pNv1Ej1Di8Gb09tea%2BUbHIbg12XvQyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfCR8xXUjdQK1sV9WKtwD90UI4yXDFQ%2Bxh0DR84RcuUm%2FW3EoLo5HQMfjBNYwl%2BQ5JA5s%2FlhhcEf04ufssDMG9lhQoP2MI2Z5qoE61CSV1GwNrTI1re%2BMWvRJJ43ugXZDikbQpaZsDx0RBWLEt01%2BdNzN25mnz4z9sD%2FPHSF8goLhCiSuIulEAWcat9ZBAEVlC9qcxUzPi3NG7wk5ok0AIIR8CAKHFiNUUrFJg4ItU%2B1fE1ijckhQp%2BVYoEj4jeIa3m2G0h1nFY%2BWs7Bqg4aHt2UD7EGWBm%2BoDaOLw3b0UXG5DKK2cmM5twNFHZIedLlXCcjtS%2B%2Fqtk%2Ff%2BqS1qgn6oYJZ0UxoiTCZ%2FZlUPQffJAMxzuijqpZl4gQZk6WBqKxLEeO39Ir2aOPf%2FgadQhNlDGaGCslfjukJVKEJrkvFgjRGywqod2hLP%2Bu%2BTid6EXrjyQ7t%2BbfEM21qKKFs7Eeutec6NbMUrorHNkTkSdDG3QFCxjKuxR8ts4yzEik%2Brl7W%2F3aop2R5dyDXJ46T7twILDLfXfgbu%2B11WWfUzA1uxns1EyZNKArEB9qztm5xZktNmveZ8RuX6WsNan4vqY7uXSKQ5M8XzS%2F5SQU20BakG4l8x1onw2bAqHvvcTdi6bs6cbuNGIpM2mNzpRgw%2F5TDyQY6pgHlxUC2gzU9KwMUZCplaRmOUiLaTuqXZuPm9W85eVprU3LEkjRBNedM00bLg%2BOrXONxxNOHby5GUaVZMphxhAMajWSvViHfgP4KSwNE25WKo7YQMN2E7ULCxnkDBgwUX5ZvcDHsNp9EKAmR%2BDUEh6Cjwz%2FVMjlJhlsAqOET8dHzlgCEtGrDFDcxAmJ1CszsC2oIfxa7zdwJDOmbGbaJB7LtqrJ8t7TV&X-Amz-Signature=eb10eb65e9b740c53486db5d39920b161ba0fba0bcdfea7165058fea9aeedeba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

