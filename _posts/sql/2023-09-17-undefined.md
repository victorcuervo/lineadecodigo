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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DF7HOLA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T094323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC62bthyt6%2FpyBpwolxGYgltB%2BqcpG9mZ%2FwvGPOuPDN3QIgOoU%2FmJHgdAI8Qmp2jiYxIG%2Bjk7Tz3h1uFIQo9xCvL7kq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHayV25DErLfsIeU7ircA8pVaP74%2ByvDchQmIu5N3HabPrP8k%2FPCSzkVEh1tcOT%2FfDvlzYha%2F46QnhKFoddQdsHVlmABr0zUbWwEJSNWN849cn55BavmgpB8TPjItf4zjfQzCKFG7LN3GXlEzg%2FB5kfZWJtEVto%2FRcUoZevRu8de6giiBxvodiYXgDhOpRnCsiD0hgQyaiAvta43oiOUOJ2vt3APh2GCr7XcuiOCWNwLAQD4GpkR2DEbNpSIachZ9Lo9arXFU4a4x5r6Z05JeML7%2B0q38FiaN8ftjAwHknswwFy7opOm47YWmJf8RXTm%2B38t1QAvfi7U%2B6B2GtpUiQO30PfUyAxy1epZLZ7e8EZT99dgAksQm0AD8cZRbN4lot42nVO2dOC%2F9xm15zGRtTJa2yerSem5crFtx3F8l1STR4KaMgYh%2FmB5UQL5gG%2F2%2BOGUora3NObw6uRg7Ne72eZYy%2Bl3KYedP0uMgcrJlZK9yYCg2XP4OD3nb9BdnkKwre7uk%2FXs4dHWPn1dyflEZU%2FbF8A19n%2FVFJeVmr1VeUgJdh5vJV4%2F699ImlNjkc7L08wwHv1c2SN6NWcoR%2F%2BUVQBsZmubG1OcvMK457nFNLQCTeO3bp%2B2SY0x0d%2Fic6moDl6QZgMPJ1Ue0yIyMJn3v8kGOqUBoIwResd0tdPBxhyniHuDJCyjqxLAdGyJs1BdvZhrAxdLM53VbXx1sG69KUxjZZVtN6FywL83EazE8cliHrgn4mpf0a5aoA4D2cfq3ahvi7ipVOo2xXKUC9sHZsocog8h3Y%2FtK3sq1Cy%2B54da7dhEpAIeDcl3ZHeK%2BzgeTRGooA69yvg6a0N3AQGYqK0M9cCwiZZn8TtWYTimNICWziLODuE8amEb&X-Amz-Signature=4098ca6fbe906a0e32f982651a0aa1234197642a4b33c8b54436c607343679b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

