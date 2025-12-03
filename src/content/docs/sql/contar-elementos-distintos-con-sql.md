---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWB6S4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCbT%2Fkmrp2jqlczgyFhZm0VjrJWtNEzNXIFkxT9QuLALAIhAPgjsdkaC9HgsPVn2e76aIyv1DW2fTFK84YrwmSRcmSPKv8DCDYQABoMNjM3NDIzMTgzODA1Igx5%2BDZxiD9QPacTIH8q3AOuwDcFRUwttG8hwiXRWGJ2R3diBdX6Zcwiq8JeD8%2FzbDTZ4QUzNwsGMHfDm1sHvuOcLWKK4JXb9refsyCv59PCz%2Bk4BpaQdn%2B%2BrZsHTISV2EcvJpmRJRS7z%2Ft75nKDQ2gFZVWbQLSvlxvVzjYsDMn8V4mU3xcIiuhjvQYjWDaPL5kAM7K27Z5LZentzwTGvGBffKIab0MDqt61ebUIs8JrGNFYAqbIL4mQj5nfGkLg0ctiD4ynXcVn6cnVJi41fDcPdAYj4%2FTIs6rXQ7ZMJF64LW%2Fmd7whZ%2BQQlyLA3v0zGG2K%2F9bvZrbfhIWIu0I2iREmmJ7A0FE1ALKyDDhNN%2BNogEY7e51JTD3H7OVxsJx8EGEAuQweWEPEzJD3LQSpQAsP7IXrIqVOdeUdfZWiDJI5ybwfkswUnif5CUKgB3jIsaFMgcJGoBA3lQakF2qxBZPPK0Ms1sFsdiq7%2FgeneeTEZWLDa6mNRUsCIdv9Qq%2FvzGlsgtfGVLufZ35vFBeThNJTAl%2FENYnJRCwOeW3F10fAMiYWLhM7xZcN1z6lyK38IvPk%2FVbaC1219bQOjQT%2B4Isv1VfBwT6Ft07VkqaxykCu%2BKZlVh8SaGDWjTsPL3mds3Mfh7QXlCPvnLCsMDCHvcLJBjqkAZicfRHEx9%2FWuCvbTITt64ueuGHJk5wLWoAL6U%2BF8c6FkHokG%2FICYpghWdFt9sl2osHdKMq%2FbK7a9OQk0U2V6rD5z4bgo8lCI5E5Dzfheyk9SGq9WrCcmZzZ1vJTKOYApZdMbs8lk3eqDhLVz7obPTVjPLP2AtpMPAGwsmR0Ulxsqw9iOrzmnRAX4skeMaignPFsYFv2lDFPcnmnpElG9kdlCFnp&X-Amz-Signature=0baf118bf12252875fe340a03282835d03e0821d32a4ca3fc9a30f6c0d2c1003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

