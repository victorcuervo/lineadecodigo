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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVJPENV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCICqIabYyVl%2BYZQ98FbsIEzW9XjOULLiaaoUo7YA80dhOAiEAtvzwN5zbBM1wb1zSMY73KMcWvX3w5PrMMODApM6DXB8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDIwtFwPflOkxFTM28CrcA%2BIma62OPPzsdw1T42jW1CCiifk%2Bz6WRKZ8CHRmxPwlN85j41ZZpQEKqvEMFpNYhAXdvyM8QjSEBmHpy7jORVlLPXJCoaTQXJxKN6y4voTlK3VCgQmSKbjHKLkS0ugiBLxCjkCiU%2Bu3WYr%2Bqw%2BM9oaoo6kMRxV%2BrnFg%2BK%2B3ey93JG8JeEa2zLtSvF7BJEuU1GN%2BLZLCjOLk7say%2BDDwqdUf8i73VLTT0kY8mCIyG9bmJnR4WATa2KSNvqvdP0BTjDRDX0cM9zdY%2FBWYvX5Dd95rDpcrr%2BwSPRFmKHxH%2FsGWkBkI9vTFLSZRVct7QEDwc5QlV5gah%2FWHr91vt8m7XeqTD%2FPYEAk79CSfH8zRMMZ%2BehL9XEcOE64d2ssVVqWJQVdDR6uTMsNTgs3vC7wHJI%2BPSKBlZqfnKppBwiXijwheS4IPV9FIhtbJG8oN5%2BYlLqxWPeJHzIW%2Fcn0WRsie8q%2FFRZTOdu%2ByzeNXdo7IsW4Ruj4FvbuL0pgkv42AhuSRLT92BOzj6XDCNXKYzJb71Mc%2BX0TxdszGc3El13w8SFK5a%2BdYyls3sqYHEOkWKYtNOQW1IdrM5j1NC1usafvFNF0ls7zypdJU8HflGUfUXyWwqW%2FvW5zGW4yeBWsT%2BMLG5v8kGOqUBhuDviLl77bobKyMn%2FYHP0KenOV6FiywRwChaF%2F4CSyR770g1U6NuYUFUHm9c8eRTm7br5E3oxpXmdf%2Bnn0eJbEitvq6WV9p5IBUqIx4rvGuecOBhFfsV4vfCMWXSS0r5hL%2BA231Ws8x%2BPXKUUU7OMDSvyXlAQjDbXGwgl1uNhVP4RTa33mLeJv%2BaruaFN1PcAB1j7hCKv7fMsssETjxI%2FH7VGJ7i&X-Amz-Signature=11ee606be5dc0eacf37cb8d6f39d7c14c509819c9c64c5943963dc642c120628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

