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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKT5CVFQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICOfmlFBAAFiGNqv9YMZJovM3mPt%2BjXPwS0L87rLPUcmAiBRn9yDzRAPnwlKBshVG4xqpW1%2FI03bU%2BiTT2dzPghbpCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMtd%2B7hV1loIT4sqwQKtwDP6ZJSdaDWMP2RyvrUJNBlzUd5IH5JV1c5jH5LrwLH4lUy2RrB8%2BnHJZXBN%2BreUHkgfEi7KJ%2B4WKvYgCr6DPpUaJynl2SyWRSkIyAxuIJYvXE8%2F%2B9%2BfN2vtM%2FoEwucauy63This19swQNFAnBL%2BdXG6wa6Fk7HoQQpSgIs6vxjxaweNO%2BHVCipNAikTgBbkSfLyFOX8s4uXsNRLpqGofGD9ynha5Hh7vHXgJ85n1sBkU%2FVbMBrgrLynSBOx3iUoDVtRw%2ByD9ujKqf%2FWRcC6T7jNrLUUCdxufc8%2FytDutPswX1sgqV9YF%2BW7JMQJtMPlm%2FVBXXucpdYF382ohDDfLCpSdDs4FrSRH%2BecJAUIYTRFfuvko9a%2FShx4kRhR2T83pkekDyiEjhAEo5XkAiCf%2FoColl2dZlrLZDHk1rfHjhD4RihErV2gljbbD3Lz7%2Fp0o3LY1EBc%2BMOkH%2BhyESUJZci5eMn4%2BjNWK15buoO7cS9EfLSynGcIeV0V5MiFksIHqznyQ0aBaajOE%2F2dim1pAo5zbDQE7IOSsfai8Y7%2FBpiat%2BZXS4k1eT0D4Eb8XTdrEiTfItHwFkQvc776leUkjsYTaW1d%2BT5HHFZxhP%2FFwUuAcEuWNwZTl%2BoUPbeoQwyJPAyQY6pgGV2b%2Bm%2B%2F5kujlRqvnx2oyqpeblI9ddV%2F5mpaJD2EG0bWCADGRzqVX%2BgC3QM1D2IrukzKrTy7Orvims566XIXG%2BuP4VxZ%2F9QmQyvQRvx4uT%2BiqrekuiUvOBDDotWOcpB7NVfFVy5PYTXia5ZxwMM81YuamyeJyd4ny2%2F0dLNzfB3sH0zGangKn5WI%2Fn60SuXRJ9CXEhQn20TUS0hM32MqTXHY8%2BDNBL&X-Amz-Signature=f22327f4b6ce6db65dcd179cd9f8af14777be2db34c69461d8d7779a9c148ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

