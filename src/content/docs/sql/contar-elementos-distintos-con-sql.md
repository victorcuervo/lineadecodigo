---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNWURWTF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHr3fe2ch4xuXoP26UM01xhqMxS7Jqc5nJLLHFjl2xIuAiEApsVM9sXNc8hwCfuD3jMXsx%2FowjNqZTKdUjaKVispm6Mq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLkOfr%2Fm7hAXAgNPXyrcA9zJbmiapLnSqoNpW53KwXct%2Fl4bBmOPFNa7THPKvwUjoEFDif2p7QStxrXU2qZuj6JXn4DtMdRhgbOnUQ2QtwvyWVSrMqqahhVChQQUvzGRJ69yck6qkkTIVBQYa1FF72xnCfMmppD2%2BCrziuiMOJh13c3tPi0KjzH4346YII99u4Z83kj3CaWUDux%2FPEB382tTmJwKSZj1EwxkWzW%2BGonKBM2lyyBaE78FeQr8TEX3HiTC5JXQJUd7gHhVHqSlPMrUmdPy0NWSWzQQWeWFCUW9JT2ccOTUKofAcE9iY5fgEWrVJpVzwGNS9mKE3xVXHV5sz2eT7KgBr%2Fn4bOww%2BKNFNs8EFrfV%2B5AVoqUeltYSeAXWzxOPq1e4ZRifwzHDQEHyY3%2FNf%2BGWRd5pkSPjJ3a16IaPirW4aMRXB0mQ6CcgD7svk1LNu6LlTV1xtN9SKfe6Ze8SiS%2BRXlTDOG8cixKOEJGy2%2BeLospMLkCg68vZxq2yOdqdJ4qJ12r9bGpnG1gV3%2B41%2FgCb75ounaHwdEjA4YcnTGfWB60MJu%2FSBoLgB0LtH6Nsm3kPFRtv5UYdDkVDUtUhMUNfEpvJiC6p4r88aBgTZICwhwJg5kXDt9ZHOIrTXrPwjUWXocWeMNLyw8kGOqUBjprlqi0lY%2FMxoxf%2BOH4wx2NGIt0DUccH4%2FRmsoL0eYv8I6a%2B%2FS8zpq%2FVO2O%2Fewk0859I%2BEwLbcPFi6BkjAAneiIaBeMqxsceT6poMnU9W1J43GG9CBzfQGRdRRFlNUZH3EZ%2BukvxVri%2BFey6qfQMpv7gEfIJnUSGiKMUsZLyuRs%2Fq8lm2vcnLZ2kgCVTweXaEtibtYyKwjQMryNsKlAm%2BFHA2ZLQ&X-Amz-Signature=016eb1b84931f60bef72bf219371ea066d03c2656fe9f4d7abd9af9cf3df98b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

