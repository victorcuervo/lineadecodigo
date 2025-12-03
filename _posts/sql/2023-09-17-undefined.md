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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6DOAEFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCz9p1FxPJeLQ0JwnR5uSLytbDuAQB4yh5iPtbctgBSSgIgWemmvePZ5O8Y4t0DNAtPfRdXljm35VyafSPP%2FFoET3gq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOXPGzbNx7b8pcarJircA4wlf38%2Fx3smqDzEE3PCcM8Vr7ihoeKUwM0zlt%2FXZhspwXJunr7EqYUO1fqSK6Axm3Ouhdqkpzb%2FrKEzyv%2B%2BRl8NGJ6xlR3UgKdxQNIMkYRNTUGWk8IxNziwdjrs4bpGjPmD65Xagyli9xvaEzrrjgMV%2BHfL7TVrdaGJYqOhAdoY4dc1LurgewD%2BkhGHS%2Fxx9FhyGcG7LQlHLZpZMjqh1FmwqC3E1x3sdTQobHX4xRO3K%2FpJLddV30ByDXq%2FrSyvJEwyC5nLAV%2B79C2hRlkRq27Oq9Iy2o7CBiQZIt6DP9tuej7FSIhL%2FYcgArTycJUdmLCgv4VCbJ4h8j0eEMQlmep06qCgAtwxp0FCDrMXJksuZgGUA3t%2FAQaip51Qye8UyBlWNn%2BdjZ%2FqSLU%2Fd%2BYt9DQRSziHq8tA2aoVvJCp8vd5L9I7kvjxYKe0OmmpZHnDe0cDTjc%2BWDv0RZfpdBK7mOMUbWZnYYyYdtFcnrpH4g6S%2ByspfjzzGSPmKOBGWh9WQnNj8zvDol87uNSW%2BlCxxamF6BrLrsdWZATwAmQHfGw54GL3i4aWq1emrut%2F%2BO7%2Frzi05HqQg0Cyx4xHz1TlTT%2BBjZPfWo3rwv1LWeD%2Bca5IBTGVGIduc3HnZm4kMLS5v8kGOqUBo2t1YDVnC%2F9%2Bh1yaHrS0lceJ8lGQ%2BVK2xgvalj4MOsvvCwhgHGzTAjGNUo1SUnBKCKiQDDm%2FkQrJA79Os53cZdL%2BgSH4h5uvqRu%2BOxIM4ZjClRaa2wtjoUtfC00j0o1KPTHjritmFeYFZD%2FMPm3inDl%2BEUuXQfSu5c6zvIbc%2Fff52C0jglAzjagtvWDC0uNdhbNkQDwiDw4rJLOR9%2B3U7MTEZOcg&X-Amz-Signature=ad876a3345b4745e2d45c059890f61726ea9bbc216f172c884b58d9fe2996e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

