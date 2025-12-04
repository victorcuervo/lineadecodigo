---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYVC7K7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT1R%2FhIERCErqtlDhJTGNza6mb%2BeQmRcSCvdHPLXRChAiA6Z%2FbQ8CwXgZl99HDoWY9Lb9UVbeC%2FxJyTVOyHFG3SPyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7wNrCgHTftVch507KtwD6a3i7drXI7zNGm6MxGReXN%2FIoOj%2FV4rleUn%2BirjhpKW%2BoOSA3%2Bf7w4qbjvOp4y2SuBvdJAUhfpqznNE5o7vkXUKtmFP2o02k5Ib%2FJtvflbrYyBcCq3mQGXUwQ4kv%2BEBw3KjuLMdx0eGC7pCAvuwTfjj0PG26WHE84BCrEplc4yXMkmxdPij0wRc1KsUXu%2Bnd%2BpEKH7grX1swkWnoZesQDXDFXU%2BWaUg%2FLxdt%2FHBvZOLo0UE1H8MShpISpjdg85GmZdDbCxChDAaliXIfQh6aqdTuLp4iKBCMm8XIX31vL0fEJVDfCAG%2B3ifeA6CY3Dpb57dKCmkn7UbpeFz48hCNtuLlDg8R226OPwezaqItBRKOJXlO5KqCXgvpkZ9U2dMRDxYuT5hPbR5Ao6VFHYBvxwPEzt4lz4zQhiTqdQPrwyMxENUXrgmP4oZtYX6YPXuhF%2F24OJS5FmA1IWnwYDeeh3BwWL%2F8%2FjURD0vuUQN2D6KEeC8o0uaDHb1wYKTdCdHVyiUdx1dzw%2BJ85ckhxH6rrd4g2uothZhqArNivFm4m5Y8EfhcQeKPkHnIXHOKryLfVbrVPk0uwR3tQ%2FOvtsvYw8mkiLfYi9oVwmp8aHCYUVU%2F%2BnPy4P0S9GTWMFMwnPrGyQY6pgEgzF27TTiZL9hJkdmlnFGg%2BiymubTr6el%2F4nBZ8NtG5BqQ8x%2BdHOofby%2F9M%2BAajFOuqTTJ9AtHoZJ%2Bp9h7C6m8umYIuAtc5GG3J6XyeVTHaEGF3bjwzhyrfuX38WlqPybYmdbSGtsUy7aci9nYtZgaav9yVNJThmkIKNFhePvpXHUjt%2FBOEZF4vtEahuHlfPQANa9A2KkvKl%2BYXuOo1op9LRCdX87n&X-Amz-Signature=a03f2103c3ce3706ce01ae0fbf65af0bdd7004d6f724867eff4540daabb6fbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

