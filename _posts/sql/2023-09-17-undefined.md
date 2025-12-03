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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV6YXQOX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHYQW3q9HVqwIWH9bhHLNYk1ILww3dXdU1mDNldzJtYyAiAJRXRKpLKfo8MmLEZqwA2hiYs7pn1hGGyqUTeBfDMEqyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMhaYeUMZ%2BQHm2H6xiKtwDokZzyM%2Bv4yEBwS5jJ6vNQeQ6J0SERZurDp59St%2BXVMbNyKr6ZhCMkjopdXDbeTcLjhXsFiTUAnU%2BJL1OmtdTNZmCvvRIOJgZT4VxjD5BZ7OD3FqokU65PJJzjPisLLp77%2FnpYu8wUi4FkRPAZVmSRNUfoV8V8pzsVB%2Fbc7AGOwxEl5bDxeNcwY69TY4cyjpjlJ520W58rq%2BKR7rumJv5CrStBN6pK8ISuyCX5DzCkEi%2FedPxaTFfN%2BDIvxwEIpALdssQ%2Bj%2Ff5DEio4%2Fs7qF6SjNTEoZQtgIE9wAz5ZA0oc49LW%2BPM0cJIgOo0stpyW2zkoq8pGvjJeAsQZ%2F7UTLfIs3OM%2F3yeD3T7Ms9cgAF9ayXoqZAec5hf3r6WUwfCEDDJVAPwi9Z9vPy85QSNg17T4W%2FVbIYYfaVlvCRxzMumt3te2whRTYxtysTEnMvZSZGjboBjM5viziPEzQG3sl1ULWI7h4HCFP2pwYW6n2ytnspXCFPYPzA3uHVyNx6tgc7womI2PCpu%2BeD3XhwlFiGaNxPAIDpKdhrFV9Nk3ktI0dt%2BwyJMfPkXxH5ZSiz7Y7heS0450DVdYyiASIzhu6Tso3ryWJTt7yjSEfMykfgyriGsmpnYFGgH1Iervsw%2Bf69yQY6pgGaXbSFNJP9ooAnty94yDuxXEoKC24PCOso9wW3yQkAxXPn0sPMThoffy6vc4ndi9mAUSpC7JGO%2BSMKhy6jPrs%2B6KPbedoZ3cPBqwybItz5XuA2CdNq76An4Nzu6A82duI3FHX0%2BvxVmWIwE35e%2BdElgftF2JrMLZKjmnrztO6Mtqkd%2B1ATBEXz4ts4%2FkFcQYVkkVanj73aI4TwCkHa40MfsQdiWRyx&X-Amz-Signature=8067225937274b0b439679a28d94fc6d2e2b7fe18b293f6a59f4e69568f25187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

