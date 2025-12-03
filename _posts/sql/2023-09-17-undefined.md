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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LZMHX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQD8cdTs6tE6th1R%2F5MhY5BW5MV1q2NOdsWvJ15vext3fwIgH%2B%2FW62%2BfFOA51OypiVjOwq3R0PvmQVuhQ%2FfLJSRJGNkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAeWuqk7kDQXXUv7nCrcA2Qqtpd1kQGRXAHup4DD2S9ZjCWv5l94BCbhOA455gR6P5K2eORMMkPZoUh3GNzz0bIRxJGpRW%2FtPKKr061eIhrjRcs1bumgActOG5y%2BuT4tIJzNOU6DeNymxboaeHDiHlBughpSaTBRTGJ7S3lOwIRbRSkgDYdYbXzxcZxFlP6GY0oHR8s%2BtIRn5Kl79BysQTL%2BDYchHvVyRrJJGAA%2BS9fWND%2F7u7SxFn0d%2Bl%2BYYXVHnyhK45RkHbFh2AaarDJ%2BDf%2FJ0U7EBdC1kvlWOCppkus8Go%2B07a3vHm9EP9o7IcFBZ3d4BXKmYq528s4cXJf2xQlO6paUIGxzP0R7ARFJ7GN%2BdmWIFeOAMmagVq6HYBBJxZ%2FARkww6%2FRWoOGxCf61nxSRSzIaTWv8MoV1t6LJgWUsH%2FpZz3fRKIsuAMrZYZeTLGRBOkiPAcCjSajYxEDj3n5GfS5qS9vmROQdv6xkmBiWpY0RG7yX25cm4j4exEYy2sl%2Bj7LBIafN%2BNDafnKSCG6hubvfxB3JoSHjf1IqIH6woO56UXAcmddqV3WkCeJchbP%2BJJdjdz5w5PleRYDwRidq4qG4irY3xCZ745DoJJe9rM9jBq3DF3NR4MBfoohuzSXdwRee4g9zFHCeMJP%2FvckGOqUBq0CSphh6Y%2Bqcl2iytVI15ixOBegxpZ6NKajW8fNlRNwSqC3CUxWpEZY26pIEpaijGf3WeWnG182c0UJ%2B1Eev9QX6j3HtRKkTGrXmWws%2B%2Fx6DH1chNl3lXUc1AsOXkxlV4NXeHppJjg3JJp4OrxZWk%2Bnt2zdoQNsW64uwQiPbUqIFO%2Bv34hfQuQmbnxEE%2Ffa0rLYVHiPI64bBM0Bj%2B2AWcso662Ab&X-Amz-Signature=d943e2c543fd65a6508cd67a741acf5d50792ec25fbee05ce8e29fd5e1e5ab66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

