---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKD2DZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICfCSDTCYL9C5%2BqFrOCAyysMUtnEVEWZ4vKF1zeb5l%2BeAiA2XiA87cuiq%2BjzJ0C6oVz9c1MKU8J7xWdAG617ST8DIir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMLHDHsLLXHB6%2BGD7FKtwDT%2Fs9SdIpPpdqJZPcLsjwkGToRWS77wfX7S%2BcgYmpN9DMXJ6eEU8T3MXzfWOr59d7lYgWsnU8PznKcinweDXFqmzmy6Zw9hLShKwB4AQnAUvR7op71Z6Kql6cMNFIJZliWS2JP5dwXetgqWNM1IMyKe03w3%2BJ2bo6O9nIuJ1uHYGVH%2FFlXWCNF9Yj56F%2BDvP6y6VdEQQd5Bs9F1Au8HADAg%2B7GgEzvRQrWRd%2F7CZEqBY93j7I2z3f0gpC61W1t%2FZHCR1sU245XWSg9yExz939fhkcK1ROwYIcTBRt1HEXOJftr0Nj7XqGLNN96YX%2BF5As1YsVCg0vdlBh6%2FCkvppkBwWNBW0Ko4UX9Rb3CDODJhxuKn8%2FN3mgHge0lgQUDiHVqgFudo4bM7mTWAJTrHUWVzOdPp0a7mgXS3NzUWk2raXa2O7F2%2BspvhYrOqYdY8F4Of5oQCCzt3mOj7pE1l4hfCgT9pwDyKzK46Qs2f3v5Kfi4JUhUYtizXpFWRBKejw%2FzYLoHImbqnU3F8leEz6CERL4BLoO1rrFaLtO%2BqQBUyNdEmY6ToRmNa798DV%2B5isQgUK78tpPrTusJQDJ95TmZstzF3Xec6tBwAiMyJE6b2XMWEbCi8QtWZDTbeowsebFyQY6pgFX%2B6%2BPIFv8VJFEknqA5qJiYLcc%2BjJOJH8utk7HtvPCDNMYWHNl6ppCSM8NJkUfzfmd9e8svp1NzJ9HLLNFCrr5bWgmGSQ95DiG2IXu4ztqZVoV39mNkTAMPawacWdTk36toN19UwRmHK4IS%2BlUypsqrs%2Bo1lQ%2BoTD3tNT1h4fbFm%2BwTZC6wNRAle9wr1MAn%2BhXCumNVbza1ixZUz48wSmCY7CURZP0&X-Amz-Signature=bc1da85f7ab74fe02ce915d6bb52070decb2143d92ab140fd1ec8a667ab6afb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

