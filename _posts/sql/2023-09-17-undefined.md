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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6S7B32D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD5NdKqoCJl%2FzmsMtxLiIcdlZWY1DGWEHqYE2Eq4y9OEgIhAIJm2FEzC5isRXMfWATCEZfB9ENJNJpaZEqj42pidLDAKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQGMfseBJoqT%2BzgToq3ANivhlwwVjSRfdpg4MtAr3Tbj%2F3vLnDkdznQhwbmyExnXSs88JnsR5s5VwZi%2BN4XWKxcwzwrn6YXK8jHrcBvLTAlP7bnNprei0OiWQDRW4WhEj5TIimw5bTRfDQ8jqtKgn7242zMJ7u%2Fco5eJ8ndYSF1rJqQa9SY91IPro7AsQZ8I%2FfUGVQrZnBbPgDEe6KoJKsgXoj5iXT2W8%2F9FUsSQC8dgXrpvXh9trj24hhrDrM29MzwXJx5JdJD56cMo7xfddmKKs99tlUaJpgcxmsX9Xl50Kn%2FvT6LZ5WgvxyscPQc6SV%2BK%2BPI2qvu9IhfAlRwF1GtbG3poYL5R8vhm51CUlvOcZ1QpmRxBtzDyIXNhDaBIoXeQdBrVC3N4A3MZSQJraf8ddLcyFzNVzTE2Q2V9GQ1DPgJzpHMv27J4yfrTNzA3FWK7uavs1qInrHPGUdAuAWIYumE0sj%2BdDjWDqjsDw3yxaUaFVARGQ7DYCV50eysEZJj7k%2FNg5Cr2m%2FiYkZ8uGuAbU88CMfgfyXtOqdVmGQ8xCB8O9W97Lq2OvrlAnDbRX6qSp0zXNAYFbyM1sGC7hfhth0ZfuuzQ%2Fyi7eR4qoThG9PnYgwTj%2F4K%2FzZa2wfUuzAg2el9FEodUthDzDjlb7JBjqkAT%2BW9YOqx0vr5PMFXz8sLCcEHZDch45espnL7Gn3bAChQ6iznvnY8UIrBNlLPJnBtdmHNRqdtS6Uryf2nUdP7klvFLfxzhjHfEM4DcB7fHjryXXuVGQ%2BytZfUz3Tr1yYjrJtfhNB7NES3Phh8O72dlF8Bl4F8AT9vkfiWsoCIpRQy3b90ifVpXhB3wXQF3AQRF%2FkcVl3kzNG5NTe%2FnAHEhp%2BtPx6&X-Amz-Signature=58d340201f3a481854be5d141f771c468bb18e4c68da5114a076245e588e991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

