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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W755PXLM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDDyuURiafiUy%2BB9NzPv%2BXe2JZ2I0ix%2Fq1zKybChqvWMQIhAPzg9sBUjbTkWAskUlpQdR4w38QLgJfbZ0uvM6pP6YyIKv8DCDEQABoMNjM3NDIzMTgzODA1Igy4nCAAEP4ecip%2FpUAq3ANtMcbjFRHmgMepo1qI3C32IipqBzDJflagK3UGd7KHIhHSuXK9qFleY6%2BoifoeXMXEEToFKoMJcaptstCMcnkhGVqZeu17AXSu67dcysjFOqv2%2BXuBebRjlkyIL9%2BHtRdI1AiWn%2BqCcvc7FC7mpf3Im5u%2FfLZ%2FQF4%2FecgLE5SRNFyVzHq2TxlkFExHIjc3pUnt%2Fes6eGZZBlUY9Jh5yWdJm3rpycXS4Pj5XvCyF4gf5Wx4it%2FwR0u0rLeNlxt13LAFoCGZNYfE2HLmEAy3ZFNRe3SCg%2BM9F6b8or7tpG9nI0tr5goNPcqx9eIDg6929SVJCbbGTre3BiXnt%2FGmWCaff6AIczSu5GmLeEZAn%2FqrrabRpgDIe4gvfSVrHR7FHMQsDBm%2Bof%2BkwYuqwllXRF1O9s9hMLCbVf%2Fl2X4WSRhq%2FJuhsv3MLWUNFRGjNNX%2FvLzK5f7AydW5a7vs4qLW0qm7gQYGkouog3gKaPoWhjrjsAVBrJYxzsMIL2BJfBxmQboBX5Nxy3l5fGaJTZk%2FHCrB1Pzng2c68CNt5Mp1ixWfIUVYzVucXwjpesJpdxG9duzElG6Fk6d2%2Fo4R%2BcmW%2FcwbzSJmFbvC%2BdVowRE%2FNFX%2FMO5mtXUIxFMgM5PiwzC%2BwcHJBjqkAV7OTwqU1oUSyIPuFLlaD%2B0JNsvVZUjFJosUhSEVc2MoML37bTrMW8ryHKI%2BcbBeD3vRms04AOzqkc%2Fhh13mH8AaSs2toilPKEiw%2FJbknwy8WAqG7GdTFDoselLajYVaX7%2FFA0XzDc%2BRRgXLWCqWij7twuPDt8CouIfqUm7dDDQrlyC6ke6hIJwgKuoRcPdkzwc1OWKdDFF4WNJGGw4hAuO%2BTr5O&X-Amz-Signature=04328829c04db571eccbde9530e682ca9e93b82dcc9cde8497799c450072fb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

