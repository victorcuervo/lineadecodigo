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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3FMBW6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIA6kSqMDLlF0NwFxKCj0BKdxPYBQG7RvCSmBtJTg7N2KAiB5iDGohMUA%2FGZSJchtwQJcDaH8l824s8%2FRm3ryBMPo%2BCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMt8xSfiNUvQxKqYhcKtwD%2FEswKdHT3MUeKKmSbDJNFG87fqePav1sgGaaeu3QdrLA9Y9j5%2BceQbZZblBoJJZoiG9fhUZF5Y10j68jfUeG3qRz4vP8%2FXihxUbTZA1P6FI%2FzN6G4asIVidq%2BXwHqG%2FJi1rGdlHO66KwC7190AJ3h7tP9VLLi7DsshZv3KewcDfv8FDzuJqkTTIPyThLtj3AQDeg8E3MZF0IZS6Y1cb5B3se6gVDr7sAG1OZ1ZeRnsDqQgrThLk102wbcRI8eDd6NxYsMFkfnIzt1%2FQ5GvtMCxiUxP1chs13CTmkXIq1C%2FxeI5F2vLvztd01Zr9OIK9QpurrLtpeysU%2BhbyVq4hayn7v33CUqZl6VKxnplXs1KhEmEaB%2F18WNpyK2HpSOw2xzTxh4izU3K11amFv4vjo3H7kJmaLcrrOX89Nvk%2FEMBxLXnI5vKQhT2iCuCDRCAVzQ5kwAotUxc7%2FFLcvdtRrC5z9hc3%2FLoOTviY05hwSITWMnGMOV%2FDIQZskIQ1obLRfkt8YL1H9vb8hNZQH1qfz95iXCjaGakWCbfoIXU6ObjnKybAWzDPtKM71ALxEXWfBXfG88IWrGKs26H8MibDXkPneLke9JazS1CH%2BD9eGzOaXlIa1xmF%2FRrFKJkowrM3AyQY6pgF%2Falf1WIUZFkXNnb7Um8XlYKzk2%2F8ABLoxgafMZm8tfF%2FNGJ9D1cB4SZB2hBVPkYta3RqASg4JC%2BFtS%2Bd9i%2FPwQWdbh%2B%2FIv3PtfqpiyiVZkjuSeTBg9oQlhYqfIhqV%2FzVcIffqotMIUo8r8YfjVmqjdg7ooHMeZ%2FdcLvAChYHoX%2F3UJZCdmjtzsaJSVttBBC6MNToRo4M2S%2Bb6WteOwojZ8CcqTw8X&X-Amz-Signature=fa1f42184ea00e5b6e53d869ebeaae111836380bb5e3c2e6617eb16ba07e4540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

