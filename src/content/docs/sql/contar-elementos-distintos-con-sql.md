---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBFXPO4G%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCERGWuU7PmFbUeFxu1WRe3U1tnHklIC2HWJdvlxK%2B2mQIhALpGvfOb8aI5eqCtKmskT%2B2sZn%2FcuzThSEh6xaxPwBG0Kv8DCEEQABoMNjM3NDIzMTgzODA1IgwYv3OIg%2BGzLVgGhmkq3AOfYs8r18zq5mscfGFzTMLjwE2GiHkkDN3jxfLksvsPxeeN1shfInhmDpku0Nyqeuxsp0mJuy%2FIEk0koOmFPqZ3gT72V6J7g56xz42WvsmahLYfv1cLlydFEV%2B91ZgRGJcjbDYwXrx1D8K9qXsNUnWf8XCmpdVW0gupM7NHdxSfSsJh928hvXLXRk1ahfYk26uqp8frYPEusFx4uWZC2OVfVsYEp9MkHkO%2FLi9vEyy0X4GUsXBm9R69dz6iQb7SjyGaeOvlI3QS9Kf1SLQxh09QDZpoQe3kq5k9DAuEunTXCCzJ%2Bqy%2Ff%2F62K1iKFaFvWGCMWokSexJ65B2Mep3lTOGi7jgdOcZogwRZkULYighM2el4wghqysYrP%2FbQndoBxvyIOudj65nauU%2F3T%2B5HEVCne0qhEIVdC%2FfOATZpXx8dr97Jl70B%2BcpZ%2F6a8csk8r5jlZEN7koSES4roomuUb0XBIZOQKsg9j9VltoN48gsJ6DUqKXsPnBZvfZIdi4P1GbQOa%2FYPQGt0bnF33bnqIH2T53ZyF8fGEVVn08yTg00wX1JQM1t1u37LQp5sqWMQOkcng5VzZUmaOQ4YqbUKnKwf%2Bs2Q0YaLPCI25ZevDmTaIq2FqbhsjKpKZTbLLTDmhMXJBjqkAWrlbfhpJdIfRJfBXrxjhRv09BGioADOoNN8xdE%2FKMdvqb1X5SUPwL5V911QdkK%2F1ySIcrIMMou5ig9SX0VfM7tweDT8VXl0%2FkD02FGC1gsoPiL3kkEIP0HPjF4nCD8Fn0Y%2Bgm9eSSjMO%2FO1ZAvzspN%2F45CVctAZp6QDhZCENee8IZfEYcSFWOkzTc5iVQjwnhBbzeN2EjTt%2BqWnvzoj2cdQQvKe&X-Amz-Signature=fa98070ad2cd1acbcd92aaa05c2e7054eac434a9c1287a2d8d7dbc87994ddf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

