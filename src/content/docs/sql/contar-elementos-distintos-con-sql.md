---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVSQ4YJU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bjrq2fkB5%2Fuj4Ji906g6fmgfgS9aigXmWo0CiZ013qAIgJ9BgVFDM6Ogk6IfhiRAZVvL5dexsfR9WL%2FhfDLd5bTQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDFfDuJ9yVFx0tVmgFyrcAwq%2BJFIA1XGSD1GvIqAWK%2FBDbwQ0Uz6N31HFGrDrByzMO5%2FT4etc0BokYbXsxQSCjTaVhFocqqcu0LVrbBybzrUzPjziThU2FAt28KLMEqkc3s99ICv69wQjLZ3T%2F4b%2BzZp3sci5p%2FqkxmiHxhfIba3dI22vSZ6H6jPsaYu0Aub8SrTvySIt4u1yXGKkxaQEkRIwn14NHoFXCWpESP1hco0mY9vdLqo3snGpUdI1%2FJ8LqsR00cFL2E40gKdgasM0UfWrLX4HSxUH%2FpUI4b2D27N64%2FCUiTqqGQHILgRAKzrOgDPkTMZ2SGrf%2FNpRSb%2B12B16YwpmDhggioz8iJ5SsTMQKkM5pRjfsqLCP1Zv0f%2FoB3A888Vod7OUIwDj3B5uA6t7ZugpPXPugHUROedaTf8V8VXKz6UPd9DIzceCzt6uQPD3vO9BCcl8EcgYnp7wlhHwNbmU%2BZXQ6yrTLWBDaEPEH8U3hSvbJwBl6834UJCHfCz1F6ixdgTJwQOr2hpoI%2Bd8vV33yZVlNVT9Tz8uZyu3s0jPPEzFXV0VInsfeMpzRjnFx38hdNZ%2BQnMp4nBHhQcl6tPZxWze47wDKNEol6SYpizAFFGcYQ%2F2zY0HwHyAKWL9KYqvKJMT80eHMJjcxskGOqUB7Wy5jVvYp4kaHGlpcjw%2F8SSNOWkZXVlqs7hSNnHNahj%2BZyG2X8aZAhkCJw0fqQbMCPfuv3hv43st95dLjt03leA73BA7OZoEAue1R3EZ%2FA4d0TOKEM8Uda8OXenYtFJUdd%2F%2Bwlfidg%2B5f%2FHH%2FSagZHz2uBNDCJDzSxqeoPVoI6lw3yp5NBpYUjfOosey36IwgtXl2j672IXdJmi9wWx1EhAw8jDB&X-Amz-Signature=09a654759810f52adbe0abeb30c5a9b395ffdbbd863489201d11ec4c23bb7dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

