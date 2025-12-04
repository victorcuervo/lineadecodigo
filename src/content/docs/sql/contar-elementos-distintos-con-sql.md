---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AX25RCM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC45Jae%2F%2FGZVqDDxtYeD90kTSivqovCNcJDvm9La0yVwAIhANk4ono%2Fjubl2CGhEEw797xcm7%2Fvedyysczhd4gWgydDKv8DCD4QABoMNjM3NDIzMTgzODA1Igz2YxweDk7lN33D%2BMUq3AOc798HdIlYnyDTYPuw9Snc3bOdqGDu0h6UTNeQxvY4%2FucW9zu%2BJipnQjzbpbgx%2BqMuLaguvkcVEDfEtSL9VrvURr1AV7Z7kpVZPXCLRmv1EbZRuk3yoZmsp7LFxjNDTv68E%2FL8SQj%2FeoThDLm3N4dbOUhGw6fSJzaGEOZS9W3pAqeYAN%2FBylwAMIWYM30UEVtfqvga7XNZXTp%2F%2FuMhnJzCsp9ep%2BGIPo8z2gK%2Fa4x%2B7%2BdyIfpXClJMSZ2AD75GM7EQSBEGeF9urhUNA2iEEhLHomz2O5w88Ho1ln2we7ELh2ORswUljgmitRwIcuy8nkGQW5%2BffwDCR1BYEDu%2FKRkLu4%2BjSbrTte3ac%2BmP0L8fddJbYS9XNf%2FVdC2HONSpZQe0Z5%2B4dXdWtdd%2Bp7xAvUbOMGl5B67y1DG0urbk56iZnJBaExaHz6bdrQ0wYtCbBgRxd1uNgHQoZe9BX9nHxZg7hIWu0y2dajmkMj7kV4nNAwq%2Fq1zHAFWVLrTYMcMksXyncN3pNkfymibQby9mWjW44oc9ath6LD7NtL9tY8TnxuGX5YlOIQmpxvQ064pRKqlJOWwBB4CyEKpDHoyO%2BKMcT%2FTfJkzWqL2gidqWr1BYCPjY5IHIoyo9Xw6lwDDmrsTJBjqkAT0Zi7pd0xt0Y0rg8MN%2BneZA9vWd7z5RHFOXZmkk%2F2J65dzCg%2FvnexNNNzLXL3p1e2XnQRwl9k7zYhGBnYZIz%2BTUAF1UYn%2BzMXC5dgWvZhjp2EIDE61jEGEqiTtwLpFfzatwo3mNyjic1nXHdLh%2B%2BmitDmti4%2BwxyI%2BHZ0a9kvcfyVUgl7GdRVjhHLG03yxk%2F%2FQpDLnAN1b7x9gOG6ZH9jxHolVG&X-Amz-Signature=da8dff7dbf6a4ea6edcbddce679f86ef1a4dbf6b67c2164cb1b1caa87979e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

