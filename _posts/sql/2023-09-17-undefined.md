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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPOK7CB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T111652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDkIKbLRO5wlyHBThvhApJLWooyG%2F%2BCrab413BaYYj3MQIhAOSQmth3Z5uhYEOnjtkQovNYfTCxrpLKvkawYuEfaazjKv8DCCwQABoMNjM3NDIzMTgzODA1IgzRMavp95wdXTUdoXwq3ANWoNpo2oT8zv%2FcTNEWaxgRgV1EFB55mejWp3Z56IElJAOUuwhStsYWMQ553F07jvfwafJg1CJfuQ4un5y7LHit9rWjAlO4kOS%2FgGJy85dvt2KKRnIWf%2FEPxtWOfouYfB30fEJ4pB8MTa8B1px6h2QEgU4bb3UuK8NzxWujTeDPYmY65UJ1KPYC7k7rVeAcyPyhvk8avPy8Hwbc9%2BZmU6U5Kso6Z16kSBpQ5v9AU8SoBtSnZr3hegD1mGkVXeGsbPd6mtWt1OZJr4myn5grpTD4zww60HUVI7CBhc8BJHqehtQZdSCOdufvldPbx3RDg1WoK6rUvSjT910h5thzhSqLUW8nCQIpwuXiazorKdBNfNo8HqRIz3QynJvAr2pzT4H0pHwk3Dal3KnFQVWWD%2FPb4fLaFmOHTilYWoGw%2BvDUGp8qQfFxKXyJuNIrWG0WL%2FE4WONhv6ZIdIzJHm6qKxJECWM9Tk%2BU10bJJ1rGvVC%2BrcfuVtdGloO5gd8ZGfVtH2DVqk7Onytpk9Qfu2vJdE2qjJ94QihsxJXWxP2F%2BdCIPj62N1PHriRIscjMT%2Bk%2BR5NIJm7G3P2Dka6tFV8iitjNhvc%2B0BC4b70kv0%2FfrS4LpAdwGjQ7MNseCRLLcTCfrsDJBjqkAbxQ%2FnPzInbcAdQ1sWCeWyaD0qa0wDP58vlla7fF1ryukP5wxxjDuLmM4HeyNSusd8bcyxbo0nADdnr2afK%2Bjpzz7n1etOmx1aJ4fCZLzF5zCji%2B6UNJ81ndbAyfX64314bihw7z8YnVhrPVrvR3fA4VQq8zzquRcH9U0PhhkF9xtyD40779pYKDmcDTGjuePPL3JQYWrgRbIm96Nkk1TunYNsXk&X-Amz-Signature=d2bb00c0ac4c6a09f891fa08be7924fa633282af785280e71ab591a739e496ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

