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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZHJ35EN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAuQwCfV1IM4HmTWjVEPC3hv0PhXJmj0ZXQIqiMaOoYPAiBS6wb6K%2FIC0jmIsOgHkjzKVJf0ulf9VyM4dP4j1FtiCir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMstFUFqUwE0m5oobFKtwDncWRvrPmpTPPWJty0mx5aQrXSK6nEPO8IJljw7NCpXuh2MlxEbaK6tDOStfs51wn%2FbKgUbYv10uB2XZTJzLPsl7ioh%2BEsgTl%2B9uobrEFzU0B8FPxE2CxPPlJIwUai2m3D4yXNaerohvyBdp%2BBT%2FQuh5RfBBn6lulMJsVx%2BdCBlglPi56nK5Q5rwfZVkNs5gGfSiuFD9ypG8IT7FNLKgcs8EFgEhpAY7RiQBtLMN2%2BszC4OPlHVQwM5c2DQ1bf2dJwcft2dHwTpfeUzAXpmSrEEVv6lM8EKE5G14pOdrT%2FinF4HFYoNJwQVk64168S2vny2pv4ebdkm07OU0hLBYvpJA6WIAev2L6vu3wxWl8IJJkvdOZkaBQDwJHTkeDwQxet6UbbCDNv0ezGocc7U5Mh3hag%2FfoqYdq88QpluXyvhHl0wunRQtpk2RjI38O75VkF423KQ6N%2BqP9DAA%2Fqqr5ctyvsnNKUg01GZD1H%2Bi2j1NiCJAQi1LHY%2BV2TiTn39oiOxi47v%2BRdB4UKV15vA6SbG2y5qfSay6nMJ6sOX87%2FqmLfl8z8uplpHUA34tjyewguMwB74kIjhHSsv8G16ZgJICDQdCZn1S3V4wB%2FmTdMIt4kpMstIPnGMQg%2F74wpOW9yQY6pgE3dZZF7bHHX2G%2BoOeUJzsRuAEdfmG0d0rsbiZaGbV9LDv5A2SuObjhjlgTBQUSZ6J%2FBRIq9lCIQtq1pPyC8myMa8W9Fqqt8%2BLszOxamwXWKQLOxtACs1asmg9gv3fIYYKPocpQr1ltApfiooqHY%2F5IWZK%2BcUMWX0M%2FRd6M2vgFOp5ebcVDnfeeLKUgGDa0sV2JA3ge8hWKuqeuLz8kqB9il%2FIZQS%2BP&X-Amz-Signature=9377687f6e41bdf315926bd397edb7074cffb9565a985ec3026834a45ac75c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

