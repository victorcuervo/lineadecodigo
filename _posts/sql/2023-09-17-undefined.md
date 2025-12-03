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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOFTZ64D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBUleuKZC5Fip40tCP2C0YPupP9gg3lQvfSeUMoP79k6AiEAiW%2FZ%2BR0iMMFg0oMHhAJoqii19Lv8V3IT16lEDEDDe3wq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOQevsIZeTg7LVtUOyrcAw8Ip2gb9EJY5LJ0Wav6zsdGE9R4iJYwhzSUx529GcgKwRknb%2F8FaN03WHPO%2FQinO%2F10aRl5bICpt%2FJHZCcXVEXSaP5%2FkPdZSVJTUq8zTWjyz0oVzHXM5gckN8r8JhBqUaGCJQSjj%2BXvuUesMrizHEfUVkofFfFwkcKL2TaH2aF0Dfwa3zcpHpP%2BTIRWvB5Td6skwQr2b5drCnAFxnqQu31lsOMCierT6UgfVE4D17U25l0SDtSzApE7%2FDdXoN9ogMmAT02hEr%2BehPPIEGBynIhlj2nQk5VE1%2B5uiMOcz1kIXVeljcM5QzrwoC%2Fu4I8IAl9cFiQUQroDFhaRqYvqSlSzcceumhR5zCCx5iRdEgaOAkIcZc9rucxG9gUNgeSq6GcgME%2BVQkFqb83Gk9%2FgYp3lh52rvzqQc22ZNP7ZX4eWAtvGFClSfVYfFPWdBIiGMSRPr8qhBlSyYU0x%2B4Gw5wppDyyLofjzgWilbmJiGsmEXkeyCBqe5AGLqDmjBowB4aqngXFOfQVTB6%2B25ZqURNZ2bAqhmMMqHQZIMCLHO4BeFzQutfqPfvjMrWXw1IAhtrRQkSOeO%2BOSbEgWTvXIN7kKTjJRL%2BwRvdpvBIrUev6oegm6t7cQS0xmToLDMI3BwckGOqUBgu08Ez7%2BwWCldvVOprsfhsUvBDFMCLeoVJtz2rCyj0fYJM8YaVEeo7tbJMvYrWY60jZfzqOauTqyjo5FUtksQQBnjf6zNfRTGF1weqmtzK5F2T7y5rVLGhnSfP%2F1fWKThTeWxb%2FYNmH13JWiswql4P1eHZuWG%2BbmIwY%2B1L1BhnMbyIWEAOz3rbGFMa0RjFJvzgWm9%2F6GiSdU2e%2BZq%2BkBeoUMol8M&X-Amz-Signature=9d76e3494755e95686c484be4c10fd3617d62c3cba02f49868838a5b92189e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

