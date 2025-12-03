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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KL2NQL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDeGlOT220xOzb%2FVVPhLH3MNNKqbTnS%2B0AOyVn%2FtL7JRAiAtCEBEvf69vvwIrYqp3T2%2FOfc42Nx4mYKRDriK%2F%2B4UqSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQ5nMHklTFAbA1JM7KtwDHyUDsa8O8ZH4%2B6NLVOiGn%2BZF6yADROSjIbNojbkVCcjCPMcRocZ61mfWDvl3El8J9vzS1VFHlRD0xiLhEXyYhsi1xLYYpFVNjowmkn5i8RRSf4Rtqz5o9aHpOs8QK6kHut7y5r%2F9sowBscyUhjyrqdvRK6pQf6Jtfg%2BEnSDN7U4SVFXSDybsN%2BC%2Fm9yhXWGOolDcfZcYLzXyJYCoFxw5Adg71%2BGEoCopAx%2BrS7VDhk8IOb%2FDQTSccSsiK6r4AGJOKPUrvxJQ%2BACzt4GIad3i6Obr2nH%2Bb1rOc5FfDq2Jbr1to0tajn7oBlly21oV02%2FsLugunFBQ6ekeY6kl4uBkzsGGKkBehaR8K9NPgulEvlDChhfqv7MoarXDgzma%2BFv7ocNHud9hRmDmoAKLPyvnignGX4JMI%2F%2FYnCAIYV%2FA7eu28gHrksznPi0UQb3wsANKGoNnlc3MQKI6%2FJnRmzMXTKTXGHuKgPIM7Gp%2B9cuUEOaA1%2BnzXXtae0wYfroMiVjKAEjTzco8Yb5yVF8PfYGq4Aj1xWkIj5TH0mcFZoU7mApb2OMVqayfSdDRhLnhhoK95TmzrYOJD0Km3WEjnxn%2FAz4t%2FyjdgW3Y6kHTf5tb8rpOnBopCfVgUAx7%2F54w%2FZS%2ByQY6pgESW9h%2FRa6mNfNbEhoW8UhEyS9jARIjk3UPrCxZTtSe8dhSGRpKunWbQ0r2M69BlHVs0DmCsGmwO2J55epfjEw48P6q80CLrArKK3U0MrvrHph%2BbUyPVeT0Wy9UnstFZXINZRU6gUQRGxTsgq3OP9PFRYispMckf%2B6svky9zah5TsxwzSdHN71LR5Ezewcg3Pwh5EAg0zEIGSnrO7jDboLlun3JMmwQ&X-Amz-Signature=48e46235ce650ecd21d69c050f0896fa64a3013df78b72e75a02cce8a29bbf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

