---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6TC6NW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICzDyPUDRAI419EaYrfvVGC%2FSZ6zKwPi9Z%2BVeGgQOkNqAiEA%2BjrTSyBTimRHGshjsdFfBFu71eR3VsyETwgMR2mdOoEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGYAtw%2FN1Tdvvhb8USrcA0v7ueNFy8IToPFKILHuJ28RBf2yoPi72ZfYIZFKKFU9eJ2BqV1jyP7YkKe2Z%2FIvWE713tohvcOJA55KZ0IriBeOOkycPIjFiVUBZ5YA5MQve2ngizRZ8cqRAA%2BMlztNhGL1CPrd47eh8%2F8yLISmmp%2BUTE6uvYh%2FxHZSxQl5%2BNIodCqDScq5uRONOvkXsCAjjqe%2BNUPzm8WN7g%2BM99WXSqDy5XiXWVlycJKnWT3FiqtOCN0Mu89c%2FEQlJgcknW9uNK7WKyYJrY3FyHUo%2Ft2B2ixJf6pcCdCgKMvwpOtaJoRe9YPDh8hOyvbRWNhGoogDA8aql6SsIrlWO4fAszmMcw9lBTCw9igOvQgnvfoRiNre9Rr36iWLNS8dgxZxzrMZMEsanQhifoD%2BfMZqhY0ScuQpwxa1%2BImv1UqhWhpgrJkUZcRy2oAhxluCS2t05IAYdAmA71oPpwi006VnZ4R2aXdAHEXhglCuP01bIS8WEzT4QVSIeD4tWX5C1lwl08dxP9DZW9E2uYme7bznYpjiaKPRYnJdAWnQkyTSdvoBtDymZDQZigI738v7ZLhpEL2OmpEbV1akJPWagYltDvE4AbdVcHsT%2Ba5wsSFKDgnKqj99UkaAz06f6B9KMh0CMN6UvskGOqUBB66KJh3F5eWNS5dmPftU8vvx9HkNuWLZwz7BTt0xCtBKQnjYB83ncGk6d71C7pa%2B9pzcmWjTQI4sYBdAe3m2vpZolQjJrCzUoMsDE1XtkG0zk5OEH4nHgsdtKqXc8clXwplMvlT4aDAfMbhp9fe%2FacWuyg36Tu%2BYoiqoa%2BHmKv9z3FasbyH8RKI22qUBP82Tw%2F7B5REZF81BR8tw2u9dHBBt%2B0Jo&X-Amz-Signature=1cec12633dafe0c1b3f0224a0cb5f777f8f1475bf6004bf6799ebab9f4305cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

