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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JUYUY26%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIEsUK4vYOrOZV2keAtPHYC59cY3RcqgxDDGwlSYSwDHOAiEAnksTqXHs2%2FXiGeMmOvN6Sjvo%2F5TpFd3AbBrHxfRPTdUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDFWBQO4KU3CrJXCW8CrcA94Hw85VGuVTc5tsRjgGlhKm%2BE2vwwJLxB3V2BhZ0Ugo5iceCtO63mb0rgrNOm7HDkCAd9ALYiHA9HTZEWFifQsYrK8HZp7dBM2t%2F38iDPt3M5oe7YSiUrmCXACDqnGf8Y9IUDylVM%2FyR0%2FA6FdUj3PRDyAYkro4G0Z33dztzTgYKoZL5YLhvwDNmSUvWNVvcqAV4PKx8Nu6GwfltacnZV7g8j5pom8AhuNlptpKMuoqMRVPlz%2B%2BSwQNxK5zlj8ggwtoBg%2BZPnXdjjckC0ZkICMmlSdML6d0Uk0Y7YoEO0AqFOR8%2BG5Ye6iRh0P1AcN6Jel8NXKhk2eUBNuF2c52lmnF%2BxYoHpi3rOrUeGs5%2Fjp2qVzGZ%2FwR2Ltsjfgv8Cu683O8mbDnM1BdSFjn894xPmcTbWDYpBof30AwQbGrWJwqXl9Nwmts5D0ArBJhFy9yL%2F5ufQZ8zd2XHz6osM0jOTsOUn2eBo5HPoYFHrF91B78KtrI4BzlxRRSqOKgH6MoTB%2BCLf8mBO3%2B9zrWVbJQqB1%2BCbWhDt0MABO9uk7ZVMDHGIiV6b0%2FweOxIWSg6QjwppqdTIMs14%2BMHVJXGH585krxNGzalACS4pCEXVu%2F3df3UVfxkC5iuL6b7oUlMImbv8kGOqUBmxPwTx0rBw7pwNwvghWT1hjrL8pYGA6AjGJkg4jfbHccbnVpusuE1UZrpli%2B5330%2FKbvEwfT2b0zwA7MxzbhQCKzY3VI7KMUboOY0%2F53HIDcOv8Q64J725AmKHFA8susVmewK0AzBFlycaQhpVabcUwWPXs7Wtbg0CHKbj5P862RrmS7GVhxaXdHDQhCGVnM3JQX0ElnxOVKwgrFhLI5bhWip3VE&X-Amz-Signature=ed4a7f258aa41cd163277d7a7fd6bc8274a7b9c8d76b5b008395104c905231ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

