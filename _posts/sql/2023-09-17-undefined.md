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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5GIOMC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICYyFkTHw0rkZU869HXTWDhQMkGNTNtiAE4RD6v6mFRwAiEAjYMHCGAKjd2MkqsV%2Ba1pWPUwAmrUvQ2%2Ba9ZrLF1lzU8q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLqagchg6Vc21UTFlircAynre1HRrT9GNzU11HJHl4mmreUIQADk1rC1Zp2doEmXs%2B4K9k%2F1cd6r7Csep3dD8SExuJm3XM7%2F3twRHFvo9kzJaIYUb35Onyt8KhDjU4%2Fcm%2BC71%2FXqozXw9WNxEbzmVKqzxaZgU%2F9vLz5zzXJ%2FZVQpYb0llk3hVZuanaPVJgqCi5MkZm0iiuekQ7yxHm3BewuU4srIEgx747KMmaiOrCCaRzk8rmX8dbrdhpKbkFGMF3wm80NssqjY9cSytJNsvAHPglw3sOJ08w5d65QG%2FMXq4Owe0ojqlw4EePh0zuU04zOirz4YUtXHZI069yYwv%2F5KpyI%2BT4fWvV2OjmXzMMGBPqsdflqtOMKE4851RcbBIxkM%2B%2BPHfeevT2guxSW%2BV6VAgts946NaqzAoIdRM1XTcves4XqEUOtLmavIWLLRdhKbJf%2BHnxpIeIdbzF2zGcG20CxIye56cdamZ%2BDlSwhO5SKjJ07yvUrq8xYkZ%2FdtqRH%2FTohxr2YI3Avq6l6TUcxAmErNYeC3x7ksxxWAEgY8JtlcUU65oRdnLy2jPG%2FFjqZOZuwl9q9w5gP1cqfNU7uKlAA7GOFCqAsu7tavzufEdPg%2F65hhRU4pnXdzXIPYlZ%2FOwU691yg4LVKr5MJiav8kGOqUBVHLmZF8xoV7ZvU8qIEr7W0J4AMwe4Wl5Or244x4vxCqXwmS43IiSCWILXdc2mhZ9WN20tAzB3%2BtMWFcC2pruYuds8jAQ%2Ff%2B6fPRfUp%2BKyXo%2BSKIJz%2BCsxFxah8gKKaHvjEfeahs7Cex0Vts5LTKHmGcAaRJFeQrUG1dJog6Mla3D8H8o3LQXsuTtCBsR0ezrt77IzIBo0XwPrYiRU4jTrm6iYeg7&X-Amz-Signature=b04c21d1e46a0ad2ddd7785d80684f9aa353cb9a4b66e2577ab259b10efc546f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

