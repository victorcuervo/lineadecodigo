---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWHGW5EI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEIvh%2F4oGYl0%2FUS8WDeZboY4e8hJoz7M6am1J4Pi9Sw1AiASquO1NhrGZMtDLrNdA2cylE6ZIBs7dMk1Sn11Ki502Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMnxqI8ivCCfmvaUrxKtwDy5D%2F6DXJ%2Bs6l1Zxg1hSjEN89ZSoN7unkGHkMe%2FUDb%2B3Pt7wffmyGvY0N1vwYSu%2BLhpaN5h8ZVFSvv086u1QdssmaLJ8Cvx6IDW%2BYpMFdvvqJTjpcqmXJ9pomZGBztKJSj%2FvuKQE2jeunHHSTUKTrbZohdEV%2BaRCBc9jHLZEe5SPB9OOnsNtkIg0ZFG7B21J4fnFb2EMabWL0HO7qNKO%2BzrefMnmZaUz2rd6WqHx%2FWxKFU2els%2B%2BVpjWFse3ofzm6Z3qenyQcUgD9hm92I%2FWlUT8v%2FfJ8EaWjZ%2BVIi5lqSN4jAOaCreJcJnu0Yx2I48lpASgp%2BegEzrQSXGaJ1oinmLoNlRNYmn7XCABPcH1iADOY4vjRAhBwzDU8RzFYgcnrIg3lpkSqyVQYqSuYI7SM5Bg3XoW52qJWCn2Gfm8lU2mKat1YxthGoYbBjY2QXcjn3Q1NlN0%2BMbnD7J08lr4hGFBVrTiiC5%2F%2B85ZIJB3U8e5Zzhiaiu%2BcKxCac8jXJt7xQPPJPsIRGAL9e7NxEYqN7Bi2zM6%2BBjiGYyOR1y12AL%2FB5i5tV8YQF24LOahEuKt1fB6%2BfEH6BsOP6o1%2FRvwV8vmayYestbQjGlTEqt8PQalvbFNfyjmivx1qi%2Fcw%2BavFyQY6pgG9eI7r5VGKGTWl%2FEd9MmY56ICyNBgErErIz3O8ja%2FvSL7XP2GMMpzmgsmulFBljO8cf97eqbsTmPzbRGdd%2BsW6Q1xjY2T29Jl0%2F0mqOZuWPw%2FhRfylLcnZYhmvb%2BvWHdc8qbgIECLOvpYeAGY9QYMOK%2F1oFoakFk6Pe59A4HObHYn3262JHveXizBFmSFuxq5oY77O7e9oe18cX3eEV3XXJNW%2BflX9&X-Amz-Signature=6aed8df9e76c41fc94d6b3b1da76a27927ecd25a6193220cc8bcde4d6b318e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

