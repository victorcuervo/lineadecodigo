---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7IJ2XUH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCID3Sg1XPIUvFt2ODvNSt6BVKIxg5vUFFmLav9DXQ4qM6AiAmDiTbkDwDoF56aaFOpsY2cxySA%2BLwcLzMBx0%2B%2Bo54TCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMp80UfS%2BtTR4I2oVdKtwDknHJ5XqEoZI4o7Zg%2BRTeDqfmV%2BYScy0R2U7xOwjUg%2BQTqLhGRpveSNnK%2BMY8fId7VTiqu4gprOOikWbFYnE50IrBT9I2q4Vyc6FUYyOCaGbFvWz8GmptFTZM5YmwnLkYIhmBmo5HJKysoWrp0ZJW0q9vlgofvWMX4%2FGQuKopNusDbcONL6wZ%2BtUTJXnqYa9QU%2FGTNGIGzwdYMxrJPh0juhaJD4iVoyIKrt7NgLKidJ3Wn84n0gm7j0f08eVpuKRB5VA8nMlQ6VlfZSHVF02dL6NcntPQnAkcXTbW4j476Yls8bbmNpU%2FjheeEgSe9KGlaJ8PtGBzy5%2FIPIupLhGq931orXnoKzT0bBskpJRNcqPQWCkMsAO6r%2FaktRZSwDVpz3UreT2VLZJLe30l1BQwNlIS8az9O2KdP8gWX30Qhpwpd%2BHL%2FSXsuRFoY7sU9cITqoHmwMvI4AtZfEqi7e%2F%2FlUaHF%2BrcqSGukrgNylTs9y5YOKmk2oYb8nJ8ESPyNFLIGt6HaHPnamM5t7hjniMpgYYBe6EJ%2ByqdtYtr9l5cJntPWoE5JaADWjA%2FUt8YjTbLfQU2k%2FaonDl3SoR8bHtWJxwiQBQKsSzKH9CmXZe9zDyvfFfn3kBfynnTe3Awvb7GyQY6pgEVxdYxwnF4YnOdV6UNZ6xnSn%2FlRZG2vyWsbrR%2BN81DNvyxGRwaDFB0XsTDulrAnr8kpYZG5ygZNQAhxnmxSOxN602Mfzsc%2Bl9uvwnuCQfH4K6B9aSeqBEjnxWGIppPhY%2BXlIq6LNAEDD1r0NXRf8J%2Bylm9Q%2BZLzYz86DlEOp%2BtJjMqZ5hEQQ04uJZ3TFD7mlAcbbdZ4XYv1tbP9ktpl%2F2J%2Ba97EYUo&X-Amz-Signature=de743209d9c9b5c839b64089c0def3f977d87b2c896603d1ec2fc6e3dc8b50c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

