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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMITLWWQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH%2F1PPTLvDUUtkUiRy6sieVOPahEfaJ1h%2B%2FWUr9EF%2FYlAiBsDr33ZKeThbE8GOW4TlD7UjdYcbDyfbr7gytrcf9y1yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2Br884ZrKWLic40jqKtwD3Z%2Fq18WiSpEohZ02LMLC9Gjka73wUqkhKz%2FPlP7CT4DwT4F0Zt41V2MkClVyzzAi3PeG0SipjGawSNxocVWDdenwo0Q5pv7yguV4oBN1fbinCw1k4vFYSfFCT%2BDeAHDmO3uRTvnleVUZJLwkz%2Fh1N2vHY%2FBqTnqtQO%2B5j5AApdRQU15tgU3D1SzkrLJKZyhqg46RN7yk4cfGYBC4u%2BLvg6uqSPurmhfUYFkSTjMQ%2BSih%2BSxFY3navsbDNMwTri2rN74YwosoHTD9QtFxjr5edOuvk7BGel2T75V7G7lyR065qaCJQ36V4mECxPtaFdvq0Isfrxos8mKYtnXEigT3LYrS%2FUjSQ50dbHzjr8wJPe4%2Fl%2FEYv4av2b5wC1VKcNPAnK1YMjpuhBf4gF1XECFBGJFCnvJeckAZfWSeUUVj4yaMh2GxE1%2B9REe9%2FU3llp1218HrG6ZykbT%2BLIAkuK%2FgZtaYqd8KUNNKfSCW9wE87xas9F2PvUH9eanAEqxymhhIB4OlZl3ZWt1qzM0fho0ugUVxwzbV2a7%2FqIPX61hSbRA0I%2BCskvs%2FSSX891SOg8CDCvWbAWaLXbic5rf9nFUAmBAXgZL42r3HxZzOpIYk7bluu0oMHHSYjyNcdcIwmNW%2FyQY6pgHHjtNci9ccm7BhfzspVJAcbdizV%2BsQgLaBJJLo5sJFbIk%2FSeufSWjPjc70f%2BX7sbP65%2B5lYvfIuLQFLfB4jP2t29W0BW%2FinhyAvnDxcheF6JxzCydYQqaKvVKOHoNYYUo3TQLE2B9qYR3QHnBPsC7Ncz9h%2FjHpr5skADfcc%2B3Mf0mut1aCJmcJoxvvolOtiOr7YK5gsLlIYPUg8CL6m8Mvf7KprtV4&X-Amz-Signature=6651ddaec1378b93d0a67feddc8e70e27bdb2a01c510283de453454773d870ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

