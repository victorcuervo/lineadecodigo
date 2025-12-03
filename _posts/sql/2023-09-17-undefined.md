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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXCMQ2V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCmL8gBT3CZihzW%2Fh5whHtISjH0RFNPSzZednbnE0SRDwIhALvLr%2FCM4sR1hKPbHT4%2Fbt6Axf63OY43rBEFurznci66Kv8DCCIQABoMNjM3NDIzMTgzODA1Igw0cQAAhdAEI%2B7q%2Be4q3AMxABfdjHq%2BH37vZqH4d77idCw3v5LB7V8DIfIud9onOSMuiG6kil1YXm0sBvNrB32vcKLH%2BQ7S26IGS4HrAYXHKa3ptZVMEUufCTmAi76D2Rwyohn40C0n9M%2B2DQu2%2FlL3DR%2FrXGLqeOn9Z1xz4th2FtwkpmZt0VyXujx4d0qAw%2FLVZige2EhbUT7YIWj3b5n1Vy6HkD5s1ZyUTNkqjgRDLX%2BZ0c%2B58NoKq20IiqvE7IR%2BMVVIiWOSWCHdDfABeM%2BbM8K827Z1ifcc7Us3H%2BvKYAx%2BBgPt4M4umTth7973%2BCfnYr6V47A9XPE43gn6XtBVbFblPwNs6VlH%2BsmY0qJaXufbeWXq5kAVeJZw8kianrssLmA3Mb6OiMV6BQuNgYMcUOig5yx2zuGkSTPwhBXI0FS%2F99TBsqlYD69zfimUVtNG5OUjL70DXXC7HrYP2cuIQftwOPV9RxvFPGJO3ZV9COtmnm5aJbHx8ogeLjR8DcABPlnKqM6BXE5mAB%2FhGWv6MZSCVwsuRVPoLSVPlqbX6aHmZMm3IiKJw9jf0bjJL2J9TOlDWgzkynxa%2FV4F%2F9nXgEZ4q9neOJd1LNhlbyFGEjOMz1L3cMQim%2FAf60PYkUSFmdi%2FJlCmj9GZczCplL7JBjqkAWDbc9LUKtBAfMOnkqjB59DAyiHcptSa1jUEqQisId8l9IlJVkf4T8yE5WGKaGgyDjlq21w2GhxJjQea%2B5I9adSxRz8A6aq8BvVeqpdFRrOSJ4JpafhwS4mIBhvvUA8peWHkOF4MztLKRspUXbAdTZQz5iuaXk%2FCP2wZXo%2F6nU17d6UlB3UeZv7GklwV18vdGte%2B187M9Zodh2W3jjFomEhnu6iT&X-Amz-Signature=206c84d089785455621d8b147e7c1f4c0b8d9dca83f0f1f890ad931f5686ae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

