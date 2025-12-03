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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOJHZ2A%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD6U%2F1Bik6%2B9GsgS5qs7%2B%2F2P9gQsg2jn5ER%2FZ5r%2FcDH%2BwIhAL%2FvNLGu1Fz63G%2BPUzA7a31ZGI6UTV6KJ3G8WlkrGGVbKv8DCCEQABoMNjM3NDIzMTgzODA1Igz%2FO5aVmsjDalvsNzEq3ANfwb%2BuLJCJ2y1OH0mcoluurpf8a154LOkmDseB1Ojz0LUnNyjEaPLsewhHwzIdactqm%2Bo3FI6KKFSZ22w0TkpU6Dv4eT0vCK1MI1vqiLQBuF%2BWWhGKndo9CQb3IBWu2hPEiS3R3bkiixjUiSIKysysyCz8xp3FGlMjvc3yNvHf19X%2FK62jHGonw%2B94U75zFum589iu0vQ3zVP2%2FDm1RErQ9QieHrtSLSfLDokFiGmwkXCbjc6%2Fx147Z1SfGY71JndldA7lhFjDr8PGrhiehrlSmW0%2B1pNnQ6Q3TqCjjCnS7kCxuP8LUXR0YqCU9NQetznfFpyTPdYQwwFD9ookk%2BoZeRtWURpF2yk8utCiCuu40iWNfvkL%2Flb19KvBTtfsk%2FEzebe0eP0k8dGF%2F5%2B5pYjFxubQQW2bDEMMfv1KyNY0ta7ZijBoaoKfCIDVnIHKSBTOnJZ4XOIugq4af1hIsya79qCLhYC4Maue%2Bw0pjC1%2FLUmsYNcQRJcZ3ieRfJZXh0zAcJqNg4Hjfim49oS7iJy7JqqUwZxf7s43ysKGRf5b1EKDOyyB0nGQj6Sf9KKAFBkYEw%2BMSoup3hRBP46UcMeDwPXgXtC83Iz4NPfhW9HVoFylsIEnifAAaUZxdjC%2F%2F73JBjqkAdr6M0GvXxDc%2BWRYKEoIiWfrTk9kQXy8JrYUAf4ET5a53oJsrBiNQI%2Bc1vrjpZnpVQr%2Bs9lTdDGScw9akuSCzSy%2BgLTRA6CgNV67y5LsbEAtq5VlVdXEze4wi2VhvuAIYw9PGwzFwmlMVu3TqoqhNOVsUynK8CStK%2Fo9iX%2FB2ME1%2F8wV7FeIsG7wg4mMXUs4P4ha4EA8yZ6hOcPAC%2Fe9uJl0YCvk&X-Amz-Signature=362b9a18df907d959fabdcd30bd7d599848794d62bb248316372eb4362081f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

