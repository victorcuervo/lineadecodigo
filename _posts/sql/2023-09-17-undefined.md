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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5QR3T75%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDvBw5vd%2FNlGEmMjz4zl3TtnUHcw%2FlgVy0b0Hz86us7UwIhAKWC18hnS9j1Dv1LHPf9i5eDjqUXYU9R8K2OYw4PVOVlKv8DCDEQABoMNjM3NDIzMTgzODA1IgyhJLfFVIxcVoofFwQq3AN%2FNEUQwL7oYJQ9K0vVpHCkb1U064xT0IQQhT%2Ber9vC6CwX9qieMagxZVx3bZKwtgNB3Ppsq%2FiUJ4iCZE6V5MS8aA1MQ%2BE5nwGBKoTSaos53ie4pU%2FpW816AnA2MmWrR7bSRcGYqmXF5R%2Bfn4y0XIalQt%2BWH8ziD8%2BnW0C4HKhht6QjNgr8hHFO0Ld2KRZIsP9gAYpZ7XhpCJpJaGoKDiRi%2FJXDfwt5HxWrn9YEMaq%2F%2BV0330c%2BrALdsYDYPgpTszsfwSQuN1VVPYhTLyUoARXk1D9smRWemA5haSeAUfPOQC5MWii2QJziuEktHJTQUfTSWC6KdR3O536JgaZmlu3%2FAzFqvrfN%2BOOvMOSJNGvQWEpTA9Dah1c%2BhEVjBQHQ3pCOwzD%2F7aIzDnGO17v%2FUEux0RVLx6eFqJV9GLpcz5Xv0w%2Ff7TnLxQfq9Y%2BokW96Z4ZqwYVTfMwb4bQAbsSDr34xyAuJcewRsb0gcM3DbXv4kUeX5QEMkY%2BhaHi6BXI9ppO8wX%2B5XyOwBYC3eF1J7x8QdvkkPpKjZhRYp73J%2Blv7h4PTdMfqRpSCKCfyUjxYbtjMRKCQyXbOX920zMGEJkzFjgL%2BEZDULHIa%2BewFnrZhckZOq49kAy4VZFfyLjDmwMHJBjqkAbPeA3rxMXIa0E5j3QyX6zJfWRMAeT0KiG30oC3lrv6Xkmkf8NUPaCsIzbJ1MdqlvMbEdS4AbQZAwW9qoGDwcuMSKkbRjwpWvjiXZpKJZgwmAQhkYKkRnUcSNnpPRDk2I61Qs6zaOMhMK7ssFvsKkuzla6Z%2BO%2FWPejL0qQf9%2FmCPkL4Jbcw290aM1r4n%2FejPPCTaPzfRehYxDfe7btvZ0VEZNa1h&X-Amz-Signature=b64147acc4abcb9814f9c03d4f83966cf5146979a3c4ccc52cc33a9133aa6f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

