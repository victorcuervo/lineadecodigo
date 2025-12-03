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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGHAA5S%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCL8j%2BymFNQtBwcAskSWv7TDFAkzen2hmU5FBhzqEms9wIgQdIqHZ9TXpMXNAFeW%2FUWviUPzZBZO4bYURCti19cxuwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDP82qOXuuG63xCZZLyrcA0r6KyMcvEf37j41frf1%2FRwYtUQNPazOS8gjzJFYCF8zRY0fkTnnfX4Xy5n9esE2gXnuZseGTUUWuBI3Ha5g4ocBD8ivRNpFatESERAVwkd4IRXx8%2BAqGLf7AFIsrKk49PeP44ttyOuBYiqRCrxltgel9TwWZX4AcPzPNtzHR2CM2q0qH09wXVixBsTP5b1wKJKRlhVAP0ODQxvuSwdj%2BoSFBvZ47cQiFqXPmdukAYHV3ZZIr7ITSiIzuO5foA2iZgVpHxddYNO6X1Qz7NBuSv5HE0D2axSjEGMclIRWLyZQ5TUHbshnEQs%2FirOJHe1KJLm2WoetIMOZsmeE9P3EofQ0iyxgz%2BbW%2BikLnvp1SwJ%2B%2FhHY9V%2Bf0o5t1JETTl4xoNMwINSOAf4qtR9DmnbCdpNILg9YI5BJFGMbJi40KYmj8Rb3XQ%2FlHbGmJjjCDYcf%2BrOebvbjmiId2OsyZYp4Vqxls%2Fkm2F3%2Bb4kGeRmsXeCWQVvsQrIF5yve5VkenFxkFKJBh826hYS%2FNJKka0zmHAzT54XhorzFrdZ7KSXmYLs78eiFoHAl7qzOsvbBDaqZbQcfMIuD9PEq4Z4uQHvol4HpYhkFFaG9ipI83%2BzmVzHsRqsjF6eWmqFhasm1MKPpwMkGOqUBvV688XGRyAc1bvdmjFDR2txNQvFZjm36BE8HJtNyeP6ETTTNakDATYw%2F8%2F1IextHHaSbhMxdY8UhobDmyQYtYMu32OsK6TuL2kD%2FvyLNyXUu8fugWCTUkvIn%2FhhtxNAIl%2BpAEJHCC5IOSXmQyWB76MMjHULwGrnNiZWCHwz1UedKVxVE4CzdgGw4VWY6ZisnwczbDtk3BTBesgXBI4ZfmKbgNjYa&X-Amz-Signature=0b56bcf81e43faf1ba0e84bb6321956d15391c297b73af12e4b4221a6f477480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

