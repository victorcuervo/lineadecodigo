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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K7PNZFW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDa6MwT5WY0A9SRGUcqLNRu2wY3TQV%2FQRYAWthvVs6jGAiEAkW1qQIQcIwQtMlxPfG2IeoJeFFTb1k8BYqz34o7fytwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNglbaukBqOmTzvo1ircA2MRdSNAhetteIg9tjnxHtAIc%2BVTt6ZunqIhcWuESCDLatTmz7M6tzvWUCAmx9uAr2fGIS1bvVOA%2Fpn29Wq6P5icbD1h5Qm8DDRUgBZcBxW6m23ylE92MVIHerslKXhjPIku4gO8%2B8SP46LZ%2FmotdhS7czxl6%2BY2GxiyHAQgJs0Y6cBauimQga4E%2ByU%2BzEkxEkXIcH0Q1EoKXcqpw4g3nZJqnGNSyf6wAu0gzABZa6xreoZo0QRQxBpS7wOc81TqReJ%2BAnrTSoN04fZIqgwvZRZC8O5iN64gm31QPSPlPCL03c7rxNC%2B93%2F4g12IVvR%2By49sGEsoA3pWoMO8OyRAY%2BjCebnuoSaeYEPit9oPFEeIFlz%2Bn1Ptxm0qZwLn8jZhcQIkxTHjWy95iSNMXFpUeawiC4huDF9zlSvd8xnW5PyTO1GkrnfEBMPeuybCHjwU1iwCKEIG9pVbI1xQ1t%2F5jI5DQcNJRbBLsUIcUjTlhoTLsZmhj5n3Vtho7qP6J0rRFf5%2BPGRHvKLM7qrsQNGPDC9iM05VcKdjBgaW57jD8EkH5D4F2O0GnIOrlPQR%2FjbNSpuV7urMR6UlnPweXrmGy1XUSTK4lI9hY16n34fROXuvA%2FFnDy7aPJyyuNTtMI2HwckGOqUBpKVi5U2favNb7UeLly2M7B6ic38Fkx4eYJHQczhaLZt7E%2BrRsA4Qbl7wFP46tMG8w7x3CfPZKFxabRCG18vJAMMCsz7O%2FTZSceLMXeZuyLaBvPu3j0aUHWmQQbl0ndERqLRRIXAje0aJHZjHemBLgxBCt5PMNYL6w261mYaEvObKvD082sLcEbhdduKehfPJHYJZL7mNIrg6N8WHKecX6dwqnRj1&X-Amz-Signature=55ca72093933892bc04c62420bcac55b23e21c9b0dc68aa9ea9609d270d462a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

