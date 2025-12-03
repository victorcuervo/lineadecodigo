---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFCOKQ32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGO1zRb%2FRwhnm5dDh98YP9iw5JYjOWdX2IZN2wK6JxVdAiBa7iXHc%2BnfOfZaYFyTOQmD1ZlbQ6UCz4FELAeudaC9Qyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMKdsmp%2BeHR1e5B7DYKtwDJTkH8m1gp6mV5rCTYwqsY%2BbmsmqrAFZqYHimlDrzx4nNdr1Wyk0sVIZv4dFQIeGUSSTL3RvLW3hV5WG1rdneKAAxQLkQ6S8Dsh%2Bak9b%2BJWIMReMA3yRYwbrBen%2FAveHI98XfA%2F7IKvBnEZHtlyGQ77iKE0S9FCoT4gXWCxbHZvVpcUzw%2FByXG%2B%2BArZlH7a65YLPwDSdkoGrl2sUgEsJSJqs6ykdyiV5J2oNghclh9mX3Rxt4Bi1vVxPSU5W7yLTe43vLsFPqIxtmIbDFAN0B57GFNFaiYLtECv7yKr24uzt1AFUOkVClpjVdWrY8mh1BK8YLwTAhysfC74x9HqRY%2F46CgiCZmupN5TFF53IUIeCaLUSWcCK3bAbSg4P4hVurO%2BvTaLpjZTOoxDkDFuomVhK8gu%2Fr%2FjaMCKnDhujfSsm9xcDwTETmI%2Fh5z9qAkSyoRa5PauvA2feZZgIHaIj4YZEBOmt%2BBGC2YIq2rExgNNJdHoKYQpqF6ST5BSs5NXwrriQwFzTGQHBKHH%2Fvx%2B%2F%2BewSB%2B1PochekUmNxNkgcclNkmSmyd3S9D%2FgputVwFm1ZjXmp1ae8FeQ%2BGVJ5UeMgmqspMuSUtTjOmf0E2n0q%2FlS2CpRqYO7ItXLrRf4wx77CyQY6pgHXKTgxZYUxPMnLwrp9Yi8pT%2BOmTwyLsLkdwPocM0WwweRhRCvn59%2FNwDxLf4G92i%2BcoLW2tk1j2g6l%2F667j7WG4jFcrbeBvamsG%2ByJvrVfbLtcRcAzGIcaV5GFeAtKbSfL6Qi13t9pvI0ecp%2FrzGoyGfoOg5%2BYTbHEq%2BwX3jTRhi0HQRkscQudyWXkK25JRp9uTZW0Achih%2B1vUTtmfYgwtL7zfMlN&X-Amz-Signature=c0abdbaddfb806d9ac48565383c35ae95a9793c7bf8be4ccf271c481c6cbe391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

