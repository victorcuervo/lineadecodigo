---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IREH4E6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGOP50Ez1JM3SsRp8BSuHjtxQPl1R61Jhk7mnvixIGLtAiEA%2BYrRMBGCLHXCnGNimH8S4qf5OzekiHX%2FZ6P7GbGtm9Iq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDH62idsd747vWp2pzyrcA7jP%2B9D07gXX3wSS1z2wc4Xj1Gb%2BYoOB73kFKETl919JbqvXSDH9aJBoSoJcbVNixKQcOokacUT%2FGopcEW1YYsaMBl%2F%2FoWRX%2B2LBJm16EU3dnv%2FEa%2FyCGqj5sVuiXvDoj0wav4xkvDgfY8apj2plumu5EB%2BlOXoEAw7NxMdrWQYYWCmyh%2FVZxGHzKWTTTEn8CWDZDpH%2Fum0r3hfoTgCHJ8aXrETtYzCCj%2BWpLviym8WNv9WdiJeYk41wli1DUNUmiauV3uZmaJd6qSOWR4R3ISgt8wX9XFtZVe9gAFdD3ENtl%2FMynH9XsRnYFZ044pnT8H4aJG%2FhJboVsg7iLn9p104%2F%2FGvVdGXTnjNJGraRCQDUsmRM2vd02Vo4JI3FyWQIMAiUjpPHy7c5%2F0DGLqkST06fS5kwvpy02A6aIIXJ9e5OYM8XZ4C6CF3DFciwZ4qCm3nihSKfBju0Axlw1V9GFPD01Tfpf7qwb22jYjPzfEUZzhzcTd%2FuxLmhKZkxey6Qo%2FA13ZqDCispCUWuRi4%2B%2BybCtRAoChoVgOmHxySz76Z7AZEDw4y8vba0Cm1yYKGB8DOu4%2B1pW570xMYuCHPDrDjLKZRd9t1Plz9U0X7Am9xCT%2BdJrCJI7iALr237MN%2F4wskGOqUBNiGOdpOeQH6p0QbUIN9eNMVDgBZK6V76HbECWrWOz2C3T4eQKyElhpX6ek8mxMxSO29E3IEqWn6bdA1yjSLGKMyrX5kaaAyogUSGljOwryYMcan1lKbFHSPpBDLCSSvwIjTNb8jFgjcu85Kbvj3XBP1bxG7vmONlvtMkLj6VY4q%2BuUyG95vVHBZ5m3hDaD1MGZDHC9gNGTXYY%2Fy49G5A%2BjGz5%2FtT&X-Amz-Signature=e7516441b960ed101a0c832adf7c1d74fde2f152ac46240da96f9b20b5742ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

