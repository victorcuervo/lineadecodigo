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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A63L2JJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDWoA0PAb2rEKz9tlhtX1nK0XhuXSUDPFnL8Qvfiye0HAiBKrLjJA5lp47nMEtmnCL2zRutow%2BPdtauEDzz5dGNsaSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMd8WYC42YBw2CLx1nKtwDalpzTopYkSUB6%2BsJBZeZ2g7KjcvPp%2F0WU3Hnjdw%2Fsh45QdaZtXocuVVCZVN5h1G3hG4DxVnPmuViDxp6uE8%2BwWNpIhx6v1a%2Bee5d9%2BiMDuTAD2vpDMpRTg2chQ7n0pwa0PINY7Limpa%2FLuWvafueJ1JbLauCfm%2B82Lhyq79D4lBvjrEMrs9nZPNbVkJYPeAQsDJzqZVuQBHGL4F%2FXDIjDp1vtiismiP5C4mFVwjD%2B8mEbY2yKJ%2F8BmhO%2FRSuOBXevXIFa3o8oWS5JjyHWv%2Bj5ddhiBryfOnhkQ9dXnmWH4kSLu1Gywt5vRIcSaHh7EbtxLlRTwQblMaOwK2Fyq1P9OrhqORxaPUxvv5qxim7X4EpRKDCbulJT2jaHhEHRH0do%2F6U68zmmPeHG51KKyPcKKnO4pxJ5Gtd6dF2PMREF8P9o2GdRGYlclOOfmPvBBQsjjBNfr0ZKhRTMLl5fIQTf1JL%2BjHWHF%2BSmnapu0klZ%2BRQtVOtUlMx7RQ7ju53w%2FMRKG38ra%2BrtyEa751lR0JDjRhm0FCPJePT82qr%2BMidBDrC9XPrjjb2Ig%2FYhifVNlhSa8Cf5dWiaB913sepix%2Bo%2FwQzXGLeNyzf8nyvgeVxfsUalsZ6eFTT8QBMl5YwpuvAyQY6pgF7j6ZJomXDUu6tNJ8sBaWPynsFXTDKs8UAa4XDJVuWgUWz9GEjqwdZrkYYBriG9QQrIdhJTIfD52vvpNcN%2BF%2BURdKaianfqx1u%2FJHs5fI28fg%2FgCrr3F0eMOXqVKePJyYlu6GtLU2hgTT%2F18IHmp59XwR4H9E%2Bgm%2BHVi1tCOQ4mpLn%2BNM%2F27IOYui3WJRCzIIscxwQEOzMKj0T1apno9Gu7wQ1OJlT&X-Amz-Signature=95ba94c6831f50de79faf5198c4875220b271257f91d553f839a4b064b67cc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

