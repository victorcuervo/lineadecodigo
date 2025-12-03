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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SH5LOSE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIDKbtoUbpR4bIXIzne6aqPVDNLqOy7st8oM4PSfVLmyvAiEAqPLdVtSneS5%2FuKBI0Z15y6r06DRE6Wri6pZMvFPjx6Yq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEf7UPaixtLT9q92vircA3EBA48CRRxCg0BDQF3LXSd%2Fr84ldYH3acWg5MqCw%2FdI7ba9fjVi8Mmq4em0VQYqL%2Bse8pHxkXVpMgq4JR0OffIAqB9xeZ2igOjED2XZyP25w38J0k%2Ffd8d8kwo9ubkDEUM3T8xo1NCLsCU47eF4hMNPw%2B1mG8lUG5FfN3TjJnvlBm9g5h6ojoK5Xh2iFvoDsEvvRPuW%2FU0dv717oqxqy%2FwdKN2zudEHK8DvlSenJrwsB5sWtfhxglPfFVJatGucmXzxQVefY4K0NHcCrmXteqyCFxN%2BZa%2BLVq2XNFOf5YxhTVGKP6MdNruC5TUg%2BNQ9apgiNR5Syh4ly9WGk4tmbi%2FxF0ckbMUWPZJAhzbdzzTw9Mhz2JYw4EtAzp1AFMeglU%2BXde0OWCgssL4Uoo84cE4NPHDLIpO%2Fe0sHPJUchxhex5nk5Z1iQP7uNHONv0CrduSqECPLCDup%2B6BvWJacQVXQTY4IhZTQJYXO%2BtTgUSdH1xNp8J2I%2BlV9i%2F6EHzmBnOZY2lmvXvjy9kwAZ7SbzMXOPRtO4gxXf04AHMD7IbRMQy1OzcvLcvxJy92Rgid0jEcXAGlzeF1%2FhEPHQbgVb1pxfffULxX1rL%2BCdxCZIiSp8nVTE%2B1N6q4WhW%2B%2FMO%2BtwMkGOqUBKbm0PXho2gFSNvv2FcFUr4Rsyp47kMPYjtzGsqq0lGIqOh15laMrPKgO0tQRnAjVHvjV38o9rh51%2F87dJum6tj42f1LrCoQ0j%2B0hixUMz31jmuCRdLnFzGedQmD3ddNGHa9WhyqY6kElu%2Bd%2B8P%2FAWL4xCy%2BScLsU2BGmT9BmR7iIAYzevkfB8R98i4VftUqOBiD2vQTCxJgebNHTDTXNvPnOS%2BEm&X-Amz-Signature=50d5eb541e77d5f5ff46fad977bbf635d10ec191263729e745ad03007fe7bb07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

