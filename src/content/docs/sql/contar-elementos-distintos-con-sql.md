---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3WIGPC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCya7cdYIONBVXYG2pD0yYto1L7KAxCxPI%2BKphnBv1higIgD1Iw8z1F4t3y1tumz%2FP3Kz4i5%2F2ieqQ2Y1ahIKM6Ng8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAV67TtjCKm4Zs6lmCrcA%2FJkLD%2B%2B1wOoIlh6qM0Se8tEiBqj9TT%2B1hjzWoVkksONvT%2BbPqVyV5vbLGcm5v1vbFIi2R0L4FxVbUNNE2l63YLkMOMAt1dKK%2BKle%2Fio8MeTuLYwdZ5NVyt9q17lcgFaQlEVLTcRwduQIfBKlHMh69gJDabpfx9417RrEHeQUcvwZb49Y6f9YEDUvEsd5bhgaHaiBBXUOqrJJFQsIgaLWe7rkFNNvgKztS4Zjldk%2BwJ%2Bma9MSL0%2BUU7zqkLMgjnKSxbflB8Pun%2B5bvQjriOVFT%2FG5NO7hL%2FaupMxB%2FCd%2BjIHh6SxCe9L7T%2BL1Iof0Hj8cpXRO%2B6MDEwvRP0Laqy7nQmUNh4aCjo5RSzGwOjE4GNXWAG9Zu%2FU4wFlE%2BI2XqSJxRYpfweg1WNH1xk7ytOTGeYyA%2Fog7TtlQpBpcH3IbMNnz%2BH2npx5ArxBhqaW1Oz0DCg79p9zcEYxdmB6iQ9plpXl5U%2FUwFrrCFs8EyHGLa2Ie9BWZlXXtv%2B9EDJCx7yT5kxyrcH0D3uAz56X8xGg7fhmyqYAXXXCEo%2BB%2B8Y3BAQF%2FNbm6CIE0yvyFu%2FEd0mQ127%2B1tHx7b%2BBMc6Rmc3HuJs6ssxYSUXauzxfu0W4dasE6VVuBodeuE32STEbMNTbxskGOqUBjW9eX1FOCG8DfYZnUBsvGXhoh3ESEhI7bW6QGtgacArex216VSiXP1w1J2Wv9Q3RvugYe712uVDFvxxKoOj%2B%2BczwioILDeBMQNf90SjpWhfXb3ATpjUzGLCQXRCMkmGAvCsNjwG6TR674A0xGphX%2FOXeyjKsFIN8fL0YoJPqiEqnNcivrxBjSUaQ1oWLAq597L1T9Id191isoTMAmH0KY4s6VMzN&X-Amz-Signature=093fa37707526f1680c028e7824c4cfb10166ee831e89117e3962e5c1faf58c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

