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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2R224H5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICx1xsPNwUrY2hzVmijDiNB1MX787HRkQN5ZaaUu9ISvAiB2sYqvl16g6QU32wttMSMDUUwJnylOa0NQegrjqfn90yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMKPeT7vIplJ%2BNb%2Br7KtwDoU7MVxsmeRC4HVSkkGiWaaeVM08EaHKbiprHLytXR%2BeHsAA6pqdtXt%2BjnvkDYTZMJkowQ9XjR5d4joFpYbmKJPbU9ascq%2BkOgHB8fbbt%2FlKCPN5XYI8bSrD4fnR2px1xC2WZSD1Jy769iVFlizBBJ3G%2BMAkjBIc4V7E4JvdIEjnhmJsilsMOApFD2AUAmBwhocA07oi9m3C1fMDLIa4vvDWaw5TJ70OoS2S9P6wFM1q787G0TbIb6l%2F%2Fm1pcSamVrCDkSLG%2FclPBF%2BHDhX%2Fzk48WUa%2BAqXiVyYGDo8OANEeBe6110upHaOxwc%2Fw7xrqqo%2BAYSGzqek1%2FHDqxCAOon3ER8GufP1DqfE0%2Fx4oDeIFh%2FobBgfwV4XHVXV6LcHT0NKYsn9g6tFVA9kMk4uAM99%2Bno8exFfNk%2BzpTBzQ74phId4CvokVht%2BTAFw9pX%2FfST%2FeJvM7CN%2BEaWaivlEITvcZ1Ajk%2FblBeiSNTDzpT6ZKDzBonWyaClo%2FZj9q%2BxSVFeqBB%2BxhDL9gElGiWfy%2FkvUff03XeTJFCxvKqsLL2aefg2e9sCbjC7Pwgm9X8Jh%2BRRP%2Bq3PwktVTXV4IBsfptjv%2F0bFlGZGFMzLj8VkLluM9ax7S51NGdgvFj2a4wyZS%2ByQY6pgEmpMqM%2FQwRaICYoSWU%2BMJIkLcMjVRvmkcipV2oK8D2CB2Rv3uGyOHk9zMjQHFS1ynvNLHv3jAinCztYE8lGCD606znQPeqJH1WenSL%2FZfj2QJT4BI7nlskmZ82IoJ7ZDbJFNXDnc7XXcragIqFobgErw0Kx1knSLdGqgF5F7V1myEsExbcJcrk%2FEQlu%2BUGzHav9TmQ52%2FNQRmLN9D2RmRJse%2BXS5bW&X-Amz-Signature=39ba17a6900f8c08f5fa072063834af2239bc0ed48db85acde014af21acf6d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

