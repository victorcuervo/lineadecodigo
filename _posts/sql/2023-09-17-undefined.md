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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVQTN5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFY3d%2F0Moez%2BFvVwwjCi7A9Z2ktjIxi46WS2z%2FLttZwnAiEAnAmBha3%2FCSKIECXrhcf9US%2Be7JaqT2g2u9nODaEvkrIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDCgQxR8ELmlqOpy8fircAxgxZ7%2FPX0DNCqmlxGfMNp7%2BVt025BjXWi31GvbwjwmGOBJ8tfkq77%2BSN%2BpFyfzcztT9ovpGCFhVUtxXsTl3hhrDJLLkvcIjSi6oWR0uvGWfD27x%2Bw6yaomdRgBXj9ph21ubEptp5g29gWTt7ALRkvfPZxFU9lPmwtz73KDTcB3RXPVJSaKxytYons6NzMLfKjwfOyWTFZ6CK3jRr6kMYllB3Afplet2kKtq93jX2imwFCKEuixiXzO1g0V8c%2FO9rzC7zRCT7809CijkVc9vCE9lO%2BnzpGWx61kiQp2EvtrlMQdpPIW%2FETh%2BqIvcTM55S%2F3BXNkoGDG5lVQIoShbBO3O9%2BAwVkJVnLOInryRb2cK%2FUQbm6XIwgwTKQR2pDVsqOMFMxHARCYZYf9NA%2FF0R0P6EHA3ZawCOEwj6DDET%2BXhS9dg6rYTN2WX3XHPs69l%2Fy80NDyGSDbfbDXK5dceYcsnPP0rkDRFCjF%2FGFdYqhYeXKnld6j5gfvq3RBoCJQ8OIVtectkXOKscirtnNMjArRMysPVF826ZL38bNn1F55SM9f5rz1WCscbHbBTtw7BuoKT2TRKIfcpYkGFySK8fKOUAu%2Bx375MQJeXqpowCPDXCfBe0ajOBY7bQOqnMJWuwMkGOqUBLDrLb5ieEGXUHsvuYuDDB08Ew8tQ41NcEQxzdR%2FkWeYDDBpgzoy7op4dWksqQl2Sp8LBHtGfaz624d90yWqXm%2FMsnjnmkdRlMibmFG2vy2%2BHU4C0ngbu0eyr0J1wab%2B4%2B47EWOAZSMWh8UPyV2iGZz0CGmXRfVUk6ph3mNnTPG%2Fz6gt1X5oHO21uqm%2FOt4ZPUGh0m2KexTl%2BTRVZHWuQkZO%2BC9%2FJ&X-Amz-Signature=6d67d8b4b95bdc2c2b273269c2eaacb693a44474cda786c6eb4c7455483dbd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

