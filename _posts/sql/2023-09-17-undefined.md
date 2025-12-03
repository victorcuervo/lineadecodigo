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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAASRVM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDYLVMKt2yLn57WBnPyNG9KEl5UG2P1FpsVCAfNlGnOJAiBNiWMx3m0VU69QovYh%2FeerKdAxq6rsEhhr%2Bd9D9TGALSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMwHzxwYJqEgmmTqguKtwDXW7xDu%2F7sN5Nhf2oWYE4gWAlzvSQXSZ8G79n7pr3hp5C0F5NhGQBtjBM4K6sXbMkAGOV2hu%2BlzWc1ZDXNLeH8JRWTNzy9tGuHLcClX1oOXsHrQqf9SCScifJk8G98%2FGjlKDQCWLRtHjhZ0PcCP9P0mlPJrSBg62Rxvu0zZQD4CrOp%2B0J2mVr0PqzDMtt6IqweBQRX8IL47CQgP0tTy5RfqJI32aeVvcGiNzndoDh%2BcE44lPVzq5b1MnHADP1j8NlrdEpFLgBlPxEeTXaSrHWFYKhHrq3ZxSxHRBQHIv%2BZ3C4ZolyfdXkuXZAEwlLJ3xPcAwfwGmNuyLxEnQJw6X58kIFgUPWrtX8bQbwB0jOVjHDvEkzH4WAjoblbOJ1OutOc5mlUxaZy%2FaJT7d4DuBkggHHPxPZ9L8kXhBOZqKYspctarPrXv2L54LT6R6qsG3WAdn7ac7OuRwSSjgZGnwGU%2FgGLAfH10OC9oLFJ5MqKoe87rDNBL1Rm7JSnwhvfa6Q4WE78qwDrlJj%2BjYUR2%2F%2FxEaWVliyXQxHL7lWlaL1oZHZWuxCO2eI1%2FIwbHvS7d1oBYrk000Mvw1IS4KmbCDRnDadpQb9nhj0gMzNMoP89PW1dTB%2F2Jic9gUgvp0wm9vByQY6pgH7QH9%2F2qRHFCR0u3vDmh9Zxc3v9R4znNNQUFtNg9pv3g46KMd0jE4EfpTzecuckGbYvpxcbZ9QDgw9sleKeHTrOLKVAbXoY1tFZk8h%2BxCcTywCTnkWTrK6nA61ICSUc1BFYV3JjilDd7vsDee7MFQnAqLp1M7yF5aq80nkNhr0ZT%2BQch4Hs3q6UxZrlYJ11WeT73dyvqR5vv67tJRyAlrEsoiv7%2Fbt&X-Amz-Signature=8b683b1d02e5285b9260ac0480519942193d1e5e3c86a0b6eac22f152c9083a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

