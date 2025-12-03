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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UA54EBV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeibiFuzKTtoYeDknCyJv2nKllDlUFVVCIy53jdUepawIgTDpnW%2FDrA0VOCXgstNrYF5Ip05UnlKOpv6bJmfMgDNUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD0H1q9GGrZDgm5g4yrcAy7l%2FP%2BGCz96CefViA4uvxfiiydWM4uh4%2FpT99VHCdwMmIF71SDDSscSU5l%2Bje374mPsffhrBJhkMcHXVZPVD7rDclig5XylEY3fK9ATc%2BpCAqMN2NSXAi2tBAGqkkN%2BrfvaTa3f9z3cILfU3rAmsc4K7bNZYNSFTjCiY6aZOU%2Beku2%2BI5C5Y%2Bf2LMw6PvvDp6acsMmWp%2BdRfQIn7TnfnGhYis4UG2cXs07Xo%2FuYl%2BF6XWXIJ3AeDraaTekEb%2BN7rnW6raK5KpCQ0niTMjwAArpsyQtR8oy9jayWmAKmqWYga4I5DAIKfJHxUSB1h%2B2%2BjRU1b6%2BwiZb0CC6aDe0FWcpIh2HUBTmnvIK2SsaW%2FFRGwOUas9iRXHAfhHCvm%2F7vrs8AUgfB%2BK1YsKUR2%2BQLFkxcHNJ1f8DGttyD7spwOw7josVsiv79pJfasZCC4ecwefS8VU99CnXo%2FRjKeyRmvPZC%2BIbove64mE4BKw6LjDTuscAO6AKFiP7X%2FnEquoAC7R2lMvmyHY03bjyQmhtVOsAD08IW8eG8ZgCH78h5xGvw7nKOO8iFs580abc%2BeghEptbSIj21FwLT2BG1YtboqsRhHnBK9IymapbR0%2Fl2ItUQ7pebhXP8zvhjNHtSMJDawckGOqUBSvgbvG2qELj0bOiAnw5%2B6niXJjBfK2qk8W1ZiwJ7SipCqiSuzT9%2Fcr0636Iv%2Fq5DmYArvpTFr1hjUC7GizSlUWCI9I44I4y9zfPIZiIEGpFmczsc6B2eNEgG%2FHzuWgyVONOIj1od%2FItXWrAHXyQFtOFGGN6uoQWpD8H0KlXWg%2F%2Bu192P4fJ61NTcf9aBEi%2F2trZuOwUR72lV6OGL5MuxX698o0Ka&X-Amz-Signature=9b3d7c56bc5fe06ac96ddc776463375d04af380e3ea3dfc46d82358d0c696464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

