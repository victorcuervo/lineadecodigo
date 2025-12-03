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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQMI36EG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2BgCvF67cdSJ9X2n5Y7f4sfQRVbo%2FTPpQIW0xhqb31NAiBiGJyiOPEvXUa0V%2BM%2F8rS8aD9ZX9yQgCFDqNPwRShOZir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMkVSotE9rlmY3zHHTKtwDfjdbkl0x0SABbFIcAJntWnXD2E5wIXnq%2FvAjF%2BLUFGd%2FqcErkjalpaImULDxWUBBYvJo7s0s9aeYL6%2FVAHhVJW4HtmKTboKnnunZ6uXcRtRos6iuYnJ1eySaFiFhW66kHhktUZM5DxKvIHNBKKVH9znLm2C3he9%2Ba1mSMGRVHJrgHcUB%2FrlZa4As%2FgbYAxZIbKhu%2FcFKtRxC99OFuE9q5k%2BX9ck7n8%2FwKKpinaSsdA%2FklswT%2FLYrJApXhXixYVW2ART7nktMStlFt04xYhZxvL9X3lgUkqvfsD1jsLfyMXff7ujqMkftO2ZcOWwCT0B%2BtmUk9cSu9yGStIMY32wtTRUTf%2FheH6xF77cFD3coWzSZw9BoQ7yoQHRVUmKH%2FsNsldm7CR3EiepMb8KyxECD6w7GjhwlLuvWwZ0UmdNYvKA9fjnO4M3QVkKK7nQ5DOPuaxlrCMhwcOrhoQ7yxxbu4D8uNvVpcJhkpgReM9SkhWSbiaHQ9lLFPcZH3aIcuJD5FiG41wkQQ6UtvwZnTPT9C8oWGdA1CEs4J7t89bpXMpfjZ0z25VD9UUz%2Ft4G33BrOtjAhdOd8B6538WAaFRN%2BsEXiX%2F1XTrqqgb9o%2BCp5btk5vrLFNR%2F0mN2rfhcwj5y%2ByQY6pgECgjfBIzVIpzdUc%2BMvGMCro4Z%2FRPmtZypyfKQD8dx1Fxz9a%2BXicCm%2FOS4kUsaKruphgPl3eYbAcCn%2FJtnZ6gmaAQqudcWvoDqP41fF3ws1iHr%2BP7gYUlloftJMQJ3%2FagG1z%2B3kEXPxYoeJE9C8lw8tFV9eFqlXLRvpWGHjNLWimuE2Y6Tni4hJl8AHXRqMY8v7PUUBPjpntcT3RjapHpkrNOGnHBeg&X-Amz-Signature=31efed5c6fb419f89a3184dd47a44978889f7c21630ce72ef74b2613e56516f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

