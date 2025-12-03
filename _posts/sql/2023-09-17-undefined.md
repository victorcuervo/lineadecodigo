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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQRZCTB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCmjdkJmcZeFID2Wk24BvvAS1Q2QTnHKVP9fxV%2F2DtxsgIgcAlz4D9sYjuFNui5SocGSgdLMkCmasV9Snfgaq3j83sq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMca5goYRMh9Eswt4CrcAyygZtVwbWgNjCi0nh%2BM6fy2w%2FkTmw6SpjRbFc6cRqbswOEjBpFr8OAerNMmZ8ly9%2F%2BUo1Qp8SFL2V4p4Cj4qUYDnkco1wC76LC%2Fq%2Bt1y1k0s83PP31NhNfItN3QAin1mFMF7VTNLjCp3DzY%2FKn9ijRtfX%2BWDp8lrlSxzEA%2BNr13Vop%2FOI2a3BPArTc3oB28iDKDCL3OXVHOX%2BO%2FSVIZiQynQ%2B%2BISyaAoG5wp1aJytBazZA5PkcN5JPq6U3CfXZkG%2FaipHOCeV4LB08JPEZG0hFocTViCduOCCAy99m2WybmGmo6VYypOoHArTK22zpeXS6aUkdCPID1LhdNT7FLhT529Nvv9g5OYZ6j02n2S%2BTQQ%2FXSE%2FcllVuOaiRDgk5fKK4L0x%2F6InvSQyNTlmRyQwX7g866imXoe%2Bk2UT7rUM0fGJ9EHiO8S2PsMn0M4eVZObTG9%2FCjC%2FRspBiPZicmgzBD3t8RP8DAvjuZ5hbCnZeEYkUUuXIZZ8OycSLoN5GfYOEnvfax1O55jfUHIAXt%2FMBWi92FOjh1fslJ9qFKUdREvIYrC5Wd4iuDBwoeAOOx0gPWbbGM5puuts8fIkb0beu8xhEO9%2F%2Fbp%2FcTnP0U%2FoRuqLcuDUQKF4mOSdrNMNW5v8kGOqUBMQ96Dz9RJdxIyLzPfPTUl6H5fn8e%2F2xRTF90kGFrOGQ0GbLMADoaRlyKaMRUtfajopw8gXX8x2SA8EdmA29bjZ0g5pvjQUOpt0QHGArcHFn2bEQX8ilp0aGTD0e1XU7PPbyOiYJn3udmnK7nO8HbyQxH5KoTCiLGYXvHkZNowKs2Im5ifPusp7l4O0tCQ2dz%2F%2FiGJnfM%2Br0%2Fzp2ij99GiEoTLU15&X-Amz-Signature=b5d970b71b9566b1f6d00b622a3e91a2209e69895dacdfe388143d8179d03e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

