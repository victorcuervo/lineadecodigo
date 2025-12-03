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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ7GWBEF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD2V2HFsTA3BdJe3JCNEGRpobMiBRS0FACfXOp2kZQ0bgIhALnHzqdDrKYfvYgInJk2G01VaKPaPR8U%2BNoUh05SmemQKv8DCCIQABoMNjM3NDIzMTgzODA1Igz5lZkCBEyoDk8SFzEq3AM3HF3L9fYRn8mhqwbIb0F4NSGV%2FWyTdPf01wrqE3DzUddqZSAs%2FI%2BAptSZ%2BdytCLijRof9vt4Tp9dIXPFkMUoCteWOgBv5lEJoLBmJgWjlRxS2WUV%2Fz04a2GntCjAufUTTXjeL0EuZj1I4qMrFPQATYsq%2B8WPGdqhgan%2B40Ve10hpL8cCWXVIL%2F4eC4xVA1rwkwS0x32rjGPmkK3prKLCxfpAxsDRzsYcu5qayX2QmNB3F2AwhqF%2BD5TavQXhyjzItgTvzWSaHjrG3xrWtsUiRTjRaBp9HCnhCQNRvPOy9g0qSPdcBkEyHV12ajyn3AdWYAiSBNZjoR3op32QxJSksqtO%2F7q4BROLl%2FcW2SQU4UDDxBZC6Eq%2BuToAzeiHqGUwE1jCEB8yh3c%2BoPLVB4EKRVsFbxKjy0lOeJVnMalmLbmiyTzKwiknOSFjvOrxXCXkUxd58tjacgBngEY6rd7GPBtVuMAynGMpN9qaOi2xSVISzVs4jDPnZn2k1TkW8OH17GvelyewGOwQZZeQM0TcNNHmux74agvm5DvwCL1fbbg8fhkGCPtyIoS67UNnpvYCieVcy4MfKoL%2FrVkojSZAisZ0VpUttQl9pCdt%2FU8azIjPhHvvxiZ3MyyJO0DCUlr7JBjqkASuisiCexyOSblpEoD6vLQHfr7au8Tcbagby53iXeFLVY9K27gy7KwhhQ5Z7Kkwwyios7jromOFn36v6kia2aKLCibMk793S9e8jEYqO7A03VX2n19xTMsuWK5gGYgVuZWveL0kwiDGWtBDbz%2BfB5gKBAGoCBQELNycKOZNj4bWH2E7JPNSOHHfmwW82kIbd8S8oRWePa%2Fy8zWK1y0KRn58mhdMs&X-Amz-Signature=ee65ecda4a0badd464f604ccb93267ea81d01d4ace7fc7dbe473053d4d9facc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

