---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP5M4C6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCtNrEfO%2B0SmGbkiMCXPZMj1DWmbvRpd5c0fVxvSW4GDQIgeI8tms1Al2Q0JUtQ0Kmh%2BjP34QtRzMnQ1aeUAjU4BfEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNFUIH2eTEdcxV5g%2FSrcA%2FRepR8kZR7K2Egd9OUJqUDDUoCLZvyydKgxhfTnH2QgupLvI0RrVxxOYZKKlAQJ9lFH4kC6WdUVxGVPIr9qjEbK4IRxl1dwkqfTEAYQ57Ln6q0nrT9D6NfoRdbCmcwD%2FScyJAVn%2FqWjvRDXH7RELJ6bTqaINSQlL0dWHoBjQtiJsGYuSf2SKbb9g9wtyhqN5cfF8mPIv3pP8TvQhsIOrwDnyrrruGeXItOvjmyKsLI7k873pf91UWYM23%2BNWg1gfSUlxjyuHxXkR5MxnFXuyFFnB0sdx8TYQFzWnikvVXPj8ajyDYlK1jW3tnZozHT7fIaleI6qQ%2FWasx0Zw7lypheexKd9UWBvyvS8Q9efT26FUk8MIHzjkb5dpAdoh3StpcyqHR6TNBKm9WHxlAuKKb8QgtkL7UqFK9sYNRwXo8gqte8FxMviRflW%2Fd0li5LwCn7EtFBVR3jiZY%2FKm85%2Fp2GE0Udph%2Bjw7Nc3RhgaeR82VrnM7cRCXCJ9zBdKzJOqrdMVljXOz1Q5cqIXnSlt3PZRFWfyzfvRbHqIObQ8AfLfwrlfwTwEHvq0HGhr1SVZ21AmIOcdaztlhZuwYPNiFqFd2a%2Bn9KVA2yp8z0ZrvbHyTe9rCrWyCSROX2KvMPOFxckGOqUBuiIm6TOr0iPC2PiRcp3%2FuJu15m0XqkOVcIAOzSi0c%2BSG5tIsi6J%2BiqQDV1bB9zf4SJQO%2BGmF1bOIACzvKrWrLN8rmfSELP0bF1XAJO3gl%2BB2RaZK1uE7jwA0dAiWTE9Y69MBVdpUTT45%2BNuJLswcnzDk0pQag8llKmv5LIBkicx8g2OpHuHOhxilVkuxc9jdsj%2FuGgxZXCMLcfolbAtiAzLQ3T7J&X-Amz-Signature=ab87ac55ea60311d607227d0834236835bf7d9573ef17010165ba50dc51d1a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

