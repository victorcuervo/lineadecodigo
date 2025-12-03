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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IL7Q5HS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBr2DIOxnySEyQxNFyDTkBR0XItpbIqRCQ7Mj48xzNyiAiEAsmNKuiBkZQ9ACNPxBkkukZWIZ7kyLW97d2zGNNG8Cbwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOjn4I1y4O4cxwRTgircA7XbIkAnHCKYvPetndDbL5Gv1MnzTvB0Q3VnPDNpaiQKODLJDPkoEGz%2BXy0tO2gzJtWdj17gCLPlPZNf%2BmgC0rHDKjD50%2BnLKOJg1xXf527wxyk3L3tKTLM%2F08Q2ivKIVaBCR4LJyynqEQGTr89BwMUpcL53Ep6TCIl%2BVY6O%2F5cYl7xd7gHzzDg%2F6ex5jF8TwpzXitc99SgLuB2I7BRMsxZt8NmMtJlxfbv0h%2FdvM7MW8aALkgcxh1ENjpK7sAo3HnRkKhJgEIb3t9Gg9yZ2wqsrqQ28NSiGw9z1CirtYi3fKOOUFVLPkPu%2Fd3DSTk%2FCANQkVtM%2F7uK2Wjc%2FWb5EC9qlYMBljiiFYGLx%2B637ezzswx2xcbdCxURRL3R9bzyP0wuor8QMch2BHnVGINmbeTG728Ulix%2FPc5BnpRq2bFrAYXSm82vNNAEPyPNkD2SAH0tz8r6wF8VstDXXw7LkW4XRd62KjpV%2FF1DedKwNGNNwXPEa5eapFLZ9FMi8ZZpEZeua99MA885AsZ5iqFOmyDlHpGijj7jserjdaPWp7dboCaiXC2uwYbwa2hRbm2qc7pNRZSiIYpJEROoOrgjlKUYaodv8jiu99GipNG6R%2FgiTvU2wj6RbQ4vbnR2eMKTrwMkGOqUB4P9YEDortIDEnnOG%2F1Kf5HqQ4W46JLcVYZjVwqseMTS6CDQ8wJTxENRfl9fVhKBX55y7yEGA7OXLyECNjMdw4PvXyBmWGIKGrDcirkRFOsEhpMKkp7Xva0nikQxbdOm8GtmorIKOVEZgkGXF40jI2W1mVxwkKRQn73bPnd9FuE4Rx1lcLbnjKiglTB%2Bpe%2FaClwriKHF3BFR6GXMIwAlj%2FDcg6lCT&X-Amz-Signature=2281bdfb35b7e86e8c08204c5a2805a7d4ffce703cf596560062d8aea81c2460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

