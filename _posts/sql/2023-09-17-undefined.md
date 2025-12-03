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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSYTK6IV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHu2ksk174TjmGsjpraCrg5jjdN5jzskBkZPSraKCTGBAiBT0yEbfHzSIy%2BRUjw38M2RKOSLkYDSgHNERrv2F7KnTir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMWO1KM7HwRCjfRurOKtwDehGHskuLqJUTktOeDx%2FXdVPFCglkO57UaS9yA%2Fs9ap34k437i%2FMKEpikmar6EOr5EUUZQW845ETjCCDp39yILM6jwyFsDExDgz4I%2BThlHTKHm4f%2FBxexsoKX1Bu6H%2FobzbuCbuudRvhETcvk7jeP6Psd5LUgJfP7pIe%2BR9TjBV2cG3dBkuovpY07u%2FnDLQdwwewyKxO3oUvoU7GQx06j6m1%2BcP9xlyML%2FGIWQcYcw7McYiEl5MmyCqwm%2FfKDIiN6X144kA8OuG7ip%2FuOGgoBoLjJKFtm%2BeOWAuYQePFJSn6jki6%2BjFYwzt1RO2pxHdcq1G6YXT%2F5XvfKEG8KyfVF1zQmdOy52KBGYPlyPQCSEe2aqAQY35PdOMWuC%2BCYs2AblM7GwgWZiKhAt1g%2BiiN3ndsteKZhHIR1EYZXfnsIeYJ5Cew%2BLPEdViTVvnZJzT%2FGOWgn0w4IT4QE5lpy2VyDrlzMo1zg1gdYo1s275Xj9pr9qZQCeP5lgSxe1KMO%2FaWQXebhMW2j3hzCCHb%2FFG7Y195tWCiaRV%2FOSJhtx9kQIF4KZeWolw5J70bE13mUmnSu%2B%2Bf3sgUj0NJTN9A8uD0VlGotYlLHGCdo0rxrJcB9ZxEyUH%2F039w58r9GAJIw1v69yQY6pgEzMRtMA4WEgWaKjMCcTpyi7juU0gs1CN2S%2Bw7lZHH%2B3%2BfDmwcny3pRV8B3HO1cNEmvRReBEh2quZbzRR8EbGU7U3WoRH3WYqjMBLesieDBFlTW1NkYJKOT3uB75dBL%2Bv4h8YyaPBAa6zJdFXemU7Vc%2FsoqExnKpFq33ZS3KdwqOV0RmKnz4geeiFmrP18sUGzqHBzCsbjB%2FWcXhy76cjXp%2FrQNGVLy&X-Amz-Signature=9cbfb2e33f1fd734d777bddc73bbd2ae221ba5fe7fcfeff563ff64d31a82b443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

