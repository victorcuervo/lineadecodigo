---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNM23VNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDOFUdc9NHLN8cdzphUZLRAoviHJja%2B8Tctx9xhFNY9sAIhALQHZnyJrhcGZbmHSyweSHzlbXKeDvSFX1UF0wl4Kj2cKv8DCEEQABoMNjM3NDIzMTgzODA1IgzdgC3SkBhc4tUrdTAq3AM06JBQR%2FGb4Bhhw80JkfUs65vEk4fec2yR1X5Fm5DydMXU163RMRmmvvLKFXe3Hn8bjL5AJ4INPD7gunuSqpslf0WYKneuFUPsX%2BxXQtRSAYO6LlzDori%2BaTiuK%2FDIo92JyzR0Pdu%2BXUR2s7TPzZBNzX5VTzx4UoArwjKYuMQgMPu13dYXYIJbdo4wC1OkG%2B7HPoECactGq7HHvAvwObRcrAZjJqMjf47xXOmTlWdsk01vdH3B4iv0Y6PqmXgyv6J7Mg8gjSTrduyfz%2BTtmvMNJo%2F8u2fPFkT9WAf9hm91vKcyEjLS2nBnZ3JE4luRygjqsg7SbKrkTbKFUwSxVH6m7CZmv7QWhoMTHoB4Oz0QKmnwsNPYgvtwlgrFHOnLpAJWW3cj8wWz%2Bm%2FkzCUWyXH1PMN4RTb1p8KpapwU92WMpX4tMhpp%2FdKCFr39VChGCzetnWJJA3XY%2B%2FmGbNk7c6c7jImh02E60i%2BONkB48dS5MxTWk5YKEpRdmMWSJYYo01y5JEgaHzUqrwAWYWe67zll9MCG4y8VL9bBpXf3IrRm8Ai%2F1w6oGtyHAdjNYXphZ77bQv2xb1alolUsq8MjeT%2Ba3vj76BtOD3hmyu3FX9my%2BxtbmX%2Fyaz1qK6eUzjCHhcXJBjqkAaGcvcv9GNdxmOkx3Gkwwl1FL%2BuuxgrfaMH2S8Z85otH9H6G1kXghR2fWKHfEg55Eu8ZpppIZT8f44pU7QQmxVmgyITQl%2FRBpu67SMsVWVAoxmXNPJEX69kcHBHTeUF5EYkj0Td%2F4alIOySRmnED%2Bs2vN2ytBIyxRCENvgT53E3X8vCEaKGaqUdwrhv40nJ%2FhbXuuNWijAg49AW4w1RWHR6H61%2F0&X-Amz-Signature=c5c41b27d31e1fed66e5d50cd847e6f863f338371df07d3d249bb7a07595de56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

