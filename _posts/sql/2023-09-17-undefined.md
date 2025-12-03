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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGS6T5SJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCR%2FIsl6OYMHdbxhUbTP35ChvUkcjFe5HIZ1T%2Fh5YvzmwIgUUz97InYx4iLlX97jhIOWnO6Ec3SwB1UqIlmw%2FdJM5wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPmqBp%2BeNS27nafL0yrcA2jnnSrZ%2B0K96loYiilVCRl3YkEsUycp9a%2FEBP1MKQoPp9BtJAclwmMtLoc3NATmyMYrweK1ZnTuL%2FKB50SLcXDo4WoY0DpisgDVe26s%2BaPxxJtaE9%2FM2dg7HlPvJTYqrg%2B7kp0bVNdcKwBkK8q0Aw%2FGW4Zo5tCfzr7nWciDFAgSbmipEJd%2FJ6ElwufBPPuVxukzC82MUfmblcSThqyslZWgNEX%2BjBvXAZDlywWtPvOh%2BhqR35qwv2rq%2Fwmer6tRcYLFNz6E94ZPcnTQAAqBNuh%2B5DnMIeKtlFWCgfGFFLEKmiP6aw6XQsp07GwJlhimXOctNBrmJSagOO3jQCP91WB%2BAkPUNnqfUYzKqelMYw9tUef2aTFMSkiiQh2wtyk7plSHsPChO97r42P711TAi1HAP08DOXP8Ul6NhDre6Wzx5b0yZiaPRUeH7hahkahwBdFr9zagY9hRrHil1Kv77Cy3xjMBvCQVNZP3ZY8Fz00PuOwhtqzgoJ2yqhyseIBrvBu3Qypele3bybG0g31YpYaKNlG0cIgUrl3lY1DZR1jp%2F0I1VJsKHiapWwhU2%2BBNsKL5qUyTh%2BjkXOzttljS5JoivOjxVaXT69JgU%2FTCQIilBvMFQFXge3wjuI1uMJOTwMkGOqUB%2FG2HIqsPRP2%2F6xlUc4h0YefwmFR6obrJFv%2Btj9gCDX6TgOgkUolejB5OQLvK2qGPU6AcL7AJuYKX8DaZeXmSy3tmWtWoAfZgeVoGjbJ1DCpcBpQt6ZaC9DYNjc%2BnmJLcm4fi1HcH0oYgZfBUGInvSL9NP6tc2lxAbxvHwo7Hux%2FsPz6KOHGqsWS5h48T0fXiRge2wPVnbKX4jDSmKQZRD5Za05E%2F&X-Amz-Signature=e7515b4e8e5d3972ca2226fc4aaaf3d7e7dc11216e37eb1ce905f279814f4613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

