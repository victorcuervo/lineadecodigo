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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LUOWYGJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDgF%2FK6gevIYBSiAU%2FQf%2BHnR4paHkGcSqeg6UrCVM8jsQIgKAsbPcPM6H36%2Fb78MjQ12csfeEiyB9Glg%2FZxZWL37vcq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDDxQrLIZeeTFmKN9jircAy1uao4dBxSZPtImflfFTCujrVTqLK43syfRzTuw%2FzJitBj8xGQ5blq6j5Bhc9v7zZaM8VZgmMpal0GWoXEkJzAWX3nwa9xN4hMZK%2F2PQNtF%2BHb%2BzQb29hDzrRman%2Be5c5%2FJcQxEjaIcwkP%2BYx3qpbuzeXleV933FR095zcd7fuEeIKD%2FzpdYoqBqKD82CytIpQbVvX1NgYqifviT%2FeMasbPAgc88Ma5ea1Jd2qfqwoZn506zIlY9VZnSwac%2BiK3S3RTjBSHa9CiNNvFz7kdUfVdnznXOS%2FCpQ9ZaWJJQpJQ2WFABEm36IBaZjEHVlFLWKUcCmTMT3yJ5VtM8pYzERqIriODU0%2B56jceT9Y0gVZ%2F%2FEA%2BSyo5X%2Fm5cGCRvktxj88c83wGDA2UFYVux6pRUW0316OkpJznxAqX3Lb2UrBwqu7AsaDEi9BjeQM5TJ01pebRYWn8HKqO6rdLfhXYNUI60JYAoSWoHN5L39gFSz6pRjjZs4yjTkQ8K4x5pduZu5or8qvCNbZxGdkQ1DGMHgX6rilkx5dEmctpQH8mIB5Mw%2BlFz7KYWolmYcfMz%2FwfCl9wZzTkLq0bcsk07mPbNGZ5yFywyYhr0gpnwCmziDCQsQaRLE7ze4pev%2BpRMICHwckGOqUBBbPzSwqbXCZhPHdUviJ%2F1Amo9%2Fr153qQFz1BIIzk9iogvyrKbyQKQbjPw7BengMcJ0ydT8ndVlDhcxnUlIZpqeR5W2MnG5JC9ZOMkdIDymy2aNd18Lq%2FKZcVkXg4Vk7yPdNEWUAaWTm3svuPCqbwzU%2F7EK4e%2F3IjcupkttcuGU9mdSnjbdCGjdVhp7jcnBPziRMtaJrZO6QBTGCgjB5iUX91b3z%2F&X-Amz-Signature=f6e73c4fed2ab6f488027ac2572fb1a08a7e7b8caba3066d8a6670d4f6e5698a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

