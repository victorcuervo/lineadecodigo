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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHATE2M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBCynQdpQR4uh5BLNnicG%2B2h5riHCR1xT4EAhyYGox67AiEA2or20DUXT8FdgtHNOQRceIs%2B6nn31KT6ssT%2FfBF0Rxkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDCpGUEP5zmk4xbRVgSrcAxXT4%2BRZNWSyX6E0s4qSgL5MPb2wmTymxffqhHFRKI%2FRaxY09anf7FhDcoPGXzx%2BDy%2F2HNOuYKyxNaIQuAeh1ip6d9eNyFbxwio4TqtDZkdLrLS9BTT1j9g%2FBgkvQbFSmTChwEvvHvwwP%2FG%2FlN%2FhKA57gSCOFwymyXPO0gy6dHjyWimQJdkkttic3mJlNZoBgu0%2ByF%2BolhN0RB7E6s2kIUUwxG0F47ILeHRaBVXLb0znghxj1NbmnaL3QmdsoWrSvy80%2B3irdMb2VR8Nyb4Uai8cKPeQqv5hp2uAg10nq2Wg4hXrgm2OIIb6kVeDUfAbX2%2FasopvNXXRptukMJ3gJhbhSn4jvkK1%2F5Z%2Fc%2BT4gLenmG0S0Ha9qGPZ%2FRseY25l8pFLtPiMC0VgKjTUlxOGJBsrkLCkLJLN4YcnI7ianOvJfYm6JXMfapqk4v%2FdZiCJFDJz2PkOv0IOzw%2BOWvZ295vL74lm%2FLkBm6Ot0HvC7fuKxppInTcr4AOvg5uz%2FR5wU%2FXmC%2FzqjMZ4Gy8nPoN7X9V%2FD18R7V5yexz8cc9EBjuDfVse%2FevXh0Kbcu%2BUHLIbqM0xdvl6%2ByBfTiXQtHCkAZDZxQ8dKJ4%2FLic46DmFYo6ydQLphbUJiHxaFHGAMLGSwMkGOqUBIl7uLSmwfH40416LD9JgwFBflycuNERkjgebQiqFItQXmJ3wV46XIBsZnCCBiKXOMJe9DKXHVrWH3V0AFZ55%2FTOFSMon3YHIms39hDzKaAkhFQEA3mo2J9rWQ%2BV8J6dmTjT9Mf62uit%2B%2FbtsS%2FbRI7sPWKVkp5NNnXc%2FwhoDBqR7ER8NE1iqI0%2FGCUJKwbZCzabakqgRymRi1V0If2wAA%2Fm3t7pF&X-Amz-Signature=7a2a9c0eee3a0fe0b4e80363ca9d333afc030c328272183e8142cd7463d29f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

