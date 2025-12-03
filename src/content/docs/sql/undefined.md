---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHHREBRU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCdiU8uz8tZb%2BcxQyFot2gDFAXOBIguPkFkBpAIGUpTtQIhALaF4YFxsCqcDf38Cp1PzqH5t7DRSqOmooeQeUm6nXUJKv8DCDQQABoMNjM3NDIzMTgzODA1IgwvjR8qE1wk5qJT3%2FMq3ANHlIRf%2BQ42qra4P%2FjjXpuenR5Jzgyw0LsJfAi60L4TgMMVy2vgvnnMxavy%2B2RNJOp70jAyOuN53YC1mLwTKz18%2FfkqnIy122erDIpB5uLlVeKKcHWuvAgAnDiUe3gtyuPUYqyxjcgzfQj3nKhsFYsoRPK%2FP462f1PrggT%2BD0n81k8To8J2lY7SHMPLlIlmhkYhjN5Z02KcWDbM6YnOTwfEUI6vdYt9Ya5pDRXT8ggaIkuUnQhq8UfRkrFAi10SGWCFzmb4g%2FcKY2%2FlA7fta4d9Mrez7sxsOqirQLrduiZawLioh4VQNU2pkkzhryJaBc%2BrB3Tji9rwp7%2ByKw%2F14ZfjPg8NjIEvzrXarCuK18SvOKYDN%2BYQA0FLMAjAOjXHdmEUIhHSFy2RF0RsW6OEuMrOEZSQu3updcy2LgidxPeOfEToK152IfaEPCzbFXU9pZDH12l5RXLuB8jNhN%2FFu0GdFCQQYzXZm3v5CsTVVcQ%2Fc67OoVbiu72DEZh90Kg%2BUYRoSuBKB2y%2FOLRaLRcp3n7EJ3hhVYPPxovxmwhiwZ3y1kYWjeyTdSC6db8QzvMgmFxx%2BZ9%2BeAxCtRz70NvAVwQrR8puPXAtPZfAJKndvcMl0trN4jsAwCw3yk3XaDDWkcLJBjqkAaenYhr%2BZUSqwMncm0jCHq6hsiKGbYhEclmKiWZp5sSN1JsSiQXwbJMmz7XqGF8t%2BIYE2gbU%2Bn%2B0ANd8u9hEvSMGLXR0FZ0VPDtGKJgsWUshDBnTqo5uahxB5nUcRJ3yOM%2BNpuG9ZcK6rSOLgU8pZswcdgKh%2FKsLg3V9lE1MdbDQpvFuBN9DjhfmKgqqGhDzlhU%2BXU%2FtGv97ZsHLIdPvG5zisIIu&X-Amz-Signature=7e218f23e7307dce9c6c19f2247ceb0ad9389ac79f8a092ed4b3d202e8bdb17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

