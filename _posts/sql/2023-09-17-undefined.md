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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KN3NGOF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCMfKPAWp%2FxwLJl%2BrKvdYCzrBeEkzkASf1Oy%2FRfbHfHXwIhANSzZoeUXD8lwApdLGNCXGg%2FK2AWHGz%2BX3xvTDoqRC4NKv8DCCwQABoMNjM3NDIzMTgzODA1Igw8hv%2FPH%2F7fQCqPmowq3AMgXC%2Fwm9gsqdQOG%2F8Ao%2FEYYSkMFMHJvSnxavDHIKhx9wLqWSuqdieeDBUETqtjJfqcCR%2FmavSzIO7sLcf7TWLMSB2P6MjrRhlvRgWXw9hf38iCDHBTEG7qWwn8TI%2Fi63hhSurYo%2B6p%2F3EGt0CV5by5DTkl9%2BBb%2F2O7k4eDJ%2F28KjI57shwFRo7Ypm%2BybhIjayyk5kg%2Ft1rnhmkPk800E4icNTIDbhU6zCTNgI%2FaekDP4%2FMdq7YIBuCLJA021ACQBtzfBYsc9azTKoXhcVsXMnMr2kp58zFHysjObX5yaHQq1f41vpCKEOdXywA8HRCav0w57Q73s9VgiU%2B8ohGZylBayDy0i8QxJj2TiJpob%2FOIaatYZtdLbUE7W2eQOY%2FZXAWtDZnHA3%2BWhO7PvPLJCM9DvZkS1bkr7Sm0M7aERqPGELlJwup%2FpN%2Fn3fH1jDbrZTOr7dKbmtDPjvY9ohsbOiy0qeS6KWjtNHKSLsRVtSZakp38pACoIYUREip%2Bi4zvHVvp93JKYATWmzHK5wm3h76zqYZ7gPv84i3J25ZaWMpCe6hhnou64A4H01muc5y%2B0FsDwoRBbkJO8oUoXMeLOSGrxBcTGjTHXfqUGHZDDvUCGvqaTzAd4xTGCWLUTC0rsDJBjqkAewn1YQTe0Ytr6vVgaw9%2FXLIpQKREmsWs6LK6%2F4mkm%2Ffp10aZ9Q%2Bmm2xgSENxDMhkJhP1pNeV%2BO08gIofUzU3MrBhtgIqEpyeSFw0j924osn8tdMvUaknhQMxK4SjcIMGXIpOhBRJQwurC5kwRkhwiJ8grhLVcoiy%2BdgEu6oIKeUD4%2FzFtgKuOpU%2Fj189vE0OXw5w8qKy6SpWJcRyz5b63Rl27kr&X-Amz-Signature=e2f6284318b237ca5040288e921dc117d78273c0477d60bc53dbfa8b2bd5333d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

