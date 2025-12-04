---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JUGVO6T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCdgsxEgYtlsXEyT%2FCF2Qa2Gs0XM6JgYg30H3z0AF6uOQIgXFARPvRTJG0qulsoKvgVuOzVWuMCi9od6kDrab7fBW4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOEoVQ1scE%2BEYejhtyrcA3m3AaK%2F2pyzOhQWycC14kemYLjMEBNE2%2B8ytUhfVqOSrrSsz%2FWERHId2ipbyopD0GfbBAxrQRi8RRIp6M5McNJZ82Bsu1LcsJxND59B%2F9nBl3tS5EWIEeViA4Fg9A5jORhZDDjOJbJB5yNxsRX%2FTPS2ds3w4udm2D26EiH%2FMr35ewtLYnNqCrYMc10MB29bFOsVcnxFXHr0dBhj0xm2%2F0ul543JPQfCmVvDojalXzTkPsLjjhGRmndjEWVcTxEb3LhIRdgBxO%2F2xSnNa%2FiAKDMHExq0x8IVros9uNcSrgqG5e%2FEUrbjPl6CUL%2BpjECytCjSfGQzfBbEOp130crYwVwhT0WH6fLa8%2FtEtkpnVqgBSHXFcgwX%2FQj8SIqaCMTwAH0ryxbT5i1WJ11a7YOgK3T6%2FJjT9Hf1XpVtdX8smYgd2%2B4AF6rUVQStaHkGFWukVj%2FGNOJCwiEXGSPimBzjHGwXPSs45xnAwVPb1%2BFucirD2A%2BF9Wdr3V%2FAFSp8695o28rIAf9hgc74inDGimqeqHYdbyphYDZJpu4SI3cwdgD0YV8rY5EAeDu6ziQZADeS1mkGsSiCXHA%2FdCVpKcpa2EWBhJ6naAtoayvBLyD2%2BreivvqsEYzOFcADaWjqMNuExskGOqUBrnXtGXW%2BIsLAM%2BNvjhkaeoh9ROFUPOB2E3qLL8UMHAiuxAmZSBQyy2pj0FLBBFxmjIG3F1AgIWb18z0zDkRnDz3cn2MH%2BKiVdV4nUYKdtytMxwxclKm8nYQqWygsXeZCDpvdl%2Frao7YH23RsNjG%2FqKqx7TEg4QaRHE9ZqUrGGLS%2FnqtcpVYAL597nGwU%2BGj8G4DjOXzWWod%2BeA9rWXlov8QF4LCu&X-Amz-Signature=b78fed29fc7e4e4586126812dcd600e7a48adf3409f54509776e983c63d10169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

