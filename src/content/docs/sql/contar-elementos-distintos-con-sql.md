---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EMUPDQH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEOnbNFnEahH5RD33m1IjryZnVadQE5ChYmg5w5Numf9AiEAl0rDVEmzI4zSI6FHcuwY0jrmdH2h2R5amhSdGqDPOUwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDE6ZeOsgBLho4v0BxCrcA5bwRZKImLnxKQ3TpghxVnMI3v3i9MKN4PJYIIKiJaiclO%2FAZohZWSXLciI6%2F8HWnvYHaVNkXcQhBIYYUZ7RZS2ROe11tmnF7I3FUNnfizOoonmf5kvtk1Lf9trDqJFSTtRyOIsMUx%2Fr7RLde%2BtgqejsMfTp75LTsK%2B3SY1yeNYjQgB84ZnMJ1FV3VjESVKP8pSd7dFPE7RtLxhlxUXxLNz4sSJdOOtcKd00XzEar%2FE%2F%2BKck1ktiAeOU5LAb4I6B%2BDLv4%2FG6ClgolHhjddWKdZyv%2FXF204iA6hceUoJ9ntH6Rjj07LfGrrhU7VUi8kdGcPgklhVEDRiYyxIne4o4NwMorgQp0mYt3JNkjPisrSIl3uOLEojjCnTwMQxbxgvzwNJsBt%2BGMZtlOElOW8hNs24r3kDMIpUdPX4FwNiNiXO6nAy0DG8cDviUDAfVu8ylpF8L6jYbG4rlWzSps5pO2lJe0N0e1iwV%2BOXuHpkR0rTLKT9THhB1rFyBwkoYIecdpgDK51w12FwNsN43Tj2LVIX65iJqwnICeSjIabQQDy%2FBFtf5qRdHvw4P0Aot882WUq%2F4qgtRHGrYGh%2FGWbYoc%2FmRPb9wG0%2F1V2YmVYf%2FvQfX19tRKprfGqQs8RswMJ7zw8kGOqUBrcPXS4b6bp1sv21nCftqtE8J%2FmuhVx5%2BLp40ewnVJUCI3rWFyk2U77F%2B%2BYDFZ8owtdASTYHXcPssxBQY%2BV%2BYn1tyWjv8GuhbpQhv2U%2FQfQbu3MOdceZqgGxhhqe1IomHDNSFSTxCodQs2KmO5NJRPQBUalt%2BPvYk3XPOA30L%2BsQbAJaEUtRm6lAuZEzYcTjxSbguMtZkTUuetp4kGaXQlfHWmXQQ&X-Amz-Signature=6ab4928a13c7e4248f74d73a5c6b216ed7845d28c64ff85e45b502cf1746b5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

