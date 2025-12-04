---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MS72XGH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHV4QEr6FYkRymzVnJg8GnU4%2B2rEBYMLkq9EBuoddFoQIgeX3IyV6KoHkoAdO8SG55oT5TA%2FesdJA6WninK2xrZmUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPWmi7tF5KU1S2vz4ircA4k1sWlJh9BszBNH4rNjP4F9zqbJkcbMn%2BPM7k2tdAQwHXHxQd3oXYt7DiiElOd3sBosZ0pc82F7YnWtNfmic6r5hbbs2V52QwBWZkMZpatmK8wKGbkpysNNPwUHbzS7BiTmapXMJqSBxv7g5osLW3TCn4jkVERaqZaEGoLD%2BCl0Vwbt%2BGE5hEwZ2cE7t%2BscqBZwNGUzYfC%2BJj%2FnmUQEz%2BrT0O0P%2B82JxlsWgqEszRkX8bGnkIefnRgMG0CjtWohn5iR%2BOP9mRv2Hlew%2FkAVOhDlYLXbUviuixpkAPvvojr8cVtkN9fVnpFNyr9jKNbX4jHZ6LsYHCBOQ6zxiCnOIgaPmRp4%2BZ%2ByR2WO9tEzM5CSHxWU%2B4M5NqbQXMV4L350wxSuLzCMLH2Q1ME%2FVAmNdnb%2BsEbbva%2BtpsbITeQSahsTFpKAYib5HhGgWcoFlzM30kLjRX7WpCXZJibjI3kjOGMv91C1tznNRJo8CclJHOKs6CjVS4X0p6QwHQ4O0B6Nxl5wKuUr6aHq4diB%2F4iIuWMCQYV5Wn%2B6YLjcj0JoyQ2lmP0K0mWBRlJIg51o%2Bg8v4P6FEB7xz3DLKwjDZ2NxCslhso2Se0%2FXspzOanKEncoTS3raRfewHrQodE8dMIn6xskGOqUB0%2FDVSMHKc4IbPqz1xo1Yvnlyvtz7I3dpspe9j2vKRXZ%2BZVshrFMA4fimgc0KUZgcFEzkpypJ54D7jApLcX7RMrQTwFGSqOoSI6CBcOg37ZXLditceeM%2FrvE%2FoLqnuvhV3ARFs6c8B8dl2FSFhMlxNjJ1IxGF1XhZlFQ436a1rOpbRqTUyduNtQ3E9Zs7Xru9%2FnxidIPuE4CVsyiIz%2BewcXWH2lCo&X-Amz-Signature=b37943408c64bec0f261319bc132e093f7f4562809570f9c360853cae9d10a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

