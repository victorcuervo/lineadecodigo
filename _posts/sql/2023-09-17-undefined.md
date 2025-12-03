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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NIJQ74Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDlAhLRAOeZ8I7nJiL4Q6Fo4Jv7J54whKsQ8osJoyEcNgIhAI3C8aMIADCE6aPO3s7wHpd3rdBzyKA%2FKq29yIKLMQ9NKv8DCDIQABoMNjM3NDIzMTgzODA1Igxkhl3k%2Fb2O%2FMvW69wq3APUxnuGGV4AhR%2BHwuhwUrHosh7X6wy7Ap3Rd9YFKu33yZB2%2FHO4UJs9O8svwOLMCR0Mqbs6ZITrIfpX2%2BLGl6oupCeNkoaANDR58WrWWFO94BpOkuXM%2FxwF5vPXrLOxvGzntiW642TmiU64Uo88Ek34A280RW%2FwnFOMXAnvsXIJ5VM5%2FPBp2onnl8ggkBX0pqMrtMVDwGCMLFzkpNzRcIz8canigqB9V0oeyqn43PsCRs0Z97atihQIROYGBWnXwfrE1%2FC%2FIbMK276tZ0SyhVzRT14KjdC66ViNruxXSskNFJsMMJt8irV1SeCK%2FZV6YTyK3ZqtrRiPZRdrDsw%2FbDJeEzuQo72A%2BtDIRkxg%2FPRAmHtmkFGteeoDLSGbKMQvPUmIELSyKEe8s7G6hiAeTnkrcV5QAKGYdY7eclnNXUzSJ4VixcYQpusJ%2BalS5wA9CBRpFjbI%2FNxL51jGimfvhtYMGIyX1sSM1ivfgqxW8Uk4HzlBaTd52ryGQN%2BPGwCP1TSCDsPvsKlF%2BqEqQ1snvdk9H79FqO4PzpZK3pc6IU%2FnfIpwzjcOrkTZpb1y%2BNng%2FZF1Rv9zfgLaseCXYOrGTtnVE%2B9RyonPwAkEOsKuFtXUyXcaRV2xxpqLiRE5OzCc2sHJBjqkASx%2FFx1KCgOz3FUsCi8cV5%2B%2BAsjBKVfsxR1N5v%2Fbtmo5kl16Hb%2Bh5VrCnuCNfBidwgZ8qjIugqOnPcP9cznaVo9ahSP8KgJO6oGZ25qe%2FxJwYcMix18D7skvm8PA92tKRPyu0O8UJ3w07F7NoBa4msPa4AalucEFw1xiRBP9HoexjXYp8WG5IznXpmHOTXlMl1GrO6nGdbNvcvPwePs8jmRXqzZf&X-Amz-Signature=ebce66b7264960b63fb52dc9e67fcc31c2100ba241de1d0683705d4f6c392c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

