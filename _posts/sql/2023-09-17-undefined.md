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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466327W5SVF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFOJSrtqDpoiRShoua3SrOS4VAckPThIIBe6P9zUYFgpAiEAqA1u3jMoStQHavJSWxc4u4a62yxxKBN0mwnNKAtFBPkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDrSE%2FyvFc074VQvjircA2kwWfNEpFA%2Fx2ewFM3ZWeW%2FZjWtN6JjpJN1iYPtpQxFnDGgJ6erERg0drfj3ZdwMaYOWgF2xTEia6lbKJa%2FGnKTj3vhDidyg%2FxopQv9UTrqHPQnPdQ3RgpJYb8JE84Zy9EkMOMOLuGs0g7BQfK1AszEcb%2FFfg%2BTGsZKgqfWeCRApnjOzSWO8ZFCoY64d%2FvXHWdUvFz2vXNuhceD0rkl2yDITRq2KMrbMBLre7rnZnJMtsYv%2Bi%2F4XcRR3IVpYOShtSd0jnS%2BUdVDZrd51y%2BcI1Nb0hVT6nfPk5anlPygr9m5oylSJI%2Fd3504c83X%2FpdW647k7P0jlW2ZXu5yWkxtgD9%2BqkbUtOTCTb10x0ZE41doi6xZzIrWDRcx04PAtKI1xai9LUyLTnuAFBlQbARwABnz25oXuGkgiVQwSV5zIpSbucz07y6Ag1rHt2qHe%2F6s4zYulQC7xDrTJb7Ctif9mHu6HNRb0KC%2Bu2l6ypvpGKk7cPOZtPAJ94oVjq0pku%2FA4m2RvMnY7ihjyBpf8JBGpcxviug%2FTgO0j3YIlI%2BTVpWkU3Invy%2FzieJMvtAoTp6A%2BlR1bBKNLp7%2FPGiXq6EdyxQrbULAse4NEKKYiHJcP0I5ddLJ%2FYTRaogtNF2OMI%2BcvskGOqUBdDJaYrXGt6LfYje%2BN6OD0N6iiSVvIPw%2FEqBYb8ElT5veU%2FmoJc%2FpoOLaVRxDiFEtWdHk8tyPhEXXRfeFVNL5v1yz%2BOCcE83kYk0JSYYNRe7B4eNzuCCuLQ%2B8jjV03%2Bhv7BXrUiXlnUMoPRdPLCmjVb90FhdhfQK8ceed2aomPnVF%2FqP8KAUv5%2F2%2BC7dVFFWfM6cNOCb90JMaPg4q8043EoYi3J7B&X-Amz-Signature=4096583766e2643f381fdd0204026901df7d3b1280801a163d31e5d1c372bfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

