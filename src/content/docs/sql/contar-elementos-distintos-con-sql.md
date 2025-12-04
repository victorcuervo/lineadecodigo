---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2EIOXV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHXykJWlNbF5kMgkCeymOPI9gXX2kzai4VcQeqXRIPDcAiBsVdwLTEO37uCUa6Wah2N1hdDGmfFKQsK6GrjSLpAPlCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMcWFgZ7Vu62oZxGEIKtwDUuueqwhFp2%2FXqEhGvAODI1%2B%2F0cTeaNdUzubrhWN75VB0w2WbVqDsDNodwBwWHJ3xhp1SS3APbv4oRfyMCyJsEFZgF74jVdAfmMLRdi5gtz0X6zyGanGbVh0PLD0wECW3JQ6g%2BN5bROtwwrjXVToVO2MV8KgdmOZL0SII0Y94YvK3TcULSyXP1k0eFe6vPIMUMIXP8t0%2Fi4wHX7hJSDyotbnTsvGw2bfDIuYvy8ZPk43afR13P7eJ%2Bj6rW%2FktjWLnPaKpcnOgYXx%2FKQLLIbREAPWnt2y5TfxCwGHD74ABfJfxn4C8Q7BPZTmzCM1492DMb9mvqARSb%2F9Wmwi%2FagsxEbKrIae7s%2FpTedXEbSOsroXsBIaNyK8k2j9ZRWQvHSEt1VX83QNTlDLHRWDOEluY02gRD%2FGHXbV%2BtQX9X8wapBNNbUE7PJYiY7OJNqjSewxyg8waPQxcC7IKvre%2FFtFgGZcXPGn8ojyTu45gucz%2Fe3ONxqkHBno0Gv6%2F5ziwdNiZUwBKcUTsA0pq2rjVESDEwRuaxIZU2iyDS8zR2LmUlbH7aZGY2KLHkD9zQXI188qIdWovyZzE%2BWxKfQgsgIH3zghsbsV3ZKC%2B7cBsOXdisLHQjsQN7ZCrKmX3ABYw8cvEyQY6pgEHqh9ttQAmu7J6fTfhE6DrJSWijXLJHMqww7gDrp%2Fmk7Onq3pmAOdAOVWSQKdl%2BfdqFPYFO5aXsGOPtf0YeoYJZxI0NEQDeCwHh%2BI4rzVYl9CmvoDymZjQybqwt%2BLnapB5pqmt1XHzDTGf9rA%2F7ygX2U1dewfR84M8ycsMQJHZqSaMYjPij3Gsn%2FZFXJiT6KwewAOwfIVDIczFNQum1WGfbE8TRKHG&X-Amz-Signature=98978607d876cbfd76e281debaba63e9857aedd93fb60f37dab95d18653cb947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

