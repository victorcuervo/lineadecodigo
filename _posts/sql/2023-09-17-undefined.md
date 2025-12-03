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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJIDKXL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIACoNl%2Fp1Pad2x61yDKZY1UXUSdCvlPEGdrU2CXUa6%2F9AiATSkNBF149B3bVHNf98SHvZX0GCjqeGFPM%2Fro19zGDiir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMmhQBXcucURthQJcDKtwDUzeJ2rwF68UNMe0w1odxMTKyDT1rl6k%2BxP17fFKCPCGnQFfSh9ImLrwI%2Fvk09%2BMXnT6E4tpsfqf5VFcR443wV9RtMNr9N6CK1arnyDzM9V1zz4cspsYZNVbX0qRu%2BrdxoSZpxuqcRPp0xbF3kftfLwJsXu4pl%2F42PDI8u6FyajdPl5%2BqKP%2FkcaUfOW87H3UAD4Wkp1fk7gc4YlJQQ8dDNqArcBtAgFNlGIOLQ1jCGOPvNBUHBYVEiT%2Bwhej2XKiSVdjaQCxrG97X5JdDd9GOU6Di1A2mgFBxTNM443ukDplrG5SsK4UnnxDjR7mbVkkuNMsLpS9Qk%2BrwBI0rREEa%2FR5lViYh662y36GFX%2BOByjG1qjqPbggh8xDGYesCNCiqm4GBv8DaYcAzk2MMT80Bcad9lbQ9Ra5FbXZUuAK7IKwovRR%2Bt65k3jq0fQo9xmy2gwJFr7sjYHQg5fuIQBH%2F37Q8JpL%2FDfymR%2F9gHZqhOh9ZOVXIHFNB1lzjW5aAvslalUn3svqyVsZA5DuMbiCWUNzx9CNgR%2Bn9q8E3Nv60umwfTitD2mYSAUMGm8aHdapMo2o3tSMlkTDaJ1%2BUGDaw8OP9t7JcPdMW8IgrflUhNFRN%2Bs%2FWeJ9pHHvlSSgwn8HByQY6pgHzGuGWmKLjflaLMqL%2FICl2Dl5C2zEi2qAq1sxm1r5%2Fn7mnJm%2F4buokTlBr%2Fb%2Bou8Og%2By17WH%2BV6vxJ%2BCrZKQDEOf%2B%2BEGjcEXuhfWxFU4SGcbevKwUBSZ8jzVqZh5k9LG%2BMjJeC2pqCFhlUA3ZVnOeciyDrSukN9IRe8zmaOgsfxqXNjDcVz24SacBNhJVkjP2kqBeVqjR9vHkYy%2BOrb45BXeF%2FvILM&X-Amz-Signature=d57e65fe3343569856339ec1e8bad9c6884db2c9a3fdd2369566398e4fa448a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

