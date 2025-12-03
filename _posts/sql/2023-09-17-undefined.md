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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWZCXAW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGgi1arH%2BBKNwK6VvfMTda1aYupxce7qgB%2F533K8zIWQAiEAmfWpd7IXp%2FWSTXPsXeg5sEs4AgJa1T2QzEtdywsFTRMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNRiC3on3OtKkKyoWyrcA87y91%2BwRx6AIrf41plL3UGm0V1HvpRRQTsPfNcDx5mjmBskdyTiJvbR3RNkP0VVLcttMqDzh647TQ0NB0pUNO4bG7YM2d%2BKaUWzN9l4v9ykL%2BjVgNZrHfaHDtNAfuS2OtALUEhPcckfyyEtNN0oJMhs8uYswzxl0Oh86%2BsDPKtqgWYL54ys1DUf3BstppYGf37tVUGKmU6fadQMjUp4%2BOGbUFwy0gRG4ipG4c8TP6ZNlbyAMYavishlxwjoFs1VxGYsdHm0e5bAu4WkoPUriVeNQyKN6pf71Y3r6zlb24dLaI3npOQbxIcN%2BYj1Tm4wf%2B7m5Xs%2F0t%2FisLR%2BKmW5LiP66gZFu6A91qWNUxi3vDC0kG61pxv107ck%2Ft0kuRHVZLaawRDmlGSnJgsBMWDWchG8Kv8N6wkuMVXsQm5Yt1IduB%2FWUoprSCqKBfKRZsek4LZLfv%2BH1xJD8cUTvGgkQiSYPK%2FfSGJslSP6fo5zBqthRJwTdqd8uhp%2B23rV2JDf7A5Bf9gKmeBUzgnUGuJKFnVLCmBpyx3CK%2FYRkWngA%2BsrB6n1kA1wkjk1j2jvh10x6V2p02mmbw5twtOPeb41yMpnuoaOyJLdYOEDrE%2BinP8cwY3AT%2Bc5r4yS%2FjTFMNiWvskGOqUB189zH0nwU9m1%2Bt%2BNylF8lE%2BO3gf4AeEzm5gxwOsDIuBZkmCwlkl9%2Br56KDGIqPMNfkgK%2Bjsu6Ifrznh%2BMDPPCa4%2BeeECF%2BDAU2Tt68v360GIrr5HA78THxpwLg9Re7%2FY%2BEttfij0R8qxal2kDxZlWW%2FAtOX5FTQm%2BhPWIMk0AaHfVOi8WdfD7u6HllUfFupqPgNSdZgnkcbR%2B6JYlH2z67quET5B&X-Amz-Signature=4ae906c64237029ab1e5759aaa1cec9dc1f850a16b6c9ead348ee392b360c490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

