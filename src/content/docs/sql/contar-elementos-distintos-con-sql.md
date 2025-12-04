---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE7ISYCV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQD6rHYJldX%2FGqX8tkF7XQlIZsGqhExNj9ksReHLdofyCQIhAMGtfLo%2B17cNcdecf9YtQyHXIXBjpOgtL0ndtejwKowoKv8DCEgQABoMNjM3NDIzMTgzODA1Igz11zf6YDWdS10SDpoq3ANo1g5fk3c19yg9y2SzKo0HITYZJYnUuqSYh%2Bd2flM2CFW5dx8bIt1ITrsVbnrfL5ahaHo3yH%2Frs9Dkmgp1RHKmDqNfvHybKZW4K9gQueKwRpwGOWwk16JXUwHBynwkhtIJbOxHUAFyGaggnR2VL1WvvzZL1JOyMC%2BPCQYHPjim3vD6HDJogfQVRmTDoaXUagcLnfRzqlzLYgjruiH0i8MnX4p3HfHplYciHa8IlONMSUfriP3OcoLjYiJakJ%2B8PwiqA6GOxFJ9DbF7TX%2FHqAoC%2F3WFglloTLaWAKHvJ5ruaXD7OQrfyff9NJiF0v9nFL1wI7VtYuhqSABAfTnIQz9mpZRN5VGm4%2F3EF7v9A5yE9wO4S7DJh8ohGVs7iV4GI1aOmIlU4pLQFi3AqWn15ZZzY6DRmnrvRSkAfssdMl8kXInD1izW%2BVgBe3CesJD5RS0Q3UY%2FDUXg%2FmZdMgPYWG7EIwfM%2FS5DdmzuRk9k3aHATZ2VGa1g37ZIPFhl03Qdz4PFAZ55%2BX8JoCQQ14AW13RMyYPGEKyX1z%2B4mQv0vvDvDDjejtGfUUpBJ0AnxJv0kFAD4nJm3WJ%2FWmDU1mD1ClAVFCEcvOjQ0bYxW2lzC8VEA3mY6p752IVAplR8STDHvsbJBjqkAalfYNphtqwB6IxkCSlc4iBzE7fphBKCau4211me5VsJgRZb5QhGm374nvMNBE8MODpGWn5Q1k%2BzD1jymaXfvWPCWOGyHvygaqy9VysYp%2Fh%2F6%2BJCZxIQK6NedfwXJGL3d5DoPwBtavICh03oVS3GqLpq%2BDwvTxWOnbDtkv7rzib4J8Lq2rpZV%2Fbs%2BoANFb%2BRzoW3gPqC%2FD4XBNKTP32VNSqYV8ca&X-Amz-Signature=cf02f20f3f6801a4996882ac8fc4df70a4528507bbbf13425200e50a72ec1702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

