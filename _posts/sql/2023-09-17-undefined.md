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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WNYECT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIFGs1H%2BBl97U2ZPuFIE02%2Bh5GdhB%2FSiiN3kau1t2q0VPAiAnOXhRcukBy%2FSv8A3SX8FQzDqKF9OqYORLOIfDQ%2FQaeCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMORcPPszlLIxWCBtYKtwDlJPdfWF9gTcXBBRQUQYWPCh%2B57tpKXFMyv%2BLkd%2BS8IluxvejPndCgUHCIlQwjNrcebffFf%2Fb2DC%2FEtxOOKFudxooh7rZFLdmfkcJRNmFQRz%2BloSTpleB8lKqSeHuxmdOx12vvVT71eyI%2FACIk0xf1Cfhqc%2FENCACncQDsXH1Sv8mDNDnYP5sk4hENsPfuH3O3S%2FmJSBt4%2B6GEDAUvr42Ao3iY8mmnpzt30eEmP8W3rMivD6c48D07LudTVQ7%2Fd8XIe0yRmyDZBROb6Mj7FtRwEjv8fJcC%2Fy96eMjPfNnNkHGrURI1bnEi%2FoO6gbW66Lj3UjNCoJPUJv62aPiZFOlizoL%2ByYLlFg4njR1WCIesjB6MDUHN6WVjnAqkLP4hkMoI%2Bz%2F1YtxE%2FEezuq1XyWLIKfEXS17GEvgBahPqPQlPNMs54NIKyMGmpRdAWz8zHJ46Ty9aju4ig5XSIuP1E9c5uhEM8DFQgQKYN%2BeIxhNXcGzafPQ8JhJYTi5ypb4K73JwkrhPHNmb7zFbRSiTmuBcEk97t2MmZg1T%2Ftc5sbmffpn91V5ehSs9r3BgaNENuzSHpcVfFLCAeCGZ3nQKmPOT%2BSkKliVoW0tITAAsn%2Fi80Is964EjWnPyeIpMRcwus3AyQY6pgH7u06L9Ljyri73K%2F%2B3LZ3Ohf4fyx5FIsZ7SCaI9v9UgibfVw74JeL2zWIHoD8a%2BBajpxMVw37Dit0K22Gem5V62PuNnUublobUL4YuV5iIN3aA7F5YbyzH714WhOo83ew0kuHkUJvzSVA0%2FcXcXUTSWhlUQgxZYKWv81mZxGSrcLIjBFYWmKk7JqZIvJWsy3NFHMnuzeiKTmxVxllk%2BOEB7iAgdgX4&X-Amz-Signature=ae947a5fe59d21728a230ba58ee3fd23b3bed5f205c2c7dda3080cee8101aabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

