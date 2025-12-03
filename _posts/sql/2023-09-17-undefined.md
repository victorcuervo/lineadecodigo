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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NRSIZ7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDDM7uWsn8WIXGWSsrxLjEsQ4AR2bc5lTXFFeKea44XvQIhAOr8z2WPO0dyHA0F%2BwF1so7V2UDd32Py8NfVmR%2BlUErwKv8DCCIQABoMNjM3NDIzMTgzODA1IgxGAHPnGocfP3BwB7Aq3AOW%2FyLVpeZue8mqrfTxONX%2F1TTC9mbLxEM0CKTtv%2Ba9h0MB%2Fth7Y6EY57AK8kT8aSsWEsG1Fp%2B0kRa71BX0U460QSsuLz4on9gt4cUrW9Sf2R01sEZN1EufkUXmRTZomIAFPHbixAqDEoYp8rzoujZlZ0%2FqVZdP%2BP6f1kOEL9WNYd6kkoaorkAclh7wlwlTozkqLtHdVE6dnVgCC%2FE2fNgmCvFdn9xxX1E5pSp%2FJu6zRCHEc%2Fg51CD1QSG4Bb29ceBs4oeaGr6rruDyBxY3TJeM6XztrLAC4dJNxDC2WvP%2BBsQUCTYmk%2FDSluX4uW1CHVgssLoKSuKV11s37CrnE%2Bk0x0mmevxehMPzjdzU9Nrm3bTqNDvSm18HF%2B%2BDKZDK6U3N5Usqi%2FxDgjok1M7E80KFbWHEL27attAGIpmUF%2BDLRQQota8vZPNL%2FnTcNu12VXPMvk73Xuma3uTcw6SoVC%2FNMihrcvcdSYzeUU39ZFse2XHA8FYrMUdki4tUKXxhzOSa78DtenaDcc6yrxZTfd4kb%2BUi0cNqXzOOX6ou0PyR%2BYxGmSEfXnr2oqrgC8H7MRzXUqBWNkUvpTLhJKDqkevKovHPtVkAZuzNGN8xL3TRQY7u3i4uKep75Z8kFjDKlL7JBjqkAR76BSUO5phAXTLop2NQno%2Fpoe9zC2a8%2BCFPEe90mjdfhUIWH5OZdhHP3ieC0aMsXziN7MwIMsjpTnTkSjO%2BfzauEakLh6HeUwgIkR2MlidU%2FJvgL%2BeodUvC2BxtNrlP1Qf4iOBy%2B0TE7KO6gblGtsymviO9g3DxJn0hUqNmHpfoqwKDc0IX2cB8diRIc70ZWR03XNisHonFGMTuYRIdkxbo%2Fueg&X-Amz-Signature=85f4f7b43003b1963f308f627027ff8827f642bc39c8aa21aaca8fc08b6816d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

